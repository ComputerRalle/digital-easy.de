# DIGITAL-easy.de – QA-REPORT

Stand: 20.09.2026 · Lokaler technischer Prüfstand

## Ergebnis

Die acht Seiten sind lokal erstellt und technisch geprüft. 306 automatisierte Browser-/Funktionsprüfungen ohne fehlgeschlagene Assertion. Zusätzlich HTML-Struktur, Sitemap/robots und unveränderte Rechtstextübernahme geprüft. Repräsentative Desktop- und Mobilansichten wurden als Screenshots visuell kontrolliert.

**Keine Veröffentlichung.** Impressum und Datenschutz sind erkennbare Prüffassungen. Hosting, Rechtsfreigabe und einige externe Zielseiten bleiben offen. Der technische Prüfstand ersetzt keine vollständige Barrierefreiheitszertifizierung oder rechtliche Prüfung.

## Umgebung und Methoden

- Windows, Microsoft Edge/Chromium 153.0.4234.46, Headless-Browser über Playwright.
- Lokaler HTTP-Server auf 127.0.0.1; unbekannte URLs liefern die eigene 404-Datei mit Status 404.
- Alle acht Seiten bei 320, 375, 768, 1024, 1440 und 1920 CSS-Pixeln Breite geprüft.
- DOM-/Link-/Metadatenprüfung, gemessene Elementfarben, JavaScript-Syntaxprüfung und isolierter Test der mailto-Erzeugung.
- Screenshots unter anderem von Startseite, Kontakt, Projekte, Über mich, Wissen & Lehre, Impressum und Datenschutz; ausgewählte Aufnahmen visuell geprüft.
- Kein echter E-Mail-Versand, kein Aufruf eines lokalen Mailprogramms und kein Deployment-Test.

## Ergebnisse nach Prüffeld

| Prüffeld | Ergebnis | Grenzen |
|---|---|---|
| HTML | Alle acht Dateien ohne unbalancierte Tags, verschachtelte Absätze/Links oder ungeschlossene Elemente im lokalen Strukturprüfer | Kein vollständiger W3C/Nu-Validatorlauf |
| Semantik | Je eine H1, lang=de, keine doppelten IDs, keine übersprungenen Heading-Ebenen; englische Rechtstexte mit lang=en | Kein Screenreader-Langzeittest |
| Interne Links und Assets | Alle referenzierten lokalen Dateien und Anker vorhanden | Produktionshosting noch nicht konfiguriert |
| Gemeinsame Elemente | Footer auf allen acht Seiten bytegleich; Navigation enthält aktiven Seitenzustand | Gemeinsame Änderungen müssen weiterhin in allen HTML-Dateien gepflegt werden |
| Responsive Layout | Kein horizontaler Überlauf auf allen acht Seiten bei den sechs Prüfbreiten | Keine physischen iOS-/Android-Geräte geprüft |
| Mobile Navigation | Öffnen, aria-expanded, Escape, Fokusrückgabe und Wechsel Mobil/Desktop bestanden | Kein modaler Dialog; normale Dokumentnavigation |
| Ohne JavaScript | Navigation bleibt sichtbar; Kontaktadresse nutzbar; Formular und JS-Buttons verborgen | Keine Formularübernahme ohne JS |
| Tastatur/Fokus | Skip-Link erster Tabstopp, Ziel ist main; Menü und Escape getestet; sichtbare Fokusregeln | Kein vollständiger assistiver Gerätetest |
| Kontrast | Sichtbare Textknoten auf allen Seiten in Standard-/Kontrastmodus gemessen; keine Unterschreitung der jeweiligen 4,5:1-/3:1-Schwellen | Nicht jedes denkbare native Browser-Fehlerpopup gemessen; Quellen-details waren dabei geschlossen |
| Textvergrößerung | Startseite mit 200 % Basisschrift ohne horizontalen Überlauf | 320px-Reflow entspricht der relevanten schmalen Breite, ersetzt keinen vollständigen nativen 400%-Zoomtest |
| Bewegungsreduktion | Keine laufenden Animationen; reduced-motion-Regel entfernt Übergänge | Betriebssystempräferenzen synthetisch emuliert |
| Forced Colors | Emulation aktiviert und Screenshot erstellt; native Systemfarben-Regeln vorhanden | Nicht auf jeder Windows-Kontrastpalette manuell getestet |
| Bilder | Keine Inhaltsfotos; SVG-Favicon und lokales OG-PNG vorhanden | Keine Bildalternativtexte für nicht vorhandene Inhaltsbilder erforderlich; OG-Alt-Text vorhanden |
| Mailformular | Empfänger, Betreff, Kodierung, Zeilenumbrüche, optionale Antwortadresse, Pflichtfelder und Eingabeerhalt bestanden | Mailhandler und URI-Limits hängen vom Endgerät ab |
| Metadaten | Eindeutige Titel, Beschreibungen, Canonicals und erforderliche Open-Graph-Werte auf allen Seiten | Vorschau bei Social-Anbietern nicht live veröffentlicht/getestet |
| JSON-LD | Parsebares Person-/Brand-/WebSite-/WebPage-Modell auf allen Seiten, feste IDs, keine erfundenen Ratings | Keine Garantie einer bestimmten Suchmaschinendarstellung |
| robots.txt | Allgemeines Allow und absolute Sitemap-URL; keine KI-Crawler-Sperren | Keine rechtliche Aussage zu Crawling |
| Sitemap | Valides XML, fünf existierende kanonische indexierbare Seiten, keine Duplikate, kein erfundenes lastmod | Rechtsprüffassungen erst nach Freigabe ergänzen |
| 404 | Direkte und verschachtelte unbekannte URL liefern lokal eigene Fehlerseite, Assets korrekt von der Wurzel | Echter Hostingstatus noch zu prüfen |
| JavaScript/Console | Keine JS-Ausnahmen oder unerwarteten Console-Fehler | Ein erwarteter 404-Console-Eintrag vom bewusst aufgerufenen Fehlerpfad |
| Netzwerk | Alle von den Seiten ausgelösten Requests gingen im Test an den lokalen eigenen Ursprung | Ein Klick auf externe Links lädt natürlich den Zielanbieter |
| Cookies/Storage | Keine Cookies, localStorage und sessionStorage leer | Hosting/Proxy und spätere Mailverarbeitung separat prüfen |
| Rechtstextintegrität | Alle acht ausgewählten Originalsektionen mit normalisierten Leerzeichen wortgleich erhalten | Inhaltliche Gültigkeit bleibt ausdrücklich offen |

