import { COUNTRIES_LIST, getCountryOption, SEASON_RIVALS } from './gameData';

export const COUNTRIES = COUNTRIES_LIST;

export function getCountryFlag(codeOrFlag) {
  return getCountryOption(codeOrFlag).flag;
}

const LOCAL_LEADERBOARD_CACHE_KEY = 'nma_live_leaderboard_cache_v2';

export async function syncPlayerScore(name, country, score, level = 1) {
  const cleanName = (name || 'Equilibrista').trim().slice(0, 15);
  const cleanCountry = (country || 'AR').trim();
  const flag = getCountryFlag(cleanCountry);

  const playerEntry = {
    id: 'player_self',
    name: cleanName,
    country: cleanCountry,
    flag,
    score: Math.max(0, Math.floor(score || 0)),
    lp: Math.max(0, Math.floor(score || 0)),
    level: Math.max(1, level || 1),
    updatedAt: Date.now(),
    isPlayer: true,
  };

  try {
    localStorage.setItem(LOCAL_LEADERBOARD_CACHE_KEY, JSON.stringify(playerEntry));
  } catch {
    // ignore storage errors
  }

  return playerEntry;
}

export async function getLiveLeaderboard(currentPlayer) {
  const cleanName = (currentPlayer?.name || 'Equilibrista').trim().slice(0, 15);
  const cleanCountry = (currentPlayer?.country || 'AR').trim();
  const flag = getCountryFlag(cleanCountry);
  const playerScore = Math.max(0, Math.floor(currentPlayer?.score ?? 320));
  const playerLevel = Math.max(1, currentPlayer?.level || 1);

  const nowMinuteSeed = Math.floor(Date.now() / 45000);
  const rivals = SEASON_RIVALS.map((r, idx) => {
    const drift = ((nowMinuteSeed + idx * 7) % 11) * 15;
    const lpVal = r.baseLp + drift;
    return {
      id: r.id,
      name: r.name,
      country: r.country,
      flag: r.flag,
      score: lpVal,
      lp: lpVal,
      level: Math.max(5, Math.min(100, Math.floor(lpVal / 180))),
      badge: r.badge,
      isPlayer: false,
    };
  });

  const selfRow = {
    id: 'player_self',
    name: cleanName,
    country: cleanCountry,
    flag,
    score: playerScore,
    lp: playerScore,
    level: playerLevel,
    badge: '⚡',
    isPlayer: true,
  };

  const combined = [...rivals, selfRow].sort((a, b) => b.lp - a.lp);
  return combined;
}
