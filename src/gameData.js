export const STORAGE_KEY = 'no_mires_abajo_playstore_v3';

export const COUNTRIES_LIST = [
  { code: 'AR', flag: '🇦🇷', name: 'Argentina', label: '🇦🇷 AR (Argentina)' },
  { code: 'UY', flag: '🇺🇾', name: 'Uruguay', label: '🇺🇾 UY (Uruguay)' },
  { code: 'CL', flag: '🇨🇱', name: 'Chile', label: '🇨🇱 CL (Chile)' },
  { code: 'BR', flag: '🇧🇷', name: 'Brasil', label: '🇧🇷 BR (Brasil)' },
  { code: 'PY', flag: '🇵🇾', name: 'Paraguay', label: '🇵🇾 PY (Paraguay)' },
  { code: 'BO', flag: '🇧🇴', name: 'Bolivia', label: '🇧🇴 BO (Bolivia)' },
  { code: 'PE', flag: '🇵🇪', name: 'Perú', label: '🇵🇪 PE (Perú)' },
  { code: 'CO', flag: '🇨🇴', name: 'Colombia', label: '🇨🇴 CO (Colombia)' },
  { code: 'MX', flag: '🇲🇽', name: 'México', label: '🇲🇽 MX (México)' },
  { code: 'ES', flag: '🇪🇸', name: 'España', label: '🇪🇸 ES (España)' },
  { code: 'US', flag: '🇺🇸', name: 'EE.UU.', label: '🇺🇸 US (EE.UU.)' },
  { code: 'IT', flag: '🇮🇹', name: 'Italia', label: '🇮🇹 IT (Italia)' },
  { code: 'GB', flag: '🇬🇧', name: 'Reino Unido', label: '🇬🇧 GB (Reino Unido)' },
  { code: 'JP', flag: '🇯🇵', name: 'Japón', label: '🇯🇵 JP (Japón)' },
];

export function getCountryOption(codeOrFlag) {
  if (!codeOrFlag) return COUNTRIES_LIST[0];
  const found = COUNTRIES_LIST.find(
    (c) => c.code === codeOrFlag || c.flag === codeOrFlag
  );
  return found || COUNTRIES_LIST[0];
}

// ============================================================================
// BLOQUE 5: 20 CIUDADES DE CAMPAÑA CON MONUMENTOS 3D ICÓNICOS EN EL HORIZONTE
// ============================================================================
export const CITIES = [
  {
    index: 0,
    flag: '🇦🇷',
    name: { es: 'Buenos Aires', en: 'Buenos Aires' },
    monumentName: { es: 'Obelisco y Puente de la Mujer', en: 'Obelisk & Puente de la Mujer' },
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
    name: { es: 'Río de Janeiro', en: 'Rio de Janeiro' },
    monumentName: { es: 'Cristo Redentor Iluminado', en: 'Illuminated Christ the Redeemer' },
    weatherLabel: { es: 'Brasa Nocturna Carioca', en: 'Carioca Warm Night Haze' },
    skyTop: '#12091c',
    skyMid: '#261438',
    skyBot: '#422040',
    winColor: '#fde047',
    accentColor: '#4ade80',
    weather: 'haze',
    weatherArchetype: 'golden_embers',
    windStrength: 0.49,
    monument: 'cristo',
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
    monumentName: { es: 'Estatua de la Libertad y Empire State', en: 'Statue of Liberty & Empire State' },
    weatherLabel: { es: 'Reflectores de Manhattan', en: 'Manhattan Sky Searchlights' },
    skyTop: '#040814',
    skyMid: '#0f1b38',
    skyBot: '#1e325c',
    winColor: '#e0f2fe',
    accentColor: '#38bdf8',
    weather: 'steam',
    weatherArchetype: 'urban',
    windStrength: 0.63,
    monument: 'liberty_empire',
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
    monument: 'willis',
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
    monumentName: { es: 'Big Ben y London Eye Giratorio', en: 'Big Ben & Rotating London Eye' },
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
    monumentName: { es: 'Torre Eiffel y Faro Giratorio', en: 'Eiffel Tower & Rotating Beacon' },
    weatherLabel: { es: 'Haces de Luz Ámbar/Dorado', en: 'Amber/Gold Nocturnal Beams' },
    skyTop: '#06091c',
    skyMid: '#121d42',
    skyBot: '#1e3266',
    winColor: '#fde68a',
    accentColor: '#fbbf24',
    weather: 'gusts',
    weatherArchetype: 'golden_embers',
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
    monument: 'cuatrotorres',
  },
  {
    index: 9,
    flag: '🇷🇺',
    name: { es: 'Moscú', en: 'Moscow' },
    monumentName: { es: 'Cúpulas de San Basilio con Estrellas', en: "Saint Basil's Onion Domes" },
    weatherLabel: { es: 'Ventisca Invernal Rusa', en: 'Russian Winter Blizzard' },
    skyTop: '#06101c',
    skyMid: '#122640',
    skyBot: '#1e3e64',
    winColor: '#a5f3fc',
    accentColor: '#f43f5e',
    weather: 'snow',
    weatherArchetype: 'blizzard',
    windStrength: 1.06,
    monument: 'stbasil',
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
    monumentName: { es: 'Las Tres Grandes Pirámides de Giza', en: 'Three Great Pyramids of Giza' },
    weatherLabel: { es: 'Tormenta de Polvo Dorado', en: 'Golden Desert Dust Storm' },
    skyTop: '#1a0d04',
    skyMid: '#422009',
    skyBot: '#6b3610',
    winColor: '#fed7aa',
    accentColor: '#fde047',
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
    accentColor: '#00f2fe',
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
    monument: 'mahanakhon',
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
    monumentName: { es: 'Velas de la Ópera de Sídney', en: 'Sydney Opera House Sails' },
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
    monumentName: { es: 'Torre de Tokio y Arco Torii Luminoso', en: 'Tokyo Tower & Luminous Torii Gate' },
    weatherLabel: { es: 'Tormenta Cyberpunk Final', en: 'Ultimate Cyberpunk Neon Storm' },
    skyTop: '#090420',
    skyMid: '#1b0b45',
    skyBot: '#32146e',
    winColor: '#fda4af',
    accentColor: '#ef4444',
    weather: 'lightning',
    weatherArchetype: 'cyber_rain',
    windStrength: 1.85,
    monument: 'tokyotower',
  },
];

// ============================================================================
// BLOQUE 4: CIUDADES EXCLUSIVAS VIP (PARA JUGADORES CON PASE VIP / COMPRA PRO)
// ============================================================================
export const VIP_CITIES = [
  {
    id: 'vip_dubai',
    index: 20,
    flag: '🇦🇪',
    name: { es: 'Dubái Sky-Bridge VIP', en: 'Dubai Sky-Bridge VIP' },
    desc: {
      es: 'Cruce entre las torres más altas del mundo con tormenta de oro y pago x3.',
      en: 'Crossing between the tallest towers in the world with golden storm & x3 payout.',
    },
    weatherLabel: { es: 'Tormenta de Oro 24K VIP', en: '24K Gold Storm VIP' },
    weatherArchetype: 'golden_embers',
    accentColor: '#fde047',
    winColor: '#fef08a',
    windStrength: 1.25,
    monument: 'burjkhalifa',
    rewardMult: 3,
    gemBonus: 25,
    gemUnlockCost: 350,
    usdPrice: '$1.99 USD',
  },
  {
    id: 'vip_vegas',
    index: 21,
    flag: '🇺🇸',
    name: { es: 'Las Vegas Neon Strip VIP', en: 'Las Vegas Neon Strip VIP' },
    desc: {
      es: 'Luces de casino hiper-brillantes y recompensas triples x3 LP y Gemas.',
      en: 'Hyper-bright casino lights and triple x3 LP & Gems rewards.',
    },
    weatherLabel: { es: 'Lluvia de Neón y Fichas VIP', en: 'Casino Neon Rain VIP' },
    weatherArchetype: 'cyber_rain',
    accentColor: '#f43f5e',
    winColor: '#fde047',
    windStrength: 1.32,
    monument: 'vegas_strip',
    rewardMult: 3,
    gemBonus: 35,
    gemUnlockCost: 400,
    usdPrice: '$2.49 USD',
  },
  {
    id: 'vip_monaco',
    index: 22,
    flag: '🇲🇨',
    name: { es: 'Mónaco Casino Royal VIP', en: 'Monaco Casino Royal VIP' },
    desc: {
      es: 'Noche de gala sobre la bahía de Montecarlo con pago triple de monedas.',
      en: 'Gala night over Monte Carlo bay with triple coin payouts.',
    },
    weatherLabel: { es: 'Destellos Dorados de Gala', en: 'Royal Golden Sparkles' },
    weatherArchetype: 'golden_embers',
    accentColor: '#fbbf24',
    winColor: '#fef9c3',
    windStrength: 1.18,
    monument: 'monaco_casino',
    rewardMult: 3,
    gemBonus: 30,
    gemUnlockCost: 400,
    usdPrice: '$2.49 USD',
  },
  {
    id: 'vip_alps',
    index: 23,
    flag: '🇨🇭',
    name: { es: 'Alpes Suizos Nocturnos VIP', en: 'Swiss Alps Nocturnal VIP' },
    desc: {
      es: 'Cruce extremo entre teleféricos de alta montaña bajo aurora boreal.',
      en: 'Extreme crossing between high-mountain cable cars under the Aurora Borealis.',
    },
    weatherLabel: { es: 'Aurora Boreal y Ventisca Alpina', en: 'Aurora Borealis & Alpine Gale' },
    weatherArchetype: 'blizzard',
    accentColor: '#4ade80',
    winColor: '#a5f3fc',
    windStrength: 1.45,
    monument: 'swiss_alps',
    rewardMult: 3.5,
    gemBonus: 45,
    gemUnlockCost: 450,
    usdPrice: '$2.99 USD',
  },
];

