# DIGITAL-easy.de – Projektplan und Analyse

Stand: 20.09.2026 · Umsetzung lokal abgeschlossen · Rechtsfreigabe offen

## 1. Auftrag und Bearbeitungsstand

Eine eigenständige, deutschsprachige Website für die professionelle IT-Marke DIGITAL-easy von Ralf-Peter Kleinert entsteht mit HTML5, CSS3 und wenig Vanilla JavaScript. Die vom Betreiber bestätigte Neuausrichtung stellt Dozententätigkeit, Lehre und YouTube-Tutorials in den Mittelpunkt. Seine belegte IT-Praxis bildet die fachliche Grundlage. ComputerRalle bleibt der öffentliche Auftritt für Inhalte, Tutorials und Homelab. Alle drei Namen werden sichtbar und maschinenlesbar verbunden.

Die ausdrückliche Freigabe „bau die seite“ ist erteilt. Alle acht Seiten sind lokal umgesetzt, mit responsiver Navigation, Kontrastmodus, Mailclient-Formular, SEO, JSON-LD und statischen Begleitdateien. Die technische Prüfung ist im QA-REPORT.md dokumentiert. Keine Veröffentlichung, kein Push. Die Rechtsseiten bleiben gekennzeichnete Prüffassungen, bis Hosting und rechtliche Angaben bestätigt sind.

Zielordner: `C:\Users\konta\Documents\Webdesign\GitHub-Pages\digital-easy.de`. Zu Beginn der Analyse enthielt er nur README.md und Git-Metadaten; inzwischen sind die vollständige statische Website und ihre Dokumentation ergänzt. Die Domain hat jedoch bereits eine veröffentlichte Website. Lokales leeres Repository bedeutet hier ausdrücklich keinen unbenutzten Webauftritt.

## 2. Quellen und Grenzen der Analyse

