---
slug: cleaning-schedule-automation
locale: nl
title: "Je schoonmaakschema automatiseren als host van vakantieverhuur"
excerpt: Zo automatiseer je als host je schoonmaakschema. Vervang schriftjes en gedeelde spreadsheets door een schoonmakersrol die echt meegroeit.
status: draft
tags:
  - cleaning:Schoonmaak
  - host-tips:Tips voor hosts
  - automation:Automatisering
ogImageUrl: /blog-covers/cleaning-schedule-automation.webp
ogImageWidth: 1600
ogImageHeight: 900
---

# Je schoonmaakschema automatiseren als host van vakantieverhuur

Tweeënhalf jaar lang regelde ik het schoonmaakschema van mijn appartementen in één gedeelde Google Sheet. Eén kolom per accommodatie, één rij per dag, een emoji voor "moet worden schoongemaakt". Mijn schoonmaakster had een bladwijzer naar de sheet op haar telefoon. We hebben nooit een wissel gemist.

Maar we groeiden ook niet. De sheet werd bij elkaar gehouden door mijn herinneringsrondje op dinsdagavond en haar bereidheid om op een telefoonscherm van 5 inch te scrollen. Op de dag dat ik er een derde appartement bij nam, had de sheet kleurcodes nodig, daarna een apart tabblad per schoonmaker, daarna een formule in een cel die ik drie maanden later niet meer kon lezen. Toen ben ik me echt gaan verdiepen in het automatiseren van het schoonmaakschema — niet omdat de sheet had gefaald, maar omdat het derde appartement het patroon brak.

Dit artikel gaat over wat je echt moet automatiseren, wat je beter handmatig laat, en de werkwijze met een schoonmakersrol die volgens mij elke host vanaf de tweede accommodatie zou moeten gebruiken.

## TL;DR

- Een spreadsheet werkt voor één accommodatie. Misschien twee. Daarna verrot elke gedeelde sheet tot een kluwen samengevoegde cellen die niemand nog vertrouwt.
- Het schoonmaakschema moet uit de kalender voortkomen, niet ernaast worden bijgehouden. Eén bron van waarheid: de boekingskalender.
- Geef de schoonmaker een eigen login of een pagina met een magische link. Laat de accommodaties van die dag zien, de tijdvensters en een knop Klaar. Meer niet.
- Houd per wissel drie dingen bij: status (gepland / bezig / klaar), notities (gevonden problemen) en foto's (bewijs + geheugensteun).
- Gebruik WhatsApp niet meer als administratie. Gebruik het om te chatten, niet voor "heb je appartement 3 schoongemaakt?".

## Het eigenlijke probleem met een gedeelde spreadsheet

Een gedeelde sheet werkt omdat het een lijst is. Het probleem is dat die lijst geen weergave per schoonmaker heeft zonder filters, en filters in Sheets zijn precies het soort ding dat kapotgaat zodra je schoonmaker op de verkeerde cel tikt.

Drie dingen gaan concreet mis als je groeit:

1. **Verschillende schoonmakers hebben verschillende weergaven nodig.** Schoonmaker A doet de studio's; schoonmaker B doet de familievilla's. Filters en tabbladen werken alleen als iedereen zo gedisciplineerd is dat niemand de weergave van een ander kapotmaakt. Dat is niet zo.
2. **De status is vaag.** "Klaar" in groene tekst op dinsdagavond kan klaar om 09:00 betekenen of klaar om 14:00. Het tijdstip waarop het klaar is, doet ertoe als je om 15:00 een check-in hebt.
3. **De geschiedenis is onzichtbaar.** "Lekte de gootsteen in de keuken vorige maand?" betekent terugscrollen door cellen die elke week opnieuw zijn bewerkt. De oorspronkelijke notitie is weg.

Een module die echt voor schoonmaak is gemaakt, lost elk van deze problemen op door het datamodel om te draaien. In plaats van een raster dat je horizontaal leest, ziet de schoonmaker een lijst met *zijn eigen* taken voor *vandaag*, gesorteerd op check-intijd. De host ziet een dashboard met alle wissels van alle schoonmakers. Dezelfde gegevens, twee weergaven.

Daar heb je geen tool van $ 200 per maand voor nodig. Zelfs onze gratis [RentTools](/onboard)-installatie heeft een werkwijze met een schoonmakersrol, en het is geen uniek idee. Smoobu, Hostaway, Lodgify: elk betaald PMS heeft dezelfde bouwsteen. Het gaat erom dat je *iets* gebruikt wat ervoor gemaakt is, in plaats van een sheet.

## Wat een schoonmaakschema moet bijhouden

