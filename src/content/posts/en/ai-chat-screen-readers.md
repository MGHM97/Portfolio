---
title: Why your AI chat is unusable with a screen reader
description: Streaming tokens into an aria-live region sounds accessible and isn't. What goes wrong, and a sentence-level approach that fixes it.
published: 2026-11-05
tags: [accessibility, react, ai, aria-live]
draft: true
---

Every AI product now has the same interface: a text box at the bottom and an answer that types itself out, a few tokens at a time. For sighted users that streaming effect is the whole point. The response starts in a few hundred milliseconds instead of ten seconds.

For screen reader users it is often the worst part of the product.

I ran into this while building [parley-ui](https://github.com/MGHM97/parley-ui), a small set of accessible React components for AI interfaces. This post explains what goes wrong and the approach I ended up with.

## The obvious implementation

Screen readers don't watch the screen. They only speak when focus moves or when something inside a live region changes. So the first idea is to make the answer a live region:

```tsx
function Answer({ text }: { text: string }) {
  return <div aria-live="polite">{text}</div>;
}
```

`text` grows on every token, the region changes, the screen reader speaks. Done?

## What users actually hear

Live regions were designed for status messages that change now and then, like "3 items in your cart" or "Saved". A streaming answer changes ten to fifty times per second. Depending on the screen reader, the browser and the `aria-atomic` setting, that usually ends in one of three ways:

- **Fragments.** Each small update is read on its own: _"The build" … "failed because" … "the test runner could"_. It's technically complete and practically impossible to follow.
- **Repetition.** With `aria-atomic="true"`, or with readers that treat the region as a whole, every update reads the answer from the start. A five-sentence reply becomes dozens of restarts.
- **Silence, then a dump.** Some readers queue polite updates and drop the ones that arrive while they're still speaking. The user hears the beginning, then nothing, then a random later chunk.

None of these is a screen reader bug. Each one is a reasonable reaction to content that changes faster than anyone can speak it.

<!-- TODO: add what you observed yourself, e.g. "With NVDA and Chrome I heard…", "VoiceOver on macOS…". One concrete observation is worth more than this whole list. -->

## Why `aria-busy` doesn't save you

The ARIA spec has an attribute for exactly this situation: `aria-busy="true"` means "this region is being updated, wait until I'm done". In theory you set it while streaming, remove it at the end, and the reader announces the finished answer once.

In practice support is uneven, and even where it works you trade one problem for another: a long answer is announced only after it finishes, which takes away the main benefit of streaming. I still set `aria-busy` on the visible text, but I don't rely on it, and I keep the live region _outside_ that busy element, because some readers hold back updates from anything inside a busy subtree.

## A better contract: whole sentences

What a person reading aloud would do is wait for a complete thought and then say it. A sentence is a natural unit: long enough to be meaningful, short enough to arrive quickly.

So the visible text and the announced text are split:

- the screen shows every token as it arrives, exactly like before
- a separate, visually hidden live region receives **one complete sentence at a time**

The interesting part is deciding when a sentence is complete.

### Finding sentence boundaries in a moving string

A period isn't enough. Mid-stream, `"Pi is roughly 3."` looks finished, and a moment later it becomes `"Pi is roughly 3.14."`. Announcing at the first period would read _"Pi is roughly three"_, and then the next sentence would start with _"fourteen"_.

The fix is to treat punctuation as a boundary only once whitespace follows it. A stream never sends whitespace in the middle of `3.14`, so the decimal stays intact:

```ts
const SENTENCE_END = /[.!?…]+["'”’)\]]*\s+|\n{2,}/g;

export function takeAnnounceable(text: string, from: number, final: boolean) {
  if (final) {
    return { chunk: text.slice(from).trim(), next: text.length };
  }

  let end = from;
  SENTENCE_END.lastIndex = from;
  for (let match = SENTENCE_END.exec(text); match; match = SENTENCE_END.exec(text)) {
    end = match.index + match[0].length;
  }

  return { chunk: text.slice(from, end).trim(), next: end };
}
```

It takes the full text and an offset of what was already announced, and returns every complete sentence after that offset. Closing quotes and brackets stay with their sentence, and paragraph breaks count as boundaries too.

### The rules around it

The boundary detection is the easy part. Most of the bugs came from the edges:

1. **Flush on finish.** When streaming ends, whatever is left gets announced, even without final punctuation. Models don't always end with a period.
2. **Don't read the history.** Text that is already on screen when the component mounts, like earlier messages in the conversation, is not announced. Otherwise opening a chat reads the whole history aloud.
3. **Start over on a new answer.** If the text gets shorter, it's a new response, and the offset resets.
4. **Append, don't replace.** Each announcement is a new node inside the live region, with `aria-relevant="additions"`. Readers speak just the new node instead of re-reading the region.
5. **Survive StrictMode.** React runs effects twice in development. Announcing from an effect without tracking the offset in a ref would say every sentence twice.

Using it looks like this:

```tsx
<StreamingText text={partialResponse} streaming={isStreaming} />
```

You pass the accumulated text, not the latest token, and the component does the rest. If your product prefers a single announcement at the end, `announce="final"` does that, and `announce="off"` leaves it to you.

## Testing what you can't see

Unit tests cover the logic well. `onAnnounce` is a callback that receives every announcement, so a test can feed in a fake stream and assert exactly what a screen reader would be told:

```tsx
update({ text: 'The build' });
update({ text: 'The build passed. Deploying' });
update({ text: 'The build passed. Deploying now. ' });

expect(onAnnounce.mock.calls).toEqual([['The build passed.'], ['Deploying now.']]);
```

axe-core runs on every component in the test suite and in Storybook. But automated checks can't tell you whether an interface is pleasant to listen to. For that you need a real screen reader and a few minutes with your eyes closed.

<!-- TODO: describe your manual test setup (screen readers, browsers) and anything you changed after listening. -->

## It's not only the text

Streaming text is the most visible problem, but not the only one. In the same library:

- **`PromptInput`** never sends a message in the middle of an IME composition, which is how people type Japanese, Chinese or Korean. Safari fires the confirming `Enter` after `compositionend`, so checking `isComposing` alone isn't enough.
- **`ToolCall`** announces when an agent starts and finishes using a tool, once per change, and stays quiet about tool calls that are already part of the history.

Each one follows the same idea: decide what a person needs to _hear_, separately from what they need to _see_.

## Try it

The components are open source and small (about 3 KB gzipped). The [repository](https://github.com/MGHM97/parley-ui) has the code and tests, and the [live demos](https://mghm97.github.io/parley-ui/) show what is on screen next to what a screen reader hears.

If you build AI interfaces, try your own product with a screen reader this week. It takes ten minutes, and you'll probably find something worth fixing.
