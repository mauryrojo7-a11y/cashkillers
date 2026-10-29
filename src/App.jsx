import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import {
  CITIES,
  SKINS,
  JUGGLE_PROPS,
  ARMORY_ITEMS,
  SEASON_RIVALS,
  SEASON_REWARD_TIERS,
  STORE_BUNDLES,
  I18N,
  getLevelConfig,
  getSeasonTimeRemaining,
  soundEngine,
} from './gameData';

const STORAGE_KEY = 'NO_MIRES_ABAJO_PLAYSTORE_V3';
const CRITICAL_ANGLE_RAD = 0.82; // ~47 degrees critical fall angle

// ============================================================================
// GENERADORES DE TEXTURAS Y SHADERS "VECTOR" (EJECUTADOS 1 SOLA VEZ AL INICIAR)
// ============================================================================

function createVectorSilhouetteMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uBaseColor: { value: new THREE.Color(0x06080e) },
      uRimColor: { value: new THREE.Color(0x00f2fe) },
      uRimPower: { value: 2.15 },
      uRimStrength: { value: 0.96 },
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vViewDir;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vNormal = normalize(normalMatrix * normal);
        vViewDir = normalize(-mvPosition.xyz);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 uBaseColor;
      uniform vec3 uRimColor;
      uniform float uRimPower;
      uniform float uRimStrength;
      varying vec3 vNormal;
      varying vec3 vViewDir;
      void main() {
        float ndotv = clamp(dot(normalize(vNormal), normalize(vViewDir)), 0.0, 1.0);
        float fresnel = pow(1.0 - ndotv, uRimPower);
        float rim = smoothstep(0.22, 0.86, fresnel) * uRimStrength;
        vec3 finalCol = mix(uBaseColor, uRimColor, rim);
        gl_FragColor = vec4(finalCol, 1.0);
      }
    `,
  });
}

function createBacklitHorizonTexture() {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 512;
  const g = c.getContext('2d');

  const grad = g.createLinearGradient(0, 0, 0, 512);
  grad.addColorStop(0.0, '#030712');
  grad.addColorStop(0.22, '#07162c');
  grad.addColorStop(0.44, '#0c2d48');
  grad.addColorStop(0.56, '#145374');
  grad.addColorStop(0.64, '#0ea5e9');
  grad.addColorStop(0.72, '#0c2d48');
  grad.addColorStop(1.0, '#030712');
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 512);

  const rad = g.createRadialGradient(128, 305, 10, 128, 305, 135);
  rad.addColorStop(0.0, 'rgba(0, 242, 254, 0.52)');
  rad.addColorStop(0.45, 'rgba(14, 165, 233, 0.26)');
  rad.addColorStop(1.0, 'rgba(7, 22, 44, 0.0)');
  g.fillStyle = rad;
  g.fillRect(0, 0, 256, 512);

  return new THREE.CanvasTexture(c);
}

function createBraidedCableTexture() {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 128;
  const g = c.getContext('2d');

  const grad = g.createLinearGradient(0, 0, 64, 0);
  grad.addColorStop(0, '#0f172a');
  grad.addColorStop(0.35, '#475569');
  grad.addColorStop(0.5, '#e2e8f0');
  grad.addColorStop(0.65, '#334155');
  grad.addColorStop(1, '#090d16');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 128);

  g.strokeStyle = '#06080e';
  g.lineWidth = 5;
  for (let y = -32; y < 160; y += 16) {
    g.beginPath();
    g.moveTo(0, y);
    g.lineTo(64, y + 24);
    g.stroke();

    g.strokeStyle = 'rgba(0, 242, 254, 0.85)';
    g.lineWidth = 2;
    g.beginPath();
    g.moveTo(0, y + 5);
    g.lineTo(64, y + 29);
    g.stroke();

    g.strokeStyle = '#06080e';
    g.lineWidth = 5;
  }

  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1, 720);
  return tex;
}

function createSkyscraperWindowTexture(isDistantLayer = false) {
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 256;
  const g = c.getContext('2d');

  g.fillStyle = isDistantLayer ? '#081c30' : '#051020';
  g.fillRect(0, 0, 128, 256);

  const cols = 8;
  const rows = 26;
  const cw = 128 / cols;
  const ch = 256 / rows;

  for (let r = 0; r < rows; r++) {
    for (let col = 0; col < cols; col++) {
      const seed = (r * 37 + col * 19) % 29;
      if (seed < (isDistantLayer ? 18 : 12)) continue;
      if (seed % 5 === 0) {
        g.fillStyle = isDistantLayer
          ? 'rgba(0, 242, 254, 0.35)'
          : 'rgba(0, 242, 254, 0.72)';
      } else if (seed % 7 === 0) {
        g.fillStyle = isDistantLayer
          ? 'rgba(253, 224, 71, 0.28)'
          : 'rgba(253, 224, 71, 0.62)';
      } else {
        g.fillStyle = isDistantLayer
          ? 'rgba(125, 211, 252, 0.25)'
          : 'rgba(186, 230, 253, 0.45)';
      }
      g.fillRect(col * cw + 3, r * ch + 2, cw - 6, ch - 4);
    }
  }

  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function createHelipadTexture() {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const g = c.getContext('2d');

  g.fillStyle = '#060c18';
  g.fillRect(0, 0, 256, 256);

  g.strokeStyle = '#00f2fe';
  g.lineWidth = 10;
  g.beginPath();
  g.arc(128, 128, 102, 0, Math.PI * 2);
  g.stroke();

  g.strokeStyle = '#fde047';
  g.lineWidth = 5;
  g.beginPath();
  g.arc(128, 128, 84, 0, Math.PI * 2);
  g.stroke();

  g.fillStyle = '#00f2fe';
  g.font = '900 110px sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText('H', 128, 132);

  return new THREE.CanvasTexture(c);
}

// ============================================================================
// CONSTRUCCIÓN DE LA ESCENA 3D WEBGL (`Three.js`) — ESTÉTICA "VECTOR" + CLIMA 3D
// ============================================================================
function buildThreeWorld(mountEl) {
  const width = mountEl.clientWidth || 420;
  const height = mountEl.clientHeight || 780;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x061326);
  scene.fog = new THREE.FogExp2(0x0a2239, 0.011);

  const camera = new THREE.PerspectiveCamera(58, width / height, 0.1, 600);
  camera.position.set(0, 3.4, 6.2);
  camera.lookAt(0, 1.65, -15);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.22;

  mountEl.innerHTML = '';
  mountEl.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0x38bdf8, 0.85);
  scene.add(ambientLight);

  const rimDirLight = new THREE.DirectionalLight(0x00f2fe, 1.65);
  rimDirLight.position.set(0, 28, -65);
  scene.add(rimDirLight);

  const cyanPoleLight = new THREE.PointLight(0x00f2fe, 3.8, 22);
  cyanPoleLight.position.set(0, 1.35, 0);
  scene.add(cyanPoleLight);

  const goldOrbLight = new THREE.PointLight(0xfde047, 4.2, 24);
  goldOrbLight.position.set(0, 2.5, -0.3);
  scene.add(goldOrbLight);

  const backlitTex = createBacklitHorizonTexture();
  const backlitGeo = new THREE.PlaneGeometry(340, 220);
  const backlitMat = new THREE.MeshBasicMaterial({
    map: backlitTex,
    fog: false,
    depthWrite: false,
  });
  const backlitBackdrop = new THREE.Mesh(backlitGeo, backlitMat);
  backlitBackdrop.position.set(0, 12, -210);
  scene.add(backlitBackdrop);

  // Cable de acero en el eje Z (`X = 0, Y = 0`)
  const maxCableLen = 1800;
  const cableTex = createBraidedCableTexture();
  const cableGeo = new THREE.CylinderGeometry(0.042, 0.042, maxCableLen, 16);
  cableGeo.rotateX(Math.PI / 2);
  const cableMat = new THREE.MeshStandardMaterial({
    color: 0xcbd5e1,
    map: cableTex,
    metalness: 0.9,
    roughness: 0.18,
    emissive: 0x00f2fe,
    emissiveIntensity: 0.38,
  });
  const cableMesh = new THREE.Mesh(cableGeo, cableMat);
  cableMesh.position.set(0, 0, -maxCableLen * 0.5 + 12);
  scene.add(cableMesh);

  const coreWireGeo = new THREE.CylinderGeometry(0.015, 0.015, maxCableLen, 8);
  coreWireGeo.rotateX(Math.PI / 2);
  const coreWireMat = new THREE.MeshBasicMaterial({
    color: 0x00f2fe,
    transparent: true,
    opacity: 0.72,
  });
  const coreWireMesh = new THREE.Mesh(coreWireGeo, coreWireMat);
  coreWireMesh.position.set(0, 0.022, -maxCableLen * 0.5 + 12);
  scene.add(coreWireMesh);

  // Azotea de salida y llegada
  const roofMat = new THREE.MeshStandardMaterial({
    color: 0x050912,
    roughness: 0.8,
    metalness: 0.2,
  });
  const startRoofGeo = new THREE.BoxGeometry(7.2, 60, 7);
  const startRoof = new THREE.Mesh(startRoofGeo, roofMat);
  startRoof.position.set(0, -30.045, 3.5);
  scene.add(startRoof);

  const arrivalGroup = new THREE.Group();
  const endTowerGeo = new THREE.BoxGeometry(9.2, 70, 9.2);
  const endTowerMesh = new THREE.Mesh(endTowerGeo, roofMat);
  endTowerMesh.position.set(0, -35.045, 0);
  arrivalGroup.add(endTowerMesh);

  const helipadTex = createHelipadTexture();
  const helipadGeo = new THREE.PlaneGeometry(7.0, 7.0);
  helipadGeo.rotateX(-Math.PI / 2);
  const helipadMat = new THREE.MeshBasicMaterial({ map: helipadTex });
  const helipadMesh = new THREE.Mesh(helipadGeo, helipadMat);
  helipadMesh.position.set(0, 0.01, 0);
  arrivalGroup.add(helipadMesh);

  const beaconRingGeo = new THREE.TorusGeometry(3.4, 0.075, 12, 36);
  beaconRingGeo.rotateX(Math.PI / 2);
  const beaconRingMat = new THREE.MeshBasicMaterial({ color: 0x00f2fe });
  const beaconRingMesh = new THREE.Mesh(beaconRingGeo, beaconRingMat);
  beaconRingMesh.position.set(0, 0.12, 0);
  arrivalGroup.add(beaconRingMesh);

  arrivalGroup.position.set(0, 0, -100);
  scene.add(arrivalGroup);

  // Rascacielos en capas de profundidad atmosférica + haces de luz nocturnos
  const nearWinTex = createSkyscraperWindowTexture(false);
  const farWinTex = createSkyscraperWindowTexture(true);

  const nearBuildingMat = new THREE.MeshStandardMaterial({
    color: 0x071526,
    map: nearWinTex,
    emissive: 0x0ea5e9,
    emissiveMap: nearWinTex,
    emissiveIntensity: 0.58,
    roughness: 0.5,
    metalness: 0.4,
  });

  const midSilhouetteMat = new THREE.MeshBasicMaterial({
    color: 0x0b2239,
    map: farWinTex,
  });

  const farMistyMat = new THREE.MeshBasicMaterial({
    color: 0x113654,
  });

  const rimEdgeMat = new THREE.MeshBasicMaterial({
    color: 0x00f2fe,
    transparent: true,
    opacity: 0.35,
  });

  const skyscrapers = [];
  for (let i = 0; i < 44; i++) {
    const isLeft = i % 2 === 0;
    const layer = i % 3;
    const rowIdx = Math.floor(i / 2);

    const bw = 6.5 + (i % 4) * 2.1 + layer * 2.2;
    const bd = 6.5 + ((i * 3) % 4) * 1.8;
    const bh = 72 + ((i * 13) % 42) + layer * 16;

    const bGeo = new THREE.BoxGeometry(bw, bh, bd);
    const mat =
      layer === 0
        ? nearBuildingMat
        : layer === 1
          ? midSilhouetteMat
          : farMistyMat;
    const bMesh = new THREE.Mesh(bGeo, mat);

    const lateralDist =
      layer === 0
        ? 12.2 + (i % 3) * 2.8
        : layer === 1
          ? 21.5 + (i % 3) * 4.2
          : 32.0 + (i % 4) * 5.0;
    const xOffset = (isLeft ? -1 : 1) * lateralDist;
    const zPos = 10 - rowIdx * 13;
    const yPos = -60 + bh * 0.5;
    bMesh.position.set(xOffset, yPos, zPos);

    if (layer === 0) {
      const edgeGeo = new THREE.BoxGeometry(0.12, bh, 0.12);
      const edgeMesh = new THREE.Mesh(edgeGeo, rimEdgeMat);
      edgeMesh.position.set(
        isLeft ? bw * 0.5 + 0.04 : -bw * 0.5 - 0.04,
        0,
        bd * 0.5
      );
      bMesh.add(edgeMesh);
    }

    scene.add(bMesh);
    skyscrapers.push(bMesh);
  }

  const spotlightBeams = [];
  const beamGeo = new THREE.ConeGeometry(5.5, 115, 20, 1, true);
  for (let i = 0; i < 10; i++) {
    const isLeft = i % 2 === 0;
    const beamMat = new THREE.MeshBasicMaterial({
      color: i % 3 === 0 ? 0x00f2fe : 0x0ea5e9,
      transparent: true,
      opacity: i % 3 === 0 ? 0.11 : 0.075,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const beamMesh = new THREE.Mesh(beamGeo, beamMat);
    const xPos = (isLeft ? -1 : 1) * (8.5 + (i % 3) * 4.5);
    const zPos = -18 - i * 24;
    beamMesh.position.set(xPos, 8, zPos);
    beamMesh.rotation.z = (isLeft ? -1 : 1) * 0.24;
    scene.add(beamMesh);
    spotlightBeams.push({
      mesh: beamMesh,
      mat: beamMat,
      baseAngle: (isLeft ? -1 : 1) * 0.24,
      speed: 0.45 + (i % 4) * 0.18,
      phaseOffset: i * 1.1,
    });
  }

  // Estelas de tránsito nocturno allá abajo en el abismo
  const carMeshes = [];
  const carGeo = new THREE.BoxGeometry(0.4, 0.18, 2.2);
  const cyanCarMat = new THREE.MeshBasicMaterial({ color: 0x00f2fe });
  const redCarMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
  for (let i = 0; i < 20; i++) {
    const isRed = i % 2 === 0;
    const cMesh = new THREE.Mesh(carGeo, isRed ? redCarMat : cyanCarMat);
    const laneX = ((i % 4) - 1.5) * 2.1;
    cMesh.position.set(laneX, -36, -i * 12);
    scene.add(cMesh);
    carMeshes.push({
      mesh: cMesh,
      speed: (isRed ? -1 : 1) * (15 + (i % 4) * 3.5),
    });
  }

  // ============================================================================
  // BLOQUE 4: POOL DE PARTÍCULAS CLIMÁTICAS 3D RECICLADAS (`THREE.Points`, CERO GC)
  // ============================================================================
  const weatherCount = 220;
  const weatherPositions = new Float32Array(weatherCount * 3);
  for (let i = 0; i < weatherCount; i++) {
    weatherPositions[i * 3 + 0] = (Math.random() - 0.5) * 28;
    weatherPositions[i * 3 + 1] = -6 + Math.random() * 20;
    weatherPositions[i * 3 + 2] = 6 - Math.random() * 55;
  }
  const weatherGeo = new THREE.BufferGeometry();
  weatherGeo.setAttribute('position', new THREE.BufferAttribute(weatherPositions, 3));
  const weatherMat = new THREE.PointsMaterial({
    color: 0x00f2fe,
    size: 0.14,
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const weatherPoints = new THREE.Points(weatherGeo, weatherMat);
  scene.add(weatherPoints);

  // ============================================================================
  // ACRÓBATA EN SILUETA NEGRA MATE (`0x06080e`) + RIM LIGHT CIAN (`0x00f2fe`)
  // ============================================================================
  const acrobatGroup = new THREE.Group();
  acrobatGroup.position.set(0, 0, 0);
  scene.add(acrobatGroup);

  const vectorSilhouetteMat = createVectorSilhouetteMaterial();
  const pureCyanNeonMat = new THREE.MeshBasicMaterial({
    color: 0x00f2fe,
  });

  const createArticulatedLeg = (isLeft) => {
    const hipGroup = new THREE.Group();
    hipGroup.position.set(isLeft ? -0.08 : 0.08, 0.88, 0);

    const thighGeo = new THREE.CapsuleGeometry(0.064, 0.34, 10, 18);
    const thighMesh = new THREE.Mesh(thighGeo, vectorSilhouetteMat);
    thighMesh.position.set(isLeft ? 0.018 : -0.018, -0.19, 0);
    thighMesh.rotation.z = isLeft ? 0.05 : -0.05;
    hipGroup.add(thighMesh);

    const kneeGroup = new THREE.Group();
    kneeGroup.position.set(isLeft ? 0.035 : -0.035, -0.41, 0);
    hipGroup.add(kneeGroup);

    const calfGeo = new THREE.CapsuleGeometry(0.05, 0.34, 10, 18);
    const calfMesh = new THREE.Mesh(calfGeo, vectorSilhouetteMat);
    calfMesh.position.set(isLeft ? 0.02 : -0.02, -0.2, 0);
    calfMesh.rotation.z = isLeft ? 0.04 : -0.04;
    kneeGroup.add(calfMesh);

    const bootGroup = new THREE.Group();
    bootGroup.position.set(isLeft ? 0.035 : -0.035, -0.43, 0);
    kneeGroup.add(bootGroup);

    const footGeo = new THREE.CapsuleGeometry(0.042, 0.14, 8, 14);
    footGeo.rotateX(Math.PI / 2);
    const footMesh = new THREE.Mesh(footGeo, vectorSilhouetteMat);
    footMesh.position.set(0, -0.01, -0.025);
    bootGroup.add(footMesh);

    return { hipGroup, kneeGroup, bootGroup };
  };

  const leftLeg = createArticulatedLeg(true);
  const rightLeg = createArticulatedLeg(false);
  acrobatGroup.add(leftLeg.hipGroup);
  acrobatGroup.add(rightLeg.hipGroup);

  const upperBodyGroup = new THREE.Group();
  acrobatGroup.add(upperBodyGroup);

  const pelvisGeo = new THREE.CylinderGeometry(0.135, 0.12, 0.15, 18);
  pelvisGeo.scale(1.15, 1, 0.72);
  const pelvisMesh = new THREE.Mesh(pelvisGeo, vectorSilhouetteMat);
  pelvisMesh.position.set(0, 0.89, 0);
  upperBodyGroup.add(pelvisMesh);

  const torsoSpineGroup = new THREE.Group();
  torsoSpineGroup.position.set(0, 0.95, 0);
  upperBodyGroup.add(torsoSpineGroup);

  const lowerTorsoGeo = new THREE.CylinderGeometry(0.165, 0.125, 0.24, 18);
  lowerTorsoGeo.scale(1.18, 1, 0.68);
  const lowerTorsoMesh = new THREE.Mesh(lowerTorsoGeo, vectorSilhouetteMat);
  lowerTorsoMesh.position.set(0, 0.12, 0);
  torsoSpineGroup.add(lowerTorsoMesh);

  const chestGeo = new THREE.CylinderGeometry(0.215, 0.162, 0.28, 20);
  chestGeo.scale(1.24, 1, 0.68);
  const chestMesh = new THREE.Mesh(chestGeo, vectorSilhouetteMat);
  chestMesh.position.set(0, 0.35, 0);
  torsoSpineGroup.add(chestMesh);

  // Tira dorsal de energía (se enciende al doble en Modo Frenesí Combo x10)
  const dorsalStripGeo = new THREE.BoxGeometry(0.036, 0.38, 0.024);
  const dorsalStripMat = new THREE.MeshBasicMaterial({
    color: 0x00f2fe,
    transparent: true,
    opacity: 0.45,
  });
  const dorsalStripMesh = new THREE.Mesh(dorsalStripGeo, dorsalStripMat);
  dorsalStripMesh.position.set(0, 0.26, 0.13);
  torsoSpineGroup.add(dorsalStripMesh);

  const shoulderCapGeo = new THREE.SphereGeometry(0.078, 16, 16);
  const leftCapMesh = new THREE.Mesh(shoulderCapGeo, vectorSilhouetteMat);
  leftCapMesh.position.set(-0.255, 0.45, 0);
  torsoSpineGroup.add(leftCapMesh);

  const rightCapMesh = new THREE.Mesh(shoulderCapGeo, vectorSilhouetteMat);
  rightCapMesh.position.set(0.255, 0.45, 0);
  torsoSpineGroup.add(rightCapMesh);

  const neckGeo = new THREE.CylinderGeometry(0.05, 0.06, 0.1, 14);
  const neckMesh = new THREE.Mesh(neckGeo, vectorSilhouetteMat);
  neckMesh.position.set(0, 0.54, 0);
  torsoSpineGroup.add(neckMesh);

  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.67, 0);
  torsoSpineGroup.add(headGroup);

  const craniumGeo = new THREE.SphereGeometry(0.118, 24, 24);
  craniumGeo.scale(0.95, 1.06, 1.02);
  const craniumMesh = new THREE.Mesh(craniumGeo, vectorSilhouetteMat);
  headGroup.add(craniumMesh);

  const headbandGeo = new THREE.TorusGeometry(0.116, 0.016, 12, 28);
  headbandGeo.rotateX(Math.PI / 2);
  const headbandMesh = new THREE.Mesh(headbandGeo, pureCyanNeonMat);
  headbandMesh.position.set(0, 0.025, 0);
  headGroup.add(headbandMesh);

  const ribbonPivot = new THREE.Group();
  ribbonPivot.position.set(0, 0.022, 0.118);
  headGroup.add(ribbonPivot);

  const segGeo1 = new THREE.BoxGeometry(0.16, 0.028, 0.008);
  segGeo1.translate(0.08, 0, 0);
  const ribbonSeg1 = new THREE.Mesh(segGeo1, pureCyanNeonMat);
  ribbonPivot.add(ribbonSeg1);

  const ribbonJoint2 = new THREE.Group();
  ribbonJoint2.position.set(0.155, 0, 0);
  ribbonSeg1.add(ribbonJoint2);

  const segGeo2 = new THREE.BoxGeometry(0.16, 0.024, 0.007);
  segGeo2.translate(0.08, 0, 0);
  const ribbonSeg2 = new THREE.Mesh(segGeo2, pureCyanNeonMat);
  ribbonJoint2.add(ribbonSeg2);

  const ribbonJoint3 = new THREE.Group();
  ribbonJoint3.position.set(0.155, 0, 0);
  ribbonSeg2.add(ribbonJoint3);

  const segGeo3 = new THREE.BoxGeometry(0.15, 0.018, 0.006);
  segGeo3.translate(0.075, 0, 0);
  const ribbonSeg3 = new THREE.Mesh(segGeo3, pureCyanNeonMat);
  ribbonJoint3.add(ribbonSeg3);

  const createArticulatedArm = (isLeft) => {
    const shoulderGroup = new THREE.Group();
    shoulderGroup.position.set(isLeft ? -0.255 : 0.255, 0.44, 0);

    const upperArmGeo = new THREE.CapsuleGeometry(0.048, 0.22, 10, 16);
    const upperArmMesh = new THREE.Mesh(upperArmGeo, vectorSilhouetteMat);
    upperArmMesh.position.set(isLeft ? -0.08 : 0.08, -0.11, -0.02);
    upperArmMesh.rotation.z = isLeft ? -0.56 : 0.56;
    shoulderGroup.add(upperArmMesh);

    const elbowGroup = new THREE.Group();
    elbowGroup.position.set(isLeft ? -0.16 : 0.16, -0.21, -0.04);
    shoulderGroup.add(elbowGroup);

    const forearmGeo = new THREE.CapsuleGeometry(0.042, 0.21, 10, 16);
    const forearmMesh = new THREE.Mesh(forearmGeo, vectorSilhouetteMat);
    forearmMesh.position.set(isLeft ? -0.07 : 0.07, -0.04, -0.09);
    forearmMesh.rotation.x = 0.72;
    forearmMesh.rotation.z = isLeft ? -0.45 : 0.45;
    elbowGroup.add(forearmMesh);

    const handGeo = new THREE.SphereGeometry(0.046, 14, 14);
    const handMesh = new THREE.Mesh(handGeo, vectorSilhouetteMat);
    handMesh.position.set(isLeft ? -0.14 : 0.14, -0.08, -0.18);
    elbowGroup.add(handMesh);

    return { shoulderGroup, elbowGroup, handMesh };
  };

  const leftArm = createArticulatedArm(true);
  const rightArm = createArticulatedArm(false);
  torsoSpineGroup.add(leftArm.shoulderGroup);
  torsoSpineGroup.add(rightArm.shoulderGroup);

  // Vara Láser de Equilibrio en Neón Cian (`0x00f2fe`)
  const poleGroup = new THREE.Group();
  poleGroup.position.set(0, 0.17, -0.2);
  torsoSpineGroup.add(poleGroup);

  const poleLen = 4.0;
  const poleCoreGeo = new THREE.CylinderGeometry(0.018, 0.018, poleLen, 16);
  poleCoreGeo.rotateZ(Math.PI / 2);
  const poleCoreMat = new THREE.MeshBasicMaterial({
    color: 0xe0f2fe,
  });
  const poleMesh = new THREE.Mesh(poleCoreGeo, poleCoreMat);
  poleGroup.add(poleMesh);

  const poleLaserGlowGeo = new THREE.CylinderGeometry(0.052, 0.052, poleLen, 14);
  poleLaserGlowGeo.rotateZ(Math.PI / 2);
  const poleLaserGlowMat = new THREE.MeshBasicMaterial({
    color: 0x00f2fe,
    transparent: true,
    opacity: 0.42,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const poleGlowMesh = new THREE.Mesh(poleLaserGlowGeo, poleLaserGlowMat);
  poleGroup.add(poleGlowMesh);

  const tipGeo = new THREE.SphereGeometry(0.055, 14, 14);
  const leftTipMesh = new THREE.Mesh(tipGeo, pureCyanNeonMat);
  leftTipMesh.position.set(-poleLen * 0.5, 0, 0);
  poleGroup.add(leftTipMesh);

  const rightTipMesh = new THREE.Mesh(tipGeo, pureCyanNeonMat);
  rightTipMesh.position.set(poleLen * 0.5, 0, 0);
  poleGroup.add(rightTipMesh);

  // ============================================================================
  // BLOQUE 2.2: LÍNEA LÁSER 3D DEL GANCHO SALVAVIDAS + DESTELLO DE PARTÍCULAS CIAN
  // ============================================================================
  const grappleLinePositions = new Float32Array(6);
  const grappleLineGeo = new THREE.BufferGeometry();
  grappleLineGeo.setAttribute(
    'position',
    new THREE.BufferAttribute(grappleLinePositions, 3)
  );
  const grappleLineMat = new THREE.LineBasicMaterial({
    color: 0x00f2fe,
    linewidth: 3,
  });
  const grappleLaserLine = new THREE.Line(grappleLineGeo, grappleLineMat);
  grappleLaserLine.visible = false;
  scene.add(grappleLaserLine);

  const grappleBeamGeo = new THREE.CylinderGeometry(0.04, 0.04, 1, 10);
  const grappleBeamMat = new THREE.MeshBasicMaterial({
    color: 0x00f2fe,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const grappleBeamMesh = new THREE.Mesh(grappleBeamGeo, grappleBeamMat);
  grappleBeamMesh.visible = false;
  scene.add(grappleBeamMesh);

  const receiverGeo = new THREE.TorusGeometry(0.14, 0.012, 10, 28);
  const leftReceiverMat = new THREE.MeshBasicMaterial({
    color: 0x00f2fe,
    transparent: true,
    opacity: 0.55,
    blending: THREE.AdditiveBlending,
  });
  const rightReceiverMat = new THREE.MeshBasicMaterial({
    color: 0x00f2fe,
    transparent: true,
    opacity: 0.55,
    blending: THREE.AdditiveBlending,
  });
  const leftReceiverRing = new THREE.Mesh(receiverGeo, leftReceiverMat);
  const rightReceiverRing = new THREE.Mesh(receiverGeo, rightReceiverMat);
  scene.add(leftReceiverRing);
  scene.add(rightReceiverRing);

  // Esferas doradas incandescentes (`0xfde047`) con estela de luz
  const orbCoreGeo = new THREE.SphereGeometry(0.12, 24, 24);
  const orbHaloGeo = new THREE.SphereGeometry(0.24, 16, 16);
  const trailSphereGeo = new THREE.SphereGeometry(0.072, 12, 12);

  const orbCoreMat = new THREE.MeshBasicMaterial({
    color: 0xfef9c3,
  });
  const orbHaloMat = new THREE.MeshBasicMaterial({
    color: 0xfde047,
    transparent: true,
    opacity: 0.52,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const orbMeshes = [];
  for (let i = 0; i < 4; i++) {
    const group = new THREE.Group();
    const core = new THREE.Mesh(orbCoreGeo, orbCoreMat);
    const halo = new THREE.Mesh(orbHaloGeo, orbHaloMat);
    group.add(core);
    group.add(halo);
    scene.add(group);

    const trails = [];
    for (let tIdx = 0; tIdx < 7; tIdx++) {
      const tMat = new THREE.MeshBasicMaterial({
        color: tIdx < 3 ? 0xfde047 : 0xf59e0b,
        transparent: true,
        opacity: 0.68 - tIdx * 0.085,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const tMesh = new THREE.Mesh(trailSphereGeo, tMat);
      const scale = 1 - tIdx * 0.12;
      tMesh.scale.set(scale, scale, scale);
      scene.add(tMesh);
      trails.push(tMesh);
    }

    orbMeshes.push({ group, core, halo, trails });
  }

  return {
    scene,
    camera,
    renderer,
    ambientLight,
    rimDirLight,
    cyanPoleLight,
    goldOrbLight,
    backlitBackdrop,
    cableTex,
    arrivalGroup,
    beaconRingMesh,
    skyscrapers,
    spotlightBeams,
    carMeshes,
    weatherPoints,
    weatherGeo,
    weatherMat,
    weatherCount,
    acrobatGroup,
    vectorSilhouetteMat,
    dorsalStripMat,
    poleCoreMat,
    poleLaserGlowMat,
    poleGlowMesh,
    upperBodyGroup,
    torsoSpineGroup,
    headGroup,
    leftLeg,
    rightLeg,
    leftArm,
    rightArm,
    poleGroup,
    ribbonPivot,
    ribbonJoint2,
    ribbonJoint3,
    grappleLaserLine,
    grappleLineGeo,
    grappleBeamMesh,
    leftReceiverRing,
    rightReceiverRing,
    leftReceiverMat,
    rightReceiverMat,
    orbMeshes,
    worldLeftHand: new THREE.Vector3(),
    worldRightHand: new THREE.Vector3(),
    grappleAnchor: new THREE.Vector3(),
    activeCityIndex: -1,
  };
}

// ============================================================================
// ACTUALIZACIÓN POR FRAME DEL MUNDO 3D — CAÍDA 3D, GANCHO, MODO FRENESÍ Y CLIMA
// (CERO GARBAGE COLLECTION)
// ============================================================================
function updateAndRenderThreeScene(threeCtx, eng, dt) {
  if (!threeCtx) return;

  const playerZ = -eng.distance;
  const angle = eng.angle;
  const absAngle = Math.abs(angle);
  const tiltRatio = Math.min(1, absAngle / CRITICAL_ANGLE_RAD);
  const speedMult = eng.walkSpeedMultiplier || 1.0;

  // ============================================================================
  // BLOQUE 4: IDENTIDAD ATMOSFÉRICA Y CLIMÁTICA 3D PARA LAS 20 CIUDADES
  // ============================================================================
  const city = eng.cfg?.city || CITIES[0];
  if (threeCtx.activeCityIndex !== eng.cityIndex) {
    threeCtx.activeCityIndex = eng.cityIndex;
    const arch = city.weatherArchetype || 'urban';
    if (arch === 'cyber_rain') {
      threeCtx.scene.background.setHex(0x06091e);
      threeCtx.scene.fog.color.setHex(0x0e1842);
      threeCtx.weatherMat.color.setHex(0x00f2fe);
      threeCtx.weatherMat.size = 0.16;
    } else if (arch === 'golden_embers') {
      threeCtx.scene.background.setHex(0x120918);
      threeCtx.scene.fog.color.setHex(0x28172c);
      threeCtx.weatherMat.color.setHex(0xfde047);
      threeCtx.weatherMat.size = 0.18;
    } else if (arch === 'blizzard') {
      threeCtx.scene.background.setHex(0x061326);
      threeCtx.scene.fog.color.setHex(0x102c4e);
      threeCtx.weatherMat.color.setHex(0xe0f2fe);
      threeCtx.weatherMat.size = 0.2;
    } else {
      threeCtx.scene.background.setHex(0x051124);
      threeCtx.scene.fog.color.setHex(0x0a2239);
      threeCtx.weatherMat.color.setHex(0x38bdf8);
      threeCtx.weatherMat.size = 0.14;
    }
  }

  // Actualizar partículas climáticas 3D en su BufferAttribute (cero GC)
  const posAttr = threeCtx.weatherGeo.attributes.position;
  const arr = posAttr.array;
  const arch = city.weatherArchetype || 'urban';
  const windX = (eng.windCurrent || 0) * (arch === 'blizzard' ? 14.0 : 9.5);
  const fallSpeedY =
    arch === 'cyber_rain'
      ? -24.0
      : arch === 'blizzard'
        ? -6.5
        : arch === 'golden_embers'
          ? 2.2
          : -1.8;

  for (let i = 0; i < threeCtx.weatherCount; i++) {
    const idx = i * 3;
    arr[idx + 0] += windX * dt;
    arr[idx + 1] += fallSpeedY * dt;

    if (arr[idx + 0] > 15) arr[idx + 0] -= 30;
    else if (arr[idx + 0] < -15) arr[idx + 0] += 30;

    if (fallSpeedY < 0 && arr[idx + 1] < -8) {
      arr[idx + 1] = 14;
    } else if (fallSpeedY > 0 && arr[idx + 1] > 14) {
      arr[idx + 1] = -8;
    }

    if (arr[idx + 2] > playerZ + 8) {
      arr[idx + 2] -= 56;
    } else if (arr[idx + 2] < playerZ - 50) {
      arr[idx + 2] += 56;
    }
  }
  posAttr.needsUpdate = true;

  // ============================================================================
  // BLOQUE 3.2: MODO FRENESÍ (NEON OVERDRIVE EN COMBO x10)
  // ============================================================================
  const isFever = eng.isFeverMode;
  threeCtx.vectorSilhouetteMat.uniforms.uRimStrength.value = isFever ? 1.65 : 0.96;
  threeCtx.vectorSilhouetteMat.uniforms.uRimColor.value.setHex(
    isFever && Math.sin(eng.time * 18) > 0 ? 0xfde047 : 0x00f2fe
  );
  threeCtx.dorsalStripMat.opacity = isFever ? 0.95 : 0.45;
  threeCtx.dorsalStripMat.color.setHex(isFever ? 0xfde047 : 0x00f2fe);
  threeCtx.poleLaserGlowMat.opacity = isFever ? 0.82 : 0.42;
  const poleScaleY = isFever ? 1.45 : 1.0;
  threeCtx.poleGlowMesh.scale.set(poleScaleY, 1, poleScaleY);

  // ============================================================================
  // BLOQUE 2: SECUENCIA CINEMÁTICA 3D DE CAÍDA AL VACÍO + GANCHO SALVAVIDAS
  // ============================================================================
  const lerpFast = Math.min(1, dt * 11);
  const lerpMed = Math.min(1, dt * 7.5);

  const targetKneeFlex = tiltRatio * 0.56 + (eng.fallSlowMo ? 0.22 : 0);
  eng.smoothKneeFlex += (targetKneeFlex - eng.smoothKneeFlex) * lerpFast;

  const targetHipOffsetX = -Math.sin(angle) * 0.25;
  eng.smoothHipX += (targetHipOffsetX - eng.smoothHipX) * lerpFast;

  const isNearCritical = absAngle > CRITICAL_ANGLE_RAD * 0.75 || eng.fallSlowMo;
  const targetEdgeSave = isNearCritical ? 1.0 : 0.0;
  eng.edgeSaveBlend += (targetEdgeSave - eng.edgeSaveBlend) * lerpFast;

  const targetTorsoComp =
    -angle * 0.38 - Math.sin(angle) * 0.16 * (1 + eng.edgeSaveBlend * 0.45);
  const targetNeckComp = -angle * 0.32;
  eng.smoothTorsoComp += (targetTorsoComp - eng.smoothTorsoComp) * lerpMed;
  eng.smoothNeckComp += (targetNeckComp - eng.smoothNeckComp) * lerpMed;

  if (eng.fallSlowMo) {
    // 2.1: Estado `falling`: El acróbata se desprende del cable y cae en el eje -Y girando hacia el abismo
    threeCtx.acrobatGroup.position.set(eng.fallPosX, eng.fallPosY, playerZ);
    threeCtx.acrobatGroup.rotation.z = -angle * 1.35;
    threeCtx.acrobatGroup.rotation.x = eng.fallTumbleX;
  } else if (eng.grappleRescueTimer > 0) {
    // 2.2: Rescate físico con Gancho Salvavidas impulsando al acróbata de regreso a (0, 0, playerZ)
    const rescueRatio = eng.grappleRescueTimer / 0.45;
    const curX = eng.rescueStartX * rescueRatio;
    const curY = eng.rescueStartY * rescueRatio;
    threeCtx.acrobatGroup.position.set(curX, curY, playerZ);
    threeCtx.acrobatGroup.rotation.z = -angle * rescueRatio;
    threeCtx.acrobatGroup.rotation.x = 0;
  } else {
    threeCtx.acrobatGroup.position.set(0, 0, playerZ);
    threeCtx.acrobatGroup.rotation.z = -angle * 0.72;
    threeCtx.acrobatGroup.rotation.x = 0;
  }

  // Ciclo de caminata elástico cuya amplitud y cadencia escalan con `walkSpeedMultiplier`
  const isWalking = eng.gameStatus === 'PLAYING' && !eng.fallSlowMo;
  const stepSin = isWalking ? Math.sin(eng.stepPhase) : 0;
  const stepCos = isWalking ? Math.cos(eng.stepPhase) : 0;
  const strideAmp = Math.min(0.56, 0.34 * Math.pow(speedMult, 0.45));
  const walkBobY = isWalking
    ? Math.abs(stepSin) * 0.036 * Math.min(1.5, speedMult)
    : Math.sin(eng.time * 2.6) * 0.012;
  const crouchDropY = eng.smoothKneeFlex * 0.22;

  threeCtx.upperBodyGroup.position.x = eng.smoothHipX;
  threeCtx.upperBodyGroup.position.y = walkBobY - crouchDropY;

  const pedalWave = Math.sin(eng.time * 22) * eng.edgeSaveBlend;
  const kneeBendExtra = eng.smoothKneeFlex * 0.95;

  threeCtx.leftLeg.hipGroup.position.x = -0.08 + eng.smoothHipX * 0.65;
  threeCtx.rightLeg.hipGroup.position.x = 0.08 + eng.smoothHipX * 0.65;
  threeCtx.leftLeg.hipGroup.position.y = 0.88 - crouchDropY;
  threeCtx.rightLeg.hipGroup.position.y = 0.88 - crouchDropY;

  const legCounterZ = -eng.smoothHipX * 0.75;
  const leftKickOut =
    angle > 0 ? eng.edgeSaveBlend * (0.28 + Math.abs(pedalWave) * 0.22) : 0;
  const rightKickOut =
    angle < 0 ? -eng.edgeSaveBlend * (0.28 + Math.abs(pedalWave) * 0.22) : 0;

  threeCtx.leftLeg.hipGroup.rotation.z = legCounterZ - leftKickOut;
  threeCtx.rightLeg.hipGroup.rotation.z = legCounterZ - rightKickOut;

  threeCtx.leftLeg.hipGroup.rotation.x =
    stepSin * strideAmp + kneeBendExtra * 0.55 + pedalWave * 0.25;
  threeCtx.leftLeg.kneeGroup.rotation.x =
    -Math.max(0, stepCos) * (strideAmp * 1.22) - kneeBendExtra * 1.1;
  threeCtx.leftLeg.bootGroup.rotation.x = kneeBendExtra * 0.52;

  threeCtx.rightLeg.hipGroup.rotation.x =
    -stepSin * strideAmp + kneeBendExtra * 0.55 - pedalWave * 0.25;
  threeCtx.rightLeg.kneeGroup.rotation.x =
    -Math.max(0, -stepCos) * (strideAmp * 1.22) - kneeBendExtra * 1.1;
  threeCtx.rightLeg.bootGroup.rotation.x = kneeBendExtra * 0.52;

  const forwardLean = isWalking ? Math.min(0.24, (speedMult - 1) * 0.14) : 0;
  threeCtx.torsoSpineGroup.rotation.z =
    eng.smoothTorsoComp + pedalWave * 0.08;
  threeCtx.torsoSpineGroup.rotation.x =
    0.06 + forwardLean + eng.smoothKneeFlex * 0.18 + eng.edgeSaveBlend * 0.28;

  threeCtx.headGroup.rotation.z = eng.smoothNeckComp;
  threeCtx.headGroup.rotation.x =
    -forwardLean * 0.7 - eng.smoothKneeFlex * 0.14 - eng.edgeSaveBlend * 0.2;

  const leftLift = eng.leftPressed ? 0.28 : 0;
  const rightLift =
    eng.grappleRescueTimer > 0 ? 1.45 : eng.rightPressed ? 0.28 : 0;
  const armSwing = stepSin * 0.12 * speedMult;
  threeCtx.leftArm.shoulderGroup.rotation.x = -armSwing + pedalWave * 0.55;
  threeCtx.rightArm.shoulderGroup.rotation.x =
    eng.grappleRescueTimer > 0 ? -1.35 : armSwing - pedalWave * 0.55;
  threeCtx.leftArm.shoulderGroup.rotation.z =
    -eng.smoothTorsoComp * 0.4 - eng.edgeSaveBlend * 0.22;
  threeCtx.rightArm.shoulderGroup.rotation.z =
    -eng.smoothTorsoComp * 0.4 + eng.edgeSaveBlend * 0.22;

  threeCtx.leftArm.elbowGroup.rotation.x = leftLift + eng.edgeSaveBlend * 0.25;
  threeCtx.rightArm.elbowGroup.rotation.x = rightLift + eng.edgeSaveBlend * 0.25;

  threeCtx.poleGroup.rotation.z =
    (rightLift - leftLift) * 0.38 - angle * 0.42 + pedalWave * 0.14;

  const windVal = eng.windCurrent || 0;
  const ribbonFreq = 10.5 * Math.min(1.6, speedMult);
  threeCtx.ribbonPivot.rotation.y =
    -Math.PI * 0.5 + windVal * 0.78 + Math.sin(eng.time * ribbonFreq) * 0.22;
  threeCtx.ribbonPivot.rotation.z = Math.cos(eng.time * (ribbonFreq * 1.15)) * 0.16;
  threeCtx.ribbonJoint2.rotation.y =
    Math.sin(eng.time * (ribbonFreq * 1.35) - 0.8) * 0.28 + windVal * 0.22;
  threeCtx.ribbonJoint3.rotation.y =
    Math.sin(eng.time * (ribbonFreq * 1.6) - 1.6) * 0.34 + windVal * 0.25;

  threeCtx.backlitBackdrop.position.z = playerZ - 210;
  threeCtx.arrivalGroup.position.set(0, 0, -eng.targetDistance - 3.5);
  const pulse = 1 + Math.sin(eng.time * 5) * 0.08;
  threeCtx.beaconRingMesh.scale.set(pulse, pulse, 1);

  for (let i = 0; i < threeCtx.spotlightBeams.length; i++) {
    const bObj = threeCtx.spotlightBeams[i];
    bObj.mesh.rotation.z =
      bObj.baseAngle + Math.sin(eng.time * bObj.speed + bObj.phaseOffset) * 0.14;
    if (bObj.mesh.position.z > playerZ + 15) {
      bObj.mesh.position.z -= 240;
    } else if (bObj.mesh.position.z < playerZ - 235) {
      bObj.mesh.position.z += 240;
    }
  }

  for (let i = 0; i < threeCtx.skyscrapers.length; i++) {
    const bMesh = threeCtx.skyscrapers[i];
    if (bMesh.position.z > playerZ + 18) {
      bMesh.position.z -= 286;
    } else if (bMesh.position.z < playerZ - 268) {
      bMesh.position.z += 286;
    }
  }

  for (let i = 0; i < threeCtx.carMeshes.length; i++) {
    const car = threeCtx.carMeshes[i];
    car.mesh.position.z += car.speed * dt;
    if (car.mesh.position.z > playerZ + 25) {
      car.mesh.position.z = playerZ - 230;
    } else if (car.mesh.position.z < playerZ - 235) {
      car.mesh.position.z = playerZ + 20;
    }
  }

  threeCtx.acrobatGroup.updateMatrixWorld(true);
  threeCtx.leftArm.handMesh.getWorldPosition(threeCtx.worldLeftHand);
  threeCtx.rightArm.handMesh.getWorldPosition(threeCtx.worldRightHand);

  const lPos = threeCtx.worldLeftHand;
  const rPos = threeCtx.worldRightHand;

  // Renderizado del rayo láser cian 3D del Gancho Salvavidas desde la mano hasta el cable superior
  if (eng.grappleRescueTimer > 0) {
    threeCtx.grappleLaserLine.visible = true;
    threeCtx.grappleBeamMesh.visible = true;
    threeCtx.grappleAnchor.set(0, 0, playerZ - 1.2);

    const gArr = threeCtx.grappleLineGeo.attributes.position.array;
    gArr[0] = rPos.x;
    gArr[1] = rPos.y;
    gArr[2] = rPos.z;
    gArr[3] = threeCtx.grappleAnchor.x;
    gArr[4] = threeCtx.grappleAnchor.y;
    gArr[5] = threeCtx.grappleAnchor.z;
    threeCtx.grappleLineGeo.attributes.position.needsUpdate = true;

    const dist = rPos.distanceTo(threeCtx.grappleAnchor);
    threeCtx.grappleBeamMesh.position.lerpVectors(rPos, threeCtx.grappleAnchor, 0.5);
    threeCtx.grappleBeamMesh.scale.set(1, Math.max(0.1, dist), 1);
    threeCtx.grappleBeamMesh.lookAt(threeCtx.grappleAnchor);
    threeCtx.grappleBeamMesh.rotateX(Math.PI / 2);
  } else {
    threeCtx.grappleLaserLine.visible = false;
    threeCtx.grappleBeamMesh.visible = false;
  }

  // Posicionar Aros Receptores 3D en las manos y detectar ventana de captura
  let leftReady = false;
  let rightReady = false;
  for (let i = 0; i < eng.jugglePool.length; i++) {
    const b = eng.jugglePool[i];
    if (b.active && b.phase >= eng.catchThreshold) {
      if (b.targetHand === 'L') leftReady = true;
      if (b.targetHand === 'R') rightReady = true;
    }
  }

  threeCtx.leftReceiverRing.position.copy(lPos);
  threeCtx.rightReceiverRing.position.copy(rPos);
  threeCtx.leftReceiverMat.color.setHex(leftReady ? 0xfde047 : 0x00f2fe);
  threeCtx.rightReceiverMat.color.setHex(rightReady ? 0xfde047 : 0x00f2fe);
  const lScale = leftReady ? 1.32 : 0.78;
  const rScale = rightReady ? 1.32 : 0.78;
  threeCtx.leftReceiverRing.scale.set(lScale, lScale, lScale);
  threeCtx.rightReceiverRing.scale.set(rScale, rScale, rScale);

  // Parábola 3D de las Esferas Doradas Incandescentes con Estela de Luz (intensificada en Modo Frenesí)
  for (let i = 0; i < 4; i++) {
    const b = eng.jugglePool[i];
    const orbObj = threeCtx.orbMeshes[i];
    if (!b.active || eng.fallSlowMo) {
      orbObj.group.visible = false;
      for (let tIdx = 0; tIdx < orbObj.trails.length; tIdx++) {
        orbObj.trails[tIdx].visible = false;
      }
      continue;
    }

    orbObj.group.visible = true;
    const fromHand = b.targetHand === 'R' ? lPos : rPos;
    const toHand = b.targetHand === 'R' ? rPos : lPos;

    const p = b.phase;
    const arcPeakMeters = 1.48 + (i % 2) * 0.22;
    const ox = fromHand.x + (toHand.x - fromHand.x) * p;
    const oy =
      fromHand.y + (toHand.y - fromHand.y) * p + 4 * arcPeakMeters * p * (1 - p);
    const oz = fromHand.z + (toHand.z - fromHand.z) * p - 0.12 * Math.sin(p * Math.PI);

    orbObj.group.position.set(ox, oy, oz);
    const inCatch = p >= eng.catchThreshold;
    const orbScale = inCatch ? 1.28 : isFever ? 1.15 : 1.0;
    orbObj.group.scale.set(orbScale, orbScale, orbScale);

    const trailSpacing = isFever ? 0.028 : 0.036;
    for (let tIdx = 0; tIdx < orbObj.trails.length; tIdx++) {
      const tMesh = orbObj.trails[tIdx];
      const tp = p - (tIdx + 1) * trailSpacing;
      if (tp <= 0.01) {
        tMesh.visible = false;
        continue;
      }
      tMesh.visible = true;
      const tx = fromHand.x + (toHand.x - fromHand.x) * tp;
      const ty =
        fromHand.y +
        (toHand.y - fromHand.y) * tp +
        4 * arcPeakMeters * tp * (1 - tp);
      const tz =
        fromHand.z + (toHand.z - fromHand.z) * tp - 0.12 * Math.sin(tp * Math.PI);
      tMesh.position.set(tx, ty, tz);
    }
  }

  threeCtx.cyanPoleLight.position.set(0, 1.35, playerZ);
  threeCtx.cyanPoleLight.intensity = isFever ? 6.8 : 3.8;
  threeCtx.goldOrbLight.position.set(0, 2.45, playerZ - 0.25);

  // Cámara con Zoom Dinámico de Adrenalina y seguimiento 3D durante la caída al vacío
  const comboFactor = Math.min(1, (eng.combo || 0) / 14);
  const dangerZone = Math.min(
    1,
    Math.max(0, (absAngle - CRITICAL_ANGLE_RAD * 0.28) / (CRITICAL_ANGLE_RAD * 0.62))
  );
  const tensionFactor = eng.fallSlowMo ? 1.0 : dangerZone;

  const openFov = 58 + comboFactor * 6;
  const targetFov = openFov * (1 - tensionFactor) + 48 * tensionFactor;

  const openDistZ = 6.2 + comboFactor * 0.55;
  const targetDistZ = openDistZ * (1 - tensionFactor) + 4.95 * tensionFactor;

  const openCamY = 3.38 + comboFactor * 0.16;
  const targetCamY = openCamY * (1 - tensionFactor) + 2.95 * tensionFactor;

  const camLerp = Math.min(1, dt * 5.5);
  eng.dynamicFov += (targetFov - eng.dynamicFov) * camLerp;
  eng.dynamicCamDist += (targetDistZ - eng.dynamicCamDist) * camLerp;
  eng.dynamicCamY += (targetCamY - eng.dynamicCamY) * camLerp;

  if (Math.abs(threeCtx.camera.fov - eng.dynamicFov) > 0.02) {
    threeCtx.camera.fov = eng.dynamicFov;
    threeCtx.camera.updateProjectionMatrix();
  }

  const shakeX = eng.shake > 0.05 ? Math.sin(eng.time * 42) * eng.shake * 0.038 : 0;
  const shakeY = eng.shake > 0.05 ? Math.cos(eng.time * 36) * eng.shake * 0.038 : 0;

  threeCtx.camera.position.set(
    shakeX + Math.sin(angle) * 0.32,
    eng.dynamicCamY + shakeY,
    playerZ + eng.dynamicCamDist
  );

  if (eng.fallSlowMo) {
    // 2.1: La cámara se inclina hacia abajo siguiendo la caída del acróbata al abismo
    threeCtx.camera.lookAt(threeCtx.acrobatGroup.position);
  } else {
    threeCtx.camera.lookAt(
      eng.smoothHipX * 0.35,
      1.65 - eng.smoothKneeFlex * 0.2,
      playerZ - 15
    );
  }
  threeCtx.camera.rotation.z = -eng.cameraRoll * (0.52 + tensionFactor * 0.65);

  threeCtx.renderer.render(threeCtx.scene, threeCtx.camera);
}

// ============================================================================
// PERFIL DEL JUGADOR Y POOLS PRE-ALOCADOS
// ============================================================================
function loadSavedProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function createInitialPools(initialSpeed = 0.72) {
  const jugglePool = [];
  for (let i = 0; i < 4; i++) {
    jugglePool.push({
      id: i,
      active: i === 0,
      phase: i * 0.25,
      speed: initialSpeed,
      targetHand: i % 2 === 0 ? 'R' : 'L',
      arcHeight: 132,
      spinAngle: 0,
    });
  }
  return { jugglePool };
}

export default function App() {
  const saved = loadSavedProfile();

  const [lang, setLang] = useState(saved?.lang || 'es');
  const [soundOn, setSoundOn] = useState(saved?.soundOn ?? true);
  const [currentLevel, setCurrentLevel] = useState(saved?.currentLevel || 1);
  const [maxUnlockedLevel, setMaxUnlockedLevel] = useState(saved?.maxUnlockedLevel || 1);
  const [coins, setCoins] = useState(saved?.coins ?? 450);
  const [gems, setGems] = useState(saved?.gems ?? 80);
  const [leaguePoints, setLeaguePoints] = useState(saved?.leaguePoints ?? 1250);

  const [gearLevels, setGearLevels] = useState(
    saved?.gearLevels || { pole: 1, boots: 1, gloves: 1 }
  );

  const [unlockedSkins, setUnlockedSkins] = useState(
    saved?.unlockedSkins || ['skin_1']
  );
  const [equippedSkin, setEquippedSkin] = useState(
    saved?.equippedSkin || 'skin_1'
  );
  const [unlockedProps, setUnlockedProps] = useState(saved?.unlockedProps || ['balls']);
  const [equippedProp, setEquippedProp] = useState(saved?.equippedProp || 'balls');

  const [activeTab, setActiveTab] = useState('home');
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [coverSrc, setCoverSrc] = useState('./icon.jpg');

  const [gameStatus, setGameStatus] = useState('LOBBY');
  const [activeModal, setActiveModal] = useState(null);
  const [shopNotice, setShopNotice] = useState('');
  const [seasonClock, setSeasonClock] = useState(() => getSeasonTimeRemaining());

  // Estados efímeros de feedback visual flotante (Bloque 3)
  const [handPopup, setHandPopup] = useState(null);
  const [nearMissBanner, setNearMissBanner] = useState(0);

  const [hudState, setHudState] = useState({
    angleDeg: 0,
    distance: 0,
    targetDistance: 100,
    walkSpeedMultiplier: 1.0,
    juggleCount: 1,
    multiplier: 1,
    combo: 0,
    isFeverMode: false,
    windCurrent: 0,
    windWarningActive: false,
    fallSlowMo: false,
    slowMoTimer: 1.25,
    leftPressed: false,
    rightPressed: false,
    leftTimingReady: false,
    rightTimingReady: false,
  });

  const mountRef = useRef(null);
  const threeRef = useRef(null);
  const needleRef = useRef(null);

  const t = I18N[lang] || I18N.es;
  const levelCfg = getLevelConfig(currentLevel);
  const currentCity = levelCfg.city;
  const currentSkinObj = SKINS.find((s) => s.id === equippedSkin) || SKINS[0];
  const currentPropObj = JUGGLE_PROPS.find((p) => p.id === equippedProp) || JUGGLE_PROPS[0];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 550);
    return () => clearTimeout(timer);
  }, []);

  const handleCoverImageError = useCallback(() => {
    setCoverSrc((prev) => {
      if (prev === './icon.jpg') return '/icon.jpg';
      if (prev === '/icon.jpg') return './icon.png';
      if (prev === './icon.png') return '/icon.png';
      return prev;
    });
  }, []);

  const engineRef = useRef(null);
  if (!engineRef.current) {
    const initialLvl = getLevelConfig(saved?.currentLevel || 1);
    const pools = createInitialPools(initialLvl.juggleBaseSpeed);
    const initSkin =
      SKINS.find((s) => s.id === (saved?.equippedSkin || 'skin_1')) || SKINS[0];
    const initProp =
      JUGGLE_PROPS.find((p) => p.id === (saved?.equippedProp || 'balls')) ||
      JUGGLE_PROPS[0];
    const initGloves = saved?.gearLevels?.gloves || 1;

    engineRef.current = {
      lastTimestamp: 0,
      time: 0,
      hudSyncTimer: 0,
      gameStatus: 'LOBBY',
      paused: false,
      cfg: initialLvl,
      level: initialLvl.level,
      cityIndex: initialLvl.cityIndex,
      targetDistance: initialLvl.totalDistance,
      distance: 0,
      walkSpeedMultiplier: initialLvl.walkSpeedMultiplier,
      walkSpeed: initialLvl.walkSpeed,
      difficultyFactor: initialLvl.difficultyFactor,
      catchWindow: initialLvl.catchWindow,
      gravityFactor: initialLvl.gravityFactor,
      windMax: initialLvl.windMax,
      windChangeFreq: initialLvl.windChangeFreq,
      windCurrent: 0.15,
      windTarget: 0.25,
      windTimer: 0,
      windWarningActive: false,
      nextWindSign: -1,
      angle: 0.03,
      angleRad: 0.03,
      angleDeg: (0.03 * 180) / Math.PI,
      cameraRoll: 0,
      angularVelocity: 0,
      stepPhase: 0,
      smoothKneeFlex: 0,
      smoothHipX: 0,
      smoothTorsoComp: 0,
      smoothNeckComp: 0,
      edgeSaveBlend: 0,
      dynamicFov: 58,
      dynamicCamDist: 6.2,
      dynamicCamY: 3.38,
      // Estados Bloque 2 y Bloque 3 (Caída 3D, Gancho, Salvada al Límite y Modo Frenesí)
      fallSlowMo: false,
      slowMoTimer: 1.25,
      fallPosX: 0,
      fallPosY: 0,
      fallVelocityY: 0,
      fallTumbleX: 0,
      grappleRescueTimer: 0,
      rescueStartX: 0,
      rescueStartY: 0,
      immunityTimer: 0,
      criticalTiltDuration: 0,
      nearMissArmed: false,
      isFeverMode: false,
      juggleCount: 1,
      combo: 0,
      maxCombo: 0,
      catchesRun: 0,
      coinsEarnedRun: 0,
      lpEarnedRun: 0,
      leftPressed: false,
      rightPressed: false,
      shake: 0,
      grappleFlash: 0,
      poleLevel: saved?.gearLevels?.pole || 1,
      bootsLevel: saved?.gearLevels?.boots || 1,
      glovesLevel: initGloves,
      catchThreshold: Math.max(
        0.62,
        1.0 - initialLvl.catchWindow - (initGloves - 1) * 0.008
      ),
      skinObj: initSkin,
      propObj: initProp,
      ...pools,
    };
  }

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          lang,
          soundOn,
          currentLevel,
          maxUnlockedLevel,
          coins,
          gems,
          leaguePoints,
          gearLevels,
          unlockedSkins,
          equippedSkin,
          unlockedProps,
          equippedProp,
        })
      );
    } catch {
      // Ignore storage quota errors
    }
  }, [
    lang,
    soundOn,
    currentLevel,
    maxUnlockedLevel,
    coins,
    gems,
    leaguePoints,
    gearLevels,
    unlockedSkins,
    equippedSkin,
    unlockedProps,
    equippedProp,
  ]);

  useEffect(() => {
    soundEngine.enabled = soundOn;
  }, [soundOn]);

  useEffect(() => {
    const eng = engineRef.current;
    eng.poleLevel = gearLevels.pole || 1;
    eng.bootsLevel = gearLevels.boots || 1;
    eng.glovesLevel = gearLevels.gloves || 1;
    const baseCatchWindow = eng.cfg?.catchWindow || 0.28;
    eng.catchThreshold = Math.max(
      0.62,
      1.0 - baseCatchWindow - (eng.glovesLevel - 1) * 0.008
    );
    eng.skinObj = currentSkinObj;
    eng.propObj = currentPropObj;
  }, [gearLevels, currentCity, currentSkinObj, currentPropObj]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeasonClock(getSeasonTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const resetEngineForLevel = useCallback(
    (lvlNumber, nextStatus = 'LOBBY') => {
      const cfg = getLevelConfig(lvlNumber);
      const eng = engineRef.current;
      eng.cfg = cfg;
      eng.level = cfg.level;
      eng.cityIndex = cfg.cityIndex;
      eng.targetDistance = cfg.totalDistance;
      eng.distance = 0;
      eng.walkSpeedMultiplier = cfg.walkSpeedMultiplier;
      eng.walkSpeed = cfg.walkSpeed;
      eng.difficultyFactor = cfg.difficultyFactor;
      eng.catchWindow = cfg.catchWindow;
      eng.catchThreshold = Math.max(
        0.62,
        1.0 - cfg.catchWindow - (eng.glovesLevel - 1) * 0.008
      );
      eng.gravityFactor = cfg.gravityFactor;
      eng.windMax = cfg.windMax;
      eng.windChangeFreq = cfg.windChangeFreq;
      eng.windCurrent = 0.15;
      eng.windTarget = 0.32;
      eng.windTimer = 0;
      eng.windWarningActive = false;
      eng.nextWindSign = -1;
      eng.angle = 0.03;
      eng.angleRad = 0.03;
      eng.angleDeg = (0.03 * 180) / Math.PI;
      eng.cameraRoll = 0;
      eng.angularVelocity = 0;
      eng.stepPhase = 0;
      eng.smoothKneeFlex = 0;
      eng.smoothHipX = 0;
      eng.smoothTorsoComp = 0;
      eng.smoothNeckComp = 0;
      eng.edgeSaveBlend = 0;
      eng.dynamicFov = 58;
      eng.dynamicCamDist = 6.2;
      eng.dynamicCamY = 3.38;
      eng.fallSlowMo = false;
      eng.slowMoTimer = 1.25;
      eng.fallPosX = 0;
      eng.fallPosY = 0;
      eng.fallVelocityY = 0;
      eng.fallTumbleX = 0;
      eng.grappleRescueTimer = 0;
      eng.rescueStartX = 0;
      eng.rescueStartY = 0;
      eng.immunityTimer = 0;
      eng.criticalTiltDuration = 0;
      eng.nearMissArmed = false;
      eng.isFeverMode = false;
      eng.juggleCount = 1;
      eng.combo = 0;
      eng.maxCombo = 0;
      eng.catchesRun = 0;
      eng.coinsEarnedRun = 0;
      eng.lpEarnedRun = 0;
      eng.leftPressed = false;
      eng.rightPressed = false;
      eng.shake = 0;
      eng.grappleFlash = 0;
      eng.gameStatus = nextStatus;
      eng.paused = false;

      for (let i = 0; i < eng.jugglePool.length; i++) {
        const b = eng.jugglePool[i];
        b.active = i === 0;
        b.phase = i * 0.26;
        b.speed = cfg.juggleBaseSpeed;
        b.targetHand = i % 2 === 0 ? 'R' : 'L';
      }

      setGameStatus(nextStatus);
      setActiveModal(null);
      setHudState({
        angleDeg: eng.angleDeg,
        distance: 0,
        targetDistance: cfg.totalDistance,
        walkSpeedMultiplier: cfg.walkSpeedMultiplier,
        juggleCount: 1,
        multiplier: currentPropObj.mult * currentSkinObj.bonusMult,
        combo: 0,
        isFeverMode: false,
        windCurrent: eng.windCurrent,
        windWarningActive: false,
        fallSlowMo: false,
        slowMoTimer: 1.25,
        leftPressed: false,
        rightPressed: false,
        leftTimingReady: false,
        rightTimingReady: false,
      });
    },
    [currentPropObj.mult, currentSkinObj.bonusMult]
  );

  const startRun = useCallback(() => {
    soundEngine.init();
    soundEngine.playCatchSound(2, false);
    resetEngineForLevel(currentLevel, 'PLAYING');
  }, [currentLevel, resetEngineForLevel]);

  const handleAddJuggleObject = useCallback(() => {
    soundEngine.init();
    const eng = engineRef.current;
    if (eng.gameStatus !== 'PLAYING' || eng.juggleCount >= 4) return;

    const nextIdx = eng.juggleCount;
    const item = eng.jugglePool[nextIdx];
    item.active = true;
    item.phase = 0.08;
    item.speed = eng.cfg.juggleBaseSpeed;
    item.targetHand = nextIdx % 2 === 0 ? 'R' : 'L';
    eng.juggleCount += 1;

    soundEngine.playCatchSound(eng.juggleCount + 2, true);
  }, []);

  const attemptHandCatch = useCallback(
    (handChar) => {
      const eng = engineRef.current;
      if (eng.gameStatus !== 'PLAYING' || eng.paused || eng.fallSlowMo) return false;

      let caughtAny = false;
      const threshold = eng.catchThreshold;

      for (let i = 0; i < eng.jugglePool.length; i++) {
        const obj = eng.jugglePool[i];
        if (!obj.active) continue;
        if (obj.targetHand === handChar && obj.phase >= threshold) {
          const isPerfect = obj.phase >= 0.88;
          obj.phase = 0;
          obj.speed = eng.cfg.juggleBaseSpeed;
          obj.targetHand = handChar === 'L' ? 'R' : 'L';

          eng.combo += 1;
          if (eng.combo > eng.maxCombo) eng.maxCombo = eng.combo;
          eng.catchesRun += 1;

          // Bloque 3.2: Activar Modo Frenesí al llegar a Combo x10
          eng.isFeverMode = eng.combo >= 10;

          if (eng.level >= 4) {
            const recoilSign = handChar === 'L' ? -1 : 1;
            const catchRecoil =
              recoilSign * 0.06 * (eng.difficultyFactor || eng.walkSpeedMultiplier);
            eng.angularVelocity += catchRecoil;
          } else {
            eng.angularVelocity *= 0.82;
            eng.angle *= 0.92;
          }
          eng.angleRad = eng.angle;
          eng.angleDeg = (eng.angle * 180) / Math.PI;

          // En Modo Frenesí la ganancia de monedas se multiplica x2
          const feverCoinMult = eng.isFeverMode ? 2 : 1;
          const totalMult =
            eng.juggleCount *
            (eng.propObj?.mult || 1) *
            (eng.skinObj?.bonusMult || 1) *
            feverCoinMult;
          const coinGain = Math.max(1, Math.round((isPerfect ? 6 : 3) * totalMult));
          const lpGain = Math.max(1, Math.round((isPerfect ? 4 : 2) * eng.juggleCount));

          eng.coinsEarnedRun += coinGain;
          eng.lpEarnedRun += lpGain;

          setCoins((c) => c + coinGain);
          setLeaguePoints((lp) => lp + lpGain);

          if (eng.catchesRun % 8 === 0) {
            setGems((g) => g + 1);
          }

          // Bloque 1.1: Notas pentatónicas + octava brillante y vibración de 12ms en captura perfecta
          soundEngine.playCatchSound(eng.combo, isPerfect);

          // Bloque 3.3: Feedback Flotante de Captura en ese lado (`¡PERFECTO! x4`, `¡BIEN! x2`)
          setHandPopup({
            id: Date.now() + Math.random(),
            side: handChar === 'L' ? 'left' : 'right',
            isPerfect,
            text: `${
              isPerfect
                ? (I18N[lang] || I18N.es).perfectCatchLabel
                : (I18N[lang] || I18N.es).goodCatchLabel
            } x${eng.combo}`,
          });

          caughtAny = true;
          break;
        }
      }
      return caughtAny;
    },
    [lang]
  );

  // Bloque 2.2: Rescate Físico 3D con el Gancho Salvavidas + 1.5s de inmunidad estabilizada
  const handleGrappleSave = useCallback(() => {
    soundEngine.init();
    const eng = engineRef.current;
    if (eng.gameStatus !== 'PLAYING' && eng.gameStatus !== 'GAMEOVER') return;

    if (gems < 20) {
      setActiveModal('SHOP');
      eng.paused = true;
      return;
    }

    setGems((g) => g - 20);
    eng.rescueStartX = eng.fallSlowMo ? eng.fallPosX : Math.sin(eng.angle) * 0.5;
    eng.rescueStartY = eng.fallSlowMo ? Math.min(-0.8, eng.fallPosY) : -0.6;
    eng.grappleRescueTimer = 0.45;
    eng.immunityTimer = 1.5;

    eng.angle = 0;
    eng.angleRad = 0;
    eng.angleDeg = 0;
    eng.angularVelocity = 0;
    eng.fallSlowMo = false;
    eng.slowMoTimer = 1.25;
    eng.fallPosX = 0;
    eng.fallPosY = 0;
    eng.fallVelocityY = 0;
    eng.fallTumbleX = 0;
    eng.grappleFlash = 1.0;
    eng.shake = 0;
    eng.gameStatus = 'PLAYING';
    setGameStatus('PLAYING');

    soundEngine.playGrapple();
  }, [gems]);

  const handleThumbDown = useCallback(
    (side, e) => {
      if (e && e.cancelable) e.preventDefault();
      soundEngine.init();
      const eng = engineRef.current;
      if (side === 'L') {
        eng.leftPressed = true;
        attemptHandCatch('L');
      } else {
        eng.rightPressed = true;
        attemptHandCatch('R');
      }
    },
    [attemptHandCatch]
  );

  const handleThumbUp = useCallback((side, e) => {
    if (e && e.cancelable) e.preventDefault();
    const eng = engineRef.current;
    if (side === 'L') {
      eng.leftPressed = false;
    } else {
      eng.rightPressed = false;
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.repeat) return;
      const key = e.key.toLowerCase();
      const eng = engineRef.current;

      if (key === 'arrowleft' || key === 'a') {
        eng.leftPressed = true;
        attemptHandCatch('L');
      } else if (key === 'arrowright' || key === 'd') {
        eng.rightPressed = true;
        attemptHandCatch('R');
      } else if (key === 'w' || key === 'arrowup') {
        handleAddJuggleObject();
      } else if (key === ' ') {
        e.preventDefault();
        if (eng.gameStatus === 'LOBBY') {
          startRun();
        } else if (eng.gameStatus === 'PLAYING') {
          handleGrappleSave();
        }
      } else if (key === 'escape' || key === 'p') {
        if (eng.gameStatus === 'PLAYING') {
          eng.paused = !eng.paused;
          setActiveModal(eng.paused ? 'PAUSE' : null);
        }
      }
    };

    const onKeyUp = (e) => {
      const key = e.key.toLowerCase();
      const eng = engineRef.current;
      if (key === 'arrowleft' || key === 'a') {
        eng.leftPressed = false;
      } else if (key === 'arrowright' || key === 'd') {
        eng.rightPressed = false;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [attemptHandCatch, handleAddJuggleObject, handleGrappleSave, startRun]);

  // ============================================================================
  // BUCLE PRINCIPAL 60/90/120Hz DE FÍSICA DELTATIME + RENDERIZADO 3D THREE.JS
  // ============================================================================
  useEffect(() => {
    if (!mountRef.current) return undefined;

    const threeCtx = buildThreeWorld(mountRef.current);
    threeRef.current = threeCtx;

    let rafId = null;

    const handleResize = () => {
      if (!mountRef.current || !threeRef.current) return;
      const w = mountRef.current.clientWidth || 420;
      const h = mountRef.current.clientHeight || 780;
      threeRef.current.camera.aspect = w / h;
      threeRef.current.camera.updateProjectionMatrix();
      threeRef.current.renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    const tick = (timestamp) => {
      const eng = engineRef.current;
      const rawDt = (timestamp - eng.lastTimestamp) / 1000;
      const dt = rawDt > 0 && rawDt < 0.2 ? Math.min(rawDt, 0.05) : 0.0166;
      eng.lastTimestamp = timestamp;

      if (!eng.paused) {
        eng.time += dt;
        eng.cameraRoll += (eng.angle * 0.24 - eng.cameraRoll) * Math.min(1, dt * 8);

        if (eng.grappleFlash > 0) {
          eng.grappleFlash = Math.max(0, eng.grappleFlash - dt * 2.4);
        }
        if (eng.grappleRescueTimer > 0) {
          eng.grappleRescueTimer = Math.max(0, eng.grappleRescueTimer - dt);
        }
        if (eng.immunityTimer > 0) {
          eng.immunityTimer = Math.max(0, eng.immunityTimer - dt);
        }
        if (eng.shake > 0) {
          eng.shake = Math.max(0, eng.shake - dt * 4.5);
        }

        if (eng.gameStatus === 'PLAYING') {
          if (eng.fallSlowMo) {
            // BLOQUE 2.1: 1.2 segundos de caída cinemática 3D en el eje -Y hacia el abismo
            eng.slowMoTimer -= dt;
            eng.fallVelocityY -= 16.8 * dt;
            eng.fallPosY += eng.fallVelocityY * dt;
            eng.fallPosX += (eng.angle >= 0 ? 1 : -1) * 2.4 * dt;
            eng.fallTumbleX += dt * 2.8;
            eng.angle += (eng.angle >= 0 ? 1 : -1) * 0.35 * dt;
            eng.angleRad = eng.angle;
            eng.angleDeg = (eng.angle * 180) / Math.PI;

            if (eng.slowMoTimer <= 0) {
              eng.fallSlowMo = false;
              eng.gameStatus = 'GAMEOVER';
              setGameStatus('GAMEOVER');
            }
          } else {
            // Ráfagas de Viento Cruzado (Desde Nivel 4) anunciadas 1s antes con sonido filtrado
            eng.windTimer += dt;
            if (eng.level >= 4 && eng.windTimer >= eng.windChangeFreq - 1.0) {
              if (!eng.windWarningActive) {
                eng.windWarningActive = true;
                eng.nextWindSign = eng.windTarget >= 0 ? -1 : 1;
              }
            }

            if (eng.windTimer >= eng.windChangeFreq) {
              eng.windTimer = 0;
              eng.windWarningActive = false;
              if (eng.level >= 4) {
                const gustSign = eng.nextWindSign || (eng.windTarget >= 0 ? -1 : 1);
                const gustMag =
                  (0.36 + Math.abs(Math.cos(eng.time * 2.3)) * eng.windMax * 0.58) *
                  Math.pow(eng.walkSpeedMultiplier, 0.45);
                eng.windTarget = gustSign * gustMag;
                eng.shake = 1.9;
                soundEngine.playWindGust();
              } else {
                const sign = Math.sin(eng.time * 3.7) >= 0 ? 1 : -1;
                eng.windTarget =
                  sign * (0.16 + Math.abs(Math.cos(eng.time * 2.3)) * eng.windMax * 0.36);
              }
            }
            eng.windCurrent += (eng.windTarget - eng.windCurrent) * Math.min(1, dt * 2.2);

            const cfg = eng.cfg;
            const poleFactor = 1 - (eng.poleLevel - 1) * 0.048;
            const shoesFactor = 1 - (eng.bootsLevel - 1) * 0.052;
            const thumbPower = 4.55 + (eng.poleLevel - 1) * 0.15;

            const speedBonus = 1 + (eng.bootsLevel - 1) * 0.025;
            const stepAdvance = eng.walkSpeed * speedBonus * dt;
            eng.distance = Math.min(eng.targetDistance, eng.distance + stepAdvance);
            eng.stepPhase += dt * 7.2 * eng.walkSpeedMultiplier * speedBonus;

            const stepSway =
              Math.sin(eng.stepPhase) *
              0.45 *
              Math.pow(eng.walkSpeedMultiplier, 1.35) *
              shoesFactor;

            const inputDir = (eng.rightPressed ? 1 : 0) - (eng.leftPressed ? 1 : 0);
            const thumbTorque = inputDir * thumbPower;

            const gravityTorque =
              Math.sin(eng.angle) * cfg.gravityInstability * 2.55 * poleFactor;
            const windTorque = eng.windCurrent * shoesFactor * 1.65;

            if (eng.immunityTimer > 0) {
              // Durante los 1.5s de inmunidad tras el rescate con gancho, estabilizar suavemente
              eng.angularVelocity = 0;
              eng.angle *= Math.pow(0.82, dt * 60);
            } else {
              eng.angularVelocity +=
                (gravityTorque + windTorque + stepSway + thumbTorque) * dt;
              // Bloque 3.2: En Modo Frenesí (Combo >= 10) la amortiguación de giro mejora un 15%
              const dampingBase = eng.isFeverMode ? 0.905 : 0.92;
              eng.angularVelocity *= Math.pow(dampingBase, dt * 60);
              eng.angle += eng.angularVelocity * dt;
            }
            eng.angleRad = eng.angle;
            eng.angleDeg = (eng.angle * 180) / Math.PI;

            const absAngle = Math.abs(eng.angle);

            // BLOQUE 1.2: Cuando la inclinación supera el 75% del ángulo límite, latido grave 65Hz + vibración 20ms
            if (absAngle > CRITICAL_ANGLE_RAD * 0.75) {
              soundEngine.playHeartbeatIfDanger(timestamp);
            }

            // BLOQUE 3.1: Mecánica de "Salvada al Límite" (Near-Miss Bonus)
            if (absAngle > CRITICAL_ANGLE_RAD * 0.78) {
              eng.criticalTiltDuration += dt;
              if (eng.criticalTiltDuration >= 0.35) {
                eng.nearMissArmed = true;
              }
            } else if (absAngle < CRITICAL_ANGLE_RAD * 0.3) {
              if (eng.nearMissArmed) {
                eng.nearMissArmed = false;
                eng.criticalTiltDuration = 0;
                eng.coinsEarnedRun += 5;
                eng.lpEarnedRun += 100;
                setCoins((c) => c + 5);
                setLeaguePoints((lp) => lp + 100);
                soundEngine.playNearMissSave();
                setNearMissBanner(Date.now());
              } else {
                eng.criticalTiltDuration = 0;
              }
            }

            for (let i = 0; i < eng.jugglePool.length; i++) {
              const ball = eng.jugglePool[i];
              if (!ball.active) continue;

              ball.phase += ball.speed * dt;
              ball.spinAngle = ball.phase * Math.PI * 4;

              if (ball.phase >= eng.catchThreshold) {
                if (
                  (ball.targetHand === 'L' && eng.leftPressed) ||
                  (ball.targetHand === 'R' && eng.rightPressed)
                ) {
                  attemptHandCatch(ball.targetHand);
                  continue;
                }
              }

              if (ball.phase >= 1.0) {
                ball.phase = 0;
                const missDir = ball.targetHand === 'L' ? -1 : 1;
                ball.targetHand = ball.targetHand === 'L' ? 'R' : 'L';
                eng.combo = 0;
                eng.isFeverMode = false;
                const missRecoil =
                  eng.level >= 4
                    ? missDir * (0.68 + 0.06 * (eng.difficultyFactor || 1)) * poleFactor
                    : missDir * 0.65 * poleFactor;
                if (eng.immunityTimer <= 0) {
                  eng.angularVelocity += missRecoil;
                }
                eng.shake = 2.8;
              }
            }

            // Iniciar secuencia cinemática 3D de caída al vacío (1.2s) cuando supera el ángulo límite
            if (absAngle >= CRITICAL_ANGLE_RAD && eng.immunityTimer <= 0) {
              eng.fallSlowMo = true;
              eng.slowMoTimer = 1.25;
              eng.fallPosX = Math.sin(eng.angle) * 0.35;
              eng.fallPosY = -0.08;
              eng.fallVelocityY = -2.4;
              eng.fallTumbleX = 0.15;
              eng.isFeverMode = false;
              eng.shake = 4.0;
              soundEngine.playFall();
            }

            if (eng.distance >= eng.targetDistance) {
              eng.gameStatus = 'VICTORY';
              const clearBonusCoins = 120 + eng.level * 25;
              const clearBonusGems = eng.level % 5 === 0 ? 18 : 6;
              const clearBonusLP = 45 + eng.level * 8;

              eng.coinsEarnedRun += clearBonusCoins;
              eng.lpEarnedRun += clearBonusLP;

              setCoins((c) => c + clearBonusCoins);
              setGems((g) => g + clearBonusGems);
              setLeaguePoints((lp) => lp + clearBonusLP);
              setMaxUnlockedLevel((m) => Math.max(m, Math.min(100, eng.level + 1)));

              soundEngine.playVictory();
              setGameStatus('VICTORY');
            }
          }
        } else if (eng.gameStatus === 'LOBBY') {
          eng.angle = Math.sin(eng.time * 1.5) * 0.04;
          eng.angleRad = eng.angle;
          eng.angleDeg = (eng.angle * 180) / Math.PI;
          eng.windCurrent = Math.sin(eng.time * 0.8) * 0.35;
          for (let i = 0; i < eng.jugglePool.length; i++) {
            const ball = eng.jugglePool[i];
            if (!ball.active) continue;
            ball.phase = (ball.phase + dt * 0.65) % 1;
          }
        }
      }

      if (needleRef.current) {
        const clampedDeg = Math.max(-47, Math.min(47, eng.angleDeg || 0));
        const offsetPx = (clampedDeg / 47) * 90;
        needleRef.current.style.transform = `translateX(${offsetPx.toFixed(1)}px)`;
      }

      updateAndRenderThreeScene(threeRef.current, eng, dt);

      eng.hudSyncTimer += dt;
      if (eng.hudSyncTimer >= 0.08) {
        eng.hudSyncTimer = 0;
        let leftReady = false;
        let rightReady = false;
        for (let i = 0; i < eng.jugglePool.length; i++) {
          const b = eng.jugglePool[i];
          if (b.active && b.phase >= eng.catchThreshold) {
            if (b.targetHand === 'L') leftReady = true;
            if (b.targetHand === 'R') rightReady = true;
          }
        }

        const feverMult = eng.isFeverMode ? 2 : 1;
        const totalMult =
          eng.juggleCount *
          (eng.propObj?.mult || 1) *
          (eng.skinObj?.bonusMult || 1) *
          feverMult;

        setHudState({
          angleDeg: eng.angleDeg || 0,
          distance: Math.floor(eng.distance),
          targetDistance: eng.targetDistance,
          walkSpeedMultiplier: eng.walkSpeedMultiplier || 1.0,
          juggleCount: eng.juggleCount,
          multiplier: totalMult,
          combo: eng.combo,
          isFeverMode: eng.isFeverMode,
          windCurrent: eng.windCurrent,
          windWarningActive: eng.windWarningActive,
          fallSlowMo: eng.fallSlowMo,
          slowMoTimer: eng.slowMoTimer,
          leftPressed: eng.leftPressed,
          rightPressed: eng.rightPressed,
          leftTimingReady: leftReady,
          rightTimingReady: rightReady,
        });
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafId) cancelAnimationFrame(rafId);
      if (threeRef.current && threeRef.current.renderer) {
        threeRef.current.renderer.dispose();
      }
    };
  }, [attemptHandCatch]);

  const handleUpgradeGear = (item) => {
    soundEngine.init();
    const curLvl = gearLevels[item.id] || 1;
    if (curLvl >= item.maxLevel) return;
    const cost = Math.round(item.baseCost * Math.pow(item.costScale, curLvl - 1));
    if (coins < cost) return;

    setCoins((c) => c - cost);
    setGearLevels((prev) => ({ ...prev, [item.id]: curLvl + 1 }));
    soundEngine.playCatchSound(curLvl + 3, true);
  };

  const handleSkinAction = (skin) => {
    soundEngine.init();
    if (unlockedSkins.includes(skin.id)) {
      setEquippedSkin(skin.id);
      soundEngine.playCatchSound(2, false);
      return;
    }
    if (skin.currency === 'coins' && coins >= skin.cost) {
      setCoins((c) => c - skin.cost);
      setUnlockedSkins((u) => [...u, skin.id]);
      setEquippedSkin(skin.id);
      soundEngine.playVictory();
    } else if (skin.currency === 'gems' && gems >= skin.cost) {
      setGems((g) => g - skin.cost);
      setUnlockedSkins((u) => [...u, skin.id]);
      setEquippedSkin(skin.id);
      soundEngine.playVictory();
    }
  };

  const handlePropAction = (prop) => {
    soundEngine.init();
    if (unlockedProps.includes(prop.id)) {
      setEquippedProp(prop.id);
      soundEngine.playCatchSound(3, false);
      return;
    }
    if (prop.currency === 'coins' && coins >= prop.cost) {
      setCoins((c) => c - prop.cost);
      setUnlockedProps((u) => [...u, prop.id]);
      setEquippedProp(prop.id);
      soundEngine.playVictory();
    } else if (prop.currency === 'gems' && gems >= prop.cost) {
      setGems((g) => g - prop.cost);
      setUnlockedProps((u) => [...u, prop.id]);
      setEquippedProp(prop.id);
      soundEngine.playVictory();
    }
  };

  const handleClaimStoreBundle = (bundle) => {
    soundEngine.init();
    setGems((g) => g + bundle.gems);
    setCoins((c) => c + bundle.coins);
    soundEngine.playVictory();
    setShopNotice(`+${bundle.gems} 💎  +${bundle.coins} 🪙`);
    setTimeout(() => setShopNotice(''), 2500);
  };

  const leagueStandings = [
    ...SEASON_RIVALS,
    {
      id: 'player',
      name: lang === 'es' ? 'TÚ (Equilibrista)' : 'YOU (Tightrope Pro)',
      country: currentCity.flag,
      lp: leaguePoints,
      badge: '⭐',
      isPlayer: true,
    },
  ].sort((a, b) => b.lp - a.lp);

  const playerRank = leagueStandings.findIndex((r) => r.isPlayer) + 1;

  const windAbs = Math.abs(hudState.windCurrent).toFixed(1);
  const windArrows =
    hudState.windCurrent < -0.8
      ? '◄◄'
      : hudState.windCurrent < -0.15
        ? '◄'
        : hudState.windCurrent > 0.8
          ? '►►'
          : hudState.windCurrent > 0.15
            ? '►'
            : '•';

  const isInDangerZone =
    hudState.fallSlowMo || Math.abs(hudState.angleDeg) > 30;

  return (
    <div className="game-shell">
      {/* Contenedor del Motor 3D Real WebGL (`Three.js`) con estética "Vector" */}
      <div ref={mountRef} className="webgl-mount" />

      {/* ==================== PANTALLA DE CARGA INICIAL CON PORTADA `./icon.jpg` ==================== */}
      {isInitialLoading && (
        <div
          className="modal-backdrop"
          style={{
            zIndex: 90,
            flexDirection: 'column',
            gap: '14px',
            background: 'radial-gradient(circle at 50% 35%, #09152b 0%, #02040a 85%)',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '82%',
              maxWidth: '320px',
              borderRadius: '18px',
              overflow: 'hidden',
              border: '2px solid rgba(0, 242, 254, 0.75)',
              boxShadow: '0 0 32px rgba(0, 242, 254, 0.45), 0 18px 40px rgba(0, 0, 0, 0.9)',
            }}
          >
            <img
              src={coverSrc}
              onError={handleCoverImageError}
              alt="NO MIRES ABAJO"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(5,8,17,0) 55%, rgba(5,8,17,0.95) 100%)',
              }}
            />
          </div>
          <div
            style={{
              fontFamily: 'Bebas Neue, Orbitron, sans-serif',
              fontSize: '2rem',
              letterSpacing: '0.08em',
              color: '#fde047',
              textShadow: '0 0 16px rgba(0, 242, 254, 0.6)',
            }}
          >
            {t.title}
          </div>
        </div>
      )}

      {/* ==================== BARRA DE MENÚ PRINCIPAL (OCULTA DURANTE LA PARTIDA ACTIVA) ==================== */}
      {gameStatus !== 'PLAYING' && (
        <header className="top-utility-bar">
          <div
            className="league-strip"
            onClick={() => {
              engineRef.current.paused = true;
              setActiveModal('LEAGUE');
            }}
          >
            <div className="league-strip-left">
              <span>🏆 {t.leagueBanner}:</span>
              <span className="league-points-badge">
                #{playerRank} ({leaguePoints} {t.leaguePointsShort})
              </span>
            </div>
            <span className="league-timer">
              ⏳ {seasonClock.days}d {seasonClock.hours}h
            </span>
          </div>

          <div className="nav-pills-row">
            <div className="nav-pills-group">
              <button
                type="button"
                className="mini-pill gold"
                onClick={() => {
                  engineRef.current.paused = true;
                  setActiveModal('CITIES');
                }}
              >
                {currentCity.flag} {t.level} {currentLevel}/100
              </button>
              <button
                type="button"
                className="mini-pill cyan"
                onClick={() => {
                  engineRef.current.paused = true;
                  setActiveModal('ARMORY');
                }}
              >
                ⚙️ {t.armoryBtn}
              </button>
              <button
                type="button"
                className="mini-pill"
                onClick={() => {
                  engineRef.current.paused = true;
                  setActiveModal('SKINS');
                }}
              >
                🧥 {t.skinsBtn}
              </button>
            </div>

            <div className="nav-pills-group">
              <button
                type="button"
                className="mini-pill"
                onClick={() => {
                  soundEngine.init();
                  setSoundOn((s) => !s);
                }}
              >
                {soundOn ? '🔊' : '🔇'}
              </button>
              <button
                type="button"
                className="mini-pill"
                onClick={() => setLang((l) => (l === 'es' ? 'en' : 'es'))}
              >
                {lang.toUpperCase()}
              </button>
            </div>
          </div>
        </header>
      )}

      {/* ==================== BARRA SUPERIOR TRANSLÚCIDA COMPACTA EN PARTIDA ==================== */}
      {gameStatus === 'PLAYING' && (
        <>
          <section
            className={`compact-play-hud ${hudState.isFeverMode ? 'fever-active' : ''}`}
          >
            <div className="compact-hud-top-row">
              <div className="compact-hud-city">
                <span>{currentCity.flag}</span>
                <span className="compact-hud-lvl-badge">Nv.{currentLevel}</span>
                <span className="compact-hud-speed-badge">
                  {hudState.walkSpeedMultiplier.toFixed(2)}x
                </span>
                <span>{currentCity.name[lang]}</span>
              </div>

              <div className="compact-hud-metrics">
                <div className="compact-metric-pill distance">
                  <span className="compact-dist-cur">{hudState.distance}m</span>
                  <span className="compact-dist-target">/ {hudState.targetDistance}m</span>
                </div>

                <div className="compact-metric-pill wind">
                  <span>💨 {windArrows} {windAbs}</span>
                </div>

                <div className="compact-metric-pill mult">
                  <span>x{hudState.multiplier}</span>
                </div>

                {/* Botón de Mute directo en el HUD superior */}
                <button
                  type="button"
                  className="compact-pause-btn"
                  title="Mute / Audio"
                  onClick={() => {
                    soundEngine.init();
                    setSoundOn((s) => !s);
                  }}
                >
                  {soundOn ? '🔊' : '🔇'}
                </button>

                <button
                  type="button"
                  className="compact-pause-btn"
                  title={t.pauseBtn}
                  onClick={() => {
                    engineRef.current.paused = true;
                    setActiveModal('PAUSE');
                  }}
                >
                  ⏸
                </button>
              </div>
            </div>

            <div className="balance-axis-row">
              <span className="balance-axis-label">
                {lang === 'es' ? 'EJE' : 'AXIS'}
              </span>
              <div className="balance-axis-track">
                <div className="balance-axis-center-notch" />
                <div ref={needleRef} className="balance-axis-needle" />
              </div>
              {hudState.isFeverMode ? (
                <span className="fever-mode-pill">{t.feverModeBadge}</span>
              ) : (
                <span className="balance-axis-label" style={{ color: '#fde047' }}>
                  🔥{hudState.combo}
                </span>
              )}
            </div>
          </section>

          {/* Alerta 1 segundo antes de ráfaga de viento cruzado (Desde Nivel 4) */}
          {hudState.windWarningActive && (
            <div className="wind-gust-alert-pill">
              <span>{t.windGustAlert}</span>
            </div>
          )}

          {/* Bloque 3.1: Texto Flotante Dinámico de "Salvada al Límite" (+100 PTS, +5 Monedas) */}
          {nearMissBanner > 0 && (
            <div key={nearMissBanner} className="near-miss-floater">
              {t.nearMissPopup}
            </div>
          )}

          {/* Bloque 3.3: Feedback Flotante Efímero de Captura en Mano Izquierda / Derecha */}
          {handPopup && (
            <div
              key={handPopup.id}
              className={`hand-catch-floater ${handPopup.side} ${
                handPopup.isPerfect ? 'perfect' : 'good'
              }`}
            >
              {handPopup.text}
            </div>
          )}
        </>
      )}

      {/* ==================== LOBBY OVERLAY (`activeTab === 'home'`) ==================== */}
      {gameStatus === 'LOBBY' && activeTab === 'home' && (
        <div className="lobby-overlay">
          <div className="lobby-top-section">
            <div
              className="rounded-2xl"
              style={{
                position: 'relative',
                width: '100%',
                height: '132px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1.5px solid rgba(0, 242, 254, 0.72)',
                boxShadow:
                  '0 0 24px rgba(0, 242, 254, 0.38), 0 10px 26px rgba(0, 0, 0, 0.85)',
              }}
            >
              <img
                src={coverSrc}
                onError={handleCoverImageError}
                alt="NO MIRES ABAJO"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 28%',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(5, 8, 17, 0.1) 0%, rgba(5, 8, 17, 0.45) 52%, rgba(9, 15, 32, 0.96) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  padding: '8px 12px',
                }}
              >
                <h1
                  className="lobby-main-title"
                  style={{ fontSize: '2.1rem', marginBottom: '2px' }}
                >
                  {t.title}
                </h1>
                <div
                  className="lobby-level-subtitle"
                  onClick={() => setActiveModal('CITIES')}
                  style={{ cursor: 'pointer', marginTop: 0 }}
                >
                  <span>
                    📍 {t.level} {currentLevel}/100 — {currentCity.flag}{' '}
                    {currentCity.name[lang]} ({levelCfg.totalDistance}m •{' '}
                    {levelCfg.walkSpeedMultiplier.toFixed(2)}x)
                  </span>
                </div>
              </div>
            </div>

            <div
              className="lobby-league-banner"
              onClick={() => setActiveModal('LEAGUE')}
            >
              <div className="lobby-league-row">
                <span
                  style={{
                    fontWeight: 900,
                    fontSize: '0.84rem',
                    color: '#fde047',
                  }}
                >
                  🏆 {t.leagueBanner} — #{playerRank} ({leaguePoints} LP)
                </span>
                <span
                  style={{
                    fontSize: '0.74rem',
                    color: '#67e8f9',
                    fontWeight: 800,
                  }}
                >
                  🎁 Cofres Épicos →
                </span>
              </div>
              <div
                style={{
                  fontSize: '0.74rem',
                  color: '#cbd5e1',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>{currentCity.weatherLabel[lang]}</span>
                <span>
                  🪙 {coins} | 💎 {gems}
                </span>
              </div>
            </div>
          </div>

          <div className="lobby-bottom-section">
            <div className="lobby-prep-grid">
              <button
                type="button"
                className="lobby-prep-btn gold-border"
                onClick={() => {
                  setActiveTab('home');
                  setActiveModal('CITIES');
                }}
              >
                <span style={{ fontSize: '1.15rem' }}>🌍</span>
                <span>{t.citiesBtn}</span>
              </button>
              <button
                type="button"
                className="lobby-prep-btn cyan-border"
                onClick={() => {
                  setActiveTab('home');
                  setActiveModal('ARMORY');
                }}
              >
                <span style={{ fontSize: '1.15rem' }}>⚙️</span>
                <span>{t.armoryBtn}</span>
              </button>
              <button
                type="button"
                className="lobby-prep-btn"
                onClick={() => {
                  setActiveTab('home');
                  setActiveModal('SKINS');
                }}
              >
                <span style={{ fontSize: '1.15rem' }}>🧥</span>
                <span>{t.skinsBtn}</span>
              </button>
              <button
                type="button"
                className="lobby-prep-btn gold-border"
                onClick={() => {
                  setActiveTab('home');
                  setActiveModal('SHOP');
                }}
              >
                <span style={{ fontSize: '1.15rem' }}>💎</span>
                <span>{t.shopBtn}</span>
              </button>
            </div>

            <button
              type="button"
              className="lobby-play-btn"
              onClick={startRun}
            >
              {t.playNowBtn}
            </button>
          </div>
        </div>
      )}

      {/* ==================== CONTROLES TÁCTILES INVISIBLES / MINIMALISTAS ESTILO "VECTOR" ==================== */}
      {gameStatus === 'PLAYING' && (
        <>
          <div className="multitouch-split-overlay">
            <div
              className="multitouch-half-panel"
              onPointerDown={(e) => handleThumbDown('L', e)}
              onPointerUp={(e) => handleThumbUp('L', e)}
              onPointerCancel={(e) => handleThumbUp('L', e)}
              onPointerLeave={(e) => handleThumbUp('L', e)}
            />
            <div
              className="multitouch-half-panel"
              onPointerDown={(e) => handleThumbDown('R', e)}
              onPointerUp={(e) => handleThumbUp('R', e)}
              onPointerCancel={(e) => handleThumbUp('R', e)}
              onPointerLeave={(e) => handleThumbUp('R', e)}
            />
          </div>

          <div className="vector-minimal-hud">
            {/* Indicador translúcido ultrafino esquina inferior izquierda */}
            <div
              className={`vector-corner-indicator left ${
                hudState.leftPressed ? 'pressed' : ''
              } ${hudState.leftTimingReady ? 'timing-ready' : ''}`}
            >
              <span className="vector-corner-label">◄ {t.left}</span>
              <div className="vector-corner-line" />
            </div>

            {/* Micro-píldoras centrales discretas (+1 esfera y salvada de emergencia con Gancho 3D) */}
            <div className="vector-center-micro-bar">
              {hudState.juggleCount < 4 && (
                <button
                  type="button"
                  className="vector-micro-pill gold"
                  onClick={handleAddJuggleObject}
                >
                  <span>+1 🟡</span>
                  <span>({hudState.juggleCount}/4)</span>
                </button>
              )}

              <button
                type="button"
                className={`vector-micro-pill ${isInDangerZone ? 'danger' : ''}`}
                onClick={handleGrappleSave}
              >
                <span>🪝</span>
                <span>
                  {hudState.fallSlowMo
                    ? `${hudState.slowMoTimer.toFixed(1)}s`
                    : '20💎'}
                </span>
              </button>
            </div>

            {/* Indicador translúcido ultrafino esquina inferior derecha */}
            <div
              className={`vector-corner-indicator right ${
                hudState.rightPressed ? 'pressed' : ''
              } ${hudState.rightTimingReady ? 'timing-ready' : ''}`}
            >
              <span className="vector-corner-label">{t.right} ►</span>
              <div className="vector-corner-line" />
            </div>
          </div>
        </>
      )}

      {/* ==================== MODAL: SEASONAL LEAGUE ==================== */}
      {activeModal === 'LEAGUE' && (
        <div className="modal-backdrop">
          <div className="modal-card">
            <div className="modal-header">
              <h2 className="modal-title">🏆 {t.leagueModalTitle}</h2>
              <button
                type="button"
                className="close-btn"
                onClick={() => {
                  engineRef.current.paused = false;
                  setActiveModal(null);
                }}
              >
                ✕
              </button>
            </div>

            <p style={{ fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '12px' }}>
              {t.leagueModalSub}
            </p>

            <div
              className="item-card highlight"
              style={{ marginBottom: '12px', textAlign: 'center' }}
            >
              <div style={{ fontSize: '0.78rem', color: '#fde047', fontWeight: 800 }}>
                ⏳ {t.seasonEndsIn}: {seasonClock.days}d {seasonClock.hours}h{' '}
                {seasonClock.mins}m {seasonClock.secs}s
              </div>
              <div
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 900,
                  color: '#ffffff',
                  marginTop: '2px',
                }}
              >
                #{playerRank} — {leaguePoints} {t.leaguePointsShort}
              </div>
            </div>

            <div className="grid-list" style={{ marginBottom: '14px' }}>
              {SEASON_REWARD_TIERS.map((tier) => (
                <div
                  key={tier.rankLabel}
                  className="item-card"
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 900, color: '#fde047' }}>
                      {tier.icon} {tier.rankLabel} — {tier.title[lang]}
                    </div>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#67e8f9' }}>
                    +{tier.gemsReward} 💎 | +{tier.coinsReward} 🪙
                  </div>
                </div>
              ))}
            </div>

            <div className="grid-list">
              {leagueStandings.map((entry, idx) => (
                <div
                  key={entry.id}
                  className={`league-rank-row ${entry.isPlayer ? 'is-player' : ''}`}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontWeight: 900, color: '#fde047', width: '24px' }}>
                      #{idx + 1}
                    </span>
                    <span>{entry.country}</span>
                    <span style={{ fontWeight: 800 }}>{entry.name}</span>
                  </div>
                  <div style={{ fontWeight: 900, color: '#38bdf8' }}>
                    {entry.lp} LP {entry.badge}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================== MODAL: RPG ARMORY ==================== */}
      {activeModal === 'ARMORY' && (
        <div className="modal-backdrop">
          <div className="modal-card">
            <div className="modal-header">
              <h2 className="modal-title">⚙️ {t.armoryTitle}</h2>
              <button
                type="button"
                className="close-btn"
                onClick={() => {
                  engineRef.current.paused = false;
                  setActiveModal(null);
                }}
              >
                ✕
              </button>
            </div>

            <p style={{ fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '10px' }}>
              {t.armorySub} (🪙 {coins})
            </p>

            <div className="grid-list">
              {ARMORY_ITEMS.map((item) => {
                const lvl = gearLevels[item.id] || 1;
                const isMax = lvl >= item.maxLevel;
                const nextCost = Math.round(
                  item.baseCost * Math.pow(item.costScale, lvl - 1)
                );
                return (
                  <div key={item.id} className="item-card highlight">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div style={{ fontWeight: 900, fontSize: '1.02rem' }}>
                        {item.icon} {item.name[lang]} (Nv. {lvl}/{item.maxLevel})
                      </div>
                      <span
                        style={{
                          fontSize: '0.76rem',
                          color: '#4ade80',
                          fontWeight: 800,
                        }}
                      >
                        {item.statLabel[lang]}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
                      {item.desc[lang]}
                    </p>

                    <div className="armory-progress-bar">
                      {Array.from({ length: 10 }).map((_, pipIdx) => (
                        <div
                          key={pipIdx}
                          className={`armory-pip ${pipIdx < lvl ? 'filled' : ''}`}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      className="pause-action-btn gold"
                      style={{ marginTop: '6px', padding: '8px 12px' }}
                      disabled={isMax || coins < nextCost}
                      onClick={() => handleUpgradeGear(item)}
                    >
                      {isMax
                        ? `✅ ${t.maxLevelLabel}`
                        : `⬆️ ${t.upgradeBtn} — ${nextCost} 🪙`}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ==================== MODAL: 20 CITIES / 100 LEVELS CAMPAIGN ==================== */}
      {activeModal === 'CITIES' && (
        <div className="modal-backdrop">
          <div className="modal-card">
            <div className="modal-header">
              <h2 className="modal-title">🌍 {t.citiesBtn} (100 Niveles)</h2>
              <button
                type="button"
                className="close-btn"
                onClick={() => {
                  engineRef.current.paused = false;
                  setActiveModal(null);
                }}
              >
                ✕
              </button>
            </div>

            <div className="grid-list">
              {CITIES.map((city, cIdx) => {
                const startLvl = cIdx * 5 + 1;
                return (
                  <div key={city.id} className="item-card">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <span style={{ fontWeight: 900, color: '#fde047' }}>
                        {city.flag} {cIdx + 1}. {city.name[lang]}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                        {city.weatherLabel[lang]}
                      </span>
                    </div>

                    <div className="city-levels-row">
                      {[0, 1, 2, 3, 4].map((offset) => {
                        const lvlNum = startLvl + offset;
                        const unlocked = lvlNum <= maxUnlockedLevel;
                        const isCurrent = lvlNum === currentLevel;
                        return (
                          <button
                            key={lvlNum}
                            type="button"
                            className={`lvl-chip ${isCurrent ? 'current' : ''} ${
                              unlocked && !isCurrent ? 'completed' : ''
                            } ${!unlocked ? 'locked' : ''}`}
                            disabled={!unlocked}
                            onClick={() => {
                              setCurrentLevel(lvlNum);
                              resetEngineForLevel(lvlNum, 'LOBBY');
                            }}
                          >
                            Nv.{lvlNum}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ==================== MODAL: SKINS & JUGGLING PROPS ==================== */}
      {activeModal === 'SKINS' && (
        <div className="modal-backdrop">
          <div className="modal-card">
            <div className="modal-header">
              <h2 className="modal-title">🧥 {t.skinsBtn}</h2>
              <button
                type="button"
                className="close-btn"
                onClick={() => {
                  engineRef.current.paused = false;
                  setActiveModal(null);
                }}
              >
                ✕
              </button>
            </div>

            <h3 style={{ fontSize: '0.95rem', color: '#67e8f9', marginBottom: '8px' }}>
              🧥 Aspectos Urbanos (🪙 {coins} | 💎 {gems})
            </h3>
            <div className="grid-list" style={{ marginBottom: '16px' }}>
              {SKINS.map((sk) => {
                const isOwned = unlockedSkins.includes(sk.id);
                const isEquipped = equippedSkin === sk.id;
                return (
                  <div
                    key={sk.id}
                    className={`item-card ${isEquipped ? 'highlight' : ''}`}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <span style={{ fontWeight: 900 }}>
                        {sk.name[lang]} (x{sk.bonusMult})
                      </span>
                      <button
                        type="button"
                        className="mini-pill gold"
                        onClick={() => handleSkinAction(sk)}
                      >
                        {isEquipped
                          ? '✅ EQUIPADO'
                          : isOwned
                            ? 'EQUIPAR'
                            : `${sk.cost} ${sk.currency === 'gems' ? '💎' : '🪙'}`}
                      </button>
                    </div>
                    <span style={{ fontSize: '0.76rem', color: '#94a3b8' }}>
                      {sk.desc[lang]}
                    </span>
                  </div>
                );
              })}
            </div>

            <h3 style={{ fontSize: '0.95rem', color: '#fde047', marginBottom: '8px' }}>
              🎪 Objetos de Malabar 3D Especulares
            </h3>
            <div className="grid-list">
              {JUGGLE_PROPS.map((pr) => {
                const isOwned = unlockedProps.includes(pr.id);
                const isEquipped = equippedProp === pr.id;
                return (
                  <div
                    key={pr.id}
                    className={`item-card ${isEquipped ? 'highlight' : ''}`}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <span style={{ fontWeight: 900 }}>
                        {pr.icon} {pr.name[lang]} (x{pr.mult})
                      </span>
                      <button
                        type="button"
                        className="mini-pill gold"
                        onClick={() => handlePropAction(pr)}
                      >
                        {isEquipped
                          ? '✅ EQUIPADO'
                          : isOwned
                            ? 'EQUIPAR'
                            : `${pr.cost} ${pr.currency === 'gems' ? '💎' : '🪙'}`}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ==================== MODAL: PLAY STORE CHEST SHOP ==================== */}
      {activeModal === 'SHOP' && (
        <div className="modal-backdrop">
          <div className="modal-card">
            <div className="modal-header">
              <h2 className="modal-title">💎 {t.shopTitle}</h2>
              <button
                type="button"
                className="close-btn"
                onClick={() => {
                  engineRef.current.paused = false;
                  setActiveModal(null);
                }}
              >
                ✕
              </button>
            </div>

            <p style={{ fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '12px' }}>
              {t.shopSub}
            </p>

            {shopNotice && (
              <div
                className="item-card highlight"
                style={{
                  marginBottom: '10px',
                  textAlign: 'center',
                  color: '#4ade80',
                  fontWeight: 900,
                }}
              >
                🎁 {shopNotice}
              </div>
            )}

            <div className="grid-list">
              {STORE_BUNDLES.map((b) => (
                <div
                  key={b.id}
                  className={`item-card ${b.popular ? 'highlight' : ''}`}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 900, fontSize: '1rem' }}>
                        {b.icon} {b.name[lang]}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#67e8f9' }}>
                        +{b.gems} 💎 Gemas | +{b.coins} 🪙 Monedas
                      </div>
                    </div>
                    <button
                      type="button"
                      className="mini-pill gold"
                      onClick={() => handleClaimStoreBundle(b)}
                    >
                      {b.tag}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================== MODAL: PAUSE MENU ==================== */}
      {activeModal === 'PAUSE' && (
        <div className="modal-backdrop">
          <div className="modal-card">
            <div className="modal-header">
              <h2 className="modal-title">⏸ {t.pauseTitle}</h2>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '12px' }}>
              {t.pauseSub}
            </p>

            <div className="lobby-prep-grid" style={{ marginBottom: '12px' }}>
              <button
                type="button"
                className="lobby-prep-btn cyan-border"
                onClick={() => setActiveModal('ARMORY')}
              >
                <span>⚙️</span>
                <span>{t.armoryBtn}</span>
              </button>
              <button
                type="button"
                className="lobby-prep-btn"
                onClick={() => setActiveModal('SKINS')}
              >
                <span>🧥</span>
                <span>{t.skinsBtn}</span>
              </button>
              <button
                type="button"
                className="lobby-prep-btn gold-border"
                onClick={() => setActiveModal('LEAGUE')}
              >
                <span>🏆</span>
                <span>Liga</span>
              </button>
              <button
                type="button"
                className="lobby-prep-btn gold-border"
                onClick={() => setActiveModal('CITIES')}
              >
                <span>🌍</span>
                <span>{t.citiesBtn}</span>
              </button>
            </div>

            <div className="pause-menu-stack">
              <button
                type="button"
                className="pause-action-btn resume"
                onClick={() => {
                  engineRef.current.paused = false;
                  setActiveModal(null);
                }}
              >
                ▶ {t.resumeBtn}
              </button>
              <button
                type="button"
                className="pause-action-btn gold"
                onClick={() => resetEngineForLevel(currentLevel, 'PLAYING')}
              >
                🔄 {t.restartBtn}
              </button>
              <button
                type="button"
                className="pause-action-btn"
                onClick={() => resetEngineForLevel(currentLevel, 'LOBBY')}
              >
                🏠 {t.backToLobbyBtn}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== MODAL: LEVEL VICTORY ==================== */}
      {gameStatus === 'VICTORY' && (
        <div className="modal-backdrop">
          <div className="modal-card">
            <div className="modal-header">
              <h2 className="modal-title">🏆 {t.levelCleared}</h2>
            </div>

            <div
              className="item-card highlight"
              style={{ textAlign: 'center', marginBottom: '14px' }}
            >
              <div style={{ fontSize: '1.1rem', fontWeight: 900 }}>
                {currentCity.flag} {currentCity.name[lang]} — {t.level} {currentLevel}
              </div>
              <div
                style={{
                  fontSize: '0.95rem',
                  color: '#4ade80',
                  fontWeight: 800,
                  marginTop: '6px',
                }}
              >
                +{engineRef.current.coinsEarnedRun} 🪙 | +
                {engineRef.current.lpEarnedRun} 🏆 LP
              </div>
            </div>

            <div className="pause-menu-stack">
              <button
                type="button"
                className="cta-giant-btn"
                onClick={() => {
                  const nextLvl = Math.min(100, currentLevel + 1);
                  setCurrentLevel(nextLvl);
                  resetEngineForLevel(nextLvl, 'PLAYING');
                }}
              >
                ▶ {t.nextLevel} ({Math.min(100, currentLevel + 1)}/100)
              </button>
              <button
                type="button"
                className="pause-action-btn"
                onClick={() => {
                  const nextLvl = Math.min(100, currentLevel + 1);
                  setCurrentLevel(nextLvl);
                  resetEngineForLevel(nextLvl, 'LOBBY');
                }}
              >
                🏠 {t.backToLobbyBtn}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== MODAL: GAME OVER / LOSS AVERSION ==================== */}
      {gameStatus === 'GAMEOVER' && (
        <div className="modal-backdrop">
          <div className="modal-card loss-aversion">
            <div className="modal-header">
              <h2 className="modal-title" style={{ color: '#fca5a5' }}>
                ⚠️ {t.fellTitle}
              </h2>
            </div>

            <p style={{ fontSize: '0.92rem', color: '#fef2f2', marginBottom: '14px' }}>
              {t.fellSub}{' '}
              <strong>
                ({hudState.distance}m / {hudState.targetDistance}m)
              </strong>
            </p>

            <div className="pause-menu-stack">
              <button
                type="button"
                className="cta-giant-btn"
                onClick={handleGrappleSave}
              >
                🪝 {t.continueHook}
              </button>

              <button
                type="button"
                className="pause-action-btn"
                onClick={() => resetEngineForLevel(currentLevel, 'PLAYING')}
              >
                🔄 {t.retryFree}
              </button>

              <button
                type="button"
                className="pause-action-btn"
                onClick={() => resetEngineForLevel(currentLevel, 'LOBBY')}
              >
                🏠 {t.backToLobbyBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
