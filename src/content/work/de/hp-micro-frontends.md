---
title: Micro-Frontends auf Millionen von Geräten – in einem nativen Host
summary: Wie ich React-Micro-Frontends für die HP App entwickle und ausliefere, deren Weboberfläche in nativen Clients unter Windows, macOS, iOS und Android läuft.
company: HP Inc.
role: Senior Software Engineer
period: Mai 2025 — heute
stack: [React, TypeScript, SystemJS, Import maps, Feature flags, Jest, Playwright, GitHub Actions]
outcomes:
  - Über 12 Micro-Frontends in Produktion, auf Millionen aktiver Geräte
  - ~30 % schnellere Fehlerbehebung zwischen Teams
  - ~90 % Testabdeckung, in der CI abgesichert
  - Upgrades von React 16 auf 18 ohne Regressionen in Produktion
order: 1
draft: false
---

## Kontext

In der [HP App](https://www.hp.com/us-en/hp-app/overview.html) fügen Menschen ihre HP-Produkte hinzu und verwalten sie: Notebooks, Desktops, Monitore, Mäuse, Tastaturen und die meisten anderen Geräte, die HP herstellt. Ein Gerät lässt sich als Eigentümer registrieren oder einfach hinzufügen und dann an einem Ort verwalten. Die App läuft unter Windows, macOS, iOS und Android.

Ein großer Teil der Oberfläche besteht aus React-Micro-Frontends, die ein nativer Client zur Laufzeit lädt. Ein einzelner Bildschirm kann daher Webcode, eine Brücke zwischen JavaScript und nativem Code sowie Plattformcode umfassen, der von getrennten Android-, iOS- und Windows-Teams verantwortet wird.

Ich bin über Wipro als Senior Software Engineer dazugekommen und habe mehr als zwölf dieser Micro-Frontends in Produktion gebracht.

## Das Problem

Zwei Dinge machten die Arbeit schwierig.

**Releases mussten unabhängig bleiben.** Micro-Frontends lohnen sich nur, wenn jedes in seinem eigenen Rhythmus ausgeliefert werden kann. In einem nativen Host erfordert das Disziplin: Der Host entscheidet, was geladen wird, und jede Änderung durchläuft DEV, ITG und PROD.

**Fehler überschritten Teamgrenzen.** Wenn etwas kaputtging, konnte die Ursache in der Oberfläche, in der Brücke oder im nativen Code liegen – und jede Schicht gehörte einem anderen Team. Ohne gemeinsame Sicht darauf, was tatsächlich über die Brücke lief, bedeutete die Fehlersuche viel Hin und Her zwischen den Teams.

## Was ich gemacht habe

### Ausliefern auf SystemJS und Import Maps

Die Plattform lädt Micro-Frontends zur Laufzeit mit SystemJS und Import Maps, und die Deployment-Pipelines gab es bereits, als ich dazukam. Meine Aufgabe ist es, Micro-Frontends über sie auszuliefern: Jedes wird einzeln gebaut, versioniert und befördert. Weil der Host Module über die Import Map auflöst, bedeutet ein Vor- oder Zurückrollen, die Version zu ändern, auf die die Map zeigt – ohne den Host neu zu bauen.

### Observability, die den Datenschutz respektiert

Die Fehlersuche über Teamgrenzen hinweg war langsam, bis ich Logging an der Brücke ergänzt habe. Jetzt kann jedes Team die Konsole öffnen und das Wesentliche zu jedem API- und nativen Aufruf sehen: ob die Daten angekommen sind, ob der Aufruf abgeschlossen wurde oder wo er fehlgeschlagen ist. Sensible Daten bleiben bewusst außen vor. Zusammen mit Troubleshooting-Playbooks konnte so jedes Team schnell klären, ob ein Problem bei ihm lag, und die Fehlerbehebung zwischen Teams wurde etwa 30 % schneller.

### Debugging durch die Brücke hindurch

Manche Regressionen traten nur auf einer Plattform auf. Ich habe sie von der JavaScript-Oberfläche über die Bridge-APIs bis in die nativen C#/.NET-Bibliotheken verfolgt – dafür musste ich nativen Code lesen, um das Verhalten der Geräteverwaltung zu verstehen, nicht nur die Webseite.

### Sicherere Upgrades

Ich habe die Upgrades von React 16 auf 18 umgesetzt und die Testwerkzeuge auf Jest, React Testing Library und Playwright vereinheitlicht, bei rund 90 % Testabdeckung in GitHub Actions. Die Upgrades gingen ohne Regressionen in Produktion.

## Ergebnis

- Über 12 Micro-Frontends in Produktion auf vier Plattformen
- ~30 % schnellere Fehlerbehebung zwischen Teams
- Eine Basis von ~90 % Testabdeckung, die jede neue Arbeit halten muss

## Was ich gelernt habe

Micro-Frontends und Feature Flags waren neu für mich, als ich anfing. Die Arbeit damit hat verändert, wie ich über Auslieferung denke: kleine, unabhängige Teile, die jeweils in ihrem Rhythmus veröffentlicht und eingeschaltet werden, wenn sie fertig sind – statt eines großen Releases, das alle koordinieren müssen. Heute arbeite ich am liebsten so.
