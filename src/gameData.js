export const STORAGE_KEY = 'no_mires_abajo_playstore_v3';

export const CITIES = [
  {
    index: 0,
    flag: '🇦🇷',
    name: { es: 'Buenos Aires', en: 'Buenos Aires' },
    monumentName: { es: 'Obelisco y Puerto Madero', en: 'Obelisk & Puerto Madero' },
    weatherLabel: { es: 'Brisa Nocturna y Reflectores', en: 'Night Breeze & Searchlights' },
    skyTop: '#040a1c',
    skyMid: '#0b1d42',
    skyBot: '#13315c',
    winColor: '#fef08a',
    accentColor: '#38bdf8',
    weather: 'breeze',
    weatherArchetype: 'urban',
    windStrength: 0.42,
    monument: 'obelisco',
  },
  {
    index: 1,
    flag: '🇧🇷',
    name: { es: 'São Paulo', en: 'São Paulo' },
    monumentName: { es: 'Ponte Octávio Frias de Oliveira', en: 'Octávio Frias Cable Bridge' },
    weatherLabel: { es: 'Brasa Nocturna Paulista', en: 'Paulista Warm Night Haze' },
    skyTop: '#12091c',
    skyMid: '#261438',
    skyBot: '#422040',
    winColor: '#fde047',
    accentColor: '#f59e0b',
    weather: 'haze',
    weatherArchetype: 'golden_embers',
    windStrength: 0.49,
    monument: 'sealink',
  },
  {
    index: 2,
    flag: '🇲🇽',
    name: { es: 'CDMX', en: 'Mexico City' },
    monumentName: { es: 'Torre Latinoamericana y El Ángel', en: 'Torre Latinoamericana & The Angel' },
    weatherLabel: { es: 'Polvo Dorado de Altura', en: 'High-Altitude Golden Dust' },
    skyTop: '#140c05',
    skyMid: '#2d1b0b',
    skyBot: '#4a2c11',
    winColor: '#fbbf24',
    accentColor: '#f59e0b',
    weather: 'haze',
    weatherArchetype: 'golden_embers',
    windStrength: 0.56,
    monument: 'angel',
  },
  {
    index: 3,
    flag: '🇺🇸',
    name: { es: 'Nueva York', en: 'New York' },
    monumentName: { es: 'Aguja del Empire State', en: 'Empire State Spire' },
    weatherLabel: { es: 'Reflectores de Manhattan', en: 'Manhattan Sky Searchlights' },
    skyTop: '#040814',
    skyMid: '#0f1b38',
    skyBot: '#1e325c',
    winColor: '#e0f2fe',
    accentColor: '#60a5fa',
    weather: 'steam',
    weatherArchetype: 'urban',
    windStrength: 0.63,
    monument: 'empire',
  },
  {
    index: 4,
    flag: '🇺🇸',
    name: { es: 'Chicago', en: 'Chicago' },
    monumentName: { es: 'Willis Tower (Ciudad del Viento)', en: 'Willis Tower (Windy City)' },
    weatherLabel: { es: 'Ráfagas del Lago Michigan', en: 'Lake Michigan Gusts' },
    skyTop: '#060c1e',
    skyMid: '#132448',
    skyBot: '#1f3a68',
    winColor: '#bae6fd',
    accentColor: '#38bdf8',
    weather: 'gusts',
    weatherArchetype: 'urban',
    windStrength: 0.71,
    monument: 'empire',
  },
  {
    index: 5,
    flag: '🇨🇦',
    name: { es: 'Toronto', en: 'Toronto' },
    monumentName: { es: 'Silueta de la CN Tower', en: 'CN Tower Silhouette' },
    weatherLabel: { es: 'Ventisca Helada de Altura', en: 'High-Altitude Ice Blizzard' },
    skyTop: '#071226',
    skyMid: '#102a4c',
    skyBot: '#1c4472',
    winColor: '#e0f2fe',
    accentColor: '#7dd3fc',
    weather: 'snow',
    weatherArchetype: 'blizzard',
    windStrength: 0.78,
    monument: 'cntower',
  },
  {
    index: 6,
    flag: '🇬🇧',
    name: { es: 'Londres', en: 'London' },
    monumentName: { es: 'Big Ben, London Eye y The Shard', en: 'Big Ben, London Eye & The Shard' },
    weatherLabel: { es: 'Niebla Profunda del Támesis', en: 'Thames Nocturnal Mist' },
    skyTop: '#050a14',
    skyMid: '#0f1e36',
    skyBot: '#1c3456',
    winColor: '#fecaca',
    accentColor: '#38bdf8',
    weather: 'fog',
    weatherArchetype: 'urban',
    windStrength: 0.85,
    monument: 'londoneye',
  },
  {
    index: 7,
    flag: '🇫🇷',
    name: { es: 'París', en: 'Paris' },
    monumentName: { es: 'Torre Eiffel Iluminada', en: 'Illuminated Eiffel Tower' },
    weatherLabel: { es: 'Haces de Luz Nocturnos', en: 'Eiffel Nocturnal Beams' },
    skyTop: '#06091c',
    skyMid: '#121d42',
    skyBot: '#1e3266',
    winColor: '#fde68a',
    accentColor: '#fbbf24',
    weather: 'gusts',
    weatherArchetype: 'urban',
    windStrength: 0.92,
    monument: 'eiffel',
  },
  {
    index: 8,
    flag: '🇪🇸',
    name: { es: 'Madrid', en: 'Madrid' },
    monumentName: { es: 'Cuatro Torres Business Area', en: 'Cuatro Torres Skyline' },
    weatherLabel: { es: 'Ventisca Fría de la Sierra', en: 'Sierra High-Altitude Gale' },
    skyTop: '#081326',
    skyMid: '#14294a',
    skyBot: '#214270',
    winColor: '#bae6fd',
    accentColor: '#38bdf8',
    weather: 'snow',
    weatherArchetype: 'blizzard',
    windStrength: 0.99,
    monument: 'obelisco',
  },
  {
    index: 9,
    flag: '🇩🇪',
    name: { es: 'Berlín', en: 'Berlin' },
    monumentName: { es: 'Torre de TV en Alexanderplatz', en: 'Fernsehturm Alexanderplatz' },
    weatherLabel: { es: 'Ventisca invernal Europea', en: 'European Winter Blizzard' },
    skyTop: '#06101c',
    skyMid: '#122640',
    skyBot: '#1e3e64',
    winColor: '#a5f3fc',
    accentColor: '#22d3ee',
    weather: 'snow',
    weatherArchetype: 'blizzard',
    windStrength: 1.06,
    monument: 'cntower',
  },
  {
    index: 10,
    flag: '🇹🇷',
    name: { es: 'Estambul', en: 'Istanbul' },
    monumentName: { es: 'Puente del Bósforo y Minaretes', en: 'Bosphorus Bridge & Minarets' },
    weatherLabel: { es: 'Brasa Dorada del Estrecho', en: 'Bosphorus Golden Ember Wind' },
    skyTop: '#160b18',
    skyMid: '#31152e',
    skyBot: '#522338',
    winColor: '#fde047',
    accentColor: '#f59e0b',
    weather: 'gusts',
    weatherArchetype: 'golden_embers',
    windStrength: 1.13,
    monument: 'bosphorus',
  },
  {
    index: 11,
    flag: '🇪🇬',
    name: { es: 'El Cairo', en: 'Cairo' },
    monumentName: { es: 'Pirámides de Giza', en: 'Pyramids of Giza' },
    weatherLabel: { es: 'Tormenta de Polvo Dorado', en: 'Golden Desert Dust Storm' },
    skyTop: '#1a0d04',
    skyMid: '#422009',
    skyBot: '#6b3610',
    winColor: '#fed7aa',
    accentColor: '#f97316',
    weather: 'sand',
    weatherArchetype: 'golden_embers',
    windStrength: 1.2,
    monument: 'pyramids',
  },
  {
    index: 12,
    flag: '🇦🇪',
    name: { es: 'Dubái', en: 'Dubai' },
    monumentName: { es: 'Aguja del Burj Khalifa (828m)', en: 'Burj Khalifa Spire (828m)' },
    weatherLabel: { es: 'Brasa Ámbar del Golfo', en: 'Gulf Amber Thermal Dust' },
    skyTop: '#180d04',
    skyMid: '#361f09',
    skyBot: '#593310',
    winColor: '#fde047',
    accentColor: '#f59e0b',
    weather: 'lasers',
    weatherArchetype: 'golden_embers',
    windStrength: 1.28,
    monument: 'burjkhalifa',
  },
  {
    index: 13,
    flag: '🇮🇳',
    name: { es: 'Mumbai', en: 'Mumbai' },
    monumentName: { es: 'Puente Colgante Sea Link', en: 'Bandra-Worli Sea Link' },
    weatherLabel: { es: 'Lluvia Diagonal de Monzón', en: 'Diagonal Monsoon Neon Rain' },
    skyTop: '#0b0620',
    skyMid: '#1c1042',
    skyBot: '#2f1b68',
    winColor: '#fbcfe8',
    accentColor: '#e879f9',
    weather: 'monsoon',
    weatherArchetype: 'cyber_rain',
    windStrength: 1.35,
    monument: 'sealink',
  },
  {
    index: 14,
    flag: '🇹🇭',
    name: { es: 'Bangkok', en: 'Bangkok' },
    monumentName: { es: 'Torre MahaNakhon Pixelada', en: 'MahaNakhon Pixel Tower' },
    weatherLabel: { es: 'Lluvia Eléctrica Tropical', en: 'Tropical Neon Downpour' },
    skyTop: '#0c0622',
    skyMid: '#1e1148',
    skyBot: '#331c6e',
    winColor: '#fde047',
    accentColor: '#ec4899',
    weather: 'lightning',
    weatherArchetype: 'cyber_rain',
    windStrength: 1.42,
    monument: 'empire',
  },
  {
    index: 15,
    flag: '🇸🇬',
    name: { es: 'Singapur', en: 'Singapore' },
    monumentName: { es: '3 Torres Marina Bay Sands', en: 'Marina Bay Sands SkyPark' },
    weatherLabel: { es: 'Lluvia Neón de la Bahía', en: 'Marina Bay Cyber Rain' },
    skyTop: '#04091e',
    skyMid: '#0d1d45',
    skyBot: '#18346e',
    winColor: '#a5f3fc',
    accentColor: '#00f2fe',
    weather: 'lasers',
    weatherArchetype: 'cyber_rain',
    windStrength: 1.5,
    monument: 'marinabay',
  },
  {
    index: 16,
    flag: '🇭🇰',
    name: { es: 'Hong Kong', en: 'Hong Kong' },
    monumentName: { es: 'Bahía Victoria y Bank of China', en: 'Victoria Harbour & Bank of China' },
    weatherLabel: { es: 'Tifón Cyberpunk Neón', en: 'Neon Cyberpunk Typhoon' },
    skyTop: '#040a1c',
    skyMid: '#0c2040',
    skyBot: '#153a66',
    winColor: '#6ee7b7',
    accentColor: '#00f2fe',
    weather: 'typhoon',
    weatherArchetype: 'cyber_rain',
    windStrength: 1.58,
    monument: 'hkharbor',
  },
  {
    index: 17,
    flag: '🇰🇷',
    name: { es: 'Seúl', en: 'Seoul' },
    monumentName: { es: 'Lotte World Tower Cyberpunk', en: 'Lotte World Tower Cyberpunk' },
    weatherLabel: { es: 'Lluvia Neón Cian/Magenta', en: 'Cyan/Magenta Cyber Rain' },
    skyTop: '#050622',
    skyMid: '#12184f',
    skyBot: '#222d7a',
    winColor: '#7dd3fc',
    accentColor: '#f43f5e',
    weather: 'cyber',
    weatherArchetype: 'cyber_rain',
    windStrength: 1.66,
    monument: 'lotte',
  },
  {
    index: 18,
    flag: '🇦🇺',
    name: { es: 'Sídney', en: 'Sydney' },
    monumentName: { es: 'Ópera de Sídney y Harbour Bridge', en: 'Sydney Opera House & Harbour Bridge' },
    weatherLabel: { es: 'Ventisca Austral Oceánica', en: 'Southern Ocean Gale Blizzard' },
    skyTop: '#040e21',
    skyMid: '#0b264f',
    skyBot: '#16427d',
    winColor: '#f1f5f9',
    accentColor: '#38bdf8',
    weather: 'gusts',
    weatherArchetype: 'blizzard',
    windStrength: 1.75,
    monument: 'opera',
  },
  {
    index: 19,
    flag: '🇯🇵',
    name: { es: 'Tokio', en: 'Tokyo' },
    monumentName: { es: 'Shinjuku Neón y Torre de Tokio', en: 'Shinjuku Neon & Tokyo Tower' },
    weatherLabel: { es: 'Tormenta Cyberpunk Final', en: 'Ultimate Cyberpunk Neon Storm' },
    skyTop: '#090420',
    skyMid: '#1b0b45',
    skyBot: '#32146e',
    winColor: '#fda4af',
    accentColor: '#00f2fe',
    weather: 'lightning',
    weatherArchetype: 'cyber_rain',
    windStrength: 1.85,
    monument: 'tokyotower',
  },
];

