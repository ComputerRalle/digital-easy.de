# DIGITAL-easy.de

Statische Website von Ralf-Peter Kleinert / ComputerRalle. Schwerpunkt: Dozententätigkeit, Lehre, YouTube-Tutorials und nachvollziehbares IT-Wissen aus der Praxis.

## Stand

Die Website ist lokal umgesetzt und technisch geprüft. Sie wurde nicht veröffentlicht. Impressum und Datenschutz sind ausdrücklich als Prüffassungen gekennzeichnet. Hosting und Rechtsangaben müssen vor Veröffentlichung bestätigt werden. Details: [LEGAL-REVIEW.md](LEGAL-REVIEW.md) und [QA-REPORT.md](QA-REPORT.md).

## Ohne Build-Schritt bearbeiten

Alle Inhalte stehen direkt in HTML-Dateien. Keine Installation, kein Framework, kein CMS und kein Paketmanager erforderlich.

```text
index.html               Startseite
leistungen.html          Wissen & Lehre
projekte.html            Eigene Werkzeuge und Fachanleitungen
ueber-mich.html           Person und Markenrollen
kontakt.html             Mailclient-Kontaktformular
impressum.html            Prüffassung aus der vorgeschriebenen Quelle
datenschutz.html          Technische Angaben und erhaltene Rechtstextquellen
404.html                 Eigene Fehlerseite
assets/css/style.css     Farben, Layout, Komponenten, Kontrast
assets/js/main.js        Navigation, Kontrastschalter, Mailübergabe
assets/img/              Favicon und Vorschaubild für geteilte Links
robots.txt
sitemap.xml
.nojekyll                Statische Auslieferung ohne Jekyll-Verarbeitung
```

## Lokal ansehen

Im Projektordner beispielsweise mit installiertem Python:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Danach `http://127.0.0.1:8080/` öffnen. Der einfache Python-Server zeigt bei unbekannten Pfaden seine eigene Fehlerantwort; `404.html` lässt sich direkt ansehen. Für die automatische eigene 404-Seite ist die entsprechende Hostingkonfiguration erforderlich. Der verwendete QA-Server hat auch verschachtelte unbekannte Pfade mit der eigenen Fehlerseite und HTTP 404 geprüft.

Normale Seiten lassen sich außerdem direkt im Browser öffnen. Die 404-Seite verwendet bewusst eine Basis-URL auf die Domainwurzel, damit ihre Links und Assets auch bei unbekannten verschachtelten URLs funktionieren. Diese Seite über einen Webserver prüfen.

## Inhalte pflegen

- Texte direkt in der jeweiligen HTML-Datei bearbeiten. Jede Seite hat eine H1.
- Header und Footer sind absichtlich im HTML enthalten. Gemeinsame Änderungen auf allen acht Seiten ausführen; im Header nur der jeweils aktive Link trägt `aria-current="page"`.
- Farben zentral in den CSS Custom Properties ändern. Auch Hover, Fokus und hoher Kontrast sind dort bzw. in den entsprechenden Token-Überschreibungen definiert.
- Titel, Beschreibung, Canonical, Open Graph und JSON-LD bei inhaltlichen Änderungen mitpflegen.
- Der Kontrastmodus wird nicht gespeichert. Es gibt keine Cookies, Analytics, externen Fonts, eingebetteten Videos oder Drittanbieter-Skripte im Frontend.
- Externe Links öffnen im selben Tab. Der Nutzer kann sie mit den üblichen Browserfunktionen in einem neuen Tab öffnen. `Referrer-Policy` wird per Meta-Tag auf `no-referrer` gesetzt.
- Keine Ankündigungen von Wartungsverträgen, Notfallhilfe oder garantierter Verfügbarkeit ergänzen. Administration ist als Erfahrungsgrundlage dargestellt. Konkrete Lehrformate, Preise und Termine nur nach Bestätigung eintragen.