Weersta de neiging om alles bij te houden. Het schema dat op de achterkant van een bierviltje past, dekt 95% van de gevallen.

Per wissel:

1. **Accommodatie**: welk appartement.
2. **Datum**: de schoonmaakdag, afgeleid van de check-outdatum van de vorige boeking.
3. **Tijdvenster**: vroegste begintijd (na de check-out) en uiterste eindtijd (vóór de volgende check-in).
4. **Toegewezen schoonmaker**: de persoon die verantwoordelijk is. Maar één; valt die uit, dan schaal je op.
5. **Status**: gepland → bezig → klaar. Optioneel: "probleem gevonden", waarmee de host een seintje krijgt.
6. **Notities**: vrije tekst, geschreven door de schoonmaker. Kort.
7. **Foto's**: 0 tot 3 bijlagen. Voor / na / schade.

Dat is alles. Begin niet aan "verwachte duur", "checklist met 47 subtaken" of "voorraadbeheer". Elk daarvan begint als een goed idee en verrot tot ruis die niemand leest.

De discussie over schoonmaakchecklists is echt. Mijn standpunt: een checklist is een ander document dan het schema. Het schema zegt "dit moet om 14:00 schoon zijn"; de checklist zegt "wat schoonmaken in deze accommodatie inhoudt". Houd ze gescheiden. Print de checklist en plak hem aan de binnenkant van de voorraadkast. Zet het schema in je tool.

Voor een uitgewerkt voorbeeld van hoe je over planning nadenkt bij synchronisatievertraging en het risico op dubbele boekingen (wat direct bepaalt wanneer een wissel überhaupt in het schema verschijnt), zie [ons spiekbriefje voor het voorkomen van dubbele boekingen](/blog/avoiding-double-bookings).

## De werkwijze met een schoonmakersrol (zonder hostlogin)

De schoonmaker heeft geen hostaccount nodig. Er een geven is een klein beveiligingsrisico (hij kan elk detail van elke boeking zien) en een gebruiksramp (het dashboard is niet ontworpen voor zijn werk).

Het juiste patroon is een **aparte schoonmakersrol**. Drie regels voor wat die te zien krijgt:

1. Eerst de taken van vandaag. De taken van morgen daaronder. Geen kalenderraster, maar een chronologische lijst.
2. Alleen de eigen accommodaties van de schoonmaker. Maakt hij drie van je zes schoon, dan hoeft hij de andere drie niet te zien.
3. Eén actie per regel: een knop Klaar. Tikken, bevestigen, klaar. Optioneel: een link "probleem melden" ernaast.

Inloggen is het deel waar hosts te veel over nadenken. De schoonmaker heeft geen wachtwoord nodig. Een blijvende cookie met een magische link op zijn telefoon is genoeg; hij zet `https://yourtool.example/cleaner/abc-token-xyz` in zijn bladwijzers, de cookie houdt hem een jaar ingelogd, en als je de link vernieuwt werkt hij niet meer zodra een schoonmaker niet meer voor je werkt.

Host je zelf, dan is dit ongeveer een middagje werk. Gebruik je een gehost PMS (RentTools, Smoobu, Hostaway), dan zit deze werkwijze er standaard in.

## Foto's en notities: wanneer vraag je erom en wat leg je vast

Het optionele uploaden van foto's is de functie die een werkwijze met een schoonmakersrol echt de moeite waard maakt. Twee foto's per wissel geven je:

1. **Voor de schoonmaak.** Tien seconden die de schoonmaker neemt bij aankomst: hoe de vorige gast het heeft achtergelaten. Beslecht 90% van de discussies over "de vorige gast heeft X kapotgemaakt" als de volgende gast het meldt.
2. **Na de schoonmaak.** Hoe het appartement erbij staat als de schoonmaker klaar is. Beslecht schadeclaims als een gast incheckt en kapot meubilair meldt dat vier uur eerder nog in orde was.

Je hebt geen gelikte foto nodig. Een snelle foto van het bed en een van de badkamer is genoeg. Opslaan, vergeten, en alleen terugzoeken als er discussie is.

Notities zijn er in twee smaken. **Notities van de schoonmaker** ("vaatwastabletten zijn op", "gast heeft een jas laten liggen") zijn snelle tekstvelden. **Probleemmeldingen** ("airco lekt, onderhoud gebeld") zijn hetzelfde veld met een vlag die de host direct mailt of een seintje geeft. Eén veld, twee betekenissen, ingesteld met een vinkje.

Eis niet van elk punt op de checklist een foto. De tijd van de schoonmaker is beperkt, en als elke wissel 30 foto's vraagt, gaat hij lege muren fotograferen om aan de regel te voldoen. Twee echte foto's zijn beter dan dertig nepfoto's.

