import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  STORAGE_KEY,
  CITIES,
  VIP_CITIES,
  SKINS,
  SKINS_CATALOG,
  SKIN_VISUALS,
  resolveSkinKey,
  resolveSkinObject,
  resolveSkinVisual,
  BALANCE_POLES,
  PERMANENT_MULTIPLIERS,
  JUGGLE_PROPS,
  GEAR_ITEMS,
  getArmoryUpgradeCost,
  SEASON_REWARD_TIERS,
  STORE_BUNDLES,
  I18N,
  getLevelConfig,
  soundEngine,
} from './gameData';
import {
  COUNTRIES,
  getCountryFlag,
  getLiveLeaderboard,
  syncPlayerScore,
} from './leaderboardService';
import {
  CRITICAL_ANGLE_RAD,
  buildThreeWorld,
  applySkinToAcrobat,
  updateAndRenderThreeScene,
} from './threeEngine';

function loadSavedData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function checkNeedsOnboarding() {
  try {
    const completed = localStorage.getItem('nma_profile_completed') === 'true';
    const savedName = (localStorage.getItem('nma_player_name') || '').trim();
    const savedCountry = (localStorage.getItem('nma_player_country') || '').trim();
    if (
      !completed ||
      !savedName ||
      savedName === 'TÚ (Equilibrista)' ||
      savedName.length < 3 ||
      !savedCountry
    ) {
      return true;
    }
    return false;
  } catch {
    return true;
  }
}