export const SKINS = [
  {
    id: 'skin_1',
    icon: '🧥',
    unlockLevel: 1,
    unlockCity: 1,
    gemCost: 0,
    name: { es: 'Urbano Callejero', en: 'Street Urban' },
    desc: {
      es: 'Buzo con capucha gris grafito oscuro que flamea con el viento, pantalón cargo negro y botas urbanas.',
      en: 'Dark graphite hoodie fluttering in the wind, black cargo pants and urban boots.',
    },
    hoodieColor: '#334155',
    pantsColor: '#0f172a',
    trimColor: '#94a3b8',
    shoeColor: '#e2e8f0',
    glowColor: null,
    goldTrail: false,
  },
  {
    id: 'skin_2',
    icon: '🏃',
    unlockLevel: 11,
    unlockCity: 3,
    gemCost: 150,
    name: { es: 'Night Runner', en: 'Night Runner' },
    desc: {
      es: 'Rompevientos negro con tiras reflectivas blancas y calzado aerodinámico de alta visibilidad.',
      en: 'Black windbreaker with white reflective strips and high-visibility aerodynamic footwear.',
    },
    hoodieColor: '#111827',
    pantsColor: '#090d16',
    trimColor: '#f8fafc',
    shoeColor: '#38bdf8',
    glowColor: '#e2e8f0',
    goldTrail: false,
  },
  {
    id: 'skin_3',
    icon: '⚡',
    unlockLevel: 21,
    unlockCity: 5,
    gemCost: 300,
    name: { es: 'Infiltrado Táctico', en: 'Tactical Infiltrator' },
    desc: {
      es: 'Campera técnica entallada negro mate con arnés y líneas de neón cian en talones y muñecas.',
      en: 'Matte black fitted tactical jacket with harness and cyan neon lines on heels and wrists.',
    },
    hoodieColor: '#0f172a',
    pantsColor: '#060a12',
    trimColor: '#22d3ee',
    shoeColor: '#06b6d4',
    glowColor: '#22d3ee',
    goldTrail: false,
  },
  {
    id: 'skin_4',
    icon: '🎩',
    unlockLevel: 36,
    unlockCity: 8,
    gemCost: 500,
    name: { es: 'Ilusionista de Altura', en: 'High-Wire Illusionist' },
    desc: {
      es: 'Chaleco sastrero oscuro con detalles púrpura/plata, cinta reactiva al viento y guantes de precisión.',
      en: 'Dark tailored vest with purple/silver accents, wind-reactive headband and precision gloves.',
    },
    hoodieColor: '#1e1b2e',
    pantsColor: '#0d0b14',
    trimColor: '#c084fc',
    shoeColor: '#e2e8f0',
    glowColor: '#a855f7',
    goldTrail: false,
  },
  {
    id: 'skin_5',
    icon: '🥷',
    unlockLevel: 61,
    unlockCity: 13,
    gemCost: 800,
    name: { es: 'Cyber-Shinobi Tokio', en: 'Tokyo Cyber-Shinobi' },
    desc: {
      es: 'Traje técnico oscuro con circuito carmesí luminoso en espalda y botas magnéticas.',
      en: 'Dark technical shinobi suit with glowing crimson spine circuit and magnetic boots.',
    },
    hoodieColor: '#14111a',
    pantsColor: '#09070d',
    trimColor: '#f43f5e',
    shoeColor: '#fb7185',
    glowColor: '#f43f5e',
    goldTrail: false,
  },
  {
    id: 'skin_6',
    icon: '👑',
    unlockLevel: 81,
    unlockCity: 17,
    gemCost: 1200,
    name: { es: 'Leyenda Black & Gold', en: 'Black & Gold Legend' },
    desc: {
      es: 'Traje aerodinámico de fibra de carbono negro profundo con bordes dorados y estela luminosa.',
      en: 'Deep black carbon-fiber aerodynamic suit with bright golden edges and luminous arm trail.',
    },
    hoodieColor: '#09090b',
    pantsColor: '#050507',
    trimColor: '#fde047',
    shoeColor: '#f59e0b',
    glowColor: '#fde047',
    goldTrail: true,
  },
];