## WhatsApp is een chattool, geen administratie

Elke host die ik in Tasjkent heb gesproken, heeft een WhatsApp-groep met zijn schoonmakers. Ik ook. De fout die we allemaal te lang hebben gemaakt, was die WhatsApp-groep behandelen als de bron van waarheid voor de schoonmaakstatus.

WhatsApp is goed voor:
- Snelle berichtjes als "ik ben een halfuur later"
- Foto's van ongebruikelijke schade waar de host iets van moet vinden
- Afstemming bij een wijziging (vandaag een andere schoonmaker; probleem met een bestelling)

Het is slecht voor:
- "Is appartement 3 schoongemaakt?", met het antwoord twee dagen geleden voorbij gescrold
- Bijhouden welke wissels in februari zijn overgeslagen
- Een nieuwe schoonmaker inwerken zonder 600 berichten door te sturen

Gebruik WhatsApp om te chatten. Gebruik de schoonmaakmodule voor de status. Die twee moeten nooit om dezelfde taak concurreren. Als een schoonmaker in WhatsApp vraagt "heb jij het appartement als schoon gemarkeerd?", is het juiste antwoord: "Dat houd ik niet bij. Dat doet jouw knop Klaar. Heb je erop getikt?"

Dit is meer een cultuurverandering dan een technische. Het kost misschien een week discipline voordat de schoonmaker stopt met "klaar"-berichtjes en de knop gaat vertrouwen.

## Veelgestelde vragen

**Heb ik een aparte tool nodig, of kan ik mijn bestaande boekingskalender uitbreiden?**
De meeste kalenders kun je uitbreiden. Google Agenda met een paar macro's brengt je een heel eind. Vanaf drie accommodaties verdient een module die echt voor schoonmaak is gemaakt zich binnen de eerste maand terug in bespaarde coördinatietijd.

**Mijn schoonmaker is mijn moeder / partner / één persoon die ik volledig vertrouw. Heb ik echt een rol nodig?**
Strikt genomen niet. Met één schoonmaker die ook familie is, werkt de combinatie van WhatsApp en een sheet. Dit artikel is voor het moment dat je iemand van buiten de familie aanneemt, of naar twee schoonmakers groeit — dan is toegang op basis van rollen de moeite van het instellen waard.

**Hoe zit het met voorraadbeheer (wc-papier, zeep)?**
Ander probleem, andere tool. Een simpel gedeeld boodschappenlijstje werkt voor twee accommodaties; een echte voorraadtool wordt pas vanaf vijf de moeite waard. Plak het niet aan het schoonmaakschema vast; ze worden in een ander tempo bijgewerkt.

**Betaal ik de schoonmaker per wissel of per uur?**
Valt buiten dit artikel, maar mijn mening: per wissel voor studio's, per uur voor villa's. Betalen per wissel schaalt vanzelf mee met het aantal boekingen; betalen per uur past bij de onvoorspelbaarheid van grote accommodaties. Beide mengen binnen dezelfde accommodatie eindigt meestal in een discussie over nieuwe afspraken.

**Wat gebeurt er als een schoonmaker niet komt opdagen?**
De status blijft na het schoonmaakvenster op gepland staan; de host krijgt een seintje. Vanaf dat moment is het een telefoontje. De tool kan een no-show niet oplossen; hij kan alleen snel laten zien dat het is gebeurd.

**Is er een gratis optie voor de werkwijze met een schoonmakersrol?**
Ja. Open-source PMS-installaties die je zelf host (RentTools, KalSync, enz.) hebben weergaven voor schoonmakers. Net als de gratis versies van kleine commerciële PMS-aanbieders. De gratis optie is niet het knelpunt; of de schoonmaker het gaat gebruiken, meestal wel.

## Eén uitgesproken mening

De grootste fout die hosts met hun schoonmaakschema maken, is **de schoonmaker in de kalender van de host zetten**. Ze laten hun schoonmaker het volledige boekingsdashboard zien, alle accommodaties, alle gastnamen, elke check-intijd. De schoonmaker raakt overweldigd, de host heeft meer gegevens gedeeld dan de bedoeling was, en op de een of andere manier is niemand er blijer van.

Geef de schoonmaker een lijst. Vandaag. Knop Klaar. Dat is de hele interface. Kan je huidige tool dat niet, stap dan over, of bouw de rol zelf op een middag. De tweeënhalf jaar met de sheet waren goede jaren; ze waren nog beter geweest als ik de weergave voor de schoonmaker in maand vier had gebouwd.
