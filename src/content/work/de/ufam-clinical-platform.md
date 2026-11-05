---
title: Eine klinische Forschungsplattform von Grund auf bauen
summary: Die Webplattform, auf der Ärzte, Pflegekräfte, Assistenzärzte und Medizinstudierende über 200 Patientinnen und Patienten eines Forschungsprojekts zu neurodegenerativen Erkrankungen erfassen und begleiten – und die Datenquelle für das KI-Team des Projekts.
company: UFAM
role: Lead Frontend Engineer
period: Juli 2025 — heute
stack: [React 19, TypeScript, Vite, React Hook Form, MUI X Charts, JWT]
outcomes:
  - Von Grund auf gestartet; ich leite das Frontend und habe rund 90 % davon geschrieben
  - Über 200 Patientinnen und Patienten, begleitet vom klinischen Team
  - 16 Prüfbögen mit Risikowerten in Echtzeit
  - 841 Forschungsfelder, exportierbar als XLSX/CSV
order: 2
draft: false
---

## Kontext

An der Bundesuniversität von Amazonas (UFAM) begleitet ein Forschungsprojekt Patientinnen und Patienten mit neurodegenerativen Erkrankungen über längere Zeit. Ärzte, Pflegekräfte, Assistenzärzte und Medizinstudierende wirken mit, und ein separates KI-Team entwickelt Vorhersagemodelle.

Ich habe die Webplattform, mit der das klinische Team arbeitet, mit dem ersten Commit gestartet und leite ihr Frontend; rund 90 % des Codes stammen von mir, Kolleginnen und Kollegen haben Anpassungen an Formularen und die CI-Pipeline beigetragen. Es ist eine akademische Teilzeitrolle neben meinem Master in Elektrotechnik mit KI-Schwerpunkt.

In der Oberfläche selbst steckt keine KI. Das KI-Team liest, was das klinische Team erfasst, direkt aus der Datenbank der Plattform – damit entscheidet sich im Frontend, wie gut die Daten sind.

Neben den Formularen umfasst die Plattform die Patientenregistrierung, die Terminplanung für Visiten, Verlaufs- und Datenexportberichte sowie einen Administrationsbereich für Benutzer, Profile und die in der Studie eingesetzten Geräte. Die Oberfläche gibt es auf Portugiesisch und Englisch.

## Das Problem

Das klinische Team brauchte einen Ort, um Patientinnen und Patienten zu registrieren, Untersuchungen durchzuführen und jeden Verlauf über die Zeit zu verfolgen. Das bedeutete:

- 16 Prüfbögen, viele mit Feldern, die von früheren Antworten abhängen
- Risikowerte, die schon während des Ausfüllens angezeigt werden
- eine Ansicht des Verlaufs jeder Person, einschließlich Daten der in der Studie eingesetzten Geräte
- Exporte, die Forschende in ihren eigenen Werkzeugen öffnen können
- rollenbasierter Zugriff, denn es geht um echte Patientendaten

Ein verwirrendes Formular, oder eines, das widersprüchliche Antworten durchlässt, stört nicht nur beim Ausfüllen. Es landet im Datensatz, mit dem die Modelle trainiert werden.

## Was ich gemacht habe

### Formulare, die durch die Erfassung führen

Ich habe die Datenerfassung mit React Hook Form umgesetzt: 16 Prüfbögen mit bedingten Feldern und in Echtzeit berechneten Risikowerten, sodass das Ergebnis schon während der Eingabe erscheint.

Sechzehn Formulare bleiben nur wartbar, wenn sie alle gleich funktionieren. Jedes ist zweigeteilt: Die Seite kümmert sich um Layout und Interaktion, ein reines Modul übersetzt die API-Daten in Formularwerte und zurück, setzt Standardwerte und berechnet die Werte. Diese Module sind mit Jest unit-getestet, sodass sich eine klinische Regel prüfen lässt, ohne einen Bildschirm zu rendern.

### „Nicht beantwortet“ ist auch ein Wert

In einer Patientenakte bedeuten „nein“ und „nicht untersucht“ Verschiedenes, und wer beides verwechselt, verfälscht den Datensatz. Felder, die sonst einfache Checkboxen wären, kennen einen dritten Zustand, „keine Antwort“, damit ein unberührtes Feld als fehlend in der Datenbank ankommt und nicht als falsch negativ. Datumsangaben und Dezimalzahlen laufen über lokalisierte Eingabefelder, sodass ein Wert mit Dezimalkomma genauso gespeichert wird wie einer mit Punkt.

### Verläufe über die Zeit verfolgen

Mit MUI X Charts habe ich Dashboards gebaut, die den Verlauf jeder Patientin und jedes Patienten zeigen, einschließlich Daten der in der Studie eingesetzten Geräte.

### Eine Feedback-Schleife, die das klinische Team wirklich nutzt

Die Menschen, die mit der Plattform arbeiten, sind Ärzte und Pflegekräfte mitten in einer Studie, kein Produktteam. Feedback zu geben musste so einfach sein, wie einer Kollegin ein Problem zu melden.

Deshalb hat die Plattform einen eigenen Bildschirm für Änderungsanfragen, einen Klick entfernt im Seitenmenü. Dort beschreibt das Fachpersonal die gewünschte Anpassung, hängt bei visuellen Themen einen Screenshot oder ein PDF an und sieht ein voraussichtliches Lieferdatum. Alle Anfragen stehen in dieser Tabelle, sodass klinisches Team und Entwicklung eine gemeinsame Liste dessen haben, was offen ist und wann es kommt. Selbst ein echter Notfall, der uns zuerst per Nachricht erreicht, wird dort erfasst.

Der Bildschirm ist noch neu, und das klinische Team hat ihn bereits für rund acht Anfragen genutzt.

### Daten sicher exportieren

Die Forschenden brauchten alles in Tabellen, also habe ich einen Export von 841 Feldern aus den 16 Prüfbögen nach XLSX und CSV umgesetzt, dazu medizinische PDF-Berichte. Der Zugriff ist durch JWT-Authentifizierung und rollenbasierte Berechtigungen geschützt, und sensible Formulare lassen sich einzeln über ein zentrales Register sperren, das auch die Benutzerverwaltung steuert.

## Ergebnis

- Eine von Grund auf gebaute Plattform, mit der das klinische Team über 200 Patientinnen und Patienten begleitet
- Rückmeldung zum Risiko schon bei der Erfassung
- Ein direkter Kanal für Änderungsanfragen des klinischen Teams, mit sichtbarem Lieferdatum
- Ein sauberer, exportierbarer Datensatz, auf dem das KI-Team aufbaut

## Was ich gelernt habe

Das Gesundheitswesen war nie ein Bereich, in dem ich mich arbeiten sah. Am Ende zählen dieselben Fähigkeiten: verstehen, wer den Bildschirm nutzt, das Richtige zum Einfachsten machen und die Daten sauber halten. Webentwicklung kann fast jedem Fachgebiet etwas Neues und Nützliches geben – und genau das macht dieses Projekt für mich so reizvoll.
