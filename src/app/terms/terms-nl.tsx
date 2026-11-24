import Link from "next/link";

// Dutch translation of the Terms of Service. Rendered by ./page.tsx
// when the request locale is "nl" (served at /nl/terms). The English
// version in ./page.tsx is canonical; keep both in sync when the terms
// change and bump LAST_UPDATED in both places.

const H2 = "mb-2 text-lg font-semibold text-[var(--ink)]";
const LINK = "text-sky-400 hover:underline";

export function TermsMainNl({
  lastUpdated,
  operatorName,
  operatorEmail,
}: {
  lastUpdated: string;
  operatorName: string;
  operatorEmail: string;
}) {
  const mail = <a href={`mailto:${operatorEmail}`} className={LINK}>{operatorEmail}</a>;
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Gebruiksvoorwaarden</h1>
      <p className="mt-2 text-sm text-[var(--ink-4)]">Laatst bijgewerkt: {lastUpdated}</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-[var(--ink-2)] sm:text-base">
        <section>
          <p className="rounded-md border border-[var(--line)] bg-[var(--bg-2)] p-3 text-[var(--ink-3)]">
            Dit is een Nederlandse vertaling van onze gebruiksvoorwaarden. Bij
            verschillen tussen deze vertaling en de Engelse versie (te bekijken via de
            taalkeuze bovenaan de pagina) is de Engelse versie leidend.
          </p>
        </section>

        <section>
          <p>
            Deze Gebruiksvoorwaarden (&quot;Voorwaarden&quot;) vormen een bindende
            overeenkomst tussen jou (&quot;je&quot;, &quot;jouw&quot;) en{" "}
            {operatorName} (&quot;wij&quot;, &quot;ons&quot;, &quot;de
            Beheerder&quot;), de onafhankelijke maintainer van de RentTools-dienst die
            wordt gehost op{" "}
            <span className="font-mono text-[var(--ink)]">https://renttools.io</span>{" "}
            (&quot;de Dienst&quot;). Door een account aan te maken of de Dienst te
            gebruiken, ga je akkoord met deze Voorwaarden. Ga je niet akkoord, gebruik
            de Dienst dan niet.
          </p>
        </section>

        <section>
          <h2 className={H2}>1. Over de Dienst</h2>
          <p>
            RentTools is een open-source beheertool voor accommodaties en reserveringen,
            bedoeld voor eigenaren en beheerders van vakantieverhuur. De broncode is
            gepubliceerd onder de MIT-licentie op{" "}
            <a
              href="https://github.com/Gribadan/RentTools.io"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK}
            >
              github.com/Gribadan/RentTools.io
            </a>{" "}
            en mag door iedereen zelf worden gehost. Deze Voorwaarden gelden alleen
            voor de gehoste versie die wij op renttools.io beheren. Als je zelf host,
            beheer je je eigen dienst en zijn deze Voorwaarden niet van toepassing.
          </p>
        </section>

        <section>
          <h2 className={H2}>2. Wie de Dienst mag gebruiken</h2>
          <p>
            Je moet minimaal 16 jaar oud zijn (of ouder als je lokale wetgeving dat
            vereist) om een account aan te maken. Door je te registreren bevestig je dat
            je aan die eis voldoet en dat je bevoegd bent om deze Voorwaarden te
            accepteren namens een organisatie waarvoor je een account aanmaakt.
          </p>
        </section>

        <section>
          <h2 className={H2}>3. Account en beveiliging</h2>
          <p>
            Je kiest zelf je gebruikersnaam en wachtwoord. Je bent verantwoordelijk
            voor het geheimhouden van je inloggegevens en voor alles wat er onder je
            account gebeurt. Laat het ons weten via {mail} als je vermoedt dat iemand
            zonder toestemming toegang heeft gekregen. We kunnen accounts die tekenen
            van misbruik vertonen opschorten of beëindigen om andere gebruikers te
            beschermen.
          </p>
        </section>

        <section>
          <h2 className={H2}>4. Aanvaardbaar gebruik</h2>
          <p>Je gaat ermee akkoord dat je niet:</p>
          <ul className="list-disc space-y-2 pl-5 mt-2">
            <li>de toepasselijke wet overtreedt, waaronder de wetgeving over gegevensbescherming;</li>
            <li>
              inhoud uploadt die inbreuk maakt op de rechten van anderen, of die
              onrechtmatig, bedreigend, intimiderend, lasterlijk of anderszins
              aanstootgevend is;
            </li>
            <li>
              persoonsgegevens van derden bewaart of verwerkt zonder rechtmatige
              grondslag (toestemming, registratieplicht voor logies, enz.);
            </li>
            <li>
              probeert authenticatie, limieten of toegangscontroles te omzeilen;
            </li>
            <li>
              de Dienst aftast, scant of belast verder dan normaal gebruik;
            </li>
            <li>
              de gehoste Dienst doorverkoopt, in sublicentie geeft of commercieel
              herdistribueert (de open-sourcecode mag je onder MIT vrij zelf hosten);
            </li>
            <li>
              de Dienst gebruikt om spam of malware te versturen of om enig botnet,
              scraper of scrapingfarm te laten draaien;
            </li>
            <li>
              probeert code of gegevens die niet aan jou beschikbaar zijn gesteld te
              reverse-engineeren of te achterhalen, anders dan door de openbare
              broncode te lezen.
            </li>
          </ul>
          <p className="mt-3">
            We kunnen accounts die deze sectie overtreden opschorten of beëindigen, met
            of zonder voorafgaande melding. We kunnen ook inhoud verwijderen waarvan we
            te goeder trouw aannemen dat die deze sectie overtreedt.
          </p>
        </section>

        <section>
          <h2 className={H2}>5. Jouw inhoud en gegevens</h2>
          <p>
            Je blijft eigenaar van alle inhoud die je met de Dienst uploadt of maakt —
            accommodaties, reserveringen, kalenderlinks, berichtsjablonen,
            schoonmaakgegevens en gastgegevens. Je verleent ons een beperkte,
            niet-exclusieve licentie om die inhoud te hosten, verwerken, verzenden,
            tonen en back-uppen, uitsluitend om de Dienst aan jou te leveren. We
            claimen geen rechten die verder gaan dan nodig is om de Dienst te laten
            werken.
          </p>
          <p className="mt-2">
            Je kunt je gegevens op elk moment exporteren (Rapporten → CSV; Profiel →
            Mijn gegevens exporteren → JSON) en je account direct verwijderen (Profiel
            → Gevarenzone → Mijn account verwijderen). Hoe gegevens worden opgeslagen
            en hoe lang ze worden bewaard, lees je in ons{" "}
            <Link href="/nl/privacy" className={LINK}>
              privacybeleid
            </Link>.
          </p>
        </section>

        <section>
          <h2 className={H2}>6. Paspoortgegevens van gasten</h2>
          <p>
            Wanneer je paspoortfoto&apos;s van gasten uploadt om ze te laten uitlezen
            (OCR), ben jij de verwerkingsverantwoordelijke voor die persoonsgegevens.
            Je bevestigt dat je een rechtmatige grondslag hebt om ze te verwerken
            (meestal een registratieplicht voor logies op grond van je lokale
            wetgeving) en dat je de gast hebt geïnformeerd. Wij treden op als jouw
            verwerker en verwerken de gegevens alleen op jouw gedocumenteerde
            instructies. Jij bent verantwoordelijk voor het afhandelen van verzoeken
            van gasten over hun gegevens; wij helpen je daar op verzoek bij.
          </p>
        </section>

        <section>
          <h2 className={H2}>7. Intellectueel eigendom</h2>
          <p>
            De broncode van RentTools valt onder de MIT-licentie — een exemplaar van
            de licentie wordt met de broncode meegeleverd. De naam &quot;RentTools&quot;
            en eventuele logo&apos;s op renttools.io blijven eigendom van de Beheerder
            en worden niet in licentie gegeven om goedkeuring van forks of andere
            installaties te suggereren. Namen van derden die in de applicatie worden
            genoemd (Airbnb, Booking.com, Google, enz.) zijn eigendom van hun
            respectieve eigenaren.
          </p>
        </section>

        <section>
          <h2 className={H2}>8. Gratis dienst, geen garantie</h2>
          <p>
            De gehoste Dienst wordt kosteloos en &quot;in de huidige staat&quot; en
            &quot;zoals beschikbaar&quot; aangeboden, zonder enige uitdrukkelijke of
            stilzwijgende garantie — waaronder, maar niet beperkt tot, stilzwijgende
            garanties van verkoopbaarheid, geschiktheid voor een bepaald doel,
            niet-inbreuk en ononderbroken werking. We garanderen niet dat de Dienst
            foutloos is, dat kalenders zonder vertraging synchroniseren of dat
            back-ups elke nacht slagen. Is de Dienst cruciaal voor je bedrijf, host
            hem dan zelf, zodat je zelf de controle hebt over je back-ups, uptime en de
            locatie van je gegevens.
          </p>
        </section>

        <section>
          <h2 className={H2}>9. Beperking van aansprakelijkheid</h2>
          <p>
            Voor zover maximaal toegestaan door het toepasselijke recht is de totale
            aansprakelijkheid van de Beheerder jegens jou voor alle vorderingen die
            voortvloeien uit of verband houden met de Dienst — op grond van
            overeenkomst, onrechtmatige daad of anderszins — niet hoger dan het hoogste
            van (a) het totaal aan vergoedingen dat je ons in de twaalf maanden vóór de
            vordering hebt betaald of (b) tien euro (€ 10). De Dienst is kosteloos,
            dus onderdeel (a) is normaal gesproken nul.
          </p>
          <p className="mt-2">
            We zijn niet aansprakelijk voor indirecte schade, gevolgschade, incidentele
            schade, bijzondere schade of punitieve schadevergoedingen, waaronder maar
            niet beperkt tot verloren of dubbel geboekte reserveringen, gemiste
            schoonmaakbeurten, niet-gesynchroniseerde kalenders, verloren gastgegevens,
            boetes van toezichthouders die jou worden opgelegd of bedrijfsonderbreking.
            Sommige rechtsstelsels staan deze beperkingen niet toe; in die
            rechtsstelsels is onze aansprakelijkheid beperkt tot het laagste bedrag dat
            wettelijk is toegestaan.
          </p>
        </section>

        <section>
          <h2 className={H2}>10. Vrijwaring</h2>
          <p>
            Je stemt ermee in de Beheerder te verdedigen en te vrijwaren tegen elke
            vordering, elk verlies of elke kostenpost (inclusief redelijke
            advocaatkosten) die voortvloeit uit (i) inhoud die je uploadt, (ii) je
            gebruik van de Dienst in strijd met deze Voorwaarden, of (iii) jouw
            schending van rechten van derden — waaronder de rechten van gasten van wie
            je paspoortgegevens uploadt.
          </p>
        </section>

        <section>
          <h2 className={H2}>11. Beschikbaarheid en wijzigingen van de Dienst</h2>
          <p>
            Voor de gehoste versie geldt geen SLA. We streven naar een zo goed
            mogelijke uptime en kunnen de Dienst offline halen voor onderhoud, migratie
            of — in uitzonderlijke gevallen — om hem volledig te beëindigen. Als we van
            plan zijn de gehoste versie te beëindigen, informeren we geregistreerde
            gebruikers minstens 30 dagen van tevoren, met instructies om hun gegevens
            te exporteren. De open-sourcecode blijft hoe dan ook onder MIT beschikbaar
            om zelf te hosten.
          </p>
          <p className="mt-2">
            We kunnen functies zonder voorafgaande melding toevoegen, wijzigen of
            verwijderen. We kunnen limieten invoeren of aanpassen om de gratis versie en
            andere gebruikers te beschermen.
          </p>
        </section>

        <section>
          <h2 className={H2}>12. Opschorting en beëindiging</h2>
          <p>
            Je kunt op elk moment stoppen met het gebruik van de Dienst en je account
            verwijderen via het profielpaneel. We kunnen je account direct opschorten
            of beëindigen als (a) we redelijkerwijs aannemen dat je deze Voorwaarden
            hebt geschonden, (b) we daartoe wettelijk verplicht zijn, of (c) langdurige
            inactiviteit (meer dan 24 maanden) erop wijst dat het account verlaten is.
            We geven je een redelijke termijn en de gelegenheid om je gegevens te
            exporteren, tenzij dat de Dienst of andere gebruikers zou schaden.
          </p>
        </section>

        <section>
          <h2 className={H2}>13. Toepasselijk recht en geschillen</h2>
          <p>
            Op deze Voorwaarden is het recht van het land waar de Beheerder woont van
            toepassing, zonder toepassing van de regels van internationaal privaatrecht
            daarvan. Waar dwingend consumentenrecht van jouw land van toepassing is,
            blijven die regels daarnaast gelden. Partijen proberen een geschil eerst
            informeel op te lossen door te mailen naar {mail}. Lukt dat niet, dan zijn
            de rechters van het land waar de Beheerder woont niet-exclusief bevoegd.
          </p>
        </section>

        <section>
          <h2 className={H2}>14. Wijzigingen in deze Voorwaarden</h2>
          <p>
            We kunnen deze Voorwaarden aanpassen als de Dienst of de wetgeving
            verandert. Belangrijke wijzigingen melden we in de app en we passen de
            datum bovenaan deze pagina aan. Eerdere versies zijn zichtbaar in de
            openbare Git-geschiedenis van de open-sourcerepository. Als je de Dienst
            blijft gebruiken nadat wijzigingen van kracht zijn, accepteer je de
            bijgewerkte Voorwaarden.
          </p>
        </section>

        <section>
          <h2 className={H2}>15. Overige bepalingen</h2>
          <p>
            Als een bepaling van deze Voorwaarden niet afdwingbaar blijkt, blijft de
            rest van kracht. Als wij een bepaling niet handhaven, betekent dat niet dat
            we afzien van het recht om die later te handhaven. Je mag je rechten onder
            deze Voorwaarden niet overdragen; wij mogen de onze overdragen aan een
            opvolger die het beheer van de Dienst overneemt, met een melding aan jou.
            Deze Voorwaarden vormen samen met het privacybeleid de volledige
            overeenkomst tussen jou en ons over de Dienst.
          </p>
        </section>

        <section>
          <h2 className={H2}>16. Contact</h2>
          <p>
            Vragen over deze Voorwaarden of de Dienst: mail naar {mail}. Voor openbare
            bugmeldingen of functieverzoeken kun je een issue aanmaken op{" "}
            <a
              href="https://github.com/Gribadan/RentTools.io/issues"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK}
            >
              github.com/Gribadan/RentTools.io/issues
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
