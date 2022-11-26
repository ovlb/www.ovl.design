---
title: Mauern in der Werbewüste
subtitle: Ein Streifzug durch die bunte Welt der Bits, Bytes und Banner.
intro: Warum Ad-Block-Walls nerven, warum Online-Werbung schlecht für die Privatsphäre ist und kein Patentrezept, was zu tun ist.
date: '2017-10-04'
locale: de
image:
  og: 'ovl-og-image-mauern.png'
  title: 'mountain-high.jpg'
  alt: 'Schwarz-weiß Aufnahme einer kargen hügeligen Landschaft. Der Himmel ist wolkenverhangen. Das Bild straht eine tiefgehende Tristesse aus.'
tags:
  - cat:technology
  - cat:advertising
---

Ein von mir hin und wieder gelesenes Magazin, bzw. die Verlagsgruppe, der das Magazin gehört, entschied sich vor Kurzem, seine Inhalte hinter einer Ad-Block-Wall zu verstecken. Anstatt eines Artikels sehe ich einen kecken Spruch in einem die Seite überlagernden Fenster. Das Overlay informiert, in der für solche Overlays eigenen, an das gute Gewissen der potentiellen Leser*innen appellierenden Art, warum es dringend notwendig ist, dass ich meinen Ad-Blocker ausschalte. Ein Appell, der insofern schon interessant ist, weil die Konsequenz – Werbung – sich eher selten durch hohe moralische Standards auszeichnet. Ich habe kurz nachgedacht. Und den Artikel nicht gelesen. Warum?

### Pandora