// ============================================================================
// BLOQUE 2: NUEVA CATEGORÍA "VARAS DE EQUILIBRIO (BARRAS)" (MONEDAS Y PAGA)
// ============================================================================
export const BALANCE_POLES = [
  {
    id: 'pole_basic',
    icon: '🦯',
    name: { es: 'Barra de Acero Urbano', en: 'Urban Steel Pole' },
    badge: { es: 'GRATIS • BASE 1.0x', en: 'FREE • BASE 1.0x' },
    desc: {
      es: 'Estabilidad base 1.0x con núcleo láser cian estándar.',
      en: 'Base 1.0x stability with standard cyan laser core.',
    },
    currency: 'free',
    cost: 0,
    gemCost: 0,
    usdPrice: null,
    isPro: false,
    isVipOnly: false,
    gravityReduction: 0,
    stepDamp: 0,
    catchRadiusBonus: 0,
    scoreMult: 1.0,
    coinMult: 1.0,
    noCatchRecoil: false,
    autoSaveFall: false,
    poleScaleX: 1.0,
    coreHex: 0xe0f2fe,
    glowHex: 0x00f2fe,
    tipHex: 0x00f2fe,
    hasGyroRings: false,
  },
  {
    id: 'pole_carbon',
    icon: '⚡',
    name: { es: 'Barra de Fibra de Carbono', en: 'Carbon Fiber Pole' },
    badge: { es: '-18% GRAVEDAD • +LARGO 3D', en: '-18% GRAVITY • +3D LENGTH' },
    desc: {
      es: 'Reduce la gravedad de inclinación un 18% y aumenta el largo visual de la barra en 3D.',
      en: 'Reduces tipping gravity by 18% and extends the 3D pole length.',
    },
    currency: 'coins',
    cost: 14500,
    gemCost: 140,
    usdPrice: null,
    isPro: false,
    isVipOnly: false,
    gravityReduction: 0.18,
    stepDamp: 0.1,
    catchRadiusBonus: 0.05,
    scoreMult: 1.1,
    coinMult: 1.1,
    noCatchRecoil: false,
    autoSaveFall: false,
    poleScaleX: 1.22,
    coreHex: 0xdcfce7,
    glowHex: 0x22d3ee,
    tipHex: 0x4ade80,
    hasGyroRings: false,
  },
  {
    id: 'pole_gyro',
    icon: '🌀',
    name: { es: 'Barra Giroscópica Neón', en: 'Neon Gyroscopic Pole' },
    badge: { es: '-32% INCLINACIÓN • -30% PISADA', en: '-32% TILT • -30% STEP SWAY' },
    desc: {
      es: 'Reduce la inclinación un 32% y amortigua el impacto lateral de las pisadas rápidas un 30%.',
      en: 'Reduces tilt by 32% and dampens fast-step lateral impact by 30%.',
    },
    currency: 'coins',
    cost: 48000,
    gemCost: 290,
    usdPrice: null,
    isPro: false,
    isVipOnly: false,
    gravityReduction: 0.32,
    stepDamp: 0.3,
    catchRadiusBonus: 0.1,
    scoreMult: 1.25,
    coinMult: 1.25,
    noCatchRecoil: false,
    autoSaveFall: false,
    poleScaleX: 1.34,
    coreHex: 0xf3e8ff,
    glowHex: 0xa855f7,
    tipHex: 0x00f2fe,
    hasGyroRings: true,
  },
  {
    id: 'pole_quantum',
    icon: '👑',
    name: { es: '👑 Barra Láser Cuántica', en: '👑 Quantum Laser Pole' },
    badge: {
      es: 'EXCLUSIVA PAGA • -50% GRAVEDAD • +25% ARO • x1.5 PTS',
      en: 'PRO EXCLUSIVE • -50% GRAVITY • +25% RING • x1.5 PTS',
    },
    desc: {
      es: 'Reduce la inclinación un 50%, agranda el aro de captura de malabares un 25% y otorga Multiplicador de Puntos x1.5.',
      en: 'Reduces tilt by 50%, enlarges juggle catch rings by 25% and grants x1.5 Score Multiplier.',
    },
    currency: 'gems_or_usd',
    cost: 450,
    gemCost: 450,
    usdPrice: '$1.99 USD',
    isPro: true,
    isVipOnly: false,
    gravityReduction: 0.5,
    stepDamp: 0.4,
    catchRadiusBonus: 0.25,
    scoreMult: 1.5,
    coinMult: 1.5,
    noCatchRecoil: false,
    autoSaveFall: false,
    poleScaleX: 1.45,
    coreHex: 0xffe4e6,
    glowHex: 0xf43f5e,
    tipHex: 0x00f2fe,
    hasGyroRings: true,
  },
  {
    id: 'pole_imperial',
    icon: '👑',
    name: { es: '👑 Barra Gravitatoria Imperial', en: '👑 Imperial Graviton Pole' },
    badge: {
      es: 'PASE VIP • +65% ESTABILIDAD • CERO RETROCESO • AUTO-SALVADA • x2.0',
      en: 'VIP PASS • +65% STABILITY • ZERO RECOIL • AUTO-SAVE • x2.0',
    },
    desc: {
      es: 'Estabilidad máxima (+65%), anula el retroceso al atrapar esferas, salva automáticamente de la 1ra caída por nivel y otorga Multiplicador x2.0.',
      en: 'Max stability (+65%), zero catch recoil, auto-saves first fall per level and grants x2.0 Multiplier.',
    },
    currency: 'vip_or_usd',
    cost: 900,
    gemCost: 900,
    usdPrice: '$3.99 USD',
    isPro: true,
    isVipOnly: true,
    gravityReduction: 0.65,
    stepDamp: 0.55,
    catchRadiusBonus: 0.3,
    scoreMult: 2.0,
    coinMult: 2.0,
    noCatchRecoil: true,
    autoSaveFall: true,
    poleScaleX: 1.56,
    coreHex: 0xfef9c3,
    glowHex: 0xfde047,
    tipHex: 0xf59e0b,
    hasGyroRings: true,
  },
];

