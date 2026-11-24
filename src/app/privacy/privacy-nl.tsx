// Dutch translation of the Privacy Policy. Rendered by ./page.tsx when
// the request locale is "nl" (served at /nl/privacy). The English
// version in ./page.tsx is canonical; keep both in sync when the policy
// changes and bump LAST_UPDATED in both places.

const H2 = "mb-2 text-lg font-semibold text-[var(--ink)]";
const LINK = "text-sky-400 hover:underline";
const STRONG = "font-medium text-[var(--ink)]";

export function PrivacyMainNl({
  lastUpdated,
  operatorName,
  operatorEmail,
}: {
  lastUpdated: string;
  operatorName: string;
  operatorEmail: string;
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Privacybeleid</h1>
      <p className="mt-2 text-sm text-[var(--ink-4)]">Laatst bijgewerkt: {lastUpdated}</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-[var(--ink-2)] sm:text-base">
        <section>
          <p className="rounded-md border border-[var(--line)] bg-[var(--bg-2)] p-3 text-[var(--ink-3)]">
            Dit is een Nederlandse vertaling van ons privacybeleid. Bij verschillen
            tussen deze vertaling en de Engelse versie (te bekijken via de taalkeuze
            bovenaan de pagina) is de Engelse versie leidend.
          </p>
        </section>

        <section>
          <p>
            Dit privacybeleid beschrijft hoe RentTools (&quot;de Dienst&quot;,
            &quot;wij&quot;, &quot;ons&quot;), beheerd door {operatorName} als
            onafhankelijke maintainer, informatie verzamelt, gebruikt, opslaat en
            beschermt wanneer je de gehoste versie op{" "}
            <span className="font-mono text-[var(--ink)]">https://renttools.io</span>{" "}
            gebruikt. Door de Dienst te gebruiken ga je akkoord met de werkwijze die
            hieronder wordt beschreven. Als je de open-sourcecode zelf op je eigen
            infrastructuur host, ben jij de verwerkingsverantwoordelijke voor die
            installatie en is dit beleid niet op jou van toepassing.
          </p>
        </section>

        <section>
          <h2 className={H2}>1. Wie wij zijn</h2>
          <p>
            De Dienst wordt beheerd door {operatorName} als gratis, niet-commercieel
            nevenproject. Er is geen moederbedrijf. Het contactadres voor alle vragen
            over privacy, verzoeken over gegevens of klachten is:
          </p>
          <p className="mt-2 font-mono text-[var(--ink)]">{operatorEmail}</p>
          <p className="mt-2">
            Op grond van de Algemene Verordening Gegevensbescherming (AVG) van de EU en
            de UK GDPR is {operatorName} de verwerkingsverantwoordelijke voor de
            persoonsgegevens die hieronder in sectie 2(a)–(c) worden beschreven. Voor
            paspoortgegevens van gasten die jij uploadt (sectie 2(d)) ben jij de
            verwerkingsverantwoordelijke en treden wij op als jouw verwerker.
          </p>
        </section>

        <section>
          <h2 className={H2}>2. Welke gegevens we verzamelen</h2>
          <p>We verzamelen alleen wat minimaal nodig is om de Dienst te laten werken.</p>
          <p className={`mt-3 ${STRONG}`}>(a) Accountgegevens</p>
          <p>
            Gebruikersnaam en wachtwoord (opgeslagen als bcrypt-hash; het wachtwoord in
            leesbare tekst wordt nooit naar schijf of logs geschreven). Het tijdstip
            waarop het account is aangemaakt, het tijdstip van de laatste login, je rol
            (eigenaar / schoonmaker / beheerder) en — als je ervoor kiest om dat op te
            geven — een optioneel e-mailadres voor support. We vragen bij registratie
            niet verplicht om een e-mailadres.
          </p>
          <p className={`mt-3 ${STRONG}`}>(b) Gegevens die je in de Dienst aanmaakt</p>
          <p>
            Accommodaties, reserveringen, kalenderlinks, berichtsjablonen,
            schoonmaakgegevens en alle notities of tags die je toevoegt. iCal-feedlinks
            die je koppelt aan externe platforms (Airbnb, Booking.com) en de
            gebeurtenissen die die feeds teruggeven.
          </p>
          <p className={`mt-3 ${STRONG}`}>(c) Operationele gegevens</p>
          <p>
            Serverlogs van verzoeken met een geschoond pad, HTTP-status, responstijd,
            IP-adres en de ID van de ingelogde gebruiker. Beveiligde tokens van
            gastenformulieren worden uit gelogde paden verwijderd. Foutrapporten van de
            applicatie die door Sentry worden vastgelegd (zie sectie 4).
            Synchronisatielogs per accommodatie. Auditlogs van aanmaak-, wijzigings- en
            verwijderacties op je eigen gegevens. Operationele gegevens worden maximaal
            30 dagen bewaard om incidenten te onderzoeken en misbruik op te sporen.
          </p>
          <p className={`mt-3 ${STRONG}`}>(d) Paspoortgegevens van gasten (door jou geüpload)</p>
          <p>
            Wanneer je een paspoortfoto uploadt om die te laten uitlezen (OCR), wordt de
            afbeelding naar Google Gemini gestuurd om eenmalig de velden uit te lezen
            (volledige naam, geboortedatum, documentnummer, land, soort document,
            vervaldatum). De uitgelezen velden worden gekoppeld aan de betreffende
            reservering in je account. De oorspronkelijke foto wordt na het uitlezen
            niet op onze servers bewaard.
          </p>
        </section>

        <section>
          <h2 className={H2}>3. Hoe we je gegevens gebruiken en op welke grondslag</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className={STRONG}>Uitvoering van een overeenkomst</span>{" "}
              (art. 6 lid 1 sub b AVG): je inloggen, je accommodaties en boekingen
              opslaan, kalenders synchroniseren, schoonmaakschema&apos;s maken,
              berichtsjablonen tonen en je gegevens op verzoek exporteren.
            </li>
            <li>
              <span className={STRONG}>Gerechtvaardigd belang</span>{" "}
              (art. 6 lid 1 sub f AVG): de Dienst veilig houden, fouten opsporen,
              beschermen tegen misbruik en overschrijding van limieten, en de
              infrastructuur laten draaien (logs, back-ups, monitoring). Waar we ons op
              gerechtvaardigd belang beroepen, wegen we dat af tegen jouw rechten en
              vragen we alleen wat we nodig hebben.
            </li>
            <li>
              <span className={STRONG}>Wettelijke verplichting</span>{" "}
              (art. 6 lid 1 sub c AVG): gegevens bewaren voor zover dat nodig is om te
              reageren op rechtmatige verzoeken van autoriteiten.
            </li>
            <li>
              <span className={STRONG}>Voor paspoorten van gasten die jij uploadt</span>:
              wij zijn jouw verwerker en handelen uitsluitend op jouw gedocumenteerde
              instructies. Jij bent er verantwoordelijk voor dat je een passende
              grondslag hebt (je lokale wetgeving voor gastenregistratie, toestemming,
              enz.).
            </li>
          </ul>
          <p className="mt-3">
            We gebruiken je gegevens niet voor advertenties, profilering,
            geautomatiseerde besluiten met rechtsgevolgen of het trainen van
            machine-learningmodellen van derden.
          </p>
        </section>

        <section>
          <h2 className={H2}>4. Subverwerkers en derden</h2>
          <p>We gebruiken een klein aantal infrastructuurleveranciers om de Dienst te laten draaien:</p>
          <ul className="list-disc space-y-2 pl-5 mt-2">
            <li>
              <span className={STRONG}>DigitalOcean, LLC</span> — host de
              applicatieserver en de SQLite-database (EU-regio). Treedt op als
              subverwerker voor hosting.{" "}
              <a href="https://www.digitalocean.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className={LINK}>
                Privacybeleid
              </a>.
            </li>
            <li>
              <span className={STRONG}>Cloudflare, Inc.</span> — DNS, CDN en
              TLS-proxy. Ziet IP-adressen en metadata van verzoeken, maar geen
              ontsleutelde inhoud van de applicatie buiten wat nodig is om verkeer door
              te sturen.{" "}
              <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className={LINK}>
                Privacybeleid
              </a>.
            </li>
            <li>
              <span className={STRONG}>Google LLC (Gemini API)</span> — verwerkt
              geüploade paspoortafbeeldingen voor eenmalige OCR. Valt onder de{" "}
              <a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noopener noreferrer" className={LINK}>
                voorwaarden van de Gemini API van Google
              </a>{" "}
              en het privacybeleid van Google.
            </li>
            <li>
              <span className={STRONG}>Functional Software, Inc. (Sentry)</span> —
              ontvangt foutrapporten van de applicatie, inclusief stack traces, het IP
              van het verzoek en de ID van de ingelogde gebruiker, om fouten op te
              sporen. Persoonsgegevens in de inhoud van verzoeken worden verwijderd.{" "}
              <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer" className={LINK}>
                Privacybeleid
              </a>.
            </li>
            <li>
              <span className={STRONG}>Better Stack s.r.o. (BetterStack)</span> —
              externe uptime-monitoring; pingt alleen het openbare health-endpoint. Ziet
              geen gebruikersgegevens.{" "}
              <a href="https://betterstack.com/privacy" target="_blank" rel="noopener noreferrer" className={LINK}>
                Privacybeleid
              </a>.
            </li>
            <li>
              <span className={STRONG}>Airbnb &amp; Booking.com</span>{" "}
              — derden van wie jij de iCal-exportlinks aan ons opgeeft. We halen alleen
              gegevens op van de links die je ons geeft; we sturen niets naar hen terug.
            </li>
          </ul>
          <p className="mt-3">
            We verkopen, verhuren of verstrekken geen persoonsgegevens aan andere
            partijen. We geven alleen gegevens aan autoriteiten als we daartoe via een
            geldige juridische procedure verplicht zijn.
          </p>
        </section>

        <section>
          <h2 className={H2}>5. Internationale doorgifte van gegevens</h2>
          <p>
            De applicatieserver staat in de Europese Unie. Bij Sentry, Google Gemini,
            Cloudflare en het beheerplatform van DigitalOcean worden gegevens
            doorgegeven aan de Verenigde Staten. Wanneer persoonsgegevens buiten de
            EER / het VK worden doorgegeven, baseren we ons op de
            modelcontractbepalingen (Standard Contractual Clauses) van de Europese
            Commissie en, waar van toepassing, op het adequaatheidsbesluit voor het
            EU-VS-gegevensprivacykader (Data Privacy Framework) als
            doorgiftemechanisme, en op de contractuele toezeggingen van de leveranciers
            om gelijkwaardige bescherming te bieden.
          </p>
        </section>

        <section>
          <h2 className={H2}>6. Waar gegevens staan en hoe lang we ze bewaren</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Account-, dienst- en auditgegevens: bewaard zolang je account actief is,
              en daarna binnen 7 dagen na een verzoek tot verwijdering van je account
              verwijderd.
            </li>
            <li>
              Versleutelde SQLite-back-ups: 14 dagelijkse, 8 wekelijkse en 6
              maandelijkse snapshots, die daarna worden gewist. Back-ups met gegevens
              van een verwijderd account verdwijnen binnen ongeveer 6 maanden na
              verwijdering uit alle niveaus.
            </li>
            <li>
              Operationele logs (verzoeken, synchronisatie, fouten): maximaal 30 dagen.
            </li>
            <li>
              Foutmeldingen in Sentry: 90 dagen (de standaard van Sentry voor het
              gratis abonnement).
            </li>
            <li>
              Geüploade paspoortafbeeldingen: niet bewaard — direct na het uitlezen
              door Gemini verwijderd.
            </li>
          </ul>
        </section>

        <section>
          <h2 className={H2}>7. Cookies</h2>
          <p>
            We plaatsen precies één cookie: een {`HTTP-only, Secure, SameSite=Lax`}{" "}
            sessiecookie met een JWT die 7 dagen geldig is, uitsluitend gebruikt om je
            ingelogd te houden. We gebruiken geen analytische, advertentie-,
            socialemedia- of trackingcookies van derden. We hebben geen cookiebanner
            nodig omdat we geen niet-noodzakelijke cookies plaatsen.
          </p>
        </section>

        <section>
          <h2 className={H2}>8. Jouw rechten</h2>
          <p>
            Op grond van de AVG (en vergelijkbare wetgeving in onder meer het VK,
            Californië en Brazilië) heb je het recht om:
          </p>
          <ul className="list-disc space-y-2 pl-5 mt-2">
            <li>
              <span className={STRONG}>Inzage</span> te krijgen in de
              persoonsgegevens die we over je hebben. Gebruik Profiel → Mijn gegevens
              exporteren voor een JSON-dump van je volledige account.
            </li>
            <li>
              Onjuiste gegevens te laten <span className={STRONG}>rectificeren</span>{" "}
              — elk veld kun je in de app zelf aanpassen.
            </li>
            <li>
              Je gegevens te laten <span className={STRONG}>wissen</span>{" "}
              (&quot;recht op vergetelheid&quot;) — Profiel → Gevarenzone → Mijn
              account verwijderen. Hiermee wordt alles wat aan je account gekoppeld is
              direct verwijderd; back-ups verlopen zoals hierboven beschreven.
            </li>
            <li>
              Je gegevens <span className={STRONG}>over te dragen</span> naar een
              andere dienst — het paneel Rapporten exporteert reserveringen als CSV, en
              de volledige export hierboven is JSON.
            </li>
            <li>
              De verwerking die we op gerechtvaardigd belang baseren te laten{" "}
              <span className={STRONG}>beperken</span> of er{" "}
              <span className={STRONG}>bezwaar</span> tegen te maken. Mail naar{" "}
              <a href={`mailto:${operatorEmail}`} className={LINK}>{operatorEmail}</a>{" "}
              met als onderwerp &quot;GDPR request&quot;; we reageren binnen 30 dagen.
            </li>
            <li>
              Je <span className={STRONG}>toestemming in te trekken</span> waar
              toestemming de grondslag is (bijvoorbeeld als je ons hebt gevraagd je te
              mailen over wijzigingen in de dienst — op dit moment doen we dat niet).
            </li>
            <li>
              Een <span className={STRONG}>klacht in te dienen</span> bij je nationale
              toezichthouder voor gegevensbescherming (in Nederland de Autoriteit
              Persoonsgegevens). Gebruikers in de EU vinden hun lokale toezichthouder
              op{" "}
              <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer" className={LINK}>
                edpb.europa.eu
              </a>.
            </li>
          </ul>
        </section>

        <section>
          <h2 className={H2}>9. Beveiliging</h2>
          <p>
            We beschermen je gegevens met TLS 1.2+ tijdens verzending (certificaten van
            Let&apos;s Encrypt, Cloudflare Full-Strict-modus van begin tot eind),
            bcrypt-hashing van wachtwoorden in opslag, sessies op basis van JWT met
            HTTP-only cookies, IP-gebaseerde limieten op inlog-endpoints, automatische
            dagelijkse back-ups, afgeschermde servertoegang (ufw), bescherming tegen
            brute-force-aanvallen (fail2ban) en automatische beveiligingsupdates
            (unattended-upgrades). Geen enkel systeem is 100% veilig; als we een
            datalek ontdekken dat je gegevens in gevaar brengt, informeren we de
            betrokken gebruikers zonder onnodige vertraging.
          </p>
        </section>

        <section>
          <h2 className={H2}>10. Paspoortgegevens van gasten — jouw verantwoordelijkheid</h2>
          <p>
            Wanneer je paspoorten van gasten uploadt naar RentTools, blijf jij op grond
            van de AVG de verwerkingsverantwoordelijke voor die gegevens. Je moet een
            eigen rechtmatige grondslag hebben om ze te verzamelen en te bewaren
            (meestal een registratieplicht voor logies op grond van je lokale wetgeving,
            soms toestemming), je gasten informeren en hun recht op inzage,
            rectificatie en wissing van de gegevens die je over hen hebt respecteren.
            Wij handelen uitsluitend op jouw instructies en helpen je bij verzoeken van
            gasten over hun gegevens.
          </p>
        </section>

        <section>
          <h2 className={H2}>11. Kinderen</h2>
          <p>
            De Dienst is bedoeld voor eigenaren van accommodaties en niet gericht op
            kinderen. We verzamelen niet bewust persoonsgegevens van personen jonger dan
            16 jaar. Maak geen account aan namens een minderjarige. Denk je dat wij
            gegevens over een minderjarige hebben, neem dan contact met ons op via{" "}
            <a href={`mailto:${operatorEmail}`} className={LINK}>{operatorEmail}</a>{" "}
            en we verwijderen ze.
          </p>
        </section>

        <section>
          <h2 className={H2}>12. Geautomatiseerde besluitvorming</h2>
          <p>
            We nemen geen besluiten over je met rechtsgevolgen of vergelijkbare
            ingrijpende gevolgen op basis van geautomatiseerde verwerking. Limieten en
            de optionele noodschakelaar om accounts op te schorten worden handmatig door
            de maintainer bediend.
          </p>
        </section>

        <section>
          <h2 className={H2}>13. Wijzigingen in dit beleid</h2>
          <p>
            We kunnen dit beleid aanpassen als de Dienst of de wetgeving verandert.
            Belangrijke wijzigingen worden in de app gemeld en bovenaan deze pagina
            gedateerd. Als je de Dienst blijft gebruiken nadat wijzigingen van kracht
            zijn, accepteer je het bijgewerkte beleid. Eerdere versies zijn te vinden in
            de openbare Git-geschiedenis van de open-sourcerepository.
          </p>
        </section>

        <section>
          <h2 className={H2}>14. Contact</h2>
          <p>
            Voor alle vragen over privacy, verzoeken over gegevens of klachten:
          </p>
          <p className="mt-2 font-mono text-[var(--ink)]">{operatorEmail}</p>
          <p className="mt-2">
            Je kunt ook een openbare issue aanmaken op{" "}
            <a
              href="https://github.com/Gribadan/RentTools.io/issues"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK}
            >
              github.com/Gribadan/RentTools.io/issues
            </a>
            {" "}— maar gebruik e-mail voor alles waar persoonsgegevens in staan.
          </p>
        </section>
      </div>
    </main>
  );
}
