import type { BlogPostRow } from "@/lib/types/blog";
import {
  AMAZON_BOOK_CTA_HREF,
  bold,
  bulletList,
  doc,
  h2,
  h3,
  linkedText,
  listItem,
  orderedList,
  paragraph,
  text,
} from "./tiptap-build";

/** Curated posts shipped with the app. Supabase wins if the same `slug` exists in the database. */
export const STATIC_BLOG_POSTS: BlogPostRow[] = [
  postFulfillmentPractice(),
  postQuietFear(),
  postCarrySetDown(),
  postFulfillmentPracticeFr(),
  postQuietFearFr(),
  postCarrySetDownFr(),
];

function ctaBlock(intro: string, emphasis: string): object[] {
  return [
    h2(text("Get the book")),
    paragraph(
      text(intro),
      text(" "),
      bold(emphasis),
      text(" "),
      linkedText("Get the book on Amazon", AMAZON_BOOK_CTA_HREF),
      text("."),
    ),
  ];
}

function ctaBlockFr(intro: string, emphasis: string): object[] {
  return [
    h2(text("Le livre")),
    paragraph(
      text(intro),
      text(" "),
      bold(emphasis),
      text(" "),
      linkedText("Acheter le livre sur Amazon", AMAZON_BOOK_CTA_HREF),
      text("."),
    ),
  ];
}

function postFulfillmentPractice(): BlogPostRow {
  const content = doc([
    paragraph(
      text("Peak moments create memories. "),
      bold("Quiet fidelity to your values"),
      text(
        " creates a life that still feels like yours on an ordinary Tuesday.",
      ),
    ),
    h2(text("The stakes")),
    paragraph(
      text(
        "Fulfillment is easy to confuse with intensity. We chase spikes: promotions, launches, praise, travel, the relief after a crisis. Those moments matter—but they are not the architecture of a well-lived life. The deeper question is whether your ",
      ),
      bold("week"),
      text(" resembles your "),
      bold("priorities"),
      text(", not whether your highlight reel does."),
    ),
    paragraph(
      text(
      "Most adults are not failing because they lack ambition. They are tired because their days reward ",
      ),
      bold("performance"),
      text(" more consistently than they reward "),
      bold("alignment"),
      text(
        ". The result is a familiar tension: outward motion, inner noise.",
      ),
    ),
    h2(text("Reframe: what “full” actually means")),
    paragraph(
      text("A fulfilled life is less like a mood and more like "),
      bold("reliability"),
      text(
        "—between you and your own word. You become dependable to the person you intend to be when nobody is applauding.",
      ),
    ),
    paragraph(
      text(
        "That reliability is built through practice, not inspiration. When fulfillment is treated as a feeling, you outsource stability to circumstances. Emotional volatility is expensive: it erodes focus, relationships, and the courage required for long-term decisions.",
      ),
    ),
    h2(text("Three practices that make fulfillment sustainable")),
    h3(text("1) Name your non-negotiables—then protect them like strategy")),
    paragraph(
      text(
        "Not hobbies. Non-negotiables are the small boundaries that keep you human: sleep, movement, a weekly review, uninterrupted time with people you love, a refusal to say yes when you mean “not without cost.” If your calendar can’t reflect them, your life will eventually contradict them—and you’ll feel it as restlessness.",
      ),
    ),
    h3(text("2) Trade “more output” for “cleaner intention”")),
    paragraph(
      text(
        "High performers often confuse speed with clarity. Ask a simple question: What am I optimizing for this quarter—approval, control, or alignment? You can win the wrong game with excellence.",
      ),
    ),
    h3(text("3) Finish one meaningful action weekly")),
    paragraph(
      text(
        "Big transformations are overrated as motivators. Repeated integrity is underrated. One meaningful action—an honest conversation, a boundary held, a generous decision—signals that you are not living on autopilot.",
      ),
    ),
    h2(text("Key takeaways")),
    bulletList(
      listItem(
        paragraph(text("Fulfillment is behavioral continuity, not emotional highs.")),
      ),
      listItem(
        paragraph(text("Sustainable growth depends on calendar fidelity to your values.")),
      ),
      listItem(paragraph(text("Practice beats inspiration when ordinary days dominate."))),
    ),
    h2(text("Bottom line")),
    paragraph(
      text(
        "If you want a life that feels full when the spotlight is off, build the kind of week you can respect—not the kind of week that merely impresses.",
      ),
    ),
    ...ctaBlock(
      "For a structured path from inner intention to outward action—without sacrificing spiritual integrity for ambition—read Kevin Adou’s",
      "Prosper Without Compromise:",
    ),
  ]);

  return {
    id: "00000000-0000-4000-8000-000000000001",
    slug: "fulfillment-isnt-a-mood-its-a-practice",
    locale: "en",
    title: "Fulfillment isn’t a mood—it’s a practice",
    excerpt:
      "Peak moments create memories. Quiet fidelity to your values creates a life that still feels like yours on an ordinary Tuesday.",
    content_json: content,
    seo_keywords:
      "personal growth, fulfillment, intentional living, values, habits, Prosper Without Compromise, Kevin Adou",
    status: "published",
    published_at: "2026-05-01T12:00:00.000Z",
    created_at: "2026-05-01T12:00:00.000Z",
    updated_at: "2026-05-01T12:00:00.000Z",
  };
}

