---
slug: airbnb-booking-calendar-sync-free
locale: nl
title: Zo synchroniseer je de kalenders van Airbnb en Booking.com op één plek (gratis, 2026)
excerpt: Synchroniseer de kalenders van Airbnb en Booking.com gratis via iCal. Stappenplan, echte verversingstijden en wanneer een channel manager loont.
status: draft
tags:
  - airbnb:Airbnb
  - booking-com:Booking.com
  - calendar-sync:Kalendersynchronisatie
  - ical:iCal
ogImageUrl: /blog-covers/airbnb-booking-calendar-sync-free.webp
ogImageWidth: 1600
ogImageHeight: 900
---

# Zo synchroniseer je de kalenders van Airbnb en Booking.com op één plek (gratis, 2026)

Afgelopen juni had ik bijna een dubbele boeking met een gast uit Stuttgart. Airbnb blokkeerde de data zodra hij had betaald; Booking.com liet dezelfde week nog vier uur lang als beschikbaar zien. Tegen de tijd dat de iCal-feed was bijgewerkt, had een gast uit Tasjkent al een aanvraag voor die data gedaan. Ik heb één boeking terugbetaald, de andere gehouden, en die avond elk helpartikel gelezen over hoe je de kalenders van Airbnb en Booking.com synchroniseert zonder daar $ 200 per maand voor te betalen.

Deze gids is het resultaat. Gratis tools, echte verversingstijden en een eerlijk antwoord op wat wel en niet werkt.

## TL;DR

- Zowel Airbnb als Booking.com bieden gratis privé **iCal-exportlinks** aan. Je hebt geen partnercontract nodig.
- iCal werkt per link maar in één richting. Twee platforms betekent **twee links in elke richting**: de export van A in B, en de export van B in A.
- Airbnb ververst geïmporteerde kalenders elke **2 tot 4 uur**. Booking.com elke **2 tot 6 uur**. In dat gat ontstaan de zeldzame dubbele boekingen.
- Een gratis tussenlaag (het open-source [RentTools](/onboard), of een zelfgebouwde cronjob) ververst sneller, maar kan de eigen ophaalronde van het doelplatform niet versnellen.
- Bij 1 tot 3 accommodaties dekt iCal 99% van de gevallen. Bij 20+ accommodaties of een bezetting van 90%+ kun je beter naar een betaalde channel manager kijken.

## Het eigenlijke probleem

Twee boekingssites. Eén fysiek appartement. Zodra iemand op Airbnb boekt, moet elke andere site dat binnen minuten weten, niet binnen uren.

Adverteer je alleen op Airbnb, dan heb je dit allemaal niet nodig. De kalender van Airbnb is dan de enige bron van waarheid.

Het gedoe begint bij het tweede platform. Dan heb je twee kalenders die allebei de waarheid claimen en het met elkaar eens moeten zijn. Het addertje: geen van beide platforms geeft de ander een privé-API. Ze geven je alleen een openbaar leesbare iCal-link die de andere kant volgens een eigen schema ophaalt.

Dit is wat de meeste gratis gidsen overslaan. iCal-synchronisatie is **niet** realtime. Ze is "meestal snel genoeg", en de momenten waarop ze dat niet is, zijn precies de momenten die pijn doen: twee gasten die binnen het ophaalvenster dezelfde data boeken.

Hieronder doe je drie dingen. De iCal-link uit Airbnb halen, er een uit Booking.com halen, en bepalen wat je waarheen laat wijzen. Er is geen vierde stap.

## Stap 1: haal de iCal-link uit Airbnb

Open je hostdashboard op Airbnb. De route:

1. Klik bovenaan op **Calendar**.
2. Kies de advertentie die je wilt synchroniseren.
3. Klik in de rechterzijbalk op **Availability** en daarna op **Sync calendars**.
4. Klik op **Export Calendar**.
5. Kopieer de lange link. Die ziet er ongeveer zo uit: `https://www.airbnb.com/calendar/ical/12345678.ics?s=AAA...`.

*Afbeelding 1: het paneel Sync calendars van Airbnb. Screenshot volgt; komt te staan op /blog/airbnb-booking-calendar-sync-free/figure-1.png.*

Controleer twee dingen voordat je verdergaat. Ten eerste: die link is privé. Iedereen die hem heeft, kan al je boekingsdata op Airbnb inzien. Behandel hem als een wachtwoord. Ten tweede: de link van Airbnb blijft hetzelfde, tenzij je op **Reset URL** klikt — en dat doe je als hij ooit uitlekt.