// ============================================================================
// BLOQUE 1: CATÁLOGO UNIFICADO DE LAS 8 SKINS (`SKINS_CATALOG`) CON DATOS VISUALES Y FÍSICOS
// ============================================================================
export const SKINS_CATALOG = {
  urbano: {
    id: 'urbano',
    key: 'urbano',
    legacyId: 'skin_1',
    styleType: 'urbano',
    icon: '🧥',
    currency: 'coins',
    price: 0,
    cost: 0,
    gemCost: 0,
    priceUSD: null,
    usdPrice: null,
    isPro: false,
    isVipOnly: false,
    mult: 1.0,
    bonusMult: 1.0,
    multLabel: 'x1',
    windResist: 0,
    windReduction: 0,
    gravityMod: 1.0,
    gravityReduction: 0,
    catchBonus: 1.0,
    catchWindowBonus: 0,
    recoveryBonus: 0,
    stepDampBonus: 0,
    freeShields: 0,
    accessory: 'capucha_urbana',
    // Colores 3D y materiales
    torsoColor: '#1e293b',
    torsoEmissive: '#0b1829',
    torsoEmissiveIntensity: 0.35,
    limbsColor: '#0f172a',
    limbsEmissive: '#070d19',
    limbsEmissiveIntensity: 0.25,
    neonStripColor: '#38bdf8',
    emissiveIntensity: 1.35,
    shoesColor: '#334155',
    soleColor: '#38bdf8',
    glovesColor: '#334155',
    wristColor: '#38bdf8',
    headColor: '#1e293b',
    headbandColor: '#38bdf8',
    ribbonColor: '#38bdf8',
    metalness: 0.35,
    roughness: 0.55,
    jacketHex: 0x1e293b,
    jacketEmissiveHex: 0x0b1829,
    pantsHex: 0x0f172a,
    bootHex: 0x334155,
    soleHex: 0x38bdf8,
    gloveHex: 0x334155,
    wristHex: 0x38bdf8,
    headHex: 0x1e293b,
    headbandHex: 0x38bdf8,
    ribbonHex: 0x38bdf8,
    dorsalHex: 0x38bdf8,
    rimHex: 0x38bdf8,
    rimStrength: 1.15,
    hoodieColor: '#1e293b',
    pantsColor: '#0f172a',
    trimColor: '#38bdf8',
    shoeColor: '#334155',
    glowColor: '#38bdf8',
    paletteSwatches: ['#1e293b', '#0f172a', '#38bdf8', '#334155'],
    paletteLabel: { es: 'Grafito + Cian Urbano', en: 'Graphite + Urban Cyan' },
    goldTrail: false,
    badge: { es: 'GRATIS POR DEFECTO • MULTI x1', en: 'FREE DEFAULT • x1 MULTI' },
    name: { es: 'Urbano Callejero (x1)', en: 'Street Urban (x1)' },
    desc: {
      es: 'Traje gris grafito (#1e293b), pantalón cargo negro (#0f172a), líneas dorsales cian suave (#38bdf8), botas oscuras y capucha urbana.',
      en: 'Graphite grey suit (#1e293b), black cargo pants (#0f172a), soft cyan dorsal lines (#38bdf8), dark boots and urban hood.',
    },
  },
  night_runner: {
    id: 'night_runner',
    key: 'night_runner',
    legacyId: 'skin_2',
    styleType: 'night_runner',
    icon: '🏃',
    currency: 'coins',
    price: 8500,
    cost: 8500,
    gemCost: 0,
    priceUSD: null,
    usdPrice: null,
    isPro: false,
    isVipOnly: false,
    mult: 1.2,
    bonusMult: 1.2,
    multLabel: 'x1.2',
    windResist: 0.1,
    windReduction: 0.1,
    gravityMod: 0.92,
    gravityReduction: 0.08,
    catchBonus: 1.05,
    catchWindowBonus: 0.05,
    recoveryBonus: 0.1,
    stepDampBonus: 0.08,
    freeShields: 0,
    accessory: 'tiras_reflectivas_blancas',
    torsoColor: '#090d16',
    torsoEmissive: '#1e293b',
    torsoEmissiveIntensity: 0.45,
    limbsColor: '#090d16',
    limbsEmissive: '#111827',
    limbsEmissiveIntensity: 0.35,
    neonStripColor: '#ffffff',
    emissiveIntensity: 2.2,
    shoesColor: '#a3e635',
    soleColor: '#ffffff',
    glovesColor: '#111827',
    wristColor: '#ffffff',
    headColor: '#090d16',
    headbandColor: '#ffffff',
    ribbonColor: '#ffffff',
    metalness: 0.45,
    roughness: 0.35,
    jacketHex: 0x090d16,
    jacketEmissiveHex: 0x1e293b,
    pantsHex: 0x090d16,
    bootHex: 0xa3e635,
    soleHex: 0xffffff,
    gloveHex: 0x111827,
    wristHex: 0xffffff,
    headHex: 0x090d16,
    headbandHex: 0xffffff,
    ribbonHex: 0xffffff,
    dorsalHex: 0xffffff,
    rimHex: 0xa3e635,
    rimStrength: 1.45,
    hoodieColor: '#090d16',
    pantsColor: '#090d16',
    trimColor: '#ffffff',
    shoeColor: '#a3e635',
    glowColor: '#a3e635',
    paletteSwatches: ['#090d16', '#ffffff', '#a3e635'],
    paletteLabel: { es: 'Reflectivo Blanco + Lima Flúor', en: 'Reflective White + Fluor Lime' },
    goldTrail: false,
    badge: {
      es: 'MULTI x1.2 • -10% VIENTO • -8% GRAVEDAD • +5% CAPTURA',
      en: 'x1.2 MULTI • -10% WIND • -8% GRAVITY • +5% CATCH',
    },
    name: { es: 'Night Runner (x1.2)', en: 'Night Runner (x1.2)' },
    desc: {
      es: 'Rompevientos negro azabache (#090d16), tiras reflectivas blancas puras ultra-brillantes (#ffffff) en espalda, brazos y piernas, zapatillas verde lima flúor (#a3e635) y vincha blanca.',
      en: 'Jet-black windbreaker (#090d16), ultra-bright white reflective strips (#ffffff) on back, arms & legs, fluor lime sneakers (#a3e635) and white headband.',
    },
  },
  infiltrado: {
    id: 'infiltrado',
    key: 'infiltrado',
    legacyId: 'skin_3',
    styleType: 'infiltrado',
    icon: '⚡',
    currency: 'coins',
    price: 25000,
    cost: 25000,
    gemCost: 0,
    priceUSD: null,
    usdPrice: null,
    isPro: false,
    isVipOnly: false,
    mult: 1.5,
    bonusMult: 1.5,
    multLabel: 'x1.5',
    windResist: 0.2,
    windReduction: 0.2,
    gravityMod: 0.88,
    gravityReduction: 0.12,
    catchBonus: 1.1,
    catchWindowBonus: 0.1,
    recoveryBonus: 0.12,
    stepDampBonus: 0.15,
    freeShields: 0,
    accessory: 'arnes_x_tactico_cian',
    torsoColor: '#05070b',
    torsoEmissive: '#003554',
    torsoEmissiveIntensity: 0.65,
    limbsColor: '#05070b',
    limbsEmissive: '#00243d',
    limbsEmissiveIntensity: 0.5,
    neonStripColor: '#00f2fe',
    emissiveIntensity: 2.5,
    shoesColor: '#081426',
    soleColor: '#00f2fe',
    glovesColor: '#081426',
    wristColor: '#00f2fe',
    headColor: '#05070b',
    headbandColor: '#00f2fe',
    ribbonColor: '#00f2fe',
    metalness: 0.6,
    roughness: 0.3,
    jacketHex: 0x05070b,
    jacketEmissiveHex: 0x003554,
    pantsHex: 0x05070b,
    bootHex: 0x081426,
    soleHex: 0x00f2fe,
    gloveHex: 0x081426,
    wristHex: 0x00f2fe,
    headHex: 0x05070b,
    headbandHex: 0x00f2fe,
    ribbonHex: 0x00f2fe,
    dorsalHex: 0x00f2fe,
    rimHex: 0x00f2fe,
    rimStrength: 1.6,
    hoodieColor: '#05070b',
    pantsColor: '#05070b',
    trimColor: '#00f2fe',
    shoeColor: '#00f2fe',
    glowColor: '#00f2fe',
    paletteSwatches: ['#05070b', '#00f2fe', '#0284c7'],
    paletteLabel: { es: 'Arnés Táctico X + Neón Cian', en: 'Tactical X-Harness + Cyan Neon' },
    goldTrail: false,
    badge: {
      es: 'MULTI x1.5 • -20% VIENTO • -12% GRAVEDAD • +10% CAPTURA',
      en: 'x1.5 MULTI • -20% WIND • -12% GRAVITY • +10% CATCH',
    },
    name: { es: 'Infiltrado Táctico (x1.5)', en: 'Tactical Infiltrator (x1.5)' },
    desc: {
      es: 'Traje táctico negro mate (#05070b), arnés cruzado en X en la espalda de neón cian intenso (#00f2fe), hombreras tácticas, visor nocturno cian y talones/muñecas cian luminosos.',
      en: 'Matte black tactical suit (#05070b), intense cyan neon X-harness (#00f2fe) on the back, tactical shoulder pads, cyan night visor and glowing cyan heels/wrists.',
    },
  },
  ilusionista: {
    id: 'ilusionista',
    key: 'ilusionista',
    legacyId: 'skin_4',
    styleType: 'ilusionista',
    icon: '🎩',
    currency: 'coins',
    price: 60000,
    cost: 60000,
    gemCost: 0,
    priceUSD: null,
    usdPrice: null,
    isPro: false,
    isVipOnly: false,
    mult: 2.0,
    bonusMult: 2.0,
    multLabel: 'x2',
    windResist: 0.25,
    windReduction: 0.25,
    gravityMod: 0.85,
    gravityReduction: 0.15,
    catchBonus: 1.25,
    catchWindowBonus: 0.25,
    recoveryBonus: 0.15,
    stepDampBonus: 0.2,
    freeShields: 0,
    accessory: 'chaleco_purpura_guantes_plata',
    torsoColor: '#2e1065',
    torsoEmissive: '#581c87',
    torsoEmissiveIntensity: 0.85,
    limbsColor: '#1e0a45',
    limbsEmissive: '#3b0764',
    limbsEmissiveIntensity: 0.65,
    neonStripColor: '#c084fc',
    emissiveIntensity: 2.4,
    shoesColor: '#2e1065',
    soleColor: '#c084fc',
    glovesColor: '#f8fafc',
    wristColor: '#f8fafc',
    headColor: '#2e1065',
    headbandColor: '#f8fafc',
    ribbonColor: '#c084fc',
    metalness: 0.55,
    roughness: 0.28,
    jacketHex: 0x2e1065,
    jacketEmissiveHex: 0x581c87,
    pantsHex: 0x1e0a45,
    bootHex: 0x2e1065,
    soleHex: 0xc084fc,
    gloveHex: 0xf8fafc,
    wristHex: 0xf8fafc,
    headHex: 0x2e1065,
    headbandHex: 0xf8fafc,
    ribbonHex: 0xc084fc,
    dorsalHex: 0xc084fc,
    rimHex: 0xc084fc,
    rimStrength: 1.65,
    hoodieColor: '#2e1065',
    pantsColor: '#1e0a45',
    trimColor: '#c084fc',
    shoeColor: '#c084fc',
    glowColor: '#c084fc',
    paletteSwatches: ['#2e1065', '#c084fc', '#f8fafc', '#a855f7'],
    paletteLabel: { es: 'Púrpura Imperial + Guantes Plata', en: 'Imperial Purple + Silver Gloves' },
    goldTrail: false,
    badge: {
      es: 'MULTI x2.0 • -25% VIENTO • -15% GRAVEDAD • +25% CAPTURA',
      en: 'x2.0 MULTI • -25% WIND • -15% GRAVITY • +25% CATCH',
    },
    name: { es: 'Ilusionista de Altura (x2)', en: 'High-Wire Illusionist (x2)' },
    desc: {
      es: 'Chaleco sastrero púrpura imperial oscuro (#2e1065), líneas y circuito dorsal en violeta neón (#c084fc) y plata (#f8fafc), cinta larga violeta al viento y guantes blancos/plateados brillantes en las manos.',
      en: 'Dark imperial purple tailored vest (#2e1065), neon violet (#c084fc) & silver (#f8fafc) dorsal circuit, long violet wind ribbon and bright silver/white gloves.',
    },
  },
  shinobi: {
    id: 'shinobi',
    key: 'shinobi',
    legacyId: 'skin_5',
    styleType: 'shinobi',
    icon: '🥷',
    currency: 'coins',
    price: 135000,
    cost: 135000,
    gemCost: 0,
    priceUSD: null,
    usdPrice: null,
    isPro: false,
    isVipOnly: false,
    mult: 3.0,
    bonusMult: 3.0,
    multLabel: 'x3',
    windResist: 0.35,
    windReduction: 0.35,
    gravityMod: 0.65,
    gravityReduction: 0.35,
    catchBonus: 1.3,
    catchWindowBonus: 0.3,
    recoveryBonus: 0.2,
    stepDampBonus: 0.35,
    freeShields: 0,
    accessory: 'single_katana_3d',
    torsoColor: '#18060c',
    torsoEmissive: '#4c0519',
    torsoEmissiveIntensity: 0.85,
    limbsColor: '#120409',
    limbsEmissive: '#3b0413',
    limbsEmissiveIntensity: 0.65,
    neonStripColor: '#ff0055',
    emissiveIntensity: 2.8,
    shoesColor: '#ef4444',
    soleColor: '#ff0055',
    glovesColor: '#1f0810',
    wristColor: '#ff0055',
    headColor: '#18060c',
    headbandColor: '#ff0055',
    ribbonColor: '#ff0055',
    metalness: 0.65,
    roughness: 0.25,
    jacketHex: 0x18060c,
    jacketEmissiveHex: 0x4c0519,
    pantsHex: 0x120409,
    bootHex: 0xef4444,
    soleHex: 0xff0055,
    gloveHex: 0x1f0810,
    wristHex: 0xff0055,
    headHex: 0x18060c,
    headbandHex: 0xff0055,
    ribbonHex: 0xff0055,
    dorsalHex: 0xff0055,
    rimHex: 0xff0055,
    rimStrength: 1.75,
    hoodieColor: '#18060c',
    pantsColor: '#120409',
    trimColor: '#ff0055',
    shoeColor: '#ef4444',
    glowColor: '#ff0055',
    paletteSwatches: ['#18060c', '#ff0055', '#ef4444', '#fbbf24'],
    paletteLabel: { es: 'Carmesí Cyber + 1 Katana 3D', en: 'Cyber Crimson + 1 Back Katana 3D' },
    goldTrail: false,
    badge: {
      es: 'MULTI x3.0 • -35% VIENTO • -35% GRAVEDAD • +30% CAPTURA',
      en: 'x3.0 MULTI • -35% WIND • -35% GRAVITY • +30% CATCH',
    },
    name: { es: 'Cyber-Shinobi Tokio (x3)', en: 'Cyber-Shinobi Tokyo (x3)' },
    desc: {
      es: 'Armadura ninja negra/carmesí (#18060c), circuito dorsal rojo láser incandescente (#ff0055), 1 Katana 3D cruzada en la espalda con vaina negra y empuñadura roja, bufanda roja larga al viento y botas magnéticas rojas (#ef4444).',
      en: 'Black/crimson ninja armor (#18060c), glowing laser-red dorsal circuit (#ff0055), 1 3D Katana crossed on the back with black scabbard & red hilt, long red scarf and red magnetic boots (#ef4444).',
    },
  },
  ronin_gold: {
    id: 'ronin_gold',
    key: 'ronin_gold',
    legacyId: 'skin_6',
    styleType: 'ronin_gold',
    icon: '⚔️',
    currency: 'usd',
    price: 450,
    cost: 450,
    gemCost: 450,
    priceUSD: '$1.99 USD',
    usdPrice: '$1.99 USD',
    isPro: true,
    isVipOnly: false,
    proTag: { es: '👑 EXCLUSIVO PRO', en: '👑 PRO EXCLUSIVE' },
    mult: 4.0,
    bonusMult: 4.0,
    multLabel: 'x4',
    windResist: 0.5,
    windReduction: 0.5,
    gravityMod: 0.6,
    gravityReduction: 0.4,
    catchBonus: 1.35,
    catchWindowBonus: 0.35,
    recoveryBonus: 0.25,
    stepDampBonus: 0.4,
    freeShields: 0,
    accessory: 'dual_gold_katanas_samurai_shoulders',
    torsoColor: '#0c0a09',
    torsoEmissive: '#78350f',
    torsoEmissiveIntensity: 0.9,
    limbsColor: '#0c0a09',
    limbsEmissive: '#451a03',
    limbsEmissiveIntensity: 0.7,
    neonStripColor: '#f59e0b',
    emissiveIntensity: 2.6,
    shoesColor: '#f59e0b',
    soleColor: '#fef08a',
    glovesColor: '#1c1917',
    wristColor: '#f59e0b',
    headColor: '#0c0a09',
    headbandColor: '#f59e0b',
    ribbonColor: '#fbbf24',
    metalness: 0.82,
    roughness: 0.2,
    jacketHex: 0x0c0a09,
    jacketEmissiveHex: 0x78350f,
    pantsHex: 0x0c0a09,
    bootHex: 0xf59e0b,
    soleHex: 0xfef08a,
    gloveHex: 0x1c1917,
    wristHex: 0xf59e0b,
    headHex: 0x0c0a09,
    headbandHex: 0xf59e0b,
    ribbonHex: 0xfbbf24,
    dorsalHex: 0xf59e0b,
    rimHex: 0xf59e0b,
    rimStrength: 1.85,
    hoodieColor: '#0c0a09',
    pantsColor: '#0c0a09',
    trimColor: '#f59e0b',
    shoeColor: '#f59e0b',
    glowColor: '#f59e0b',
    paletteSwatches: ['#0c0a09', '#f59e0b', '#fbbf24', '#fef08a'],
    paletteLabel: { es: 'Laca Negra + 2 Katanas Oro', en: 'Black Lacquer + Dual Gold Katanas' },
    goldTrail: false,
    badge: {
      es: '👑 EXCLUSIVO PRO • MULTI x4 • -50% VIENTO • -40% GRAVEDAD • +35% CAPTURA',
      en: '👑 PRO EXCLUSIVE • x4 MULTI • -50% WIND • -40% GRAVITY • +35% CATCH',
    },
    name: {
      es: '👑 Ronin Imperial Dorado (x4)',
      en: '👑 Golden Imperial Ronin (x4)',
    },
    desc: {
      es: 'Armadura samurái negra laqueada (#0c0a09) con placas y bordes de oro radiante (#f59e0b), hombreras samurái 3D doradas, 2 Katanas Doradas cruzadas en X en la espalda y botas doradas.',
      en: 'Black lacquered samurai armor (#0c0a09) with radiant gold plates (#f59e0b), 3D golden samurai shoulder armor, 2 Golden Katanas crossed in X on the back and golden boots.',
    },
  },
  quantum_specter: {
    id: 'quantum_specter',
    key: 'quantum_specter',
    legacyId: 'skin_7',
    styleType: 'quantum_specter',
    icon: '🌌',
    currency: 'usd',
    price: 680,
    cost: 680,
    gemCost: 680,
    priceUSD: '$2.99 USD',
    usdPrice: '$2.99 USD',
    isPro: true,
    isVipOnly: false,
    proTag: { es: '👑 EXCLUSIVO PRO', en: '👑 PRO EXCLUSIVE' },
    mult: 5.0,
    bonusMult: 5.0,
    multLabel: 'x5',
    windResist: 0.6,
    windReduction: 0.6,
    gravityMod: 0.55,
    gravityReduction: 0.45,
    catchBonus: 1.5,
    catchWindowBonus: 0.5,
    recoveryBonus: 0.3,
    stepDampBonus: 0.45,
    freeShields: 0,
    accessory: 'quantum_halo_3d',
    torsoColor: '#0284c7',
    torsoEmissive: '#00f2fe',
    torsoEmissiveIntensity: 1.35,
    limbsColor: '#0369a1',
    limbsEmissive: '#00f2fe',
    limbsEmissiveIntensity: 1.15,
    neonStripColor: '#00f2fe',
    emissiveIntensity: 3.2,
    shoesColor: '#00f2fe',
    soleColor: '#ffffff',
    glovesColor: '#00f2fe',
    wristColor: '#ffffff',
    headColor: '#0284c7',
    headbandColor: '#ffffff',
    ribbonColor: '#00f2fe',
    metalness: 0.78,
    roughness: 0.16,
    jacketHex: 0x0284c7,
    jacketEmissiveHex: 0x00f2fe,
    pantsHex: 0x0369a1,
    bootHex: 0x00f2fe,
    soleHex: 0xffffff,
    gloveHex: 0x00f2fe,
    wristHex: 0xffffff,
    headHex: 0x0284c7,
    headbandHex: 0xffffff,
    ribbonHex: 0x00f2fe,
    dorsalHex: 0x00f2fe,
    rimHex: 0x00f2fe,
    rimStrength: 1.95,
    hoodieColor: '#0284c7',
    pantsColor: '#0369a1',
    trimColor: '#00f2fe',
    shoeColor: '#00f2fe',
    glowColor: '#00f2fe',
    paletteSwatches: ['#0284c7', '#00f2fe', '#38bdf8', '#ffffff'],
    paletteLabel: { es: 'Plasma Cian + Halo Holográfico 3D', en: 'Cyan Plasma + 3D Holographic Halo' },
    goldTrail: false,
    badge: {
      es: '👑 EXCLUSIVO PRO • MULTI x5 • -60% VIENTO • IMÁN MALABARES (+50% ARO)',
      en: '👑 PRO EXCLUSIVE • x5 MULTI • -60% WIND • JUGGLE MAGNET (+50% RING)',
    },
    name: {
      es: '👑 Espectro Cuántico (x5)',
      en: '👑 Quantum Specter (x5)',
    },
    desc: {
      es: 'Cuerpo cibernético translúcido de energía azul eléctrica (#0284c7) y plasma cian incandescente (#00f2fe), anillo/halo holográfico 3D flotando detrás de la espalda, manos y pies de plasma puro.',
      en: 'Translucent cybernetic body of electric blue energy (#0284c7) & incandescent cyan plasma (#00f2fe), 3D holographic halo floating behind the back, pure plasma hands and feet.',
    },
  },
  immortal_legend: {
    id: 'immortal_legend',
    key: 'immortal_legend',
    legacyId: 'skin_8',
    styleType: 'immortal_legend',
    icon: '👑',
    currency: 'usd',
    price: 1100,
    cost: 1100,
    gemCost: 1100,
    priceUSD: '$4.99 USD',
    usdPrice: '$4.99 USD',
    isPro: true,
    isVipOnly: true,
    proTag: { es: '👑 EXCLUSIVO PRO / VIP', en: '👑 PRO / VIP EXCLUSIVE' },
    mult: 8.0,
    bonusMult: 8.0,
    multLabel: 'x8',
    windResist: 0.7,
    windReduction: 0.7,
    gravityMod: 0.45,
    gravityReduction: 0.55,
    catchBonus: 1.6,
    catchWindowBonus: 0.6,
    recoveryBonus: 0.4,
    stepDampBonus: 0.55,
    freeShields: 1,
    accessory: 'immortal_crown_3d_gold_trail',
    torsoColor: '#fbbf24',
    torsoEmissive: '#f59e0b',
    torsoEmissiveIntensity: 1.45,
    limbsColor: '#fbbf24',
    limbsEmissive: '#d97706',
    limbsEmissiveIntensity: 1.25,
    neonStripColor: '#fef08a',
    emissiveIntensity: 3.4,
    shoesColor: '#fef08a',
    soleColor: '#ffffff',
    glovesColor: '#fef08a',
    wristColor: '#ffffff',
    headColor: '#fbbf24',
    headbandColor: '#fef08a',
    ribbonColor: '#fef08a',
    metalness: 0.95,
    roughness: 0.15,
    jacketHex: 0xfbbf24,
    jacketEmissiveHex: 0xf59e0b,
    pantsHex: 0xfbbf24,
    bootHex: 0xfef08a,
    soleHex: 0xffffff,
    gloveHex: 0xfef08a,
    wristHex: 0xffffff,
    headHex: 0xfbbf24,
    headbandHex: 0xfef08a,
    ribbonHex: 0xfef08a,
    dorsalHex: 0xfef08a,
    rimHex: 0xfef08a,
    rimStrength: 2.1,
    hoodieColor: '#fbbf24',
    pantsColor: '#f59e0b',
    trimColor: '#fef08a',
    shoeColor: '#fef08a',
    glowColor: '#fde047',
    paletteSwatches: ['#fbbf24', '#fef08a', '#f59e0b', '#ffffff'],
    paletteLabel: { es: 'Oro Líquido 24K + Corona Solar 3D', en: '24K Liquid Gold + 3D Solar Crown' },
    goldTrail: true,
    badge: {
      es: '👑 EXCLUSIVO PRO / VIP • MULTI x8 • -70% VIENTO • -55% GRAVEDAD • +1 ESCUDO GRATIS',
      en: '👑 PRO / VIP EXCLUSIVE • x8 MULTI • -70% WIND • -55% GRAVITY • +1 FREE SHIELD',
    },
    name: {
      es: '👑 Leyenda Dorada Inmortal (x8)',
      en: '👑 Immortal Golden Legend (x8)',
    },
    desc: {
      es: 'Cuerpo entero bañado en oro líquido metálico brillante (#fbbf24 / #fef08a), corona/halo solar 3D sobre la cabeza, hombreras imperiales, cinta de fuego dorado, estela continua de partículas de oro y 1 Escudo Anti-Caída gratis por nivel.',
      en: 'Full body bathed in radiant metallic liquid gold (#fbbf24 / #fef08a), 3D solar crown/halo above the head, imperial shoulders, golden fire ribbon, continuous gold particle trail & 1 free Anti-Fall Shield per level.',
    },
  },
};

