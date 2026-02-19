import type { Locale } from "./types";

export const translations = {
  en: {
    nav: {
      home: "Home",
      books: "Books",
      academy: "Academy",
      coaching: "Coaching",
      about: "About",
      contact: "Contact",
      resources: "Resources",
      bookASession: "Book a Session",
    },
    home: {
      hero: {
        byline: "A New Book by Kevin Adou",
        title: "Prosper Without Compromise.",
        titleLine1: "Prosper\nWithout",
        titleLine2: "Compromise.",
        subtitle:
          "Master the intersection of high-level business success and unwavering spiritual integrity.",
        ctaBook: "Get the Book",
        ctaVideos: "Watch the Series",
      },
      pillars: {
        read: { title: "Read", subtitle: "The Foundation", cta: "Explore the Books" },
        learn: { title: "Learn", subtitle: "The Academy", cta: "Start the Masterclass" },
        evolve: { title: "Evolve", subtitle: "The Coaching", cta: "Book Your Session" },
      },
      why: {
        title: "Success shouldn't cost you your soul.",
        body: "At Alignment Press, we believe true prosperity is built on solid ground. We provide the tools, the wisdom, and the community to help you scale your business while staying true to your faith.",
      },
      footerCta: {
        title: "Ready to align your ambition with your values?",
        newsletter: "Join the Movement",
        newsletterDesc:
          "Be the first to receive insights on aligned prosperity, exclusive content, and updates about workshops and resources.",
      },
      quote: {
        text: "There are two kinds of success. One fills bank accounts but leaves the heart empty. The other fills the heart—and, in time, often fills the accounts as well.",
        author: "— Kevin Adou",
        from: "from Prosper Without Compromise",
      },
    },
    book: {
      metaTitle: "The Book | Prosper Without Compromise",
      metaDescription:
        "Discover 'Prosper Without Compromise' by Kevin Adou — Faith, Strategy, and the Inner Alignment That Sustains Abundance.",
      heroLabel: "The Book",
      title: "Prosper Without Compromise",
      subtitle: "Faith, Strategy, and the Inner Alignment That Sustains Abundance",
      byAuthor: "by Kevin Adou",
      intro:
        "This book was born from a fundamental question: why do some people, despite status, money, or recognition, live in constant tension — while others move forward with peace, clarity, and fruitfulness? It invites a shift in posture: from survival to creation, from dispersion to alignment, from anxious control to conscious cooperation with deeper laws.",
      buyAmazon: "Buy on Amazon",
      buyDigital: "Buy Digital (PDF)",
      availableFormats: "Available worldwide in paperback, hardcover, and digital formats.",
      keyPromiseTitle: "What This Book Will Help You Do",
      keyPromiseItems: [
        "Clarify and purify your intention",
        "Cultivate attention that turns faith into conviction",
        "Take concrete and fruitful action",
        "Build aligned professional and financial projects",
        "Unite meaning, performance, and responsibility",
        "Move from survival to creation",
      ],
      insideTitle: "Inside the Book",
      chapterTitle: "Chapter Overview",
      chapterIntro:
        "A structured journey from invisible intention to concrete reality, through six transformative chapters.",
      ctaTitle: "Ready to Begin Your Journey?",
      ctaDesc: "Get notified about launch events, exclusive content, and early access to workshops.",
    },
    about: {
      metaTitle: "About Kevin Adou | Alignment Press",
      metaDescription:
        "Learn about Kevin Adou, author of 'Prosper Without Compromise' — a conscious builder committed to helping others align purpose with prosperity.",
      heroLabel: "The Author",
      title: "Kevin Adou",
      tagline: "Author, Speaker & Conscious Builder",
      bio: [
        "Kevin Adou is an author, thinker, and practitioner at the intersection of faith, strategy, and personal development. With a deep commitment to helping individuals align their inner life with their outer ambitions, Kevin has dedicated years to exploring the principles that sustain lasting abundance.",
        "His work is rooted in a fundamental conviction: true prosperity flows from the inside out. No external success can sustainably compensate for inner disorder. The kind of abundance that brings peace and endures always begins with alignment — alignment of heart, mind, and action.",
        "Through his book Prosper Without Compromise, Kevin presents a structured framework built on four pillars — Intention, Strategy, Faith, and Action — offering readers a practical path from invisible intention to concrete reality.",
        "Kevin's approach blends biblical wisdom with modern strategic thinking, creating a bridge for those who refuse to choose between spiritual integrity and professional excellence. He speaks to the conscious builder — the one who creates, invests, works, and decides in alignment with who they truly are.",
      ],
      convictionsTitle: "Core Convictions",
      convictionsIntro: "The principles that guide Kevin's work and writing.",
      missionTitle: "About Alignment Press",
      mission1:
        "Alignment Press is the publishing and personal branding platform created by Kevin Adou to distribute transformative content, host workshops, and build a community of conscious builders.",
      mission2:
        "Our mission is simple: to empower individuals who refuse to choose between faith and ambition, between inner peace and outer success. We believe that when alignment comes first, abundance follows naturally.",
      readBook: "Read the Book",
      getInTouch: "Get in Touch",
      stayConnected: "Stay Connected",
      followJourney: "Follow the Journey",
      followDesc: "Receive exclusive insights, updates on new projects, and invitations to upcoming events.",
      convictions: [
        { title: "Alignment Over Hustle", description: "Success without peace is not true prosperity. When heart, mind, and action move together, the ground is prepared before you can even see it." },
        { title: "Source Before Strategy", description: "Before seeking the right strategy, examine the right source. Before 'doing,' learn how to 'be.' Before chasing results, align the heart." },
        { title: "Abundance as Flow", description: "Abundance is not a stock to defend, but a flow to allow. It expands in proportion to responsibility, generosity, and the capacity to become a source." },
        { title: "Faith as Discipline", description: "Faith is not passive hope. It is the discipline of attention that refuses to feed doubt and instead focuses on the certainty of the promise." },
        { title: "Purpose-Driven Action", description: "Action is the visible proof that faith is alive. By embodying convictions through consistent, concrete steps, you move from theory to harvest." },
        { title: "Build Without Compromise", description: "You can succeed without losing yourself, build without hardening your heart, and prosper without sacrificing your peace." },
      ],
    },
    resources: {
      metaTitle: "Resources | Alignment Press",
      metaDescription:
        "Free resources, guides, and tools from Alignment Press to help you on your journey toward aligned prosperity.",
      heroLabel: "Resources",
      title: "Tools for the Conscious Builder",
      titlePrefix: "Tools for the ",
      titleHighlight: "Conscious Builder",
      subtitle:
        "Free guides, workbooks, and frameworks to support your journey toward aligned prosperity. More resources are added regularly.",
      getNewFirst: "Get New Resources First",
      getNewDesc: "Join the list to receive free tools, guides, and exclusive content as soon as they're released.",
      accessResource: "Access Resource",
      notifyMe: "Notify me when available",
      comingSoon: "Coming Soon",
      available: "Available",
      items: [
        { title: "The Alignment Self-Assessment", type: "Free Tool", description: "A guided questionnaire to evaluate where you stand across the four pillars: Intention, Strategy, Faith, and Action. Identify your strengths and areas for growth.", status: "comingSoon" as const },
        { title: "D.A.P. Vision Workbook", type: "Free Download", description: "A practical workbook to help you clarify your Desire, Love, and Potential — the three dimensions that transform abstract vision into a clear, embodied mission.", status: "comingSoon" as const },
        { title: "The Conscious Builder's Journal", type: "Premium Tool", description: "A structured journaling framework designed to accompany your reading of Prosper Without Compromise. Daily prompts, weekly reflections, and monthly reviews.", status: "comingSoon" as const },
        { title: "Intention Setting Guide", type: "Free Download", description: "A step-by-step guide to purifying your intentions and setting a clear inner direction. Based on Chapter 1 of Prosper Without Compromise.", status: "comingSoon" as const },
        { title: "A.M.T. Goal Framework Template", type: "Free Download", description: "Practical templates for structuring your long- and short-term objectives using the Aligned, Measurable, Time-bound goal framework from the book.", status: "comingSoon" as const },
        { title: "Faith & Business Reading List", type: "Free Resource", description: "A curated list of books, articles, and talks that complement the themes of Prosper Without Compromise. Expand your understanding of aligned prosperity.", status: "available" as const },
      ],
    },
    contact: {
      metaTitle: "Contact | Alignment Press",
      metaDescription: "Get in touch with Alignment Press. Questions, partnerships, or say hello.",
      heroLabel: "Contact",
      title: "Let's Connect",
      subtitle: "Have a question, partnership inquiry, or just want to say hello? We'd love to hear from you.",
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      message: "Message",
      messagePlaceholder: "How can we help you?",
      send: "Send Message",
      sending: "Sending...",
      messageSent: "Message Sent",
      successMessage: "Thank you for your message! We'll get back to you soon.",
      getInTouch: "Get in Touch",
      getInTouchDesc:
        "Whether you're interested in workshops, speaking engagements, partnerships, or just want to share how the book has impacted your journey — we'd love to hear from you.",
      commonInquiries: "Common Inquiries",
    },
    footer: {
      brandDesc:
        "Empowering conscious builders to prosper without compromise. Faith, Strategy, and the Inner Alignment That Sustains Abundance.",
      navigate: "Navigate",
      connect: "Connect",
      copyright: "All rights reserved.",
      tagline: "Built with purpose. Powered by alignment.",
      ctaTitle: "Ready to align your ambition with your values?",
      ctaButton: "Join the Movement",
    },
    academy: {
      metaTitle: "Academy | Alignment Press",
      metaDescription:
        "Online courses and video insights from Kevin Adou. Master the principles of aligned prosperity.",
      heroLabel: "The Academy",
      title: "Learn at Your Pace",
      subtitle:
        "Online courses and short, high-impact videos on integrity in sales, biblical mindset, and leadership alignment.",
      masterclassTitle: "The Masterclass",
      masterclassDesc: "The flagship online course. A structured journey through the principles of Prosper Without Compromise.",
      enrollNow: "Enroll Now",
      videoLibraryTitle: "Video Library",
      videoLibrarySubtitle: "Short insights (1–3 min) on key pillars.",
      curriculum: "Curriculum overview",
    },
    coaching: {
      metaTitle: "Coaching & Training | Alignment Press",
      metaDescription:
        "Executive coaching and corporate training with Kevin Adou. Book a discovery call or a session.",
      heroLabel: "Coaching & Training",
      title: "Transform Through Guided Alignment",
      subtitle:
        "One-on-one executive coaching and half-day or full-day corporate workshops. Book a discovery call to discuss your needs.",
      executiveTitle: "Executive Coaching",
      executiveDuration: "One-on-One",
      executiveDesc:
        "Personalized coaching for leaders and entrepreneurs who want to align business strategy with their deeper calling. Work directly with Kevin on your specific challenges and goals.",
      corporateTitle: "Corporate Training",
      corporateDuration: "Half-Day or Full-Day",
      corporateDesc:
        "Immersive workshops for teams. Bring the principles of aligned prosperity and conscious leadership to your organization.",
      bookDiscovery: "Book a Discovery Call",
      inquire: "Inquire About This Program",
      whatIncluded: "What's Included",
    },
    common: {
      stayConnected: "Stay Connected",
      joinMovement: "Join the Movement",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      books: "Livres",
      academy: "Académie",
      coaching: "Coaching",
      about: "À propos",
      contact: "Contact",
      resources: "Ressources",
      bookASession: "Réserver une session",
    },
    home: {
      hero: {
        byline: "Un nouveau livre de Kevin Adou",
        title: "Prospérer sans perdre son âme.",
        titleLine1: "Prospérer sans perdre",
        titleLine2: "son âme.",
        subtitle:
          "Maîtrisez l'intersection entre le succès entrepreneurial de haut niveau et l'intégrité spirituelle.",
        ctaBook: "Acheter le livre",
        ctaVideos: "Voir les vidéos",
      },
      pillars: {
        read: { title: "Lire", subtitle: "La fondation", cta: "Découvrir les livres" },
        learn: { title: "Apprendre", subtitle: "L'Académie", cta: "Suivre la Masterclass" },
        evolve: { title: "Évoluer", subtitle: "Le Coaching", cta: "Réserver une session" },
      },
      why: {
        title: "Le succès ne devrait pas vous coûter votre âme.",
        body: "Chez Alignment Press, nous croyons que la vraie prospérité se bâtit sur un socle solide. Nous offrons les outils, la sagesse et la communauté pour vous aider à propulser votre entreprise tout en restant fidèle à votre foi.",
      },
      footerCta: {
        title: "Prêt à aligner votre ambition avec vos valeurs ?",
        newsletter: "Rejoindre le mouvement",
        newsletterDesc:
          "Soyez parmi les premiers à recevoir nos réflexions sur la prospérité alignée, du contenu exclusif et des actualités sur les ateliers et ressources.",
      },
      quote: {
        text: "Il y a deux types de succès. L'un remplit les comptes en banque mais laisse le cœur vide. L'autre remplit le cœur — et, avec le temps, remplit souvent les comptes aussi.",
        author: "— Kevin Adou",
        from: "extrait de Prospérer sans perdre son âme",
      },
    },
    book: {
      metaTitle: "Le livre | Prospérer sans perdre son âme",
      metaDescription:
        "Découvrez « Prospérer sans perdre son âme » de Kevin Adou — Foi, stratégie et l'alignement intérieur qui soutient l'abondance.",
      heroLabel: "Le livre",
      title: "Prospérer sans perdre son âme",
      subtitle: "Foi, stratégie et l'alignement intérieur qui soutient l'abondance",
      byAuthor: "par Kevin Adou",
      intro:
        "Ce livre est né d'une question fondamentale : pourquoi certaines personnes, malgré le statut, l'argent ou la reconnaissance, vivent dans une tension constante — alors que d'autres avancent avec paix, clarté et fécondité ? Il invite à un changement de posture : de la survie à la création, de la dispersion à l'alignement, du contrôle anxieux à la coopération consciente avec des lois plus profondes.",
      buyAmazon: "Acheter sur Amazon",
      buyDigital: "Version numérique (PDF)",
      availableFormats: "Disponible dans le monde entier en format papier, relié et numérique.",
      keyPromiseTitle: "Ce que ce livre vous aidera à faire",
      keyPromiseItems: [
        "Clarifier et purifier votre intention",
        "Cultiver une attention qui transforme la foi en conviction",
        "Passer à une action concrète et féconde",
        "Construire des projets professionnels et financiers alignés",
        "Unir sens, performance et responsabilité",
        "Passer de la survie à la création",
      ],
      insideTitle: "Dans le livre",
      chapterTitle: "Aperçu des chapitres",
      chapterIntro:
        "Un parcours structuré de l'intention invisible à la réalité concrète, à travers six chapitres transformateurs.",
      ctaTitle: "Prêt à commencer votre voyage ?",
      ctaDesc: "Soyez informé des événements de lancement, du contenu exclusif et de l'accès anticipé aux ateliers.",
    },
    about: {
      metaTitle: "À propos de Kevin Adou | Alignment Press",
      metaDescription:
        "Découvrez Kevin Adou, auteur de « Prospérer sans perdre son âme » — un bâtisseur conscient engagé à aider les autres à aligner but et prospérité.",
      heroLabel: "L'auteur",
      title: "Kevin Adou",
      tagline: "Auteur, conférencier et bâtisseur conscient",
      bio: [
        "Kevin Adou est auteur, penseur et praticien à l'intersection de la foi, de la stratégie et du développement personnel. Avec un engagement profond pour aider les individus à aligner leur vie intérieure et leurs ambitions extérieures, Kevin a consacré des années à explorer les principes qui soutiennent une abondance durable.",
        "Son travail s'enracine dans une conviction fondamentale : la vraie prospérité vient de l'intérieur. Aucun succès extérieur ne peut compenser durablement un désordre intérieur. L'abondance qui apporte la paix et qui dure commence toujours par l'alignement — alignement du cœur, de l'esprit et de l'action.",
        "À travers son livre Prospérer sans perdre son âme, Kevin présente un cadre structuré construit sur quatre piliers — Intention, Stratégie, Foi et Action — offrant aux lecteurs un chemin pratique de l'intention invisible à la réalité concrète.",
        "L'approche de Kevin allie sagesse biblique et pensée stratégique moderne, créant un pont pour ceux qui refusent de choisir entre intégrité spirituelle et excellence professionnelle. Il s'adresse au bâtisseur conscient — celui qui crée, investit, travaille et décide en alignement avec qui il est vraiment.",
      ],
      convictionsTitle: "Convictions fondamentales",
      convictionsIntro: "Les principes qui guident le travail et l'écriture de Kevin.",
      missionTitle: "À propos d'Alignment Press",
      mission1:
        "Alignment Press est la plateforme d'édition et de marque personnelle créée par Kevin Adou pour diffuser du contenu transformateur, animer des ateliers et construire une communauté de bâtisseurs conscients.",
      mission2:
        "Notre mission est simple : donner aux personnes qui refusent de choisir entre la foi et l'ambition, entre la paix intérieure et le succès extérieur, les moyens d'agir. Nous croyons que lorsque l'alignement vient en premier, l'abondance suit naturellement.",
      readBook: "Lire le livre",
      getInTouch: "Nous contacter",
      stayConnected: "Rester connecté",
      followJourney: "Suivre le parcours",
      followDesc:
        "Recevez des réflexions exclusives, des actualités sur les nouveaux projets et des invitations aux prochains événements.",
      convictions: [
        { title: "Alignement plutôt que l'effort vain", description: "Le succès sans paix n'est pas une vraie prospérité. Quand le cœur, l'esprit et l'action avancent ensemble, le terrain est préparé avant même que vous ne le voyiez." },
        { title: "La source avant la stratégie", description: "Avant de chercher la bonne stratégie, examinez la bonne source. Avant de « faire », apprenez à « être ». Avant de courir après les résultats, alignez le cœur." },
        { title: "L'abondance comme flux", description: "L'abondance n'est pas un stock à défendre, mais un flux à accueillir. Elle grandit avec la responsabilité, la générosité et la capacité à devenir une source." },
        { title: "La foi comme discipline", description: "La foi n'est pas une espérance passive. C'est la discipline de l'attention qui refuse d'alimenter le doute et se concentre sur la certitude de la promesse." },
        { title: "L'action au service du but", description: "L'action est la preuve visible que la foi est vivante. En incarnant vos convictions par des étapes concrètes et constantes, vous passez de la théorie à la moisson." },
        { title: "Construire sans compromis", description: "Vous pouvez réussir sans vous perdre, construire sans endurcir votre cœur, et prospérer sans sacrifier votre paix." },
      ],
    },
    resources: {
      metaTitle: "Ressources | Alignment Press",
      metaDescription:
        "Ressources, guides et outils gratuits d'Alignment Press pour vous accompagner vers une prospérité alignée.",
      heroLabel: "Ressources",
      title: "Outils pour le bâtisseur conscient",
      titlePrefix: "Outils pour le ",
      titleHighlight: "bâtisseur conscient",
      subtitle:
        "Guides, cahiers et cadres gratuits pour accompagner votre parcours vers une prospérité alignée. De nouvelles ressources sont ajoutées régulièrement.",
      getNewFirst: "Recevez les nouvelles ressources en premier",
      getNewDesc:
        "Rejoignez la liste pour recevoir outils, guides et contenu exclusif dès leur sortie.",
      accessResource: "Accéder à la ressource",
      notifyMe: "Me notifier quand disponible",
      comingSoon: "Bientôt disponible",
      available: "Disponible",
      items: [
        { title: "L'auto-évaluation d'alignement", type: "Outil gratuit", description: "Un questionnaire guidé pour évaluer où vous en êtes sur les quatre piliers : Intention, Stratégie, Foi et Action. Identifiez vos forces et axes de croissance.", status: "comingSoon" as const },
        { title: "Cahier de vision D.A.P.", type: "Téléchargement gratuit", description: "Un cahier pratique pour clarifier votre Désir, Amour et Potentiel — les trois dimensions qui transforment la vision abstraite en mission claire et incarnée.", status: "comingSoon" as const },
        { title: "Le journal du bâtisseur conscient", type: "Outil premium", description: "Un cadre de journal structuré pour accompagner votre lecture de Prospérer sans perdre son âme. Prompts quotidiens, réflexions hebdomadaires et bilans mensuels.", status: "comingSoon" as const },
        { title: "Guide de fixation d'intention", type: "Téléchargement gratuit", description: "Un guide pas à pas pour purifier vos intentions et fixer une direction intérieure claire. Basé sur le chapitre 1 de Prospérer sans perdre son âme.", status: "comingSoon" as const },
        { title: "Modèle cadre d'objectifs A.M.T.", type: "Téléchargement gratuit", description: "Des modèles pratiques pour structurer vos objectifs à long et court terme avec le cadre Aligned, Measurable, Time-bound du livre.", status: "comingSoon" as const },
        { title: "Liste de lecture Foi & Business", type: "Ressource gratuite", description: "Une liste curatée de livres, articles et conférences qui complètent les thèmes de Prospérer sans perdre son âme. Approfondissez votre compréhension de la prospérité alignée.", status: "available" as const },
      ],
    },
    contact: {
      metaTitle: "Contact | Alignment Press",
      metaDescription: "Contactez Alignment Press. Questions, partenariats ou simplement dire bonjour.",
      heroLabel: "Contact",
      title: "Restons en contact",
      subtitle: "Une question, une proposition de partenariat ou envie de nous dire bonjour ? Nous serions ravis de vous lire.",
      name: "Nom",
      namePlaceholder: "Votre nom complet",
      email: "E-mail",
      emailPlaceholder: "votre@email.com",
      message: "Message",
      messagePlaceholder: "Comment pouvons-nous vous aider ?",
      send: "Envoyer le message",
      sending: "Envoi en cours...",
      messageSent: "Message envoyé",
      successMessage: "Merci pour votre message ! Nous vous répondrons bientôt.",
      getInTouch: "Nous contacter",
      getInTouchDesc:
        "Que ce soit pour des ateliers, des conférences, des partenariats ou pour partager l'impact du livre sur votre parcours — nous aimerions vous lire.",
      commonInquiries: "Demandes courantes",
    },
    footer: {
      brandDesc:
        "Donner aux bâtisseurs conscients les moyens de prospérer sans compromis. Foi, stratégie et l'alignement intérieur qui soutient l'abondance.",
      navigate: "Navigation",
      connect: "Contact",
      copyright: "Tous droits réservés.",
      tagline: "Conçu avec un but. Propulsé par l'alignement.",
      ctaTitle: "Prêt à aligner votre ambition avec vos valeurs ?",
      ctaButton: "Rejoindre le mouvement",
    },
    academy: {
      metaTitle: "Académie | Alignment Press",
      metaDescription:
        "Cours en ligne et vidéos de Kevin Adou. Maîtrisez les principes de la prospérité alignée.",
      heroLabel: "L'Académie",
      title: "Apprenez à votre rythme",
      subtitle:
        "Cours en ligne et vidéos courtes à fort impact sur l'intégrité en vente, la mentalité biblique et l'alignement en leadership.",
      masterclassTitle: "La Masterclass",
      masterclassDesc:
        "Le cours en ligne phare. Un parcours structuré à travers les principes de Prospérer sans perdre son âme.",
      enrollNow: "S'inscrire",
      videoLibraryTitle: "Vidéothèque",
      videoLibrarySubtitle: "Courtes réflexions (1–3 min) sur les piliers clés.",
      curriculum: "Aperçu du programme",
    },
    coaching: {
      metaTitle: "Coaching & Formation | Alignment Press",
      metaDescription:
        "Coaching dirigeants et formations en entreprise avec Kevin Adou. Réservez un appel découverte ou une session.",
      heroLabel: "Coaching & Formation",
      title: "Transformez-vous grâce à un accompagnement aligné",
      subtitle:
        "Coaching dirigeant en tête-à-tête et ateliers entreprise d'une demi-journée ou d'une journée. Réservez un appel découverte pour en discuter.",
      executiveTitle: "Coaching Dirigeant",
      executiveDuration: "Tête-à-tête",
      executiveDesc:
        "Coaching personnalisé pour dirigeants et entrepreneurs qui veulent aligner stratégie business et vocation. Travaillez directement avec Kevin sur vos défis et objectifs.",
      corporateTitle: "Formation Entreprise",
      corporateDuration: "Demi-journée ou journée",
      corporateDesc:
        "Ateliers immersifs pour équipes. Apportez les principes de la prospérité alignée et du leadership conscient à votre organisation.",
      bookDiscovery: "Réserver un appel découverte",
      inquire: "En savoir plus sur ce programme",
      whatIncluded: "Ce qui est inclus",
    },
    common: {
      stayConnected: "Rester connecté",
      joinMovement: "Rejoindre le mouvement",
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations.en;
}