function postQuietFear(): BlogPostRow {
  const content = doc([
    paragraph(
      text("Comparison doesn’t just steal joy—it steals truth. Here is how to convert “behind” into "),
      bold("clarity"),
      text(" without shaming yourself into hustle."),
    ),
    h2(text("The opener")),
    paragraph(
      text(
        "The phrase arrives quietly, often late at night: I should be further along. It sounds like ambition. Frequently, it is fear wearing ambition’s clothes—fear of wasting your life, being ordinary, or being exposed as someone who “had potential” but never proved it.",
      ),
    ),
    paragraph(
      text(
        "This fear is not proof you are failing. It is proof you care. The problem is that, unmanaged, it becomes a tyrant: it pushes you to perform, punishes you for resting, and convinces you that fulfillment is always one more achievement away.",
      ),
    ),
    h2(text("Reframe: “along” compared to what?")),
    paragraph(
      text(
        "Further along implies a single track and an objective ranking. Real lives are not linear. Your growth is best measured by honesty (what is true right now), agency (what you can influence), and covenant (what you refuse to betray in the process).",
      ),
    ),
    h2(text("Why shame is a bad strategist")),
    paragraph(
      text(
        "Shame accelerates motion but degrades judgment. It produces short bursts of effort and long stretches of burnout. If your plan relies on feeling “not enough,” you will keep solving the wrong problem.",
      ),
    ),
    h2(text("Three moves that replace panic with traction")),
    orderedList(
      listItem(
        paragraph(
          bold("Separate facts from fiction—on paper."),
          text(
            " Write facts (what is objectively true this month) and stories (what you tell yourself they mean). Most suffering sits in the second list. This is precision, not positivity.",
          ),
        ),
      ),
      listItem(
        paragraph(
          bold("Redefine progress as alignment."),
          text(
            " Progress can be a smaller life on the outside and a truer life on the inside: fewer performances, clearer boundaries, braver honesty. That compounds—even when it doesn’t photograph well.",
          ),
        ),
      ),
      listItem(
        paragraph(
          bold("Choose one courageous constraint."),
          text(
            " Fulfillment often appears when you stop trying to be limitless. One constraint—ending work at a fixed time, reducing commitments, refusing a role that misnames your values—can do more than another productivity hack.",
          ),
        ),
      ),
    ),
    h2(text("Key takeaways")),
    bulletList(
      listItem(paragraph(text("“Behind” is often fear, not a verdict."))),
      listItem(paragraph(text("Comparison collapses context; fulfillment requires it."))),
      listItem(paragraph(text("Steady growth favors constraints more than intensity."))),
    ),
    h2(text("Bottom line")),
    paragraph(
      text(
        "You do not need to win an imaginary race to live a meaningful life. You need a truthful map, a humane pace, and the courage to honor what matters before the world agrees.",
      ),
    ),
    ...ctaBlock(
      "For a faith-informed framework that aligns ambition with inner peace—without turning your life into a performance—read Kevin Adou’s",
      "Prosper Without Compromise:",
    ),
  ]);

  return {
    id: "00000000-0000-4000-8000-000000000002",
    slug: "the-quiet-fear-behind-i-should-be-further-along",
    locale: "en",
    title: "The quiet fear behind “I should be further along”",
    excerpt:
      "Comparison doesn’t just steal joy—it steals truth. Here’s how to convert “behind” into clarity without shaming yourself into hustle.",
    content_json: content,
    seo_keywords:
      "comparison, personal growth, shame, anxiety, purpose, fulfillment, Prosper Without Compromise",
    status: "published",
    published_at: "2026-05-02T12:00:00.000Z",
    created_at: "2026-05-02T12:00:00.000Z",
    updated_at: "2026-05-02T12:00:00.000Z",
  };
}