export const SKIN_VISUALS = SKINS_CATALOG;

const SKIN_ALIAS_MAP = {
  default: 'urbano',
  urbano: 'urbano',
  skin_1: 'urbano',
  night_runner: 'night_runner',
  skin_2: 'night_runner',
  infiltrado: 'infiltrado',
  skin_3: 'infiltrado',
  ilusionista: 'ilusionista',
  skin_4: 'ilusionista',
  shinobi: 'shinobi',
  skin_5: 'shinobi',
  ronin_gold: 'ronin_gold',
  skin_6: 'ronin_gold',
  quantum_specter: 'quantum_specter',
  skin_7: 'quantum_specter',
  samurai: 'ronin_gold',
  leyenda_dorada: 'immortal_legend',
  immortal_legend: 'immortal_legend',
  skin_8: 'immortal_legend',
};

export function resolveSkinKey(skinId) {
  if (!skinId || typeof skinId !== 'string') return 'urbano';
  const mapped = SKIN_ALIAS_MAP[skinId] || skinId;
  return SKINS_CATALOG[mapped] ? mapped : 'urbano';
}

export const getSafeSkin = (id) => {
  const safeId = typeof id === 'string' ? SKIN_ALIAS_MAP[id] || id : 'urbano';
  const found =
    SKINS_CATALOG[safeId] ||
    SKINS_CATALOG[id] ||
    Object.values(SKINS_CATALOG).find((s) => s.id === id || s.legacyId === id) ||
    SKINS_CATALOG.urbano ||
    Object.values(SKINS_CATALOG)[0];
  return found ? { ...found, visual: found } : { id: 'urbano', key: 'urbano', mult: 1, bonusMult: 1 };
};

