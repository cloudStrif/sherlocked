import { ServiceItem, PortfolioItem, FleetItem, ClientReference, RegulationScenario } from '../models/airbuzz.model';

export const AIRBUZZ_CONTACT = {
  name: 'AIRbuzz',
  founder: 'Bertrand Debeuret',
  role: 'Réalisateur & Télépilote Professionnel DGAC',
  phone: '06 61 71 64 99',
  phoneDisplay: '+33 (0)6 61 71 64 99',
  email: 'contact@air-buzz.com',
  address: '18 rue Lebouteux',
  postalCode: '75017',
  city: 'Paris',
  country: 'France',
  coverage: 'Île-de-France (Paris 75, 78, 91, 92, 95, 45, 28), France entière & International',
  network: 'HOsiHO Drone Network (Opérateur référent agréé Paris & Ouest Francilien)'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'cinema-tv',
    title: 'Cinéma, Fictions & Télévision',
    subtitle: 'Qualité 6K CinemaDNG RAW & Apple ProRes',
    description: 'Une sensibilité cinématographique pour vos tournages les plus exigeants. Plans contemplatifs, mouvements de grue virtuelle et intégration fluide dans les pipelines de post-production haut de gamme.',
    badge: 'QUALITÉ CINÉMA 6K',
    icon: 'film',
    category: 'cinema',
    features: [
      'Capteurs Super 35 et Micro 4/3 interchangeables',
      'Formats Apple ProRes 422 HQ / 4444 XQ & CinemaDNG RAW',
      'Configuration double-opérateur (Pilote dédié + Chef Opérateur cadreur)',
      'Collaboration étroite avec la régie et le réalisateur'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'fpv-racing',
    title: 'Drones FPV Immersifs',
    subtitle: 'Plans-séquences dynamiques jusqu\'à 140 km/h',
    description: 'Une immersion totale au cœur de l\'action. Capables de franchir des espaces confinés en intérieur (usines, simulateurs, musées) ou de suivre des bolides sur circuit à vitesse extrême avec une dynamique narrative saisissante.',
    badge: 'IMMERSION 140 KM/H',
    icon: 'zap',
    category: 'fpv',
    features: [
      'Vol acrobatique ultra-précis en intérieur comme en extérieur',
      'Poursuites de véhicules à très haute vitesse',
      'Passages millimétrés et plans-séquences continus one-shot',
      'Casque numérique HD basse latence pour cadrage millimétré'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'broadcast-live',
    title: 'Captation en Direct (Broadcast Live)',
    subtitle: 'Flux HD/4K temps réel sans latence pour régies TV',
    description: 'Couverture aérienne en direct pour les grands événements sportifs internationaux, concerts géants et retransmissions télévisées. Une fiabilité broadcast éprouvée sur les plus grands courts du monde.',
    badge: 'DIRECT TV MONDIAL',
    icon: 'radio',
    category: 'broadcast',
    features: [
      'Transmission vidéo sans fil SDI / HDMI non compressée',
      'Intégration directe dans les cars régie broadcast',
      'Retransmission sur des dizaines de chaînes mondiales en simultané',
      'Protocoles de redondance et sécurité éprouvés sur les grands événements'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'publicite-auto',
    title: 'Publicité & Films Institutionnels',
    subtitle: 'Sublimer l\'automobile, l\'architecture et les marques',
    description: 'Mise en valeur esthétique des lignes de carrosserie, des infrastructures d\'entreprises et des paysages. Création de banques d\'images photo et vidéo pour campagnes nationales et internationales.',
    badge: 'SECTEUR AUTOMOBILE & LUXE',
    icon: 'sparkles',
    category: 'auto',
    features: [
      'Banques d\'images 4K / 6K pour campagnes de lancement mondial',
      'Coordination avec agences de communication et régies de tournage',
      'Prises de vues au sol et en l\'air parfaitement raccord',
      'Réactivité maximale pour les plannings serrés'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'secrets-histoire',
    title: 'Secrets d\'Histoire & Châteaux Royaux',
    client: 'France 2 / France Télévisions',
    category: 'cinema',
    categoryLabel: 'Documentaire TV',
    description: 'Survols patrimoniaux d\'exception au lever du jour des plus célèbres châteaux et monuments de France. Mouvements de caméra amples et majestueux respectant l\'intégrité des sites historiques classés.',
    equipment: 'DJI Inspire 2 • Zenmuse X7 Super 35 • ProRes 4444 XQ',
    location: 'Château de Versailles & Vallée de la Loire',
    imageUrl: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1000&auto=format&fit=crop',
    videoBadge: 'Diffusé en Prime Time',
    highlight: 'France Télévisions'
  },
  {
    id: 'roland-garros',
    title: 'Roland-Garros • Direct Broadcast Mondial',
    client: 'Fédération Française de Tennis & Diffuseurs',
    category: 'broadcast',
    categoryLabel: 'Sport & Live Broadcast',
    description: 'Captation aérienne en direct au-dessus des courts légendaires de la Porte d\'Auteuil. Flux vidéo 1080p/4K haute fidélité injecté en direct continu dans la régie centrale pour 150+ chaînes mondiales.',
    equipment: 'DJI Inspire Pro • Émetteur HF Broadcast Teradek • Régie SDI',
    location: 'Stade Roland-Garros, Paris 16e',
    imageUrl: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1000&auto=format&fit=crop',
    videoBadge: 'En Direct Live',
    highlight: 'Roland-Garros'
  },
  {
    id: 'campagne-auto',
    title: 'Campagnes Publicitaires Automobiles',
    client: 'Citroën, Renault & Audi',
    category: 'pub',
    categoryLabel: 'Publicité & Marque',
    description: 'Suivis dynamiques sur routes de montagne et en milieu urbain. Cadrages rasants révélant les lignes aérodynamiques des nouveaux modèles lors de lancements internationaux.',
    equipment: 'DJI Inspire 2 • Zenmuse X7 24mm & 35mm DL Lens • FPV Cinelifter',
    location: 'Pyrénées & Région Parisienne',
    imageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop',
    videoBadge: 'Campagne Mondiale',
    highlight: 'Automobile'
  },
  {
    id: 'fpv-usine-industrie',
    title: 'One-Shot FPV Industriel & Automobile',
    client: 'Grand Constructeur Automobile',
    category: 'fpv',
    categoryLabel: 'Drone FPV One-Shot',
    description: 'Plan-séquence continu spectaculaire traversant les lignes d\'assemblage robotisées, les ateliers de peinture et le simulateur de dynamique des fluides. Zéro coupure, précision chirurgicale.',
    equipment: 'Custom FPV Cinelifter 6S • Caméra Naked Blackmagic 4K',
    location: 'Site Industriel Haute Technologie',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
    videoBadge: 'Plan Séquence 100%',
    highlight: 'Innovation FPV'
  },
  {
    id: 'racines-ailes',
    title: 'Des Racines et des Ailes',
    client: 'France 3',
    category: 'cinema',
    categoryLabel: 'Magazine Patrimoine',
    description: 'Mise en lumière des villages préservés et des paysages côtiers français. La précision des capteurs 6K révèle les textures de pierre et les reflets marins avec une colorimétrie naturelle éclatante.',
    equipment: 'DJI Inspire 2 • Zenmuse X7 • Formats RAW CinemaDNG',
    location: 'Bretagne & Normandie',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
    videoBadge: 'Magazine France 3',
    highlight: 'Patrimoine'
  },
  {
    id: 'salon-bourget',
    title: 'Salon International de l\'Aéronautique du Bourget',
    client: 'SIAE / GIFAS',
    category: 'broadcast',
    categoryLabel: 'Aéronautique & Événementiel',
    description: 'Survol homologué du plus grand salon aérospatial du monde. Captation des démonstrations en vol des avions civils et militaires de pointe devant les délégations internationales.',
    equipment: 'DJI Inspire 2 & Phantom 4 Pro • Protocole Sécurité DGAC Zone Dédiée',
    location: 'Aéroport de Paris-Le Bourget',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop',
    videoBadge: 'Salon Mondial',
    highlight: 'Aéronautique'
  }
];

export const FLEET_DATA: FleetItem[] = [
  {
    id: 'inspire-2-x7',
    name: 'DJI Inspire 2 // Zenmuse X7 Super 35',
    role: 'Vaisseau Amiral • Cinéma, Publicité & Fiction',
    sensor: 'Super 35 (23.5 × 15.7 mm) avec 14 diaphs de dynamique',
    resolution: '6K CinemaDNG RAW (6016×3200) • 5.2K Apple ProRes 4444 XQ',
    formats: ['CinemaDNG RAW 6K', 'Apple ProRes 4444 XQ', 'Apple ProRes 422 HQ', 'H.264 / H.265'],
    speed: 'Vitesse de pointe 94 km/h • Accélération 0-80 km/h en 5 secondes',
    operators: 'Configuration Mono ou Double-Opérateur (Pilote + Cadreur indépendant)',
    scenarios: ['S1 (Hors zone peuplée)', 'S2 (Hors vue directe)', 'S3 (En agglomération / Paris intra-muros)'],
    description: 'Le standard mondial de l\'industrie cinématographique aérienne. Équipé du système de traitement d\'image CineCore 2.1 et d\'objectifs interchangeables DL 16mm, 24mm, 35mm et 50mm en fibre de carbone.',
    imageUrl: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=1000&auto=format&fit=crop',
    badge: 'CINÉMA 6K SUPER 35',
    features: [
      'Double batterie redondante auto-chauffante',
      'Caméra FPV intégrée dédiée pour le pilote pendant que le cadreur vise',
      'Homologué scénario S3 urbain avec système coupe-circuit homologué',
      'Sortie broadcast SDI 1080p60 en temps réel'
    ]
  },
  {
    id: 'fpv-custom-cinelifter',
    name: 'Drone FPV Cinelifter Haute Vitesse',
    role: 'Plans-séquences d\'Action & Poursuites Rapides',
    sensor: 'Capteurs Cinéma 4K/6K stabilisés par gyroscope',
    resolution: 'Jusqu\'en 6K 60fps / 4K 120fps Slow-Motion',
    formats: ['Blackmagic RAW', 'Apple ProRes', 'D-Log M 10-bit'],
    speed: 'Jusqu\'à 140 km/h en vol dynamique instantané',
    operators: 'Pilote Cinéaste FPV au casque numérique HD',
    scenarios: ['Intérieur / Usines / Hangars', 'Circuits & Pistes sécurisées', 'Extérieur S1 & S3'],
    description: 'Conçu sur-mesure pour les plans impossibles. Il se faufile par une fenêtre de véhicule, survole un plateau de tournage en continu ou plonge le long d\'une falaise avec une fluidité organique captivante.',
    imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1000&auto=format&fit=crop',
    badge: '140 KM/H IMMERSIF',
    features: [
      'Retransmission vidéo numérique zéro latence dans le casque du pilote',
      'Protection intégrale des hélices pour tournages sécurisés en intérieur',
      'Suivi de voitures de course et cascades en temps réel',
      'Stabilisation logicielle gyroscopique de niveau hollywoodien (Gyroflow)'
    ]
  },
  {
    id: 'phantom-4-pro',
    name: 'DJI Phantom 4 Pro V2.0',
    role: 'Télévision, Reportage & Déploiement Rapide',
    sensor: 'Capteur 1 pouce CMOS de 20 Mégapixels',
    resolution: '4K à 60 images/seconde à 100 Mb/s',
    formats: ['D-Log 4K', 'H.264', 'H.265', 'RAW DNG Photo 20MP'],
    speed: '72 km/h • Autonomie 30 min par pack',
    operators: 'Mono-opérateur agile et réactif',
    scenarios: ['S1 (Campagne)', 'S3 (Milieu urbain dense homologué)'],
    description: 'L\'outil tout-terrain idéal pour les reportages d\'actualité, l\'événementiel et les tournages où la discrétion et la vitesse de déploiement sont capitales. Obturateur mécanique anti-déformation (rolling shutter éliminé).',
    imageUrl: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1000&auto=format&fit=crop',
    badge: 'AGILE & OBTURATEUR MÉCANIQUE',
    features: [
      'Obturateur mécanique garantissant des photos aériennes d\'une netteté chirurgicale',
      'Détection d\'obstacles multidirectionnelle à 360°',
      'Mise en route opérationnelle en moins de 3 minutes chrono',
      'Homologué DGAC complet pour le survol en agglomération'
    ]
  }
];

export const CLIENT_REFERENCES: ClientReference[] = [
  { name: 'France Télévisions', category: 'Télévision', logoText: 'FRANCE TV', projectSample: 'Secrets d\'Histoire & Des Racines et des Ailes' },
  { name: 'Roland-Garros', category: 'Sport & Live Broadcast', logoText: 'ROLAND-GARROS', projectSample: 'Direct TV Tournoi Officiel' },
  { name: 'Netflix', category: 'Streaming Cinéma', logoText: 'NETFLIX', projectSample: 'Séries & Fictions Originales' },
  { name: 'Arte', category: 'Culture & Documentaire', logoText: 'ARTE', projectSample: 'Documentaires Historiques & Nature' },
  { name: 'Audi', category: 'Automobile', logoText: 'AUDI', projectSample: 'Films de Lancement Gamme e-tron' },
  { name: 'Citroën', category: 'Automobile', logoText: 'CITROËN', projectSample: 'Campagnes Publicitaires Internationales' },
  { name: 'Renault', category: 'Automobile', logoText: 'RENAULT', projectSample: 'Banques d\'images officielles' },
  { name: 'SIAE Bourget', category: 'Aéronautique', logoText: 'LE BOURGET', projectSample: 'Salon International Aérospatial' },
  { name: 'Canal+', category: 'Télévision & Fiction', logoText: 'CANAL+', projectSample: 'Créations Originales' },
  { name: 'MINI', category: 'Automobile', logoText: 'MINI', projectSample: 'Shooting Vidéo Urbain Paris' }
];

export const REGULATION_SCENARIOS: RegulationScenario[] = [
  {
    code: 'S1',
    title: 'Scénario S1 • Hors zone peuplée',
    zone: 'Campagne & Nature',
    description: 'Vol en vue directe du télépilote, à une distance maximale de 200 m et une hauteur jusqu\'à 120 m, hors agglomération et hors rassemblement de personnes.',
    homologation: 'Conforme DGAC'
  },
  {
    code: 'S2',
    title: 'Scénario S2 • Hors vue directe',
    zone: 'Grands espaces & Poursuites',
    description: 'Vol hors vue directe du pilote jusqu\'à 1 000 m de rayon et 50 m de hauteur, idéal pour les suivis de véhicules au long cours en zone dégagée.',
    homologation: 'Conforme DGAC'
  },
  {
    code: 'S3',
    title: 'Scénario S3 • En zone peuplée & Milieu Urbain (Paris)',
    zone: 'Paris Intra-muros & Villes',
    description: 'Vol en agglomération ou à proximité d\'un rassemblement, sous réserve de protocoles préfectoraux stricts, système coupe-circuit homologué et périmètres de sécurité contrôlés.',
    homologation: 'Spécialité AIRbuzz Paris'
  }
];

export const STATS_HIGHLIGHTS = [
  { value: '10+', label: 'Années d\'Expérience', detail: 'Au service du cinéma & des télévisions' },
  { value: '6K', label: 'Résolution Cinéma', detail: 'Apple ProRes 4444 XQ & RAW' },
  { value: '100%', label: 'Conformité DGAC', detail: 'Habilités S1, S2, S3 & Vols de nuit' },
  { value: '140 km/h', label: 'Vitesse Max FPV', detail: 'Pour des poursuites spectaculaires' }
];