Der Markt für digitale Werbung funktioniert nicht so, dass ich an einer Stelle Werbung zulasse und es damit gut ist. An der Werbung hängt ein ganzer Rattenschwanz an Tracking und Behavioral Analysis. Vorgeblich anonymisiert natürlich. Anonymisierung, mit der es nicht allzu weit her ist, wie [der an dieser Stelle zu empfehlende Vortrag](https://media.ccc.de/v/33c3-8034-build_your_own_nsa "Build Your Own NSA – 33C3" ) von [Svea Eckert](https://sveaeckert.de/index.html "Website von Svea Deckert") und [Andreas Dewes](http://www.andreas-dewes.de/ "Homepage von Andreas Dewes") auf dem 33C3 zeigt. Es werden Daten gesammelt. Daten, die dann verkauft werden und verkauft werden und verkauft werden. Ein Spiel, an dem sich einige Browser-Add-Ons, die ihm eigentlich Einhalt gebieten sollten, [gerne](https://lifehacker.com/ad-blocking-extension-ghostery-actually-sells-data-to-a-514417864 "Ad-Blocker Ghostery Actually Helps Advertisers, If You Support It – lifehacker.com") [beteiligen](https://www.kuketz-blog.de/adblock-plus-ein-trojanisches-pferd/ "Adblock Plus: Ein trojanisches Pferd – Mike Kuketz"). Zu diesen Zwecken laden die Werbung-Scripts Scripts nach, die Scripts nachladen.

Eine Seite zu whitelisten ist das digital-kapitalistische Äquivalent zum Öffnen der Büchse der Pandora. Welcher Sturm über das eigene Verhalten herzieht, zeigt die – auch im Vortrag gezeigte – [Marketing Technology Landscape](http://chiefmartec.com/2017/05/marketing-techniology-landscape-supergraphic-2017/ "Marketing Technology Landspace 2017 – chiefmartec.com"). Das Unbehagen gegenüber Werbung im Internet ist Produkt ebenjener Industrie, die mit den Daten der Getrackten gutes Geld macht.

### Übrigens …

Ich verbringe anscheinend zu viel Zeit an meinem Handy. Dort, wo es wesentlich schwieriger ist, genau einzustellen, was ich an Ad-Servern zulassen will oder nicht, werde ich rausgeschmissen. Auf meinem Computer kann ich trotz PrivacyBadger und Disconnect Artikel lesen. Vielleicht, weil es mit geringem Aufwand möglich ist, [das entsprechende Element wieder zu entfernen](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/edit-dom#delete_dom_node "Edit the DOM, Kapitel Delete DOM Node – Google Developers"). Vielleicht, weil Browser- und Blocking-Sniffing fehleranfällig ist. Vermutlich nicht, weil Ad-Blocker auf mobilen Geräten noch weit weniger verbreitet sind, als in Desktop-Browsern. Aber zurück zum Thema.

### Like, do you even care?

Es ist deswegen zumindest vereinfachend zu verlangen, dass User\*innen ihr Verhalten zu ändern haben. Welche\*r Seitenbetreiber*in kann schon mit Gewissheit sagen, was das Zulassen von «ein bisschen Werbung, die dich garantiert auch ein bisschen interessiert» eigentlich bedeutet? Wer wühlt sich durch den Call-Stack der Scripte, guckt, mit wem die geschaltete Werbung kommuniziert und recherchiert, welche Firmen am Ende welche Daten verkaufen, in welcher Form und wohin? Im Falle dieses Magazins wurden um die 50 Anfragen an externe Server gestellt. Die meisten an Dienste von Google, inklusive deren Ad- und Retargeting-Plattformen. Zwei an explizite Ad-Netzwerke.

Einige Effekte sind aber auch ohne mühselige Arbeit einfach zu beobachten. Auf einem iPhone 5 lädt die Artikelseite 8 Megabyte an Assets. Mit deaktiviertem Adblocker kommen noch 2 Megabyte dazu. 2 Megabyte für die Anzeige zweier kleiner, verpixelter Banner-Ads, von der ich eine nur halb lesen kann, weil sie über den Viewport hinausläuft. Eine Erfahrung, die sicherlich nichts mit dem Können des Entwicklers der Seite zu tun hat, sondern immer wieder vorkommt.

Die Reaktion auf Bitten, vom Blockieren der Werbung Abstand zu nehmen, überrascht demnach wenig. 74% der Nutzer*innen, die Ad-Blocker nutzen, verlassen die Seite einfach wieder (s. [PageFair – Ad-Block-Report 2017](https://pagefair.com/blog/2017/adblockreport/), Slide 13).

Für Magazine, die ein überwiegend junges Publikum ansprechen, sind das schlechte Nachrichten: In Deutschland benutzen die Altersgruppen 18–24 (52,12%) und 25–34 (55,13%) (Quelle: [Umfrage zur Nutzung von Adblockern nach Altersgruppen in Deutschland 2017, Statista 2017](https://de.statista.com/statistik/daten/studie/575166/umfrage/nutzung-von-adblockern-nach-altersgruppen-in-deutschland/)) am häufigsten Ad-Block-Software.

### Schutz

Im YouGov-Report [Nutzer von Adblockern und Anti-Tracking-Software](https://yougov.de/landing/profiles-update-adblocker/ "Nutzer von Adblockern und Anti-Tracking-Software – YouGov") sind Ausblenden von nerviger (62%) und aufdringlicher (60%) Werbung und Schutz vor Malware und Viren (43%) bzw. dem allgemeineren «um online besser geschützt zu sein» (37%) die meist genannten Gründe für die Verwendung von Ad-Blockern. Gründe, die nicht von der Hand zu weisen sind. Im März 2016 [wurden Tausende durch Werbung mit Ransomware infiziert](https://arstechnica.com/information-technology/2016/03/big-name-sites-hit-by-rash-of-malicious-ads-spreading-crypto-ransomware/ "Big-name sites hit by rash of malicious ads spreading crypto ransomware  – arstechnica.com"), die sie sich nicht in irgendwelchen obskuren Ecken des Internets eingefangen haben, sondern auf durchaus krediblen Seiten wie der BBC, der New York Times oder MSN.

Schutz ist irre wichtig. Oder, wie [Tim Berners-Lee](https://www.w3.org/People/Berners-Lee/ "") [es ausdrückt](https://www.theguardian.com/technology/2017/apr/04/tim-berners-lee-online-privacy-interview-turing-award "Interview mit Sir Tim Berners-Lee im Guardian"):

> Because so much of what we do in our lives that actually goes through those left-clicks, it can be ridiculously revealing. You have the right to go to a doctor in privacy where it’s just between you and the doctor. And similarly, you have to be able to go to the web.

### «There ain’t no such thing as a free lunch»

In jeder Diskussion zum Thema Monetarisierung wird früher oder später darauf hingewiesen, dass es nichts umsonst gäbe, dass es die «Umsonstmentalität» der Konsumierenden sei, die Verlage an den Rand des Ruins treiben würde. Mal mehr, mal weniger pathetisch oder angreifend ausgedrückt.

Das Eintreiben von Gewinnen ist inhärente Notwendigkeit kapitalistischen Arbeitens – Start-Ups mal ausgenommen. Es ist also eine inhärente Notwendigkeit des digitalen Publizierens im Kapitalismus. Print-/Online-Medien sind für diese Zwecke neben Abonnements traditionell auf das Geld aus dem Verkauf von Anzeigen angewiesen.

Einnahmen, die seit Jahren sinken. Eine kurze «[Recherche](https://www.google.de/search?q=sinkende+werbeeinahmen+zeitungen "Google-Suche nach sinkenden werbeeinahmen zeitungen")» weiß seit Jahren keine positiven Meldungen zu verzeichnen.  Ein Eindruck, der von Statista [bestätigt wird](https://de.statista.com/statistik/daten/studie/161073/umfrage/nettowerbeeinnahmen-der-publikumszeitschriften-seit-2000/ "Nettowerbeeinnahmen der Publikumszeitschriften in Deutschland in den Jahren 2004 bis 2016 (in Millionen Euro) – statista.de"). Die Nettoeinnahmen durch Werbung gingen 2016 auf 1.015 Millionen Euro zurück (2015 1.075 Millionen, 2014 1.190 Millionen, Höchstwert der letzten zwölf Jahre 1.856 Millionen Euro, 2006).

«Alles für alle – und zwar umsonst» ist in diesem Marktumfeld zwar als hehres Ziel wahr, geht aber an den konkreten Nöten der Verlagshäuser, Redaktionen etc. vorbei. Es muss dann aber auch ihre Aufgabe sein, das Vertrauen wieder herzustellen, dass Jahre der weitgehend unkontrollierten Datensammelei zersetzt haben. Wer zum Essen einlädt, muss dafür sorgen, dass die Rechnung kein Jamba-Abo beinhaltet.

Das Argument lässt sich übrigens leicht eine Stufe weiterdenken. Die läppischen Summen, die pro Klick ausgezahlt werden, reichen bis zu einer kritisch hohen kritischen Masse vorne und hinten nicht aus, um von diesen Klicks eine Redaktion zu unterhalten. Bis zu diesem Moment profitiert vor allem das Ende der – um bei Thema Kulinarik zu bleiben – Nahrungskette: die Werbenetzwerke, [mit weitem Abstand Google und Facebook](http://www.businessinsider.de/facebook-and-google-dominate-ad-industry-with-a-combined-99-of-growth-2017-4?r=US&IR=T "Facebook and Google completely dominate the digital ad industry – Business Insider"), und Mediaagenturen.

Man gerät beinahe in Versuchung, Paywalls für eine gute Idee zu halten. Immerhin weiß man in dem Fall, wo das Geld hingeht. Wären Paywalls nicht aus prinzipiellen Gründen schon keine Alternative.

### Keine Alternative?

Paywalls sind schon deswegen keine Alternative, weil sie eines der gängigsten Modelle eines Monetarisierungs-Versuchs sind. Von Spitzfindigkeiten abgesehen: Sich zu verstecken, bringt im Endeffekt niemandem was. Wenn ein Artikel gut ist, warum verhindern, dass ihn Leute, die sich dafür interessieren, lesen können, weil sie das ausblenden, was sie nicht interessiert? Womit auch ausgeschlossen ist, dass sie ihren Freund*innen von diesem Artikel erzählen.

Es ist ein wunderlicher Ansatz, Leute an den Rand der Oase zu locken, um sie dann wieder in die Wüste zu schicken. Wenn der Weg zur Oase über Google oder Facebook führt, was mittlerweile über die ganze Medienlandschaft verteilt die beiden häufigsten Wege sind, schneidet man sich damit höchstens wieder ins eigene Fleisch.

Hohe Bounce-Rates führen zu niedrigen Werbeeinahmen, schlechterer Platzierung der noch so schön geschriebenen Hinweisschilder am Wegesrand und damit letztendlich wieder zu Frustration. Ich und die Millionen anderer User*innen von Ad-Block-Software kriegen von dieser Verzweiflung nichts mehr mit, wir sind längst woanders.

Es ist möglich, Werbung zu schalten, die die Bedürfnisse der User\*innen respektiert. [Forschung dazu](https://www.nngroup.com/articles/user-requirements-online-ads/ "Five User Requirements for Online Ads – Therese Fendersen") kommt zum Beispiel von der [Nielsen Norman Group](https://www.nngroup.com/ "Homepage der Nielsen Norman Group"). Im [Ad-Block-Report 2017](https://pagefair.com/blog/2017/adblockreport/) (Slide 14) geben 77% der Ad-Block-User\*innen an, bestimmte Formate für tolerabel zu halten. Die genannten Formate decken sich weitestgehend mit den Ergebnissen der Nielsen Norman Group.

Die New York Times, The Atlantic usw. erlauben, ein paar Artikel pro Monat zu lesen und sperren erst nach Erreichen der Grenze den Zugang. Auch in Deutschland mittlerweile einer [der weit verbreitesten Ansätze](https://de.statista.com/infografik/1239/deutsche-zeitungen-mit-paywall/ "123 deutsche Zeitungen setzen auf Paywall – Matthias Brandt"). Man nennt es *Metered Modell*. Größere Werbehäuser [unterhalten eigene Firmensparten](http://meedia.de/2017/06/14/umsatz-anteil-liegt-schon-bei-20-prozent-die-erfahrungen-von-burda-gruner-jahr-co-mit-native-advertising/ "Umsatz-Anteil liegt schon bei 20 Prozent: die Erfahrungen von Burda, Gruner + Jahr & Co. mit Native Advertising – meedia.de"), die sich um die Erstellung von *Native Advertising*-Content kümmern.

[Springer indes kauft Werbeplattformen](http://www.zeit.de/news/2017-08/02/medien-axel-springer-baut-geschaeft-mit-online-werbung-aus-02104604 "Axel Springer baut Geschäft mit Online-Werbung aus – Die Zeit") einfach ganz.

### Große Fische, kleine Fische

Ein kleines Nischenmagazin hat nicht die Mittel, die einem Haus wie Springer oder Burda zur Verfügung stehen. Ein berechtigter Einwand, ein Stück weit zumindest. Ein Laissez-Fair-Overlay wie das der taz. oder des Freitags kostet nicht mehr Aufwand als eine stringente Ad-Block-Wall. Lässt aber eine Wahl – man mag es Freundlichkeit nennen – zu. Ein Hinweis am Ende oder während eines Artikels, wie es zum Beispiel The Guardian oder netzpolitik.org nutzen, ist noch unaufwendiger und um ein vielfaches freundlicher. Bei der taz. kann man pro Artikel zahlen. Plattformen wie Patreon professionalisieren das Modell der Micro-Payments und geben die Möglichkeit, den Unterstützer\*innen eine Kleinigkeit – oder je nach Summe eine Großigkeit – zurückzugeben. Kleine Gesten, die für die Zahlungsbereitschaft auch jenseits von klassischem, produktorientiertem Crowdfunding bedeutsam sein können.

### Tear down this wall

Akteur\*innen, die sich unter dem Vorwand, dass es keine Alternative gäbe, den dysfunktionalen bestehenden Konzepten ausliefern, müssen sich nicht wundern, wenn sie damit erneut gegen eine Wand fahren. In dem Fall eine, die sie selber vor ihren Content geschaltet haben. Alternative Ansätze mögen noch in den Kinderschuhen stecken. Wenn sie niemand dort raus holt, wird sich daran gewiss nichts ändern.

Neue Vermarktungsmodelle zu finden, das verlorene Vertrauen in gefahrlose und zurückhaltende Werbung wieder aufzubauen braucht Zeit. Es ist keine einfache Lösung in Sicht. Das bisherige Katz-und-Maus-Spiel, eine Jagd – das Gegenteil einer Konversation, eines ernstnehmen der User*in – führt schlußendlich nur zu einem: Einer von Click-Bait-Headlines verzierten Ödnis. Stopp. Bitte.

### Schlussbemerkung

Die Betrachtungen müssen notwendig fragmentarisch sein, sie sind mein momentaner Stand des Wissens, auch eine Bitte um Diskussion. Man erreicht mich bei [Twitter](https://twitter.com/_ovlb) oder per [Mail](mailto:o@ovl.design).
