import { CITIES, SKINS, JUGGLE_PROPS } from './gameData';

/**
 * 1. Photorealistic Background Scene Cache (`./bg-scene-real.png`)
 */
const bgSceneCache = {
  loaded: false,
  img: null,
  width: 572,
  height: 1024,
};

function initPhotorealBgScene() {
  if (typeof window === 'undefined' || bgSceneCache.img) return;
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    bgSceneCache.width = img.naturalWidth || 572;
    bgSceneCache.height = img.naturalHeight || 1024;
    bgSceneCache.loaded = true;
  };
  img.src = './bg-scene-real.png';
  bgSceneCache.img = img;
}

/**
 * 2. Photorealistic 6 Juggling Props Cache (`./props-real.png`)
 * Extracts all 6 photographic objects once at startup, removes the exterior black background
 * via BFS Flood-Fill + smooth edge feathering, and centers each prop in its own offscreen canvas.
 */
const propsSpriteCache = {
  loaded: false,
  initialized: false,
  sprites: {},
};

function initPhotorealPropsSprites() {
  if (typeof window === 'undefined' || propsSpriteCache.initialized) return;
  propsSpriteCache.initialized = true;

  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    const w = img.naturalWidth || 1024;
    const h = img.naturalHeight || 1024;
    const off = document.createElement('canvas');
    off.width = w;
    off.height = h;
    const octx = off.getContext('2d', { willReadFrequently: true });
    octx.drawImage(img, 0, 0, w, h);

    try {
      const imgData = octx.getImageData(0, 0, w, h);
      const data = imgData.data;
      const total = w * h;
      const visited = new Uint8Array(total);
      const isBg = new Uint8Array(total);
      const queue = new Int32Array(total);
      let head = 0;
      let tail = 0;

      const isDarkBg = (idx) => {
        const p = idx * 4;
        return data[p] < 18 && data[p + 1] < 18 && data[p + 2] < 18;
      };

      const seedLineX = [0, Math.floor(w * 0.34), Math.floor(w * 0.67), w - 1];
      const seedLineY = [0, Math.floor(h * 0.5), h - 1];

      for (let s = 0; s < seedLineY.length; s++) {
        const sy = seedLineY[s];
        for (let x = 0; x < w; x++) {
          const idx = sy * w + x;
          if (!visited[idx] && isDarkBg(idx)) {
            visited[idx] = 1;
            queue[tail++] = idx;
          }
        }
      }

      for (let s = 0; s < seedLineX.length; s++) {
        const sx = seedLineX[s];
        for (let y = 0; y < h; y++) {
          const idx = y * w + sx;
          if (!visited[idx] && isDarkBg(idx)) {
            visited[idx] = 1;
            queue[tail++] = idx;
          }
        }
      }

      while (head < tail) {
        const curr = queue[head++];
        isBg[curr] = 1;
        data[curr * 4 + 3] = 0;

        const cx = curr % w;
        const cy = (curr - cx) / w;

        if (cx > 0) {
          const n = curr - 1;
          if (!visited[n] && isDarkBg(n)) {
            visited[n] = 1;
            queue[tail++] = n;
          }
        }
        if (cx < w - 1) {
          const n = curr + 1;
          if (!visited[n] && isDarkBg(n)) {
            visited[n] = 1;
            queue[tail++] = n;
          }
        }
        if (cy > 0) {
          const n = curr - w;
          if (!visited[n] && isDarkBg(n)) {
            visited[n] = 1;
            queue[tail++] = n;
          }
        }
        if (cy < h - 1) {
          const n = curr + w;
          if (!visited[n] && isDarkBg(n)) {
            visited[n] = 1;
            queue[tail++] = n;
          }
        }
      }

      for (let y = 1; y < h - 1; y++) {
        for (let x = 1; x < w - 1; x++) {
          const idx = y * w + x;
          if (isBg[idx]) continue;
          if (isBg[idx - 1] || isBg[idx + 1] || isBg[idx - w] || isBg[idx + w]) {
            const p = idx * 4;
            const lum = Math.max(data[p], data[p + 1], data[p + 2]);
            if (lum < 46) {
              data[p + 3] = Math.max(0, Math.min(255, (lum - 10) * 7));
            }
          }
        }
      }

      octx.putImageData(imgData, 0, 0);

      const cells = [
        { id: 'balls', x0: 0.01, y0: 0.03, x1: 0.32, y1: 0.36 },
        { id: 'torches', x0: 0.34, y0: 0.01, x1: 0.66, y1: 0.47 },
        { id: 'knives', x0: 0.66, y0: 0.02, x1: 0.99, y1: 0.42 },
        { id: 'chainsaws', x0: 0.01, y0: 0.46, x1: 0.34, y1: 0.94 },
        { id: 'dynamite', x0: 0.34, y0: 0.51, x1: 0.66, y1: 0.96 },
        { id: 'goldbars', x0: 0.66, y0: 0.51, x1: 0.99, y1: 0.95 },
      ];

      for (let cIdx = 0; cIdx < cells.length; cIdx++) {
        const cell = cells[cIdx];
        const sx0 = Math.floor(cell.x0 * w);
        const sy0 = Math.floor(cell.y0 * h);
        const sx1 = Math.floor(cell.x1 * w);
        const sy1 = Math.floor(cell.y1 * h);

        let minX = sx1;
        let maxX = sx0;
        let minY = sy1;
        let maxY = sy0;

        for (let y = sy0; y < sy1; y++) {
          for (let x = sx0; x < sx1; x++) {
            const a = data[(y * w + x) * 4 + 3];
            if (a > 25) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }

        if (maxX > minX && maxY > minY) {
          const bw = maxX - minX + 1;
          const bh = maxY - minY + 1;
          const size = Math.max(bw, bh) + 16;
          const propCanvas = document.createElement('canvas');
          propCanvas.width = size;
          propCanvas.height = size;
          const pctx = propCanvas.getContext('2d');
          pctx.drawImage(
            off,
            minX,
            minY,
            bw,
            bh,
            (size - bw) * 0.5,
            (size - bh) * 0.5,
            bw,
            bh
          );
          propsSpriteCache.sprites[cell.id] = propCanvas;
        }
      }

      propsSpriteCache.loaded = true;
    } catch {
      propsSpriteCache.loaded = false;
    }
  };
  img.src = './props-real.png';
}

/**
 * 3. Photorealistic Player Sprite Cache (`./player-real.png`)
 * Processed once at startup in an offscreen canvas using BFS Flood-Fill chroma/luminance alpha removal.
 */
const playerSpriteCache = {
  loaded: false,
  canvas: null,
  width: 572,
  height: 1024,
  cropX: 36,
  cropY: 85,
  cropW: 500,
  cropH: 855,
};