function postCarrySetDown(): BlogPostRow {
  const content = doc([
    paragraph(
      text("Maturity is not becoming tougher. It’s becoming honest about weight. "),
      bold("Fulfillment begins when you stop confusing responsibility with identity."),
    ),
    h2(text("The opener")),
    paragraph(
      text(
        "Many capable people do not feel depleted because they lack discipline. They feel depleted because they are carrying more than they agreed to carry—and calling it loyalty.",
      ),
    ),
    paragraph(
      text(
        "Personal growth, at a certain stage, stops asking what you can achieve and starts asking what you can sustain without quietly resenting your own life.",
      ),
    ),
    h2(text("Reframe: carrying can be noble—and still corrosive")),
    paragraph(
      text(
        "Some burdens deserve your shoulders: family caregiving, leadership in crisis, promises kept. But identity can smuggle in weight that does not belong there: the need to be indispensable; the fear of disappointing people who won’t adjust expectations; the addiction to being the person who handles everything.",
      ),
    ),
    paragraph(
      text(
        "Fulfillment is not the absence of difficulty. It is the removal of hidden taxes you pay to remain admired.",
      ),
    ),
    h2(text("The three inventories high performers avoid")),
    h3(text("1) The merit inventory")),
    paragraph(
      text(
        "List what you believe you must earn before you are allowed to rest, be loved, or be whole. If your rest requires a reward, your life has become a conditional contract with yourself.",
      ),
    ),
    h3(text("2) The role inventory")),
    paragraph(
      text(
        "Name the roles you perform publicly versus the person you are becoming privately. Widening that gap creates loneliness—even in success.",
      ),
    ),
    h3(text("3) The exit inventory")),
    paragraph(
      text(
        "Identify one obligation you can set down, delegate, renegotiate, or complete with honor—not abandonment, but adulthood.",
      ),
    ),
    h2(text("What setting down costs—and what it buys")),
    paragraph(
      text(
        "It can cost approval and convenience. It might disappoint someone who benefited from your over-functioning. What it buys is steadier presence, cleaner energy, and integrity that makes prosperity feel like peace instead of pressure.",
      ),
    ),
    h2(text("Key takeaways")),
    bulletList(
      listItem(paragraph(text("Fulfillment requires honest weight management, not more toughness."))),
      listItem(paragraph(text("Hidden roles create hidden fatigue."))),
      listItem(
        paragraph(text("Setting down is often the most mature form of responsibility.")),
      ),
    ),
    h2(text("Bottom line")),
    paragraph(
      text(
        "A full life is not the sum of everything you can carry. It is the disciplined craft of carrying what is truly yours—and releasing what never should have been.",
      ),
    ),
    ...ctaBlock(
      "For a blueprint that moves from intention through strategy, faith, and disciplined action—so success doesn’t hollow out your soul—read Kevin Adou’s",
      "Prosper Without Compromise:",
    ),
  ]);

  return {
    id: "00000000-0000-4000-8000-000000000003",
    slug: "what-you-carry-and-what-you-set-down",
    locale: "en",
    title: "What you’re willing to carry—and what you’re ready to set down",
    excerpt:
      "Maturity isn’t becoming tougher. It’s becoming honest about weight. Fulfillment begins when you stop confusing responsibility with identity.",
    content_json: content,
    seo_keywords:
      "boundaries, burnout, identity, responsibility, personal growth, fulfillment, Prosper Without Compromise",
    status: "published",
    published_at: "2026-05-03T12:00:00.000Z",
    created_at: "2026-05-03T12:00:00.000Z",
    updated_at: "2026-05-03T12:00:00.000Z",
  };
}