export const JUGGLE_PROPS = [
  {
    id: 'balls',
    icon: '🎾',
    mult: 1,
    unlockLevel: 1,
    gemCost: 0,
    name: { es: 'Esferas Cromadas', en: 'Chrome Spheres' },
    color: '#a3e635',
  },
  {
    id: 'torches',
    icon: '🔥',
    mult: 3,
    unlockLevel: 6,
    gemCost: 120,
    name: { es: 'Antorchas de Fuego', en: 'Fire Torches' },
    color: '#f97316',
  },
  {
    id: 'knives',
    icon: '🔪',
    mult: 6,
    unlockLevel: 16,
    gemCost: 260,
    name: { es: 'Cuchillos Tácticos', en: 'Tactical Knives' },
    color: '#cbd5e1',
  },
  {
    id: 'chainsaws',
    icon: '🪚',
    mult: 12,
    unlockLevel: 31,
    gemCost: 480,
    name: { es: 'Motosierras', en: 'Chainsaws' },
    color: '#ef4444',
  },
  {
    id: 'dynamite',
    icon: '🧨',
    mult: 25,
    unlockLevel: 56,
    gemCost: 750,
    name: { es: 'Dinamita Activa', en: 'Active Dynamite' },
    color: '#dc2626',
  },
  {
    id: 'goldbars',
    icon: '🪙',
    mult: 50,
    unlockLevel: 81,
    gemCost: 1100,
    name: { es: 'Lingotes 24K', en: '24K Gold Bars' },
    color: '#fde047',
  },
];