export default function App() {
  const saved = useRef(loadSavedData()).current;

  const isEconomyV2Migrated = useRef(
    (() => {
      try {
        return localStorage.getItem('nma_economy_v2_migrated') === 'true';
      } catch {
        return false;
      }
    })()
  ).current;

  const [lang, setLang] = useState(saved?.lang || 'es');
  const [level, setLevel] = useState(saved?.level || 1);
  const [maxUnlockedCity, setMaxUnlockedCity] = useState(
    saved?.maxUnlockedCity ?? Math.min(19, Math.floor(((saved?.level || 1) - 1) / 5))
  );
  const [coins, setCoins] = useState(saved?.coins ?? 1200);
  const [gems, setGems] = useState(saved?.gems ?? 60);
  const [bestScore, setBestScore] = useState(saved?.bestScore || 0);
  const [leaguePoints, setLeaguePoints] = useState(saved?.leaguePoints ?? 320);

  const [playerName, setPlayerName] = useState(() => {
    try {
      const nmaName = (localStorage.getItem('nma_player_name') || '').trim();
      if (nmaName && nmaName !== 'TÚ (Equilibrista)') return nmaName;
    } catch {
      // ignore
    }
    const oldName = (saved?.playerName || '').trim();
    if (oldName && oldName !== 'TÚ (Equilibrista)') return oldName;
    return '';
  });

  const [playerCountry, setPlayerCountry] = useState(() => {
    try {
      const nmaCountry = (localStorage.getItem('nma_player_country') || '').trim();
      if (nmaCountry) return nmaCountry;
    } catch {
      // ignore
    }
    return saved?.playerCountry || 'AR';
  });

  const [showOnboardingModal, setShowOnboardingModal] = useState(() => checkNeedsOnboarding());
  const [onboardingNameInput, setOnboardingNameInput] = useState(() => {
    try {
      const nmaName = (localStorage.getItem('nma_player_name') || '').trim();
      if (nmaName && nmaName !== 'TÚ (Equilibrista)') return nmaName;
    } catch {
      // ignore
    }
    return '';
  });
  const [onboardingCountryInput, setOnboardingCountryInput] = useState(() => {
    try {
      const nmaCountry = (localStorage.getItem('nma_player_country') || '').trim();
      if (nmaCountry) return nmaCountry;
    } catch {
      // ignore
    }
    return 'AR';
  });
  const [onboardingError, setOnboardingError] = useState(false);

  // Estados de Economía Pro, Pase VIP, Aspectos (`equippedSkin` y `ownedSkins`), Varas 3D, Multiplicadores y Ciudades VIP
  const [vipPassActive, setVipPassActive] = useState(saved?.vipPassActive || false);
  const [unlockedSkins, setUnlockedSkins] = useState(() => {
    let storedOwned = [];
    try {
      const rawOwned = localStorage.getItem('nma_owned_skins');
      if (rawOwned) storedOwned = JSON.parse(rawOwned);
    } catch {
      // ignore
    }
    const rawList = [
      ...(saved?.ownedSkins || []),
      ...(saved?.unlockedSkins || []),
      ...(Array.isArray(storedOwned) ? storedOwned : []),
      'urbano',
    ];
    const normalized = rawList.map((id) => resolveSkinKey(id));
    if (!normalized.includes('urbano')) normalized.unshift('urbano');
    return Array.from(new Set(normalized));
  });
  const ownedSkins = unlockedSkins;
  const setOwnedSkins = setUnlockedSkins;

  const [equippedSkin, setEquippedSkin] = useState(() => {
    try {
      const savedEquipped = localStorage.getItem('nma_equipped_skin');
      if (savedEquipped) return resolveSkinKey(savedEquipped);
    } catch {
      // ignore
    }
    return resolveSkinKey(saved?.equippedSkin || 'urbano');
  });
  const [previewSkin, setPreviewSkin] = useState(null);
  const [proCheckoutSkin, setProCheckoutSkin] = useState(null);

  // BLOQUE 2.3: Sincronización inmediata en tiempo real (`equippedSkinRef.current` + `applySkinToAcrobat`)
  const equippedSkinRef = useRef(equippedSkin);
  useEffect(() => {
    equippedSkinRef.current = equippedSkin;
    applySkinToAcrobat(equippedSkin);
    try {
      localStorage.setItem('nma_equipped_skin', equippedSkin);
    } catch {
      // ignore
    }
  }, [equippedSkin]);

  useEffect(() => {
    const activeId = previewSkin || equippedSkin;
    equippedSkinRef.current = activeId;
    applySkinToAcrobat(activeId);
  }, [previewSkin, equippedSkin]);

  const [unlockedPoles, setUnlockedPoles] = useState(saved?.unlockedPoles || ['pole_basic']);
  const [equippedPole, setEquippedPole] = useState(saved?.equippedPole || 'pole_basic');
  const [ownedMultipliers, setOwnedMultipliers] = useState(saved?.ownedMultipliers || []);
  const [unlockedVipCities, setUnlockedVipCities] = useState(saved?.unlockedVipCities || []);
  const [activeVipCityId, setActiveVipCityId] = useState(saved?.activeVipCityId || null);
  const [unlockedProps, setUnlockedProps] = useState(saved?.unlockedProps || ['balls']);
  const [equippedProp, setEquippedProp] = useState(saved?.equippedProp || 'balls');
  const [gearLevels, setGearLevels] = useState(() => {
    if (!isEconomyV2Migrated) {
      return { pole: 0, boots: 0, gloves: 0 };
    }
    return saved?.gearLevels || { pole: 0, boots: 0, gloves: 0 };
  });
  const [claimedTiers, setClaimedTiers] = useState(saved?.claimedTiers || []);
  const [soundEnabled, setSoundEnabled] = useState(saved?.soundEnabled ?? true);
  const [armorySubTab, setArmorySubTab] = useState('upgrades');

  const [activeTab, setActiveTab] = useState('home');
  const activeTabRef = useRef(activeTab);
  useEffect(() => {
    activeTabRef.current = activeTab;
    if (activeTab !== 'skins' && previewSkin) {
      setPreviewSkin(null);
      equippedSkinRef.current = equippedSkin;
    }
  }, [activeTab, previewSkin, equippedSkin]);

  const [gameState, setGameState] = useState('menu'); // 'menu' | 'playing' | 'paused' | 'victory' | 'gameover'
  const [showAdModal, setShowAdModal] = useState(null); // null | 'revive' | 'double' | 'gems' | 'coins'
  const [adTimer, setAdTimer] = useState(2);
  const [toastMsg, setToastMsg] = useState(null);
  const [showCitySelectorModal, setShowCitySelectorModal] = useState(false);
  const [liveLeaderboard, setLiveLeaderboard] = useState([]);
  const [onlineSyncStatus, setOnlineSyncStatus] = useState('live');

  const [hudData, setHudData] = useState({
    progress: 0,
    metersRemaining: 68,
    totalMeters: 68,
    score: 0,
    combo: 0,
    frenzyActive: false,
    tiltRatio: 0,
    windForce: 0,
    juggleAlertHands: { left: false, right: false },
    hookAvailable: true,
    hookActive: false,
    fallCinematicPhase: null,
    floatingPopups: [],
  });
  const [runResult, setRunResult] = useState({
    coinsEarned: 0,
    scoreEarned: 0,
    lpEarned: 0,
    gemsEarned: 0,
    doubled: false,
    revivedOnce: false,
  });

  const t = I18N[lang] || I18N.es;
  const activeVipCity = VIP_CITIES.find((vc) => vc.id === activeVipCityId) || null;
  const cfg = getLevelConfig(level, activeVipCity);
  const currentSkinObj = resolveSkinObject(equippedSkin);
  const currentSkinVisual = resolveSkinVisual(equippedSkin);
  const displayedSkinObj = resolveSkinObject(previewSkin || equippedSkin);
  const displayedSkinVisual = resolveSkinVisual(previewSkin || equippedSkin);
  const currentPoleObj = BALANCE_POLES.find((p) => p.id === equippedPole) || BALANCE_POLES[0];
  const currentPropObj = JUGGLE_PROPS.find((p) => p.id === equippedProp) || JUGGLE_PROPS[0];

  // PASO 3: Aplicación real del multiplicador del Aspecto (`x1`, `x1.2`, `x1.5`, `x2`, `x3`, `x3.5`)
  // sobre Puntos, Monedas y LP ganados en partida
  const permCoinMult = ownedMultipliers.reduce((acc, id) => {
    const m = PERMANENT_MULTIPLIERS.find((item) => item.id === id);
    return m ? Math.max(acc, m.coinMult) : acc;
  }, 1);
  const permLpMult = ownedMultipliers.reduce((acc, id) => {
    const m = PERMANENT_MULTIPLIERS.find((item) => item.id === id);
    return m ? Math.max(acc, m.lpMult) : acc;
  }, 1);

  const vipCityMult = activeVipCity ? activeVipCity.rewardMult : 1;
  const skinMult = currentSkinObj.bonusMult || 1.0;

  const totalScoreMultiplier = Number(
    (
      currentPropObj.mult *
      skinMult *
      currentPoleObj.scoreMult *
      permLpMult *
      vipCityMult
    ).toFixed(2)
  );
  const totalCoinMultiplier = Number(
    (
      currentPropObj.mult *
      skinMult *
      currentPoleObj.coinMult *
      permCoinMult *
      vipCityMult
    ).toFixed(2)
  );
  const totalLpMultiplier = Number(
    (skinMult * currentPoleObj.scoreMult * permLpMult * vipCityMult).toFixed(2)
  );

  useEffect(() => {
    soundEngine.enabled = soundEnabled;
  }, [soundEnabled]);

  useEffect(() => {
    const highestFromLevel = Math.min(19, Math.floor((level - 1) / 5));
    if (highestFromLevel > maxUnlockedCity) {
      setMaxUnlockedCity(highestFromLevel);
    }
  }, [level, maxUnlockedCity]);

  useEffect(() => {
    try {
      localStorage.setItem('nma_economy_v2_migrated', 'true');
      localStorage.setItem('nma_owned_skins', JSON.stringify(unlockedSkins));
      localStorage.setItem('nma_equipped_skin', equippedSkin);
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          lang,
          level,
          maxUnlockedCity: Math.max(maxUnlockedCity, Math.min(19, Math.floor((level - 1) / 5))),
          coins,
          gems,
          bestScore,
          leaguePoints,
          playerName: playerName || 'Equilibrista',
          playerCountry,
          vipPassActive,
          ownedSkins: unlockedSkins,
          unlockedSkins,
          equippedSkin,
          unlockedPoles,
          equippedPole,
          ownedMultipliers,
          unlockedVipCities,
          activeVipCityId,
          unlockedProps,
          equippedProp,
          gearLevels,
          claimedTiers,
          soundEnabled,
        })
      );
    } catch {
      // Ignore storage quota errors
    }
  }, [
    lang,
    level,
    maxUnlockedCity,
    coins,
    gems,
    bestScore,
    leaguePoints,
    playerName,
    playerCountry,
    vipPassActive,
    unlockedSkins,
    equippedSkin,
    unlockedPoles,
    equippedPole,
    ownedMultipliers,
    unlockedVipCities,
    activeVipCityId,
    unlockedProps,
    equippedProp,
    gearLevels,
    claimedTiers,
    soundEnabled,
  ]);

  const showToast = useCallback((msg) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg((prev) => (prev === msg ? null : prev));
    }, 2600);
  }, []);

  const refreshOnlineStandings = useCallback(async () => {
    const displayName = (playerName || 'Equilibrista').trim();
    const list = await getLiveLeaderboard({
      name: displayName,
      country: playerCountry,
      score: leaguePoints,
      level,
    });
    setLiveLeaderboard(list);
  }, [playerName, playerCountry, leaguePoints, level]);

  useEffect(() => {
    refreshOnlineStandings();
    const interval = setInterval(refreshOnlineStandings, 12000);
    return () => clearInterval(interval);
  }, [refreshOnlineStandings]);

  const handleSaveOnboardingProfile = useCallback(
    async (e) => {
      if (e) e.preventDefault();
      const cleanName = (onboardingNameInput || '').trim().slice(0, 15);
      if (cleanName.length < 3 || cleanName === 'TÚ (Equilibrista)') {
        setOnboardingError(true);
        soundEngine.playMissAlert();
        return;
      }
      const chosenCountry = onboardingCountryInput || 'AR';
      setOnboardingError(false);
      setPlayerName(cleanName);
      setPlayerCountry(chosenCountry);
      try {
        localStorage.setItem('nma_player_name', cleanName);
        localStorage.setItem('nma_player_country', chosenCountry);
        localStorage.setItem('nma_profile_completed', 'true');
      } catch {
        // ignore storage errors
      }
      setShowOnboardingModal(false);
      soundEngine.init();
      soundEngine.playVictory();
      showToast(
        lang === 'es'
          ? `✅ Perfil activo: ${getCountryFlag(chosenCountry)} ${cleanName}`
          : `✅ Profile active: ${getCountryFlag(chosenCountry)} ${cleanName}`
      );
      setOnlineSyncStatus('syncing');
      await syncPlayerScore(cleanName, chosenCountry, leaguePoints, level);
      const updated = await getLiveLeaderboard({
        name: cleanName,
        country: chosenCountry,
        score: leaguePoints,
        level,
      });
      setLiveLeaderboard(updated);
      setOnlineSyncStatus('live');
    },
    [onboardingNameInput, onboardingCountryInput, leaguePoints, level, lang, showToast]
  );

  const openEditProfileModal = useCallback(() => {
    setOnboardingNameInput(playerName || '');
    setOnboardingCountryInput(playerCountry || 'AR');
    setOnboardingError(false);
    setShowOnboardingModal(true);
  }, [playerName, playerCountry]);

  // ============================================================================
  // THREE.JS CONTAINER & PHYSICS ENGINE REFS
  // ============================================================================
  const mountRef = useRef(null);
  const threeWorldRef = useRef(null);
  const animFrameRef = useRef(null);
  const popupIdCounterRef = useRef(1);

  const engineRef = useRef({
    running: false,
    angle: 0,
    angularVel: 0,
    distance: 0,
    targetDistance: 68,
    score: 0,
    combo: 0,
    maxCombo: 0,
    frenzyActive: false,
    windForce: 0,
    windTarget: 0,
    windTimer: 0,
    walkCycle: 0,
    lastStepPhase: 0,
    controlInput: 0,
    balls: [],
    sparks: [],
    floatingPopups: [],
    hookAvailable: true,
    hookActive: false,
    hookTimer: 0,
    freeFallShieldsRemaining: 0,
    revivedOnce: false,
    lastTimestamp: 0,
    hudSyncTimer: 0,
    nearMissCooldown: 0,
    lightningFlashAlpha: 0,
    fallSequence: {
      active: false,
      mode: null,
      timer: 0,
      fallY: 0,
      fallVy: 0,
      fallRotX: 0,
      fallRotZ: 0,
      ropeTopY: 16,
      finalCoins: 0,
      finalScore: 0,
      finalLp: 0,
      finalGems: 0,
    },
    cfg: null,
    skinObj: null,
    poleObj: null,
    propObj: null,
    gear: { pole: 0, boots: 0, gloves: 0 },
  });

  const pushFloatingPopup = useCallback((eng, text, color = '#00f2fe', subtext = '') => {
    const id = popupIdCounterRef.current++;
    eng.floatingPopups.push({
      id,
      text,
      subtext,
      color,
      ttl: 1.05,
    });
    if (eng.floatingPopups.length > 4) {
      eng.floatingPopups.shift();
    }
  }, []);

  const createBallsForConfig = useCallback((levelCfg, propColor) => {
    const count = levelCfg.ballCount;
    const palette = [propColor, '#00f2fe', '#fde047', '#f43f5e', '#c084fc'];
    const balls = [];
    for (let i = 0; i < count; i++) {
      const fromLeft = i % 2 === 0;
      balls.push({
        id: i,
        fromLeft,
        targetHand: fromLeft ? 'right' : 'left',
        progress: (i / count) * 0.72,
        speed: levelCfg.juggleSpeed * (0.95 + (i % 3) * 0.05),
        color: palette[i % palette.length],
        waitingCatch: false,
      });
    }
    return balls;
  }, []);

  const initGameSession = useCallback(
    (preserveProgress = false) => {
      soundEngine.init();
      const currentCfg = getLevelConfig(level, activeVipCity);
      const liveSkinObj = resolveSkinObject(equippedSkinRef.current);
      const eng = engineRef.current;

      eng.cfg = currentCfg;
      eng.skinObj = liveSkinObj;
      eng.poleObj = currentPoleObj;
      eng.propObj = currentPropObj;
      eng.gear = { ...gearLevels };
      eng.targetDistance = currentCfg.totalDistance;

      if (!preserveProgress) {
        eng.distance = 0;
        eng.score = 0;
        eng.combo = 0;
        eng.maxCombo = 0;
        eng.frenzyActive = false;
        eng.hookAvailable = true;
        eng.revivedOnce = false;
        eng.floatingPopups = [];
        const shieldFromPole = currentPoleObj.autoSaveFall ? 1 : 0;
        const shieldFromSkin = liveSkinObj.freeShields || 0;
        eng.freeFallShieldsRemaining = shieldFromPole + shieldFromSkin;
      }

      eng.angle = preserveProgress ? 0 : (Math.random() - 0.5) * 0.08;
      eng.angularVel = 0;
      eng.windForce = 0;
      eng.windTarget = (Math.random() - 0.5) * currentCfg.windBase * 0.5;
      eng.windTimer = 1.6;
      eng.controlInput = 0;
      eng.hookActive = false;
      eng.hookTimer = 0;
      eng.nearMissCooldown = 0;
      eng.lightningFlashAlpha = 0;
      eng.fallSequence = {
        active: false,
        mode: null,
        timer: 0,
        fallY: 0,
        fallVy: 0,
        fallRotX: 0,
        fallRotZ: 0,
        ropeTopY: 16,
        finalCoins: 0,
        finalScore: 0,
        finalLp: 0,
        finalGems: 0,
      };
      eng.balls = createBallsForConfig(currentCfg, currentPropObj.color);
      eng.sparks = [];
      eng.lastTimestamp = performance.now();
      eng.running = true;

      setHudData({
        progress: Math.min(100, Math.floor((eng.distance / eng.targetDistance) * 100)),
        metersRemaining: Math.max(0, Math.ceil(eng.targetDistance - eng.distance)),
        totalMeters: eng.targetDistance,
        score: Math.floor(eng.score),
        combo: eng.combo,
        frenzyActive: eng.frenzyActive,
        tiltRatio: 0,
        windForce: 0,
        juggleAlertHands: { left: false, right: false },
        hookAvailable: eng.hookAvailable,
        hookActive: false,
        fallCinematicPhase: null,
        floatingPopups: [],
      });
    },
    [level, activeVipCity, currentPoleObj, currentPropObj, gearLevels, createBallsForConfig]
  );

  const startPlay = () => {
    if (checkNeedsOnboarding()) {
      setShowOnboardingModal(true);
      return;
    }
    setPreviewSkin(null);
    equippedSkinRef.current = equippedSkin;
    initGameSession(false);
    setGameState('playing');
  };

  const triggerPause = () => {
    if (gameState === 'playing') {
      engineRef.current.running = false;
      soundEngine.updateWind(0);
      setGameState('paused');
    } else if (gameState === 'paused') {
      engineRef.current.lastTimestamp = performance.now();
      engineRef.current.running = true;
      setGameState('playing');
    }
  };

  const handleCatchHand = useCallback(
    (hand) => {
      const eng = engineRef.current;
      if (!eng.running || eng.fallSequence.active) return;

      const liveSkin = resolveSkinObject(equippedSkinRef.current);
      const gloveBonus = (eng.gear?.gloves || 0) * 0.015;
      const poleCatchBonus = eng.poleObj?.catchRadiusBonus || 0;
      const skinCatchBonus = liveSkin?.catchWindowBonus || 0;
      const catchThreshold = Math.max(
        0.5,
        0.74 -
          (eng.cfg?.catchWindow || 0.24) -
          gloveBonus -
          (poleCatchBonus + skinCatchBonus) * 0.35
      );

      let caughtBall = null;
      let bestProgress = -1;

      for (const b of eng.balls) {
        if (b.targetHand === hand && b.progress >= catchThreshold && b.progress > bestProgress) {
          bestProgress = b.progress;
          caughtBall = b;
        }
      }

      if (caughtBall) {
        const wasPerfect = caughtBall.progress >= 0.85 && caughtBall.progress <= 0.96;
        caughtBall.fromLeft = hand === 'left';
        caughtBall.targetHand = hand === 'left' ? 'right' : 'left';
        caughtBall.progress = 0.02;
        caughtBall.waitingCatch = false;

        eng.combo += 1;
        if (eng.combo > eng.maxCombo) eng.maxCombo = eng.combo;

        const wasFrenzy = eng.frenzyActive;
        eng.frenzyActive = eng.combo >= 10;

        if (!wasFrenzy && eng.frenzyActive) {
          soundEngine.playFrenzyStart();
          pushFloatingPopup(
            eng,
            lang === 'es' ? '🔥 ¡MODO FRENESÍ x2!' : '🔥 FRENZY MODE x2!',
            '#fde047',
            lang === 'es' ? 'COMBO x10 ALCANZADO' : 'COMBO x10 REACHED'
          );
        } else {
          soundEngine.playCatch(eng.combo, eng.frenzyActive);
          if (wasPerfect) {
            pushFloatingPopup(
              eng,
              lang === 'es' ? `⚡ ¡PERFECTO! x${eng.combo}` : `⚡ PERFECT! x${eng.combo}`,
              eng.frenzyActive ? '#fde047' : '#00f2fe'
            );
          }
        }

        const frenzyBonus = eng.frenzyActive ? 2 : 1;
        eng.score += Math.round((28 + eng.combo * 9) * totalScoreMultiplier * frenzyBonus);

        if (!eng.poleObj?.noCatchRecoil) {
          const catchRecoil = eng.cfg?.catchRecoilImpulse ?? 0.05;
          eng.angularVel += (hand === 'left' ? -1 : 1) * catchRecoil;
        }

        for (let s = 0; s < 10; s++) {
          eng.sparks.push({
            hand,
            x: (Math.random() - 0.5) * 0.25,
            y: (Math.random() - 0.5) * 0.25,
            vx: (Math.random() - 0.5) * 3.8,
            vy: 0.9 + Math.random() * 2.8,
            vz: (Math.random() - 0.5) * 2.8,
            ttl: 0.42,
            color: eng.frenzyActive ? '#fde047' : caughtBall.color,
          });
        }
      } else {
        eng.angularVel += hand === 'left' ? -0.16 : 0.16;
        eng.combo = 0;
        eng.frenzyActive = false;
        soundEngine.playMissAlert();
      }
    },
    [totalScoreMultiplier, lang, pushFloatingPopup]
  );

  const activateLifelineHook = useCallback(() => {
    const eng = engineRef.current;
    if (!eng.running || !eng.hookAvailable || eng.fallSequence.active) return;
    eng.hookAvailable = false;
    eng.hookActive = true;
    eng.hookTimer = 2.6;
    eng.angle *= 0.15;
    eng.angularVel = 0;
    soundEngine.playHookRescue();
    pushFloatingPopup(
      eng,
      lang === 'es' ? '🪝 ¡GANCHO SALVAVIDAS!' : '🪝 LIFELINE HOOK!',
      '#4ade80',
      lang === 'es' ? 'ESTABILIDAD RESTAURADA' : 'STABILITY RESTORED'
    );
    showToast(lang === 'es' ? '🪝 ¡Gancho Salvavidas Activado!' : '🪝 Lifeline Hook Activated!');
  }, [lang, showToast, pushFloatingPopup]);

  useEffect(() => {
    const onKeyDown = (e) => {
      const eng = engineRef.current;
      if (gameState !== 'playing' || !eng.running) return;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        eng.controlInput = -1;
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        eng.controlInput = 1;
      } else if (e.key === 'q' || e.key === 'Q') {
        handleCatchHand('left');
      } else if (e.key === 'e' || e.key === 'E') {
        handleCatchHand('right');
      } else if (e.key === ' ') {
        e.preventDefault();
        activateLifelineHook();
      } else if (e.key === 'Escape') {
        triggerPause();
      }
    };
    const onKeyUp = (e) => {
      const eng = engineRef.current;
      if ((e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') && eng.controlInput < 0) {
        eng.controlInput = 0;
      }
      if ((e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') && eng.controlInput > 0) {
        eng.controlInput = 0;
      }
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [gameState, handleCatchHand, activateLifelineHook]);

  // ============================================================================
  // THREE.JS INITIALIZATION & RESIZE HANDLER
  // ============================================================================
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const world = buildThreeWorld(container);
    threeWorldRef.current = world;
    applySkinToAcrobat(equippedSkinRef.current, world, false);

    const handleResize = () => {
      if (!container || !threeWorldRef.current) return;
      const w = container.clientWidth || 390;
      const h = container.clientHeight || 844;
      threeWorldRef.current.camera.aspect = w / h;
      threeWorldRef.current.camera.updateProjectionMatrix();
      threeWorldRef.current.renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      soundEngine.updateWind(0);
      if (world && world.renderer && world.renderer.domElement) {
        if (container.contains(world.renderer.domElement)) {
          container.removeChild(world.renderer.domElement);
        }
        world.renderer.dispose();
      }
    };
  }, []);

  // ============================================================================
  // MAIN GAME LOOP (PHYSICS + THREE.JS RENDER CON `equippedSkinRef.current`)
  // ============================================================================
  useEffect(() => {
    const eng = engineRef.current;
    const initialSkinObj = resolveSkinObject(equippedSkinRef.current);

    if (!eng.cfg) {
      eng.cfg = cfg;
      eng.skinObj = initialSkinObj;
      eng.poleObj = currentPoleObj;
      eng.propObj = currentPropObj;
      eng.gear = { ...gearLevels };
      eng.targetDistance = cfg.totalDistance;
      eng.balls = createBallsForConfig(cfg, currentPropObj.color);
    } else {
      eng.skinObj = initialSkinObj;
      eng.poleObj = currentPoleObj;
      eng.propObj = currentPropObj;
      eng.gear = { ...gearLevels };
      if (!eng.running && gameState === 'menu') {
        eng.cfg = cfg;
        eng.targetDistance = cfg.totalDistance;
      }
    }

    const tick = (now) => {
      const dt = Math.min(0.05, Math.max(0.001, (now - (eng.lastTimestamp || now)) / 1000));
      eng.lastTimestamp = now;

      // PASO 1: Leer SIEMPRE `equippedSkinRef.current` en tiempo real en cada frame
      const liveSkinId = equippedSkinRef.current;
      const liveSkinObj = resolveSkinObject(liveSkinId);
      eng.skinObj = liveSkinObj;

      if (eng.floatingPopups.length > 0) {
        for (let i = eng.floatingPopups.length - 1; i >= 0; i--) {
          eng.floatingPopups[i].ttl -= dt;
          if (eng.floatingPopups[i].ttl <= 0) {
            eng.floatingPopups.splice(i, 1);
          }
        }
      }

      if (eng.lightningFlashAlpha > 0) {
        eng.lightningFlashAlpha = Math.max(0, eng.lightningFlashAlpha - dt * 2.4);
      }

      if (eng.running && gameState === 'playing') {
        const lCfg = eng.cfg;

        if (eng.fallSequence.active) {
          eng.fallSequence.timer += dt;
          soundEngine.updateWind(0);

          if (eng.fallSequence.mode === 'hook_rescue') {
            if (eng.fallSequence.timer < 0.58) {
              eng.fallSequence.fallVy -= 24 * dt;
              eng.fallSequence.fallY += eng.fallSequence.fallVy * dt;
              eng.fallSequence.fallRotX += 2.2 * dt;
              eng.fallSequence.fallRotZ += (eng.angle >= 0 ? 1 : -1) * 2.5 * dt;
              eng.fallSequence.ropeTopY = Math.max(
                eng.fallSequence.fallY + 1.8,
                16 - eng.fallSequence.timer * 28
              );
            } else if (eng.fallSequence.timer < 1.38) {
              const pullT = (eng.fallSequence.timer - 0.58) / 0.8;
              eng.fallSequence.fallY = THREE_LERP(eng.fallSequence.fallY, 0, pullT * 0.25);
              eng.fallSequence.fallRotX = THREE_LERP(eng.fallSequence.fallRotX, 0, pullT * 0.3);
              eng.fallSequence.fallRotZ = THREE_LERP(eng.fallSequence.fallRotZ, 0, pullT * 0.3);
              eng.fallSequence.ropeTopY = eng.fallSequence.fallY + 2.2 + pullT * 10;
            } else {
              eng.fallSequence.active = false;
              eng.fallSequence.mode = null;
              eng.fallSequence.fallY = 0;
              eng.fallSequence.fallRotX = 0;
              eng.fallSequence.fallRotZ = 0;
              eng.angle = 0;
              eng.angularVel = 0;
              eng.hookActive = true;
              eng.hookTimer = 2.0;
              pushFloatingPopup(
                eng,
                lang === 'es' ? '🪝 ¡RESCATE EN EL AIRE!' : '🪝 MID-AIR HOOK RESCUE!',
                '#4ade80',
                lang === 'es' ? 'DEVUELTO AL CABLE' : 'PULLED BACK TO CABLE'
              );
            }
          } else if (eng.fallSequence.mode === 'gameover_fall') {
            eng.fallSequence.fallVy -= 28 * dt;
            eng.fallSequence.fallY += eng.fallSequence.fallVy * dt;
            eng.fallSequence.fallRotX += 3.4 * dt;
            eng.fallSequence.fallRotZ += (eng.angle >= 0 ? 1 : -1) * 4.2 * dt;

            if (eng.fallSequence.timer >= 1.5) {
              eng.running = false;
              setRunResult({
                coinsEarned: eng.fallSequence.finalCoins,
                scoreEarned: eng.fallSequence.finalScore,
                lpEarned: eng.fallSequence.finalLp,
                gemsEarned: 0,
                doubled: false,
                revivedOnce: eng.revivedOnce,
              });
              setCoins((c) => c + eng.fallSequence.finalCoins);
              setLeaguePoints((lp) => {
                const nextLp = lp + eng.fallSequence.finalLp;
                syncPlayerScore(playerName || 'Equilibrista', playerCountry, nextLp, level);
                return nextLp;
              });
              setBestScore((b) => Math.max(b, eng.fallSequence.finalScore));
              setGameState('gameover');
            }
          }
        } else {
          // 1. Reducciones y Bonificaciones de Armería + Vara 3D + Aspecto en vivo (`SKINS_CATALOG`)
          const armoryPoleBonus = Math.min(0.45, (eng.gear.pole || 0) * 0.048);
          const poleGravityRed = eng.poleObj?.gravityReduction || 0;
          const skinGravityMod =
            liveSkinObj.gravityMod ?? 1 - (liveSkinObj.gravityReduction || 0);
          const totalGravityFactor = Math.max(
            0.18,
            (1 - armoryPoleBonus) * (1 - poleGravityRed) * skinGravityMod
          );

          const armoryBootBonus = Math.min(0.48, (eng.gear.boots || 0) * 0.052);
          const skinWindResist = liveSkinObj.windResist ?? liveSkinObj.windReduction ?? 0;
          const totalWindFactor = Math.max(0.2, (1 - armoryBootBonus) * (1 - skinWindResist));

          const totalStepDampFactor = Math.max(
            0.25,
            1 - Math.min(0.75, (eng.poleObj?.stepDamp || 0) + (liveSkinObj.stepDampBonus || 0))
          );

          const skinRecoveryBonus = liveSkinObj.recoveryBonus || 0;

          // 2. Viento y Ráfagas
          eng.windTimer -= dt;
          if (eng.windTimer <= 0) {
            const gustChangeInterval = lCfg.gustInterval ?? 1.8;
            eng.windTimer = gustChangeInterval * (0.75 + Math.random() * 0.45);
            const reverseSign =
              Math.abs(eng.windTarget) > 0.05 && Math.random() < 0.72
                ? -Math.sign(eng.windTarget)
                : Math.random() < 0.5
                ? -1
                : 1;
            const rawGust = (0.45 + Math.random() * 0.65) * lCfg.windBase * reverseSign;
            eng.windTarget = rawGust * totalWindFactor;

            if (
              lCfg.city?.weatherArchetype === 'cyber_rain' &&
              Math.abs(rawGust) > 0.7 &&
              Math.random() < 0.45
            ) {
              eng.lightningFlashAlpha = 0.85;
            }
          }
          eng.windForce += (eng.windTarget - eng.windForce) * dt * 2.8;
          soundEngine.updateWind(eng.windForce);

          if (eng.hookActive) {
            eng.hookTimer -= dt;
            if (eng.hookTimer <= 0) eng.hookActive = false;
          }

          // 3. Avance e impacto de pisada
          const prevWalkCycle = eng.walkCycle;
          const walkCycleRate = 3.2 * lCfg.walkSpeed;
          eng.walkCycle += dt * walkCycleRate;

          const prevStepIndex = Math.floor(prevWalkCycle / Math.PI);
          const currStepIndex = Math.floor(eng.walkCycle / Math.PI);
          if (currStepIndex !== prevStepIndex) {
            const footSign = currStepIndex % 2 === 0 ? 1 : -1;
            const stepImpulse = (lCfg.stepSwayImpulse ?? 0.04) * totalStepDampFactor;
            eng.angularVel += footSign * stepImpulse * (eng.hookActive ? 0.25 : 1);
            soundEngine.playFootstep(lCfg.walkSpeed);
          }

          // 4. Física de Péndulo Invertido (con bonus de recuperación de Night Runner / Pro Skins)
          const gravityTorque =
            Math.sin(eng.angle) * lCfg.gravity * totalGravityFactor * (eng.hookActive ? 0.25 : 1);
          const windTorque = eng.windForce * 0.78 * (eng.hookActive ? 0.2 : 1);
          const playerTorque = eng.controlInput * 3.15 * (1 + skinRecoveryBonus);
          const microTurbulence =
            Math.sin(now * 0.0047) *
            0.12 *
            lCfg.walkSpeed *
            totalStepDampFactor *
            (eng.hookActive ? 0.2 : 1);

          eng.angularVel += (gravityTorque + windTorque + playerTorque + microTurbulence) * dt;
          eng.angularVel *= Math.pow(0.88, dt * 60);
          eng.angle += eng.angularVel * dt;

          if (eng.hookActive) {
            eng.angle *= Math.pow(0.86, dt * 60);
          }

          // 5. Salvada al Límite (Near-Miss)
          if (eng.nearMissCooldown > 0) eng.nearMissCooldown -= dt;
          const absRatio = Math.abs(eng.angle) / CRITICAL_ANGLE_RAD;
          if (
            absRatio >= 0.78 &&
            absRatio < 0.98 &&
            eng.nearMissCooldown <= 0 &&
            eng.angle * eng.controlInput < 0 &&
            Math.abs(eng.controlInput) > 0.1
          ) {
            eng.nearMissCooldown = 2.4;
            const nearBonus = Math.round(150 * totalScoreMultiplier * (eng.frenzyActive ? 2 : 1));
            eng.score += nearBonus;
            soundEngine.playNearMiss();
            pushFloatingPopup(
              eng,
              lang === 'es'
                ? `⚡ ¡SALVADA AL LÍMITE! +${nearBonus}`
                : `⚡ NEAR-MISS SAVE! +${nearBonus}`,
              '#38bdf8',
              lang === 'es' ? 'RECUPERACIÓN EXTREMA' : 'EXTREME RECOVERY'
            );
          }

          // 6. Avance hacia la meta
          const stabilityBonus = Math.max(
            0.35,
            1 - Math.abs(eng.angle) / (CRITICAL_ANGLE_RAD * 1.15)
          );
          const forwardMetersPerSec = 4.6 * lCfg.walkSpeed * (0.72 + stabilityBonus * 0.38);
          eng.distance += forwardMetersPerSec * dt;
          eng.score +=
            forwardMetersPerSec * dt * 12 * totalScoreMultiplier * (eng.frenzyActive ? 2 : 1);

          // 7. Vuelo de esferas de malabares
          const alertHands = { left: false, right: false };
          const gloveBonus = (eng.gear?.gloves || 0) * 0.015;
          const poleCatchBonus = eng.poleObj?.catchRadiusBonus || 0;
          const skinCatchBonus = liveSkinObj.catchWindowBonus || 0;
          const catchThreshold = Math.max(
            0.5,
            0.74 - lCfg.catchWindow - gloveBonus - (poleCatchBonus + skinCatchBonus) * 0.35
          );

          for (const b of eng.balls) {
            b.progress += b.speed * dt;
            if (b.progress >= catchThreshold && b.progress <= 1.02) {
              alertHands[b.targetHand] = true;
              b.waitingCatch = true;
            } else {
              b.waitingCatch = false;
            }

            if (b.progress > 1.03) {
              b.fromLeft = b.targetHand === 'left';
              b.targetHand = b.fromLeft ? 'right' : 'left';
              b.progress = 0.0;
              b.waitingCatch = false;
              eng.combo = 0;
              eng.frenzyActive = false;
              const dropPenalty = 0.24 + (lCfg.speedPhase || 0) * 0.04;
              eng.angularVel += b.targetHand === 'left' ? -dropPenalty : dropPenalty;
              soundEngine.playMissAlert();
              pushFloatingPopup(
                eng,
                lang === 'es' ? '⚠️ ¡ESFERA PERDIDA!' : '⚠️ DROPPED ORB!',
                '#ef4444'
              );
            }
          }

          // 8. Chispas 3D
          for (let i = eng.sparks.length - 1; i >= 0; i--) {
            const sp = eng.sparks[i];
            sp.ttl -= dt;
            if (sp.ttl <= 0) {
              eng.sparks.splice(i, 1);
            } else {
              sp.x += sp.vx * dt;
              sp.y += sp.vy * dt;
              sp.vy -= 5.5 * dt;
            }
          }

          // 9. Chequeo de Caída Crítica
          if (Math.abs(eng.angle) >= CRITICAL_ANGLE_RAD) {
            if (eng.freeFallShieldsRemaining > 0) {
              eng.freeFallShieldsRemaining -= 1;
              eng.angle *= 0.12;
              eng.angularVel = 0;
              eng.hookActive = true;
              eng.hookTimer = 2.2;
              soundEngine.playHookRescue();
              pushFloatingPopup(
                eng,
                lang === 'es'
                  ? '🛡️ ¡ESCUDO ANTI-CAÍDA ACTIVADO!'
                  : '🛡️ ANTI-FALL SHIELD ACTIVATED!',
                '#fde047',
                lang === 'es' ? 'PROTECCIÓN PRO / VIP' : 'PRO / VIP PROTECTION'
              );
            } else if (eng.hookAvailable) {
              eng.hookAvailable = false;
              eng.fallSequence.active = true;
              eng.fallSequence.mode = 'hook_rescue';
              eng.fallSequence.timer = 0;
              eng.fallSequence.fallY = 0;
              eng.fallSequence.fallVy = -3.8;
              eng.fallSequence.fallRotX = 0.18;
              eng.fallSequence.fallRotZ = eng.angle * 0.8;
              eng.fallSequence.ropeTopY = 16;
              soundEngine.playFallScream();
              setTimeout(() => soundEngine.playHookRescue(), 460);
              pushFloatingPopup(
                eng,
                lang === 'es' ? '🪝 ¡GANCHO SALVAVIDAS!' : '🪝 LIFELINE HOOK!',
                '#4ade80'
              );
            } else {
              const finalScore = Math.floor(eng.score);
              const finalCoins = Math.max(
                15,
                Math.floor((eng.distance * 1.4 + eng.maxCombo * 6) * totalCoinMultiplier)
              );
              const finalLp = Math.max(
                10,
                Math.floor((eng.distance * 0.8 + eng.maxCombo * 4) * totalLpMultiplier)
              );

              eng.fallSequence.active = true;
              eng.fallSequence.mode = 'gameover_fall';
              eng.fallSequence.timer = 0;
              eng.fallSequence.fallY = 0;
              eng.fallSequence.fallVy = -4.5;
              eng.fallSequence.fallRotX = 0.25;
              eng.fallSequence.fallRotZ = eng.angle;
              eng.fallSequence.finalCoins = finalCoins;
              eng.fallSequence.finalScore = finalScore;
              eng.fallSequence.finalLp = finalLp;
              soundEngine.updateWind(0);
              soundEngine.playFallScream();
            }
          } else if (eng.distance >= eng.targetDistance) {
            // 10. Victoria al cruzar la azotea (multiplicando Puntos, Monedas y LP por el Aspecto)
            eng.running = false;
            soundEngine.updateWind(0);
            soundEngine.playVictory();
            const finalScore = Math.floor(eng.score + 500 * totalScoreMultiplier);
            const finalCoins = Math.floor(
              (125 + level * 26 + eng.maxCombo * 12) * totalCoinMultiplier
            );
            const finalLp = Math.floor(
              (95 + level * 16 + eng.maxCombo * 9) * totalLpMultiplier
            );
            const finalGems =
              (activeVipCity ? activeVipCity.gemBonus : 0) + (level % 5 === 0 ? 12 : 4);

            setRunResult({
              coinsEarned: finalCoins,
              scoreEarned: finalScore,
              lpEarned: finalLp,
              gemsEarned: finalGems,
              doubled: false,
              revivedOnce: eng.revivedOnce,
            });
            setCoins((c) => c + finalCoins);
            setGems((g) => g + finalGems);
            setLeaguePoints((lp) => {
              const nextLp = lp + finalLp;
              syncPlayerScore(playerName || 'Equilibrista', playerCountry, nextLp, level + 1);
              return nextLp;
            });
            setBestScore((b) => Math.max(b, finalScore));
            setMaxUnlockedCity((prev) => Math.max(prev, Math.min(19, Math.floor(level / 5))));
            setGameState('victory');
            return;
          }

          eng.hudSyncTimer += dt;
          if (eng.hudSyncTimer >= 0.07) {
            eng.hudSyncTimer = 0;
            setHudData({
              progress: Math.min(100, Math.floor((eng.distance / eng.targetDistance) * 100)),
              metersRemaining: Math.max(0, Math.ceil(eng.targetDistance - eng.distance)),
              totalMeters: eng.targetDistance,
              score: Math.floor(eng.score),
              combo: eng.combo,
              frenzyActive: eng.frenzyActive,
              tiltRatio: Math.max(-1, Math.min(1, eng.angle / CRITICAL_ANGLE_RAD)),
              windForce: eng.windForce,
              juggleAlertHands: alertHands,
              hookAvailable: eng.hookAvailable,
              hookActive: eng.hookActive,
              fallCinematicPhase: eng.fallSequence.mode,
              floatingPopups: [...eng.floatingPopups],
            });
          }
        }

        if (eng.fallSequence.active) {
          eng.hudSyncTimer += dt;
          if (eng.hudSyncTimer >= 0.07) {
            eng.hudSyncTimer = 0;
            setHudData((prev) => ({
              ...prev,
              fallCinematicPhase: eng.fallSequence.mode,
              floatingPopups: [...eng.floatingPopups],
            }));
          }
        }
      } else {
        eng.walkCycle += dt * 1.4;
      }

      if (threeWorldRef.current) {
        updateAndRenderThreeScene(
          threeWorldRef.current,
          eng,
          now * 0.001,
          gameState,
          equippedSkinRef.current,
          activeTabRef.current
        );
      }

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [
    gameState,
    cfg,
    currentPoleObj,
    currentPropObj,
    gearLevels,
    totalScoreMultiplier,
    totalCoinMultiplier,
    totalLpMultiplier,
    activeVipCity,
    level,
    lang,
    playerName,
    playerCountry,
    createBallsForConfig,
    pushFloatingPopup,
  ]);

  function THREE_LERP(a, b, t) {
    return a + (b - a) * Math.max(0, Math.min(1, t));
  }

  // ============================================================================
  // REWARDED ADS & MONETIZATION ACTIONS
  // ============================================================================
  useEffect(() => {
    if (!showAdModal) return;
    setAdTimer(2);
    const interval = setInterval(() => {
      setAdTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [showAdModal]);

  const completeAdReward = () => {
    const mode = showAdModal;
    setShowAdModal(null);

    if (mode === 'revive') {
      const eng = engineRef.current;
      eng.revivedOnce = true;
      eng.hookAvailable = true;
      initGameSession(true);
      setGameState('playing');
      showToast(lang === 'es' ? '⚡ ¡Segunda oportunidad activada!' : '⚡ Second chance activated!');
    } else if (mode === 'double') {
      if (!runResult.doubled) {
        setCoins((c) => c + runResult.coinsEarned);
        setLeaguePoints((lp) => {
          const nextLp = lp + runResult.lpEarned;
          syncPlayerScore(playerName || 'Equilibrista', playerCountry, nextLp, level);
          return nextLp;
        });
        setRunResult((prev) => ({
          ...prev,
          coinsEarned: prev.coinsEarned * 2,
          lpEarned: prev.lpEarned * 2,
          doubled: true,
        }));
        showToast(lang === 'es' ? '🎬 ¡Recompensas Duplicadas x2!' : '🎬 Rewards Doubled x2!');
      }
    } else if (mode === 'gems') {
      setGems((g) => g + 35);
      showToast(lang === 'es' ? '💎 +35 Gemas Gratis acreditadas' : '💎 +35 Free Gems credited');
    } else if (mode === 'coins') {
      setCoins((c) => c + 1500);
      showToast(
        lang === 'es' ? '🪙 +1.500 Monedas Gratis acreditadas' : '🪙 +1,500 Free Coins credited'
      );
    }
  };

  const handleNextLevel = () => {
    const nextLvl = level + 1;
    setLevel(nextLvl);
    setMaxUnlockedCity((prev) => Math.max(prev, Math.min(19, Math.floor((nextLvl - 1) / 5))));
    setTimeout(() => {
      const eng = engineRef.current;
      const nextCfg = getLevelConfig(nextLvl, activeVipCity);
      const liveSkinObj = resolveSkinObject(equippedSkinRef.current);
      eng.cfg = nextCfg;
      eng.skinObj = liveSkinObj;
      eng.targetDistance = nextCfg.totalDistance;
      eng.distance = 0;
      eng.score = 0;
      eng.combo = 0;
      eng.maxCombo = 0;
      eng.frenzyActive = false;
      eng.angle = 0;
      eng.angularVel = 0;
      eng.hookAvailable = true;
      eng.hookActive = false;
      eng.revivedOnce = false;
      const shieldFromPole = currentPoleObj.autoSaveFall ? 1 : 0;
      const shieldFromSkin = liveSkinObj.freeShields || 0;
      eng.freeFallShieldsRemaining = shieldFromPole + shieldFromSkin;
      eng.fallSequence.active = false;
      eng.fallSequence.mode = null;
      eng.balls = createBallsForConfig(nextCfg, currentPropObj.color);
      eng.lastTimestamp = performance.now();
      eng.running = true;
      setGameState('playing');
    }, 30);
  };

  // ============================================================================
  // UPGRADE DE ARMERÍA (CURVA EXPONENCIAL NV 1-5 + CORTE PRO NV 6-10)
  // ============================================================================
  const handleUpgradeGear = (gearItem) => {
    const curLvl = gearLevels[gearItem.id] || 0;
    const costInfo = getArmoryUpgradeCost(curLvl);
    if (costInfo.isMax) return;

    if (!costInfo.isProTier) {
      if (coins < costInfo.coinCost) {
        showToast(
          lang === 'es'
            ? `🪙 Necesitás ${costInfo.coinCost.toLocaleString()} Monedas`
            : `🪙 Need ${costInfo.coinCost.toLocaleString()} Coins`
        );
        return;
      }
      setCoins((c) => c - costInfo.coinCost);
      setGearLevels((prev) => ({ ...prev, [gearItem.id]: curLvl + 1 }));
      soundEngine.playCatch(curLvl + 2, false);
      showToast(`${gearItem.icon} ${gearItem.name[lang]} Nv.${curLvl + 1}/10!`);
    } else {
      if (vipPassActive) {
        setGearLevels((prev) => ({ ...prev, [gearItem.id]: curLvl + 1 }));
        soundEngine.playVictory();
        showToast(`👑 ${gearItem.name[lang]} Élite Nv.${curLvl + 1}/10 (Pase VIP)!`);
        return;
      }
      if (gems >= costInfo.gemCost) {
        setGems((g) => g - costInfo.gemCost);
        setGearLevels((prev) => ({ ...prev, [gearItem.id]: curLvl + 1 }));
        soundEngine.playVictory();
        showToast(`👑 ${gearItem.name[lang]} Élite Nv.${curLvl + 1}/10!`);
      } else {
        setActiveTab('store');
        showToast(
          lang === 'es'
            ? `👑 Nivel Élite (6-10): Requiere ${costInfo.gemCost} Gemas o Pase VIP Pro`
            : `👑 Elite Tier (6-10): Requires ${costInfo.gemCost} Gems or VIP Pro Pass`
        );
      }
    }
  };

  // ============================================================================
  // COMPRA / EQUIPAMIENTO DE VARAS DE EQUILIBRIO 3D
  // ============================================================================
  const handleSelectOrBuyPole = (pole) => {
    if (unlockedPoles.includes(pole.id) || (pole.isVipOnly && vipPassActive)) {
      if (!unlockedPoles.includes(pole.id)) {
        setUnlockedPoles((prev) => [...prev, pole.id]);
      }
      setEquippedPole(pole.id);
      soundEngine.playCatch(4, false);
      showToast(`${pole.icon} ${pole.name[lang]} ${t.equipped}`);
      return;
    }

    if (pole.currency === 'coins') {
      if (coins >= pole.cost) {
        setCoins((c) => c - pole.cost);
        setUnlockedPoles((prev) => [...prev, pole.id]);
        setEquippedPole(pole.id);
        soundEngine.playVictory();
        showToast(`${pole.icon} ${pole.name[lang]}!`);
      } else {
        showToast(
          lang === 'es'
            ? `🪙 Necesitás ${pole.cost.toLocaleString()} Monedas`
            : `🪙 Need ${pole.cost.toLocaleString()} Coins`
        );
      }
    } else {
      if (gems >= pole.gemCost) {
        setGems((g) => g - pole.gemCost);
        setUnlockedPoles((prev) => [...prev, pole.id]);
        setEquippedPole(pole.id);
        soundEngine.playVictory();
        showToast(`👑 ${pole.name[lang]} Desbloqueada!`);
      } else {
        setActiveTab('store');
        showToast(
          lang === 'es'
            ? `👑 Vara Exclusiva (${pole.usdPrice || `${pole.gemCost} 💎`}): Visitá la Tienda VIP`
            : `👑 Exclusive Pole (${pole.usdPrice || `${pole.gemCost} 💎`}): Visit VIP Store`
        );
      }
    }
  };

  // ============================================================================
  // BLOQUE 3: FLUJO DE COMPRA, AUTO-EQUIPADO INMEDIATO Y CHECKOUT DE PAGA (`applySkinToAcrobat`)
  // ============================================================================
  const handlePreviewSkin = (skin) => {
    const skinKey = resolveSkinKey(skin.id);
    if (previewSkin === skinKey) {
      setPreviewSkin(null);
      equippedSkinRef.current = equippedSkin;
      engineRef.current.skinObj = resolveSkinObject(equippedSkin);
      applySkinToAcrobat(equippedSkin);
      return;
    }
    equippedSkinRef.current = skinKey;
    engineRef.current.skinObj = skin;
    setPreviewSkin(skinKey);
    applySkinToAcrobat(skinKey);
    soundEngine.playCatch(3, false);
    showToast(
      lang === 'es'
        ? `👁️ Probando en 3D: ${skin.icon} ${skin.name.es}`
        : `👁️ Trying in 3D: ${skin.icon} ${skin.name.en}`
    );
  };

  const handleConfirmProSkinPurchase = (skin, useGems = false) => {
    if (!skin) return;
    const skinKey = resolveSkinKey(skin.id);
    if (useGems && skin.gemCost && gems >= skin.gemCost) {
      setGems((g) => g - skin.gemCost);
    }
    const nextOwned = Array.from(new Set([...unlockedSkins, skinKey]));
    setOwnedSkins(nextOwned);
    try {
      localStorage.setItem('nma_owned_skins', JSON.stringify(nextOwned));
      localStorage.setItem('nma_equipped_skin', skinKey);
    } catch {
      // ignore
    }
    setPreviewSkin(null);
    setProCheckoutSkin(null);
    equippedSkinRef.current = skinKey;
    engineRef.current.skinObj = skin;
    setEquippedSkin(skinKey);
    applySkinToAcrobat(skinKey);
    soundEngine.playVictory();
    showToast(
      lang === 'es'
        ? `👑 ¡${skin.name.es} DESBLOQUEADO Y EQUIPADO EN 3D!`
        : `👑 ${skin.name.en} UNLOCKED & EQUIPPED IN 3D!`
    );
  };

  const handleSelectOrBuySkin = (skin) => {
    const skinKey = resolveSkinKey(skin.id);
    const isOwned =
      unlockedSkins.includes(skinKey) ||
      unlockedSkins.includes(skin.legacyId) ||
      (skin.isVipOnly && vipPassActive);

    if (isOwned) {
      if (!unlockedSkins.includes(skinKey)) {
        const nextOwned = Array.from(new Set([...unlockedSkins, skinKey]));
        setOwnedSkins(nextOwned);
        try {
          localStorage.setItem('nma_owned_skins', JSON.stringify(nextOwned));
        } catch {
          // ignore
        }
      }
      // Sincronización inmediata del Ref + Estado + Modelo 3D en el acto
      setPreviewSkin(null);
      equippedSkinRef.current = skinKey;
      engineRef.current.skinObj = skin;
      setEquippedSkin(skinKey);
      applySkinToAcrobat(skinKey);
      soundEngine.playCatch(5, true);
      showToast(`${skin.icon} ${skin.name[lang]} — ${t.equipped}!`);
      return;
    }

    const coinPrice = skin.price ?? skin.cost ?? 0;
    if (skin.currency === 'coins') {
      if (coins >= coinPrice) {
        setCoins((c) => c - coinPrice);
        const nextOwned = Array.from(new Set([...unlockedSkins, skinKey]));
        setOwnedSkins(nextOwned);
        try {
          localStorage.setItem('nma_owned_skins', JSON.stringify(nextOwned));
          localStorage.setItem('nma_equipped_skin', skinKey);
        } catch {
          // ignore
        }
        setPreviewSkin(null);
        equippedSkinRef.current = skinKey;
        engineRef.current.skinObj = skin;
        setEquippedSkin(skinKey);
        applySkinToAcrobat(skinKey);
        soundEngine.playVictory();
        showToast(`${skin.icon} ${skin.name[lang]} ${t.equipped}!`);
      } else {
        // Aun sin monedas suficientes, activa vista previa 3D inmediata
        equippedSkinRef.current = skinKey;
        engineRef.current.skinObj = skin;
        setPreviewSkin(skinKey);
        applySkinToAcrobat(skinKey);
        showToast(
          lang === 'es'
            ? `🪙 Necesitás ${coinPrice.toLocaleString()} Monedas (Probando en 3D)`
            : `🪙 Need ${coinPrice.toLocaleString()} Coins (Trying in 3D)`
        );
      }
    } else {
      // BLOQUE 3.2: Abrir modal de Confirmación de Compra Pro / Pasarela VIP y activar vista previa 3D inmediata
      equippedSkinRef.current = skinKey;
      engineRef.current.skinObj = skin;
      setPreviewSkin(skinKey);
      applySkinToAcrobat(skinKey);
      setProCheckoutSkin(skin);
    }
  };

  const handleBuyPermanentMultiplier = (multItem) => {
    if (ownedMultipliers.includes(multItem.id)) {
      showToast(lang === 'es' ? '✅ Multiplicador ya activo' : '✅ Multiplier already active');
      return;
    }
    if (multItem.isVipOnly && vipPassActive) {
      setOwnedMultipliers((prev) => [...prev, multItem.id]);
      soundEngine.playVictory();
      showToast(`👑 ${multItem.name[lang]} Activado!`);
      return;
    }
    if (multItem.currency === 'coins') {
      if (coins >= multItem.cost) {
        setCoins((c) => c - multItem.cost);
        setOwnedMultipliers((prev) => [...prev, multItem.id]);
        soundEngine.playVictory();
        showToast(`🚀 ${multItem.name[lang]} Activado!`);
      } else {
        showToast(
          lang === 'es'
            ? `🪙 Necesitás ${multItem.cost.toLocaleString()} Monedas`
            : `🪙 Need ${multItem.cost.toLocaleString()} Coins`
        );
      }
    } else {
      if (gems >= multItem.gemCost) {
        setGems((g) => g - multItem.gemCost);
        setOwnedMultipliers((prev) => [...prev, multItem.id]);
        soundEngine.playVictory();
        showToast(`👑 ${multItem.name[lang]} Activado!`);
      } else {
        setActiveTab('store');
        showToast(
          lang === 'es'
            ? `👑 Multiplicador Pro (${multItem.usdPrice}): Requiere ${multItem.gemCost} 💎 o Pase VIP`
            : `👑 Pro Multiplier (${multItem.usdPrice}): Requires ${multItem.gemCost} 💎 or VIP Pass`
        );
      }
    }
  };

  const handleSelectOrBuyProp = (prop) => {
    if (unlockedProps.includes(prop.id)) {
      setEquippedProp(prop.id);
      showToast(`${prop.icon} ${prop.name[lang]} ${t.equipped}`);
      return;
    }
    if (prop.currency === 'coins') {
      if (coins >= prop.cost) {
        setCoins((c) => c - prop.cost);
        setUnlockedProps((prev) => [...prev, prop.id]);
        setEquippedProp(prop.id);
        soundEngine.playVictory();
        showToast(`${prop.icon} ${prop.name[lang]}!`);
      } else {
        showToast(
          lang === 'es'
            ? `🪙 Necesitás ${prop.cost.toLocaleString()} Monedas`
            : `🪙 Need ${prop.cost.toLocaleString()} Coins`
        );
      }
    } else {
      if (gems >= prop.cost) {
        setGems((g) => g - prop.cost);
        setUnlockedProps((prev) => [...prev, prop.id]);
        setEquippedProp(prop.id);
        soundEngine.playVictory();
        showToast(`${prop.icon} ${prop.name[lang]}!`);
      } else {
        setActiveTab('store');
        showToast(lang === 'es' ? '💎 Gemas insuficientes' : '💎 Not enough gems');
      }
    }
  };

  const handleSelectCity = (cityIdx) => {
    const highestUnlocked = Math.max(maxUnlockedCity, Math.min(19, Math.floor((level - 1) / 5)));
    if (cityIdx > highestUnlocked) return;
    const targetLevel = cityIdx * 5 + 1;
    setActiveVipCityId(null);
    setLevel(targetLevel);
    setShowCitySelectorModal(false);
    showToast(
      lang === 'es'
        ? `✈️ Viajaste a ${CITIES[cityIdx].flag} ${CITIES[cityIdx].name.es} (Nivel ${targetLevel})`
        : `✈️ Traveled to ${CITIES[cityIdx].flag} ${CITIES[cityIdx].name.en} (Level ${targetLevel})`
    );
  };

  const handleSelectOrUnlockVipCity = (vipCity) => {
    const isUnlocked = vipPassActive || unlockedVipCities.includes(vipCity.id);
    if (isUnlocked) {
      setActiveVipCityId(vipCity.id);
      setShowCitySelectorModal(false);
      soundEngine.playVictory();
      showToast(
        lang === 'es'
          ? `👑 Ciudad VIP Activa: ${vipCity.flag} ${vipCity.name.es} (x${vipCity.rewardMult} Recompensas)`
          : `👑 VIP City Active: ${vipCity.flag} ${vipCity.name.en} (x${vipCity.rewardMult} Rewards)`
      );
      return;
    }

    if (gems >= vipCity.gemUnlockCost) {
      setGems((g) => g - vipCity.gemUnlockCost);
      setUnlockedVipCities((prev) => [...prev, vipCity.id]);
      setActiveVipCityId(vipCity.id);
      setShowCitySelectorModal(false);
      soundEngine.playVictory();
      showToast(`👑 ${vipCity.flag} ${vipCity.name[lang]} Desbloqueada!`);
    } else {
      setShowCitySelectorModal(false);
      setActiveTab('store');
      showToast(
        lang === 'es'
          ? `🔒 Ciudad Exclusiva VIP: Desbloqueala con Pase VIP Pro o ${vipCity.gemUnlockCost} 💎`
          : `🔒 Exclusive VIP City: Unlock with VIP Pro Pass or ${vipCity.gemUnlockCost} 💎`
      );
    }
  };

  const handleBuyBundle = (bundle) => {
    setGems((g) => g + bundle.gems);
    setCoins((c) => c + bundle.coins);
    if (bundle.isVipPassBundle) {
      setVipPassActive(true);
      setUnlockedPoles((prev) => Array.from(new Set([...prev, 'pole_imperial', 'pole_quantum'])));
      setEquippedPole('pole_imperial');
      setUnlockedSkins((prev) =>
        Array.from(
          new Set([
            ...prev,
            'shinobi',
            'ronin_gold',
            'quantum_specter',
            'immortal_legend',
            'leyenda_dorada',
          ])
        )
      );
      setPreviewSkin(null);
      equippedSkinRef.current = 'immortal_legend';
      setEquippedSkin('immortal_legend');
      setOwnedMultipliers((prev) => Array.from(new Set([...prev, 'mult_x3_pro'])));
      setUnlockedVipCities(VIP_CITIES.map((vc) => vc.id));
    }
    setLeaguePoints((lp) => {
      const nextLp = lp + (bundle.leaguePts || 200);
      syncPlayerScore(playerName || 'Equilibrista', playerCountry, nextLp, level);
      return nextLp;
    });
    soundEngine.playVictory();
    showToast(
      bundle.isVipPassBundle
        ? lang === 'es'
          ? '👑 ¡PASE VIP PRO ACTIVADO! Todo el equipo Élite y Ciudades VIP desbloqueadas'
          : '👑 VIP PRO PASS ACTIVATED! All Elite gear & VIP Cities unlocked'
        : `👑 ${bundle.name[lang]} (+${bundle.gems} 💎 / +${bundle.coins.toLocaleString()} 🪙)`
    );
  };

  const handleClaimTier = (tier) => {
    if (claimedTiers.includes(tier.id) || leaguePoints < tier.requiredLp) return;
    setClaimedTiers((prev) => [...prev, tier.id]);
    setGems((g) => g + tier.gemsReward);
    setCoins((c) => c + tier.coinsReward);
    soundEngine.playVictory();
    showToast(`🏆 +${tier.gemsReward} 💎 & +${tier.coinsReward} 🪙!`);
  };

  const leaderboard =
    liveLeaderboard.length > 0
      ? liveLeaderboard
      : [
          {
            id: 'player_self',
            name: playerName || 'Equilibrista',
            country: playerCountry,
            flag: getCountryFlag(playerCountry),
            score: leaguePoints,
            lp: leaguePoints,
            level,
            isPlayer: true,
          },
        ];
  const playerRankIndex = leaderboard.findIndex((r) => r.isPlayer);
  const playerRank = playerRankIndex >= 0 ? playerRankIndex + 1 : 1;

  const windDirArrow =
    Math.abs(hudData.windForce) < 0.08
      ? '•'
      : hudData.windForce > 0
      ? '>>>'
      : '<<<';

  const highestUnlockedCityIdx = Math.max(
    maxUnlockedCity,
    Math.min(19, Math.floor((level - 1) / 5))
  );
  const playerFlagEmoji = getCountryFlag(playerCountry);

  return (
    <div className="app-root">
      <div className="phone-frame">
        {/* CONTENEDOR 3D WEBGL (THREE.JS VECTOR ENGINE + ASPECTOS EN VIVO + MONUMENTOS 3D) */}
        <div
          ref={mountRef}
          className="game-canvas"
          style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
        />

        {/* TOAST FEEDBACK */}
        {toastMsg && <div className="toast-banner">{toastMsg}</div>}

        {/* ====================================================================
            MODAL DE BIENVENIDA Y REGISTRO OBLIGATORIO (ONBOARDING)
            ==================================================================== */}
        {showOnboardingModal && (
          <div className="modal-backdrop onboarding-backdrop" style={{ zIndex: 250 }}>
            <form
              className="modal-card onboarding-modal-card"
              onSubmit={handleSaveOnboardingProfile}
            >
              <div className="onboarding-crown-badge">
                {lang === 'es' ? '🏆 LIGA MUNDIAL EN VIVO' : '🏆 LIVE WORLD LEAGUE'}
              </div>
              <h2 className="modal-title onboarding-title">
                {lang === 'es'
                  ? '⚡ CREÁ TU PERFIL DE EQUILIBRISTA'
                  : '⚡ CREATE YOUR TIGHTROPE PROFILE'}
              </h2>
              <p className="modal-subtitle onboarding-subtitle">
                {lang === 'es'
                  ? 'Elegí tu nombre y país para competir en el Ranking Mundial en vivo.'
                  : 'Choose your name and country to compete on the Live World Leaderboard.'}
              </p>

              <div className="onboarding-field-group">
                <label className="onboarding-label" htmlFor="onboarding-name-input">
                  {lang === 'es'
                    ? '1. TU NOMBRE O APODO (3 A 15 CARACTERES)'
                    : '1. YOUR NAME OR NICKNAME (3 TO 15 CHARS)'}
                </label>
                <input
                  id="onboarding-name-input"
                  type="text"
                  maxLength={15}
                  autoFocus
                  className={`onboarding-input ${onboardingError ? 'input-error-shake' : ''}`}
                  placeholder={
                    lang === 'es'
                      ? 'Tu Nombre o Apodo (Ej: Maury_AR)'
                      : 'Your Nickname (e.g. Maury_AR)'
                  }
                  value={onboardingNameInput}
                  onChange={(e) => {
                    setOnboardingNameInput(e.target.value);
                    if (onboardingError) setOnboardingError(false);
                  }}
                />
                {onboardingError && (
                  <div className="onboarding-error-msg">
                    {lang === 'es'
                      ? '⚠️ Ingresá un nombre válido de al menos 3 caracteres.'
                      : '⚠️ Please enter a valid name of at least 3 characters.'}
                  </div>
                )}
              </div>

              <div className="onboarding-field-group">
                <label className="onboarding-label">
                  {lang === 'es'
                    ? '2. SELECCIONÁ TU PAÍS / BANDERA'
                    : '2. SELECT YOUR COUNTRY / FLAG'}
                </label>
                <div className="onboarding-country-grid">
                  {COUNTRIES.map((c) => {
                    const selected = onboardingCountryInput === c.code;
                    return (
                      <button
                        type="button"
                        key={c.code}
                        className={`onboarding-country-chip ${selected ? 'selected' : ''}`}
                        onClick={() => setOnboardingCountryInput(c.code)}
                      >
                        <span className="country-chip-flag">{c.flag}</span>
                        <span className="country-chip-code">{c.code}</span>
                        <span className="country-chip-name">{c.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button type="submit" className="onboarding-submit-btn">
                {lang === 'es'
                  ? '🚀 GUARDAR Y ENTRAR A COMPETIR'
                  : '🚀 SAVE & START COMPETING'}
              </button>
            </form>
          </div>
        )}

        {/* ====================================================================
            MODAL SELECTOR DE CIUDADES (CAMPAÑA 20 CIUDADES + 4 CIUDADES VIP)
            ==================================================================== */}
        {showCitySelectorModal && (
          <div className="modal-backdrop" style={{ zIndex: 120 }}>
            <div
              className="modal-card"
              style={{
                maxHeight: '86%',
                display: 'flex',
                flexDirection: 'column',
                padding: '16px 14px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 8,
                }}
              >
                <h2 className="modal-title" style={{ fontSize: 16, margin: 0 }}>
                  {lang === 'es'
                    ? '🌍 CIUDADES Y MONUMENTOS 3D'
                    : '🌍 CITIES & 3D LANDMARKS'}
                </h2>
                <button
                  className="hud-pause-btn"
                  onClick={() => setShowCitySelectorModal(false)}
                  style={{ width: 30, height: 30, fontSize: 13 }}
                >
                  ✕
                </button>
              </div>

              <div
                className="items-scroll-list"
                style={{ flex: 1, overflowY: 'auto', paddingRight: 4 }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 900,
                    color: '#fde047',
                    letterSpacing: 0.8,
                    marginBottom: 6,
                    marginTop: 2,
                  }}
                >
                  {t.vipCitiesTitle}
                </div>
                {VIP_CITIES.map((vc) => {
                  const isUnlocked = vipPassActive || unlockedVipCities.includes(vc.id);
                  const isCurrentVip = activeVipCityId === vc.id;
                  return (
                    <div
                      key={vc.id}
                      className="item-card vip-city-card"
                      style={{
                        cursor: 'pointer',
                        borderColor: isCurrentVip
                          ? 'rgba(253, 224, 71, 0.95)'
                          : 'rgba(250, 204, 21, 0.45)',
                      }}
                      onClick={() => handleSelectOrUnlockVipCity(vc)}
                    >
                      <div className="item-icon-box" style={{ fontSize: 22 }}>
                        {isUnlocked ? vc.flag : '🔒'}
                      </div>
                      <div className="item-info">
                        <div className="item-title" style={{ color: '#fde047' }}>
                          👑 {vc.name[lang]}
                        </div>
                        <div className="benefit-pill-tag pro">
                          x{vc.rewardMult} 🪙/LP • +{vc.gemBonus} 💎 POR CRUCE
                        </div>
                        <div className="item-desc">{vc.desc[lang]}</div>
                      </div>
                      <button
                        className={`item-action-btn ${
                          isCurrentVip ? 'equipped' : 'buy-gems'
                        }`}
                      >
                        {isCurrentVip
                          ? lang === 'es'
                            ? 'ACTIVA'
                            : 'ACTIVE'
                          : isUnlocked
                          ? lang === 'es'
                            ? 'VIAJAR'
                            : 'TRAVEL'
                          : `👑 ${vc.gemUnlockCost} 💎`}
                      </button>
                    </div>
                  );
                })}

                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 900,
                    color: '#38bdf8',
                    letterSpacing: 0.8,
                    margin: '12px 0 6px',
                  }}
                >
                  {lang === 'es'
                    ? '🏙️ 20 CIUDADES DEL TOUR MUNDIAL (MONUMENTOS 3D)'
                    : '🏙️ 20 WORLD TOUR CITIES (3D LANDMARKS)'}
                </div>
                {CITIES.map((city, idx) => {
                  const isUnlocked = idx <= highestUnlockedCityIdx;
                  const isCurrent = !activeVipCityId && cfg.cityIndex === idx;
                  const startLvl = idx * 5 + 1;
                  const endLvl = idx * 5 + 5;
                  return (
                    <div
                      key={city.index}
                      className={`item-card ${isCurrent ? 'selected' : ''}`}
                      style={{
                        opacity: isUnlocked ? 1 : 0.52,
                        cursor: isUnlocked ? 'pointer' : 'not-allowed',
                      }}
                      onClick={() => isUnlocked && handleSelectCity(idx)}
                    >
                      <div className="item-icon-box" style={{ fontSize: 22 }}>
                        {isUnlocked ? city.flag : '🔒'}
                      </div>
                      <div className="item-info">
                        <div className="item-title">
                          {idx + 1}. {city.name[lang]}
                        </div>
                        <div className="benefit-pill-tag">
                          🗿 {city.monumentName?.[lang] || city.weatherLabel?.[lang]}
                        </div>
                        <div className="item-desc">
                          {lang === 'es'
                            ? `Niveles ${startLvl} al ${endLvl} • ${city.weatherLabel?.es}`
                            : `Levels ${startLvl} to ${endLvl} • ${city.weatherLabel?.en}`}
                        </div>
                      </div>
                      <button
                        className={`item-action-btn ${
                          isCurrent ? 'equipped' : isUnlocked ? 'buy-coins' : 'locked'
                        }`}
                        disabled={!isUnlocked}
                      >
                        {isCurrent
                          ? lang === 'es'
                            ? 'ACTUAL'
                            : 'ACTIVE'
                          : isUnlocked
                          ? lang === 'es'
                            ? `NV. ${startLvl}`
                            : `LVL ${startLvl}`
                          : `🔒 NV.${startLvl}`}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ====================================================================
            HUD MINIMALISTA VECTOR (SOLO DURANTE PARTIDA)
            ==================================================================== */}
        {gameState === 'playing' && (
          <div className="gameplay-hud-layer">
            {hudData.lightningFlashAlpha > 0.05 && (
              <div
                className="weather-lightning-flash"
                style={{ opacity: hudData.lightningFlashAlpha }}
              />
            )}

            <div className="vector-hud-top">
              <div className="vector-top-row">
                <div className="vector-city-tag">
                  <span>
                    {cfg.city.flag} {cfg.city.name[lang].toUpperCase()} •{' '}
                    {activeVipCity ? '👑 VIP' : `${t.level} ${level}`} • x{totalScoreMultiplier}
                  </span>
                  <span className="vector-meters-left">
                    {hudData.metersRemaining}m / {hudData.totalMeters}m
                  </span>
                </div>
                <button
                  className="hud-pause-btn"
                  onClick={triggerPause}
                  aria-label="Pause"
                >
                  ⏸
                </button>
              </div>

              <div className="vector-progress-rail">
                <div
                  className="vector-progress-fill"
                  style={{ width: `${hudData.progress}%` }}
                />
              </div>

              <div className="vector-Horizon-pill-row">
                <div
                  className={`vector-horizon-pill ${
                    Math.abs(hudData.tiltRatio) > 0.65 ? 'danger' : ''
                  }`}
                >
                  <div className="vector-horizon-center-tick" />
                  <div
                    className="vector-horizon-dot"
                    style={{
                      left: `${50 + Math.max(-46, Math.min(46, hudData.tiltRatio * 46))}%`,
                    }}
                  />
                </div>

                <div className="vector-wind-badge">
                  🌬️ {windDirArrow} {Math.abs(hudData.windForce * 18).toFixed(0)} km/h
                </div>

                <div
                  className={`vector-score-badge ${
                    hudData.frenzyActive ? 'frenzy-glow' : ''
                  }`}
                >
                  {hudData.score.toLocaleString()} pts
                  {hudData.combo > 1 ? ` • x${hudData.combo}` : ''}
                  {hudData.frenzyActive ? ' 🔥' : ''}
                </div>
              </div>
            </div>

            {hudData.floatingPopups && hudData.floatingPopups.length > 0 && (
              <div className="floating-popups-layer">
                {hudData.floatingPopups.map((p) => (
                  <div
                    key={p.id}
                    className="floating-feedback-popup"
                    style={{ color: p.color, borderColor: p.color }}
                  >
                    <div className="floating-popup-main">{p.text}</div>
                    {p.subtext && <div className="floating-popup-sub">{p.subtext}</div>}
                  </div>
                ))}
              </div>
            )}

            <div className="vector-controls-layer">
              <div className="vector-touch-zones">
                <button
                  className="vector-touch-half left"
                  onPointerDown={() => {
                    engineRef.current.controlInput = -1;
                  }}
                  onPointerUp={() => {
                    if (engineRef.current.controlInput < 0)
                      engineRef.current.controlInput = 0;
                  }}
                  onPointerLeave={() => {
                    if (engineRef.current.controlInput < 0)
                      engineRef.current.controlInput = 0;
                  }}
                >
                  <span className="vector-corner-hint">◀ {t.leanLeft}</span>
                </button>

                <button
                  className="vector-touch-half right"
                  onPointerDown={() => {
                    engineRef.current.controlInput = 1;
                  }}
                  onPointerUp={() => {
                    if (engineRef.current.controlInput > 0)
                      engineRef.current.controlInput = 0;
                  }}
                  onPointerLeave={() => {
                    if (engineRef.current.controlInput > 0)
                      engineRef.current.controlInput = 0;
                  }}
                >
                  <span className="vector-corner-hint">{t.leanRight} ▶</span>
                </button>
              </div>

              <div className="vector-juggle-overlay-row">
                <button
                  className={`vector-catch-pill ${
                    hudData.juggleAlertHands.left ? 'ready' : ''
                  }`}
                  onPointerDown={(e) => {
                    e.stopPropagation();
                    handleCatchHand('left');
                  }}
                >
                  ✋ {t.leftHand}
                </button>

                {hudData.hookAvailable && (
                  <button
                    className="vector-hook-pill"
                    onPointerDown={(e) => {
                      e.stopPropagation();
                      activateLifelineHook();
                    }}
                  >
                    🪝
                  </button>
                )}

                <button
                  className={`vector-catch-pill ${
                    hudData.juggleAlertHands.right ? 'ready' : ''
                  }`}
                  onPointerDown={(e) => {
                    e.stopPropagation();
                    handleCatchHand('right');
                  }}
                >
                  {t.rightHand} ✋
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ====================================================================
            MENÚ PRINCIPAL Y NAVEGACIÓN DE 5 PESTAÑAS (FUERA DE PARTIDA)
            ==================================================================== */}
        {gameState === 'menu' && (
          <div className="menu-overlay-layer">
            <div className="currency-top-bar">
              <div className="currency-group">
                <div
                  className="currency-pill coins"
                  onClick={() => setShowAdModal('coins')}
                  title={t.freeCoinsAd}
                >
                  🪙 {coins.toLocaleString()} <span className="plus-badge">+</span>
                </div>
                <div
                  className="currency-pill gems"
                  onClick={() => setShowAdModal('gems')}
                  title={t.freeGemsAd}
                >
                  💎 {gems.toLocaleString()} <span className="plus-badge">+</span>
                </div>
                <div
                  className="currency-pill lp"
                  onClick={() => setActiveTab('league')}
                >
                  🏆 #{playerRank}
                </div>
              </div>

              <div className="utility-group">
                <button
                  className="profile-header-badge"
                  onClick={openEditProfileModal}
                  title={lang === 'es' ? 'Editar Perfil' : 'Edit Profile'}
                >
                  <span>{playerFlagEmoji}</span>
                  <span className="profile-header-name">
                    {playerName || 'Equilibrista'}
                  </span>
                  <span className="profile-header-edit">✏️</span>
                </button>
                <button
                  className="icon-btn"
                  onClick={() => setSoundEnabled((s) => !s)}
                  title="Sound"
                >
                  {soundEnabled ? '🔊' : '🔇'}
                </button>
              </div>
            </div>

            <div className="tab-content-area">
              {/* TAB 1: INICIO / CAMPAÑA */}
              {activeTab === 'home' && (
                <div className="home-card">
                  <div className="brand-header">
                    <div className="cover-hero-banner">
                      <img
                        src={`${import.meta.env.BASE_URL}icon.jpg`}
                        alt="NO MIRES ABAJO Portada Oficial"
                        className="cover-hero-img"
                      />
                      <div className="cover-hero-overlay">
                        <span className="official-badge">
                          {vipPassActive ? '👑 PASE VIP PRO ACTIVO' : t.officialEdition}
                        </span>
                        <h1 className="game-logo-title">{t.title}</h1>
                        <p className="game-logo-sub">
                          🗿 {cfg.city.monumentName?.[lang] || t.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="city-campaign-card"
                    onClick={() => setShowCitySelectorModal(true)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="city-flag-circle">{cfg.city.flag}</div>
                    <div className="city-details">
                      <div className="city-stage-tag">
                        {activeVipCity
                          ? `👑 CIUDAD VIP (x${activeVipCity.rewardMult} PAGO)`
                          : `${t.worldTour} • ${t.city} ${cfg.cityIndex + 1}/20`}{' '}
                        <span
                          style={{
                            color: '#fde047',
                            marginLeft: 6,
                            textDecoration: 'underline',
                            fontSize: '10px',
                          }}
                        >
                          {lang === 'es' ? '(Cambiar 🌍)' : '(Change 🌍)'}
                        </span>
                      </div>
                      <div className="city-title-text">{cfg.city.name[lang]}</div>
                      <div className="city-level-sub">
                        {t.level} {level} • {currentSkinObj.icon} {currentSkinObj.name[lang]}
                      </div>
                    </div>
                    <div className="multiplier-chip">x{totalScoreMultiplier}</div>
                  </div>

                  <div className="quick-stats-grid">
                    <div className="stat-box">
                      <span className="stat-lbl">{t.bestScore}</span>
                      <span className="stat-val">{bestScore.toLocaleString()}</span>
                    </div>
                    <div className="stat-box">
                      <span className="stat-lbl">
                        {lang === 'es' ? 'MULTI TOTAL ACTIVO' : 'ACTIVE TOTAL MULTI'}
                      </span>
                      <span className="stat-val gold">
                        x{totalScoreMultiplier} PTS / x{totalCoinMultiplier} 🪙
                      </span>
                    </div>
                  </div>

                  <button className="play-cta-button" onClick={startPlay}>
                    <span className="play-icon">▶</span> {t.playNow} ({t.level} {level})
                  </button>

                  <div className="reward-ads-row">
                    <button
                      className="ad-reward-btn coins"
                      onClick={() => setShowAdModal('coins')}
                    >
                      🎬 {t.freeCoinsAd}
                    </button>
                    <button
                      className="ad-reward-btn gems"
                      onClick={() => setShowAdModal('gems')}
                    >
                      🎬 {t.freeGemsAd}
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 2: ARMERÍA */}
              {activeTab === 'armory' && (
                <div className="panel-card">
                  <h2 className="panel-heading">⚙️ {t.armoryTitle}</h2>

                  <div className="section-sub-tabs">
                    <button
                      className={`sub-tab-btn ${
                        armorySubTab === 'upgrades' ? 'active' : ''
                      }`}
                      onClick={() => setArmorySubTab('upgrades')}
                    >
                      {lang === 'es' ? '⚙️ MEJORAS (1-10)' : '⚙️ UPGRADES (1-10)'}
                    </button>
                    <button
                      className={`sub-tab-btn ${armorySubTab === 'poles' ? 'active' : ''}`}
                      onClick={() => setArmorySubTab('poles')}
                    >
                      {lang === 'es' ? '⚖️ VARAS 3D (5)' : '⚖️ 3D POLES (5)'}
                    </button>
                    <button
                      className={`sub-tab-btn ${
                        armorySubTab === 'multipliers' ? 'active' : ''
                      }`}
                      onClick={() => setArmorySubTab('multipliers')}
                    >
                      {lang === 'es' ? '🚀 MULTIPLICADORES' : '🚀 MULTIPLIERS'}
                    </button>
                  </div>

                  <div className="items-scroll-list">
                    {armorySubTab === 'upgrades' && (
                      <>
                        {GEAR_ITEMS.map((gItem) => {
                          const lvl = gearLevels[gItem.id] || 0;
                          const costInfo = getArmoryUpgradeCost(lvl);
                          return (
                            <div key={gItem.id} className="item-card">
                              <div className="item-icon-box">{gItem.icon}</div>
                              <div className="item-info">
                                <div className="item-title">
                                  {gItem.name[lang]}{' '}
                                  <span className="lvl-pill">Nv. {lvl}/10</span>
                                </div>
                                <div
                                  className={`benefit-pill-tag ${
                                    costInfo.isProTier ? 'pro' : ''
                                  }`}
                                >
                                  {costInfo.isProTier
                                    ? lang === 'es'
                                      ? '👑 TRAMO ÉLITE PRO (NV. 6 A 10)'
                                      : '👑 PRO ELITE TIER (LVL 6 TO 10)'
                                    : gItem.statLabel[lang]}
                                </div>
                                <div className="item-desc">{gItem.desc[lang]}</div>
                                <div className="armory-level-bar">
                                  {Array.from({ length: 10 }).map((_, idx) => (
                                    <span
                                      key={idx}
                                      className={`armory-pip ${
                                        idx >= 5 ? 'pro-pip' : ''
                                      } ${idx < lvl ? 'filled' : ''}`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <button
                                className={`item-action-btn ${
                                  costInfo.isMax
                                    ? 'equipped'
                                    : costInfo.isProTier
                                    ? 'buy-gems'
                                    : 'buy-coins'
                                }`}
                                disabled={costInfo.isMax}
                                onClick={() => handleUpgradeGear(gItem)}
                              >
                                {costInfo.isMax
                                  ? t.maxLevel
                                  : costInfo.isProTier
                                  ? vipPassActive
                                    ? '👑 VIP GRATIS'
                                    : `👑 PRO ${costInfo.gemCost} 💎`
                                  : `🪙 ${costInfo.coinCost.toLocaleString()}`}
                              </button>
                            </div>
                          );
                        })}

                        <h3 className="sub-section-title">🎪 {t.propsTitle}</h3>
                        {JUGGLE_PROPS.map((prop) => {
                          const isOwned = unlockedProps.includes(prop.id);
                          const isEquipped = equippedProp === prop.id;
                          return (
                            <div
                              key={prop.id}
                              className={`item-card ${isEquipped ? 'selected' : ''}`}
                            >
                              <div className="item-icon-box">{prop.icon}</div>
                              <div className="item-info">
                                <div className="item-title">{prop.name[lang]}</div>
                                <div className="item-desc">
                                  Multiplicador Base x{prop.mult}
                                </div>
                              </div>
                              <button
                                className={`item-action-btn ${
                                  isEquipped
                                    ? 'equipped'
                                    : isOwned
                                    ? 'equip'
                                    : prop.currency === 'gems'
                                    ? 'buy-gems'
                                    : 'buy-coins'
                                }`}
                                onClick={() => handleSelectOrBuyProp(prop)}
                              >
                                {isEquipped
                                  ? t.equipped
                                  : isOwned
                                  ? t.equip
                                  : prop.currency === 'gems'
                                  ? `💎 ${prop.cost}`
                                  : `🪙 ${prop.cost.toLocaleString()}`}
                              </button>
                            </div>
                          );
                        })}
                      </>
                    )}

                    {armorySubTab === 'poles' &&
                      BALANCE_POLES.map((pole) => {
                        const isOwned =
                          unlockedPoles.includes(pole.id) ||
                          (pole.isVipOnly && vipPassActive);
                        const isEquipped = equippedPole === pole.id;
                        return (
                          <div
                            key={pole.id}
                            className={`item-card ${isEquipped ? 'selected' : ''} ${
                              pole.isPro ? 'vip-city-card' : ''
                            }`}
                          >
                            <div className="item-icon-box">{pole.icon}</div>
                            <div className="item-info">
                              <div className="item-title">{pole.name[lang]}</div>
                              <div
                                className={`benefit-pill-tag ${
                                  pole.isPro ? 'pro' : ''
                                }`}
                              >
                                {pole.badge[lang]}
                              </div>
                              <div className="item-desc">{pole.desc[lang]}</div>
                            </div>
                            <button
                              className={`item-action-btn ${
                                isEquipped
                                  ? 'equipped'
                                  : isOwned
                                  ? 'equip'
                                  : pole.isPro
                                  ? 'buy-gems'
                                  : 'buy-coins'
                              }`}
                              onClick={() => handleSelectOrBuyPole(pole)}
                            >
                              {isEquipped
                                ? t.equipped
                                : isOwned
                                ? t.equip
                                : pole.isPro
                                ? `👑 ${pole.gemCost} 💎`
                                : `🪙 ${pole.cost.toLocaleString()}`}
                            </button>
                          </div>
                        );
                      })}

                    {armorySubTab === 'multipliers' &&
                      PERMANENT_MULTIPLIERS.map((mItem) => {
                        const isOwned =
                          ownedMultipliers.includes(mItem.id) ||
                          (mItem.isVipOnly && vipPassActive);
                        return (
                          <div
                            key={mItem.id}
                            className={`item-card ${isOwned ? 'selected' : ''} ${
                              mItem.isPro ? 'vip-city-card' : ''
                            }`}
                          >
                            <div className="item-icon-box">{mItem.icon}</div>
                            <div className="item-info">
                              <div className="item-title">{mItem.name[lang]}</div>
                              <div
                                className={`benefit-pill-tag ${
                                  mItem.isPro ? 'pro' : ''
                                }`}
                              >
                                {mItem.badge[lang]}
                              </div>
                              <div className="item-desc">{mItem.desc[lang]}</div>
                            </div>
                            <button
                              className={`item-action-btn ${
                                isOwned
                                  ? 'equipped'
                                  : mItem.isPro
                                  ? 'buy-gems'
                                  : 'buy-coins'
                              }`}
                              onClick={() => handleBuyPermanentMultiplier(mItem)}
                            >
                              {isOwned
                                ? lang === 'es'
                                  ? 'ACTIVO'
                                  : 'ACTIVE'
                                : mItem.isPro
                                ? `👑 ${mItem.gemCost} 💎`
                                : `🪙 ${mItem.cost.toLocaleString()}`}
                            </button>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}

              {/* TAB 3: ASPECTOS CON VISTA PREVIA 3D EN VIVO + 5 SKINS DE MONEDAS + 3 SKINS PRO */}
              {activeTab === 'skins' && (
                <div className="panel-card skins-panel-card">
                  <h2 className="panel-heading">🎭 {t.skinsTitle}</h2>

                  {/* VENTANA DE VISTA PREVIA 3D EN VIVO DEL ACRÓBATA */}
                  <div className="skin-3d-live-window">
                    <div className="skin-live-top-tag">
                      <span>
                        🎥{' '}
                        {previewSkin
                          ? lang === 'es'
                            ? 'VISTA PREVIA 3D ACTIVA'
                            : '3D PREVIEW ACTIVE'
                          : lang === 'es'
                          ? 'VISTA 3D EN TIEMPO REAL'
                          : 'LIVE 3D PREVIEW'}
                      </span>
                      <span className="skin-live-mult-chip">
                        {displayedSkinObj.icon} {displayedSkinVisual.multLabel} (TOTAL x{totalScoreMultiplier})
                      </span>
                    </div>
                    <div className="skin-live-bottom-bar">
                      <span>
                        {displayedSkinObj.name[lang]}
                        {previewSkin ? (lang === 'es' ? ' (PROBANDO)' : ' (PREVIEW)') : ''}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                        {(displayedSkinVisual.paletteSwatches || []).map((hex, i) => (
                          <span
                            key={i}
                            className="palette-swatch-dot"
                            style={{ backgroundColor: hex }}
                          />
                        ))}
                      </span>
                    </div>
                  </div>

                  <div className="items-scroll-list">
                    {/* BLOQUE 1: LAS 5 SKINS COMPRABLES EXCLUSIVAMENTE CON MONEDAS */}
                    {SKINS.filter((sk) => !sk.isPro).map((sk) => {
                      const skinKey = resolveSkinKey(sk.id);
                      const isOwned =
                        unlockedSkins.includes(skinKey) ||
                        unlockedSkins.includes(sk.legacyId);
                      const isEquipped = resolveSkinKey(equippedSkin) === skinKey && !previewSkin;
                      const isPreviewing = previewSkin === skinKey;
                      const vis = sk.visual || SKIN_VISUALS[skinKey] || SKIN_VISUALS.urbano;

                      return (
                        <div
                          key={sk.id}
                          className={`item-card ${isEquipped || isPreviewing ? 'selected' : ''}`}
                        >
                          <div
                            className="item-icon-box"
                            style={{
                              background: `linear-gradient(135deg, ${sk.hoodieColor}, ${sk.trimColor})`,
                              border: `1.5px solid ${sk.trimColor}`,
                            }}
                          >
                            {sk.icon}
                          </div>
                          <div className="item-info">
                            <div className="item-title">{sk.name[lang]}</div>

                            <div className="skin-palette-preview-badge">
                              {(vis.paletteSwatches || []).map((swatchHex, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="palette-swatch-dot"
                                  style={{ backgroundColor: swatchHex }}
                                />
                              ))}
                              <span className="palette-label-text">
                                {vis.paletteLabel?.[lang] || vis.multLabel} • {vis.multLabel}
                              </span>
                            </div>

                            <div className="benefit-pill-tag">{sk.badge[lang]}</div>
                            <div className="item-desc">{sk.desc[lang]}</div>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'flex-end' }}>
                            {!isEquipped && (
                              <button
                                type="button"
                                className="item-action-btn equip"
                                style={{
                                  fontSize: '0.62rem',
                                  padding: '4px 8px',
                                  background: isPreviewing
                                    ? 'linear-gradient(135deg, #00f2fe, #0284c7)'
                                    : 'rgba(15, 23, 42, 0.85)',
                                  color: isPreviewing ? '#04121d' : '#bae6fd',
                                  border: '1px solid rgba(56, 189, 248, 0.55)',
                                }}
                                onClick={() => handlePreviewSkin(sk)}
                              >
                                {isPreviewing
                                  ? lang === 'es'
                                    ? '👁️ PROBANDO'
                                    : '👁️ TRYING'
                                  : lang === 'es'
                                  ? '👁️ PROBAR'
                                  : '👁️ TRY'}
                              </button>
                            )}
                            <button
                              className={`item-action-btn ${
                                isEquipped
                                  ? 'equipped'
                                  : isOwned
                                  ? 'equip'
                                  : 'buy-coins'
                              }`}
                              onClick={() => handleSelectOrBuySkin(sk)}
                            >
                              {isEquipped
                                ? t.equipped
                                : isOwned
                                ? t.equip
                                : `🪙 ${(sk.price ?? sk.cost ?? 0).toLocaleString()}`}
                            </button>
                          </div>
                        </div>
                      );
                    })}

                    {/* BLOQUE 2: SEPARADOR Y 3 NUEVAS SKINS EXCLUSIVAS DE PAGA (DINERO REAL / PASE VIP) */}
                    <h3
                      className="sub-section-title"
                      style={{
                        color: '#fbbf24',
                        borderColor: 'rgba(251, 191, 36, 0.45)',
                        marginTop: 14,
                      }}
                    >
                      👑{' '}
                      {lang === 'es'
                        ? 'ASPECTOS ÉLITE (EXCLUSIVOS PRO)'
                        : 'ELITE SKINS (PRO EXCLUSIVE)'}
                    </h3>

                    {SKINS.filter((sk) => sk.isPro).map((sk) => {
                      const skinKey = resolveSkinKey(sk.id);
                      const isOwned =
                        unlockedSkins.includes(skinKey) ||
                        unlockedSkins.includes(sk.legacyId) ||
                        (sk.isVipOnly && vipPassActive);
                      const isEquipped = resolveSkinKey(equippedSkin) === skinKey && !previewSkin;
                      const isPreviewing = previewSkin === skinKey;
                      const vis = sk.visual || SKIN_VISUALS[skinKey] || SKIN_VISUALS.urbano;

                      return (
                        <div
                          key={sk.id}
                          className={`item-card vip-city-card ${
                            isEquipped || isPreviewing ? 'selected' : ''
                          }`}
                        >
                          <div
                            className="item-icon-box"
                            style={{
                              background: `linear-gradient(135deg, ${sk.hoodieColor}, ${sk.trimColor})`,
                              border: `1.5px solid ${sk.trimColor}`,
                              boxShadow: `0 0 12px ${sk.trimColor}55`,
                            }}
                          >
                            {sk.icon}
                          </div>
                          <div className="item-info">
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 6,
                                flexWrap: 'wrap',
                              }}
                            >
                              <span className="item-title">{sk.name[lang]}</span>
                              <span
                                style={{
                                  fontSize: '0.58rem',
                                  fontWeight: 900,
                                  padding: '2px 6px',
                                  borderRadius: 999,
                                  background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
                                  color: '#1e1b4b',
                                  letterSpacing: '0.04em',
                                }}
                              >
                                {sk.proTag ? sk.proTag[lang] : '👑 EXCLUSIVO PRO'}
                              </span>
                            </div>

                            <div className="skin-palette-preview-badge">
                              {(vis.paletteSwatches || []).map((swatchHex, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="palette-swatch-dot"
                                  style={{ backgroundColor: swatchHex }}
                                />
                              ))}
                              <span className="palette-label-text">
                                {vis.paletteLabel?.[lang] || vis.multLabel} • {vis.multLabel}
                              </span>
                            </div>

                            <div className="benefit-pill-tag pro">{sk.badge[lang]}</div>
                            <div className="item-desc">{sk.desc[lang]}</div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 5,
                              alignItems: 'flex-end',
                            }}
                          >
                            {!isEquipped && (
                              <button
                                type="button"
                                className="item-action-btn equip"
                                style={{
                                  fontSize: '0.62rem',
                                  padding: '4px 8px',
                                  background: isPreviewing
                                    ? 'linear-gradient(135deg, #fbbf24, #f59e0b)'
                                    : 'rgba(15, 23, 42, 0.88)',
                                  color: isPreviewing ? '#1e1b4b' : '#fde68a',
                                  border: '1px solid rgba(251, 191, 36, 0.6)',
                                }}
                                onClick={() => handlePreviewSkin(sk)}
                              >
                                {isPreviewing
                                  ? lang === 'es'
                                    ? '👁️ PROBANDO'
                                    : '👁️ TRYING'
                                  : lang === 'es'
                                  ? '👁️ PROBAR'
                                  : '👁️ TRY'}
                              </button>
                            )}
                            <button
                              className={`item-action-btn ${
                                isEquipped
                                  ? 'equipped'
                                  : isOwned
                                  ? 'equip'
                                  : 'buy-gems'
                              }`}
                              onClick={() => handleSelectOrBuySkin(sk)}
                            >
                              {isEquipped
                                ? t.equipped
                                : isOwned
                                ? t.equip
                                : `👑 ${sk.priceUSD || sk.usdPrice || `${sk.gemCost} 💎`}`}
                            </button>
                          </div>
                        </div>
                      );
                    })}

                    <h3 className="sub-section-title">{t.polesTitle}</h3>
                    {BALANCE_POLES.map((pole) => {
                      const isOwned =
                        unlockedPoles.includes(pole.id) ||
                        (pole.isVipOnly && vipPassActive);
                      const isEquipped = equippedPole === pole.id;
                      return (
                        <div
                          key={pole.id}
                          className={`item-card ${isEquipped ? 'selected' : ''} ${
                            pole.isPro ? 'vip-city-card' : ''
                          }`}
                        >
                          <div className="item-icon-box">{pole.icon}</div>
                          <div className="item-info">
                            <div className="item-title">{pole.name[lang]}</div>
                            <div
                              className={`benefit-pill-tag ${pole.isPro ? 'pro' : ''}`}
                            >
                              {pole.badge[lang]}
                            </div>
                            <div className="item-desc">{pole.desc[lang]}</div>
                          </div>
                          <button
                            className={`item-action-btn ${
                              isEquipped
                                ? 'equipped'
                                : isOwned
                                ? 'equip'
                                : pole.isPro
                                ? 'buy-gems'
                                : 'buy-coins'
                            }`}
                            onClick={() => handleSelectOrBuyPole(pole)}
                          >
                            {isEquipped
                              ? t.equipped
                              : isOwned
                              ? t.equip
                              : pole.isPro
                              ? `👑 ${pole.gemCost} 💎`
                              : `🪙 ${pole.cost.toLocaleString()}`}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 4: LIGA MUNDIAL EN VIVO */}
              {activeTab === 'league' && (
                <div className="panel-card">
                  <div className="league-banner-top">
                    <div>
                      <div className="season-chip">
                        {t.seasonTitle}{' '}
                        <span style={{ color: '#4ade80', marginLeft: 6 }}>
                          ● {onlineSyncStatus === 'syncing' ? 'SYNC...' : 'ONLINE LIVE'}
                        </span>
                      </div>
                      <h2 className="panel-heading">{t.leagueTitle}</h2>
                    </div>
                    <div className="rank-badge-large">#{playerRank}</div>
                  </div>

                  <div className="player-name-bar">
                    <div className="profile-active-summary">
                      <span className="profile-flag-big">{playerFlagEmoji}</span>
                      <div className="profile-text-col">
                        <span className="profile-label-mini">
                          {lang === 'es' ? 'COMPETIDOR OFICIAL' : 'OFFICIAL COMPETITOR'}
                        </span>
                        <span className="profile-name-strong">
                          {playerName || 'Equilibrista'}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="edit-profile-pill-btn"
                      onClick={openEditProfileModal}
                    >
                      ✏️ {lang === 'es' ? 'Editar Perfil' : 'Edit Profile'}
                    </button>
                  </div>

                  <div className="items-scroll-list">
                    <div className="leaderboard-box">
                      {leaderboard.map((row, idx) => (
                        <div
                          key={row.id}
                          className={`leader-row ${row.isPlayer ? 'is-player' : ''}`}
                        >
                          <span className="leader-pos">
                            {idx === 0
                              ? '🥇'
                              : idx === 1
                              ? '🥈'
                              : idx === 2
                              ? '🥉'
                              : `#${idx + 1}`}
                          </span>
                          <span className="leader-flag">{row.flag}</span>
                          <span className="leader-name">
                            {row.name}
                            {row.isPlayer
                              ? lang === 'es'
                                ? ' (TÚ)'
                                : ' (YOU)'
                              : ''}
                          </span>
                          <span className="leader-lp">
                            {(row.lp ?? row.score ?? 0).toLocaleString()} LP
                          </span>
                        </div>
                      ))}
                    </div>

                    <h3 className="sub-section-title">🎁 {t.seasonPrizes}</h3>
                    {SEASON_REWARD_TIERS.map((tier) => {
                      const claimed = claimedTiers.includes(tier.id);
                      const canClaim = !claimed && leaguePoints >= tier.requiredLp;
                      return (
                        <div key={tier.id} className="item-card">
                          <div className="item-icon-box">{tier.icon}</div>
                          <div className="item-info">
                            <div className="item-title">
                              {tier.rankLabel} • {tier.title[lang]}
                            </div>
                            <div className="item-desc">
                              {tier.requiredLp.toLocaleString()} LP → +{tier.gemsReward}{' '}
                              💎 & +{tier.coinsReward.toLocaleString()} 🪙
                            </div>
                          </div>
                          <button
                            className={`item-action-btn ${
                              claimed
                                ? 'equipped'
                                : canClaim
                                ? 'buy-coins'
                                : 'locked'
                            }`}
                            disabled={!canClaim}
                            onClick={() => handleClaimTier(tier)}
                          >
                            {claimed
                              ? t.claimed
                              : canClaim
                              ? t.claim
                              : `${tier.requiredLp} LP`}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 5: TIENDA VIP + MULTIPLICADORES PERMANENTES */}
              {activeTab === 'store' && (
                <div className="panel-card">
                  <h2 className="panel-heading">💎 {t.storeTitle}</h2>
                  <p className="panel-sub">{t.storeSubtitle}</p>

                  <div className="items-scroll-list">
                    {STORE_BUNDLES.map((b) => (
                      <div key={b.id} className="vip-bundle-card">
                        <div className="vip-bundle-header">
                          <span className="vip-icon">{b.icon}</span>
                          <div>
                            <div className="vip-title">{b.name[lang]}</div>
                            <div className="vip-rewards-inline">
                              +{b.gems} 💎 • +{b.coins.toLocaleString()} 🪙
                            </div>
                          </div>
                          <button
                            className="vip-buy-btn"
                            onClick={() => handleBuyBundle(b)}
                          >
                            {b.isVipPassBundle && vipPassActive
                              ? '👑 VIP ACTIVO (+BONO)'
                              : b.tag}
                          </button>
                        </div>
                        <ul className="vip-perk-list">
                          {b.perks[lang].map((p, i) => (
                            <li key={i}>✓ {p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <h3 className="sub-section-title">{t.multipliersTitle}</h3>
                    {PERMANENT_MULTIPLIERS.map((mItem) => {
                      const isOwned =
                        ownedMultipliers.includes(mItem.id) ||
                        (mItem.isVipOnly && vipPassActive);
                      return (
                        <div
                          key={mItem.id}
                          className={`item-card ${isOwned ? 'selected' : ''} ${
                            mItem.isPro ? 'vip-city-card' : ''
                          }`}
                        >
                          <div className="item-icon-box">{mItem.icon}</div>
                          <div className="item-info">
                            <div className="item-title">{mItem.name[lang]}</div>
                            <div
                              className={`benefit-pill-tag ${mItem.isPro ? 'pro' : ''}`}
                            >
                              {mItem.badge[lang]}
                            </div>
                            <div className="item-desc">{mItem.desc[lang]}</div>
                          </div>
                          <button
                            className={`item-action-btn ${
                              isOwned
                                ? 'equipped'
                                : mItem.isPro
                                ? 'buy-gems'
                                : 'buy-coins'
                            }`}
                            onClick={() => handleBuyPermanentMultiplier(mItem)}
                          >
                            {isOwned
                              ? lang === 'es'
                                ? 'ACTIVO'
                                : 'ACTIVE'
                              : mItem.isPro
                              ? `👑 ${mItem.gemCost} 💎`
                              : `🪙 ${mItem.cost.toLocaleString()}`}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <nav className="bottom-tab-nav">
              <button
                className={`nav-tab-btn ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => setActiveTab('home')}
              >
                <span className="nav-ic">🏙️</span>
                <span>{t.tabs.home}</span>
              </button>
              <button
                className={`nav-tab-btn ${activeTab === 'armory' ? 'active' : ''}`}
                onClick={() => setActiveTab('armory')}
              >
                <span className="nav-ic">⚖️</span>
                <span>{t.tabs.armory}</span>
              </button>
              <button
                className={`nav-tab-btn ${activeTab === 'skins' ? 'active' : ''}`}
                onClick={() => setActiveTab('skins')}
              >
                <span className="nav-ic">🎭</span>
                <span>{t.tabs.skins}</span>
              </button>
              <button
                className={`nav-tab-btn ${activeTab === 'league' ? 'active' : ''}`}
                onClick={() => setActiveTab('league')}
              >
                <span className="nav-ic">🏆</span>
                <span>{t.tabs.league}</span>
              </button>
              <button
                className={`nav-tab-btn ${activeTab === 'store' ? 'active' : ''}`}
                onClick={() => setActiveTab('store')}
              >
                <span className="nav-ic">💎</span>
                <span>{t.tabs.store}</span>
              </button>
            </nav>
          </div>
        )}

        {/* MODAL DE PAUSA */}
        {gameState === 'paused' && (
          <div className="modal-backdrop">
            <div className="modal-card">
              <h2 className="modal-title">⏸ {t.pause}</h2>
              <p className="modal-subtitle">
                {cfg.city.flag} {cfg.city.name[lang]} — {t.level} {level}
              </p>
              <button className="pause-action-btn primary" onClick={triggerPause}>
                ▶ {t.resume}
              </button>
              <button
                className="pause-action-btn secondary"
                onClick={() => {
                  engineRef.current.running = false;
                  soundEngine.updateWind(0);
                  setGameState('menu');
                }}
              >
                🏠 {t.backToMenu}
              </button>
            </div>
          </div>
        )}

        {/* MODAL DE VICTORIA */}
        {gameState === 'victory' && (
          <div className="modal-backdrop">
            <div className="modal-card victory">
              <div className="modal-Cover-icon-wrap">
                <img
                  src={`${import.meta.env.BASE_URL}icon.jpg`}
                  alt="NO MIRES ABAJO"
                  className="modal-cover-thumb"
                />
              </div>
              <h2 className="modal-title">{t.victoryTitle}</h2>
              <p className="modal-subtitle">
                {cfg.city.flag} {cfg.city.name[lang]} • {t.level} {level}
              </p>

              <div className="rewards-summary-box">
                <div className="reward-line">
                  <span>{t.score}</span>
                  <strong>{runResult.scoreEarned.toLocaleString()}</strong>
                </div>
                <div className="reward-line gold">
                  <span>{t.coinsEarned}</span>
                  <strong>+{runResult.coinsEarned.toLocaleString()} 🪙</strong>
                </div>
                {runResult.gemsEarned > 0 && (
                  <div className="reward-line cyan">
                    <span>{lang === 'es' ? 'Gemas Ganadas' : 'Gems Earned'}</span>
                    <strong>+{runResult.gemsEarned} 💎</strong>
                  </div>
                )}
                <div className="reward-line cyan">
                  <span>{t.leaguePointsEarned}</span>
                  <strong>+{runResult.lpEarned} 🏆</strong>
                </div>
              </div>

              {!runResult.doubled && (
                <button
                  className="pause-action-btn ad-gold"
                  onClick={() => setShowAdModal('double')}
                >
                  {t.doubleRewardsAd}
                </button>
              )}

              <button className="pause-action-btn primary" onClick={handleNextLevel}>
                {t.nextLevel} ({t.level} {level + 1}) ➔
              </button>
              <button
                className="pause-action-btn secondary"
                onClick={() => setGameState('menu')}
              >
                🏠 {t.backToMenu}
              </button>
            </div>
          </div>
        )}

        {/* MODAL DE CAÍDA / GAME OVER */}
        {gameState === 'gameover' && (
          <div className="modal-backdrop">
            <div className="modal-card gameover">
              <div className="modal-Cover-icon-wrap">
                <img
                  src={`${import.meta.env.BASE_URL}icon.jpg`}
                  alt="NO MIRES ABAJO"
                  className="modal-cover-thumb"
                />
              </div>
              <h2 className="modal-title">{t.fallTitle}</h2>
              <p className="modal-subtitle">{t.fallSub}</p>

              <div className="rewards-summary-box">
                <div className="reward-line">
                  <span>{t.score}</span>
                  <strong>{runResult.scoreEarned.toLocaleString()}</strong>
                </div>
                <div className="reward-line gold">
                  <span>{t.coinsEarned}</span>
                  <strong>+{runResult.coinsEarned.toLocaleString()} 🪙</strong>
                </div>
                <div className="reward-line cyan">
                  <span>{t.leaguePointsEarned}</span>
                  <strong>+{runResult.lpEarned} 🏆</strong>
                </div>
              </div>

              {!runResult.revivedOnce && (
                <button
                  className="pause-action-btn ad-gold"
                  onClick={() => setShowAdModal('revive')}
                >
                  {t.reviveAd}
                </button>
              )}

              <button className="pause-action-btn primary" onClick={startPlay}>
                🔄 {t.retry}
              </button>
              <button
                className="pause-action-btn secondary"
                onClick={() => setGameState('menu')}
              >
                🏠 {t.backToMenu}
              </button>
            </div>
          </div>
        )}

        {/* BLOQUE 3.2: MODAL DE CONFIRMACIÓN DE COMPRA PRO / PASARELA VIP */}
        {proCheckoutSkin && (
          <div className="modal-backdrop ad-layer">
            <div
              className="modal-card"
              style={{
                border: '1.5px solid rgba(251, 191, 36, 0.75)',
                boxShadow: '0 0 36px rgba(245, 158, 11, 0.35)',
                maxWidth: 365,
              }}
            >
              <div
                style={{
                  fontSize: '2.35rem',
                  marginBottom: 4,
                  filter: 'drop-shadow(0 0 12px rgba(251, 191, 36, 0.7))',
                }}
              >
                {proCheckoutSkin.icon}
              </div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.64rem',
                  fontWeight: 900,
                  padding: '3px 10px',
                  borderRadius: 999,
                  background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
                  color: '#1e1b4b',
                  letterSpacing: '0.06em',
                  marginBottom: 8,
                }}
              >
                {lang === 'es' ? '👑 PASARELA VIP • ASPECTO ÉLITE PRO' : '👑 VIP CHECKOUT • ELITE PRO SKIN'}
              </span>
              <h2 className="modal-title" style={{ fontSize: '1.15rem', marginBottom: 4 }}>
                {proCheckoutSkin.name[lang]}
              </h2>
              <p className="modal-subtitle" style={{ fontSize: '0.78rem', marginBottom: 10 }}>
                {proCheckoutSkin.desc[lang]}
              </p>

              <div className="rewards-summary-box" style={{ marginBottom: 12 }}>
                <div className="reward-line gold">
                  <span>{lang === 'es' ? 'Multiplicador Activo' : 'Active Multiplier'}</span>
                  <strong>x{proCheckoutSkin.mult || proCheckoutSkin.bonusMult} LP & 🪙</strong>
                </div>
                <div className="reward-line cyan">
                  <span>{lang === 'es' ? 'Resistencia al Viento' : 'Wind Resistance'}</span>
                  <strong>-{Math.round((proCheckoutSkin.windResist || proCheckoutSkin.windReduction || 0) * 100)}%</strong>
                </div>
                <div className="reward-line cyan">
                  <span>{lang === 'es' ? 'Estabilidad sobre el Cable' : 'Cable Stability'}</span>
                  <strong>
                    +{Math.round((1 - (proCheckoutSkin.gravityMod ?? 1)) * 100)}%
                  </strong>
                </div>
                <div className="reward-line">
                  <span>{lang === 'es' ? 'Ventana Imán Malabares' : 'Juggle Magnet Window'}</span>
                  <strong>
                    +{Math.round(((proCheckoutSkin.catchBonus || 1) - 1) * 100)}%
                  </strong>
                </div>
                {(proCheckoutSkin.freeShields || 0) > 0 && (
                  <div className="reward-line gold">
                    <span>{lang === 'es' ? 'Escudo Anti-Caída Gratis' : 'Free Anti-Fall Shield'}</span>
                    <strong>+{proCheckoutSkin.freeShields} / {lang === 'es' ? 'Nivel' : 'Level'} 🛡️</strong>
                  </div>
                )}
              </div>

              <button
                className="pause-action-btn ad-gold"
                style={{ marginBottom: 8, fontWeight: 900 }}
                onClick={() => handleConfirmProSkinPurchase(proCheckoutSkin, false)}
              >
                {lang === 'es'
                  ? `✅ CONFIRMAR Y EQUIPAR (${proCheckoutSkin.priceUSD || proCheckoutSkin.usdPrice})`
                  : `✅ CONFIRM & EQUIP (${proCheckoutSkin.priceUSD || proCheckoutSkin.usdPrice})`}
              </button>

              {proCheckoutSkin.gemCost && gems >= proCheckoutSkin.gemCost && (
                <button
                  className="pause-action-btn primary"
                  style={{ marginBottom: 8 }}
                  onClick={() => handleConfirmProSkinPurchase(proCheckoutSkin, true)}
                >
                  {lang === 'es'
                    ? `💎 CANJEAR CON ${proCheckoutSkin.gemCost} GEMAS Y EQUIPAR`
                    : `💎 REDEEM WITH ${proCheckoutSkin.gemCost} GEMS & EQUIP`}
                </button>
              )}

              <button
                className="pause-action-btn secondary"
                onClick={() => setProCheckoutSkin(null)}
              >
                {lang === 'es' ? 'Seguir Probando en 3D' : 'Keep Trying in 3D'}
              </button>
            </div>
          </div>
        )}

        {/* SIMULADOR DE ANUNCIO BONIFICADO */}
        {showAdModal && (
          <div className="modal-backdrop ad-layer">
            <div className="modal-card">
              <div className="modal-big-icon">🎬</div>
              <h2 className="modal-title">{t.adWatching}</h2>
              <p className="modal-subtitle">
                {adTimer > 0 ? `${t.adSeconds} ${adTimer}s...` : '✅ ¡Listo!'}
              </p>
              <button
                className="pause-action-btn primary"
                disabled={adTimer > 0}
                onClick={completeAdReward}
              >
                {adTimer > 0 ? `${adTimer}s` : t.adCollect}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
