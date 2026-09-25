const recipes = [
    // Basic
    {
        id: "soin",
        ingredients: ["Herbes", "Eau"],
        name: "Potion de Soin",
        category: "Basiques",
        description: "Soigne les maux bénins comme les migraines, les petites coupures ou encore les bleus. Notes : Aussi appelé Remède de Grand-mère par certains.",
        secret: false
    },
    {
        id: "revigorant",
        ingredients: ["Baie", "Miel", "Eau"],
        name: "Élixir Revigorant",
        category: "Basiques",
        description: "Pratique en cas de coup de mou ou excellent remède contre les potions de sommeil… et au contrecoup des nuits blanches.",
        secret: false
    },
    {
        id: "sommeil",
        ingredients: ["Lavande", "Eau"],
        name: "Essence de Songes",
        category: "Basiques",
        description: "Très utile pour les insomnies... si on respecte les doses. La dernière fois que j'en ai trop pris, j'ai dormi trois jours.",
        secret: false
    },
    {
        id: "croissance",
        ingredients: ["Herbes", "Champignon", "Eau"],
        name: "Concentré de Sève",
        category: "Basiques",
        description: "Solution permettant la pousse rapide de végétaux. Note : Pour la dernière fois, cela ne fonctionne pas avec les cheveux !",
        secret: false
    },
    {
        id: "clarte",
        ingredients: ["Rose", "Lavande", 'Eau'],
        name: "Breuvage de Clarté",
        category: "Basiques",
        description: "Permet à son buveur de retrouver ses esprits. Souvent utilisée dans le cas d'une contusion ou d'un choc… ou aussi par les ivrognes…",
        secret: false
    },
    // Elemental
    {
        id: "feu",
        ingredients: ["Braise", "Eau"],
        name: "Fiole de Flames",
        category: "Élementaires",
        description: "Feu tout prêt, utile si l'on ne sait pas en allumer un. Note : Ne pas laisser la fiole sans surveillance !",
        secret: false
    },
    {
        id: "glace",
        ingredients: ["Éclat de glace", "Eau"],
        name: "Larmes de Givre",
        category: "Élementaires",
        description: "Gèle la zone où l'on lance la bouteille. Zone variable suivant la concentration des cristaux, d'après expériences et la fois où j'ai fini les pieds piégés dans la glace.",
        secret: false
    },
    {
        id: "chaleur",
        ingredients: ["Braise", "Miel", "Eau"],
        name: "Potion de Chaleur",
        category: "Élementaires",
        description: "À utiliser dans le cadre d'hivers rudes pour se réchauffer. Aussi utilisé pour les victimes d'hypothermie. Note : Penser à lui trouver un autre nom.",
        secret: false
    },
    {
        id: "resistance-feu",
        ingredients: ["Pierre", "Braise", "Eau"],
        name: "Essence Ardente",
        category: "Élementaires",
        description: "Permet à son buveur de devenir résistant aux flammes. Souvent utilisée par les chasseurs de monstres. Notes : Bien rappeler qu'il y a une limite de temps.",
        secret: false
    },
    {
        id: "resistance-glace",
        ingredients: ["Pierre", "Éclat de glace", "Eau"],
        name: "Extrait Hivernal",
        category: "Élementaires",
        description: "Procure une résistance aux très basses températures. Utile pour les personnes s'aventurant dans les zones enneigées. Note : N'empêche pas de devenir un glaçon en cas de rencontre avec de l'eau.",
        secret: false
    },
    // Dangerous
    {
        id: "poison",
        ingredients: ["Venin", "Eau"],
        name: "Poison",
        category: "Dangereuses",
        description: "Une seule goutte est déjà dangereuse, alors une bouteille complète… Je n'ai en aucun cas envie de me retrouver la cible de ça.",
        secret: false
    },
    {
        id: "poison-concentre",
        ingredients: ["Champignon", "Venin", "Eau"],
        name: "Venin Concentré",
        category: "Dangereuses",
        description: "Comme si la version de base n'était pas suffisante, il fallait vraiment qu'on le rende plus dangereux ! Note : L'odeur est assez forte.",
        secret: false
    },
    {
        id: "nuit",
        ingredients: ["Venin", "Baie", "Aile de Chauve-souris"],
        name: "Baie de Minuit",
        category: "Dangereuses",
        description: "Une mixture mortelle au goût sucré, assez semblable à une tisane que l'on prend avant d'aller se coucher… Pourquoi est-ce que des clients commandent ça…",
        secret: false
    },
    {
        id: "corrosive",
        ingredients: ["Venin", "Braise", "Eau"],
        name: "Solution Mordante",
        category: "Dangereuses",
        description: "Préparation extrêmement corrosive capable d'attaquer certains matériaux. Note : Faire extrêmement attention et éviter tout contact avec la peau… et les meubles.",
        secret: false
    },
    {
        id: "paralysie",
        ingredients: ["Venin", "Lavande", "Toile d'araignée"],
        name: "Étreinte de l'Araignée",
        category: "Dangereuses",
        description: "Provoque la paralysie temporaire de son buveur. Effets commençant par les extrémités puit gagnant, petit à petit, le reste du corps. Note : La victime reste consciente… ce qui est rarement apprécié.",
        secret: false
    },
    // Strange
    {
        id: "vision",
        ingredients: ["Poussière de Lune", "Aile de Chauve-souris", "Eau"],
        name: "Élixir Nocturne",
        category: "Étranges",
        description: "Permet de voir dans l'obscurité… Je devrais en prendre plus souvent, cela m'éviterait de me prendre les meubles de la cabane quand je vais me chercher un verre d'eau en pleine nuit.",
        secret: false
    },
    {
        id: "clairvoyance",
        ingredients: ["Poussière de Lune", "Cristal", "Eau"],
        name: "Sagesse Céleste",
        category: "Étranges",
        description: "Dote son buveur de facultés mentales extraordinaires. Note : Ce n'est pas pour autant que vous devenez un devin !",
        secret: false
    },
    {
        id: "levitation",
        ingredients: ["Aile de Chauve-souris", "Toile d'araignée", "Eau"],
        name: "Essence de Vent",
        category: "Étranges",
        description: "Permet de flotter légèrement au-dessus du sol. Note : On parle de lévitation, pas de vol. Ne vous jetez pas d'une falaise !",
        secret: false
    },
    {
        id: "silence",
        ingredients: ["Lavande", "Toile d'araignée", "Eau"],
        name: "Motus",
        category: "Étranges",
        description: "Potion rendant son buveur muet pendant un laps de temps. Possède de multiples usages, allant jusqu'aux plaisanteries entre amis… ainsi qu'aux étudiants souhaitant faire croire à une extinction de voix.",
        secret: false
    },
    {
        id: "sommeil-profond",
        ingredients: ["Champignon", "Poussière de Lune", "Lavande"],
        name: "Songes Éternels",
        category: "Étranges",
        description: "Plonge son buveur dans un sommeil très profond. La durée du sommeil dépend de la dose donnée. Note : Nom assez trompeur, car le sujet finit généralement par se réveiller… Généralement…",
        secret: false
    },
    // Creatures
    {
        id: "transformation",
        ingredients: ["Champignon", "Aile de Chauve-souris", "Eau"],
        name: "Essence Sauvage",
        category: "Créatures",
        description: "Permet au buveur de se transformer en un animal, suivant l'échantillon intégré à la potion. Note : Ne jamais croire sur parole quelqu'un vous donnant cette potion, au risque de se retrouver sous une forme animale non désirée.",
        secret: false
    },
    {
        id: "agilite",
        ingredients: ["Aile de Chauve-souris", "Baie", "Eau"],
        name: "Potion d'Agilité",
        category: "Créatures",
        description: "Dote le buveur d'une agilité phénoménale, bien plus que celle des acrobates… Cela serait très pratique pour contrer ma maladresse…",
        secret: false
    },
    {
        id: "toile",
        ingredients: ["Toile d'araignée", "Miel", "Eau"],
        name: "Toile en Bouteille",
        category: "Créatures",
        description: "Mélange formant une toile extrêmement solide et gluante. Très bon filet de secours dans le cas d'une chute ou pour attraper quelqu'un. Note : Reste quand même très difficile de s'en détacher.",
        secret: false
    },
    {
        id: "peau-epaise",
        ingredients: ["Pierre", "Toile d'araignée", "Eau"],
        name: "Armure de Pierre",
        category: "Créatures",
        description: "Transforme la peau du sujet en une matière ayant une consistance quasiment similaire à celle de la roche. Note : Mobilité grandement réduite, les articulations étant également similaire à de la roche. ",
        secret: false
    },
    {
        id: "sang-froid",
        ingredients: ["Venin", "Éclat de glace", "Eau"],
        name: "Sang de Lézard",
        category: "Créatures",
        description: "Donne à son buveur une constitution proche de celle des lézards et serpents… Je ne vois pas qui voudrait de cela, ils sont obligés de rester au soleil et au chaud après ça…",
        secret: false
    },
    // Advanced
    {
        id: "cristal",
        ingredients: ["Cristal", "Poussière de Lune", "Eau", "Pierre"],
        name: "Distillat de Pureté",
        category: "Avancées",
        description: "À jeter dans une pièce occupée par de mauvais esprits pour la purifier. Note : Ne pas rester dans la pièce, ça éblouit beaucoup !",
        secret: false
    },
    {
        id: "lunaire",
        ingredients: ["Poussière de Lune", "Cristal", "Rose", "Eau"],
        name: "Rosée Sélénite",
        category: "Avancées",
        description: "Solution assez mystérieuse. Ses effets varient suivant la phase de la Lune lors de sa préparation… J'ai vraiment besoin de mieux la documenter…",
        secret: false
    },
    {
        id: "renaissance",
        ingredients: ["Poussière de Lune", "Baie", "Herbes", "Eau"],
        name: "Élixir de Renaissance",
        category: "Avancées",
        description: "Potion permettant de soigner totalement une personne se trouvant aux portes de la mort. Note : On parle de soigner une personne encore en vie, pas de ramener quelqu'un d'entre les morts !",
        secret: false
    },
    {
        id: "elementaire",
        ingredients: ["Braise", "Cristal", "Éclat de glace", "Eau"],
        name: "Essence Élémentaire",
        category: "Avancées",
        description: "Préparation assez instable réunissant le feu et la glace. Son effet varie suivant la quantité de chaque élément utilisée. Note : Ne SURTOUT pas secouer la bouteille !",
        secret: false
    },
    {
        id: "ame",
        ingredients: ["Herbes", "Cristal", "Poussière de Lune", "Eau"],
        name: "Retour d'Âme",
        category: "Avancées",
        description: "À verser sur une tombe pour en faire revenir l'esprit… Je devrais peut-être faire ça avec la tombe d'un maître alchimiste, je suis sûr que j'apprendrais plein de nouvelles choses…",
        secret: false
    },
    /// Secrets
    {
        id: "neant",
        ingredients: ["Venin", "Poussière de Lune", "Cristal", "Toile d'araignée"],
        name: "Le Néant",
        category: "Secret",
        description: "Fait disparaître un objet sur lequel le mélange est versé… Je regrette que la première bouteille soit tombée sur mon ancien manuel de recettes…",
        secret: true
    },
    {
        id: "lune",
        ingredients: ["Rose", "Poussière de Lune", "Éclat de glace", "Eau"],
        name: "Larmes de Lune",
        category: "Secret",
        description: "Forme de petits cristaux glacés scintillants à la lueur de la lune… J'aime bien leur goût de rose…",
        secret: true
    },
    {
        id: "dragon",
        ingredients: ["Braise", "Cristal", "Miel", "Pierre"],
        name: "Cœur de Dragon",
        category: "Secret",
        description: "Forme une magnifique pierre incandescente... et c'est tout… mais très utile en hiver, ça tient chaud !",
        secret: true
    }
];

const failedRecipes = [
    "Le mélange se met à bouillir violemment, je ferais mieux de m'écarter avant de me prendre quelque chose.",
    "Le liquide prend une teinte brune étrange... Je préfère ne pas savoir pourquoi.",
    "Rien ne se passe... Peut-être que les ingrédients ne réagissent pas bien entre eux."
]