Heb je **Sync calendars** de eerste keer overgeslagen, dan heeft Airbnb nog geen link aangemaakt. Klik minstens één keer op **Sync calendars** om de functie wakker te maken. Lees het [officiële helpartikel van Airbnb](https://www.airbnb.com/help/article/99) voor de officiële versie van deze stappen.

## Stap 2: haal de iCal-link uit Booking.com

De route bij Booking zit twee klikken dieper dan bij Airbnb, en dat is precies waarom de meeste hosts afhaken voordat ze beide links hebben:

1. Log in op je Booking.com-extranet.
2. Kies de accommodatie.
3. Klik in de zijbalk op **Calendar & Pricing**.
4. Klik op **Sync calendars**. (Zie je dit niet, dan heeft jouw type accommodatie misschien geen iCal. Vakantieverhuur heeft het wel; traditionele hotels meestal niet.)
5. Klik onder **Export your calendar** op **Export**.
6. Kopieer de link. Ongeveer in deze vorm: `https://admin.booking.com/hotel/hoteladmin/ical.html?t=AAA...`.

*Afbeelding 2: de kalenderexport in het extranet van Booking.com. Screenshot volgt; komt te staan op /blog/airbnb-booking-calendar-sync-free/figure-2.png.*

Eén valkuil: Booking.com verbergt het iCal-paneel voor accounts met bepaalde partnercontracten. Heb je een API-overeenkomst voor een channel manager (de meeste kleine hosts hebben die niet), dan is iCal bewust uitgeschakeld. Ontbreekt iCal helemaal in je extranet en heb je geen partnerdeal getekend, neem dan contact op met de partnersupport. Die zetten het weer aan.

De eigen [Partner Hub-gids](https://partner.booking.com/en-us/help/calendar-and-pricing/setting-availability/syncing-your-airbnb-and-bookingcom-calendars) van Booking loopt het door met screenshots die overeenkomen met de interface van 2026.

## Stap 3: koppel je kalenders van Airbnb en Booking.com aan elkaar

Drie opties. Geen ervan is fout; welke de juiste is, hangt af van hoeveel accommodaties je hebt.

1. **Rechtstreeks kruiselings importeren.** Plak de link van Airbnb in het importveld van Booking, en de link van Booking in het importveld van Airbnb. Klaar. Elke kant haalt de ander op volgens een eigen schema. Gratis. Geen derde tool. Werkt voor twee platforms. Schaalt niet meer zodra je een derde toevoegt (Vrbo, Expedia, doorverkopers via Hostaway): dan moet je elke link aan elk ander platform toevoegen, en de meeste platforms hebben maximaal vijf importplekken.
2. **Een gratis tussenlaag.** Een kleine open-source tool zit tussen de platforms in. Airbnb en Booking importeren allebei uit die tool; de tool importeert uit allebei. Synchroniseren wordt dan één link per platform, en voor een derde platform heb je maar twee nieuwe links nodig, geen vier. De tussenlaag kan veel sneller verversen dan de platforms zelf: de [RentTools](/onboard)-installatie haalt elke 10 minuten op. Nog steeds gratis; je kunt het op een droplet van $ 4 draaien als je zelf host, of de gehoste versie gebruiken.
3. **Een betaalde channel manager.** Hostaway, Lodgify, Smoobu. Echte API's (als het account van de host in aanmerking komt) in plaats van iCal, en dus vrijwel realtime synchronisatie in beide richtingen. Ze beginnen bij $ 25 tot $ 50 per accommodatie per maand en gaan uit van een langer contract. De moeite waard vanaf 20 accommodaties of boven 90% bezetting. Daaronder is het vooral geruststelling.

Zelf gebruik ik optie 2 voor mijn twee appartementen in Tasjkent. De rekensom: bij twee accommodaties betekent de tussenlaag dat ik een nieuw platform toevoeg met **twee** links in totaal, niet de vier die optie 1 zou afdwingen. Vijf minuten werk; dat verdient zich terug zodra ik op Vrbo ga adverteren.

## Het addertje met de verversingstijd waar niemand je voor waarschuwt

Dit is het stukje dat geen enkel helpartikel je recht voor zijn raap vertelt.

Als Airbnb zegt dat "kalenders automatisch synchroniseren", bedoelen ze dat Airbnb je geïmporteerde iCals elke 2 tot 4 uur ophaalt. Booking haalt elke 2 tot 6 uur op. Vrbo kan nog trager zijn.

Stel dat je optie 1 hebt ingesteld. Dit gebeurt er als een gast om 14:00 uur je appartement op Airbnb boekt:

1. Airbnb blokkeert de data direct aan zijn eigen kant.
2. Booking.com haalt de iCal-feed van Airbnb ergens tussen 16:00 en 20:00 uur op.
3. Tot zes uur lang staat je advertentie op Booking nog op "beschikbaar".
4. Vindt een tweede gast in dat venster je advertentie op Booking en boekt die dezelfde data, dan heb je een dubbele boeking.

Het is zeldzaam. Er moeten binnen het ophaalgat gelijktijdig mensen op beide platforms zoeken, en voor een kleine host met weinig boekingen gebeurt dat eigenlijk nooit. Maar het gebeurt wel, en als het gebeurt kost het je een terugbetaling, mogelijk een negatieve review en anderhalf uur mailen met twee vreemden om uit te leggen waarom.

De optie met een tussenlaag (nummer 2) lost de helft hiervan op. Onze gehoste installatie haalt de bronfeeds elke 10 minuten op, dus RentTools weet binnen 10 minuten van de nieuwe Airbnb-boeking. Het versnelt **niet** hoe vaak Booking.com *RentTools* ophaalt. Booking doet daar nog steeds zijn eigen 2 tot 6 uur over.

De enige oplossing aan de kant van het doelplatform is een koppeling op API-niveau, en dat betekent optie 3.

Dit is de echte reden dat channel managers bestaan. Niet de functies. Niet de mooie dashboards. Realtime updates in de andere richting. Wil je weten waarom iCal nooit sneller kan zijn dan zijn ophaalcyclus: het protocol zelf staat beschreven in [RFC 5545](https://www.rfc-editor.org/rfc/rfc5545), en er is geen "push"-uitbreiding die de grote platforms ondersteunen.

## Veelgestelde vragen

**Verandert de iCal-link van Airbnb als ik hem vernieuw?**
Ja. Klik op **Reset URL** in het paneel Sync calendars van Airbnb en de oude link werkt direct niet meer. Doe dat zodra je vermoedt dat een link is uitgelekt: in een openbaar Slack-kanaal, op een screenshot, in een reactie op een forum. RentTools vernieuwt zijn uitgaande feedlink om dezelfde reden op verzoek.

**Hoe weet ik of de iCal-synchronisatie echt werkt?**
Vergelijk op beide platforms het tijdstip waarop de geïmporteerde kalender voor het laatst is opgehaald. Airbnb toont dat onder **Sync calendars → Imported calendars → Last imported**. Booking toont iets vergelijkbaars bij elke geïmporteerde feed. Is een tijdstip meer dan 12 uur oud, dan zit er iets mis aan de bronkant: de link is veranderd, het bronplatform remt af, of de bronlink is vernieuwd.

**Kan ik dit zonder derde tool?**
Ja. Optie 1, rechtstreeks kruiselings importeren, werkt prima voor twee platforms. Zodra je een derde toevoegt, krijg je er spijt van.

**Is iCal echt gratis?**
Ja. Airbnb en Booking.com bieden het allebei als selfservicefunctie aan in elk hostaccount. Rekent een tool je een maandbedrag alleen voor iCal-synchronisatie, dan betaal je voor het gemak eromheen, niet voor het protocol.

**Wat kost RentTools?**
De gehoste installatie is op dit moment gratis. Zelf hosten is ook gratis als je een Linux-machine hebt. We betalen onze eigen hosting- en Gemini API-kosten. Meer over de risico's op dubbele boekingen die kalendersynchronisatie moet voorkomen, lees je in [dubbele boekingen voorkomen](/blog/avoiding-double-bookings).

**Heeft het zin als ik alleen op Airbnb adverteer?**
Nee. Hosts die maar op één platform staan, hebben helemaal geen iCal-synchronisatie nodig. Bewaar dit artikel voor de dag dat je op een tweede platform gaat adverteren.

**Wat als de importplek bij Airbnb "Last sync: never" zegt?**
Drie gebruikelijke oorzaken. (1) De bronlink klopt niet: plak hem in een browser; je zou een `.ics`-bestand moeten downloaden of een blok platte tekst moeten zien dat begint met `BEGIN:VCALENDAR`. Krijg je een HTML-foutpagina, dan is de link fout. (2) Het bronplatform heeft een nieuwe link aangemaakt en de oude is ongeldig: vernieuw hem en werk de import bij Airbnb bij. (3) Airbnb remt nieuwe feeds het eerste uur of zo soms ongemerkt af. Wacht een uur en kijk dan opnieuw voordat je aanneemt dat het stuk is.

**Gebruikt Booking.com de iCal die ik importeer echt, of heeft het zijn eigen logica?**
Booking behandelt geïmporteerde gebeurtenissen als ondoorzichtige blokken: data die in je geïmporteerde feed als bezet staan, worden op Booking als niet beschikbaar gemarkeerd. Het kijkt niet naar namen van gasten, prijzen of iets anders. Dat is een functie, geen bug: een uitgelekte iCal-export van Booking verraadt alleen je boekingsdata, nooit gegevens van gasten.

## Eén uitgesproken mening

Heb je één of twee accommodaties en adverteer je op Airbnb plus Booking.com, **betaal dan nog niet voor een channel manager**. Stel optie 1 of 2 hierboven in. Het risico van de verversingstijd is echt, maar zeldzaam bij weinig boekingen, en het maandbedrag van een betaalde tool is bij twee accommodaties hoger dan de verwachte kosten van één terugbetaling per jaar door een dubbele boeking.

Heb je tien of meer accommodaties en draai je een bezetting van bijna 90%, kijk dan eerst naar Smoobu en pas daarna naar Hostaway. De prijzen van Smoobu zijn eerlijk bij kleinere aantallen, en het biedt channel-manager-API's aan waarvoor je bij de anderen eerst een salesgesprek moet voeren.

Dit is geen verkooppraatje voor de tool die ik zelf draai. Het is gewoon rekenwerk.