function initPhotorealPlayerSprite() {
  if (typeof window === 'undefined' || playerSpriteCache.canvas) return;

  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    const w = img.naturalWidth || 572;
    const h = img.naturalHeight || 1024;
    const off = document.createElement('canvas');
    off.width = w;
    off.height = h;
    const octx = off.getContext('2d', { willReadFrequently: true });
    octx.drawImage(img, 0, 0, w, h);

    try {
      const imgData = octx.getImageData(0, 0, w, h);
      const data = imgData.data;
      const totalPixels = w * h;
      const visited = new Uint8Array(totalPixels);
      const isBackground = new Uint8Array(totalPixels);
      const queue = new Int32Array(totalPixels);
      let head = 0;
      let tail = 0;

      const isExteriorBlack = (idx) => {
        const p = idx * 4;
        return data[p] < 18 && data[p + 1] < 18 && data[p + 2] < 18;
      };

      for (let x = 0; x < w; x++) {
        const topIdx = x;
        const botIdx = (h - 1) * w + x;
        if (!visited[topIdx] && isExteriorBlack(topIdx)) {
          visited[topIdx] = 1;
          queue[tail++] = topIdx;
        }
        if (!visited[botIdx] && isExteriorBlack(botIdx)) {
          visited[botIdx] = 1;
          queue[tail++] = botIdx;
        }
      }
      for (let y = 0; y < h; y++) {
        const leftIdx = y * w;
        const rightIdx = y * w + (w - 1);
        if (!visited[leftIdx] && isExteriorBlack(leftIdx)) {
          visited[leftIdx] = 1;
          queue[tail++] = leftIdx;
        }
        if (!visited[rightIdx] && isExteriorBlack(rightIdx)) {
          visited[rightIdx] = 1;
          queue[tail++] = rightIdx;
        }
      }

      while (head < tail) {
        const curr = queue[head++];
        isBackground[curr] = 1;
        data[curr * 4 + 3] = 0;

        const cx = curr % w;
        const cy = (curr - cx) / w;

        if (cx > 0) {
          const n = curr - 1;
          if (!visited[n] && isExteriorBlack(n)) {
            visited[n] = 1;
            queue[tail++] = n;
          }
        }
        if (cx < w - 1) {
          const n = curr + 1;
          if (!visited[n] && isExteriorBlack(n)) {
            visited[n] = 1;
            queue[tail++] = n;
          }
        }
        if (cy > 0) {
          const n = curr - w;
          if (!visited[n] && isExteriorBlack(n)) {
            visited[n] = 1;
            queue[tail++] = n;
          }
        }
        if (cy < h - 1) {
          const n = curr + w;
          if (!visited[n] && isExteriorBlack(n)) {
            visited[n] = 1;
            queue[tail++] = n;
          }
        }
      }

      let minX = w;
      let maxX = 0;
      let minY = h;
      let maxY = 0;

      for (let y = 1; y < h - 1; y++) {
        for (let x = 1; x < w - 1; x++) {
          const idx = y * w + x;
          if (isBackground[idx]) continue;

          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;

          if (
            isBackground[idx - 1] ||
            isBackground[idx + 1] ||
            isBackground[idx - w] ||
            isBackground[idx + w]
          ) {
            const p = idx * 4;
            const lum = Math.max(data[p], data[p + 1], data[p + 2]);
            if (lum < 42) {
              data[p + 3] = Math.max(0, Math.min(255, (lum - 10) * 7.5));
            }
          }
        }
      }

      octx.putImageData(imgData, 0, 0);

      if (maxX > minX && maxY > minY) {
        playerSpriteCache.cropX = Math.max(0, minX - 6);
        playerSpriteCache.cropY = Math.max(0, minY - 6);
        playerSpriteCache.cropW = Math.min(w - playerSpriteCache.cropX, maxX - minX + 12);
        playerSpriteCache.cropH = Math.min(h - playerSpriteCache.cropY, maxY - minY + 12);
      }
    } catch {
      // Fallback if canvas taint occurs
    }

    playerSpriteCache.width = w;
    playerSpriteCache.height = h;
    playerSpriteCache.canvas = off;
    playerSpriteCache.loaded = true;
  };
  img.src = './player-real.png';
}

initPhotorealBgScene();
initPhotorealPropsSprites();
initPhotorealPlayerSprite();

/**
 * Pure 2-Bone Inverse Kinematics Solver (Law of Cosines).
 * Writes directly into pre-allocated `outRig` object
 * to guarantee ZERO memory allocations per frame inside `requestAnimationFrame`.
 */
export function solveArmIK(shoulderX, shoulderY, targetX, targetY, upperLen, lowerLen, bendDir, outRig) {
  const dx = targetX - shoulderX;
  const dy = targetY - shoulderY;
  const distSq = dx * dx + dy * dy;
  const maxReach = upperLen + lowerLen - 0.01;
  const dist = Math.min(Math.sqrt(distSq), maxReach);

  const baseAngle = Math.atan2(dy, dx);
  const cosAngle = Math.max(-1, Math.min(1, (upperLen * upperLen + dist * dist - lowerLen * lowerLen) / (2 * upperLen * dist)));
  const elbowAngle = baseAngle + bendDir * Math.acos(cosAngle);

  outRig.elbowX = shoulderX + Math.cos(elbowAngle) * upperLen;
  outRig.elbowY = shoulderY + Math.sin(elbowAngle) * upperLen;
  outRig.handX = targetX;
  outRig.handY = targetY;
}

/**
 * Main 4-Layer Canvas 2D Render Engine.
 * Zero garbage collection inside the frame loop: uses pre-allocated pools from `state`.
 */
export function renderGameFrame(ctx, width, height, state) {
  ctx.save();
  ctx.clearRect(0, 0, width, height);

  const city = CITIES[state.cityIndex] || CITIES[0];
  const skin = state.skinObj || SKINS[0];
  const prop = state.propObj || JUGGLE_PROPS[0];

  const angleDeg = state.angleDeg !== undefined ? state.angleDeg : (state.angle * 180) / Math.PI;
  const isDanger = Math.abs(angleDeg) > 25;
  const progressRatio = Math.min(
    1,
    Math.max(0, state.distance / Math.max(1, state.targetDistance))
  );

  // Camera shake on gusts or extreme tilt
  let camShakeX = 0;
  let camShakeY = 0;
  if (state.shake > 0.1 || isDanger) {
    const intensity = state.shake + (isDanger ? (Math.abs(angleDeg) - 25) * 0.18 : 0);
    camShakeX = Math.sin(state.time * 43) * intensity;
    camShakeY = Math.cos(state.time * 37) * intensity;
  }

  // Horizon & Vanishing Point shifted by player tilt parallax
  const horizonY = height * 0.34;
  const vpX = width * 0.5 - angleDeg * 1.45 + camShakeX;
  const vpY = horizonY + Math.abs(angleDeg) * 0.18 + camShakeY;
  const wireStartX = width * 0.5 + camShakeX * 0.4;
  const wireStartY = height * 0.99;

  // ============================================================================
  // CAPA 1: ENTORNO NOCTURNO, PERSPECTIVA 3D DE RASCACIELOS Y MONUMENTO OBJETIVO
  // ============================================================================
  drawNightEnvironmentLayer(
    ctx,
    width,
    height,
    vpX,
    vpY,
    wireStartX,
    wireStartY,
    city,
    progressRatio,
    state
  );

  // ============================================================================
  // CAPA 2: CABLE DE ACERO TENSADO Y PARTÍCULAS VOLUMÉTRICAS DE VIENTO
  // ============================================================================
  drawSteelCableAndWindLayer(
    ctx,
    width,
    height,
    vpX,
    vpY,
    wireStartX,
    wireStartY,
    city,
    state
  );

  // ============================================================================
  // CAPA 3 & CAPA 4: PERSONAJE ARTICULADO (7 NODOS) + CINEMÁTICA INVERSA (IK)
  //                  + VARA DE INERCIA + MALABARES PARABÓLICOS
  // ============================================================================
  const footAnchorX = wireStartX + (vpX - wireStartX) * 0.14;
  const footAnchorY = wireStartY + (vpY - wireStartY) * 0.14;

  drawArticulatedCharacterAndJuggling(
    ctx,
    width,
    height,
    footAnchorX,
    footAnchorY,
    vpX,
    vpY,
    skin,
    prop,
    state
  );

  // ============================================================================
  // CAPA ATMOSFÉRICA FINAL: CLIMA, FLOATING POPUPS & VIÑETA DE VÉRTIGO
  // ============================================================================
  drawWeatherOverlay(ctx, width, height, city.weather, state.time, state.windCurrent);
  drawFloatingPopupsPool(ctx, state.popupPool);
  drawVignetteAndDangerOverlay(ctx, width, height, angleDeg, state.fallSlowMo, state.time);

  ctx.restore();
}

