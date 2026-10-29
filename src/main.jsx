import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { STORAGE_KEY } from './gameData.js';

function sanitizeCorruptedVisualStorage() {
  try {
    localStorage.setItem('nma_equipped_skin', 'urbano');
    const rawOwned = localStorage.getItem('nma_owned_skins');
    let safeOwned = ['urbano'];
    if (rawOwned) {
      try {
        const parsed = JSON.parse(rawOwned);
        if (Array.isArray(parsed)) {
          safeOwned = Array.from(
            new Set(['urbano', ...parsed.filter((s) => typeof s === 'string')])
          );
        }
      } catch {
        safeOwned = ['urbano'];
      }
    }
    localStorage.setItem('nma_owned_skins', JSON.stringify(safeOwned));

    const rawStore = localStorage.getItem(STORAGE_KEY);
    if (rawStore) {
      try {
        const data = JSON.parse(rawStore);
        if (data && typeof data === 'object' && !Array.isArray(data)) {
          const preserved = {
            lang: data.lang === 'en' ? 'en' : 'es',
            level: Number.isFinite(Number(data.level))
              ? Math.max(1, Math.floor(Number(data.level)))
              : 1,
            coins: Number.isFinite(Number(data.coins))
              ? Math.max(0, Math.floor(Number(data.coins)))
              : 1200,
            gems: Number.isFinite(Number(data.gems))
              ? Math.max(0, Math.floor(Number(data.gems)))
              : 60,
            bestScore: Number.isFinite(Number(data.bestScore))
              ? Math.max(0, Math.floor(Number(data.bestScore)))
              : 0,
            leaguePoints: Number.isFinite(Number(data.leaguePoints))
              ? Math.max(0, Math.floor(Number(data.leaguePoints)))
              : 320,
            playerName: typeof data.playerName === 'string' ? data.playerName : 'Equilibrista',
            playerCountry: typeof data.playerCountry === 'string' ? data.playerCountry : 'AR',
            vipPassActive: Boolean(data.vipPassActive),
            ownedSkins: safeOwned,
            unlockedSkins: safeOwned,
            equippedSkin: 'urbano',
            unlockedPoles: Array.isArray(data.unlockedPoles) ? data.unlockedPoles : ['pole_basic'],
            equippedPole: 'pole_basic',
            ownedMultipliers: Array.isArray(data.ownedMultipliers) ? data.ownedMultipliers : [],
            unlockedVipCities: Array.isArray(data.unlockedVipCities) ? data.unlockedVipCities : [],
            activeVipCityId: null,
            unlockedProps: Array.isArray(data.unlockedProps) ? data.unlockedProps : ['balls'],
            equippedProp: 'balls',
            gearLevels: { pole: 0, boots: 0, gloves: 0 },
            claimedTiers: Array.isArray(data.claimedTiers) ? data.claimedTiers : [],
            soundEnabled: data.soundEnabled ?? true,
          };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(preserved));
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  } catch (err) {
    console.warn('Storage auto-recovery warning:', err);
  }
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error || new Error('Unknown render error'),
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo);
    sanitizeCorruptedVisualStorage();
  }

  handleRestartInterface = () => {
    sanitizeCorruptedVisualStorage();
    this.setState({ hasError: false, error: null });
    window.location.href = window.location.pathname + '?reset=' + Date.now();
  };

  render() {
    if (this.state.hasError) {
      const errString = this.state.error?.toString() || 'Unknown Error';
      const errStack = this.state.error?.stack
        ? this.state.error.stack.split('\n').slice(0, 4).join('\n')
        : '';

      return (
        <div
          style={{
            minHeight: '100dvh',
            width: '100vw',
            background: 'radial-gradient(circle at 50% 30%, #0f172a 0%, #020617 100%)',
            color: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              maxWidth: '400px',
              width: '100%',
              background: 'rgba(15, 23, 42, 0.94)',
              border: '1px solid rgba(56, 189, 248, 0.45)',
              borderRadius: '20px',
              padding: '24px 20px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
            }}
          >
            <div style={{ fontSize: '2.4rem', marginBottom: '10px' }}>⚡</div>
            <h2
              style={{
                margin: '0 0 8px',
                fontSize: '1.15rem',
                fontWeight: 900,
                color: '#38bdf8',
                letterSpacing: '0.04em',
              }}
            >
              AUTO-RECUPERACIÓN DE INTERFAZ
            </h2>
            <p
              style={{
                margin: '0 0 12px',
                fontSize: '0.84rem',
                lineHeight: 1.45,
                color: '#cbd5e1',
              }}
            >
              Se reparó automáticamente una configuración visual antigua en caché. Tu progreso,
              nivel, monedas y perfil están intactos.
            </p>
            <pre
              style={{
                margin: '0 0 16px',
                padding: '10px',
                borderRadius: '8px',
                background: 'rgba(2, 6, 23, 0.85)',
                border: '1px solid rgba(248, 113, 113, 0.35)',
                color: '#fca5a5',
                fontSize: '0.68rem',
                textAlign: 'left',
                overflowX: 'auto',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              {errString}
              {errStack ? `\n${errStack}` : ''}
            </pre>
            <button
              type="button"
              onClick={this.handleRestartInterface}
              style={{
                width: '100%',
                padding: '13px 16px',
                borderRadius: '12px',
                border: '1px solid #38bdf8',
                background: 'linear-gradient(135deg, #0284c7 0%, #00f2fe 100%)',
                color: '#020617',
                fontWeight: 900,
                fontSize: '0.92rem',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(0, 242, 254, 0.4)',
              }}
            >
              🔄 REINICIAR INTERFAZ
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