export function resolveSkinVisual(skinId) {
  return getSafeSkin(skinId);
}

export const SKINS = Object.values(SKINS_CATALOG).map((sk) => ({
  ...sk,
  visual: sk,
}));

export function resolveSkinObject(skinId) {
  return getSafeSkin(skinId);
}

// ============================================================================
// BLOQUE 3.2: SECCIÓN "🚀 MULTIPLICADORES PERMANENTES"
// ============================================================================
export const PERMANENT_MULTIPLIERS = [
  {
    id: 'mult_x2_coins',
    icon: '🪙',
    name: {
      es: 'Multiplicador x2 de Monedas',
      en: 'x2 Permanent Coin Multiplier',
    },
    badge: { es: 'MONEDAS DEL JUEGO • x2 🪙', en: 'IN-GAME COINS • x2 🪙' },
    desc: {
      es: 'Duplica permanentemente todas las monedas ganadas en malabares y al cruzar azoteas.',
      en: 'Permanently doubles all coins earned from juggling and clearing rooftops.',
    },
    currency: 'coins',
    cost: 38000,
    gemCost: 260,
    usdPrice: null,
    isPro: false,
    isVipOnly: false,
    coinMult: 2,
    lpMult: 1,
  },
  {
    id: 'mult_x3_pro',
    icon: '👑',
    name: {
      es: '👑 Multiplicador x3 Pro de LP y Monedas',
      en: '👑 x3 Pro LP & Coin Multiplier',
    },
    badge: { es: 'EXCLUSIVO PAGA / PASE VIP • x3 LP Y 🪙', en: 'PRO / VIP PASS • x3 LP & 🪙' },
    desc: {
      es: 'Triplica permanentemente tus Puntos de Liga (LP) para dominar el Ranking Online y tus Monedas.',
      en: 'Permanently triples your League Points (LP) for the Online Leaderboard and your Coins.',
    },
    currency: 'vip_or_usd',
    cost: 600,
    gemCost: 600,
    usdPrice: '$2.99 USD',
    isPro: true,
    isVipOnly: true,
    coinMult: 3,
    lpMult: 3,
  },
  {
    id: 'mult_x5_ultra',
    icon: '🚀',
    name: {
      es: '👑 Multiplicador x5 Ultra de LP y Monedas',
      en: '👑 x5 Ultra LP & Coin Multiplier',
    },
    badge: { es: 'EXCLUSIVO PACK PRO • x5 LP Y 🪙', en: 'PRO PACK EXCLUSIVE • x5 LP & 🪙' },
    desc: {
      es: 'Potencia máxima x5 en Puntos de Liga Online y Monedas en todas las ciudades y niveles.',
      en: 'Maximum x5 boost to Online League Points and Coins across all cities and levels.',
    },
    currency: 'gems_or_usd',
    cost: 1200,
    gemCost: 1200,
    usdPrice: '$5.99 USD',
    isPro: true,
    isVipOnly: false,
    coinMult: 5,
    lpMult: 5,
  },
];