export const GEAR_ITEMS = [
  {
    id: 'pole',
    icon: '⚖️',
    maxLevel: 10,
    baseCost: 140,
    costScale: 1.42,
    statLabel: { es: '-4.8% Gravedad / Nv', en: '-4.8% Gravity / Lvl' },
    name: { es: 'Vara de Inercia', en: 'Inertia Balance Pole' },
    desc: {
      es: 'Aumenta el momento de inercia rotacional, desacelerando la caída gravitatoria lateral.',
      en: 'Increases rotational moment of inertia, slowing down lateral gravitational tipping.',
    },
  },
  {
    id: 'boots',
    icon: '🥾',
    maxLevel: 10,
    baseCost: 160,
    costScale: 1.45,
    statLabel: { es: '-5.2% Viento / Nv', en: '-5.2% Wind / Lvl' },
    name: { es: 'Calzado Magnético', en: 'Magnetic Footwear' },
    desc: {
      es: 'Incrementa la adherencia al cable de acero, reduce el empuje del viento y acelera el paso.',
      en: 'Increases grip on the steel cable, dampens wind gusts and speeds up walking pace.',
    },
  },
  {
    id: 'gloves',
    icon: '🧤',
    maxLevel: 10,
    baseCost: 150,
    costScale: 1.42,
    statLabel: { es: '+1.5% Ventana / Nv', en: '+1.5% Catch Window / Lvl' },
    name: { es: 'Guantes Rítmicos', en: 'Rhythmic Gloves' },
    desc: {
      es: 'Amplía la ventana dorada de captura (catchThreshold) y amortigua el sacudón por fallo.',
      en: 'Widens the golden capture window (catchThreshold) and dampens balance jolts on a miss.',
    },
  },
];

export const ARMORY_ITEMS = GEAR_ITEMS;

export const SEASON_RIVALS = [
  { id: 'r1', name: 'Kaito_Skywalker', flag: '🇯🇵', country: '🇯🇵', baseLp: 14200, lp: 14200, badge: '👑' },
  { id: 'r2', name: 'Elena_Vertigo', flag: '🇪🇸', country: '🇪🇸', baseLp: 11850, lp: 11850, badge: '💎' },
  { id: 'r3', name: 'Marcus_Highwire', flag: '🇺🇸', country: '🇺🇸', baseLp: 9400, lp: 9400, badge: '🔥' },
  { id: 'r4', name: 'Lucas_SP', flag: '🇧🇷', country: '🇧🇷', baseLp: 7200, lp: 7200, badge: '⚡' },
  { id: 'r5', name: 'Valeria_BA', flag: '🇦🇷', country: '🇦🇷', baseLp: 4850, lp: 4850, badge: '🌟' },
  { id: 'r6', name: 'Liam_London', flag: '🇬🇧', country: '🇬🇧', baseLp: 2600, lp: 2600, badge: '🎯' },
  { id: 'r7', name: 'Mateo_CDMX', flag: '🇲🇽', country: '🇲🇽', baseLp: 1150, lp: 1150, badge: '👟' },
];

export const SEASON_REWARD_TIERS = [
  { id: 'tier_1', rankLabel: 'TOP 25', icon: '🥉', requiredLp: 500, gems: 40, coins: 1000, gemsReward: 40, coinsReward: 1000, title: { es: 'Bronce Urbano', en: 'Urban Bronze' } },
  { id: 'tier_2', rankLabel: 'TOP 10', icon: '🥈', requiredLp: 1500, gems: 90, coins: 2500, gemsReward: 90, coinsReward: 2500, title: { es: 'Plata de Altura', en: 'High-Wire Silver' } },
  { id: 'tier_3', rankLabel: 'TOP 5', icon: '🥇', requiredLp: 3500, gems: 180, coins: 6000, gemsReward: 180, coinsReward: 6000, title: { es: 'Oro Acrobático', en: 'Acrobatic Gold' } },
  { id: 'tier_4', rankLabel: 'TOP 3', icon: '💎', requiredLp: 7000, gems: 350, coins: 15000, gemsReward: 350, coinsReward: 15000, title: { es: 'Platino sin Red', en: 'No-Net Platinum' } },
  { id: 'tier_5', rankLabel: 'TOP 1', icon: '👑', requiredLp: 12000, gems: 750, coins: 35000, gemsReward: 750, coinsReward: 35000, title: { es: 'Leyenda Inmortal', en: 'Immortal Legend' } },
];

export const STORE_BUNDLES = [
  {
    id: 'bundle_starter',
    icon: '⚡',
    coinCost: 1500,
    gems: 80,
    coins: 1200,
    leaguePts: 150,
    popular: false,
    tag: '🎁 RECLAMAR',
    name: { es: 'Cofre de Equilibrista', en: 'Tightrope Chest' },
    perks: {
      es: ['+80 💎 Gemas al instante', '+150 🏆 Puntos de Liga', 'Recarga para Gancho Salvavidas'],
      en: ['+80 💎 Instant Gems', '+150 🏆 League Points', 'Grapple Hook Save refill'],
    },
  },
  {
    id: 'bundle_pro',
    icon: '🔥',
    coinCost: 4500,
    gems: 260,
    coins: 4000,
    leaguePts: 500,
    popular: true,
    tag: '⭐ POPULAR',
    unlockProp: 'torches',
    unlockSkin: 'skin_2',
    badge: { es: 'RECOMENDADO', en: 'RECOMMENDED' },
    name: { es: 'Cofre Maestro del Abismo', en: 'Abyss Master Chest' },
    perks: {
      es: [
        '+260 💎 Gemas',
        '🔥 Desbloquea Antorchas de Fuego (x3)',
        '🏃 Desbloquea Aspecto "Night Runner"',
        '+500 🏆 Puntos de Liga',
      ],
      en: [
        '+260 💎 Gems',
        '🔥 Unlocks Fire Torches (x3)',
        '🏃 Unlocks "Night Runner" Skin',
        '+500 🏆 League Points',
      ],
    },
  },
  {
    id: 'bundle_legend',
    icon: '👑',
    coinCost: 12000,
    gems: 800,
    coins: 12000,
    leaguePts: 1500,
    popular: true,
    tag: '👑 ÉLITE',
    bootsBonus: 5,
    unlockProp: 'chainsaws',
    unlockSkin: 'skin_6',
    badge: { es: 'ÉLITE DE TEMPORADA', en: 'SEASON ELITE' },
    name: { es: 'Cofre Leyenda Black & Gold', en: 'Black & Gold Legend Chest' },
    perks: {
      es: [
        '+800 💎 Gemas',
        '🥾 Calzado Magnético +5 Niveles',
        '🪚 Desbloquea Motosierras (x12)',
        '👑 Desbloquea Aspecto "Leyenda Black & Gold"',
        '+1,500 🏆 Puntos de Liga',
      ],
      en: [
        '+800 💎 Gems',
        '🥾 Magnetic Footwear +5 Levels',
        '🪚 Unlocks Chainsaws (x12)',
        '👑 Unlocks "Black & Gold Legend" Skin',
        '+1,500 🏆 League Points',
      ],
    },
  },
];

