import { type FaqItem } from "../components/faq";

/* ────────────────────────────────
   TYPES
────────────────────────────────── */

export type ServiceDescription2 = {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

export type ServiceBeforeAfter = {
  before: string;
  after: string;
  caption: string;
};

export type Service = {
  label: string;
  article: string;
  tagline: string;
  description: string;

  description2: ServiceDescription2;

  beforeAfter?: ServiceBeforeAfter;

  points: string[];

  image: string;
  imageAlt: string;

  faqs: FaqItem[];
};

export type ServiceKey =
  | "ardoise"
  | "zinc"
  | "bac-acier"
  | "aluminium"
  | "bardage";

/* ────────────────────────────────
   DATA
────────────────────────────────── */

export const services: Record<ServiceKey, Service> = {
    ardoise: {
    label: "Ardoise",
    article: "l'ardoise",
    tagline: "La couverture traditionnelle du Morbihan",
    description:
      "L'ardoise est le matériau de couverture le plus répandu en Bretagne, et pour cause : elle résiste parfaitement aux vents marins, aux pluies bretonnes et au gel. Chez Corrignan Couverture, on pose aussi bien de l'ardoise naturelle d'Espagne ou d'Angers que de l'ardoise artificielle (fibrociment), selon votre budget et le style de votre maison.",
    description2: {
      title: "Ardoise naturelle ou artificielle : laquelle choisir ?",
      body: "L'ardoise naturelle, extraite en carrière, offre une longévité incomparable, jusqu'à 150 ans, et une esthétique authentique recherchée sur les maisons de caractère. L'ardoise artificielle (fibrociment) est plus accessible financièrement, plus légère, et convient très bien aux rénovations où la charpente ne peut pas supporter un poids trop important. On vous conseille sur le choix le plus adapté à votre maison et à votre budget lors de la visite de chantier.",
      image: "/images/chantiers/ardoise/ardoise10.jpg",
      imageAlt: "Détail de pose d'ardoise naturelle sur une toiture bretonne",
    },
    beforeAfter: {
      before: "/images/chantiers/ardoise/ardoise_avant.jpeg",
      after: "/images/chantiers/ardoise/ardoise_apres.jpeg",
      caption: "Rénovation complète d'une toiture en ardoise, Lorient",
    },
    points: [
      "Durée de vie de 80 à 150 ans pour l'ardoise naturelle",
      "Parfaitement adaptée au climat breton et côtier",
      "Esthétique traditionnelle qui valorise le patrimoine",
      "Entretien minimal sur toute la durée de vie",
      "Pose en neuf ou rénovation complète / partielle",
    ],
    image: "/images/chantiers/ardoise/ardoise_hero.jpg",
    imageAlt: "Toiture en ardoise posée par Corrignan Couverture dans le Morbihan",
    faqs: [
      {
        question: "Quelle est la durée de vie d'une toiture en ardoise ?",
        answer: "Une toiture en ardoise naturelle dure en moyenne entre 80 et 150 ans selon la qualité de l'ardoise et la qualité de la pose. L'ardoise artificielle (fibrociment) offre une durée de vie de 30 à 50 ans. Dans les deux cas, c'est l'un des matériaux les plus durables du marché.",
      },
      {
        question: "Quelle est la différence entre ardoise naturelle et ardoise artificielle ?",
        answer: "L'ardoise naturelle est extraite en carrière, principalement en Espagne et en Anjou. Elle est plus lourde, plus chère, mais elle dure bien plus longtemps et a une esthétique incomparable. L'ardoise artificielle (fibrociment) est plus légère et moins coûteuse, ce qui en fait un bon choix pour les rénovations où la charpente ne peut pas supporter beaucoup de poids.",
      },
      {
        question: "Peut-on poser de l'ardoise sur une toiture existante ?",
        answer: "Non, on ne peut pas poser de l'ardoise par-dessus une couverture existante. Il faut déposer l'ancienne toiture, vérifier l'état de la charpente et de la volige, puis reposer l'ardoise. C'est l'occasion de traiter la charpente si nécessaire.",
      },
      {
        question: "Quel est le prix d'une toiture en ardoise ?",
        answer: "Le prix varie selon la surface, l'accessibilité du toit, l'état de la charpente et le type d'ardoise choisi. Pour avoir une estimation précise, on se déplace gratuitement pour évaluer votre chantier et vous remettre un devis détaillé.",
      },
      {
        question: "Intervenez-vous pour des réparations ponctuelles en ardoise ?",
        answer: "Oui, on intervient aussi bien pour des rénovations complètes que pour des réparations ponctuelles : remplacement d'ardoises cassées, reprise d'étanchéité, traitement de fuite. Appelez-nous directement pour qu'on évalue la situation.",
      },
    ] as FaqItem[],
  },

  zinc: {
    label: "Zinc",
    article: "le zinc",
    tagline: "Noblesse et longévité pour toitures complexes",
    description:
      "Le zinc est un matériau noble qui séduit autant pour ses qualités techniques que pour son esthétique. Idéal sur les toitures à faible pente, les noues, les lucarnes, les gouttières et les façades, il vieillit avec élégance et développe une patine naturelle au fil des années. Sa résistance à la corrosion en fait un excellent choix en zone côtière.",
    description2: {
      title: "Zinc naturel ou prépatiné : quelle différence ?",
      body: "Le zinc naturel arrive brillant en sortie d'usine et développe progressivement sa patine gris-bleu caractéristique au contact de l'air, c'est ce qu'on appelle l'oxydation naturelle. Le zinc prépatiné, lui, est traité en usine pour avoir d'emblée cet aspect mat anthracite ou bleu-gris. C'est souvent le choix des architectes qui veulent un rendu homogène dès la pose. Les deux offrent les mêmes performances techniques : une longévité de 80 à 100 ans et une résistance totale à la corrosion.",
      image: "/images/chantiers/zinc/zinc1.jpg",
      imageAlt: "Détail de toiture en zinc prépatiné anthracite",
    },
    beforeAfter: {
      before: "/images/chantiers/zinc/zinc_avant.jpeg",
      after: "/images/chantiers/zinc/zinc_apres.jpeg",
      caption: "Réfection d'une toiture complexe en zinc, Locmiquélic",
    },
    points: [
      "Durée de vie de 80 à 100 ans avec entretien minimal",
      "Insensible à la corrosion, idéal en bord de mer",
      "Disponible naturel ou prépatiné (anthracite, bleu-gris)",
      "Adapté aux formes complexes et aux faibles pentes",
      "Utilisé aussi pour gouttières, lucarnes, noues",
    ],
    image: "/images/chantiers/zinc/zinc_hero.jpg",
    imageAlt: "Couverture en zinc posée par Corrignan Couverture",
    faqs: [
      {
        question: "Le zinc résiste-t-il au sel marin en Bretagne ?",
        answer: "Oui, c'est l'un de ses grands atouts. Le zinc est naturellement insensible à la corrosion, même en bord de mer. Il forme une couche protectrice naturelle (la patine) qui le protège des agressions extérieures. C'est pourquoi on le recommande particulièrement sur le littoral morbihannais.",
      },
      {
        question: "Quelle est la différence entre zinc naturel et zinc prépatiné ?",
        answer: "Le zinc naturel arrive brillant et développe progressivement sa patine gris-bleu caractéristique au fil des années. Le zinc prépatiné est traité en usine pour avoir cet aspect mat dès la pose. Les performances techniques sont identiques, c'est surtout une question d'esthétique et de rendu immédiat.",
      },
      {
        question: "Le zinc peut-il être utilisé pour les gouttières et les lucarnes ?",
        answer: "Absolument. Le zinc est très polyvalent : on l'utilise pour les toitures, mais aussi pour les gouttières, chéneaux, noues, lucarnes, fenêtres de toit et habillages de façade. C'est un matériau de finition haut de gamme qui s'adapte à toutes les configurations.",
      },
      {
        question: "Quelle est la durée de vie d'une toiture en zinc ?",
        answer: "Une toiture en zinc bien posée dure entre 80 et 100 ans. L'entretien est minimal : un contrôle visuel tous les 10 ans suffit généralement. C'est un investissement sur le très long terme.",
      },
      {
        question: "Le zinc convient-il aux toitures à faible pente ?",
        answer: "Oui, c'est même l'un de ses avantages par rapport à l'ardoise. Le zinc peut être posé sur des toitures à partir de 3° de pente, ce qui en fait une solution adaptée aux toits peu inclinés où d'autres matériaux ne conviendraient pas.",
      },
    ] as FaqItem[],
  },

  "bac-acier": {
    label: "Bac acier",
    article: "le bac acier",
    tagline: "Rapidité, solidité et économie",
    description:
      "Le bac acier est la solution idéale pour les grandes surfaces, les bâtiments agricoles, les hangars et les extensions. Léger, facile et rapide à poser, il est disponible dans une large gamme de couleurs et de profils. C'est aussi un excellent choix pour les toitures à faible pente où l'ardoise ou le zinc seraient inadaptés.",
    description2: {
      title: "Bac acier : bien plus que le hangar agricole",
      body: "Si le bac acier reste la référence pour les bâtiments agricoles et industriels, il s'est largement imposé ces dernières années dans la construction résidentielle, extensions de maison, carports, vérandas et même toitures principales de constructions contemporaines. Les profils modernes et la large palette de couleurs RAL permettent une intégration esthétique soignée dans tous les environnements. Côté performance, il résiste très bien aux vents et à la neige, et sa légèreté ne surcharge pas la structure.",
      image: "/images/chantiers/bacAcier/bac_acier5.jpg",
      imageAlt: "Bâtiment couvert en bac acier dans le Morbihan",
    },
    beforeAfter: {
      before: "/images/chantiers/bacAcier/bac_acier_avant.jpeg",
      after: "/images/chantiers/bacAcier/bac_acier_apres.jpeg",
      caption: "Couverture d'un bâtiment agricole en bac acier, Hennebont",
    },
    points: [
      "Pose rapide, idéal pour grandes surfaces",
      "Large choix de couleurs RAL",
      "Adapté aux très faibles pentes (dès 5°)",
      "Rapport qualité-prix très compétitif",
      "Bâtiments agricoles, industriels, extensions, maisons",
    ],
    image: "/images/chantiers/bacAcier/bac_acier_hero.jpg",
    imageAlt: "Toiture bac acier posée par Corrignan Couverture dans le Morbihan",
    faqs: [
      {
        question: "Le bac acier est-il uniquement pour les bâtiments agricoles ?",
        answer: "Non, loin de là. Si le bac acier est effectivement très utilisé pour les bâtiments agricoles et industriels, il s'est largement imposé dans la construction résidentielle : extensions, carports, maisons contemporaines, toitures à faible pente. Les profils modernes et la palette de couleurs RAL permettent des intégrations esthétiques très soignées.",
      },
      {
        question: "Quelles pentes minimales pour une toiture en bac acier ?",
        answer: "Le bac acier peut être posé dès 5° de pente, voire moins avec certains profils spécifiques. C'est l'un des seuls matériaux adaptés aux très faibles pentes, là où l'ardoise ou la tuile seraient inadaptées.",
      },
      {
        question: "Peut-on choisir la couleur du bac acier ?",
        answer: "Oui, le bac acier est disponible dans toute la palette RAL, gris anthracite, rouge brique, vert, blanc, noir... On vous accompagne dans le choix de la couleur en fonction de votre bâtiment et des réglementations locales (certaines communes ont des règles sur les couleurs autorisées).",
      },
      {
        question: "Quelle est la durée de vie du bac acier ?",
        answer: "Un bac acier de qualité, correctement posé, dure entre 30 et 50 ans. La durée de vie dépend beaucoup de la qualité du traitement de surface (galvanisation, peinture laquée) et des conditions d'exposition. On travaille uniquement avec des matériaux certifiés.",
      },
      {
        question: "Le bac acier est-il bruyant sous la pluie ?",
        answer: "C'est une idée reçue. Sur un bâtiment habité, le bac acier est posé avec une isolation qui absorbe les bruits de pluie. Le résultat est similaire à n'importe quel autre matériau de couverture. Sur un bâtiment non isolé (hangar, remise), il y a effectivement plus de bruit, mais c'est le cas de tous les matériaux métalliques.",
      },
    ] as FaqItem[],
  },

  aluminium: {
    label: "Aluminium",
    article: "l'aluminium",
    tagline: "Légèreté, longévité et zéro entretien",
    description:
      "L'aluminium est un matériau haut de gamme, particulièrement apprécié pour les toitures plates, les terrasses, les toits-terrasses et les bardages en zone côtière. Inoxydable, léger et totalement recyclable, il ne demande aucun entretien sur toute sa durée de vie. Un investissement rentable sur le long terme.",
    description2: {
      title: "L'aluminium, le choix idéal en bord de mer",
      body: "Le Morbihan, c'est 250 km de côtes, et le sel marin, c'est l'ennemi numéro un des toitures métalliques. L'aluminium est naturellement insensible à la corrosion : pas d'oxydation, pas d'entretien, pas de peinture à refaire tous les dix ans. C'est pourquoi il est particulièrement recommandé pour les maisons situées à moins de 5 km de la mer. Sa légèreté (3 fois moins lourd que l'acier) en fait aussi un excellent choix pour les extensions ou les structures qui ne peuvent pas supporter beaucoup de poids supplémentaire.",
      image: "/images/chantiers/aluminium/aluminium3.jpg",
      imageAlt: "Toiture aluminium sur maison contemporaine en bord de mer",
    },
    beforeAfter: {
      before: "/images/chantiers/aluminium/aluminium_avant.jpg",
      after: "/images/chantiers/aluminium/aluminium_apres.jpg",
      caption: "Toiture-terrasse en aluminium, Quiberon",
    },
    points: [
      "Totalement inoxydable, y compris en bord de mer",
      "Poids très faible, sans contrainte sur la structure",
      "Aucun entretien requis",
      "Matériau 100% recyclable",
      "Idéal pour toits plats, terrasses et bardages",
    ],
    image: "/images/chantiers/aluminium/aluminium_hero.jpg",
    imageAlt: "Pose aluminium par Corrignan Couverture",
    faqs: [
      {
        question: "Pourquoi choisir l'aluminium plutôt que le zinc en bord de mer ?",
        answer: "Les deux résistent bien à la corrosion, mais l'aluminium a l'avantage d'être totalement inoxydable, même à très courte distance de la mer. Il est aussi 3 fois plus léger que l'acier, ce qui en fait un excellent choix pour les structures qui ne peuvent pas supporter beaucoup de poids. Et contrairement au zinc, il ne nécessite strictement aucun entretien.",
      },
      {
        question: "L'aluminium convient-il aux toitures plates ?",
        answer: "Oui, c'est même l'un de ses usages les plus courants. Les bacs aluminium sont particulièrement adaptés aux toitures plates et toits-terrasses grâce à leur étanchéité et leur résistance à l'eau stagnante. On les utilise aussi pour les terrasses accessibles.",
      },
      {
        question: "L'aluminium demande-t-il de l'entretien ?",
        answer: "Non, c'est l'un de ses principaux avantages. L'aluminium ne s'oxyde pas, ne rouille pas et ne nécessite aucune peinture de protection. Un simple rinçage à l'eau claire de temps en temps suffit à le garder propre. C'est un matériau vraiment sans entretien.",
      },
      {
        question: "L'aluminium est-il plus cher que les autres matériaux ?",
        answer: "L'aluminium est effectivement un matériau haut de gamme, donc le coût initial est plus élevé que le bac acier par exemple. Mais sur la durée de vie (80 à 100 ans) et l'absence totale d'entretien, c'est souvent le choix le plus économique à long terme, surtout en zone côtière où les matériaux sont plus sollicités.",
      },
      {
        question: "Peut-on poser de l'aluminium sur une structure existante ?",
        answer: "Oui, sa légèreté est un atout dans ce cas. On peut poser de l'aluminium sur une structure existante sans renforcement préalable dans la plupart des cas. On vérifie toujours l'état de la structure lors de la visite de chantier avant de vous remettre le devis.",
      },
    ] as FaqItem[],
  },

  bardage: {
    label: "Bardage",
    article: "le bardage",
    tagline: "Protéger et habiller vos façades",
    description:
      "Le bardage est une solution double fonction : il améliore l'isolation thermique de votre bâtiment par l'extérieur tout en lui donnant un aspect neuf et moderne. Corrignan Couverture pose du bardage en zinc, aluminium ou bac acier, selon vos préférences et la nature de votre projet. Rénovation ou construction neuve, on s'adapte.",
    description2: {
      title: "Bardage et isolation par l'extérieur : un double bénéfice",
      body: "Poser un bardage, c'est souvent l'occasion de réaliser une isolation thermique par l'extérieur (ITE) en même temps, et c'est là que l'investissement devient vraiment intéressant. On pose d'abord un isolant sur la façade existante, puis on fixe le bardage par-dessus. Résultat : votre maison est mieux isolée, votre façade est protégée des intempéries et votre consommation d'énergie baisse. Une solution particulièrement pertinente en Bretagne où l'humidité et le vent sollicitent fortement les façades.",
      image: "/images/chantiers/bardage/bardage1.jpg",
      imageAlt: "Pose de bardage métallique sur façade bretonne",
    },
    points: [
      "Améliore l'isolation thermique et acoustique",
      "Protège la façade des intempéries bretonnes",
      "Disponible en zinc, aluminium ou bac acier",
      "Large choix de finitions et de couleurs",
      "Compatible avec toutes constructions : maisons, bâtiments, extensions",
    ],
    image: "/images/chantiers/bardage/bardage_hero.jpg",
    imageAlt: "Bardage extérieur posé par Corrignan Couverture",
    faqs: [
      {
        question: "Faut-il un permis de construire pour poser du bardage ?",
        answer: "Ça dépend. Une simple déclaration préalable de travaux suffit dans la plupart des cas. Si votre maison est dans une zone protégée (ABF, zone littorale) ou si les travaux modifient l'aspect extérieur de manière significative, un permis de construire peut être nécessaire. On vous aide à identifier les démarches lors de la visite.",
      },
      {
        question: "Le bardage améliore-t-il vraiment l'isolation ?",
        answer: "Oui, si on le couple à une isolation thermique par l'extérieur (ITE). On pose d'abord un isolant sur la façade existante, puis le bardage par-dessus. Le résultat est très efficace : vous supprimez les ponts thermiques et vous améliorez significativement le confort et réduisez votre facture énergétique.",
      },
      {
        question: "Quelle différence entre bardage zinc, aluminium et bac acier ?",
        answer: "Le zinc est le plus noble et le plus esthétique, il développe une belle patine. L'aluminium est le plus léger et totalement inoxydable, le meilleur choix en bord de mer. Le bac acier est le plus économique, disponible en de nombreuses couleurs. Le choix dépend de votre budget, de la localisation et du rendu esthétique recherché.",
      },
      {
        question: "Peut-on poser du bardage sur n'importe quelle façade ?",
        answer: "Dans la quasi-totalité des cas, oui. Le bardage se pose sur une ossature métallique ou bois fixée à la façade existante, ce qui permet de l'installer sur des murs en pierre, en parpaing, en brique ou en béton. On vérifie l'état de la façade lors de la visite pour s'assurer qu'elle peut recevoir les fixations.",
      },
      {
        question: "Combien de temps dure la pose d'un bardage ?",
        answer: "La durée varie selon la surface et la complexité de la façade. Pour une maison individuelle standard, comptez entre 3 et 7 jours de chantier. On vous donne une estimation précise dans le devis. On s'efforce d'intervenir de façon à minimiser les nuisances et on remet le chantier propre derrière nous.",
      },
    ] as FaqItem[],
  },
};