export const JUGGLE_PROPS = [
  {
    id: 'balls',
    icon: '🎾',
    mult: 1,
    unlockLevel: 1,
    currency: 'coins',
    cost: 0,
    gemCost: 0,
    name: { es: 'Esferas Incandescentes', en: 'Incandescent Orbs' },
    color: '#fde047',
  },
  {
    id: 'torches',
    icon: '🔥',
    mult: 2,
    unlockLevel: 6,
    currency: 'coins',
    cost: 18500,
    gemCost: 160,
    name: { es: 'Antorchas de Plasma (x2)', en: 'Plasma Torches (x2)' },
    color: '#f97316',
  },
  {
    id: 'knives',
    icon: '🔪',
    mult: 3,
    unlockLevel: 16,
    currency: 'coins',
    cost: 42000,
    gemCost: 280,
    name: { es: 'Dagas Láser Cian (x3)', en: 'Cyan Laser Daggers (x3)' },
    color: '#00f2fe',
  },
  {
    id: 'chainsaws',
    icon: '🪚',
    mult: 5,
    unlockLevel: 31,
    currency: 'gems',
    cost: 480,
    gemCost: 480,
    name: { es: '👑 Sierras Neón Pro (x5)', en: '👑 Pro Neon Saws (x5)' },
    color: '#ef4444',
  },
  {
    id: 'goldbars',
    icon: '🪙',
    mult: 8,
    unlockLevel: 60,
    currency: 'gems',
    cost: 950,
    gemCost: 950,
    name: { es: '👑 Orbes Cuánticos 24K (x8)', en: '👑 24K Quantum Orbs (x8)' },
    color: '#fde047',
  },
];

// ============================================================================
// BLOQUE 1: RE-ESCALADO EXPONENCIAL DE LA ARMERÍA + CORTE DE MONEDA EN NIVEL 5
// ============================================================================
export const GEAR_ITEMS = [
  {
    id: 'pole',
    icon: '⚖️',
    maxLevel: 10,
    statLabel: { es: '-4.8% Gravedad / Nv', en: '-4.8% Gravity / Lvl' },
    name: { es: 'Núcleo de Inercia', en: 'Inertia Core' },
    desc: {
      es: 'Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).',
      en: 'Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass).',
    },
  },
  {
    id: 'boots',
    icon: '🥾',
    maxLevel: 10,
    statLabel: { es: '-5.2% Viento / Nv', en: '-5.2% Wind / Lvl' },
    name: { es: 'Calzado Magnético', en: 'Magnetic Footwear' },
    desc: {
      es: 'Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).',
      en: 'Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass).',
    },
  },
  {
    id: 'gloves',
    icon: '🧤',
    maxLevel: 10,
    statLabel: { es: '+1.5% Ventana / Nv', en: '+1.5% Catch Window / Lvl' },
    name: { es: 'Guantes Rítmicos', en: 'Rhythmic Gloves' },
    desc: {
      es: 'Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).',
      en: 'Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass).',
    },
  },
];

export const ARMORY_ITEMS = GEAR_ITEMS;

/**
 * BLOQUE 1: Curva Exponencial Estricta de la Armería
 * - Niveles 1 a 5 (`nivelActual` 0 a 4): `Math.round(850 * Math.pow(2.45, nivelActual))`
 *   (`850 -> 2083 -> 5102 -> 12500 -> 30626` monedas)
 * - Niveles 6 a 10 (`nivelActual >= 5`): Tramo Élite / Dinero Real (`👑 MEJORA PRO — GEMAS / PASE VIP`),
 *   ya NO acepta monedas comunes; exige Gemas Premium o tener activo el Pase VIP Pro.
 */
export function getArmoryUpgradeCost(currentLevel) {
  const lvl = Math.max(0, Math.min(10, currentLevel || 0));
  if (lvl >= 10) {
    return {
      isMax: true,
      isProTier: true,
      coinCost: 0,
      gemCost: 0,
    };
  }
  if (lvl < 5) {
    const coinCost = Math.round(850 * Math.pow(2.45, lvl));
    return {
      isMax: false,
      isProTier: false,
      coinCost,
      gemCost: 0,
    };
  }
  const proStep = lvl - 5; // 0..4 for levels 6..10
  const gemCost = Math.round(140 * Math.pow(1.45, proStep));
  return {
    isMax: false,
    isProTier: true,
    coinCost: 0,
    gemCost,
  };
}

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
    id: 'bundle_vip_pass',
    icon: '👑',
    isVipPassBundle: true,
    gems: 1500,
    coins: 50000,
    leaguePts: 1500,
    popular: true,
    tag: '👑 ACTIVAR VIP ($4.99)',
    name: {
      es: '👑 PASE VIP PRO TEMPORADA',
      en: '👑 SEASON VIP PRO PASS',
    },
    perks: {
      es: [
        '🔓 Desbloquea Mejoras Élite Nv. 6 a 10 en Armería',
        '👑 Desbloquea las 4 Ciudades Exclusivas VIP',
        '🦯 Incluye Barra Gravitatoria Imperial (x2.0 + Auto-Salvada)',
        '🧥 Incluye Aspecto Leyenda Dorada Inmortal (x2.5 + Escudo)',
        '+1.500 💎 Gemas y +50.000 🪙 Monedas al instante',
      ],
      en: [
        '🔓 Unlocks Elite Armory Upgrades Lvl 6 to 10',
        '👑 Unlocks all 4 Exclusive VIP Cities',
        '🦯 Includes Imperial Graviton Pole (x2.0 + Auto-Save)',
        '🧥 Includes Immortal Golden Legend Skin (x2.5 + Shield)',
        '+1,500 💎 Gems & +50,000 🪙 Coins instantly',
      ],
    },
  },
  {
    id: 'bundle_starter',
    icon: '⚡',
    gems: 450,
    coins: 18000,
    leaguePts: 300,
    popular: false,
    tag: '💎 PACK PRO ($1.99)',
    name: { es: 'Cofre Cuántico de Gemas', en: 'Quantum Gem Chest' },
    perks: {
      es: [
        '+450 💎 Gemas Premium + 18.000 🪙 Monedas',
        'Ideal para Barra Láser Cuántica o Mejoras Nv. 6+',
      ],
      en: [
        '+450 💎 Premium Gems + 18,000 🪙 Coins',
        'Ideal for Quantum Laser Pole or Lvl 6+ Upgrades',
      ],
    },
  },
  {
    id: 'bundle_legend',
    icon: '🚀',
    gems: 1400,
    coins: 85000,
    leaguePts: 2500,
    popular: true,
    tag: '👑 PACK ULTRA ($5.99)',
    name: { es: 'Cofre Leyenda Black & Gold', en: 'Black & Gold Legend Chest' },
    perks: {
      es: [
        '+1.400 💎 Gemas + 85.000 🪙 Monedas',
        'Alcanza para Multiplicador x5 Ultra + Samurái Neón',
      ],
      en: [
        '+1,400 💎 Gems + 85,000 🪙 Coins',
        'Enough for x5 Ultra Multiplier + Neon Samurai',
      ],
    },
  },
];