export const I18N = {
  es: {
    title: 'NO MIRES ABAJO',
    gameTitle: 'NO MIRES ABAJO',
    installApp: '📲 Instalar',
    iosInstallHint:
      'Para instalar en tu dispositivo: tocá el menú del navegador y seleccioná "Agregar a pantalla de inicio".',
    leagueBanner: 'LIGA DE TEMPORADA',
    leagueBannerLabel: '🏆 LIGA DE TEMPORADA:',
    seasonEndsIn: 'Cierre en',
    leaguePointsShort: 'LP',
    multiplier: 'MULTIPLICADOR',
    gems: 'GEMAS',
    left: 'IZQ',
    right: 'DER',
    leftBtn: 'IZQ',
    rightBtn: 'DER',
    holdBalanceTapJuggle: 'EQUILIBRIO / CAPTURA',
    grappleTitle: 'GANCHO SALVAVIDAS',
    grappleCost: 'SALVAR (20 💎)',
    grappleHookTitle: 'GANCHO SALVAVIDAS',
    grappleHookCost: 'SALVAR (20 💎)',
    addJuggle: '+ SUMAR MALABAR',
    citiesBtn: '20 Ciudades',
    armoryBtn: 'Armería',
    shopBtn: 'Cofres',
    pauseBtn: 'PAUSA',
    playNowBtn: '▶ JUGAR / SALTAR AL CABLE',
    mapBtn: '🗺️ Mapa',
    skinsBtn: 'Aspectos',
    gearBtn: '🎒 Armería',
    storeBtn: '🛒 Cofres',
    leagueBtn: '🏆 Liga',
    level: 'Nivel',
    levelWord: 'Nivel',
    cityWord: 'Ciudad',
    windLabel: 'VIENTO',
    windGustAlert: '⚠️ RÁFAGA DE VIENTO',
    nearMissPopup: '⚡ ¡SALVADA AL LÍMITE! +100',
    feverModeBadge: '🔥 MODO FRENESÍ x2',
    perfectCatchLabel: '¡PERFECTO!',
    goodCatchLabel: '¡BIEN!',
    lossModalHeader:
      '🚨 ¡PERDISTE EL EJE DE GRAVEDAD EN EL METRO {meter}m DE {city} (NIVEL {level})!',
    lossModalSub: 'Cámara lenta activada ({seconds}s antes de caer al abismo)...',
    grappleCta: '🪝 DISPARAR GANCHO SALVAVIDAS Y VOLVER AL CABLE (20 💎)',
    rooftopCleared: '🏁 ¡AZOTEA ALCANZADA!',
    levelCleared: '¡AZOTEA ALCANZADA!',
    bossChestTitle: '🎁 ¡COFRE DE JEFE DE CIUDAD DESBLOQUEADO!',
    nextLevel: 'SIGUIENTE NIVEL',
    nextLevelBtn: '▶️ SIGUIENTE NIVEL',
    worldMapTitle: '🗺️ CAMPAÑA MUNDIAL — 20 CIUDADES (100 NIVELES)',
    skinsModalTitle: '🧥 TIENDA DE ASPECTOS URBANOS',
    skinsModalNote:
      'Equipá cualquier aspecto desbloqueado conservando el 100% de tus mejoras de Armería RPG.',
    equipBtn: 'EQUIPAR',
    equippedBadge: '✓ EQUIPADO',
    unlockWithGems: 'Desbloquear ({cost} 💎)',
    lockedAtLevel: 'Nivel {level} o {cost} 💎',
    armoryTitle: 'ARMERÍA RPG DE PRECISIÓN',
    armorySub: 'Mejorá tu equipamiento técnico para dominar las ráfagas y la gravedad',
    maxLevelLabel: 'NIVEL MÁXIMO (10/10)',
    upgradeBtn: 'MEJORAR',
    gearModalTitle: '🎒 ARMERÍA RPG DE PRECISIÓN (NVL 1–10)',
    upgradeCoins: 'Mejorar ({cost} 🪙)',
    upgradeGems: 'Instantáneo (15 💎)',
    maxLevelReached: 'NIVEL MÁXIMO (10/10)',
    leagueModalTitle: 'LIGA DE TEMPORADA — CLASIFICACIÓN MUNDIAL',
    leagueModalSub:
      'Sumá Puntos de Liga (LP) superando niveles y encadenando capturas rítmicas perfectas para ganar Cofres Épicos de Gemas y Monedas.',
    leagueModalDesc:
      'Sumá Puntos de Liga (LP) superando niveles, encadenando capturas rítmicas perfectas y abriendo Cofres de Jefe de Ciudad.',
    yourLeaguePoints: '🏆 Tus Puntos de Liga:',
    claimRewardBtn: '🎁 Reclamar Cofre',
    claimedBadge: '✓ Reclamado',
    shopTitle: 'TIENDA DE COFRES DE TEMPORADA',
    shopSub: 'Obtené Cofres de Gemas y Monedas para desbloquear Aspectos, Objetos y Ganchos Salvavidas.',
    storeModalTitle: '🛒 TIENDA DE COFRES Y EQUIPAMIENTO',
    storeModalSubtitle:
      'Canjeá tus Monedas ganadas en el cable por Cofres de Temporada, Gemas y Objetos Especiales.',
    exchangeCoinsBtn: 'Canjear por {cost} 🪙',
    freeDailyGemsBtn: '🎁 Reclamar +25 💎 de Bonificación Diaria',
    dailyClaimedMsg: '✅ ¡Bonificación acreditada!',
    lobbySubtitle: '📍 Nivel {level}/100 — {flag} {city} ({meters}m)',
    lobbyCitiesBtn: '🗺️ 20 Ciudades (1-100)',
    lobbyGearSkinsBtn: '🎒 Armería y Skins',
    lobbyLeagueBtn: '🏆 Liga de Temporada',
    lobbyPlayCta: '▶️ JUGAR / SALTAR AL CABLE',
    pauseBtnLabel: '⏸️ PAUSA',
    pauseTitle: 'PARTIDA EN PAUSA',
    pauseSub: 'Tomate un respiro sobre el cable antes de continuar hacia la meta.',
    pauseModalTitle: '⏸️ PARTIDA EN PAUSA',
    pauseProgressInfo: '📍 {flag} {city} • Nivel {level} ({meter}m / {target}m)',
    resumeBtn: 'REANUDAR PARTIDA',
    restartBtn: 'REINICIAR NIVEL',
    resumeGameBtn: '▶️ REANUDAR PARTIDA',
    restartLevelBtn: '🔄 REINICIAR NIVEL',
    openGearSkinsFromPauseBtn: '🎒 ABRIR ARMERÍA / CAMBIAR ASPECTO',
    backToLobbyBtn: 'VOLVER AL MENÚ PRINCIPAL',
    mainMenuShortBtn: '🏠 Menú Principal',
    retryFromZeroBtn: '🔄 Reintentar desde 0m',
    fellTitle: '¡PERDISTE EL EQUILIBRIO!',
    fellSub: 'Estabas a pocos metros de alcanzar la azotea de enfrente',
    continueHook: 'USAR GANCHO SALVAVIDAS (20 💎)',
    retryFree: 'REINTENTAR DESDE 0m',
    tabEquipment: '🎒 Armería RPG (1-10)',
    tabSkins: '🧥 Aspectos (6 Skins)',
    youLabel: 'TÚ (Equilibrista)',
  },
  en: {
    title: "DON'T LOOK DOWN",
    gameTitle: "DON'T LOOK DOWN",
    installApp: '📲 Install',
    iosInstallHint:
      'To install on your device: tap the browser menu and select "Add to Home Screen".',
    leagueBanner: 'SEASON LEAGUE',
    leagueBannerLabel: '🏆 SEASON LEAGUE:',
    seasonEndsIn: 'Ends in',
    leaguePointsShort: 'LP',
    multiplier: 'MULTIPLIER',
    gems: 'GEMS',
    left: 'LEFT',
    right: 'RIGHT',
    leftBtn: 'LEFT',
    rightBtn: 'RIGHT',
    holdBalanceTapJuggle: 'BALANCE / CATCH',
    grappleTitle: 'GRAPPLE HOOK SAVE',
    grappleCost: 'SAVE (20 💎)',
    grappleHookTitle: 'GRAPPLE HOOK',
    grappleHookCost: 'SAVE (20 💎)',
    addJuggle: '+ ADD JUGGLE',
    citiesBtn: '20 Cities',
    armoryBtn: 'Armory',
    shopBtn: 'Chests',
    pauseBtn: 'PAUSE',
    playNowBtn: '▶ PLAY / STEP ON THE WIRE',
    mapBtn: '🗺️ Map',
    skinsBtn: 'Skins',
    gearBtn: '🎒 Armory',
    storeBtn: '🛒 Chests',
    leagueBtn: '🏆 League',
    level: 'Level',
    levelWord: 'Level',
    cityWord: 'City',
    windLabel: 'WIND',
    windGustAlert: '⚠️ WIND GUST',
    nearMissPopup: '⚡ EDGE SAVE! +100',
    feverModeBadge: '🔥 FEVER MODE x2',
    perfectCatchLabel: 'PERFECT!',
    goodCatchLabel: 'NICE!',
    lossModalHeader:
      '🚨 YOU LOST YOUR CENTER OF GRAVITY AT METER {meter}m OF {city} (LEVEL {level})!',
    lossModalSub: 'Slow-motion activated ({seconds}s before falling into the abyss)...',
    grappleCta: '🪝 FIRE GRAPPLE HOOK SAVE & RETURN TO WIRE (20 💎)',
    rooftopCleared: '🏁 ROOFTOP REACHED!',
    levelCleared: 'ROOFTOP REACHED!',
    bossChestTitle: '🎁 CITY BOSS CHEST UNLOCKED!',
    nextLevel: 'NEXT LEVEL',
    nextLevelBtn: '▶️ NEXT LEVEL',
    worldMapTitle: '🗺️ WORLD CAMPAIGN — 20 CITIES (100 LEVELS)',
    skinsModalTitle: '🧥 URBAN SKIN SHOP',
    skinsModalNote:
      'Equip any unlocked skin while keeping 100% of your RPG Armory upgrades.',
    equipBtn: 'EQUIP',
    equippedBadge: '✓ EQUIPPED',
    unlockWithGems: 'Unlock ({cost} 💎)',
    lockedAtLevel: 'Level {level} or {cost} 💎',
    armoryTitle: 'PRECISION RPG ARMORY',
    armorySub: 'Upgrade your technical gear to master wind gusts and gravity',
    maxLevelLabel: 'MAX LEVEL (10/10)',
    upgradeBtn: 'UPGRADE',
    gearModalTitle: '🎒 PRECISION RPG ARMORY (LVL 1–10)',
    upgradeCoins: 'Upgrade ({cost} 🪙)',
    upgradeGems: 'Instant (15 💎)',
    maxLevelReached: 'MAX LEVEL (10/10)',
    leagueModalTitle: 'SEASON LEAGUE — GLOBAL LEADERBOARD',
    leagueModalSub:
      'Earn League Points (LP) by clearing levels and chaining rhythmic catches to win Epic Gem & Coin Chests.',
    leagueModalDesc:
      'Earn League Points (LP) by clearing levels, chaining rhythmic catches and unlocking City Boss Chests.',
    yourLeaguePoints: '🏆 Your League Points:',
    claimRewardBtn: '🎁 Claim Chest',
    claimedBadge: '✓ Claimed',
    shopTitle: 'SEASON CHEST SHOP',
    shopSub: 'Claim Gem & Coin Chests to unlock Skins, Juggling Props and Grapple Hook Saves.',
    storeModalTitle: '🛒 CHEST & GEAR SHOP',
    storeModalSubtitle:
      'Exchange Coins earned on the wire for Season Chests, Gems and Special Props.',
    exchangeCoinsBtn: 'Exchange for {cost} 🪙',
    freeDailyGemsBtn: '🎁 Claim +25 💎 Daily Bonus',
    dailyClaimedMsg: '✅ Bonus credited!',
    lobbySubtitle: '📍 Level {level}/100 — {flag} {city} ({meters}m)',
    lobbyCitiesBtn: '🗺️ 20 Cities (1-100)',
    lobbyGearSkinsBtn: '🎒 Armory & Skins',
    lobbyLeagueBtn: '🏆 Season League',
    lobbyPlayCta: '▶️ PLAY / STEP ON THE WIRE',
    pauseBtnLabel: '⏸️ PAUSE',
    pauseTitle: 'GAME PAUSED',
    pauseSub: 'Take a breath on the high wire before continuing to the target roof.',
    pauseModalTitle: '⏸️ GAME PAUSED',
    pauseProgressInfo: '📍 {flag} {city} • Level {level} ({meter}m / {target}m)',
    resumeBtn: 'RESUME GAME',
    restartBtn: 'RESTART LEVEL',
    resumeGameBtn: '▶️ RESUME GAME',
    restartLevelBtn: '🔄 RESTART LEVEL',
    openGearSkinsFromPauseBtn: '🎒 OPEN ARMORY / CHANGE SKIN',
    backToLobbyBtn: 'BACK TO MAIN MENU',
    mainMenuShortBtn: '🏠 Main Menu',
    retryFromZeroBtn: '🔄 Retry from 0m',
    fellTitle: 'YOU LOST YOUR BALANCE!',
    fellSub: 'You were just meters away from reaching the opposite rooftop',
    continueHook: 'USE GRAPPLE HOOK SAVE (20 💎)',
    retryFree: 'RETRY FROM 0m',
    tabEquipment: '🎒 RPG Armory (1-10)',
    tabSkins: '🧥 Skins (6 Outfits)',
    youLabel: 'YOU (Tightrope Walker)',
  },
};