## Kontaktformular

Empfänger: `kontakt@ralf-peter-kleinert.de`.

Betreff: `Kontaktformular digital-easy.de`.

Das Formular erstellt ausschließlich im Browser einen kodierten `mailto:`-Link. Name und Nachricht sind erforderlich; eine abweichende Antwortadresse ist optional. Es gibt keinen Versand-Endpunkt. Der Benutzer prüft und versendet die Nachricht im eigenen Mailprogramm. Die Website kann das Öffnen und Versenden nicht bestätigen. Browser und Betriebssystem müssen einen Mailhandler bereitstellen.

Eingaben bleiben erhalten; die sichtbare E-Mail-Adresse ist die Alternative bei fehlendem JavaScript oder Mailhandler. Längere Texte und Anhänge im Mailprogramm ergänzen. Das 1.500-Zeichen-Limit ist keine Garantie für alle Kombinationen von Browser und Mailprogramm. Kein direkter Versandtest wurde ausgelöst.

## Spätere Servervideos

Die bestehende Projektsektion kann um konkrete Videos ergänzt werden. Zunächst Titel, kurze Beschreibung, Lernziel und normaler YouTube-Link. Keine leeren Videokarten. Bei tatsächlicher Player-Einbettung Datenflüsse, Freigabe vor dem Laden, Untertitel/Transkript, Datenschutz und Performance erneut prüfen. In dieser Fassung werden keine Videos eingebettet.

## SEO und rechtliche Prüffassungen

Die fünf fertigen Inhaltsseiten sind indexierbar. Impressum, Datenschutz und 404 sind `noindex, follow`; die Sitemap enthält nur die fünf indexierbaren kanonischen Seiten. Nach rechtlicher Freigabe bei Impressum und Datenschutz `noindex` entfernen und beide URLs in die Sitemap aufnehmen. Keine erfundenen Änderungsdaten.

`Person` beschreibt Ralf-Peter Kleinert mit dem Alias ComputerRalle. DIGITAL-easy ist als `Brand` zugeordnet. `WebSite` und `WebPage` verknüpfen die Inhalte. Es wird keine separate Gesellschaft oder Zertifizierung behauptet.

## Vor einer Veröffentlichung

1. Hostinganbieter, Logs, Mailverarbeitung und Rechtstexte anhand LEGAL-REVIEW.md bestätigen lassen. Prüffassungen nicht ungeprüft veröffentlichen.
2. Externe Links mit nicht bestätigter Erreichbarkeit erneut prüfen. Der QA-Bericht unterscheidet Timeouts von bestätigten Fehlern.
3. Den bisherigen DIGITAL-easy-Auftritt und seine URLs sichern. Bekannter alter Verweis: `/dienstleistungen.html`; mögliche Weiterleitung auf `/leistungen.html` beim Hosting konfigurieren. Bestehende Datenschutz-URL bei einer Änderung ebenfalls berücksichtigen. Nicht jede alte URL wurde vollständig inventarisiert.
4. Domain, DNS und HTTPS beim gewählten Hosting kontrollieren. Es wurden keine DNS-Einstellungen, kein CNAME und keine Deployment-Workflows verändert oder angelegt.
5. Tatsächliche HTTP-404-Antwort und geeignete Sicherheitsheader beim Hosting prüfen. Keine für GitHub Pages wirkungslose `.htaccess` ist enthalten.
6. Der Benutzer übernimmt Commit, Push und Veröffentlichung. Es wurden keine Änderungen veröffentlicht.

## Quellen und Prüfung

Analyse und Inhaltsbelege: [PROJECT-PLAN.md](PROJECT-PLAN.md).

Rechtliche Quellen, unveränderte Übernahme und offene Entscheidungen: [LEGAL-REVIEW.md](LEGAL-REVIEW.md).

Technische Prüfung und Einschränkungen: [QA-REPORT.md](QA-REPORT.md).