export const I18N = {
  es: {
    title: 'NO MIRES ABAJO',
    gameTitle: 'NO MIRES ABAJO',
    subtitle: 'Campeonato Mundial de Equilibrio 3D',
    officialEdition: '🏆 EDICIÓN CAMPEONATO MUNDIAL 3D',
    worldTour: 'TOUR MUNDIAL',
    city: 'CIUDAD',
    bestScore: 'MEJOR PUNTAJE',
    playNow: 'SALTAR AL CABLE',
    freeCoinsAd: '+1.500 🪙 GRATIS',
    freeGemsAd: '+35 💎 GRATIS',
    equipped: 'EQUIPADO',
    equip: 'EQUIPAR',
    maxLevel: 'MÁX (10/10)',
    propsTitle: 'OBJETOS DE MALABARES',
    skinsTitle: 'VESTUARIO Y ASPECTOS 3D',
    polesTitle: '⚖️ VARAS DE EQUILIBRIO 3D',
    seasonTitle: 'TEMPORADA OFICIAL',
    leagueTitle: 'RANKING MUNDIAL EN VIVO',
    seasonPrizes: 'PREMIOS DE TEMPORADA',
    claimed: 'RECLAMADO',
    claim: 'RECLAMAR',
    storeTitle: 'TIENDA VIP & COFRES PRO',
    storeSubtitle: 'Desbloqueá el Pase VIP Pro, Multiplicadores Permanentes y Gemas al instante.',
    multipliersTitle: '🚀 MULTIPLICADORES PERMANENTES',
    pause: 'PARTIDA EN PAUSA',
    resume: 'REANUDAR PARTIDA',
    backToMenu: 'VOLVER AL MENÚ',
    victoryTitle: '🏆 ¡AZOTEA ALCANZADA!',
    score: 'Puntaje Final',
    coinsEarned: 'Monedas Ganadas',
    leaguePointsEarned: 'Puntos de Liga (LP)',
    doubleRewardsAd: '🎬 DUPLICAR RECOMPENSAS x2',
    fallTitle: '💥 ¡PERDISTE EL EQUILIBRIO!',
    fallSub: 'El viento de altura te venció a pocos metros de la meta.',
    reviveAd: '⚡ SEGUNDA OPORTUNIDAD (CONTINUAR AQUÍ)',
    retry: 'REINTENTAR NIVEL',
    adWatching: 'CARGANDO BONIFICACIÓN VIP...',
    adSeconds: 'Acreditando recompensa en',
    adCollect: '✅ ACREDITAR BONIFICACIÓN',
    leanLeft: 'INCLINAR IZQ',
    leanRight: 'INCLINAR DER',
    leftHand: 'MANO IZQ',
    rightHand: 'MANO DER',
    tabs: {
      home: 'Inicio',
      armory: 'Armería',
      skins: 'Aspectos',
      league: 'Liga',
      store: 'Tienda',
    },
    installApp: '📲 Instalar',
    leagueBanner: 'LIGA DE TEMPORADA',
    seasonEndsIn: 'Cierre en',
    leaguePointsShort: 'LP',
    multiplier: 'MULTIPLICADOR',
    gems: 'GEMAS',
    left: 'IZQ',
    right: 'DER',
    grappleTitle: 'GANCHO SALVAVIDAS',
    grappleCost: 'SALVAR (20 💎)',
    addJuggle: '+ SUMAR MALABAR',
    citiesBtn: '20 Ciudades',
    armoryBtn: 'Armería',
    shopBtn: 'Tienda VIP',
    pauseBtn: 'PAUSA',
    playNowBtn: '▶ JUGAR / SALTAR AL CABLE',
    skinsBtn: 'Aspectos',
    level: 'Nivel',
    windLabel: 'VIENTO',
    windGustAlert: '⚠️ RÁFAGA DE VIENTO',
    nearMissPopup: '⚡ ¡SALVADA AL LÍMITE! +100',
    shieldSavedPopup: '🛡️ ¡ESCUDO ANTI-CAÍDA ACTIVADO!',
    feverModeBadge: '🔥 MODO FRENESÍ x2',
    perfectCatchLabel: '¡PERFECTO!',
    goodCatchLabel: '¡BIEN!',
    onboardingTitle: '⚡ CREÁ TU PERFIL DE EQUILIBRISTA',
    onboardingSubtitle:
      'Elegí tu Nombre/Apodo y Bandera para registrarte en vivo en el Ranking Online de la Liga de Temporada.',
    onboardingNameLabel: 'NOMBRE O APODO (2 A 16 CARACTERES)',
    onboardingNamePlaceholder: 'Ej: Mauricio, Franco_99...',
    onboardingCountryLabel: 'PAÍS / BANDERA',
    onboardingSaveCta: 'GUARDAR Y ENTRAR AL JUEGO',
    editProfileTooltip: 'Editar nombre o bandera',
    levelCleared: '¡AZOTEA ALCANZADA!',
    nextLevel: 'SIGUIENTE NIVEL',
    armoryTitle: 'ARMERÍA PRO, BARRAS Y MULTIPLICADORES',
    armorySub: 'Tramo 1-5 con Monedas • Tramo 6-10 Élite Pro con Gemas o Pase VIP',
    maxLevelLabel: 'NIVEL MÁXIMO (10/10)',
    upgradeBtn: 'MEJORAR',
    proUpgradeBtn: '👑 MEJORA PRO — GEMAS / PASE VIP',
    polesSectionTitle: '⚖️ VARAS DE EQUILIBRIO (BARRAS)',
    multipliersSectionTitle: '🚀 MULTIPLICADORES PERMANENTES',
    vipCitiesTitle: '👑 CIUDADES EXCLUSIVAS VIP',
    leagueModalTitle: 'LIGA DE TEMPORADA — CLASIFICACIÓN MUNDIAL',
    leagueModalSub:
      'Sumá Puntos de Liga (LP) superando niveles y encadenando capturas rítmicas perfectas para ganar Cofres Épicos.',
    shopTitle: '👑 TIENDA PRO & PASE VIP DE TEMPORADA',
    shopSub: 'Activá el Pase VIP Pro o adquirí Gemas para desbloquear Barras Cuánticas, Ciudades VIP y Mejoras Nv. 6-10.',
    pauseTitle: 'PARTIDA EN PAUSA',
    pauseSub: 'Tomate un respiro sobre el cable antes de continuar hacia la meta.',
    resumeBtn: 'REANUDAR PARTIDA',
    restartBtn: 'REINICIAR NIVEL',
    backToLobbyBtn: 'VOLVER AL MENÚ PRINCIPAL',
    fellTitle: '¡PERDISTE EL EQUILIBRIO!',
    fellSub: 'Estabas a pocos metros de alcanzar la azotea de enfrente',
    continueHook: 'USAR GANCHO SALVAVIDAS (20 💎)',
    retryFree: 'REINTENTAR DESDE 0m',
    youLabel: 'TÚ (Equilibrista)',
  },
  en: {
    title: "DON'T LOOK DOWN",
    gameTitle: "DON'T LOOK DOWN",
    subtitle: '3D World Tightrope Championship',
    officialEdition: '🏆 3D WORLD CHAMPIONSHIP EDITION',
    worldTour: 'WORLD TOUR',
    city: 'CITY',
    bestScore: 'BEST SCORE',
    playNow: 'STEP ON THE WIRE',
    freeCoinsAd: '+1,500 🪙 FREE',
    freeGemsAd: '+35 💎 FREE',
    equipped: 'EQUIPPED',
    equip: 'EQUIP',
    maxLevel: 'MAX (10/10)',
    propsTitle: 'JUGGLING PROPS',
    skinsTitle: '3D OUTFITS & SKINS',
    polesTitle: '⚖️ 3D BALANCE POLES',
    seasonTitle: 'OFFICIAL SEASON',
    leagueTitle: 'LIVE WORLD LEADERBOARD',
    seasonPrizes: 'SEASON REWARDS',
    claimed: 'CLAIMED',
    claim: 'CLAIM',
    storeTitle: 'VIP STORE & PRO CHESTS',
    storeSubtitle: 'Unlock the VIP Pro Pass, Permanent Multipliers & Gems instantly.',
    multipliersTitle: '🚀 PERMANENT MULTIPLIERS',
    pause: 'GAME PAUSED',
    resume: 'RESUME GAME',
    backToMenu: 'BACK TO MENU',
    victoryTitle: '🏆 ROOFTOP REACHED!',
    score: 'Final Score',
    coinsEarned: 'Coins Earned',
    leaguePointsEarned: 'League Points (LP)',
    doubleRewardsAd: '🎬 DOUBLE REWARDS x2',
    fallTitle: '💥 LOST YOUR BALANCE!',
    fallSub: 'High-altitude gusts knocked you off just meters from the goal.',
    reviveAd: '⚡ SECOND CHANCE (CONTINUE HERE)',
    retry: 'RETRY LEVEL',
    adWatching: 'LOADING VIP BONUS...',
    adSeconds: 'Crediting reward in',
    adCollect: '✅ COLLECT REWARD',
    leanLeft: 'LEAN LEFT',
    leanRight: 'LEAN RIGHT',
    leftHand: 'LEFT HAND',
    rightHand: 'RIGHT HAND',
    tabs: {
      home: 'Home',
      armory: 'Armory',
      skins: 'Skins',
      league: 'League',
      store: 'Shop',
    },
    installApp: '📲 Install',
    leagueBanner: 'SEASON LEAGUE',
    seasonEndsIn: 'Ends in',
    leaguePointsShort: 'LP',
    multiplier: 'MULTIPLIER',
    gems: 'GEMS',
    left: 'LEFT',
    right: 'RIGHT',
    grappleTitle: 'GRAPPLE HOOK SAVE',
    grappleCost: 'SAVE (20 💎)',
    addJuggle: '+ ADD JUGGLE',
    citiesBtn: '20 Cities',
    armoryBtn: 'Armory',
    shopBtn: 'VIP Shop',
    pauseBtn: 'PAUSE',
    playNowBtn: '▶ PLAY / STEP ON THE WIRE',
    skinsBtn: 'Skins',
    level: 'Level',
    windLabel: 'WIND',
    windGustAlert: '⚠️ WIND GUST',
    nearMissPopup: '⚡ EDGE SAVE! +100',
    shieldSavedPopup: '🛡️ ANTI-FALL SHIELD ACTIVATED!',
    feverModeBadge: '🔥 FEVER MODE x2',
    perfectCatchLabel: 'PERFECT!',
    goodCatchLabel: 'NICE!',
    onboardingTitle: '⚡ CREATE YOUR TIGHTROPE PROFILE',
    onboardingSubtitle:
      'Choose your Nickname & Country Flag to register live on the Season League Online Leaderboard.',
    onboardingNameLabel: 'NICKNAME (2 TO 16 CHARACTERS)',
    onboardingNamePlaceholder: 'Ex: Mauricio, Franco_99...',
    onboardingCountryLabel: 'COUNTRY / FLAG',
    onboardingSaveCta: 'SAVE & ENTER THE GAME',
    editProfileTooltip: 'Edit nickname or flag',
    levelCleared: 'ROOFTOP REACHED!',
    nextLevel: 'NEXT LEVEL',
    armoryTitle: 'PRO ARMORY, POLES & MULTIPLIERS',
    armorySub: 'Tier 1-5 with Coins • Tier 6-10 Pro Elite with Gems or VIP Pass',
    maxLevelLabel: 'MAX LEVEL (10/10)',
    upgradeBtn: 'UPGRADE',
    proUpgradeBtn: '👑 PRO UPGRADE — GEMS / VIP PASS',
    polesSectionTitle: '⚖️ BALANCE POLES (BARS)',
    multipliersSectionTitle: '🚀 PERMANENT MULTIPLIERS',
    vipCitiesTitle: '👑 EXCLUSIVE VIP CITIES',
    leagueModalTitle: 'SEASON LEAGUE — GLOBAL LEADERBOARD',
    leagueModalSub:
      'Earn League Points (LP) by clearing levels and chaining rhythmic catches to win Epic Chests.',
    shopTitle: '👑 PRO SHOP & SEASON VIP PASS',
    shopSub: 'Activate the VIP Pro Pass or get Gems to unlock Quantum Poles, VIP Cities and Lvl 6-10 Upgrades.',
    pauseTitle: 'GAME PAUSED',
    pauseSub: 'Take a breath on the high wire before continuing to the target roof.',
    resumeBtn: 'RESUME GAME',
    restartBtn: 'RESTART LEVEL',
    backToLobbyBtn: 'BACK TO MAIN MENU',
    fellTitle: 'YOU LOST YOUR BALANCE!',
    fellSub: 'You were just meters away from reaching the opposite rooftop',
    continueHook: 'USE GRAPPLE HOOK SAVE (20 💎)',
    retryFree: 'RETRY FROM 0m',
    youLabel: 'YOU (Tightrope Walker)',
  },
};