// Normalize CITIES, SKINS, and JUGGLE_PROPS fields for renderer & UI compatibility
for (let i = 0; i < CITIES.length; i++) {
  const c = CITIES[i];
  c.id = c.id || `city_${c.index}`;
  c.landmark = c.landmark || c.monumentName;
  c.accent = c.accent || c.accentColor;
  c.windowColor = c.windowColor || c.winColor;
  c.landmarkType = c.landmarkType || c.monument;
}

const SKIN_BONUS_MULTS = [1, 1.2, 1.5, 2, 3, 5];
for (let i = 0; i < SKINS.length; i++) {
  const s = SKINS[i];
  s.bonusMult = s.bonusMult || SKIN_BONUS_MULTS[i] || 1;
  s.cost = s.cost ?? s.gemCost ?? 0;
  s.currency = s.currency || 'gems';
  s.coatColor = s.coatColor || s.hoodieColor;
}

for (let i = 0; i < JUGGLE_PROPS.length; i++) {
  const p = JUGGLE_PROPS[i];
  p.cost = p.cost ?? p.gemCost ?? 0;
  p.currency = p.currency || 'gems';
  p.primaryColor = p.primaryColor || p.color;
  p.glowColor = p.glowColor || p.color;
}

export function getSeasonTimeRemaining() {
  const now = new Date();
  const endOfMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
    23,
    59,
    59
  );
  const diff = Math.max(0, endOfMonth.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / 1000 / 60) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  return { days, hours, mins, secs };
}