/**
 * CAPA 1: Entorno Nocturno, Rascacielos 3D en eje Z, Bokeh de Tráfico y Edificio Meta
 */
function drawNightEnvironmentLayer(
  ctx,
  w,
  h,
  vpX,
  vpY,
  wireStartX,
  wireStartY,
  city,
  progress,
  state
) {
  const angleDeg = state.angleDeg !== undefined ? state.angleDeg : (state.angle * 180) / Math.PI;
  const angleRad = state.angleRad !== undefined ? state.angleRad : state.angle;

  // 1. Base Sky & Abyss Gradient
  const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
  skyGrad.addColorStop(0, city.skyTop || '#02050e');
  skyGrad.addColorStop(0.36, city.skyMid || '#0a1631');
  skyGrad.addColorStop(0.75, '#050a18');
  skyGrad.addColorStop(1, '#010308');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, w, h);

  // 2. Photorealistic Background Scene (`bg-scene-real.png`) with Progressive Zoom & Tilt
  if (bgSceneCache.loaded && bgSceneCache.img) {
    ctx.save();
    const scale = 1.06 + progress * 0.32;
    const pivotX = w * 0.5;
    const pivotY = h * 0.42;

    ctx.translate(pivotX, pivotY);
    ctx.rotate(-angleRad * 0.18);
    ctx.scale(scale, scale);

    const swayX = -angleDeg * 1.1;
    const walkBobY =
      state.gameStatus === 'PLAYING' ? Math.sin(state.stepPhase * 2) * 2.2 : 0;

    const imgAspect = bgSceneCache.width / bgSceneCache.height;
    const canvasAspect = w / h;
    let drawW = w;
    let drawH = h;
    if (canvasAspect > imgAspect) {
      drawW = w;
      drawH = w / imgAspect;
    } else {
      drawH = h;
      drawW = h * imgAspect;
    }

    ctx.drawImage(
      bgSceneCache.img,
      -drawW * 0.5 + swayX,
      -drawH * 0.42 + walkBobY,
      drawW,
      drawH
    );
    ctx.restore();

    // City Atmospheric Color Grading
    ctx.save();
    ctx.globalCompositeOperation = 'soft-light';
    const tintGrad = ctx.createLinearGradient(0, 0, 0, h);
    tintGrad.addColorStop(0, city.skyTop || '#030816');
    tintGrad.addColorStop(0.45, city.skyMid || '#0c1b38');
    tintGrad.addColorStop(1, city.fogColor || 'rgba(14, 165, 233, 0.28)');
    ctx.fillStyle = tintGrad;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
  }

  // 3. Stars & High-Altitude Halo
  ctx.save();
  for (let i = 0; i < 24; i++) {
    const sx = ((i * 97 + 31) % 100) * 0.01 * w;
    const sy = ((i * 53 + 17) % 100) * 0.01 * (vpY * 0.88);
    const twinkle = 0.25 + 0.65 * Math.abs(Math.sin(state.time * 1.6 + i));
    ctx.fillStyle = `rgba(248, 250, 252, ${twinkle * 0.55})`;
    ctx.fillRect(sx, sy, i % 3 === 0 ? 1.8 : 1.2, i % 3 === 0 ? 1.8 : 1.2);
  }
  ctx.restore();

  // 4. 3D Lateral Skyscrapers advancing in Z-perspective (`state.buildingPool`)
  const bPool = state.buildingPool;
  if (bPool && bPool.length > 0) {
    ctx.save();
    for (let i = 0; i < bPool.length; i++) {
      const b = bPool[i];
      // z goes from 0.08 (far near vanishing point) to 1.0 (passing camera)
      const z = b.z;
      const sideSign = b.side; // -1 left, +1 right
      const edgeX = vpX + sideSign * (w * 0.12 + z * w * 0.46);
      const topY = vpY - (0.18 + z * 0.75) * h * b.heightFactor;
      const botY = vpY + z * (h - vpY) * 1.15;
      const bWidth = (22 + z * 95) * b.widthFactor;

      const x0 = sideSign < 0 ? edgeX - bWidth : edgeX;
      const bHeight = Math.max(20, botY - topY);

      // Building dark glass body
      const alpha = Math.min(0.82, z * 0.9);
      ctx.fillStyle = `rgba(6, 11, 25, ${alpha})`;
      ctx.fillRect(x0, topY, bWidth, bHeight);

      // Inner structural rim facing the abyss
      ctx.strokeStyle = city.accent || '#38bdf8';
      ctx.globalAlpha = Math.min(0.45, z * 0.5);
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(edgeX, topY);
      ctx.lineTo(edgeX, botY);
      ctx.stroke();

      // Subtle lit office windows strip
      const winRows = 5;
      const rowStep = bHeight / (winRows + 1);
      ctx.fillStyle = city.windowColor || '#fde68a';
      for (let r = 1; r <= winRows; r++) {
        if (((b.seed + r * 7) & 3) === 0) continue;
        const wy = topY + r * rowStep;
        const wx = sideSign < 0 ? edgeX - bWidth * 0.65 : edgeX + bWidth * 0.18;
        ctx.globalAlpha = Math.min(0.32, z * 0.35);
        ctx.fillRect(wx, wy, bWidth * 0.42, Math.max(2, z * 4));
      }
    }
    ctx.restore();
  }

  // 5. Abyss Street Bokeh Traffic (`state.carPool`)
  const cars = state.carPool;
  if (cars && cars.length > 0) {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < cars.length; i++) {
      const car = cars[i];
      const depth = car.z;
      const laneOffset = (car.lane - 1.5) * (8 + depth * 54);
      const cx = vpX + laneOffset;
      const cy = vpY + 26 + depth * (h - vpY - 16);
      const radius = 2.5 + depth * 11;

      const grad = ctx.createRadialGradient(cx, cy, 0.5, cx, cy, radius);
      if (car.isRed) {
        grad.addColorStop(0, 'rgba(254, 202, 202, 0.85)');
        grad.addColorStop(0.4, 'rgba(239, 68, 68, 0.45)');
        grad.addColorStop(1, 'rgba(239, 68, 68, 0)');
      } else {
        grad.addColorStop(0, 'rgba(254, 249, 195, 0.85)');
        grad.addColorStop(0.4, 'rgba(245, 158, 11, 0.42)');
        grad.addColorStop(1, 'rgba(245, 158, 11, 0)');
      }
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  // 6. Iconic City Landmark & Approaching Target Roof Platform
  drawLandmarkAndTargetTower(ctx, w, h, vpX, vpY, city, progress, state.time);

  // 7. Starting Rooftop Ledge under Player in Lobby / Early Walk
  if (progress < 0.14) {
    const ledgeVis = 1 - progress / 0.14;
    const ledgeY = wireStartY - 82 + (1 - ledgeVis) * 95;
    ctx.save();
    const roofGrad = ctx.createLinearGradient(0, ledgeY, 0, h);
    roofGrad.addColorStop(0, '#1e293b');
    roofGrad.addColorStop(0.25, '#0f172a');
    roofGrad.addColorStop(1, '#020617');
    ctx.fillStyle = roofGrad;
    ctx.beginPath();
    ctx.moveTo(w * 0.14, ledgeY);
    ctx.lineTo(w * 0.86, ledgeY);
    ctx.lineTo(w * 1.04, h + 10);
    ctx.lineTo(-w * 0.04, h + 10);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = city.accent || '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.14, ledgeY);
    ctx.lineTo(w * 0.86, ledgeY);
    ctx.stroke();
    ctx.restore();
  }
}