for (let i = 0; i < CITIES.length; i++) {
  const c = CITIES[i];
  c.id = c.id || `city_${c.index}`;
  c.landmark = c.landmark || c.monumentName;
  c.accent = c.accent || c.accentColor;
  c.windowColor = c.windowColor || c.winColor;
  c.landmarkType = c.landmarkType || c.monument;
}

for (let i = 0; i < SKINS.length; i++) {
  const s = SKINS[i];
  s.coatColor = s.coatColor || s.hoodieColor;
}

for (let i = 0; i < JUGGLE_PROPS.length; i++) {
  const p = JUGGLE_PROPS[i];
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

export function getLevelConfig(level, customVipCity = null) {
  const safeLvl = Math.max(1, Math.min(100, level || 1));
  const cityIndex = Math.min(19, Math.max(0, Math.floor((safeLvl - 1) / 5)));
  const city = customVipCity || CITIES[cityIndex];
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
  const speedPhase =
    safeLvl <= 3 ? 0 : safeLvl <= 10 ? 1 : safeLvl <= 25 ? 2 : safeLvl <= 50 ? 3 : 4;
  const stepSwayImpulse = Number(
    (0.028 + Math.max(0, walkSpeedMultiplier - 1) * 0.068).toFixed(4)
  );
  const catchRecoilImpulse = Number(
    (0.036 + Math.max(0, walkSpeedMultiplier - 1) * 0.064).toFixed(4)
  );

  return {
    level: safeLvl,
    cityIndex: customVipCity ? customVipCity.index : cityIndex,
    city,
    isVipCity: Boolean(customVipCity),
    stageInCity,
    speedPhase,
    walkSpeedMultiplier,
    baseWalkSpeed,
    walkSpeed: walkSpeedMultiplier,
    walkSpeedMeters: walkSpeed,
    totalDistance,
    targetMeters: totalDistance,
    targetDistance: totalDistance,
    difficultyFactor,
    juggleSpeedMultiplier,
    juggleBaseSpeed,
    juggleSpeed: juggleBaseSpeed,
    catchWindow,
    gravityFactor: gravityInstability,
    gravity: gravityInstability * 2.1,
    windMax: windBaseForce,
    windBase: windBaseForce,
    windChangeFreq,
    gustInterval: Math.max(0.75, 2.2 - speedPhase * 0.32),
    windBaseForce,
    gravityInstability,
    defaultObjects,
    ballCount: defaultObjects,
    stepSwayImpulse,
    catchRecoilImpulse,
  };
}

// ============================================================================
// MOTOR DE AUDIO PROCEDURAL (`Web Audio API`) + VIBRACIÓN HÁPTICA MÓVIL
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

  playFall() {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([90, 45, 140]);
    }
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

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

  playHookRescue() {
    this.playGrapple();
  }

  playNearMiss() {
    this.playNearMissSave();
  }

  playFallScream() {
    this.playFall();
  }

  playFrenzyStart() {
    this.playVictory();
  }

  playMissAlert() {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([35, 25, 45]);
    }
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(195, now);
    osc.frequency.exponentialRampToValueAtTime(98, now + 0.22);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.25);
  }

  playFootstep(walkSpeed = 1) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    const baseFreq = 92 + Math.min(45, (walkSpeed - 1) * 30);
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(42, now + 0.065);
    gain.gain.setValueAtTime(0.09, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.075);
  }

  updateWind(windForce = 0) {
    if (Math.abs(windForce) > 0.85 && Math.random() < 0.015) {
      this.playWindGust();
    }
  }
}

export const soundEngine = new ProceduralAudio();