/**
 * Curva de Velocidad de Caminata Progresiva en 5 Fases (Escalado fuerte desde Nivel 4)
 * - Niveles 1 a 3: 1.0x (velocidad base de aprendizaje)
 * - Niveles 4 a 10: escala de 1.25x a 1.45x
 * - Niveles 11 a 25: escala de 1.50x a 1.75x
 * - Niveles 26 a 50: escala de 1.80x a 2.10x
 * - Niveles 51 a 100: escala de 2.15x a 2.60x
 */
export function getWalkSpeedMultiplier(level) {
  const safeLvl = Math.max(1, Math.min(100, level || 1));
  if (safeLvl <= 3) {
    return 1.0;
  }
  if (safeLvl <= 10) {
    return Number((1.25 + ((safeLvl - 4) / 6) * 0.2).toFixed(3));
  }
  if (safeLvl <= 25) {
    return Number((1.5 + ((safeLvl - 11) / 14) * 0.25).toFixed(3));
  }
  if (safeLvl <= 50) {
    return Number((1.8 + ((safeLvl - 26) / 24) * 0.3).toFixed(3));
  }
  return Number((2.15 + ((safeLvl - 51) / 49) * 0.45).toFixed(3));
}

export function getLevelTargetMeters(level) {
  const safeLvl = Math.max(1, Math.min(100, level || 1));
  const walkSpeedMultiplier = getWalkSpeedMultiplier(safeLvl);
  const baseMeters = 100 + (safeLvl - 1) * 5;
  return Math.round(baseMeters * walkSpeedMultiplier);
}

export function getCityForLevel(level) {
  const safeLvl = Math.max(1, Math.min(100, level || 1));
  const idx = Math.min(19, Math.max(0, Math.floor((safeLvl - 1) / 5)));
  return CITIES[idx];
}

export function getLevelConfig(level) {
  const safeLvl = Math.max(1, Math.min(100, level || 1));
  const cityIndex = Math.min(19, Math.max(0, Math.floor((safeLvl - 1) / 5)));
  const city = CITIES[cityIndex];
  const stageInCity = ((safeLvl - 1) % 5) + 1;

  const walkSpeedMultiplier = getWalkSpeedMultiplier(safeLvl);
  const baseWalkSpeed = 5.0;
  const walkSpeed = Number((baseWalkSpeed * walkSpeedMultiplier).toFixed(3));
  const totalDistance = getLevelTargetMeters(safeLvl);

  const difficultyFactor =
    safeLvl < 4 ? 0 : Number((walkSpeedMultiplier * (1 + (safeLvl - 4) * 0.018)).toFixed(3));

  const juggleSpeedMultiplier = Number((walkSpeedMultiplier * 1.15).toFixed(3));
  const juggleBaseSpeed = Number((0.62 * juggleSpeedMultiplier).toFixed(3));
  const catchWindow = Number(
    Math.max(0.14, 0.28 - ((safeLvl - 1) / 99) * 0.14).toFixed(4)
  );

  const windChangeFreq =
    safeLvl < 4
      ? 6.0
      : Number(Math.max(4.5, 6.0 - ((safeLvl - 4) / 96) * 1.5).toFixed(2));

  const windBaseForce = 0.32 + city.windStrength * 0.45 + stageInCity * 0.045;
  const gravityInstability = 1.08 + (safeLvl / 100) * 0.92;
  const defaultObjects = safeLvl <= 15 ? 2 : safeLvl <= 55 ? 3 : 4;

  return {
    level: safeLvl,
    cityIndex,
    city,
    stageInCity,
    walkSpeedMultiplier,
    baseWalkSpeed,
    walkSpeed,
    totalDistance,
    targetMeters: totalDistance,
    targetDistance: totalDistance,
    difficultyFactor,
    juggleSpeedMultiplier,
    juggleBaseSpeed,
    catchWindow,
    gravityFactor: gravityInstability,
    windMax: windBaseForce,
    windChangeFreq,
    windBaseForce,
    gravityInstability,
    defaultObjects,
  };
}

