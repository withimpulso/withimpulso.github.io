import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage, type Language } from "@/lib/i18n";

type TermsSection = {
  title: string;
  paragraphs: string[];
};

type TermsTranslation = {
  eyebrow: string;
  title: string;
  intro: string;
  languageNotice: string;
  updated: string;
  sections: TermsSection[];
};

const dutchSections: TermsSection[] = [
  {
    title: "1. Gegevens van Impulso",
    paragraphs: [
      "Impulso, handelend onder de namen Impulso, Impulso Workplace, Impulso Security, Impulso Identity, Impulso Training, Impulso Advisory, gevestigd aan Emmalaan 2, 2421 CP Nieuwkoop in Nederland, ingeschreven bij de Kamer van Koophandel onder nummer 83253475, met btw-identificatienummer NL003795090B97.",
      "E-mail: hello@withimpulso.com.",
    ],
  },
  {
    title: "2. Begrippen en toepasselijkheid",
    paragraphs: [
      "In deze voorwaarden betekenen 'klant' en 'Opdrachtgever': de zakelijke klant die met Impulso een overeenkomst aangaat. 'Diensten' omvatten onder meer IT-consultancy, Microsoft 365-, identity- en securitydiensten, workshops en trainingen.",
      "Deze voorwaarden zijn uitsluitend van toepassing op offertes, opdrachten en overeenkomsten met klanten die handelen in de uitoefening van een beroep of bedrijf. Afwijkingen gelden alleen als partijen die schriftelijk afspreken. Bij strijdigheid gaat de schriftelijke offerte of overeenkomst voor.",
    ],
  },
  {
    title: "3. Offerte en overeenkomst",
    paragraphs: [
      "Een offerte vermeldt de werkzaamheden, eventuele resultaten, planning, prijs en de geldigheidsduur. Een offerte is vrijblijvend totdat Impulso deze schriftelijk aanvaardt of partijen de opdracht schriftelijk bevestigen.",
      "De overeenkomst komt tot stand zodra de klant de offerte schriftelijk aanvaardt, bijvoorbeeld per e-mail, of zodra Impulso met instemming van de klant met de uitvoering begint. Wijzigingen of aanvullingen op de opdracht worden schriftelijk vastgelegd.",
    ],
  },
  {
    title: "4. Uitvoering van de diensten",
    paragraphs: [
      "Impulso voert de opdracht zorgvuldig en naar beste inzicht en vermogen uit. Tenzij uitdrukkelijk schriftelijk anders overeengekomen, gaat het om een inspanningsverplichting en niet om een garantie op een bepaald resultaat.",
      "De klant verstrekt tijdig juiste en volledige informatie, toegang, medewerking en besluiten die nodig zijn voor de uitvoering. De klant blijft verantwoordelijk voor eigen systemen, back-ups, toegangsrechten en de beoordeling en ingebruikname van adviezen en wijzigingen. Vertraging door ontbrekende informatie of medewerking kan de planning beïnvloeden.",
      "Planning en termijnen zijn streefdata, tenzij partijen schriftelijk uitdrukkelijk een fatale termijn afspreken. Impulso informeert de klant zo snel mogelijk als een afgesproken planning niet haalbaar blijkt.",
    ],
  },
  {
    title: "5. Prijzen en betaling",
    paragraphs: [
      "Prijzen zijn exclusief btw en exclusief eventuele reis-, verblijf- en andere onkosten, tenzij de offerte anders vermeldt.",
      "Impulso factureert volgens de offerte. Facturen moeten binnen 30 dagen na factuurdatum worden betaald, tenzij schriftelijk anders afgesproken.",
      "Bij niet-tijdige betaling is de klant de toepasselijke wettelijke (handels)rente en redelijke buitengerechtelijke incassokosten verschuldigd. Een bezwaar tegen een factuur moet binnen 14 dagen na factuurdatum gemotiveerd worden gemeld; dit schort de betalingsverplichting voor het niet-betwiste deel niet op.",
    ],
  },
  {
    title: "6. Annuleren of verplaatsen",
    paragraphs: [
      "6.1 Consultancyopdrachten",
      "Opdrachtgever kan een afgesproken werkdag of een gepland consultancy-onderdeel kosteloos verplaatsen of annuleren, mits dit schriftelijk (ook per e-mail) gebeurt uiterlijk 5 werkdagen vóór de geplande aanvangsdatum.",
      "Bij annulering of verplaatsing binnen 5 werkdagen maar uiterlijk 2 werkdagen vóór de geplande aanvangsdatum is Opdrachtgever 50% van het overeengekomen tarief voor de betreffende werkzaamheden verschuldigd.",
      "Bij annulering of verplaatsing binnen 2 werkdagen vóór de geplande aanvangsdatum, of bij niet verschijnen, is Opdrachtgever 100% van het overeengekomen tarief voor de betreffende werkzaamheden verschuldigd.",
      "Impulso spant zich in om vrijgekomen capaciteit elders in te zetten. Lukt dat, dan kan Impulso de verschuldigde vergoeding naar redelijkheid verlagen.",
      "6.2 Trainingen",
      "Opdrachtgever kan een training of een deelnemersplaats kosteloos annuleren, mits dit schriftelijk gebeurt uiterlijk 14 dagen vóór de startdatum van de training.",
      "Bij annulering tussen 14 en 7 dagen vóór de startdatum is Opdrachtgever 50% van de trainingsprijs verschuldigd.",
      "Bij annulering binnen 7 dagen vóór de startdatum, of bij niet verschijnen, is Opdrachtgever de volledige trainingsprijs verschuldigd.",
      "Opdrachtgever kan zonder kosten een vervangende deelnemer aanmelden, mits dit uiterlijk 2 werkdagen vóór de startdatum schriftelijk aan Impulso wordt doorgegeven.",
      "Een training kan eenmalig kosteloos worden verplaatst naar een volgende beschikbare datum, mits dit uiterlijk 14 dagen vóór de oorspronkelijke startdatum schriftelijk gebeurt. Verdere verplaatsingen gelden als annulering.",
      "6.3 Annulering of verplaatsing door Impulso",
      "Impulso mag een consultancy-onderdeel of training verplaatsen of annuleren bij onvoldoende deelnemers, ziekte van de trainer of consultant, overmacht of andere onvoorziene omstandigheden. Impulso doet dit zo vroeg mogelijk en stelt in overleg een nieuwe datum vast.",
      "Kan geen passende nieuwe datum worden afgesproken, dan restitueert Impulso reeds betaalde bedragen voor het niet uitgevoerde deel. Meer aansprakelijkheid dan restitutie bestaat niet, onverminderd het bepaalde in artikel 9.",
      "6.4 Overig",
      "Alle genoemde termijnen gelden als kalenderdagen, tenzij anders vermeld, en worden berekend vanaf de ontvangst van de schriftelijke melding.",
      "Bedragen zijn exclusief btw, tenzij anders vermeld.",
      "Reis- en verblijfkosten die al zijn gemaakt of niet meer kosteloos kunnen worden geannuleerd, worden doorberekend aan Opdrachtgever.",
    ],
  },
  {
    title: "7. Intellectueel eigendom",
    paragraphs: [
      "Alle intellectuele-eigendomsrechten op door Impulso ontwikkelde methoden, documentatie, presentaties, trainingsmaterialen, software en andere materialen blijven bij Impulso of de betreffende rechthebbende, tenzij schriftelijk anders afgesproken.",
      "Na volledige betaling krijgt de klant een niet-exclusief, niet-overdraagbaar gebruiksrecht op specifiek voor de klant opgeleverde resultaten, voor het doel waarvoor die zijn gemaakt. Trainingsmateriaal is bestemd voor intern gebruik binnen de klantorganisatie. Het mag niet zonder voorafgaande schriftelijke toestemming worden gepubliceerd, commercieel geëxploiteerd of aan derden verstrekt.",
      "De klant staat ervoor in dat materiaal en gegevens die aan Impulso worden verstrekt daarvoor gebruikt mogen worden en vrijwaren Impulso niet voor rechten van derden; aansprakelijkheid blijft geregeld in artikel 9.",
    ],
  },
  {
    title: "8. Vertrouwelijkheid en persoonsgegevens",
    paragraphs: [
      "Partijen behandelen vertrouwelijke informatie die zij in het kader van de opdracht ontvangen zorgvuldig en gebruiken deze alleen voor de uitvoering van de overeenkomst. Deze verplichting geldt niet voor informatie die al openbaar was, rechtmatig van een derde is verkregen of op grond van de wet moet worden verstrekt.",
      "Impulso verwerkt persoonsgegevens volgens de privacyverklaring op deze website. Als Impulso bij een opdracht persoonsgegevens namens de klant verwerkt, maken partijen waar nodig afzonderlijke afspraken over die verwerking.",
    ],
  },
  {
    title: "9. Aansprakelijkheid",
    paragraphs: [
      "Impulso is aansprakelijk voor directe schade die het rechtstreekse gevolg is van een toerekenbare tekortkoming, voor zover wettelijk toegestaan. Impulso is niet aansprakelijk voor indirecte schade, gevolgschade, gemiste besparingen of winstderving, behalve wanneer de wet uitsluiting niet toestaat.",
      "Voor zakelijke klanten is de totale aansprakelijkheid per opdracht beperkt tot het bedrag dat de aansprakelijkheidsverzekering in het betreffende geval uitkeert, vermeerderd met het toepasselijke eigen risico. Als geen uitkering plaatsvindt, is de aansprakelijkheid beperkt tot het bedrag dat voor de opdracht in de 12 maanden vóór de schadeveroorzakende gebeurtenis aan Impulso is betaald, met een maximum van [BEDRAG INVULLEN]. Deze beperkingen gelden niet bij opzet of bewuste roekeloosheid van Impulso en niet voor zover beperking wettelijk niet is toegestaan.",
      "Niets in deze voorwaarden sluit aansprakelijkheid uit voor opzet of bewuste roekeloosheid, of andere aansprakelijkheid die wettelijk niet mag worden beperkt.",
      "De klant meldt schade zo spoedig mogelijk nadat deze is ontdekt en neemt redelijke maatregelen om verdere schade te voorkomen. Wettelijke verjarings- en vervaltermijnen blijven gelden.",
    ],
  },
  {
    title: "10. Overmacht",
    paragraphs: [
      "Geen van beide partijen hoeft een verplichting na te komen als dit onmogelijk is door omstandigheden buiten haar redelijke controle, zoals storingen bij externe leveranciers, overheidsmaatregelen, ernstige netwerkstoringen of ziekte. De getroffen partij informeert de andere partij zo snel mogelijk. Als de overmacht langer dan 60 dagen duurt, mag iedere partij het nog niet uitgevoerde deel van de overeenkomst schriftelijk beëindigen. Reeds betaalde bedragen voor niet-uitgevoerde diensten worden dan terugbetaald.",
    ],
  },
  {
    title: "11. Klachten",
    paragraphs: [
      "Een klacht over de uitvoering van een dienst meldt de klant zo snel mogelijk en met voldoende toelichting via hello@withimpulso.com. Impulso bevestigt de ontvangst en reageert binnen een redelijke termijn. Partijen proberen de klacht in onderling overleg op te lossen. Dit doet geen afbreuk aan wettelijke rechten of termijnen.",
    ],
  },
  {
    title: "12. Recht en geschillen",
    paragraphs: [
      "Op de overeenkomst is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter volgens de wettelijke regels.",
    ],
  },
];