## Farbkontraste

Niedrigster gemessener Textkontrast im Standardmodus: **5.47:1**. Im hohen Kontrastmodus: **6.25:1**. Die Messung ermittelt die berechnete Textfarbe und den nächsten deckenden Hintergrund sichtbarer Textknoten. Schriftdarstellung und Kantenglättung werden damit nicht als Pixelmessung bewertet.

## Performance

- Startseiten-HTML: 12,798 Bytes.
- Gemeinsames CSS: 17,617 Bytes.
- Gemeinsames JavaScript: 3,303 Bytes.
- SVG-Favicon: 229 Bytes.
- OG-Vorschaubild: 52,258 Bytes, 1200 × 630 Pixel; nicht als Seitenbild geladen.
- Gemessene Startübertragung einschließlich HTTP-Metadaten: 35,147 Bytes, alle Ressourcen vom eigenen Ursprung.

Ein lokaler Labordurchlauf mit 375px Viewport, deaktiviertem Cache, 150ms simulierter Latenz, etwa 1,6 Mbit/s Download und 4-facher CPU-Drosselung ergab **530ms loadEventEnd** und **556ms LCP**. Das ist eine einzelne synthetische lokale Messung, kein Lighthouse-Score, kein Feldwert und keine Aussage zur Geschwindigkeit des künftigen Hosters.

Die Datenschutzseite ist mit 122,356 Bytes größer, weil sie den vollständigen deutschen/englischen Rechtsquellenbestand zur Prüfung erhält. Sie lädt trotzdem keine Drittressourcen.

## Externe Links

- ComputerRalle, die Fachseiten-Startseite, der Blog und die drei Proxmox-Fachanleitungen wurden über das Recherchewerkzeug erreicht.
- Die Paperless-Projektseite und die Fachbuchübersicht sind als lokale offizielle Inhalte belegt. Die Fachbuchübersicht lieferte beim öffentlichen Abruf einen Timeout.
- Downloads: offizielle URL aus Auftrag und Referenzinhalt; öffentlicher Abruf mit Timeout. Kein belegter 404, weiterhin prüfen.
- YouTube-Kanal: durch offizielle Referenzseiten verifiziert; separater Abruf im Recherchewerkzeug mit Cache-Miss. Vor Veröffentlichung im normalen Browser erneut prüfen.
- `inhaltsverzeichnis.html` lieferte im öffentlichen Prüflauf 404. Der optionale Link wurde durch die bestätigte Fachseiten-Startseite ersetzt.
- Live-Impressum nicht erfolgreich abrufbar. Deshalb keine Behauptung, lokale und veröffentlichte Fassung seien identisch.
- Links im erhaltenen Rechtsquellenbestand wurden nicht alle einzeln extern angefragt. Der bekannte veraltete OS-Link ist entsprechend der Anweisung erhalten und als rechtlicher Prüfpunkt markiert.

Es wird ausdrücklich **kein pauschales „alle externen Links funktionieren“** behauptet.

## Offene Punkte vor Veröffentlichung

1. Hostinganbieter und dessen tatsächliche Verarbeitung/Logs bestätigen; Sicherheitsheader, HTTPS, Kompression und produktive 404-Antwort prüfen.
2. Rechtsangaben und aktualisierte Datenschutzfassung freigeben lassen. Insbesondere TMG-/OS-Verweise, Mailclient-Verfahren, Hosting, englische Cloudflare-Passage und E-Mail-Archivierungsangaben prüfen.
3. Externe Ziele mit Timeout/Cache-Miss erneut kontrollieren.
4. Bestehende DIGITAL-easy-URLs inventarisieren und Weiterleitungen beim Domainwechsel planen, insbesondere den bekannten alten Pfad `/dienstleistungen.html`.
5. Mailclient-Übergabe auf dem vorgesehenen Endgerät prüfen; dabei ist ein echter Versand nicht für den Test erforderlich.

Es gibt keine bekannten fehlgeschlagenen lokalen technischen Prüfungen. Die genannten Grenzen und die Rechtsfreigabe bleiben offen. Dateien sind vorbereitet; veröffentlicht wurde nichts.
