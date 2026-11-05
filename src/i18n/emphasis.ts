export interface TextPart {
  text: string;
  emphasis: boolean;
}

/** Splits "I build *accessible* interfaces" into plain and emphasized parts. */
export function splitEmphasis(text: string): TextPart[] {
  return text
    .split(/(\*[^*]+\*)/)
    .filter(Boolean)
    .map((part) =>
      part.startsWith('*') && part.endsWith('*')
        ? { text: part.slice(1, -1), emphasis: true }
        : { text: part, emphasis: false },
    );
}

export function stripEmphasis(text: string) {
  return text.replace(/\*([^*]+)\*/g, '$1');
}