function postFulfillmentPracticeFr(): BlogPostRow {
  const content = doc([
    paragraph(
      text("Les grands moments font des souvenirs. "),
      bold("Une fidélité tranquille à vos valeurs"),
      text(
        " façonne une vie qui vous ressemble encore un mardi ordinaire.",
      ),
    ),
    h2(text("Les enjeux")),
    paragraph(
      text(
        "On confond facilement l'épanouissement avec l'intensité. On traque les pics : promotions, lancements, compliments, voyages, le soulagement après une crise. Ces moments comptent—mais ils ne sont pas l'architecture d'une vie bien vécue. La vraie question est de savoir si votre ",
      ),
      bold("semaine"),
      text(" ressemble à vos "),
      bold("priorités"),
      text(", et non si votre bande-annonce personnelle le suggère."),
    ),
    paragraph(
      text(
        "Beaucoup d'adultes n'échouent pas par manque d'ambition. Ils sont fatigués parce que leurs journées récompensent plus souvent la ",
      ),
      bold("performance"),
      text(" que l'"),
      bold("alignement"),
      text(
        ". D'où cette tension familière : mouvement visible à l'extérieur, bruit intérieur.",
      ),
    ),
    h2(text("Reformuler : ce que « plein » veut vraiment dire")),
    paragraph(
      text("Une vie « pleine », ce n'est d'abord pas une humeur, c'est une "),
      bold("fiabilité"),
      text(
        "—entre vous et votre propre parole. Vous devenez constant pour la personne que vous voulez être quand personne n'applaudit.",
      ),
    ),
    paragraph(
      text(
        "Cette fiabilité se bâtit par la pratique, pas l'inspiration. Quand l'épanouissement est traité comme une sensation, vous externalisez votre stabilité. La volatilité émotionnelle coûte cher : elle érode l'attention, les liens et le courage des décisions longues.",
      ),
    ),
    h2(text("Trois pratiques qui rendent l'épanouissement durable")),
    h3(text("1) Nommez vos non-négociables—puis protégez-les comme une stratégie")),
    paragraph(
      text(
        "Pas des loisirs. Ce sont les petites bornes qui vous gardent humain : sommeil, mouvement, un bilan hebdomadaire, du temps incompressible avec ceux que vous aimez, un refus de dire oui quand vous pensez « pas sans un coût que j'assume ». Si votre agenda ne les reflète pas, votre vie finira par vous contredire—sous forme d'agitation.",
      ),
    ),
    h3(text("2) Échangez « toujours plus » contre une intention plus nette")),
    paragraph(
      text(
        "Les grands performeurs confondent souvent vitesse et clarté. Posez une question brutale : qu'est-ce que j'optimise ce trimestre—la validation, le contrôle, ou l'alignement ? On peut exceller au jeu… qui n'est pas le vôtre.",
      ),
    ),
    h3(text("3) Une action significative par semaine, sans drame")),
    paragraph(
      text(
        "Les grandes transformations surmotivent rarement au quotidien. L'intégrité répétée, si. Une action—une conversation honnête, une limite tenue, un geste généreux—prouve que vous ne vivez pas en pilote automatique.",
      ),
    ),
    h2(text("À retenir")),
    bulletList(
      listItem(
        paragraph(
          text("L'épanouissement, c'est une continuité de comportements, pas une suite de montées d'émotion."),
        ),
      ),
      listItem(
        paragraph(
          text("Une croissance durable exige que l'agenda reflète vos valeurs."),
        ),
      ),
      listItem(
        paragraph(
          text("La pratique bat l'inspiration quand les journées ordinaires dominent."),
        ),
      ),
    ),
    h2(text("En résumé")),
    paragraph(
      text(
        "Si vous voulez une vie qui vous semble pleine quand les projecteurs sont éteints, construisez une semaine que vous respectez—pas seulement une semaine qui impressionne.",
      ),
    ),
    ...ctaBlockFr(
      "Pour un chemin structuré de l'intention intérieure à l'action concrète—sans sacrifier l'intégrité spirituelle à l'ambition—découvrez",
      "Prospérer sans perdre son âme :",
    ),
  ]);

  return {
    id: "00000000-0000-4000-8000-000000000101",
    slug: "epanouissement-ce-nest-pas-une-humeur-cest-une-pratique",
    locale: "fr",
    title: "L'épanouissement n'est pas une humeur—c'est une pratique",
    excerpt:
      "Les grands moments font des souvenirs. Une fidélité tranquille à vos valeurs façonne une vie qui vous ressemble encore un mardi ordinaire.",
    content_json: content,
    seo_keywords:
      "développement personnel, épanouissement, valeurs, habitudes, alignement, Prospérer sans perdre son âme, Kevin Adou",
    status: "published",
    published_at: "2026-05-01T14:00:00.000Z",
    created_at: "2026-05-01T14:00:00.000Z",
    updated_at: "2026-05-01T14:00:00.000Z",
  };
}

