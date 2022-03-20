---
layout: 'layouts/post.njk'
permalink: 'text/computer-says-no/'
pageCSS: 'textDetail'
post:
  title: Computer says no
  date: '2021-12-26'
  contentIntro: Künstliche Intelligenz & Herrschaft
  intro: 'Überlegungen zum Zusammenhang von Künstlicher Intelligenz und staatlicher und ökonomischer Herrschaft.'
  openGraphImage:
    fields:
      file:
        url: //images.ctfassets.net/0qq78o7muy2j/8OI9ZeDulEkDEm7AUIQsU/f0b1c85778beae2804de6ee205a67a81/ovl-og-image-csn.jpg
  image:
    fields:
      description: Screenshot aus Little Britain. Eine Frau mit langem braunen Haar und Brille sitzt an einem Schreibtisch und tippt etwas in einen Computer.
      file:
        url: //images.ctfassets.net/0qq78o7muy2j/2VOeVQOCSzoXSRD2tDl78t/e0fa63aebfee52be1af314b6b07b6009/2112-computer-says-no-title.jpg
---

Dieser Text ist eine Begleitung zu meinem Vortrag <cite>[Computer says no](https://pretalx.c3voc.de/rc3-2021-cbase/talk/X7RE9X/)</cite>, gehalten auf der zweiten remote Chaos Experience. [Die Aufzeichnung gibt es bei media.ccc.de](https://media.ccc.de/v/rc3-2021-cbase-315-computer-says-no-kuns).

<iframe class="-is-video" loading="lazy" src="https://media.ccc.de/v/rc3-2021-cbase-315-computer-says-no-kuns/oembed" frameborder="0" allowfullscreen></iframe>

Über die hier besprochenen Themen kann man Bücher schreiben, wurden Bücher geschrieben. Ich erhebe also keinen Anspruch auf Volständigkeit. Die [Liste meiner Quellen](/text/computer-says-no/quellen/) habe ich separat veröffentlicht. Die [Slides können auf Notist eingesehen werden](https://talks.ovl.design/wBntT5/computer-says-no-kuenstliche-intelligenz-herrschaft). Eine (automatsich erstellte) [englische Übersetzung](/text/computer-says-no-en/) ist verfügbar.

---

Im Folgenden werden wir sehen, wie die heute bestimmende Sicht auf Künstliche Intelligenz entstanden ist. Wir setzen uns mit den Auswirkungen algorithmischer Kontrolle auf dem Arbeitsmarkt auseinander und warum immer wieder der Vergleich mit der industriellen Revolution aufkommt. Inwiefern der Begriff der Zeit als zentraler Punkt in den Kämpfen der Arbeiter:innen vom 20. Jahrhundert bis zu Amazon Warenhäusern steht. Und warum die Roboter uns am Ende nicht die Arbeit wegnehmen, sondern uns gar nicht erst Arbeit bekommen lassen.

Im zweiten Teil werden wir sehen wie Künstliche Intelligenz zum Mittel staatlicher Herrschaft wird und untersuchen die individualsierende Tendenz der Überwachung. Wir sehen Drohnen am Himmel und zentralisierende Tendenzen in dem Zugriff auf die nötigen Produktionsmittel.

Abschließend werfen wir einen Blick auf Möglichkeiten und Bedingungen des Widerstands. Eine Bestandsaufnahme jenseits von Technooptimusmus oder Primitivismus. Und am Ende werden wir sehen, dass der Diskurs nicht Technik als Dreh-und Angelpunkt haben sollte, sondern die Solidarität.

## Künstliche Intelligenz, oder was?

Ich werde im Folgenden verallgemeinernd von Künstlicher Intelligenz sprechen. Einigen meiner Leser:innen wird dies, zurecht, als grobe Kategorie vorkommen.

Es geht auf einer rein technischen Ebene vor allem um _Machine Learning (ML),_ oder auch _Deep Learning_. Also um spezifische Subfelder von KI.

Im technisch-akademischen Diskurs ist diese Unterscheidung wichtig. Im Falle einer Betrachtung wie der hier anstehenden birgt diese vermeintliche Unschärfe auch Vorteile, wie Kate Crawford in der Einführung ihres Buches <cite>Atlas of AI</cite> beschreibt:

> [T]he nomenclature of AI is often embraced during funding application season, when venture capitalists come bearing checkbooks, or when researchers are seeking press attention for a new scientific result. As a result, the term is both used and rejected in ways that keep its meaning in flux. For my purposes, I use AI to talk about the massive industrial formation that includes politics, labor, culture and capital. When I refer to machine learning, I’m speaking of a range of technical approaches (which are, in fact, social and infrastructural as well, although rarely spoken about as such).
> -- Kate Crawford – Atlas of AI, p. 9

In diesem Sinne ist dies kein Text über Machine Learning, auch wenn es eine Rolle spielt. Es ist kein technischer Text. Es ist ein Text über die Welt, in der wir leben. Crawford bezeichnet KI als _Verzeichnis von Macht_. Wie wir im Folgenden sehen werden, fast dies die Lage treffend zusammen.

Eine andere Lücke, die ich noch ansprechen möchte, bevor es losgeht: Das Feld, das ich hier bespreche, ist riesig. Ich fokussiere mich deswegen auf einige Bereiche, die es erlauben ein schlüssiges Bild zu zeichnen. Nichtsdestoweniger kann ein Text von dieser Länge niemand hinreichen sein, alle Nuancen des Felds zu besprechen. Er will somit auch keine abschließenden Wahrheiten festhalten, sondern Richtungen, Anstöße des Denkens und der Diskussion.

## ImageNet – wie Machine Learning sich für immer veränderte

Eine, auch nur halbwegs, ausführliche Geschichte des Auf und Abs der Künstlichen Intelligenz und verwandter Felder wäre ein eigener Vortrag. Ich werde mich hier deswegen auf einen einschneidenden Punkt der jüngeren Forschungsgeschichte konzentrieren: ImageNet.

Für alle, die noch nie von ImageNet gehört haben mögen: Was ist ImageNet eigentlich?

Man kann wohl ohne zu übertreiben behaupten, dass ImageNet einer der einflussreichsten Datensätze in der Geschichte des Machine Learning ist. Die Zusammenfassung der Daten mit aus den Internet zusammengeklaubten Bildern und die Anwendung des AlexNet-Algorithmus. um mit ihnen zu arbeiten, haben das Feld nachhaltig geprägt und prägen es bis heute.

Millionen von Bildern wurden in Handarbeit abertausenden von Begriffen zu geordnet. Die Forscherin Fei-Fei Li kam 2006 auf die Idee zu dem Datensatz. Die Grundlage wurde durch Bilder geschaffen, die ohne groß zu fragen aus dem Internet gesammelt wurden, etwa aus Googles Bildersuche. Das Internet und die immer leistungsstärker werdenden Computer führten hier zu einem perfekten Sturm.

Zehn Jahre vorher war es noch mit immensen Schwierigkeiten behaftet, Datensätze mit auch nur einigen zehntausend Einträgen zu bilden. ImageNet besteht aus circa _vierzehn Millionen_ Bilder in zwanzigtausend Kategorien. [PASCAL VOC](https://paperswithcode.com/dataset/pascal-voc), einer der Vorläufer ImageNets beinhaltet zwanzig Kategorien und 19.737 Bilder.

Die Kategorien, denen die Bilder in ImageNet zugeordnet wurden, wurden einem Datensatz namens WordNet entnommen. WordNet wurde in den 1980er Jahren George A. Miller entwickelt. Anhand der Worte in WordNet wurden Bildersuchen gescraped und die Ergebnisse gespeichert.

Nun ergab sich ein zentrales Problem: Wie kann sichergestellt werden, dass die gespeicherten Bilder auch beinhalten was gesucht wurde? Vor ImageNet war diese Arbeit der Klassifikation für Studienanfänger:innen reserviert. Jia Deng, einer der Mitforschenden an ImageNet kalkulierte, dass es neunzehn Jahre dauern würde, alle Bilder in ImageNet auf diese Art und Weise zu klassifizieren. Die Arbeit zu automatisieren war unmöglich. Es gab (und gibt) keinen Algorithmus, der diese Zuordnungen fehlerfrei vornehmen kann.

An dieser Stelle kommt Crowdworking ins Spiel, um genau zu sein Amazons Mechanical Turk Plattform.

> On this new platform, anyone could construct a «Human Intelligence Task» to be completed by the workers on the platform who would be paid by each item they completed. This solution quickly solved their image annotation problem by allowing the problem to be broken down and distributed across 49 thousand workers from 167 countries.
> -- [Denton, E. et al. (2021) - On the genealogy of machine learning datasets: A critical history of ImageNet](https://journals.sagepub.com/doi/full/10.1177/20539517211035955)

Es gibt nur ein Problem: Durch diese Arbeit wird jeder Zusammenhang aus den Bildern entfernt und das menschliche Sehen als ein rein mechanischer Prozess verständen, der visuelle Intelligenz auf niedrigschwellige Mustererkennung reduziert.

Von solchen Problemen unbeeindruckt, weil nicht wahrgenommen oder nicht als Problem verstanden wurde, wurden die Ergebnisse gespeichert und ImageNet von 2010–2017 in der ImageNet Large Scale Visual Recognition Challenge zur wettkampfförmigen Erforschung freigegeben.

Es dauerte bis 2012 zur nächsten Revolution. In diesem Jahr gewannen Alex Krizhevsky und sein Team der Universität Toronto die Challenge in einem Tempo, das vorher unvorstellbar war. Ihr Geheimnis war nicht neu, aber wurde vorher nicht auf die Analyse großer Datensätze angewandt: Neuronale Netze. Unter dem Alias Deep Learning wurden diese Netze in den folgenden Jahren und bis heute einer der tonangebenden Paradigmen im Machine Learning.

ImageNet ist aber auf noch eine Art ein Vorreiter.

Wie wir gleich sehen werden sind die Punkte der unsichtbaren Arbeit, des Fehlen von Zustimmung derer, die im Datensatz auftauchen, und die Priorisierung großer Mengen Daten über gesellschaftliche Zusammenhänge Muster, die immer und immer wieder auftauchen werden.

## Arbeit & Algorithmen

Im Zusammenhang mit Künstlicher Intelligenz sind im Allgemeinen drei Formen der Arbeit relevant:

Die erste ist völlig unbezahlte Arbeit. Diese wird in aller Regel nicht als solche wahrgenommen. Die User:innen von Websites, die CAPTCHAs für Googles Recaptcha-Dienst lösen, sind hier sicher das bekannteste Beispiel. [Google verbessert damit seine eigenen Bilderkennungsalgorithmen](https://www.techradar.com/news/captcha-if-you-can-how-youve-been-training-ai-for-years-without-realising-it).

### Unsichtbare Arbeit

In der Einleitung zur Geschichte der KI haben wir ImageNet als erste große Bilddatenbank gesprochen und über Crowdwork als eine der Voraussetzungen für ihre Verwirklichung. Heutzutage ist Crowdwork eines der Standbeine der Erstellung von Algorithmen.

In regelmäßigen Abständen können wir Schlagzeilen lesen, in denen Algorithmen als vollkommen automatisiert verstanden werden. «KI hat dieses oder jenes gemacht». In Go gewonnen, Texte geschrieben, Proteine in ihrer dreidimensionalen Struktur wiedergegeben. Diese Schlagzeilen haben nur ein Problem:

> Headlines like “AI discovered how to cure a type of cancer”. Of course it’s never AI that did this. It’s researchers, very hardworking researchers, who use AI machine learning tools like any other tool. It’s both demeaning to the researchers who did that work and creates massive confusion among the public when journalists attribute agency to AI. There’s no reason to do that, especially in headlines.
> -- Arvind Narayanan in [Fake AI](https://fakeaibook.com/), S. 24

Die Vorarbeit, in der Daten gesäubert und sortiert werden, [nimmt rund 80% der Entwicklungszeit](https://www.economist.com/technology-quarterly/2020/06/11/for-ai-data-are-harder-to-come-by-than-you-think) eines Machine Learning Models ein.

> Training a machine-learning system requires large numbers of carefully labelled examples, and those labels usually have to be applied by humans. Big tech firms often do the work internally. Companies that lack the required resources or expertise can take advantage of a growing outsourcing industry to do it for them.

Ein Prozess, den Kate Crawford, in Anlehnung an die [Potemkinschen Dörfer](https://de.wikipedia.org/wiki/Potemkinsches_Dorf), als _Potemkinsche KI_ bezeichnet:

> We could think of this as a kind of Potemkin AI – little more than facades, designed to demonstrate to investors and a credulous media what an automated system would look like while actually relying on human labor in the background.
> -- Kate Crawford – Atlas of AI, S. 65

Diese Menschen sorgen für den schönen Schein des Automatismus. Es soll von außen so aussehen, als würde alles vollautomatisch passieren, auch wenn es eigentlich menschliche Arbeit ist.

Versuche der Konzerne an Daten zu kommen können auch anders aussehen. In Atlanta, Georgia, testete Google seine Gesichtserkennungssoftware. [Im Austauch gegen fünf Dollar wurden gezielt Schwarze Obdachlose angesprochen](https://12ft.io/proxy?q=https://www.nydailynews.com/news/national/ny-witness-saw-homeless-people-selling-face-scans-google-five-dollars-20191004-j6z2vonllnerpiuakt6wrp6l44-story.html). Die Gegenleistung? Ein 3D-Scans des Gesichts zu Google hochladen. Google kam vorher wiederholt in die Kritik, weil ihre Bilderkennunsgalgorithmen Schwarze Menschen für Gorillas oder ein [Thermometer in einer schwarzen Hand für eine Waffe](https://algorithmwatch.org/en/google-vision-racism/) halten. Immer tut es Google sehr leid, was passiert ist. Bis zum nächsten Mal. 2021 schließlich macht Google Hochglanzwerbung damit wie gut die neuen Android-Telephone Schwarze Gesichter erkennen können.

Jenseits des Labeling von Datasets findet diese Geisterarbeit – ein Begriff Mary L. Gray und Siddharth Suri mit ihrem Buch «Ghost Work» prägten – heute an allen Ecken und Enden des digitalen Lebens statt. Die Verifizierung neuer Bankaccounts, die [Moderation von Inhalten bei Facebook oder Twitter](https://www.bpb.de/mediathek/273199/the-cleaners) oder auf Plattformen wie Fiverr.

Dies alles führt vorerst nicht dazu, dass uns Maschinen uns die Arbeit wegnehmen. [Wie Mary L. Gray im Interview mit dem Standard sagt](https://www.derstandard.at/story/2000124843896/klick-fuer-klick-zum-hungerlohn-das-digitale-prekariat-waechst):

> Wir sollten uns nicht davor fürchten, dass Menschen durch Technologie ersetzt, sondern dass sie entwertet werden.

Eine Perspektive, die auch Simon Schaupp betont, wenn er von einer [Abwertung der Arbeit mit einer einhergehenden Migrantisierung der Stellen spricht](https://futurehistories.podbean.com/e/s02e07-simon-schaupp/).

Es ist in dieser Ausbeutung, in der der Kapitalismus zu sich selber findet. Den größten Profit aus den Angestellten zu pressen, ist eine Grundbedingung der kapitalistischen Ökonomie per se. Die Systeme um KI & Co. bilden dort keine Ausnahme, sondern formulieren diese Ausbeutung unter dem Deckmantel der Zukunft neu.

### Frühkapitalismus im digitalen Gewand

Am 25. März 1911 [brannte in Manhattan die Triangle Shirtwaist Factory](https://en.wikipedia.org/wiki/Triangle_Shirtwaist_Factory_fire). 146 Arbeiter:innen starben in den Flammen, oder als sie aus dem brennenden Gebäude auf die Straßen sprangen. Die Ausgänge der Fabrik waren während der Arbeitszeit verschlossen, die Fabrik wurde zur Todesfalle. Die meisten der Toten waren Migrant:innen.

Am 10.12. tobe ein Tornado über Illinois. Amazon verlangte von seinen Angestellten zur Arbeit zu kommen. Abends wurde ein Amazon-Lagerhaus [von einem Tornado getroffen](https://www.nytimes.com/2021/12/11/us/amazon-warehouse-deaths-tornado.html). Jeff Bezos war damit beschäftigt an ein Leben im Weltraum zu denken, während das Lagerhaus kollabierte und sechs der Arbeiter:innen starben. Larry Vriden [schrieb kurz vor seinem Tod seiner Freundin](https://twitter.com/MorePerfectUS/status/1470513075489054720): «Well I’ll be home after the storm. Amazon won’t let us go.» Er kam nie wieder zu Hause an. [Unfälle und Gesundheitsprobleme](https://www.vice.com/en/article/qjbv4q/amazon-workers-say-theyre-pressured-to-work-in-dangerous-weather) kommen bei Amazon [immer wieder vor](https://revealnews.org/article/how-amazon-hid-its-safety-crisis/). In den USA lagen sie 2020 doppelt so hoch wie im Industriedurchschnitt.

Inwiefern haben sich die Arbeitsverhältnisse in den letzten 140 Jahren verändert? Was ist Arbeit eigentlich in einer algorithmisierten Welt und sollten uns die Roboter nicht schon längst die Arbeit wegnehmen?

Simon Schaupp beschreibt diese durch Algorithmen überwachten Arbeitsprozesse unter mit Begriff der «kybernetischen Verdichtung». Durch die fortschreitenden technischen Möglichkeiten kommt es zu einer systematischen Überwachung des Produktionsprozesses.

In extrem arbeitsintensiven Branchen wie Lieferdiensten oder Logistik führt dies dazu, dass das Gegenteil einer Vollautomatisierung passiert. Immer und immer mehr Menschen werden eingestellt, um die Prozesse aufrechtzuerhalten. [Amazon hat seit Anfang 2020 670.000 Arbeiter:innen eingestellt](https://www.statista.com/chart/7581/amazons-global-workforce/), um mit dem gesteigerten Auftragsvolumen während der Pandemie mitzuhalten.

Die meisten dieser Jobs sind bis auf die Sekunde genau getaktet:

> A swing of a second or two in the average time to complete a task can make the difference between getting kudos from a manager or a warning about job performance.

Neben der Überwachung sind Roboter auch im logistischen Betrieb [integraler Teil der Infrastruktur](https://www.bloomberg.com/news/features/2021-09-21/inside-amazon-amzn-flagship-fulfillment-center-where-machines-run-the-show).

Gleichzeitig gilt aber auch, dass es

> Teil der Aufgabe des kybernetischen Proletariats [ist], sich selbst überflüssig zu machen.
> -- [Simon Schaupp – Future Histories Podcast S02E07](https://futurehistories.podbean.com/e/s02e07-simon-schaupp/)

Dies passiert zum Beispiel in Logistikprozessen, die getracked werden, um sie durch eine KI zu ersetzen oder wenn Facharbeiter:innen die Systeme schreiben müssen, die sie schlußendlich abschaffen werden.

In der Zeit des Frühkapitalismus gab es schon Bestrebungen zur Automatisierung und damit einhergehenden Kontrolle der Arbeiter:innen. Aus Sicht des Kapitals waren Arbeiter:innen schon immer ein notwendiges Übel. Ohne geht’s halt nicht, aber mit wird der Profit eingeschränkt.

Engels’ zitiert schon 1844 Andrew Ure, dessen Hoffnung in die Produktivkraft der Maschine sich ohne Probleme auf die heutige Überhöhung der Robotisierung übertragen lässt:

> In wenig Monaten schon war eine Maschine fertig, die dem Anscheine nach mit dem Denkvermögen, Gefühl und Takt des erfahrnen Arbeiters begabt war.
> -- Andrew Ure – Philosophy of Manufactures

Die Tendenz des Kapitals von Fordismus über Taylorismus den Produktionsprozess effektiver und effektiver zu gestalten, stellte die Arbeiterbewegung Streiks und Organisierung entgegen. Nicht ohne Erfolg. Reduzierung der Wochenarbeitstunden, soziale Absicherung, unbefristete Arbeitsverträge usw. sind nur durch starke gewerkschaftliche Bewegungen und den Willen zum Widerspruch entstanden.

In der Gig-Economy und Amazons Warenhäusern sehen wir heute, dass all die Errungenschaften der Arbeiter:innenbewegung – inklusive des Rechts zur gewerkschaftlichen Organisierung – unter stetigem Angriff stehen und verteidigt bzw. zurückerobert werden müssen.

Nicht viel hat sich geändert, es scheint nur neu:

> Doch was als radikal neue Form der Arbeit daher kommt, ist im Licht der historischen Entwicklung oftmals mehr eine Wiederkehr früherer Arbeitsverhältnisse. Denn die Nutzung der Arbeitskraft durch die Unternehmen nur bei tatsächlichem Bedarf, der Stücklohn und die Tatsache, dass die Arbeitenden ihre eigenen Arbeitsmittel zur Verfügung stellen müssen, sind keineswegs neu und vielmehr so alt wie der Kapitalismus selbst. Konkret gleicht die digitalisierte Kurierarbeit wie auch viele andere Arten der Plattformarbeit dem proto-industriellen Verlagssystem der frühen Industrialisierung, das bereits im 19. Jahrhundert mit dem Begriff der «prekären Arbeit» gekennzeichnet wurde.
> -- [Heiner Heiland – Zurück in die Zukunft](https://www.rosalux.de/publikation/id/39921/zurueck-in-die-zukunft-1)

Diese Wiederkehr wird zur Farce, wenn Amazon, Apple oder Google sich berüchtigter Unternehmen wie den [Pinkertons](https://newrepublic.com/article/147619/pinkertons-still-never-sleep) bedienen, um [Angestellte und Umweltaktivist:innen zu überwachen](https://www.vice.com/en/article/5dp3yn/amazon-leaked-reports-expose-spying-warehouse-workers-labor-union-environmental-groups-social-movements) oder das [Textbuch Union Busting durchspielen](https://www.npr.org/2020/12/03/941860802/google-illegally-fired-and-spied-on-workers-who-tried-to-organize-labor-agency-s).

Man muss die Pathetik nicht teilen, aber am Ende bleibt es wie Engels es voraussagte:

> Die Arbeiter müssen sich also bestreben, aus dieser vertierenden Lage herauszukommen, sich eine bessere, menschlichere Stellung zu verschaffen, und dies können sie nicht tun, ohne gegen das Interesse der Bourgeoisie als solcher […] anzukämpfen.
> -- Friedrich Engels – Die Lage der arbeitenden Klasse in England

### Gig-Work und algorithmische Undurchsichtigkeit

Während der körperliche und geistige Tribut, den die Algorithmen in den Warenhäusern fordern, recht offensichtlich ist, gilt dies nicht in allen Bereichen des überwachten Arbeitens.

Bei Lieferdiensten etwa bleibt zum Großteil verborgen welchen Einfluss die Algorithmen haben. Die Arbeiter:innen wissen nicht, wie ihre Aktionen sich auf die zukünftige Arbeitseinteilung auswirken. Ein Beispiel hierfür ist die immer wiederkehrende These von Gig-Worker:innen bei Lieferando & Co., dass es schlecht sei Lieferaufträge nicht anzunehmen.

Beweise dafür oder dagegen kann es nicht geben, solange die Algorithmen und gesammelten Daten nicht zugänglich gemacht werden. In seinem Vortrag [Die soziale Konstruktion von Algorithmen](https://media.ccc.de/v/fiffkon2021-161-die-soziale-konstruktion-von-algorithmen#t=1298) zitiert Heiner Heiland einen Manager eines Lieferdiensts, der sagt, dass der benutzte Algorithmus «sehr dumm» war und immer die nächste:n Fahrer:in gewählt hat. Aber selbst wenn der Algorithmus dumm war oder ist, gibt es keine Garantie, dass er es bleibt. Oder der Manager nicht von Anfang an gelogen hat.

Grund zum Zweifeln gibt es umso mehr, wenn andere Firmen Produktivität als Teil ihrer Algorithmen implementiert haben. [Deliveroo wurde in Italien verurteilt](https://techcrunch.com/2021/01/04/italian-court-rules-against-discriminatory-deliveroo-rider-ranking-algorithm/), weil deren Algorithmus nicht zwischen «unproduktiven» Arbeiter:innen und jenen, die krank waren oder streikten, unterschied.

Man kann es nicht wissen, weil die Plattformen, wie sich nennen, die einzigen sind, die die Daten haben.

> Data, as it is conceived of now, simply flows away from workers and to the platform, where it becomes proprietary, valuable, and “big.” While platforms enjoy the advantages of gathering and analyzing big data, current data protection laws function at a “smaller” scale and are based around individual rights.

Gig-Worker:innen auf der ganzen Welt fordern die Abschaffung dieses Ungleichgewichts. Einerseits [indem sie selber Daten sammeln, und andererseits verlangen, dass Unternehmen ihre Technologien offenlegen](https://www.wired.com/story/labor-organizing-unions-worker-algorithms/).

Nur durch eine Kombination aus Rechenschaft und Organisierung wird sich die Lage ändern können.

### Auf Digitaluhren schießen

Die zunehmende Überwachung und Kontrolle führt zu einer Verdichtung der Zeit. Das Kapital fordert noch die letzte Sekunde der Lebenszeit ein, die die Arbeiter:in hinter den Toren der Produktionsanlage verbringt.

Schon zu analogen Zeiten war das miteinander Reden an einzelnen Fließbändern verboten, der wachsame Blick des Vorarbeiters immer lauernd. Hier kommt es zu einer paradoxen Situation: während die Zeit immer weiter kontrolliert wird, bietet die Abwesenheit des Menschen Raum für Unterhaltungen, neue Vernetzungen.

[Der Soziologe Simon Schaupp macht im Future Histories Podcast](https://futurehistories.podbean.com/e/s02e07-simon-schaupp/) noch einen anderen Punkt: Algorithmen lernen durch die Daten der Vergangenheit. Diese Daten werden durch die Arbeiter:innen geschaffen. Es ist also möglich durch kollektive Aktionen der Verlangsamung den Algorithmus zu zähmen.

Diese Form der Selbstermächtigung ist nicht neu. Arbeiter:innen sind schon früh auf die Idee gekommen, dass eine Verlangsamung der Arbeit ein effektives Mittel des Arbeitskampfes ist.

Im Bummelstreik wird jede noch so kleine Anweisung penibelst ausgeführt, die Produktivkraft sinkt so ohne dass zur Arbeitsniederlegung aufgerufen werden muss.

Zeit spielt schon seit den frühesten Tagen der Industrialisierung immer wieder eine Rolle im Kampf gegen die Herrschaft.

Walter Benjamin berichtet über die Juni-Revolution in Paris:

> Das Bewusstsein, das Kontinuum der Geschichte aufzusprengen, ist den revolutionären Klassen im Augenblick ihrer Aktion eigentümlich. […] Noch in der Juli-Revolution hatte sich ein Zwischenfall zugetragen, in dem dieses Bewusstsein zu seinem Recht gelangte. Als der Abend des ersten Kampftages gekommen war, ergab es sich, dass an mehreren Stellen von Paris unabhängig voneinander und gleichzeitig nach den Turmuhren geschossen wurde

Am Ende der 1920er Jahre baute Henry Ford eine Stadt mitten im brasilianischen Dschungel, um Kautschuk für seine Autos abzubauen. [Das Projekt lief nie wirklich gut](https://www.theguardian.com/cities/2016/aug/19/lost-cities-10-fordlandia-failure-henry-ford-amazon). Kautschuk wurde in Fordlandia nie angebaut. Im Dezember 1930 wurde während eines Aufstands neben allerlei Infrastruktur auch die Stechuhr zerstört.

All diese Formen der Auseinandersetzung erfordern eine Organisation, ein Bewusstsein dafür, dass, wie Engels es in <cite>Die Lage der arbeitenden Klasse in England</cite> sagte,

> die Herrschaft der Bourgeoisie nur auf der Konkurrenz unter sich beruht, d.h. auf der Zersplitterung des Proletariats.

Es ist diese Zersplitterung des Proletariats, die in der Zeit der kybernetischen Verdichtung auf die Spitze getrieben wird. Organisierung soll so unterbunden werden, der einzige Zweck der Arbeiter:in ist es mehr und mehr Geld einzubringen.

Soviel erstmal zu den veränderten Arbeitsprozessen. Wie wir gesehen haben, nehmen uns die Roboter die Arbeit (vorerst) nicht weg, sondern verdichten sie zugunsten des Kapitals.

### Die Roboter geben uns die Arbeit nicht

Neben einer Veränderung der Arbeit selber hat KI aber auch einen zunehmen Einfluss auf den Zugang zu Arbeit. Eines der Felder, in denen Algorithmen wie von Zauberhand alle Probleme lösen sollen, ist die Suche nach geeignetem Personal. Wie Reuters 2018 berichtete, musste Amazon [einen Algorithmus einstampfen, der Bewerbungen analysiert hat](https://www.reuters.com/article/us-amazon-com-jobs-automation-insight/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women-idUSKCN1MK08G). Weil in der Vergangenheit vor allem weiße Männer in Engineering-Stellen eingestellt wurden, kam der Algorithmus zum Schluss, dass Frauen ungeeignet seien. Als Amazon den Faktor Geschlecht ausgeschlossen hat, griff der Algorithmus auf Faktoren wie Teilnahme in einem Schachclub für Frauen oder Teilnahme in Frauenstudien.

[Bis heute](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3547922) ist dies [ein ungelöstes Problem](https://www.bbc.com/news/business-55932977). Deniz Erden hat sich in ihrem Beitrag <cite>KI und Beschäftigung</cite> in [Wenn KI, dann feministisch](https://netzforma.org/publikation-wenn-ki-dann-feministisch-impulse-aus-wissenschaft-und-aktivismus) ausführlich mit dem Thema beschäftigt, es war auch [Fokus mehrerer Folgen des In Machines We Trust-Podcasts](https://www.technologyreview.com/2021/08/04/1030513/podcast-beating-the-ai-hiring-machines/) des MIT Technology Review.

## Künstliche Ideologie

Im vorherigen Teil haben wir gesehen, wie menschliche Arbeit in die kapitalistischen Prozesse des Digitalen eingebunden wird, wie sie kontrolliert und überwacht wird. Diese Unterordnung der Arbeit, die Verklärung des technisch-mechanistischen in ein wesentlicher Teil der _Künstlichen Ideologie_.

Die Zuschreibung der Arbeit zu einem übergesellschaftlichen und körperlosen Wesen fügt sich ein in Erzählungen wie jener der Nerds, die im Alleingang die Welt verändern. Es ist aber, wie im Kapitel Unsichtbare Arbeit gezeigt, der Algorithmus, der im Alleingang verändert, so wenig wie es ein Steve Jobs oder Elon Musk getan haben oder tun.

Im Folgenden wird es darum gehen, wie technischer Fortschritt zu einem konkreten Mittel der Herrschaftsdurchsetzung wird, etwa in Krieg und dem Einsatz der Polizei, und wie unsere alltägliche Kommunikation sich dem Algorithmus aussetzt.

Wir sehen Teletubbies auf XTC und warum wir vor autonomen Waffensystemen weiterhin Angst haben sollten. Wie die Polizei versucht sich Gesichtserkennung zu Nutze zu machen und gleichzeitig die Klaviatur der Instagram-Algorithmen als Marketinginstrument bespielt. Und landen schließlich bei TikTok, der beliebtesten Website unserer Tage.

### Öffentliche Daten, privates Geld

Analog zu den frühkapitalistischen Tendenzen in den Arbeitsprozessen sehen wir eine Nutzbarmachung angesammelter Datenmengen in den Rechenzentren der großen Techunternehmen. Ein Prozess, der sehr an jenen der «ursprünglichen Akkumulation» erinnert, in der der Industriekapitalismus sich neue Rohstoff- und Absatzmärkte erschlossen und der Kapitaldynamik unterworfen hat.

Der Rohstoff sind unsere Geschichten, zerschlagen zu Datenpunkten. Der Absatzmarkt Kontrolle und Hokuspokus. Die Innovation ist ein Grundmechanismus des nach Totalität strebenden kapitalistischen Wirtschaftens. Die Innovation ist alt und gammlig.

Selbst wenn die Daten frei zugänglich bleiben, geschieht die Wertschöpfung durch proprietäre Prozesse. Googles Übersetzung etwa bedient sich der Sprachen, also wesentlich einem öffentlichen Gut, der Prozess der Übersetzung ist aber Geschäftsgeheimnis. Der freie Zugang bleibt also dem Gutdünken der Unternehmen überlassen. Wie das çapulcu redaktionskollektiv bemerkt:

> Der Übersetzungsassistent ist (derzeit) für alle ‹frei nutzbar› und dennoch machen wir uns mit seiner Nutzung von Google abhängig. Ein leichter Schritt für Google, in einer späteren Entwicklungsstufe die Nutzung der Software an Bedingungen zu knüpfen.
> -- çapulcu redaktionskollektiv – De_lete!, S. 47

Eine Abhängigkeitsdynamilk, die in der Geschichte des Kapitalismus nicht unbekannt ist. Man muss sich nur an das «Too big to fail»-Narrativ der letzten Bankenkrise erinnern, in der Unsummen an Steuergeld ausgegeben wurden, um den Finanzkapitalismus am Laufen zu halten. Unterstützt von großen Investitionen in Lobbyismus agieren Google, Facebook & Co. auf einem ähnlichen Level der vermeintlichen Systemrelevanz und versuchen ihre Zerschlagung zu verhindern.

Wir User:innen und die Gesellschaft als solche sind nicht die einzigen, die von dem Wohlwollen der Immergleichen abhängig sind.

### Ökonomische Abhängigkeiten

Auch für Forscher:innen wird es immer unmöglicher ihre Forschung zu betreiben, ohne auf deren immense Ressourcen im Bereich Rechenleistung und Datensammlung zuzugreifen.

> Big tech’s domination over the infrastructure of AI research and development extends beyond providing “neutral platforms.” These companies control the tooling, development environments, languages, and software that define the AI research process—they make the water in which AI research swims.
> -- [Meredith Whittaker – The Steep Cost of Capture](https://mags.acm.org/interactions/november_december_2021/MobilePagedArticle.action?articleId=1742681#articleId1742681)

Neben der Rechenleistung, sind auch die meisten [Konferenzen abhängig von Sponsoren-Geldern](https://arxiv.org/abs/2009.13676).

Was für Konsequenzen diese Kontrolle für unabhängige Forschung hat, zeigt [die Kündigung von Timnit Gebru](https://venturebeat.com/2020/12/03/google-ai-ethics-co-lead-timnit-gebru-says-she-was-fired-over-an-email/). Gebru war bis Ende 2020 Co-Lead eines Google Teams, das an ethischer KI geforscht hat. Als eine der angesehensten Forscherinnen in ihrem Feld, wurde sie offiziell entlassen, weil sie eine Mail an Mailingliste geschickt hat. Gebru sagt, dass sie aufgefordert wurde, das Paper <cite>[On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? 🦜](https://dl.acm.org/doi/10.1145/3442188.3445922)</cite> zurückzuhalten.

Das Papier untersucht die Auswirkungen von Large Language Models, KI-Modellen, die Sprache imitieren, auf die Umwelt und argumentiert, dass solche Modelle wie GPT-3 immer wieder Stereotype reproduzieren und toxische Sprache generieren, auch wenn die Inputs nicht toxisch sind.

> We have identified a wide variety of costs and risks associated with the rush for ever larger LMs, including: environmental costs (borne typically by those not benefiting from the resulting technology); financial costs, which in turn erect barriers to entry, limiting who can contribute to this research area and which languages can benefit from the most advanced techniques; opportunity cost, as researchers pour effort away from directions requiring less resources; and the risk of substantial harms, including stereotyping, denigration, increases in extremist ideology, and wrongful arrest, should humans encounter seemingly coherent LM output and take it for the words of some person or organization who has accountability for what is said.

Dass das Google nicht in den Kram passt, verwundet kaum.

Im Februar feuerte [Google schließlich Margaret Mitchell](https://www.theguardian.com/technology/2021/feb/19/google-fires-margaret-mitchell-ai-ethics-team), offiziell wegen Verstößen gegen den firmeninternen Code of Conduct und Sicherheitsrichtlinien.

Dass führende Figuren in ihren Feldern nicht sicher sind, sendet ein klares Signal an den Rest der Forscher:innen: «Benehmt euch, oder ihr seid raus.»

In <cite>Die Lage der arbeitenden Klasse in England</cite> unternahm Engels den Versuch die «geschichtliche Bedeutung der Industrie» zu verstehen. Die Kohleminen und Fabriken waren die Industrie seiner Zeit. Er stellte fest:

> [Die Zentralisierung] erfordert große Kapitalien, mit denen sie kolossale Etablissements errichtet und dadurch die kleine, handwerksmäßige Bourgeoisie ruiniert – und mit denen sie sich die Naturkräfte dienst macht, um den einzelnen Handarbeiter aus dem Markte zu schlagen.
> -- Friedrich Engels – Die Lage der arbeiten Klasse in England

Die Arbeit und Produktion wurde an wenigen Orten gebündelt. Mit der Zentralisierung der Rechenleistung und Datensammlung sehen wir eine erneute Zentralisierung. Es sind nur nicht mehr die Kohlebarone und Pfeffersäcke, die sie antreiben.

In <cite>The Steep Cost of Capture</cite> zieht Meredith Whittaker Parallelen zwischen der momentanen Situation und dem Kalten Krieg. Sie argumentiert, dass der Wettlauf zwischen den USA und der Sowjetunion einen ähnlichen Einfluss auf die Forschung hatte wie die heutige Übernahme der Forschung durch Google & Co.

### Technologie & Militär

Ein Teil dieser Geschichte ist auch, dass Geschäfte mit dem Militär für «proud patriotic companies» wie Google oder Palantir zum guten Ton gehören. Das nicht nur in den USA. In China, Israel, Russland und der EU läuft ein simultaner Wettkampf um die Hoheit im digitalen Wettrüsten.

Die Geschichte der Zusammenarbeit ist nicht neu. Das <abbr>ARPANET</abbr>, der Vorläufer des heutigen Internets, ist eine Ausgründung des im Kalten Kriegs gegründeten Advanced Research Projects Agency (<abbr>ARPA</abbr>) und des US-amerikanischen Verteidigungsministeriums. Das Internet ist keine Erfindung, die sich Militärs zunutze machen, es ist eine Erfindung des Militärs.

Für Google gehören Geschäfte mit amerikanischen Geheimdiensten, spätestens seit der Übernahme von Keyhole, [zum Kerngeschäft](https://www.theguardian.com/news/2018/dec/20/googles-earth-how-the-tech-giant-is-helping-the-state-spy-on-us).

Nicht ohne Widerstand. 2018 [kam Google unter enormen Druck](https://www.forbes.com/sites/janetwburns/2018/04/10/google-employees-denounce-companys-military-drone-work-in-letter-to-ceo/?sh=16100402ef0d), als es mit dem Pentagon im sogenannten [Project Maven](https://www.fastcompany.com/90342971/how-the-pentagon-is-bringing-algorithmic-spycraft-and-big-tech-to-war) zusammen autonome Waffensysteme entwickelt. Kurze Zeit später wurde bekanntgegeben, dass [der Vertrag mit dem Pentagon nicht verlängert wird](https://www.nytimes.com/2018/06/01/technology/google-pentagon-project-maven.html). Außerdem hat Google sich selber [Auflagen zum Umgang mit künstlicher Intelligenz](https://www.wired.com/story/google-sets-limits-on-its-use-of-ai-but-allows-defense-work/) gesetzt. In den vergangenen drei Jahr hat Google nichtsdestoweniger [fleißig mit dem US-Militär zusammengearbeitet](https://www.wired.com/story/3-years-maven-uproar-google-warms-pentagon/).

Das Loch, das Google in Project Maven hinterlassen hat, [wurde indes schnell gefüllt](https://www.forbes.com/sites/thomasbrewster/2021/09/08/project-maven-startups-backed-by-google-peter-thiel-eric-schmidt-and-james-murdoch-build-ai-and-facial-recognition-surveillance-for-the-defense-department/). Rebellion Defense, gegründet unter der Schirmherrschaft des früheren Google Chefs Eric Schmidt, Palantir, Amazon und Microsoft [sprangen begeistert in die Lücke](https://www.forbes.com/sites/thomasbrewster/2021/09/08/project-maven-amazon-and-microsoft-get-50-million-in-pentagon-drone-surveillance-contracts-after-google/).

[Kürzlich machte Daniel Ek, Gründer von Spotify, Schlagzeilen](https://ra.co/news/76439), als er mit seinem Investment Fund 100 Millionen Dollar in das deutsche Tötungs-KI Startup Helsing investierte. Während sie sich auf die Fahne schreiben die freiheitlich-demokratische Grundordnung verteidigen zu wollen, sind die Mitglieder ihres Boards gut vernetzt im militärisch-industriellen Komplex.

Solche eine Zusammenarbeit kann auch ohne explizite Absicht sich dem Militär anzudienen passieren. Etwa wenn [das US-Militär die Standortdaten von Millionen von Muslim:a kauft](https://www.vice.com/en/article/jgqm5x/us-military-location-data-xmode-locate-x), werden diese dadurch potentiellen Gefahren ausgesetzt [^1] .

In Deutschland kümmert sich seit 2017 das [Kommando Cyber- und Informationsraum](https://de.wikipedia.org/wiki/Kommando_Cyber-_und_Informationsraum) (CIR) und die Digitalisierung der Truppe. Man befindet sich knapp zwanzig Jahre nach dem Web 2.o mittlerweile selber in Ausbaustufe 2.0. Das Internet ist für uns alle Neuland.

Aber mal ernsthaft: Die Entwicklung autonomer Waffensysteme unterliegt momentan keiner wirkungsvollen Kontrolle. Erst im Dezember 2021 scheiterten jahrelangen Verhandlungen. In der Logik von Ländern wie den USA, Großbritannien, Russland oder Israel [sei es «zu früh» für ein derartiges Moratorium](https://www.theatlantic.com/technology/archive/2021/09/i-weapons-are-third-revolution-warfare/620013/). Eine interessante Logik, die nur jenen einleuchtet, die finden es sei zu früh zu bremsen bevor man mit dem Auto in einen Baum rast.

Autonome Waffensysteme sind keine theoretische Möglichkeit, sondern nur ein Softwareupdate entfernt. Weltweit sind solche Systeme in Entwicklung begriffen. Im Juni 2021 wurde in Libyen der vermutlich erste Angriff mit einem solchen, vollautonomen System durchgeführt[^2].

Die deutsche Bundesregierung unter Olaf Scholz begibt sich indes auf Messers Schneide. Man wolle zwar bewaffnete Drohnen für die Bundeswehr anschaffen, mit diesen aber ethisch töten. Wem das beruhigend erscheint, sei dran erinnert, dass durch die rot-grüne Regierung unter Gerhard Schröder der erste [Angriffskrieg vom deutschen Boden seit 1945 geführt wurde](https://de.wikipedia.org/wiki/Kosovokrieg).

Im Appell der [AI Scientists for Peace](https://aiscientists4peace.org/), die sich gegen eine Bewaffnung der Bundeswehr mit Drohnen wenden, heißt es:

> Bereits der Einsatz von vom Menschen gesteuerten bewaffneten Drohnen hat die Schwelle zum Einsatz militärischer Gewalt gesenkt und den Krieg weiter entgrenzt, Drohnenangriffe finden dauerhaft und häufig ohne Kriegserklärung statt. Die technologische Hochrüstung mit bewaffneten Drohnen hat militärisch und technologisch überlegenen Staaten wie den USA außergerichtliche Tötungen vereinfacht, die fast ausschließlich People of Colour treffen. Autonome Waffen würden die Möglichkeit globaler Überwachung und Tötungen als potentielle Gefahr definierter Menschen verstärken und die Kontrolle über die Elimination dieser Menschen nicht nur rechtlichen Normen sondern auch zunehmend menschlichem Einfluss entziehen.

Vor zwei Wochen [hat die New York Times einen umfangreichen Bericht veröffentlicht](https://www.nytimes.com/interactive/2021/12/18/us/airstrikes-pentagon-records-civilian-deaths.html), der im Detail zeigt, wie schief der Drohnenkrieg schon läuft, wenn Menschen zugucken. Die Erzählung eines «präzisen Kriegs» ist eine Lüge und die, die ihn führen, wissen das.

[Das Pentagon hat zugegeben](https://www.defenseone.com/technology/2021/12/air-force-targeting-ai-thought-it-had-90-success-rate-it-was-more-25/187437/), dass eines der KI-Targeting-Systeme der US Air Force Ziele zu nur fünfundzwanzig Prozent erkannt hat. Gleichzeitig berichtete das System selber von einer neunzigprozentigen Genauigkeit.

Unkontrolliertes Datensammeln, wie im Fall von Muslim Pro, führt in der Logik kriegerischer Auseinandersetzung zu unkontrollierten Zugriffen. Wenn es die Daten gibt, und Behörden oder Militär ihrer habhaft werden wollen, werden sie es schaffen.

Insgesamt sind es aber keine Un- oder Einzelfälle, die hier zu kritisieren sind. Es ist die Logik von Gewalt und Unterordnung, die Existenzbedingung des Militärs ist.

> Herrschaft durch Gewalt ist sowohl in die autonome Waffentechnologie als auch in den Rahmen des Denkens und der Politik eingemeißelt, welcher zu ihrer Entwicklung und ihrem potentiellen Einsatz führt.
> -- Ray Acheson – Feminismus und automatisierte Waffensysteme; in Wenn KI, dann feministisch

Es reicht deswegen nicht gegen spezifische Waffensysteme oder Formen der Kollaboration zwischen Tech-Unternehmen und Militär anzukämpfen. Es sind Krieg, Patriarchat und Überwachung an sich, die kritisiert gehören.

### Panoptikum in Digitalien

Während sich militärische Konflikte vorerst nach außen richten, blickt der Staat stetig nach innen. Vorausschauende Polizeiarbeit und Gesichtserkennung sollen hier stellvertretend für das Bestreben des Staates nach Gehorsam stehen. Der Angriff des Staates auf die Freiheitsrechte der Zivilgesellschaft erschöpft sich darin aber nicht, sondern zeigt sich auch in Projekten wie Staatstrojanern oder der Vorratsdatenspeicherung. Oft ergänzen sich solche Vorhaben gegenseitig.

Ein Beispiel hierfür ist eine Datenbank der Polizei Hamburg. Als 2017 der G20-Gipfel in die Hansestadt kam, war die Polizei schnell dabei eine noch die dagewesene Gefahr durch linksradikale Chaot:innen herbeizuphantasieren und einen der größten Polizeieinsätze in der Geschichte der Bundesrepublik zu rechtfertigen.

Um diese Chaot:innen auch im Nachhinein zu erfassen schaffte die Polizei das System Videmo 360 an. Der Hamburger Datenschutzbeauftragte Johannes Caspar vermutete, dass auf diese Weise die biometrischen Daten von [hunderttausenden Menschen gespeichert wurden](https://www.golem.de/news/datenschutz-nie-da-gewesene-kontrollmacht-fuer-staatliche-stellen-1901-138760.html). Ohne jegliche Kontrollmöglichkeit.

Diese Daten wurden genutzt um Verfahren gegen vermeintliche Gewalttäter:innen einzuleiten.

Nach der Logik der Polizei reicht dabei mittlerweile die reine Teilnahme an einer Demonstration, um schweren Landfriedensbruch vorzuwerfen. In Hamburg läuft das sogenannte Rondenbarg-Verfahren, in dem fünf Jugendliche angeklagt sind, [ohne dass ihnen etwas konkretes vorgeworfen wird](https://gemeinschaftlich.noblogs.org/hintergrund/).

Beim Überfall auf die unangenehmigte Demonstration kam es innerhalb von wenigen Sekunden zu massiver Polizeigewalt. Die Hamburger Feuerwehr musste mit 65 Einsatzkräften, 12 Rettungswägen und fünf Notärzten Versorgung leisten.

Der damalige Hamburger Oberbürgermeister und heutige deutsche Bundeskanzler Olaf Scholz resümierte:

> Polizeigewalt hat es nicht gegeben.

Trotz mannigfaltiger gegenteiliger Beweise wurde bis heute kein einziger Polizist im Zusammenhang mit Übergriffen gegen Protestierende verurteilt.

Im Oktober 2019 hat das Verwaltungsgericht Hamburg den Einsatz von Videmo [für rechtens erklärt](https://www.heise.de/newsticker/meldung/Urteil-Polizei-Hamburg-darf-weiter-mit-Gesichtserkennung-G20-Randalierer-jagen-4568289.html). Wie schwierig es ist überhaupt zu wissen, welche Daten Polizeien über eine:n speichern zeigt [der von netzpolitik.org dokumentierte Fall eines Bremer Fußballfans](https://netzpolitik.org/2021/schweigen-mit-system-bremer-polizei-verheimlicht-datensammlung-ueber-fussballfan-update/).

Die Polizei hat die angelegte [Datenbank im Mai 2020 schließlich gelöscht](https://www.golem.de/news/gesichtserkennung-hamburger-polizei-loescht-gesichtsdatenbank-2005-148780.html), weil keine strafrechtliche Erforderlichkeit mehr bestehe. Das Gerichtsurteil bleibt aber bestehen, der Präzedenzfall für eine umfassende Erfassung Auswertung biometrischer Daten ist geschaffen. Der SPD-geführte Innensenat plante schnell Rache. In der Novelle des Polizeigesetzes soll dem Datenschutzbeauftragten [seine Weisungsbefugnis vollends entzogen werden](https://netzpolitik.org/2019/gesichtserkennung-hamburger-innenbehoerde-pfeift-auf-datenschutzbeauftragten/).

Derweil wird die bundesweite Infrastruktur für eine «Verfahrensübergreifende Recherche- und Analyseplattform» der deutschen Polizeien weiter vorangetrieben.

Das Vorhaben der deutschen Polizei Gesichtserkennung zu normalisieren, passiert gegen einen internationalen Backlash.

Seit Jahren zeigt die Forschung immer wieder, dass Gesichtserkennung [gegen Schwarze diskriminiert](https://www.media.mit.edu/projects/gender-shades/overview/), und selbst [Mitglieder des US-amerikansichen Kongresses für Straftäter:innen hält](https://www.aclu.org/blog/privacy-technology/surveillance-technologies/amazons-face-recognition-falsely-matched-28). Forscher:innen warnen davor, dass [Rassismus auch in der EU Teil automatisierter Prozesse ist](https://www.politico.eu/article/europe-artificial-intelligence-blindspot-race-algorithmic-harm/).

2020 machten die Unternehmen [Clearview](https://www.nytimes.com/2020/01/18/technology/clearview-privacy-facial-recognition.html) und [PimEyes](https://netzpolitik.org/2020/gesichter-suchmaschine-pimeyes-schafft-anonymitaet-ab/) internationale Schlagzeilen. Beide operieren mit riesigen Mengen an Daten, ohne Einverständnis aus dem Internet gewonnen.

Beide Unternehmen machen Gesichter suchbar. Während Clearview behauptet nur [mit Strafverfolgungsbehörden zusammenzuarbeiten](https://netzpolitik.org/2021/ueberwachungstechnik-clearview-bietet-umstrittene-gesichtserkennung-polizeien-weltweit-an/), war PimEyes’ Suchmaschine zu Beginn öffentlich zugänglich. Als ImageNet neu war, waren die Vierzeh Millionen gespeicherten Bilder eine Revolution. PimEyes dürfte über eine Milliarde Gesichter speichern.

Die Praktiken des massenhaftes Speicherns von biometrischen Daten geriet weltweit [in den Fokus von Datenschutzbehörden.](https://netzpolitik.org/2021/gesichtserkennung-grossbritannien-droht-clearview-mit-millionenstrafe-deutschland-drueckt-sich/) Clearview bemüht sich derweil ihre «Suchmaschine für Gesichter» [in den USA zu patentieren](https://www.politico.com/news/2021/12/04/clearview-ai-facial-recognition-523735).

Die Forderungen Gesichtserkennung komplett auszusetzen nimmt derweil Fahrt auf. In San Francisco wurde [Gesichtserkennung im öffentlichen Raum schon 2019 verboten](https://netzpolitik.org/2019/san-francisco-erschwert-anschaffung-von-ueberwachungstechnologien-und-verbietet-gesichtserkennung/). Amazon, IBM und Microsoft haben sich in den USA [dagegen entschieden Gesichtserkennung an Polizeibehörden zu verkaufen](https://www.vox.com/recode/2020/6/10/21287194/amazon-microsoft-ibm-facial-recognition-moratorium-police). In Europa kämpft die Kampagne [Reclaim Your Face](https://reclaimyourface.eu/) für ein Verbot solcher Technologien.

Das Polizeigesetz ist mittlerweile in Kraft und [erlaubt der Polizei Hamburg auch sogenannte vorausschauende Polizeiarbeit](https://www.nd-aktuell.de/artikel/1144805.gesellschaft-fuer-freiheitsrechte-beschwerde-gegen-ueberwachungspaket.html) (predictive policing). Neben Hamburg nutzen auch Berlin, Niedersachsen, Hessen, Nordrhein-Westfalen sowie die Städte Nürnberg und München predictive policing.

The Markup hat jüngst gezeigt wie solche Mittel der Polizeiarbeit [ nicht zu guten Ergebnissen führen sondern im Gegenteil nur Bekanntes fortschreiben](https://themarkup.org/prediction-bias/2021/12/02/crime-prediction-software-promised-to-be-free-of-biases-new-data-shows-it-perpetuates-them).

> Overall, we found that the fewer White residents who lived in an area—and the more Black and Latino residents who lived there—the more likely PredPol would predict a crime there. The same disparity existed between richer and poorer communities.

Warum – oder besser wie – das in Deutschland nicht passieren sollte, kann niemand erklären.

Nach innen und außen wird durch Vorstöße von Militär, Geheimdiensten und Polizei versucht eine Infrastruktur des ständigen staatlichen Zugriffs auf private und biometrische Daten vorangetrieben.

Ein Komitee der UN warnte letztes Jahr:

> The panel’s warnings add to deepening alarm among human rights bodies over the largely unregulated use of artificial intelligence across a widening spectrum of government, from social welfare delivery to “digital borders” controlling immigration.
> -- [U.N. Panel: Technology in Policing Can Reinforce Racial Bias](https://www.nytimes.com/2020/11/26/us/un-panel-technology-in-policing-can-reinforce-racial-bias.html)

Ungeachtet dessen weitet die EU die Befugnisse der «Grenzschutzagentur» Frontex immer weiter aus. Zusammen mit Bestrebungen die digitalen Datensammlungen der Mitgliedsstaaten zu zentralisieren entsteht so ein immer dichteres Netz staatlicher Zu- und Übergriffe.

> Taken together, the AI and algorithmic systems used by the state, from the military to the municipal level, reveal a covert philosophy of _en masse_ infrastructural command and control via a combination of extractive data techniques, targeting logic, and surveillance.
> -- Kate Crawford – Atlas of AI, p. 208

Firmen wie [Palantir](https://www.bloomberg.com/features/2018-palantir-peter-thiel/), die [von der NSA](https://theintercept.com/2017/02/22/how-peter-thiels-palantir-helped-the-nsa-spy-on-the-whole-world/), [über Europol](https://digit.site36.net/2020/06/11/europol-uses-palantir/) bis zu [der hessischen Polizei](https://netzpolitik.org/2019/big-data-bei-der-polizei-hessen-sucht-mit-palantir-software-nach-gefaehrdern/) verdinglichen die Gemengelage dieser Kontrollinfrastruktur. Überwachung ist nicht mehr nach innen oder außen gewandt, polizeilich oder geheimdienstlich.

Es muss nicht so sein. [Palantir selber gibt zu](https://www.vice.com/en/article/qj4abv/palantir-says-faulty-ai-and-privacy-regulation-are-a-risk-to-the-company), dass ein Diskurs im Privatsphäre und die Arten und Weisen, in denen KI-Systeme nicht zu Aufklärung und Gerechtigkeit beitragen, große Probleme bereiten können. Let’s do it.

### Daten und Privatsphäre

Zwar werden wir alle von den Techniken der Datensammlung ins Visier genommen, aber sowohl auf ökonomischer als auch staatlicher Ebene trifft es Menschen unterschiedlich hart. Gegen die ökonomische Sammelwut der Werbenetzwerke kann man sich mit technischem Sachverstand zum Großteil wehren. Wenn man den Sachverstand hat, also die Zeit ihn sich anzueignen.

Die staatliche Sammelwut hingegen trifft von vornherein nicht alle gleich. Zwar ist zum Beispiel das Speichern von Fingerabdrücken in Deutschland seit dem Sommer 2020 verpflichtend, gegen die Offenbarungseide, die etwas Hartz IV-Bezieher:innen oder Geflüchtete ablegen müssen, verblasst dies aber beinahe zur Randnote.

Francesca Schmidt und Johanna Luise Mellentin folgern im Buch <cite>[Wenn KI, dann feministisch](https://netzforma.org/publikation-wenn-ki-dann-feministisch-impulse-aus-wissenschaft-und-aktivismus)</cite>:

> Wenn wir von staatlichen Eingriffen in die Privatsphäre sprechen, sehen wir, dass die Intensität dieser Eingriffe mit dem Grad der Abhängigkeit vom Staat zunimmt. So müssen etwa Hartz-4-Empfänger\*innen, Menschen mit Behinderung, Geflüchtete bzw. Asylsuchende mit wesentlich zahlreicheren und tiefergehenden Eingriffen rechnen, als Menschen die zu keiner dieser Gruppen oder anderen marginalisierten, stigmatisierten Gruppen gehören.

Überwachung ist ein Problem der von ihr betroffenen Individuen. Es ist aber kein _individuelles_ Problem, sondern ein gesellschaftliches. Unsere Gesellschaft erzwingt ihre Daten ohne ihnen eine Möglichkeit des Entkommen zu lassen.

Der Kampf um die Daten und wie wir als Menschen in Daten gefasst werden, ist ein globaler Kampf, der Allianzen und Solidarität braucht. Salomé Viljoen schreibt in ihrem Essay [Data Relations](https://logicmag.io/distribution/data-relations/):

> Thinking of datafication as the digital terms by which we relate to one another clarifies the kind of political interventions that are required. The point is not to define the terms of our individual datafication—by demanding our share of the pie, or shoring up resistance to being rendered legible against our will—but to define the terms of our collective datafication.

Wie wir oben gesehen haben, ist Gesichtserkennung eine der Praktiken, in denen dieser Kampf um gesellschaftliche Rechte geführt wird. Es muss allen möglich sein ohne Angst vor dem digitalen Panoptikum durch die Straßen zu laufen. Egal ob sie auf einer individuellen Ebene etwas zu verbergen haben oder nicht – oder das zumindest denken.

Das Problem liegt aber nicht alleine auf staatlicher Ebene oder bei Unternehmen wie Clearview. Im Dezember fragte die KI-Forscherin Sasha Luccioni [auf Twitter](https://twitter.com/SashaMTL/status/1469318894208880653):

> What's a good example of an AI dataset gathered _with proper consent_?
> Does that even exist?

Die Antworten waren ernüchternd. Nur Facebooks [Casual Conversations Dataset](https://ai.facebook.com/datasets/casual-conversations-dataset/) wurde als Beispiel genannt, in dem die Datenansammlung einvernehmlich geschah.

## Was tun?

Die Geschichte der Künstlichen Intelligenz ist eine Geschichte der Missverständnisse. Meistens jenes, das Computer für eine Form der Menschlichkeit hält. Dass sich die menschliche Wahrnehmung auf rein mechanische Prozesse reduzieren lässt.

Die Geschichte der Künstlichen Intelligenz ist außerdem eine von Rückschlägen und Triumphen. Die Begeisterung rund um Fortschritte ist immer wieder sogenannten «KI-Wintern» gewichen.

Nach einigen Jahren ging es wieder bergauf. In welcher KI-Jahreszeit wir uns gerade befinden ist eine gute Frage. Einerseits wird KI immer noch und gerne als Heilsbringer verstanden, sprießen Start-Ups für dieses oder jenes aus dem Boden. Andererseits sind die Auswirkungen auf Mensch und Umwelt immer wieder Gegenstand entschiedener Kritik. Vielleicht ist es mittlerweile soweit, dass wir keinen KI-Winter mehr erleben werden, aber auch keinen richtigen Sommer. Dass KI alltäglich geworden ist, und so angenommen aber auch kritisiert werden muss.

Es ist illusorisch zu denken, dass man weitere Fortschritte in der Entwicklung verhindern könnte oder dass die großen IT-Firmen sich plötzlich besinnen und ihre Möglichkeiten nur noch zu «guten» Zwecken einsetzen würden. KI beschreibt und codifiziert die uns umgebende rassistische, kapitalistische Welt und gibt ihr den Anschein mathematischer Neutralität.

Sie legt sich dabei wie eine Decke über die gesellschaftlichen Zusammenhänge, zerpflückt sie in Datenpunkte und fördert so ihre ideologische Verklärung. Dieses gilt es immer wieder zu verstehen und die Dinge unter der Decke zu fassen.

Wir können den technologischen Fortschritt nicht aufhalten, aber wir müssen ihn unserem Verständnis anpassen. Nicht alles was gemacht werden kann, sollte gemacht werden:

> Our technology is accelerating at a frightening rate, a rate faster than our reflective understanding of its impact.
> -- [Tatiana Mac – Canary in a coal mine](https://alistapart.com/article/canary-in-a-coal-mine-how-tech-provides-platforms-for-hate/)

Wir müssen Technologie aus der Herrschaft der Konzerne und ihrer vornehmlich männlich, weißen Vorstandsetagen entreißen, um zu dem Punkt zu kommen, an dem nicht immer wieder die Vergangenheit die Zukunft bestimmen soll, sondern wir die Zukunft gestalten können.

> Contrary to big tech executives’ cold-war style rhetoric about an arms race, what truly stifles innovation is the current arrangement where a few people build harmful technology and others constantly work to prevent harm, unable to find the time, space or resources to implement their own vision of the future.
> -- [Timnit Gebru – For truly ethical AI, its research must be independent from big tech](https://www.theguardian.com/commentisfree/2021/dec/06/google-silicon-valley-ai-timnit-gebru)

Wir können die Probleme nicht lösen, ohne das Kapitalverhältnis an sich zu hinterfragen.

Die Probleme, die sich uns in der Auseinandersetzung mit Künstlicher Intelligenz zeigen, sind eingebettet in kapitalistische Herrschaft, in Sexismus, in Rassismus. Solange wir die Herrschaft der Menschen über die Menschen nicht in den Fokus unserer Kritik rücken, werden wir uns immer und wieder nur an den Symptomen dieser Herrschaft abarbeiten.

Eine Zukunft, die auf Solidarität und Rücksichtnahme statt auf bedingungsloser Konkurrenz aufbaut ist möglich.

Denn erst, wenn wir gut zu uns sind, können die Maschinen es auch sein.

[^1]: Muslim Pro hat den Vertrag mit X-Mode [kurze Zeit später gekündigt](https://www.vice.com/en/article/g5bq89/muslim-pro-location-data-military-xmode).
[^2]: [Einen Überblick](https://www.blaetter.de/ausgabe/2021/august/angriff-der-killerroboter-wenn-der-algorithmus-toetet) liefern die Blätter für deutsche und internationale Politik
