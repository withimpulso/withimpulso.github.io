import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage, type Language } from "@/lib/i18n";

type PrivacySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type PrivacyCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: PrivacySection[];
  linksTitle: string;
  googlePrivacy: string;
  analyticsOptOut: string;
};

const copy: Record<Language, PrivacyCopy> = {
  en: {
    eyebrow: "Legal",
    title: "Privacy policy",
    intro: "This policy explains how Impulso handles personal data when you visit our website or contact us.",
    updated: "Last updated: 23 October 2026",
    sections: [
      {
        title: "Who we are",
        paragraphs: [
          "Impulso is responsible for the personal data described in this policy. You can reach us at hello@withimpulso.com.",
        ],
      },
      {
        title: "Personal data we collect",
        paragraphs: ["Depending on how you use the website, we may process the following information:"],
        bullets: [
          "Contact form details: name, email address, company (if provided), subject and message.",
          "Website and device information collected through Google Analytics only if you consent, such as pages visited, browser and device details, approximate location and interactions.",
          "Your language preference and consent choice, stored in your browser's local storage.",
          "Technical information processed by our hosting and service providers to deliver, secure and troubleshoot the website.",
        ],
      },
      {
        title: "Why we use your data",
        paragraphs: ["We use personal data to respond to enquiries, communicate about our services, operate and improve the website, understand site usage, and meet applicable legal obligations. We rely on taking steps at your request before a possible agreement, our legitimate interests in operating and improving our services, and legal obligations where applicable. Where consent is required, we will ask for it before processing."],
      },
      {
        title: "Who receives your data",
        paragraphs: ["We do not sell personal data. Contact form submissions are sent to FormSubmit, which processes the information to deliver your message to us and may send you an automated reply. If our Teams notification integration is configured, submission details may also be sent to Microsoft Teams through our configured webhook. If you consent to analytics, Google Analytics processes website usage information for us. Hosting and technical service providers may process limited data to provide their services. These providers may process data in other countries; where required, appropriate safeguards are used."],
      },
      {
        title: "How long we keep data",
        paragraphs: ["We keep enquiry information only as long as needed to respond, maintain our relationship and handle related follow-up, unless a longer period is required by law. Analytics information is retained according to the applicable Google Analytics settings. Browser storage remains until you clear it or your browser removes it. Our service providers may apply their own retention periods."],
      },
      {
        title: "Cookies and similar technologies",
        paragraphs: ["Google Analytics is only loaded after you consent to analytics and may then use cookies or similar technologies to measure website usage. You can reject or withdraw consent at any time using Cookie settings in the footer. Your language preference and consent choice are saved in local browser storage, not a cookie. You can also manage or delete local storage through your browser settings."],
      },
      {
        title: "Your privacy rights",
        paragraphs: ["Depending on applicable law, you may have the right to access, correct or erase your personal data, restrict or object to processing, and request data portability. Where processing is based on consent, you may withdraw it at any time; this does not affect processing carried out before withdrawal. To exercise a right, contact hello@withimpulso.com. You may also lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) or your local supervisory authority."],
      },
      {
        title: "Security",
        paragraphs: ["We take appropriate technical and organizational measures to protect personal data. No method of transmission or storage is completely secure, but we work to reduce the risk of unauthorized access, loss or misuse."],
      },
      {
        title: "Changes and contact",
        paragraphs: ["We may update this policy when our practices or legal requirements change. The latest version will be published on this page. For questions or privacy requests, email hello@withimpulso.com."],
      },
    ],
    linksTitle: "More information",
    googlePrivacy: "Google Privacy Policy",
    analyticsOptOut: "Google Analytics opt-out add-on",
  },
  nl: {
    eyebrow: "Juridisch",
    title: "Privacyverklaring",
    intro: "In deze verklaring lees je hoe Impulso persoonsgegevens verwerkt wanneer je onze website bezoekt of contact met ons opneemt.",
    updated: "Laatst bijgewerkt: 23 oktober 2026",
    sections: [
      {
        title: "Wie wij zijn",
        paragraphs: ["Impulso is verantwoordelijk voor de persoonsgegevens die in deze verklaring worden beschreven. Je kunt ons bereiken via hello@withimpulso.com."],
      },
      {
        title: "Welke persoonsgegevens wij verzamelen",
        paragraphs: ["Afhankelijk van je gebruik van de website kunnen wij de volgende gegevens verwerken:"],
        bullets: [
          "Contactformuliergegevens: naam, e-mailadres, bedrijf (indien ingevuld), onderwerp en bericht.",
          "Website- en apparaatgegevens via Google Analytics, alleen als je toestemming geeft, zoals bezochte pagina's, browser- en apparaatgegevens, globale locatie en interacties.",
          "Je taalvoorkeur en toestemmingskeuze, opgeslagen in de lokale browseropslag.",
          "Technische gegevens die onze hosting- en dienstverleners verwerken om de website beschikbaar, veilig en goed werkend te houden.",
        ],
      },
      {
        title: "Waarom wij je gegevens gebruiken",
        paragraphs: ["Wij gebruiken persoonsgegevens om vragen te beantwoorden, over onze diensten te communiceren, de website te beheren en verbeteren, het websitegebruik te begrijpen en aan wettelijke verplichtingen te voldoen. De grondslag is het nemen van stappen op jouw verzoek vóór een eventuele overeenkomst, ons gerechtvaardigd belang bij het beheren en verbeteren van onze diensten en, waar van toepassing, een wettelijke verplichting. Wanneer toestemming vereist is, vragen wij die voordat we de gegevens verwerken."],
      },
      {
        title: "Wie je gegevens ontvangt",
        paragraphs: ["Wij verkopen geen persoonsgegevens. Contactformulierinzendingen worden naar FormSubmit gestuurd, dat de gegevens verwerkt om je bericht bij ons af te leveren en mogelijk een automatische reactie verstuurt. Als onze Teams-meldingsintegratie is geconfigureerd, kunnen inzendingsgegevens ook via onze ingestelde webhook naar Microsoft Teams worden gestuurd. Als je toestemming geeft voor analytics, verwerkt Google Analytics websitegebruiksgegevens voor ons. Hosting- en technische dienstverleners kunnen beperkte gegevens verwerken om hun diensten te leveren. Deze partijen kunnen gegevens in andere landen verwerken; waar nodig worden passende waarborgen toegepast."],
      },
      {
        title: "Hoe lang wij gegevens bewaren",
        paragraphs: ["Wij bewaren gegevens uit vragen alleen zolang dit nodig is om te reageren, onze relatie te onderhouden en eventuele opvolging af te handelen, tenzij de wet een langere termijn vereist. Analytics-gegevens worden bewaard volgens de toepasselijke instellingen van Google Analytics. Browseropslag blijft staan totdat je deze wist of je browser deze verwijdert. Onze dienstverleners kunnen eigen bewaartermijnen hanteren."],
      },
      {
        title: "Cookies en vergelijkbare technieken",
        paragraphs: ["Google Analytics wordt pas geladen nadat je toestemming geeft voor analytics en kan daarna cookies of vergelijkbare technieken gebruiken om websitegebruik te meten. Je kunt toestemming weigeren of intrekken via Cookie-instellingen in de footer. Je taalvoorkeur en toestemmingskeuze worden opgeslagen in de lokale browseropslag, niet in een cookie. Je kunt lokale opslag beheren of verwijderen via de instellingen van je browser."],
      },
      {
        title: "Je privacyrechten",
        paragraphs: ["Afhankelijk van de toepasselijke wetgeving kun je recht hebben op inzage, correctie of verwijdering van je persoonsgegevens, beperking of bezwaar tegen verwerking en overdraagbaarheid van gegevens. Als de verwerking op toestemming is gebaseerd, kun je die toestemming altijd intrekken; dit verandert niets aan de verwerking vóór de intrekking. Neem voor een verzoek contact op via hello@withimpulso.com. Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens of je lokale toezichthouder."],
      },
      {
        title: "Beveiliging",
        paragraphs: ["Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen. Geen enkele manier van verzenden of opslaan is volledig veilig, maar we beperken het risico op onbevoegde toegang, verlies en misbruik."],
      },
      {
        title: "Wijzigingen en contact",
        paragraphs: ["Wij kunnen deze verklaring aanpassen als onze werkwijze of wetgeving verandert. De meest recente versie staat op deze pagina. Stuur vragen of privacyverzoeken naar hello@withimpulso.com."],
      },
    ],
    linksTitle: "Meer informatie",
    googlePrivacy: "Privacybeleid van Google",
    analyticsOptOut: "Browser-add-on voor Google Analytics-opt-out",
  },
  es: {
    eyebrow: "Legal",
    title: "Política de privacidad",
    intro: "Esta política explica cómo trata Impulso los datos personales cuando visitas nuestro sitio web o te pones en contacto con nosotros.",
    updated: "Última actualización: 23 de octubre de 2026",
    sections: [
      {
        title: "Quiénes somos",
        paragraphs: ["Impulso es responsable de los datos personales descritos en esta política. Puedes contactar con nosotros en hello@withimpulso.com."],
      },
      {
        title: "Datos personales que recopilamos",
        paragraphs: ["Según cómo utilices el sitio web, podemos tratar la siguiente información:"],
        bullets: [
          "Datos del formulario de contacto: nombre, correo electrónico, empresa (si se facilita), asunto y mensaje.",
          "Información del sitio y del dispositivo recopilada mediante Google Analytics solo si das tu consentimiento, como páginas visitadas, navegador y dispositivo, ubicación aproximada e interacciones.",
          "Tu preferencia de idioma y elección de consentimiento, guardadas en el almacenamiento local del navegador.",
          "Información técnica tratada por nuestros proveedores de alojamiento y servicios para ofrecer, proteger y resolver problemas del sitio web.",
        ],
      },
      {
        title: "Por qué utilizamos tus datos",
        paragraphs: ["Utilizamos datos personales para responder a consultas, comunicarnos sobre nuestros servicios, gestionar y mejorar el sitio web, comprender su uso y cumplir obligaciones legales. Nos basamos en las medidas solicitadas antes de un posible contrato, nuestro interés legítimo en gestionar y mejorar los servicios y, cuando corresponda, obligaciones legales. Cuando sea necesario el consentimiento, lo solicitaremos antes del tratamiento."],
      },
      {
        title: "Quién recibe tus datos",
        paragraphs: ["No vendemos datos personales. Los envíos del formulario se remiten a FormSubmit, que trata la información para hacernos llegar tu mensaje y puede enviarte una respuesta automática. Si está configurada nuestra integración de notificaciones de Teams, los datos del envío también pueden enviarse a Microsoft Teams mediante el webhook configurado. Si das tu consentimiento para la analítica, Google Analytics trata información sobre el uso del sitio en nuestro nombre. Los proveedores de alojamiento y servicios técnicos pueden tratar datos limitados para prestar sus servicios. Estos proveedores pueden tratar datos en otros países; cuando sea necesario, se aplican garantías adecuadas."],
      },
      {
        title: "Cuánto tiempo conservamos los datos",
        paragraphs: ["Conservamos la información de las consultas solo durante el tiempo necesario para responder, mantener nuestra relación y gestionar el seguimiento, salvo que la ley exija un plazo mayor. La información analítica se conserva según la configuración aplicable de Google Analytics. Los datos almacenados en el navegador permanecen hasta que los elimines o el navegador los borre. Nuestros proveedores pueden aplicar sus propios plazos de conservación."],
      },
      {
        title: "Cookies y tecnologías similares",
        paragraphs: ["Google Analytics solo se carga después de que aceptes la analítica y puede utilizar cookies o tecnologías similares para medir el uso del sitio. Puedes rechazar o retirar tu consentimiento en cualquier momento desde Preferencias de cookies en el pie de página. Tu idioma y elección de consentimiento se guardan en el almacenamiento local del navegador, no en una cookie. Puedes gestionar o eliminar el almacenamiento local desde la configuración del navegador."],
      },
      {
        title: "Tus derechos de privacidad",
        paragraphs: ["Según la legislación aplicable, puedes tener derecho a acceder, rectificar o suprimir tus datos personales, limitar u oponerte al tratamiento y solicitar la portabilidad de los datos. Si el tratamiento se basa en tu consentimiento, puedes retirarlo en cualquier momento; esto no afecta al tratamiento anterior a la retirada. Para ejercer tus derechos, escribe a hello@withimpulso.com. También puedes presentar una reclamación ante la Autoridad Neerlandesa de Protección de Datos (Autoriteit Persoonsgegevens) o ante tu autoridad de control local."],
      },
      {
        title: "Seguridad",
        paragraphs: ["Aplicamos medidas técnicas y organizativas adecuadas para proteger los datos personales. Ningún método de transmisión o almacenamiento es completamente seguro, pero trabajamos para reducir el riesgo de acceso no autorizado, pérdida o uso indebido."],
      },
      {
        title: "Cambios y contacto",
        paragraphs: ["Podemos actualizar esta política si cambian nuestras prácticas o los requisitos legales. La versión vigente se publicará en esta página. Para consultas o solicitudes de privacidad, escribe a hello@withimpulso.com."],
      },
    ],
    linksTitle: "Más información",
    googlePrivacy: "Política de privacidad de Google",
    analyticsOptOut: "Complemento para inhabilitar Google Analytics",
  },
  ca: {
    eyebrow: "Legal",
    title: "Política de privacitat",
    intro: "Aquesta política explica com tracta Impulso les dades personals quan visites el nostre lloc web o contactes amb nosaltres.",
    updated: "Última actualització: 23 d'octubre de 2026",
    sections: [
      {
        title: "Qui som",
        paragraphs: ["Impulso és responsable de les dades personals descrites en aquesta política. Ens pots contactar a hello@withimpulso.com."],
      },
      {
        title: "Dades personals que recollim",
        paragraphs: ["Segons com utilitzis el lloc web, podem tractar la informació següent:"],
        bullets: [
          "Dades del formulari de contacte: nom, correu electrònic, empresa (si la facilites), assumpte i missatge.",
          "Informació del lloc web i del dispositiu recollida mitjançant Google Analytics només si hi dones el consentiment, com ara pàgines visitades, navegador i dispositiu, ubicació aproximada i interaccions.",
          "La teva preferència d'idioma i elecció de consentiment, desades a l'emmagatzematge local del navegador.",
          "Informació tècnica tractada pels nostres proveïdors d'allotjament i serveis per oferir, protegir i resoldre incidències del lloc web.",
        ],
      },
      {
        title: "Per què utilitzem les teves dades",
        paragraphs: ["Utilitzem dades personals per respondre consultes, comunicar-nos sobre els nostres serveis, gestionar i millorar el lloc web, entendre'n l'ús i complir obligacions legals. Ens basem en les mesures sol·licitades abans d'un possible contracte, el nostre interès legítim a gestionar i millorar els serveis i, quan correspongui, les obligacions legals. Quan calgui el consentiment, el demanarem abans del tractament."],
      },
      {
        title: "Qui rep les teves dades",
        paragraphs: ["No venem dades personals. Les trameses del formulari s'envien a FormSubmit, que tracta la informació per fer-nos arribar el missatge i pot enviar-te una resposta automàtica. Si la integració de notificacions de Teams està configurada, les dades de la tramesa també es poden enviar a Microsoft Teams mitjançant el webhook configurat. Si dones el consentiment per a l'analítica, Google Analytics tracta informació sobre l'ús del lloc web en nom nostre. Els proveïdors d'allotjament i serveis tècnics poden tractar dades limitades per prestar els seus serveis. Aquests proveïdors poden tractar dades en altres països; quan calgui, s'apliquen garanties adequades."],
      },
      {
        title: "Durant quant de temps conservem les dades",
        paragraphs: ["Conservem la informació de les consultes només durant el temps necessari per respondre, mantenir la relació i gestionar-ne el seguiment, llevat que la llei exigeixi un termini més llarg. La informació analítica es conserva segons la configuració aplicable de Google Analytics. Les dades del navegador es mantenen fins que les eliminis o el navegador les esborri. Els proveïdors poden aplicar els seus propis terminis de conservació."],
      },
      {
        title: "Galetes i tecnologies similars",
        paragraphs: ["Google Analytics només es carrega quan acceptes l'analítica i pot utilitzar galetes o tecnologies similars per mesurar l'ús del lloc web. Pots rebutjar o retirar el consentiment des de Configuració de galetes al peu de pàgina. L'idioma i l'elecció de consentiment es desen a l'emmagatzematge local del navegador, no en una galeta. Pots gestionar o eliminar l'emmagatzematge local des de la configuració del navegador."],
      },
      {
        title: "Els teus drets de privacitat",
        paragraphs: ["Segons la legislació aplicable, pots tenir dret a accedir, rectificar o suprimir les dades personals, limitar-ne o oposar-te al tractament i sol·licitar-ne la portabilitat. Si el tractament es basa en el consentiment, el pots retirar en qualsevol moment; això no afecta el tractament anterior a la retirada. Per exercir els teus drets, escriu a hello@withimpulso.com. També pots presentar una reclamació davant l'Autoritat Neerlandesa de Protecció de Dades (Autoriteit Persoonsgegevens) o l'autoritat de control local."],
      },
      {
        title: "Seguretat",
        paragraphs: ["Apliquem mesures tècniques i organitzatives adequades per protegir les dades personals. Cap mètode de transmissió o emmagatzematge és completament segur, però treballem per reduir el risc d'accés no autoritzat, pèrdua o ús indegut."],
      },
      {
        title: "Canvis i contacte",
        paragraphs: ["Podem actualitzar aquesta política si canvien les nostres pràctiques o els requisits legals. La versió vigent es publicarà en aquesta pàgina. Per a consultes o sol·licituds de privacitat, escriu a hello@withimpulso.com."],
      },
    ],
    linksTitle: "Més informació",
    googlePrivacy: "Política de privacitat de Google",
    analyticsOptOut: "Complement per desactivar Google Analytics",
  },
};

const Privacy = () => {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <div className="min-h-screen">
      <Navbar />
      <header className="bg-primary pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
              {content.eyebrow}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-6">
              {content.title}
            </h1>
            <p className="text-primary-foreground/60 text-lg leading-relaxed">
              {content.intro}
            </p>
          </div>
        </div>
      </header>
      <main className="py-14 md:py-20 bg-background">
        <div className="container max-w-4xl">
          <p className="text-sm text-muted-foreground mb-10">{content.updated}</p>
          <div className="space-y-10">
            {content.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif text-2xl text-foreground mb-3">
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-muted-foreground leading-7 mb-3">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-7">
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>
          <section className="mt-10 border-t border-border pt-8">
            <h2 className="font-serif text-xl text-foreground mb-3">{content.linksTitle}</h2>
            <ul className="space-y-2">
              <li>
                <a className="text-accent underline underline-offset-4" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                  {content.googlePrivacy}
                </a>
              </li>
              <li>
                <a className="text-accent underline underline-offset-4" href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">
                  {content.analyticsOptOut}
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;