function postQuietFearFr(): BlogPostRow {
  const content = doc([
    paragraph(
      text("Comparer ne vole pas seulement la joie—il vole la vérité. Voici comment transformer « je suis en retard » en "),
      bold("clarté"),
      text(" sans vous culpabiliser dans la précipitation."),
    ),
    h2(text("L'entrée en matière")),
    paragraph(
      text(
        "La phrase arrive souvent en silence, tard le soir : je devrais être plus avancé. Elle ressemble à l'ambition. Souvent, c'est la peur déguisée—peur de gâcher sa vie, d'être ordinaire, ou d'être démasqué comme quelqu'un qui « avait du potentiel » sans le prouver.",
      ),
    ),
    paragraph(
      text(
        "Cette peur ne prouve pas que vous échouez. Elle prouve que vous tenez à quelque chose. Mais sans cadre, elle devient tyrannique : elle vous pousse à performer, vous punit au repos et vous fait croire que l'épanouissement n'est qu'une réussite de plus.",
      ),
    ),
    h2(text("Reformuler : « avancé » par rapport à quoi ?")),
    paragraph(
      text(
        "« Plus avancé » suppose une voie unique et un classement objectif. Les vies réelles ne sont pas linéaires. Votre croissance se juge mieux à l'honnêteté (ce qui est vrai maintenant), à la capacité d'agir sur ce qui dépend de vous, et à l'alliance avec ce que vous refusez de trahir en chemin.",
      ),
    ),
    h2(text("Pourquoi la honte est un mauvais stratège")),
    paragraph(
      text(
        "La honte accélère le mouvement mais dégrade le jugement. Elle donne des pics d'effort et des plages d'épuisement. Si votre plan repose sur le « je ne suis pas assez », vous résolvez le mauvais problème.",
      ),
    ),
    h2(text("Trois mouvements qui remplacent la panique par l'appui")),
    orderedList(
      listItem(
        paragraph(
          bold("Séparez les faits de la fiction—par écrit."),
          text(
            " Listez les faits (ce qui est objectivement vrai ce mois-ci) et les récits (ce que vous décidez qu'ils signifient). Une grande part de la souffrance vit dans la seconde colonne. Ce n'est pas du positif toxique, c'est de la précision.",
          ),
        ),
      ),
      listItem(
        paragraph(
          bold("Redéfinissez le progrès comme alignement."),
          text(
            " Le progrès peut être une vie plus petite à l'extérieur et plus vraie à l'intérieur : moins de spectacle, des limites plus claires, une honnêteté plus courageuse. Cela se compose—même quand ça ne « fait pas » bien sur les réseaux.",
          ),
        ),
      ),
      listItem(
        paragraph(
          bold("Choisissez une contrainte courageuse."),
          text(
            " L'épanouissement apparaît souvent quand vous cessez de jouer l'illimité. Une seule contrainte—quitter le travail à une heure fixe, réduire les engagements, refuser un rôle qui nie vos valeurs—peut valoir mieux qu'un nouvel hack de productivité.",
          ),
        ),
      ),
    ),
    h2(text("À retenir")),
    bulletList(
      listItem(paragraph(text("« En retard » est souvent de la peur, pas un verdict."))),
      listItem(
        paragraph(
          text("La comparaison efface le contexte ; l'épanouissement l'exige."),
        ),
      ),
      listItem(
        paragraph(
          text("Une croissance régulière privilégie souvent les contraintes plutôt que l'intensité."),
        ),
      ),
    ),
    h2(text("En résumé")),
    paragraph(
      text(
        "Vous n'avez pas besoin de gagner une course imaginaire pour une vie sensée. Il vous faut une carte honnête, un rythme humain, et le courage de défendre l'essentiel avant que le monde ne valide votre choix.",
      ),
    ),
    ...ctaBlockFr(
      "Pour un cadre nourri par la foi, qui aligne ambition et paix intérieure—sans transformer votre vie en performance—découvrez",
      "Prospérer sans perdre son âme :",
    ),
  ]);

  return {
    id: "00000000-0000-4000-8000-000000000102",
    slug: "la-peur-discrete-derriere-je-devrais-etre-plus-avance",
    locale: "fr",
    title: "La peur discrète derrière « je devrais être plus avancé »",
    excerpt:
      "Comparer ne vole pas seulement la joie—il vole la vérité. Voici comment transformer « en retard » en clarté sans vous précipiter par la culpabilité.",
    content_json: content,
    seo_keywords:
      "comparaison, développement personnel, honte, anxiété, sens, épanouissement, Prospérer sans perdre son âme",
    status: "published",
    published_at: "2026-05-02T14:00:00.000Z",
    created_at: "2026-05-02T14:00:00.000Z",
    updated_at: "2026-05-02T14:00:00.000Z",
  };
}