const translations: Record<Exclude<Language, "nl">, TermsTranslation> = {
  en: {
    eyebrow: "Legal",
    title: "Terms and Conditions",
    intro: "These terms apply exclusively to business customers of Impulso.",
    languageNotice: "This is an informational translation. In the event of any difference or inconsistency, the Dutch version prevails.",
    updated: "Last updated: 24 October 2026",
    sections: [
      {
        title: "1. Impulso details",
        paragraphs: [
          "Impulso, operating under the trade names Impulso, Impulso Workplace, Impulso Security, Impulso Identity, Impulso Training and Impulso Advisory, with its registered office at Emmalaan 2, 2421 CP Nieuwkoop, the Netherlands, registered with the Dutch Chamber of Commerce under number 83253475 and VAT identification number NL003795090B97.",
          "Email: hello@withimpulso.com.",
        ],
      },
      {
        title: "2. Definitions and applicability",
        paragraphs: [
          "In these terms, 'Client' and 'Principal' mean the business customer entering into an agreement with Impulso. 'Services' include, among other things, IT consultancy, Microsoft 365, identity and security services, workshops and training courses.",
          "These terms apply exclusively to offers, assignments and agreements with customers acting in the course of their business or profession. Deviations apply only if agreed by the parties in writing. If there is a conflict, the written offer or agreement takes precedence.",
        ],
      },
      {
        title: "3. Offers and agreements",
        paragraphs: [
          "An offer specifies the work, any deliverables, schedule, price and acceptance period. An offer is non-binding until Impulso accepts it in writing or the parties confirm the assignment in writing.",
          "The agreement is formed when the Client accepts the offer in writing, for example by email, or when Impulso begins performing the Services with the Client's consent. Changes or additions to the assignment must be recorded in writing.",
        ],
      },
      {
        title: "4. Performance of the Services",
        paragraphs: [
          "Impulso will perform the assignment with due care and to the best of its knowledge and ability. Unless expressly agreed otherwise in writing, Impulso has an obligation of means and does not guarantee a particular result.",
          "The Client will provide, in a timely manner, accurate and complete information, access, cooperation and decisions required to perform the assignment. The Client remains responsible for its own systems, backups, access rights, and the assessment and implementation of advice and changes. Delays caused by missing information or cooperation may affect the schedule.",
          "Schedules and time limits are target dates unless the parties expressly agree in writing that a deadline is strict. Impulso will inform the Client as soon as possible if an agreed schedule cannot be met.",
        ],
      },
      {
        title: "5. Prices and payment",
        paragraphs: [
          "Prices exclude VAT and any travel, accommodation and other expenses, unless the offer states otherwise.",
          "Impulso invoices in accordance with the offer. Invoices must be paid within 30 days of the invoice date, unless agreed otherwise in writing.",
          "In the event of late payment, the Client owes the applicable statutory (commercial) interest and reasonable extrajudicial collection costs. Any invoice dispute must be reported with reasons within 14 days of the invoice date; this does not suspend payment of the undisputed amount.",
        ],
      },
      {
        title: "6. Cancellation or rescheduling",
        paragraphs: [
          "6.1 Consultancy assignments",
          "The Client may reschedule or cancel an agreed working day or planned consultancy component free of charge, provided written notice (including by email) is received no later than 5 working days before the planned start date.",
          "If the Client cancels or reschedules within 5 working days, but no later than 2 working days before the planned start date, the Client owes 50% of the agreed fee for the relevant work.",
          "If the Client cancels or reschedules within 2 working days before the planned start date, or fails to attend, the Client owes 100% of the agreed fee for the relevant work.",
          "Impulso will make reasonable efforts to deploy the released capacity elsewhere. If it succeeds, Impulso may reasonably reduce the fee due.",
          "6.2 Training courses",
          "The Client may cancel a training course or a participant's place free of charge, provided written notice is received no later than 14 days before the training start date.",
          "For cancellations between 14 and 7 days before the start date, the Client owes 50% of the training price.",
          "For cancellations within 7 days before the start date, or in the event of non-attendance, the Client owes the full training price.",
          "The Client may nominate a replacement participant free of charge, provided Impulso receives written notice no later than 2 working days before the start date.",
          "A training course may be rescheduled once, free of charge, to the next available date, provided written notice is received no later than 14 days before the original start date. Any further rescheduling will be treated as a cancellation.",
          "6.3 Cancellation or rescheduling by Impulso",
          "Impulso may reschedule or cancel a consultancy component or training course due to insufficient participants, illness of the trainer or consultant, force majeure or other unforeseen circumstances. Impulso will do so as early as possible and agree a new date with the Client.",
          "If no suitable new date can be agreed, Impulso will refund amounts already paid for the part of the Services not performed. Impulso has no liability beyond the refund, without prejudice to Article 9.",
          "6.4 Other provisions",
          "All stated periods are calendar days unless otherwise specified and are calculated from receipt of the written notice.",
          "Amounts exclude VAT unless stated otherwise.",
          "Travel and accommodation expenses already incurred or no longer cancellable free of charge will be charged to the Client.",
        ],
      },
      {
        title: "7. Intellectual property",
        paragraphs: [
          "All intellectual property rights in methods, documentation, presentations, training materials, software and other materials developed by Impulso remain with Impulso or the relevant rights holder, unless agreed otherwise in writing.",
          "After full payment, the Client receives a non-exclusive, non-transferable right to use deliverables created specifically for the Client for the purpose for which they were created. Training materials are for internal use within the Client's organisation. They may not be published, commercially exploited or provided to third parties without prior written permission.",
          "The Client warrants that it is entitled to provide materials and data to Impulso for use as agreed and indemnifies Impulso against third-party rights claims; liability remains subject to Article 9.",
        ],
      },
      {
        title: "8. Confidentiality and personal data",
        paragraphs: [
          "The parties will handle confidential information received in connection with the assignment with care and use it only to perform the agreement. This obligation does not apply to information that was already public, was lawfully obtained from a third party or must be disclosed by law.",
          "Impulso processes personal data in accordance with the privacy statement on this website. If Impulso processes personal data on behalf of the Client as part of an assignment, the parties will make separate arrangements for that processing where required.",
        ],
      },
      {
        title: "9. Liability",
        paragraphs: [
          "Impulso is liable for direct loss that is the immediate result of an attributable failure to perform, to the extent permitted by law. Impulso is not liable for indirect or consequential loss, lost savings or loss of profits, except where liability cannot be excluded by law.",
          "For each assignment, Impulso's total liability is limited to the amount paid out under its liability insurance for the relevant event, plus the applicable excess. If the insurer makes no payment, liability is limited to the amount paid to Impulso for the assignment in the 12 months before the event causing the loss, up to a maximum of [INSERT AMOUNT]. These limits do not apply in cases of intent or conscious recklessness by Impulso, or where liability cannot be limited by law.",
          "Nothing in these terms excludes liability for intent or conscious recklessness, or any other liability that cannot legally be limited.",
          "The Client must report loss as soon as reasonably possible after discovering it and take reasonable steps to prevent further loss. Statutory limitation and expiry periods remain applicable.",
        ],
      },
      {
        title: "10. Force majeure",
        paragraphs: [
          "Neither party is required to perform an obligation if performance is prevented by circumstances beyond its reasonable control, such as outages at external suppliers, government measures, serious network disruptions or illness. The affected party will inform the other party as soon as possible. If the force majeure event lasts longer than 60 days, either party may terminate the unperformed part of the agreement in writing. Amounts already paid for Services not performed will then be refunded.",
        ],
      },
      {
        title: "11. Complaints",
        paragraphs: [
          "The Client must report a complaint about the performance of a Service as soon as possible, with sufficient details, to hello@withimpulso.com. Impulso will acknowledge receipt and respond within a reasonable period. The parties will try to resolve the complaint through mutual consultation. This does not affect statutory rights or time limits.",
        ],
      },
      {
        title: "12. Governing law and disputes",
        paragraphs: [
          "The agreement is governed by Dutch law. Disputes will be submitted to the competent court in accordance with the applicable legal rules.",
        ],
      },
    ],
  },
  es: {
    eyebrow: "Legal",
    title: "Términos y condiciones",
    intro: "Estos términos se aplican exclusivamente a los clientes empresariales de Impulso.",
    languageNotice: "Esta es una traducción informativa. En caso de diferencia o discrepancia, prevalece la versión neerlandesa.",
    updated: "Última actualización: 24 de octubre de 2026",
    sections: [
      {
        title: "1. Datos de Impulso",
        paragraphs: [
          "Impulso, que opera bajo los nombres comerciales Impulso, Impulso Workplace, Impulso Security, Impulso Identity, Impulso Training e Impulso Advisory, con domicilio social en Emmalaan 2, 2421 CP Nieuwkoop, Países Bajos, inscrita en la Cámara de Comercio neerlandesa con el número 83253475 y con número de identificación a efectos del IVA NL003795090B97.",
          "Correo electrónico: hello@withimpulso.com.",
        ],
      },
      {
        title: "2. Definiciones y ámbito de aplicación",
        paragraphs: [
          "En estos términos, «Cliente» y «Contratante» se refieren al cliente empresarial que celebra un acuerdo con Impulso. «Servicios» incluye, entre otros, consultoría informática, servicios de Microsoft 365, identidad y seguridad, talleres y formación.",
          "Estos términos se aplican exclusivamente a ofertas, encargos y acuerdos con clientes que actúen en el ejercicio de su actividad empresarial o profesional. Cualquier excepción solo será válida si las partes la acuerdan por escrito. En caso de conflicto, prevalecerá la oferta o el acuerdo escrito.",
        ],
      },
      {
        title: "3. Ofertas y acuerdos",
        paragraphs: [
          "La oferta especifica los trabajos, los posibles entregables, el calendario, el precio y el plazo de aceptación. La oferta no es vinculante hasta que Impulso la acepte por escrito o las partes confirmen el encargo por escrito.",
          "El acuerdo se formaliza cuando el Cliente acepta la oferta por escrito, por ejemplo, por correo electrónico, o cuando Impulso comienza a prestar los Servicios con el consentimiento del Cliente. Las modificaciones o ampliaciones del encargo deben constar por escrito.",
        ],
      },
      {
        title: "4. Prestación de los Servicios",
        paragraphs: [
          "Impulso ejecutará el encargo con la debida diligencia y según su mejor criterio y capacidad. Salvo que se acuerde expresamente lo contrario por escrito, Impulso asume una obligación de medios y no garantiza un resultado concreto.",
          "El Cliente facilitará puntualmente información correcta y completa, acceso, colaboración y decisiones necesarias para ejecutar el encargo. El Cliente sigue siendo responsable de sus propios sistemas, copias de seguridad, derechos de acceso y de evaluar e implementar las recomendaciones y los cambios. La falta de información o colaboración puede afectar al calendario.",
          "Los calendarios y plazos son fechas previstas, salvo que las partes acuerden expresamente por escrito que un plazo es esencial. Impulso informará al Cliente lo antes posible si no puede cumplir el calendario acordado.",
        ],
      },
      {
        title: "5. Precios y pago",
        paragraphs: [
          "Los precios no incluyen IVA ni gastos de viaje, alojamiento u otros gastos, salvo que la oferta indique lo contrario.",
          "Impulso emitirá las facturas conforme a la oferta. Las facturas deberán pagarse en un plazo de 30 días desde la fecha de emisión, salvo que se acuerde otra cosa por escrito.",
          "En caso de retraso en el pago, el Cliente deberá abonar el interés legal aplicable (incluido, cuando corresponda, el interés comercial) y los costes extrajudiciales razonables de cobro. El Cliente deberá comunicar cualquier discrepancia con una factura, debidamente motivada, en un plazo de 14 días desde su fecha; esto no suspende el pago de la parte no impugnada.",
        ],
      },
      {
        title: "6. Cancelación o cambio de fecha",
        paragraphs: [
          "6.1 Encargos de consultoría",
          "El Cliente puede cambiar la fecha o cancelar sin coste una jornada acordada o una parte planificada de la consultoría, siempre que lo comunique por escrito (también por correo electrónico) como máximo 5 días laborables antes de la fecha de inicio prevista.",
          "Si el Cliente cancela o cambia la fecha dentro de los 5 días laborables, pero como máximo 2 días laborables antes de la fecha de inicio prevista, deberá abonar el 50 % de la tarifa acordada por los trabajos correspondientes.",
          "Si el Cliente cancela o cambia la fecha dentro de los 2 días laborables anteriores a la fecha de inicio prevista, o no se presenta, deberá abonar el 100 % de la tarifa acordada por los trabajos correspondientes.",
          "Impulso se esforzará por asignar la capacidad liberada a otros trabajos. Si lo consigue, podrá reducir razonablemente el importe adeudado.",
          "6.2 Formación",
          "El Cliente puede cancelar sin coste una formación o la plaza de un participante, siempre que lo comunique por escrito como máximo 14 días antes de la fecha de inicio de la formación.",
          "Si la cancelación se produce entre 14 y 7 días antes de la fecha de inicio, el Cliente deberá abonar el 50 % del precio de la formación.",
          "Si la cancelación se produce dentro de los 7 días anteriores a la fecha de inicio, o si el participante no se presenta, el Cliente deberá abonar el precio íntegro de la formación.",
          "El Cliente puede designar gratuitamente a un participante sustituto, siempre que lo comunique por escrito a Impulso como máximo 2 días laborables antes de la fecha de inicio.",
          "La fecha de una formación puede cambiarse una vez sin coste a la siguiente fecha disponible, siempre que se comunique por escrito como máximo 14 días antes de la fecha de inicio original. Los cambios de fecha posteriores se considerarán cancelaciones.",
          "6.3 Cancelación o cambio de fecha por parte de Impulso",
          "Impulso podrá cambiar la fecha o cancelar una parte de la consultoría o una formación si no hay suficientes participantes, por enfermedad del formador o consultor, fuerza mayor u otras circunstancias imprevistas. Impulso lo hará lo antes posible y acordará una nueva fecha con el Cliente.",
          "Si no se puede acordar una nueva fecha adecuada, Impulso reembolsará los importes ya pagados por la parte de los Servicios no prestada. La responsabilidad de Impulso no excederá dicho reembolso, sin perjuicio de lo dispuesto en el artículo 9.",
          "6.4 Otras disposiciones",
          "Todos los plazos indicados se expresan en días naturales, salvo que se especifique lo contrario, y se calculan desde la recepción de la notificación escrita.",
          "Los importes no incluyen IVA, salvo que se indique lo contrario.",
          "Los gastos de viaje y alojamiento ya incurridos o que ya no puedan cancelarse gratuitamente se repercutirán al Cliente.",
        ],
      },
      {
        title: "7. Propiedad intelectual",
        paragraphs: [
          "Todos los derechos de propiedad intelectual sobre métodos, documentación, presentaciones, materiales de formación, software y otros materiales desarrollados por Impulso seguirán perteneciendo a Impulso o al titular correspondiente, salvo que se acuerde otra cosa por escrito.",
          "Una vez abonado el importe íntegro, el Cliente obtiene un derecho de uso no exclusivo e intransferible sobre los resultados creados específicamente para él, para la finalidad para la que se crearon. Los materiales de formación son para uso interno de la organización del Cliente. No podrán publicarse, explotarse comercialmente ni facilitarse a terceros sin autorización previa por escrito.",
          "El Cliente garantiza que tiene derecho a facilitar a Impulso los materiales y datos para el uso acordado e indemnizará a Impulso frente a reclamaciones de terceros por derechos; la responsabilidad seguirá rigiéndose por el artículo 9.",
        ],
      },
      {
        title: "8. Confidencialidad y datos personales",
        paragraphs: [
          "Las partes tratarán con cuidado la información confidencial que reciban en relación con el encargo y solo la utilizarán para ejecutar el acuerdo. Esta obligación no se aplica a información que ya fuera pública, que se haya obtenido lícitamente de un tercero o que deba comunicarse por ley.",
          "Impulso trata los datos personales de acuerdo con la declaración de privacidad de este sitio web. Si Impulso trata datos personales por cuenta del Cliente en el marco de un encargo, las partes formalizarán acuerdos específicos cuando sea necesario.",
        ],
      },
      {
        title: "9. Responsabilidad",
        paragraphs: [
          "Impulso responderá por los daños directos que sean consecuencia inmediata de un incumplimiento imputable, en la medida permitida por la ley. Impulso no responderá por daños indirectos o consecuenciales, ahorros no obtenidos ni lucro cesante, salvo cuando la ley no permita excluir dicha responsabilidad.",
          "Por cada encargo, la responsabilidad total de Impulso se limita al importe abonado por el seguro de responsabilidad civil por el hecho correspondiente, más la franquicia aplicable. Si la aseguradora no efectúa ningún pago, la responsabilidad se limita al importe pagado a Impulso por el encargo durante los 12 meses anteriores al hecho causante del daño, con un máximo de [INDICAR IMPORTE]. Estos límites no se aplican en caso de dolo o temeridad consciente de Impulso, ni cuando la ley no permita limitar la responsabilidad.",
          "Nada de lo dispuesto en estos términos excluye la responsabilidad por dolo o temeridad consciente, ni cualquier otra responsabilidad que legalmente no pueda limitarse.",
          "El Cliente comunicará los daños tan pronto como sea razonablemente posible después de detectarlos y tomará medidas razonables para evitar que aumenten. Se mantienen los plazos legales de prescripción y caducidad.",
        ],
      },
      {
        title: "10. Fuerza mayor",
        paragraphs: [
          "Ninguna de las partes estará obligada a cumplir una obligación cuando su cumplimiento resulte imposible por circunstancias ajenas a su control razonable, como interrupciones de proveedores externos, medidas gubernamentales, fallos graves de red o enfermedad. La parte afectada informará a la otra lo antes posible. Si la fuerza mayor dura más de 60 días, cualquiera de las partes podrá resolver por escrito la parte del acuerdo aún no ejecutada. Se reembolsarán entonces los importes pagados por Servicios no prestados.",
        ],
      },
      {
        title: "11. Reclamaciones",
        paragraphs: [
          "El Cliente comunicará cualquier reclamación sobre la prestación de un Servicio lo antes posible y con suficiente detalle a hello@withimpulso.com. Impulso confirmará su recepción y responderá en un plazo razonable. Las partes intentarán resolver la reclamación de mutuo acuerdo. Esto no afecta a los derechos ni plazos legales.",
        ],
      },
      {
        title: "12. Ley aplicable y litigios",
        paragraphs: [
          "El acuerdo se rige por el derecho neerlandés. Los litigios se someterán al tribunal competente de conformidad con las normas legales aplicables.",
        ],
      },
    ],
  },
  ca: {
    eyebrow: "Legal",
    title: "Termes i condicions",
    intro: "Aquests termes s'apliquen exclusivament als clients empresarials d'Impulso.",
    languageNotice: "Aquesta és una traducció informativa. En cas de diferència o discrepància, preval la versió neerlandesa.",
    updated: "Darrera actualització: 24 d'octubre de 2026",
    sections: [
      {
        title: "1. Dades d'Impulso",
        paragraphs: [
          "Impulso, que opera amb els noms comercials Impulso, Impulso Workplace, Impulso Security, Impulso Identity, Impulso Training i Impulso Advisory, amb domicili social a Emmalaan 2, 2421 CP Nieuwkoop, Països Baixos, inscrita a la Cambra de Comerç neerlandesa amb el número 83253475 i amb número d'identificació de l'IVA NL003795090B97.",
          "Correu electrònic: hello@withimpulso.com.",
        ],
      },
      {
        title: "2. Definicions i àmbit d'aplicació",
        paragraphs: [
          "En aquests termes, «Client» i «Contractant» fan referència al client empresarial que formalitza un acord amb Impulso. «Serveis» inclou, entre d'altres, consultoria informàtica, serveis de Microsoft 365, identitat i seguretat, tallers i formació.",
          "Aquests termes s'apliquen exclusivament a ofertes, encàrrecs i acords amb clients que actuen en l'exercici de la seva activitat empresarial o professional. Qualsevol excepció només és vàlida si les parts l'acorden per escrit. En cas de conflicte, preval l'oferta o l'acord escrit.",
        ],
      },
      {
        title: "3. Ofertes i acords",
        paragraphs: [
          "L'oferta especifica els treballs, els possibles lliurables, el calendari, el preu i el termini d'acceptació. L'oferta no és vinculant fins que Impulso l'accepta per escrit o les parts confirmen l'encàrrec per escrit.",
          "L'acord es formalitza quan el Client accepta l'oferta per escrit, per exemple, per correu electrònic, o quan Impulso comença a prestar els Serveis amb el consentiment del Client. Les modificacions o ampliacions de l'encàrrec s'han de formalitzar per escrit.",
        ],
      },
      {
        title: "4. Prestació dels Serveis",
        paragraphs: [
          "Impulso executarà l'encàrrec amb la diligència deguda i segons el seu millor criteri i capacitat. Llevat que s'acordi expressament el contrari per escrit, Impulso assumeix una obligació de mitjans i no garanteix un resultat concret.",
          "El Client facilitarà puntualment informació correcta i completa, accés, col·laboració i decisions necessàries per executar l'encàrrec. El Client continua sent responsable dels seus propis sistemes, còpies de seguretat, drets d'accés i de valorar i implementar els consells i els canvis. La manca d'informació o de col·laboració pot afectar el calendari.",
          "Els calendaris i terminis són dates previstes, llevat que les parts acordin expressament per escrit que un termini és essencial. Impulso informarà el Client tan aviat com sigui possible si no pot complir el calendari acordat.",
        ],
      },
      {
        title: "5. Preus i pagament",
        paragraphs: [
          "Els preus no inclouen IVA ni despeses de viatge, allotjament o altres despeses, llevat que l'oferta indiqui el contrari.",
          "Impulso facturarà d'acord amb l'oferta. Les factures s'han de pagar en un termini de 30 dies des de la data de la factura, llevat que s'acordi una altra cosa per escrit.",
          "En cas de retard en el pagament, el Client haurà d'abonar l'interès legal aplicable (inclòs, quan correspongui, l'interès comercial) i les despeses extrajudicials raonables de cobrament. Qualsevol discrepància amb una factura s'ha de comunicar amb una justificació dins dels 14 dies següents a la data de la factura; això no suspèn el pagament de la part no impugnada.",
        ],
      },
      {
        title: "6. Cancel·lació o canvi de data",
        paragraphs: [
          "6.1 Encàrrecs de consultoria",
          "El Client pot canviar la data o cancel·lar sense cost una jornada acordada o una part planificada de la consultoria, sempre que ho comuniqui per escrit (també per correu electrònic) com a màxim 5 dies laborables abans de la data d'inici prevista.",
          "Si el Client cancel·la o canvia la data dins dels 5 dies laborables, però com a màxim 2 dies laborables abans de la data d'inici prevista, haurà d'abonar el 50 % de la tarifa acordada pels treballs corresponents.",
          "Si el Client cancel·la o canvia la data dins dels 2 dies laborables anteriors a la data d'inici prevista, o no s'hi presenta, haurà d'abonar el 100 % de la tarifa acordada pels treballs corresponents.",
          "Impulso s'esforçarà per assignar la capacitat alliberada a altres feines. Si ho aconsegueix, podrà reduir raonablement l'import degut.",
          "6.2 Formacions",
          "El Client pot cancel·lar sense cost una formació o la plaça d'un participant, sempre que ho comuniqui per escrit com a màxim 14 dies abans de la data d'inici de la formació.",
          "Si la cancel·lació es produeix entre 14 i 7 dies abans de la data d'inici, el Client haurà d'abonar el 50 % del preu de la formació.",
          "Si la cancel·lació es produeix dins dels 7 dies anteriors a la data d'inici, o si el participant no s'hi presenta, el Client haurà d'abonar el preu íntegre de la formació.",
          "El Client pot designar gratuïtament un participant substitut, sempre que ho comuniqui per escrit a Impulso com a màxim 2 dies laborables abans de la data d'inici.",
          "La data d'una formació es pot canviar una vegada sense cost a la següent data disponible, sempre que es comuniqui per escrit com a màxim 14 dies abans de la data d'inici original. Els canvis de data posteriors es consideraran cancel·lacions.",
          "6.3 Cancel·lació o canvi de data per part d'Impulso",
          "Impulso pot canviar la data o cancel·lar una part de la consultoria o una formació si no hi ha prou participants, per malaltia del formador o consultor, força major o altres circumstàncies imprevistes. Impulso ho farà tan aviat com sigui possible i acordarà una nova data amb el Client.",
          "Si no es pot acordar una nova data adequada, Impulso retornarà els imports ja pagats per la part dels Serveis no prestada. La responsabilitat d'Impulso no excedirà aquest retorn, sens perjudici del que estableix l'article 9.",
          "6.4 Altres disposicions",
          "Tots els terminis indicats són dies naturals, llevat que s'especifiqui el contrari, i es calculen des de la recepció de la notificació escrita.",
          "Els imports no inclouen IVA, llevat que s'indiqui el contrari.",
          "Les despeses de viatge i allotjament ja efectuades o que ja no es puguin cancel·lar gratuïtament es repercutiran al Client.",
        ],
      },
      {
        title: "7. Propietat intel·lectual",
        paragraphs: [
          "Tots els drets de propietat intel·lectual sobre mètodes, documentació, presentacions, materials de formació, programari i altres materials desenvolupats per Impulso continuen pertanyent a Impulso o al titular corresponent, llevat que s'acordi una altra cosa per escrit.",
          "Un cop abonat l'import íntegre, el Client obté un dret d'ús no exclusiu i intransferible sobre els resultats creats específicament per a ell, per a la finalitat per a la qual es van crear. Els materials de formació són per a ús intern dins de l'organització del Client. No es poden publicar, explotar comercialment ni facilitar a tercers sense autorització prèvia per escrit.",
          "El Client garanteix que té dret a facilitar a Impulso els materials i les dades per a l'ús acordat i indemnitzarà Impulso davant de reclamacions de tercers per drets; la responsabilitat continua regint-se per l'article 9.",
        ],
      },
      {
        title: "8. Confidencialitat i dades personals",
        paragraphs: [
          "Les parts tractaran amb cura la informació confidencial que rebin en relació amb l'encàrrec i només la faran servir per executar l'acord. Aquesta obligació no s'aplica a informació que ja fos pública, que s'hagi obtingut lícitament d'un tercer o que s'hagi de comunicar per llei.",
          "Impulso tracta les dades personals d'acord amb la declaració de privacitat d'aquest lloc web. Si Impulso tracta dades personals per compte del Client en el marc d'un encàrrec, les parts formalitzaran acords específics quan calgui.",
        ],
      },
      {
        title: "9. Responsabilitat",
        paragraphs: [
          "Impulso respondrà pels danys directes que siguin conseqüència immediata d'un incompliment imputable, en la mesura permesa per la llei. Impulso no respondrà per danys indirectes o conseqüencials, estalvis no obtinguts ni lucre cessant, llevat que la llei no permeti excloure aquesta responsabilitat.",
          "Per cada encàrrec, la responsabilitat total d'Impulso es limita a l'import abonat per l'assegurança de responsabilitat civil pel fet corresponent, més la franquícia aplicable. Si l'asseguradora no efectua cap pagament, la responsabilitat es limita a l'import pagat a Impulso per l'encàrrec durant els 12 mesos anteriors al fet causant del dany, amb un màxim de [INDIQUEU L'IMPORT]. Aquests límits no s'apliquen en cas de dol o temeritat conscient d'Impulso, ni quan la llei no permeti limitar la responsabilitat.",
          "Res del que disposen aquests termes exclou la responsabilitat per dol o temeritat conscient, ni cap altra responsabilitat que legalment no es pugui limitar.",
          "El Client comunicarà els danys tan aviat com sigui raonablement possible després de detectar-los i prendrà mesures raonables per evitar que augmentin. Es mantenen els terminis legals de prescripció i caducitat.",
        ],
      },
      {
        title: "10. Força major",
        paragraphs: [
          "Cap de les parts està obligada a complir una obligació si el compliment és impossible per circumstàncies fora del seu control raonable, com ara interrupcions de proveïdors externs, mesures governamentals, fallades greus de xarxa o malaltia. La part afectada n'informarà l'altra tan aviat com sigui possible. Si la força major dura més de 60 dies, qualsevol de les parts pot resoldre per escrit la part de l'acord encara no executada. Es retornaran llavors els imports pagats pels Serveis no prestats.",
        ],
      },
      {
        title: "11. Reclamacions",
        paragraphs: [
          "El Client comunicarà qualsevol reclamació sobre la prestació d'un Servei tan aviat com sigui possible i amb prou detall a hello@withimpulso.com. Impulso n'acusarà recepció i respondrà en un termini raonable. Les parts intentaran resoldre la reclamació de mutu acord. Això no afecta els drets ni els terminis legals.",
        ],
      },
      {
        title: "12. Llei aplicable i disputes",
        paragraphs: [
          "L'acord es regeix pel dret neerlandès. Les disputes se sotmetran al tribunal competent d'acord amb les normes legals aplicables.",
        ],
      },
    ],
  },
};

const Terms = () => {
  const { language } = useLanguage();
  const content = language === "nl" ? null : translations[language];
  const sections = content?.sections ?? dutchSections;

  return (
    <div className="min-h-screen">
    <Navbar />
    <header className="bg-primary pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">{content?.eyebrow ?? "Juridisch"}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-6">{content?.title ?? "Algemene voorwaarden"}</h1>
          <p className="text-primary-foreground/60 text-lg leading-relaxed">
            {content?.intro ?? "Deze voorwaarden gelden uitsluitend voor zakelijke klanten van Impulso."}
          </p>
        </div>
      </div>
    </header>
    <main className="py-14 md:py-20 bg-background">
      <div className="container max-w-4xl">
        {content && <p className="mb-4 border-l-4 border-accent bg-surface p-4 text-sm text-foreground leading-6">{content.languageNotice}</p>}
        <p className="text-sm text-muted-foreground mb-10">{content?.updated ?? "Laatst bijgewerkt: 24 oktober 2026"}</p>
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-2xl text-foreground mb-3">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground leading-7 mb-3">{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </main>
    <Footer />
    </div>
  );
};

export default Terms;