| Quelle | Erfasst | Verwendung |
|---|---|---|
| Lokales `ComputerRalle.de/index.html` und `index.css` | Vollständiger Quelltext, Inline-JavaScript, Bildergrößen, Formularanbindung | Technische und gestalterische Referenz |
| Lokales `ComputerRalle.de/scripts/form-acdf-block-2.php` und Funktionsfundstellen in `FormProcessor.php` | PHP-Verarbeitung, E-Mail-Versand, IP-Weitergabe konfiguriert | Entscheidung zum Kontaktweg |
| Lokales `ralf-peter-kleinert.de` | Startseite, Leistungen, Beratung, Paperless-Projekt, Rechtstexte, CSS/JS und lokale Schriftdefinitionen | Fachwissen und Tatsachengrundlage |
| [ComputerRalle](https://computerralle.de/) und [Fachseite](https://ralf-peter-kleinert.de/) | Öffentliche Seiten erreichbar | Abgleich der Auftritte |
| [Bestehende DIGITAL-easy-Seite](https://digital-easy.de/) | Webabruf, vom Recherchewerkzeug als letzten Monat gecrawlt ausgewiesen | Bestehendes Angebot und Kapazitätshinweis; Aktualität bestätigen |
| [Datenschutzerklärung](https://ralf-peter-kleinert.de/datenschutzerklaerung.html) | Öffentlich abrufbar, zusätzlich lokale vollständige Fassung | Ausschließliche Ausgangsquelle für Datenschutz |
| [Impressum](https://ralf-peter-kleinert.de/impressum.html) | Öffentlicher Abruf wiederholt fehlgeschlagen; lokale Fassung vollständig erfasst | Ausschließliche Ausgangsquelle, Live-Abgleich vor Übernahme offen |
| [Fachblog](https://blog.ralf-peter-kleinert.de/) | Erreichbar | Weiterführende Inhalte |
| [Downloads](https://downloads.ralf-peter-kleinert.de/) | Direkter Webabruf fehlgeschlagen; URL durch lokale Paperless-Anleitung belegt | Offizieller Link, Erreichbarkeit vor Veröffentlichung erneut prüfen |

Die lokalen Referenzordner liegen neben dem Zielordner unter `C:\Users\konta\Documents\Webdesign\GitHub-Pages`. Die Fachseite enthält AGENTS.md mit dem Hinweis auf lokale Bearbeitung und Veröffentlichung durch den Benutzer; sie wurde nur gelesen. Keine fremden Dateien oder Texte werden als Website-Vorlage kopiert. Rechtsinhalte sind die ausdrücklich gewünschte Ausnahme und werden kontrolliert übernommen.

Die Abschnitte zur Referenzanalyse beschreiben den Stand von Phase 1. Die neue Website wurde anschließend in Edge/Chromium von 320 bis 1920 Pixeln sowie mit und ohne JavaScript geprüft. Ergebnisse und Grenzen stehen in QA-REPORT.md; keine Lighthouse-Zertifizierung und kein echter Mailversand.

## 3. ComputerRalle: technische und gestalterische Analyse

| Bereich | Konkreter Befund | Entscheidung für DIGITAL-easy |
|---|---|---|
| HTML | `lang=de`, Header, benanntes nav, main, section, article, aside und footer; genau eine H1 auf der Startseite | Semantik übernehmen, Skip-Link ergänzen; pro Seite eine H1 und nachvollziehbare H2/H3 |
| Header | Desktop sticky, transparentes Dunkel mit Blur, Bildwortmarke, acht Hauptlinks und Kontrastbutton | Ruhiger Header mit Textwortmarke, fünf Hauptlinks; keine breite Bannerdatei notwendig |
| Navigation | Unter 940 px zunächst umgebrochen/scrollbar, unter 620 px Hamburger; `aria-expanded` und `aria-controls` vorhanden | Früher und abhängig vom Platzbedarf einklappen; keine horizontale Navigation zum Scrollen |
| Bedienung | Menü öffnet per nativem Button, schließt bei Linkklick; keine Escape-Behandlung; ohne JS bleibt es mobil versteckt | Ohne JS sichtbare Links; nach erfolgreicher Initialisierung einklappbar; Escape schließt und fokussiert Auslöser; Zustand bei Größenwechsel synchronisieren |
| Hero | Zweispaltig, Text plus geneigtes Logo-Panel, 82vh Mindesthöhe; orange/dunkle Gestaltung | Eigener Text-Hero mit sachlicher Schwerpunktliste; keine perspektivische Karte und keine erzwungene Bildschirmhöhe |
| Typografie | System-Fallback nach `Inter`, kein externer Font-Import in der geprüften CSS; H1 max. 10ch und Zeilenhöhe 0,92 | Reiner System-Fontstack, entspanntere Zeilenhöhe, größere und flexiblere Hauptüberschrift |
| Layout | Container bis 1180 px, Grid, clamp-Abstände; Leistungskarten 4/2/1 Spalten, Projektkarten 3/2/1 | Prinzip beibehalten; Leistungen 3/2/1, begrenzte Textbreiten und konsistente Abstände |
| Karten | Wechselnde dunkle Flächen, Schatten, Hover-Verschiebung bis 7 px und teils 3D | Helle Flächen, schmale Rahmen, kleine Farbänderung; nicht jede Inhaltsgruppe als Karte |
| Buttons | Primär Orange mit dunkler Schrift, sekundär umrandet; meist gut dimensioniert | Mindestens 44 × 44 CSS-Pixel als Projektziel; Fokus unabhängig vom Hover |
| Footer | Identität und Rechtliches vorhanden; soziale Icons von externem CDN | Einheitlicher Footer mit allen drei Namen und normalen Textlinks |
| Kontrast | Klasse `high-contrast`, `aria-pressed`, persistentes localStorage | Tokenbasierter Kontrastmodus, zunächst ohne Speicherung; Betriebssystem-Kontrast berücksichtigen |
| Animation | Bewegtes Raster, Scroll-Fortschritt, mehrfach animiertes YouTube-Symbol; keine `prefers-reduced-motion`-Regel in geprüfter CSS | Diese Effekte entfallen; reduzierte Bewegung respektieren |
| Fokus/Kontrast | Mehrere `:focus-visible`-Regeln; Footer-Rechtslinks werden im Normalmodus beim Hover/Fokus schwarz auf dunkel | Durchgängiger, kontrastreicher Fokusring und dauerhaft erkennbare Textlinks |
| SEO | Titel, Beschreibung, Canonical, Open Graph, Twitter Cards; kein JSON-LD in geprüfter Startseite | Individuelle Metadaten und sachliches gemeinsames Entitätsmodell |
| Performance | HTML ca. 31 KB, CSS ca. 25 KB; Hauptlogo ca. 288 KB, Banner ca. 62 KB, Foto ca. 219 KB, jeweils unkomprimierte Dateigrößen | Keine Bildlast ohne inhaltlichen Nutzen; Textwortmarke und lokale optimierte Bilder |
| Bilder | Abmessungen vorhanden; unterhalb des Hero Lazy Loading und async decoding | Beibehalten; WebP/AVIF nach tatsächlichem Motiv und Fallback-Bedarf |
| Abhängigkeiten | Kein Frontend-Framework; Inline-Skripte; externe Simple Icons in HTML und CSS | Eine lokale CSS-Datei, eine mit defer geladene JS-Datei; keine externen Assets |
| Robustheit | localStorage-Zugriff ohne Fehlerbehandlung vor Initialisierung des Menüs; `main { overflow:hidden }` kann Layoutprobleme verdecken | UI unabhängig von Storage; Überlaufursachen beseitigen, Fokus nicht abschneiden |

## 4. Fachseite: Wissen nutzen, Technik vereinfachen

Die Fachseite nutzt Nicepage, jQuery, zahlreiche seitenbezogene CSS-Dateien, lokal eingebundene Schriftdateien und eine umfangreiche verschachtelte Navigation. Allein nicepage.css hat rund 1,89 MB, nicepage.js 436 KB und jquery.js 89 KB unkomprimiert. Auf der Startseite sind Usercentrics-Skripte und zugehörige externe Verbindungen vorhanden. Das ist keine geeignete technische Grundlage für die neue schlanke Website.

Wertvoll sind die fachlichen Inhalte: Proxmox, Linux/Windows, IT-Sicherheit, Backup, Netzwerk/Firewall, Dokumentation, eigene Werkzeuge und Fachbücher. Diese werden gezielt verlinkt und in eigener Sprache eingeordnet. Lange Tutorials bleiben auf der Fachseite bzw. im Blog.

## 5. Belegbare Inhalte und Leistungsgrenzen

**Vom Betreiber geklärt:** Das Geschäft wird auf Dozententätigkeit, Lehre und YouTube-Tutorials ausgerichtet. Die neue Website stellt diese Wissensvermittlung als Angebot dar. Administration, Installation und Betreuung werden als Erfahrung beschrieben, nicht als neu buchbare Betriebsverantwortung. Keine Wartungsverträge, Notfallhilfe, Bereitschaft, garantierten Antwortzeiten oder laufende Serverbetreuung bewerben. Daraus wird keine Aussage über bestehende Kundenverträge abgeleitet.

Offen bleiben konkrete Lehrformate, Zielgruppen, Umfang und Buchbarkeit. Keine bereits verfügbaren Kurse, Termine, Preise, Unterrichtsorte oder Zertifikate erfinden. Beratung ist nicht automatisch ein zusätzliches Angebot. Persönliche Beweggründe werden nicht in Website oder Projektdateien aufgenommen.

Die lokale Fachseite `dienstleistungen-und-hilfe.html` (angegebene Aktualisierung 01.11.2024) schränkt das Angebot auf Beratung und Dozententätigkeit ein. ComputerRalle beschreibt dagegen selbstständige System-/Serveradministration und Betreuung von Proxmox-Kundenumgebungen. Die bereits vorhandene DIGITAL-easy-Seite nennt Installation und Wartung, meldet aber zugleich volle Auslastung für weitere Proxmox-Instanzen. Für den neuen Auftritt ist die aktuelle Betreiberentscheidung maßgeblich; die älteren Seiten dienen als Erfahrungsbelege.

| Geplanter Bereich | Beleg | Zulässiger Planungsstand |
|---|---|---|
| Server & Administration | ComputerRalle `#ueber` und `#proxmox`: Aufbau, Pflege, Wartung von Kundenumgebungen | Erfahrungs- und Lehrgebiet; keine Übernahme des Serverbetriebs anbieten |
| Proxmox & Virtualisierung | ComputerRalle `#proxmox`, vorhandene DIGITAL-easy-Seite, Fachanleitungen | Kerngebiet für Wissensvermittlung; spätere Servervideos vorgesehen |
| IT-Sicherheit | Fachseite `dienstleistungen-und-hilfe.html`: Sicherheitsmaßnahmen, Firewall und Beratung | Praxiswissen vermitteln; keine Penetrationstests, Zertifizierung oder Sicherheitsgarantien behaupten |
| Linux & Windows | Dieselbe Leistungsseite und ComputerRalle `#ueber` | Administrationserfahrung als Grundlage für Erklärungen und Tutorials |
| Backup & Wiederherstellung | Leistungsseite: Backup-Strategie und Disaster Recovery; Fachanleitungen | Als Lehrthema darstellen; keine Datenrettung als Dienstleistung anbieten |
| Dozententätigkeit, Lehre und Tutorials | Aktuelle Betreiberentscheidung; Fachseite und ComputerRalle-Inhalte | Neuer Angebotsschwerpunkt; konkrete Formate und Buchbarkeit noch festlegen |
| Dokumentation | Beratungsübersicht, ComputerRalle-Proxmox-Abschnitt | Verständliche Dokumentation als Arbeitsprinzip; konkrete Liefergegenstände abstimmen |
| Software & Automatisierung | `linux-os/paperless-backup-programm.html`: eigenes Programm für Einrichtung, Backup und Wiederherstellung | Als eigenes Praxisprojekt zeigen; keine pauschale Auftragsentwicklung daraus ableiten |
| Fachbuchautor / Content Creator | ComputerRalle-Proxmox-Abschnitt und Fachbuchseiten | Rollen belegt; keine ungeprüften Titelzahlen, Verkaufszahlen oder Reichweiten |

Konkrete Projektkandidaten: Paperless Backup Programm, Proxmox-Absicherung, verschlüsselte Proxmox-Backups und Netzwerk/Firewall-Konfiguration. Beiträge jeweils als eigenes Tool oder veröffentlichte Anleitung kennzeichnen. Keine Anleitung als Kundenreferenz darstellen. Keine Namen, Zitate, Erfolgszahlen oder Kundenlogos aus der bestehenden Website ohne gesonderte Auswahl und Freigabe übernehmen.

Geeignete Quellenlinks:

- https://ralf-peter-kleinert.de/linux-os/paperless-backup-programm.html
- https://ralf-peter-kleinert.de/linux-server/proxmox-server-sichern-haerten.html
- https://ralf-peter-kleinert.de/linux-server/proxmox-verschluesselt-backup.html
- https://ralf-peter-kleinert.de/linux-server/proxmox-und-pfsense-eine-ip.html
- https://ralf-peter-kleinert.de/it-und-computer-beratung.html
- https://ralf-peter-kleinert.de/dienstleistungen-und-hilfe.html

Die letzten drei Fachanleitungen sind durch Links der ComputerRalle-Startseite belegt, in Phase 1 aber nicht vollständig redaktionell geprüft. Vor Projekttexten werden die Zielinhalte gelesen und ihre Erreichbarkeit geprüft.

## 6. Markenrollen und redaktionelle Linie

| Name | Rolle | Schwerpunkt |
|---|---|---|
| DIGITAL-easy | Professionelle Marke für praxisnahe IT-Wissensvermittlung | Dozententätigkeit, Lehre, Fachwissen und Anfragen |
| Ralf-Peter Kleinert | Reale Person hinter beiden Auftritten | IT-Praktiker mit Administrationserfahrung, Entwickler eigener Werkzeuge, Fachbuchautor und Wissensvermittler |
| ComputerRalle | Öffentlicher Alias und Wissensvermittlung | Tutorials, YouTube, Homelab, technische Projekte |

Geplante Leitzeile: „IT verstehen. Wissen aus der Praxis.“ Dazu: „Ralf-Peter Kleinert, bekannt als ComputerRalle: Dozententätigkeit, verständliche IT-Erklärungen und YouTube-Tutorials auf Grundlage praktischer Erfahrung mit Servern, Proxmox und IT-Sicherheit.“ Redaktioneller Entwurf, keine Behauptung bereits buchbarer Kursformate.

Startseite: Wissensvermittlung zuerst; danach Fachgebiete, belegte praktische Erfahrung, eigene Projekte/Fachbücher, Verbindung zu ComputerRalle und Kontakt. Passende Handlungslinks: „Lehrthemen entdecken“, „Tutorials ansehen“ und „Anfrage zur Dozententätigkeit“. Keine Aufforderung zur Buchung von Serverwartung. Die fachliche Erfahrung wird konkret an Systemen, eigenen Werkzeugen und veröffentlichten Anleitungen sichtbar.

Empfohlene Ansprache: persönlich in der Ich-Form, Besucher durchgängig mit „Sie“. Keine Agentur-Wir-Form, keine garantierten Ergebnisse, keine erfundenen Zertifizierungen. Arbeitsweise konkret beschreiben: Lernziel klären, Zusammenhänge erklären, praktische Beispiele nachvollziehbar zeigen und Schritte dokumentieren. Kein Versprechen einer dauerhaften individuellen Betreuung und kein fester Veröffentlichungsrhythmus für Videos.

## 7. Vorgeschlagene Sitemap und Inhalte

| URL | Inhalt / Aufgabe | Geplanter Titel |
|---|---|---|
| `/` | Wissensvermittlung, Fachgebiete, Erfahrung, Tutorials, Person, Kontakt | DIGITAL-easy – IT verstehen. Wissen aus der Praxis. |
| `/leistungen.html` | Dozententätigkeit und Lehre, Themengebiete, Tutorials, bestätigte Formate und Anfrage | Dozententätigkeit und IT-Wissen · DIGITAL-easy |
| `/projekte.html` | Eigene Tools und veröffentlichte Praxis, mit Quellen und Einordnung | Projekte und IT-Praxis · DIGITAL-easy |
| `/ueber-mich.html` | Ralf-Peter Kleinert, beruflicher Schwerpunkt, Rollen der Marken, Fachwissen | Ralf-Peter Kleinert / ComputerRalle · DIGITAL-easy |
| `/kontakt.html` | Mailclient-Formular mit Name, optionaler Antwortadresse und Nachricht; sichtbarer E-Mail-Link | Kontakt · DIGITAL-easy |
| `/impressum.html` | Kontrollierte Übernahme aus vorgeschriebener Quelle nach Prüfung | Impressum · DIGITAL-easy |
| `/datenschutz.html` | Rechtlich geprüfte, technisch passende Erklärung | Datenschutz · DIGITAL-easy |
| `/404.html` | Kurze Fehlermeldung und Startseitenlink | Seite nicht gefunden · DIGITAL-easy |

Keine zusätzlichen Themen-Landingpages in der ersten Fassung. Die 404-Seite wird nicht in die Sitemap aufgenommen und erhält `noindex`. Kein Canonical auf die Startseite; sofern ein Canonical gesetzt wird, nur auf die eigene 404-URL. Alle regulären Seiten erhalten eigene Beschreibung, selbstreferenzierenden Canonical und konsistente OG-Daten. Keine erfundenen `lastmod`-Angaben.

Header: DIGITAL-easy, Start, Wissen & Lehre, Projekte, Über mich, Kontakt, Kontrastschalter. „Wissen & Lehre“ führt auf die geplante `/leistungen.html`; die Dateistruktur bleibt erhalten. ComputerRalle-Link im Personenbereich und Footer; optional im Desktop-Header, sofern ausreichend Platz vorhanden.

### Spätere Servervideos

Servervideos sind als spätere Erweiterung vorgesehen, nicht Teil der ersten Umsetzung. Sie können thematisch bei Projekten und Lehrthemen ergänzt werden: mit bestätigtem Titel, kurzer Beschreibung, Lernziel und Video-Link. Keine erfundenen Episoden oder leeren Videokarten. Zunächst normale YouTube-Links; vor einer tatsächlichen Player-Einbettung werden Ladeverhalten, externe Requests, Barrierefreiheit und Datenschutzerklärung erneut geprüft. Keine automatische Drittanbieterladung.

Footer auf jeder Seite identisch: DIGITAL-easy, Ralf-Peter Kleinert, ComputerRalle; Impressum, Datenschutz, Kontakt, ComputerRalle und Fachseite. Blog und Downloads im Personen-/Praxisbereich. Zusätzliche Profile erst nach eindeutiger Prüfung. Der YouTube-Kanal `https://www.youtube.com/@ComputerRalle` ist in der offiziellen Referenz verlinkt; zusätzliche Social-Links sind für den Start nicht erforderlich.

## 8. Vorgeschlagenes Designsystem

ComputerRalle verwendet bereits Orange. Eine andere Akzentfarbe allein kann deshalb die Marken nicht trennen. DIGITAL-easy bekommt einen dunklen, ruhigen Kopfbereich, helle Inhaltsflächen, klarere Textgliederung und weniger Karten/Illustrationen. Orange dient als deutlicher Akzent und für Handlungslinks. Keine Stockfoto-Pflicht, keine Neon-Effekte, kein Terminal-Dekor, kein Parallax.

Geplante CSS Custom Properties:

```css
:root {
  --color-primary: #ff6a21;
  --color-primary-hover: #ff8a4c;
  --color-dark: #171a20;
  --color-text: #20242b;
  --color-muted: #535c69;
  --color-background: #f5f6f7;
  --color-surface: #ffffff;
  --color-border: #d8dde3;
  --color-link: #a63a00;
  --color-on-primary: #171a20;
  --color-on-dark: #ffffff;
  --color-muted-on-dark: #c4cbd4;
  --color-border-on-dark: #46505e;
  --color-focus-light: #a63a00;
  --color-focus-dark: #ff8a4c;
}
```

Orange Buttons bekommen dunkle Schrift. Orange Fließtext auf Weiß wird vermieden; dafür ist ein dunklerer Linkton vorgesehen. Dekorative Rahmen sind keine ausreichende Feld-/Fokuskennzeichnung. Farben samt Hover-, Fokus-, Kontrast- und Fehlermeldungszuständen bleiben zentral definiert und werden bei Umsetzung gemessen: mindestens 4,5:1 für normalen Text, 3:1 für großen Text und relevante UI-Grenzen.

- Schrift: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`; keine Fontdownloads.
- Text: Basis 1rem, Zeilenhöhe 1,6; Lesebreite etwa 65–70ch. H1 `clamp(2.25rem, 5vw, 4.5rem)`, Zeilenhöhe etwa 1,1; H2 bis etwa 2,5rem.
- Container: max. 1180px, seitlicher Abstand mindestens 1rem, auf größeren Geräten mehr.
- Abstände als Tokens: 0,5 / 0,75 / 1 / 1,5 / 2 / 3 / 4 / 6rem. Sektionen etwa 3–6rem vertikal.
- Radien: 6–10px; überwiegend klare Rahmen statt großer Schatten.
- Mobile First: eine Spalte; ab etwa 48rem zwei, ab etwa 72rem drei Spalten. Exakte Menügrenze nach Prüfung mit tatsächlichen Texten und 200 % Zoom.
- Touch-Ziele mindestens 44px; Textvergrößerung, 320px Breite und 400 % Zoom berücksichtigen.
- Hover: Farbe/Rahmen, höchstens kleine Bewegung; keine dauerhaft laufenden Animationen.
- Kontrastmodus per `aria-pressed`, zunächst nur für das aktuelle Dokument; `prefers-contrast` und `forced-colors` berücksichtigen. Speicherung über Seitenwechsel wäre eine gesondert zu dokumentierende Entscheidung.

## 9. Technik, Dateien und Datenschutz durch Gestaltung

Die gewünschte Struktur wird übernommen, mit CSS/JS/img gemeinsam unter assets:

```text
index.html
leistungen.html
projekte.html
ueber-mich.html
kontakt.html
impressum.html
datenschutz.html
404.html
assets/css/style.css
assets/js/main.js
assets/img/
robots.txt
sitemap.xml
README.md
PROJECT-PLAN.md
LEGAL-REVIEW.md
QA-REPORT.md                 # erst Phase 4
```

Keine Build-Pipeline, keine Laufzeitabhängigkeiten, kein CMS. Header und Footer stehen direkt in jeder HTML-Datei; ihre Gleichheit wird bei QA geprüft. Hauptinhalte werden nicht per JavaScript nachgeladen. CSS folgt den 16 gewünschten Abschnitten von Custom Properties bis Media Queries. Der Forms-Abschnitt enthält die Gestaltung des Mailclient-Formulars.

JavaScript übernimmt Menüzustand, Kontrastmodus und die ausdrücklich gewünschte lokale mailto-Übergabe des Kontaktformulars. Kein Analytics, keine Cookies, kein localStorage/sessionStorage im vorgeschlagenen Startumfang, keine fremden Skripte, Fonts, CDN-Icons, Karten oder Video-Iframes. Externe Verweise sind normale Links; keine Preconnect-/Prefetch-Aufrufe zu Dritten. Bei neuem Tab `rel="noopener noreferrer"` und verständlicher Hinweis.

Geplantes Leistungsbudget als Ziel, nicht als Messwert: gemeinsames CSS höchstens etwa 30 KB, JS höchstens 5 KB unkomprimiert; Startseite möglichst unter 300 KB übertragene Daten ohne Cache. Bilder nur bei fachlichem Nutzen, mit width/height, responsive Größen und Lazy Loading unterhalb des sichtbaren Bereichs. LCP-Inhalt nicht lazy laden. Keine Verfügbarkeit oder Core-Web-Vitals-Ergebnisse versprechen, bevor gemessen wurde.

### Kontaktformular: bestätigte Mailclient-Übergabe

Der Betreiber hat ein Formular nach dem aktuellen Muster von `ralf-peter-kleinert.de/kontakt.html` ausdrücklich beauftragt. Die erneut geprüfte Referenz verwendet `encodeURIComponent` und `window.location.href` zur Übergabe über `mailto:`. Die vorher untersuchte PHP-Anbindung von ComputerRalle ist nicht die gewählte Umsetzung.

- Empfänger: `kontakt@ralf-peter-kleinert.de`.
- Betreff exakt: `Kontaktformular digital-easy.de`.
- Felder: Name und Nachricht als Pflichtfelder; Antwortadresse optional. Der Absender wird vom gewählten Mailkonto bestimmt.
- Button: „Im Mailprogramm öffnen“. Keine Erfolgsmeldung über einen angeblichen Versand.
- Keine Serverübermittlung des Formularinhalts, kein Backend, keine API, kein externer Formulardienst und kein Speichern der Eingaben durch das Website-Skript.
- Eingaben bleiben nach der Übergabe stehen. Sichtbarer E-Mail-Link als Alternative; ohne JavaScript ist das Formular verborgen und der E-Mail-Link nutzbar.
- Mailprogramm muss eingerichtet sein; Browser können Übergaben blockieren und URI-Längen begrenzen. Nachricht auf 1.500 Zeichen begrenzt, längere Inhalte und Anhänge im Mailprogramm ergänzen. Die Länge ist keine universelle Kompatibilitätsgarantie.
- Keine pauschale Einwilligungscheckbox aus der Referenz kopiert; rechtliche Anforderungen werden separat geprüft.

Das Formular ist in die vollständige Kontaktseite integriert. Die Kontaktseite ist indexierbar und hat gemeinsame Navigation, Footer, Metadaten und JSON-LD. Nur die rechtlichen Prüffassungen und die Fehlerseite tragen `noindex`. Vor Veröffentlichung sind die Rechtsfragen zu klären.

Validiert: Empfänger, exakter Betreff, Sonderzeichen/Umlaute, Zeilenumbrüche, optionale Antwortadresse, Pflichtfelder, sichere Parameterkodierung und Erhalt der Eingaben. JavaScript-Syntax und Browserdarstellung geprüft. Kein tatsächlicher Mailversand und keine behauptete Prüfung eines lokal eingerichteten Mailclients.

### Strukturierte Daten

Geplant sind `Person`, `WebSite`, `WebPage` und `Brand` mit stabilen `@id`-Referenzen. `Person.name` = Ralf-Peter Kleinert, `alternateName` = ComputerRalle; DIGITAL-easy als `Brand`, über `Person.brand` verknüpft. `WebSite.name` = DIGITAL-easy, Publisher = Person; jede WebPage ist Teil dieser Website und kann Person/Marke als `about` referenzieren.

`Organization` wird erst verwendet, wenn die konkrete geschäftliche Entität bestätigt ist. Die Marke wird nicht automatisch als eigenständiges Unternehmen oder als Arbeitgeber der Person ausgegeben. `sameAs` nur für tatsächlich identitätsgleiche offizielle Auftritte, nicht pauschal für jede Blog-/Download-Unterseite. Keine Ratings, Kundenanzahlen, Preise, Öffnungszeiten oder Zertifizierungen in JSON-LD ohne bestätigte Grundlage.

`robots.txt`: einfacher allgemeiner Allow-Eintrag plus absolute Sitemap-URL, keine pauschalen KI-Crawler-Sperren. Sitemap enthält derzeit die fünf indexierbaren Inhaltsseiten. Die zwei rechtlichen Prüffassungen werden erst nach Freigabe indexierbar gemacht und ergänzt; die 404-Seite bleibt ausgeschlossen. Hostingabhängige Sicherheitsheader werden separat dokumentiert, keine unwirksame `.htaccess` für GitHub Pages versprechen.

## 10. Offene Entscheidungen und Risiken

| Priorität | Punkt | Benötigte Klärung |
|---|---|---|
| Mittel | Lehrformate | Ausrichtung auf Dozententätigkeit, Lehre und Tutorials ist bestätigt. Konkrete Formate, Zielgruppen, Umfang und Buchbarkeit noch festlegen; keine laufende Serverbetreuung bewerben. |
| Hoch | Hosting | GitHub Pages oder eigener Webserver, konkreter Anbieter und ggf. Proxy/CDN; Logdaten und Aufbewahrung |
| Geklärt | Kontaktformular | Empfänger `kontakt@ralf-peter-kleinert.de`, Betreff `Kontaktformular digital-easy.de` vom Betreiber bestätigt. Abweichende Rechtsangaben nicht automatisch ändern. |
| Hoch | Rechtstexte | Impressum live abgleichen, veraltete Verweise und tatsächliche Datenverarbeitung prüfen; siehe LEGAL-REVIEW.md |
| Mittel | Marke/Unternehmensform | Bestehende Angaben bestätigen, keine neue Rechtsform oder Organisation ableiten |
| Mittel | Ansprache und Zielgruppen | Vorschlag: Sie, persönliche Ich-Form; konkrete Zielgruppen und Remote/Vor-Ort-Angebot bestätigen |
| Mittel | Logo/Porträt | Gibt es freigegebene DIGITAL-easy-Dateien? Bis dahin Textwortmarke; keine ComputerRalle-Bildmarke als DIGITAL-easy-Logo übernehmen |
| Mittel | Projekte | Auswahl der eigenen Projekte und erlaubte Bilder bestätigen; Kundenreferenzen vorerst nicht einplanen |
| Mittel | Migration | Bestehende URLs, Formulare, Preise, Rechtslinks, DNS und Hosting vor einem Wechsel inventarisieren; keine automatische Abschaltung |

Insbesondere Preise, Servicezeiten, Testimonials und absolute Sicherheits-/Verfügbarkeitsversprechen der bisherigen Website werden nicht ungeprüft übernommen. Die Planung selbst enthält TODOs; offene Behauptungen kommen nicht versehentlich in veröffentlichte Texte.

## 11. Umsetzung nach Freigabe und Abnahme

**Phase 2:** Grundstruktur, CSS-Tokens, Header/Footer, Navigation, Kontrast, eigener Hero, Startseite und Basis-SEO. Lokal auf Smartphone/Desktop sowie mit und ohne JavaScript prüfen.

**Phase 3:** Alle sieben Inhalts-/Rechtsseiten und 404 vervollständigen; Quellenzuordnung für Projekttexte, bestätigte Kontaktadresse, abgestimmte Rechtsinhalte, robots.txt, sitemap.xml und README. Rechtlich offene Texte nicht als veröffentlichungsfertig kennzeichnen.

**Phase 4:** QA-REPORT.md mit Ergebnis, Prüfmethode, Umgebung, offenen Fehlern und Grenzen. Prüfen: HTML, Dateien und Links; 320/375/768/1024/1440/1920px; kein horizontaler Überlauf; Tastatur, Escape, Fokus, Skip-Link, Zoom, Kontrast und Reduced Motion; Bildalternativen; H1/Überschriften; Metadaten, Canonicals, OG und JSON-LD; Sitemap/robots/404; JS-/Console-Fehler; Netzwerk-Requests, Cookies und Storage; Performance kalt und warm. Kein Versand echter Kontaktanfragen als Test. Serverseitige Logs/HTTP-Header/echte 404-Antwort nach Hostingkonfiguration separat prüfen.

**Freigabestand:** Die Umsetzung wurde mit „bau die seite“ freigegeben und lokal ausgeführt. Technische Ergebnisse stehen im QA-REPORT.md. Veröffentlichung ist nicht Bestandteil dieser Freigabe; die offene Rechtsprüfung bleibt bestehen.



## 12. Tatsächlicher Umsetzungsstand

- Acht Seiten, gemeinsame Navigation und Footer, eine CSS-Datei und ein kleines lokales JavaScript.
- Orange/Anthrazit mit hellen Inhaltsflächen; Textwortmarke, lokales SVG-Favicon und PNG-Vorschaubild. Keine fremden Fotos oder Bildmarken übernommen.
- Inhalte auf die bestätigte Wissensvermittlung ausgerichtet. Konkrete Kurstermine, Preise, Zertifikate und Serviceverfügbarkeiten werden nicht behauptet.
- Servervideos bleiben eine spätere Erweiterung. Aktuell normale Links zu Tutorials und Fachinhalten.
- Navigation ohne JavaScript sichtbar; Mailadresse ohne JavaScript nutzbar. Kein Browser-Speicher und keine Drittanbieter-Requests im gemessenen Frontend.
- Alle erforderlichen Metadaten und strukturierte Daten direkt im HTML. Schema.org bestätigt `Person.brand` als zulässige Verbindung: https://schema.org/brand.
- Die optionale Inhaltsverzeichnis-Verlinkung wurde nach einem 404 beim externen Abruf durch die bestätigte Fachseiten-Startseite ersetzt. Weitere nicht abschließend erreichbare externe Ziele stehen im QA-Bericht.
- Impressum und Datenschutz enthalten deutlich markierte Prüfpunkte. Der vorhandene Rechtswortlaut ist erhalten; die tatsächliche neue Technik ist separat beschrieben. Keine rechtliche Freigabe vorgetäuscht.
- Planabweichung bei der Sitemap: fünf indexierbare Seiten statt sieben, bis die beiden rechtlichen Prüffassungen freigegeben sind.