// ============================================================================
// BLOQUE 1: MOTOR DE AUDIO PROCEDURAL (`Web Audio API`) + VIBRACIÓN HÁPTICA MÓVIL
// ============================================================================
const PENTATONIC_SCALE = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];

class ProceduralAudio {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.lastHeartbeat = 0;
    this.noiseBuffer = null;
  }

  get enabled() {
    return !this.muted;
  }

  set enabled(val) {
    this.muted = !val;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    if (this.ctx && !this.noiseBuffer) {
      const sampleRate = this.ctx.sampleRate || 44100;
      const length = Math.floor(sampleRate * 1.1);
      const buffer = this.ctx.createBuffer(1, length, sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < length; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      this.noiseBuffer = buffer;
    }
  }

  /**
   * 1.1: Notas de Malabar por Combo (`playCatchSound(combo, isPerfect)`):
   * Oscilador armónico (`triangle` + `sine` con envolvente ADSR rápida de 0.18s)
   * sobre escala pentatónica [523.25, 587.33, 659.25, 783.99, 880.0, 1046.50] Hz.
   * Si es captura PERFECTA, suma un armónico en la octava superior y vibra 12ms.
   */
  playCatchSound(combo = 1, isPerfect = false) {
    if (isPerfect && typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(12);
    } else if (!isPerfect && typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(8);
    }
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const noteIdx = Math.max(0, (combo - 1) % PENTATONIC_SCALE.length);
    const octaveShift = combo >= 12 ? 1.25 : 1.0;
    const freq = PENTATONIC_SCALE[noteIdx] * octaveShift;

    // Oscilador principal (triangle) + sub-armónico cálido (sine) con ADSR de 0.18s
    const oscTri = this.ctx.createOscillator();
    const oscSine = this.ctx.createOscillator();
    const mainGain = this.ctx.createGain();

    oscTri.type = 'triangle';
    oscSine.type = 'sine';
    oscTri.frequency.setValueAtTime(freq, now);
    oscSine.frequency.setValueAtTime(freq, now);

    mainGain.gain.setValueAtTime(0.001, now);
    mainGain.gain.linearRampToValueAtTime(0.18, now + 0.015);
    mainGain.gain.exponentialRampToValueAtTime(0.06, now + 0.07);
    mainGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    oscTri.connect(mainGain);
    oscSine.connect(mainGain);
    mainGain.connect(this.ctx.destination);

    oscTri.start(now);
    oscSine.start(now);
    oscTri.stop(now + 0.19);
    oscSine.stop(now + 0.19);

    // Armónico brillante en la octava superior si fue captura PERFECTA
    if (isPerfect) {
      const octOsc = this.ctx.createOscillator();
      const octGain = this.ctx.createGain();
      octOsc.type = 'sine';
      octOsc.frequency.setValueAtTime(freq * 2, now);
      octOsc.frequency.exponentialRampToValueAtTime(freq * 2.04, now + 0.18);
      octGain.gain.setValueAtTime(0.001, now);
      octGain.gain.linearRampToValueAtTime(0.14, now + 0.012);
      octGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      octOsc.connect(octGain);
      octGain.connect(this.ctx.destination);
      octOsc.start(now);
      octOsc.stop(now + 0.19);
    }
  }

  playCatch(combo = 1, isPerfect = false) {
    this.playCatchSound(combo, isPerfect);
  }

  /**
   * 1.2a: Sonido de Ráfaga de Viento (`⚠️ RÁFAGA DE VIENTO`):
   * Generador de ruido blanco filtrado (`BiquadFilterNode` bandpass) que simula el silbido del viento en altura.
   */
  playWindGust() {
    if (this.muted) return;
    this.init();
    if (!this.ctx || !this.noiseBuffer) return;

    const now = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.Q.setValueAtTime(6.5, now);
    filter.frequency.setValueAtTime(310, now);
    filter.frequency.exponentialRampToValueAtTime(920, now + 0.42);
    filter.frequency.exponentialRampToValueAtTime(380, now + 0.95);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.22, now + 0.18);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.98);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    src.start(now);
    src.stop(now + 1.0);
  }

  /**
   * 1.2b: Alerta de Inclinación (> 75% del ángulo límite):
   * Emite un latido grave sutil (65 Hz) y una vibración corta (`navigator.vibrate(20)`).
   */
  playHeartbeatIfDanger(timestamp) {
    if (timestamp - this.lastHeartbeat < 420) return;
    this.lastHeartbeat = timestamp;
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(20);
    }
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(65, now);
    osc.frequency.exponentialRampToValueAtTime(42, now + 0.14);
    gain.gain.setValueAtTime(0.24, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.17);
  }

  playNearMissSave() {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([15, 25, 15]);
    }
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const chord = [587.33, 783.99, 1046.5];
    for (let i = 0; i < chord.length; i++) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(chord[i], now + i * 0.045);
      gain.gain.setValueAtTime(0.14, now + i * 0.045);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.045 + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + i * 0.045);
      osc.stop(now + i * 0.045 + 0.23);
    }
  }

  playLevelWin() {
    this.playVictory();
  }

  /**
   * 1.3a: Sonido de Victoria: Acorde mayor ascendente al pisar la azotea de destino.
   */
  playVictory() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    for (let idx = 0; idx < notes.length; idx++) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(notes[idx], now + idx * 0.085);
      gain.gain.setValueAtTime(0.17, now + idx * 0.085);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.085 + 0.38);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.085);
      osc.stop(now + idx * 0.085 + 0.4);
    }
  }

  /**
   * 1.3b: Sonido de Caída: Barrido descendente con eco al caer al vacío.
   */
  playFall() {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([90, 45, 140]);
    }
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // 3 repeticiones de eco descendente
    const delays = [0, 0.18, 0.36];
    const amps = [0.22, 0.11, 0.055];
    for (let i = 0; i < delays.length; i++) {
      const d = delays[i];
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(440 - i * 45, now + d);
      osc.frequency.exponentialRampToValueAtTime(68, now + d + 0.78);
      gain.gain.setValueAtTime(amps[i], now + d);
      gain.gain.exponentialRampToValueAtTime(0.001, now + d + 0.82);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + d);
      osc.stop(now + d + 0.84);
    }
  }

  playGrapple() {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([30, 25, 65]);
    }
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(980, now + 0.3);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.34);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.36);
  }
}

export const soundEngine = new ProceduralAudio();