function postCarrySetDownFr(): BlogPostRow {
  const content = doc([
    paragraph(
      text("La maturité, ce n'est pas être plus dur. C'est être honnête sur le poids. "),
      bold(
        "L'épanouissement commence quand vous cessez de confondre responsabilité et identité.",
      ),
    ),
    h2(text("L'entrée en matière")),
    paragraph(
      text(
        "Beaucoup de personnes compétentes ne manquent pas de discipline—et pourtant elles se sentent vidées. Souvent parce qu'elles portent plus qu'elles n'ont choisi de porter—et qu'elles appellent cela loyauté.",
      ),
    ),
    paragraph(
      text(
        "À un certain stade, la croissance personnelle ne demande plus seulement ce que vous pouvez accomplir, mais ce que vous pouvez soutenir sans en vouloir secrètement à votre propre vie.",
      ),
    ),
    h2(text("Reformuler : porter peut être noble—et quand même corrosif")),
    paragraph(
      text(
        "Certaines charges méritent vos épaules : la famille, le leadership dans la tempête, les promesses tenues. Mais l'identité fait parfois entrer du poids clandestin : le besoin d'être indispensable ; la peur de décevoir ceux qui n'ajusteront jamais leurs attentes ; l'habitude d'être celui qui « gère tout ».",
      ),
    ),
    paragraph(
      text(
        "L'épanouissement n'est pas l'absence de difficulté. C'est la suppression des taxes cachées que vous payez pour rester admiré.",
      ),
    ),
    h2(text("Les trois inventaires que les performeurs évitent")),
    h3(text("1) L'inventaire du mérite")),
    paragraph(
      text(
        "Listez ce que vous croyez devoir mériter avant d'avoir le droit de vous reposer, d'être aimé ou d'être entier. Si le repos n'arrive qu'en récompense, vous avez signé un contrat conditionnel avec vous-même.",
      ),
    ),
    h3(text("2) L'inventaire des rôles")),
    paragraph(
      text(
        "Nommez les rôles que vous jouez en public par rapport à la personne que vous devenez en privé. Élargir cet écart nourrit la solitude—même dans la réussite.",
      ),
    ),
    h3(text("3) L'inventaire des sorties")),
    paragraph(
      text(
        "Repérez une obligation que vous pouvez poser, déléguer, renégocier ou mener à bien avec honneur—pas par abandon, mais par adultité.",
      ),
    ),
    h2(text("Ce que « poser » coûte—et ce que ça rapporte")),
    paragraph(
      text(
        "Ça peut coûter une approbation, une facilité. Ça peut décevoir quelqu'un qui profitait de votre sur-fonctionnement. Ce que ça rapporte : une présence plus stable, une énergie plus claire, une intégrité qui fait de la prospérité quelque chose qui ressemble à la paix plutôt qu'à la pression.",
      ),
    ),
    h2(text("À retenir")),
    bulletList(
      listItem(
        paragraph(
          text(
            "L'épanouissement demande une gestion honnête du poids, pas plus de dureté.",
          ),
        ),
      ),
      listItem(
        paragraph(text("Les rôles cachés fabriquent une fatigue cachée.")),
      ),
      listItem(
        paragraph(
          text(
            "Poser une charge est souvent la forme la plus mature de responsabilité.",
          ),
        ),
      ),
    ),
    h2(text("En résumé")),
    paragraph(
      text(
        "Une vie pleine n'est pas la somme de tout ce que vous pouvez porter. C'est l'art discipliné de porter ce qui est vraiment à vous—et de lâcher ce qui ne l'a jamais été.",
      ),
    ),
    ...ctaBlockFr(
      "Pour une feuille de route de l'intention à la stratégie, la foi et l'action disciplinée—afin que la réussite ne vide pas votre âme—découvrez",
      "Prospérer sans perdre son âme :",
    ),
  ]);

  return {
    id: "00000000-0000-4000-8000-000000000103",
    slug: "ce-que-vous-portez-et-ce-que-vous-etes-pret-a-poser",
    locale: "fr",
    title: "Ce que vous acceptez de porter—et ce que vous êtes prêt à poser",
    excerpt:
      "La maturité, ce n'est pas être plus dur. C'est être honnête sur le poids. L'épanouissement commence quand vous cessez de confondre responsabilité et identité.",
    content_json: content,
    seo_keywords:
      "limites, épuisement, identité, responsabilité, développement personnel, Prospérer sans perdre son âme",
    status: "published",
    published_at: "2026-05-03T14:00:00.000Z",
    created_at: "2026-05-03T14:00:00.000Z",
    updated_at: "2026-05-03T14:00:00.000Z",
  };
}