/**
 * Draws the City's Monument Silhouette and the Approaching Target Rooftop Anchor
 */
function drawLandmarkAndTargetTower(ctx, w, h, vpX, vpY, city, progress, time) {
  ctx.save();
  const scale = 0.72 + progress * 0.58;
  const cx = vpX;
  const baseY = vpY + 8;

  // Target Tower Receiving Platform (grows as player approaches 100%)
  const towerW = (52 + progress * 68);
  const towerH = (95 + progress * 110);
  const towerTopY = vpY - 22 - progress * 24;

  const towerGrad = ctx.createLinearGradient(cx - towerW * 0.5, towerTopY, cx + towerW * 0.5, towerTopY + towerH);
  towerGrad.addColorStop(0, 'rgba(15, 23, 42, 0.92)');
  towerGrad.addColorStop(1, 'rgba(2, 6, 23, 0.96)');
  ctx.fillStyle = towerGrad;
  ctx.fillRect(cx - towerW * 0.5, towerTopY, towerW, towerH);

  ctx.strokeStyle = city.accent || '#38bdf8';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(cx - towerW * 0.5, towerTopY, towerW, towerH);

  // Target Landing Pad Beacon at `(vpX, vpY)`
  const beaconPulse = 0.55 + 0.45 * Math.sin(time * 5);
  const beaconRadius = 9 + progress * 14;
  const beaconGrad = ctx.createRadialGradient(vpX, vpY, 1, vpX, vpY, beaconRadius * 2.2);
  beaconGrad.addColorStop(0, `rgba(74, 222, 128, ${0.9 * beaconPulse})`);
  beaconGrad.addColorStop(0.45, 'rgba(34, 197, 94, 0.4)');
  beaconGrad.addColorStop(1, 'rgba(34, 197, 94, 0)');
  ctx.fillStyle = beaconGrad;
  ctx.beginPath();
  ctx.arc(vpX, vpY, beaconRadius * 2.2, 0, Math.PI * 2);
  ctx.fill();

  // Monument Silhouette above horizon
  ctx.translate(cx, baseY - 20);
  ctx.scale(scale, scale);
  ctx.fillStyle = 'rgba(10, 18, 36, 0.85)';
  ctx.strokeStyle = city.accent || '#38bdf8';
  ctx.lineWidth = 1.6;

  const type = city.landmarkType;
  if (type === 'obelisk') {
    ctx.beginPath();
    ctx.moveTo(-11, 0);
    ctx.lineTo(-5, -105);
    ctx.lineTo(0, -122);
    ctx.lineTo(5, -105);
    ctx.lineTo(11, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  } else if (type === 'eiffel') {
    ctx.beginPath();
    ctx.moveTo(-26, 0);
    ctx.lineTo(-6, -65);
    ctx.lineTo(-2, -135);
    ctx.lineTo(2, -135);
    ctx.lineTo(6, -65);
    ctx.lineTo(26, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  } else if (type === 'burj') {
    ctx.beginPath();
    ctx.moveTo(-22, 0);
    ctx.lineTo(-14, -45);
    ctx.lineTo(-8, -95);
    ctx.lineTo(-3, -145);
    ctx.lineTo(0, -180);
    ctx.lineTo(3, -145);
    ctx.lineTo(8, -95);
    ctx.lineTo(14, -45);
    ctx.lineTo(22, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  } else if (type === 'sydney') {
    for (let s = -1; s <= 1; s++) {
      ctx.beginPath();
      ctx.moveTo(s * 20 - 18, 0);
      ctx.quadraticCurveTo(s * 20, -54, s * 20 + 14, 0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  } else {
    // Spire / Empire / Skytree / Tower
    ctx.beginPath();
    ctx.rect(-14, -90, 28, 90);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, -90);
    ctx.lineTo(0, -138);
    ctx.stroke();
  }

  // Red aviation warning light at monument apex
  const blink = Math.sin(time * 6) > 0 ? 1 : 0.25;
  ctx.fillStyle = `rgba(239, 68, 68, ${blink})`;
  ctx.beginPath();
  ctx.arc(0, -138, 3.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

/**
 * CAPA 2: Cable de Acero con Perspectiva y Pool de 28 Partículas Volumétricas de Viento
 */
function drawSteelCableAndWindLayer(
  ctx,
  w,
  h,
  vpX,
  vpY,
  wireStartX,
  wireStartY,
  city,
  state
) {
  ctx.save();

  const angleDeg = state.angleDeg !== undefined ? state.angleDeg : (state.angle * 180) / Math.PI;
  const vib =
    state.gameStatus === 'PLAYING'
      ? Math.sin(state.time * 52) * (Math.abs(angleDeg) > 22 ? 2.1 : 0.45)
      : 0;
  const ctrlX = (wireStartX + vpX) * 0.5 + vib + angleDeg * 0.42;
  const ctrlY = (wireStartY + vpY) * 0.5 + 10;

  // Outer metallic glow
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.24)';
  ctx.lineWidth = 14;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(wireStartX, wireStartY);
  ctx.quadraticCurveTo(ctrlX, ctrlY, vpX, vpY);
  ctx.stroke();

  // Main braided steel cable core
  const cableGrad = ctx.createLinearGradient(wireStartX, wireStartY, vpX, vpY);
  cableGrad.addColorStop(0, '#f8fafc');
  cableGrad.addColorStop(0.25, '#cbd5e1');
  cableGrad.addColorStop(0.65, '#64748b');
  cableGrad.addColorStop(1, '#334155');

  ctx.strokeStyle = cableGrad;
  ctx.lineWidth = 6.5;
  ctx.beginPath();
  ctx.moveTo(wireStartX, wireStartY);
  ctx.quadraticCurveTo(ctrlX, ctrlY, vpX, vpY);
  ctx.stroke();

  // Specular top wire highlight
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(wireStartX - 1, wireStartY);
  ctx.quadraticCurveTo(ctrlX - 1, ctrlY, vpX, vpY);
  ctx.stroke();

  // Braided steel texture nodes advancing toward player as `distance` increases
  const scrollOffset = (state.distance * 3.4) % 1;
  for (let i = 0; i < 20; i++) {
    const rawT = (i + scrollOffset) / 20;
    const t = rawT * rawT; // Perspective compression near horizon
    const invT = 1 - t;
    const px = invT * invT * wireStartX + 2 * invT * t * ctrlX + t * t * vpX;
    const py = invT * invT * wireStartY + 2 * invT * t * ctrlY + t * t * vpY;
    const radius = Math.max(0.9, (1 - t) * 3.8);

    ctx.fillStyle = i % 2 === 0 ? 'rgba(15, 23, 42, 0.78)' : 'rgba(254, 240, 138, 0.65)';
    ctx.beginPath();
    ctx.arc(px, py, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  // Volumetric Wind Particle Pool (28 pre-allocated particles in `state.windPool`)
  const windPool = state.windPool;
  if (windPool && windPool.length > 0) {
    const windForce = state.windCurrent || 0;
    const windMag = Math.abs(windForce);
    ctx.lineCap = 'round';

    for (let i = 0; i < windPool.length; i++) {
      const p = windPool[i];
      const px = p.x * w;
      const py = p.y * h;
      const streakLen = 18 + windMag * 26 + p.size * 12;
      const dirSign = windForce >= 0 ? 1 : -1;
      const slopeY = p.vy * 8;

      ctx.strokeStyle =
        windMag > 1.1
          ? `rgba(103, 232, 249, ${p.alpha * 0.55})`
          : `rgba(226, 232, 240, ${p.alpha * 0.32})`;
      ctx.lineWidth = p.size;
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(px + dirSign * streakLen, py + slopeY);
      ctx.stroke();
    }
  }

  ctx.restore();
}

/**
 * CAPA 3 & CAPA 4: Personaje Articulado (Rig 7 Nodos + Textura Fotográfica `player-real.png`)
 *                  + Cinemática Inversa 2D (`solveArmIK`) + Vara de Inercia + Malabares Parabólicos
 */
function drawArticulatedCharacterAndJuggling(
  ctx,
  w,
  h,
  footX,
  footY,
  vpX,
  vpY,
  skin,
  prop,
  state
) {
  ctx.save();

  const isWalking = state.gameStatus === 'PLAYING';
  const stepSin = isWalking ? Math.sin(state.stepPhase) : 0;
  const stepCos = isWalking ? Math.cos(state.stepPhase) : 1;
  const breathe = Math.sin(state.time * 3.2) * 2.2;
  const tiltRad = state.angleRad !== undefined ? state.angleRad : state.angle;
  const angleDeg = state.angleDeg !== undefined ? state.angleDeg : (tiltRad * 180) / Math.PI;

  // Compute 7-Node Skeletal Rig in World Space (Zero Allocation via `state.rig`)
  const rig = state.rig;
  const charScale = Math.min(1.12, Math.max(0.84, h / 790));

  // Node 1 & 2: Left & Right Feet alternating steps on the cable
  rig.leftFootX = footX - 6 * charScale + stepSin * 4 * charScale;
  rig.leftFootY = footY - Math.max(0, stepSin) * 10 * charScale;
  rig.rightFootX = footX + 6 * charScale - stepSin * 4 * charScale;
  rig.rightFootY = footY - Math.max(0, -stepSin) * 10 * charScale;

  // Pivot around the cable contact point by axial tilt `tiltRad * 0.72`
  const bodyRot = tiltRad * 0.72;
  const sinR = Math.sin(bodyRot);
  const cosR = Math.cos(bodyRot);

  const localToWorldX = (lx, ly) => footX + lx * cosR - ly * sinR;
  const localToWorldY = (lx, ly) => footY + lx * sinR + ly * cosR;

  // Node 3: Pelvis
  const pelvisLocalY = -128 * charScale + Math.abs(stepCos) * 4 * charScale;
  rig.pelvisX = localToWorldX(0, pelvisLocalY);
  rig.pelvisY = localToWorldY(0, pelvisLocalY);

  // Node 4: Upper Torso / Chest
  const torsoLocalY = -238 * charScale + breathe;
  rig.torsoX = localToWorldX(0, torsoLocalY);
  rig.torsoY = localToWorldY(0, torsoLocalY);

  // Node 5: Head
  const headLocalY = -292 * charScale + breathe;
  rig.headX = localToWorldX(0, headLocalY);
  rig.headY = localToWorldY(0, headLocalY);

  // Node 6 & 7: Left & Right Shoulders
  const shoulderHalfSpan = 46 * charScale;
  const shoulderLocalY = -244 * charScale + breathe;
  const leftShoulderX = localToWorldX(-shoulderHalfSpan, shoulderLocalY);
  const leftShoulderY = localToWorldY(-shoulderHalfSpan, shoulderLocalY);
  const rightShoulderX = localToWorldX(shoulderHalfSpan, shoulderLocalY);
  const rightShoulderY = localToWorldY(shoulderHalfSpan, shoulderLocalY);

  // Default hand targets on the Carbon Inertia Balance Pole
  const leftGripLift = state.leftPressed ? -18 * charScale : 0;
  const rightGripLift = state.rightPressed ? -18 * charScale : 0;

  let targetLeftHandX = localToWorldX(-96 * charScale, -196 * charScale + leftGripLift);
  let targetLeftHandY = localToWorldY(-96 * charScale, -196 * charScale + leftGripLift);
  let targetRightHandX = localToWorldX(96 * charScale, -196 * charScale + rightGripLift);
  let targetRightHandY = localToWorldY(96 * charScale, -196 * charScale + rightGripLift);

  // Dynamic IK Hand Tracking toward incoming Juggling Objects (`state.jugglePool`)
  const jugglePool = state.jugglePool;
  if (jugglePool && state.juggleCount > 0) {
    let bestLeftPhase = 0.35;
    let bestRightPhase = 0.35;

    for (let i = 0; i < jugglePool.length; i++) {
      const ball = jugglePool[i];
      if (!ball.active) continue;
      if (ball.targetHand === 'L' && ball.phase > bestLeftPhase) {
        bestLeftPhase = ball.phase;
        const reachWeight = (ball.phase - 0.35) / 0.65;
        targetLeftHandX += (ball.x - targetLeftHandX) * reachWeight * 0.42;
        targetLeftHandY += (ball.y - targetLeftHandY) * reachWeight * 0.35;
      } else if (ball.targetHand === 'R' && ball.phase > bestRightPhase) {
        bestRightPhase = ball.phase;
        const reachWeight = (ball.phase - 0.35) / 0.65;
        targetRightHandX += (ball.x - targetRightHandX) * reachWeight * 0.42;
        targetRightHandY += (ball.y - targetRightHandY) * reachWeight * 0.35;
      }
    }
  }

  // Solve 2-Bone Inverse Kinematics for both arms (Zero-Allocation into `rig.leftArm` / `rig.rightArm`)
  const upperArmLen = 48 * charScale;
  const forearmLen = 46 * charScale;

  rig.leftArm.shoulderX = leftShoulderX;
  rig.leftArm.shoulderY = leftShoulderY;
  rig.rightArm.shoulderX = rightShoulderX;
  rig.rightArm.shoulderY = rightShoulderY;

  solveArmIK(
    leftShoulderX,
    leftShoulderY,
    targetLeftHandX,
    targetLeftHandY,
    upperArmLen,
    forearmLen,
    -1,
    rig.leftArm
  );
  solveArmIK(
    rightShoulderX,
    rightShoulderY,
    targetRightHandX,
    targetRightHandY,
    upperArmLen,
    forearmLen,
    1,
    rig.rightArm
  );

  // Contact Sparks on Steel Wire when dangerously tilted
  if (Math.abs(angleDeg) > 20) {
    ctx.save();
    ctx.fillStyle = '#fde047';
    for (let i = 0; i < 5; i++) {
      const sx = footX + Math.sin(state.time * 38 + i * 2.1) * 18;
      const sy = footY - Math.abs(Math.cos(state.time * 32 + i)) * 12;
      ctx.beginPath();
      ctx.arc(sx, sy, 2.1, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  // Render Character Body: Photorealistic Sprite + Articulated IK Rig Overlay
  if (playerSpriteCache.loaded && playerSpriteCache.canvas) {
    drawPhotorealSlicedCharacter(ctx, footX, footY, charScale, bodyRot, stepSin, breathe, skin, state);
  } else {
    drawProceduralSkeletalBody(ctx, rig, charScale, skin);
  }

  // Render Articulated 2-Bone IK Arms & Rhythmic Gloves + Headband Wind Ribbon
  drawIKArmsAndWindRibbon(ctx, rig, charScale, skin, state);

  // Render Carbon Fiber Inertia Balance Pole held across both IK hands
  drawInertiaBalancePole(ctx, rig, charScale, skin, state);

  // Render CAPA 4: Parabolic Juggling Objects & Catch Timing Rings
  drawParabolicJugglingLayer(ctx, rig, prop, state);

  // Emergency Grapple Hook Laser Cable when active
  if (state.grappleFlash > 0) {
    ctx.save();
    ctx.strokeStyle = `rgba(34, 211, 238, ${state.grappleFlash})`;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(rig.torsoX, rig.torsoY);
    ctx.lineTo(vpX, vpY - 120);
    ctx.stroke();
    ctx.restore();
  }

  ctx.restore();
}

/**
 * Renders the Photorealistic Character (`player-real.png`) with 4-slice skeletal deformation
 */
function drawPhotorealSlicedCharacter(
  ctx,
  footX,
  footY,
  charScale,
  bodyRot,
  stepSin,
  breathe,
  skin,
  state
) {
  ctx.save();
  ctx.translate(footX, footY + 12 * charScale);
  ctx.rotate(bodyRot);

  const spriteCanvas = playerSpriteCache.canvas;
  const sx = playerSpriteCache.cropX;
  const sy = playerSpriteCache.cropY;
  const sw = playerSpriteCache.cropW;
  const sh = playerSpriteCache.cropH;

  const targetH = 340 * charScale;
  const targetW = targetH * (sw / sh);

  // Foot shadow on the steel cable
  const footGlow = ctx.createRadialGradient(0, -10, 2, 0, -10, 34 * charScale);
  footGlow.addColorStop(0, 'rgba(56, 189, 248, 0.45)');
  footGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = footGlow;
  ctx.beginPath();
  ctx.ellipse(0, -10, 32 * charScale, 10 * charScale, 0, 0, Math.PI * 2);
  ctx.fill();

  const s0 = 0.0;
  const s1 = 0.25;
  const s2 = 0.56;
  const s3 = 0.78;
  const s4 = 1.0;

  const angleDeg = state.angleDeg !== undefined ? state.angleDeg : (state.angle * 180) / Math.PI;
  const headSwayX = -angleDeg * 0.14;
  const torsoShiftX = -angleDeg * 0.08 + stepSin * 1.6;
  const hipShiftX = stepSin * 3.0;
  const leftRaise = state.leftPressed ? -5 : 0;
  const rightRaise = state.rightPressed ? -5 : 0;
  const armCounterTilt = (rightRaise - leftRaise) * 0.012;

  // Slice 4: Boots & Lower Calves
  ctx.save();
  ctx.translate(stepSin * 3.2, -Math.abs(stepSin) * 3.5);
  ctx.drawImage(
    spriteCanvas,
    sx,
    sy + sh * s3,
    sw,
    sh * (s4 - s3),
    -targetW * 0.5,
    -targetH * (1 - s3),
    targetW,
    targetH * (s4 - s3)
  );
  ctx.restore();

  // Slice 3: Cargo Pants & Knees
  ctx.save();
  ctx.translate(hipShiftX, Math.abs(stepSin) * 1.8);
  ctx.drawImage(
    spriteCanvas,
    sx,
    sy + sh * s2,
    sw,
    sh * (s3 - s2) + 2,
    -targetW * 0.5,
    -targetH * (1 - s2),
    targetW,
    targetH * (s3 - s2) + 2
  );
  ctx.restore();

  // Slice 2: Jacket Torso
  ctx.save();
  ctx.translate(torsoShiftX, breathe);
  ctx.rotate(armCounterTilt);
  ctx.drawImage(
    spriteCanvas,
    sx,
    sy + sh * s1,
    sw,
    sh * (s2 - s1) + 2,
    -targetW * 0.5,
    -targetH * (1 - s1),
    targetW,
    targetH * (s2 - s1) + 2
  );
  ctx.restore();

  // Slice 1: Hood & Head
  ctx.save();
  ctx.translate(headSwayX, breathe * 1.15);
  ctx.drawImage(
    spriteCanvas,
    sx,
    sy + sh * s0,
    sw,
    sh * (s1 - s0) + 2,
    -targetW * 0.5,
    -targetH * (1 - s0),
    targetW,
    targetH * (s1 - s0) + 2
  );
  ctx.restore();

  // Subtle rim accent on torso matching equipped skin
  ctx.strokeStyle = skin.trimColor || '#38bdf8';
  ctx.globalAlpha = 0.5;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, -targetH * 0.72 + breathe);
  ctx.lineTo(0, -targetH * 0.48 + breathe);
  ctx.stroke();

  ctx.restore();
}

/**
 * Fallback High-Detail Procedural Body if image is still decoding
 */
function drawProceduralSkeletalBody(ctx, rig, charScale, skin) {
  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // Legs
  ctx.strokeStyle = skin.pantsColor || '#090d16';
  ctx.lineWidth = 14 * charScale;
  ctx.beginPath();
  ctx.moveTo(rig.pelvisX - 10 * charScale, rig.pelvisY);
  ctx.lineTo(rig.leftFootX, rig.leftFootY);
  ctx.moveTo(rig.pelvisX + 10 * charScale, rig.pelvisY);
  ctx.lineTo(rig.rightFootX, rig.rightFootY);
  ctx.stroke();

  // Torso
  ctx.fillStyle = skin.coatColor || '#0f172a';
  ctx.strokeStyle = skin.trimColor || '#38bdf8';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(rig.torsoX - 38 * charScale, rig.torsoY);
  ctx.lineTo(rig.torsoX + 38 * charScale, rig.torsoY);
  ctx.lineTo(rig.pelvisX + 22 * charScale, rig.pelvisY);
  ctx.lineTo(rig.pelvisX - 22 * charScale, rig.pelvisY);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Head
  ctx.fillStyle = skin.hoodColor || '#1e293b';
  ctx.beginPath();
  ctx.arc(rig.headX, rig.headY, 20 * charScale, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.restore();
}

/**
 * Draws the 2-Bone IK Arms (Shoulder -> Elbow -> Hand), Rhythmic Gloves & Wind-Reactive Headband Ribbon
 */
function drawIKArmsAndWindRibbon(ctx, rig, charScale, skin, state) {
  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // 1. Wind-Reactive Headband / Hood Ribbon streaming from `rig.headX, rig.headY`
  const wind = state.windCurrent || 0;
  const ribbonWave1 = Math.sin(state.time * 9) * (6 + Math.abs(wind) * 8);
  const ribbonWave2 = Math.cos(state.time * 11) * (9 + Math.abs(wind) * 12);
  const ribbonLenX = wind * 34 * charScale + Math.sin(state.time * 6) * 8;

  ctx.strokeStyle = skin.trimColor || '#38bdf8';
  ctx.lineWidth = 3.5 * charScale;
  ctx.beginPath();
  ctx.moveTo(rig.headX, rig.headY - 4 * charScale);
  ctx.quadraticCurveTo(
    rig.headX + ribbonLenX * 0.55,
    rig.headY + 8 * charScale + ribbonWave1,
    rig.headX + ribbonLenX,
    rig.headY + 16 * charScale + ribbonWave2
  );
  ctx.stroke();

  // 2. Left & Right 2-Segment IK Arms (Upper Arm + Forearm + Glove)
  const arms = [rig.leftArm, rig.rightArm];
  for (let i = 0; i < 2; i++) {
    const arm = arms[i];
    const isPressed = i === 0 ? state.leftPressed : state.rightPressed;

    // Outer jacket sleeve shadow
    ctx.strokeStyle = 'rgba(2, 6, 23, 0.85)';
    ctx.lineWidth = 15 * charScale;
    ctx.beginPath();
    ctx.moveTo(arm.shoulderX, arm.shoulderY);
    ctx.lineTo(arm.elbowX, arm.elbowY);
    ctx.lineTo(arm.handX, arm.handY);
    ctx.stroke();

    // Inner jacket sleeve fill
    ctx.strokeStyle = skin.coatColor || '#1e293b';
    ctx.lineWidth = 11.5 * charScale;
    ctx.beginPath();
    ctx.moveTo(arm.shoulderX, arm.shoulderY);
    ctx.lineTo(arm.elbowX, arm.elbowY);
    ctx.lineTo(arm.handX, arm.handY);
    ctx.stroke();

    // Tech trim along forearm
    ctx.strokeStyle = isPressed ? '#fde047' : skin.trimColor || '#38bdf8';
    ctx.lineWidth = 2.2 * charScale;
    ctx.beginPath();
    ctx.moveTo(arm.elbowX, arm.elbowY);
    ctx.lineTo(arm.handX, arm.handY);
    ctx.stroke();

    // Elbow articulation joint
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(arm.elbowX, arm.elbowY, 4.5 * charScale, 0, Math.PI * 2);
    ctx.fill();

    // Rhythmic Catch Glove at `handX, handY`
    const gloveRadius = (isPressed ? 9.5 : 7.5) * charScale;
    if (isPressed) {
      const gGlow = ctx.createRadialGradient(
        arm.handX,
        arm.handY,
        1,
        arm.handX,
        arm.handY,
        gloveRadius * 2.4
      );
      gGlow.addColorStop(0, 'rgba(250, 204, 21, 0.85)');
      gGlow.addColorStop(1, 'rgba(250, 204, 21, 0)');
      ctx.fillStyle = gGlow;
      ctx.beginPath();
      ctx.arc(arm.handX, arm.handY, gloveRadius * 2.4, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = isPressed ? '#fef08a' : '#e2e8f0';
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(arm.handX, arm.handY, gloveRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  // Magnetic Boots glow at feet (`gearLevels.boots > 1`)
  if (state.bootsLevel > 1) {
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.7)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(rig.leftFootX, rig.leftFootY, 9 * charScale, 0, Math.PI);
    ctx.arc(rig.rightFootX, rig.rightFootY, 9 * charScale, 0, Math.PI);
    ctx.stroke();
  }

  ctx.restore();
}

/**
 * Draws the Carbon Inertia Balance Pole spanning across the character's IK hands
 */
function drawInertiaBalancePole(ctx, rig, charScale, skin, state) {
  ctx.save();

  const lHand = rig.leftArm;
  const rHand = rig.rightArm;
  const midX = (lHand.handX + rHand.handX) * 0.5;
  const midY = (lHand.handY + rHand.handY) * 0.5;
  const poleAngle = Math.atan2(rHand.handY - lHand.handY, rHand.handX - lHand.handX);

  // Pole length scales slightly with `poleLevel` upgrade
  const poleBonus = 1 + ((state.poleLevel || 1) - 1) * 0.04;
  const halfLen = 195 * charScale * poleBonus;
  const leftTipX = midX - Math.cos(poleAngle) * halfLen;
  const leftTipY = midY - Math.sin(poleAngle) * halfLen + 14 * charScale;
  const rightTipX = midX + Math.cos(poleAngle) * halfLen;
  const rightTipY = midY + Math.sin(poleAngle) * halfLen + 14 * charScale;

  // Carbon fiber pole shaft with elastic flex
  const poleGrad = ctx.createLinearGradient(leftTipX, leftTipY, rightTipX, rightTipY);
  poleGrad.addColorStop(0, skin.trimColor || '#38bdf8');
  poleGrad.addColorStop(0.2, '#94a3b8');
  poleGrad.addColorStop(0.5, '#f8fafc');
  poleGrad.addColorStop(0.8, '#94a3b8');
  poleGrad.addColorStop(1, skin.trimColor || '#38bdf8');

  ctx.strokeStyle = poleGrad;
  ctx.lineWidth = 5.5 * charScale;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(leftTipX, leftTipY);
  ctx.quadraticCurveTo(midX, midY - 8 * charScale, rightTipX, rightTipY);
  ctx.stroke();

  // Illuminated stabilizer gyro tips on both ends of the pole
  const tipColors = [
    state.leftPressed ? '#fde047' : skin.trimColor || '#38bdf8',
    state.rightPressed ? '#fde047' : skin.trimColor || '#38bdf8',
  ];
  const tipsX = [leftTipX, rightTipX];
  const tipsY = [leftTipY, rightTipY];

  for (let i = 0; i < 2; i++) {
    const tx = tipsX[i];
    const ty = tipsY[i];
    const tGlow = ctx.createRadialGradient(tx, ty, 1, tx, ty, 16 * charScale);
    tGlow.addColorStop(0, '#ffffff');
    tGlow.addColorStop(0.45, tipColors[i]);
    tGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = tGlow;
    ctx.beginPath();
    ctx.arc(tx, ty, 16 * charScale, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

/**
 * CAPA 4: Juggling Parabolic Arc Trajectory & Synchronized Timing Catch Rings
 * Uses pre-allocated `state.jugglePool` (up to 4 active objects).
 */
function drawParabolicJugglingLayer(ctx, rig, prop, state) {
  const pool = state.jugglePool;
  if (!pool || state.juggleCount <= 0) return;

  const lHandX = rig.leftArm.handX;
  const lHandY = rig.leftArm.handY;
  const rHandX = rig.rightArm.handX;
  const rHandY = rig.rightArm.handY;

  ctx.save();

  // Subtle dotted parabolic guide arc between hands
  const arcMidX = (lHandX + rHandX) * 0.5;
  const arcTopY = Math.min(lHandY, rHandY) - 145;
  ctx.strokeStyle = 'rgba(250, 204, 21, 0.16)';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 7]);
  ctx.beginPath();
  ctx.moveTo(lHandX, lHandY);
  ctx.quadraticCurveTo(arcMidX, arcTopY, rHandX, rHandY);
  ctx.stroke();
  ctx.setLineDash([]);

  const catchThreshold = state.catchThreshold || 0.78;

  for (let i = 0; i < pool.length; i++) {
    const item = pool[i];
    if (!item.active) continue;

    // Parabolic flight interpolation between origin hand and destination hand:
    // y = handY - 4 * arcHeight * phase * (1 - phase)
    const fromX = item.targetHand === 'R' ? lHandX : rHandX;
    const fromY = item.targetHand === 'R' ? lHandY : rHandY;
    const toX = item.targetHand === 'R' ? rHandX : lHandX;
    const toY = item.targetHand === 'R' ? rHandY : lHandY;

    const p = item.phase;
    const handLerpY = fromY + (toY - fromY) * p;
    const x = fromX + (toX - fromX) * p;
    const y = handLerpY - 4 * item.arcHeight * p * (1 - p);

    // Store computed world coordinates back into the pre-allocated object for IK tracking
    item.x = x;
    item.y = y;

    // Draw Catch Timing Ring when object enters catch window (`phase >= catchThreshold`)
    if (p >= catchThreshold - 0.12) {
      const isReady = p >= catchThreshold;
      const ringProgress = Math.min(1, (1 - p) / Math.max(0.05, 1 - catchThreshold));
      const ringRadius = 14 + ringProgress * 24;

      ctx.strokeStyle = isReady ? '#4ade80' : '#fde047';
      ctx.lineWidth = isReady ? 3.5 : 2;
      ctx.beginPath();
      ctx.arc(toX, toY, ringRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Target hand outer ring
      ctx.strokeStyle = isReady ? 'rgba(74, 222, 128, 0.65)' : 'rgba(250, 204, 21, 0.35)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(toX, toY, 15, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Draw the Photorealistic Prop Sprite or High-Detail Procedural Prop
    drawSingleJuggleProp(ctx, x, y, item.spinAngle, prop);
  }

  ctx.restore();
}

/**
 * Draws a single juggling object at `(x, y)` with rotation `spinAngle`
 */
function drawSingleJuggleProp(ctx, x, y, spinAngle, prop) {
  ctx.save();
  ctx.translate(x, y);

  // Glow Aura
  const halo = ctx.createRadialGradient(0, 0, 2, 0, 0, 26);
  halo.addColorStop(0, prop.glowColor || 'rgba(56, 189, 248, 0.85)');
  halo.addColorStop(0.55, prop.primaryColor || '#38bdf8');
  halo.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = halo;
  ctx.beginPath();
  ctx.arc(0, 0, 26, 0, Math.PI * 2);
  ctx.fill();

  ctx.rotate(spinAngle);

  const realSprite = propsSpriteCache.loaded ? propsSpriteCache.sprites[prop.id] : null;
  if (realSprite) {
    const drawSize = prop.id === 'balls' ? 38 : 48;
    ctx.drawImage(realSprite, -drawSize * 0.5, -drawSize * 0.5, drawSize, drawSize);
  } else {
    ctx.fillStyle = prop.primaryColor || '#38bdf8';
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  ctx.restore();
}

/**
 * Weather Overlay (Rain, Snow, Storm, Fog) with zero array allocations
 */
function drawWeatherOverlay(ctx, w, h, weather, time, windCurrent) {
  if (!weather || weather === 'clear') return;

  ctx.save();
  const windShift = (windCurrent || 0) * 18;

  if (weather === 'rain' || weather === 'storm') {
    ctx.strokeStyle = 'rgba(186, 230, 253, 0.34)';
    ctx.lineWidth = 1.3;
    for (let i = 0; i < 40; i++) {
      const rx = ((i * 73 + time * (260 + windShift * 8)) % (w + 80)) - 40;
      const ry = ((i * 139 + time * 680) % (h + 80)) - 40;
      ctx.beginPath();
      ctx.moveTo(rx, ry);
      ctx.lineTo(rx - 8 + windShift * 0.4, ry + 26);
      ctx.stroke();
    }
    if (weather === 'storm' && Math.sin(time * 7.3) > 0.96) {
      ctx.fillStyle = 'rgba(224, 242, 254, 0.22)';
      ctx.fillRect(0, 0, w, h);
    }
  } else if (weather === 'snow') {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.72)';
    for (let i = 0; i < 34; i++) {
      const sx = ((i * 61 + time * (45 + windShift * 4)) % (w + 20)) - 10;
      const sy = ((i * 97 + time * 115) % (h + 20)) - 10;
      const r = (i % 3) + 1.4;
      ctx.beginPath();
      ctx.arc(sx, sy, r, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (weather === 'fog' || weather === 'sand') {
    const fogGrad = ctx.createLinearGradient(0, h * 0.22, 0, h * 0.85);
    const col = weather === 'sand' ? '245, 158, 11' : '148, 163, 184';
    fogGrad.addColorStop(0, `rgba(${col}, 0)`);
    fogGrad.addColorStop(0.5, `rgba(${col}, 0.16)`);
    fogGrad.addColorStop(1, `rgba(${col}, 0)`);
    ctx.fillStyle = fogGrad;
    ctx.fillRect(0, h * 0.22, w, h * 0.65);
  }

  ctx.restore();
}

/**
 * Floating Popups Pool (`PERFECT +25`, `SAVED!`, etc.) - Zero Allocation Loop
 */
function drawFloatingPopupsPool(ctx, popupPool) {
  if (!popupPool) return;
  ctx.save();
  ctx.font = '900 18px "Orbitron", "Rajdhani", sans-serif';
  ctx.textAlign = 'center';

  for (let i = 0; i < popupPool.length; i++) {
    const p = popupPool[i];
    if (!p.active) continue;
    ctx.globalAlpha = Math.max(0, Math.min(1, p.life));
    ctx.fillStyle = '#000000';
    ctx.fillText(p.text, p.x + 2, p.y + 2);
    ctx.fillStyle = p.color || '#fde047';
    ctx.fillText(p.text, p.x, p.y);
  }

  ctx.restore();
}

/**
 * Cinematic Vignette & Red Danger Border Pulse
 */
function drawVignetteAndDangerOverlay(ctx, w, h, angle, fallSlowMo, time) {
  ctx.save();

  const vig = ctx.createRadialGradient(
    w * 0.5,
    h * 0.5,
    w * 0.28,
    w * 0.5,
    h * 0.5,
    h * 0.76
  );
  vig.addColorStop(0, 'rgba(0, 0, 0, 0)');
  vig.addColorStop(1, 'rgba(2, 4, 12, 0.65)');
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, w, h);

  const absAngle = Math.abs(angle);
  if (absAngle > 24 || fallSlowMo) {
    const intensity = fallSlowMo
      ? 0.52 + 0.25 * Math.sin(time * 16)
      : Math.min(0.5, (absAngle - 24) / 22);
    const redGrad = ctx.createRadialGradient(
      w * 0.5,
      h * 0.5,
      w * 0.18,
      w * 0.5,
      h * 0.5,
      h * 0.72
    );
    redGrad.addColorStop(0, 'rgba(239, 68, 68, 0)');
    redGrad.addColorStop(1, `rgba(220, 38, 38, ${intensity})`);
    ctx.fillStyle = redGrad;
    ctx.fillRect(0, 0, w, h);
  }

  ctx.restore();
}
