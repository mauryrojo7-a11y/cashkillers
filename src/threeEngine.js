import * as THREE from 'three';
import { CITIES, SKINS_CATALOG, resolveSkinKey, resolveSkinVisual } from './gameData';
import { populateCityLandmark3D } from './landmarks3D';

export const CRITICAL_ANGLE_RAD = 0.82; // ~47 degrees critical fall angle

let activeThreeCtxRef = null;

function createBacklitHorizonTexture() {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 512;
  const ctx = c.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 0, 512);
  grad.addColorStop(0.0, '#020612');
  grad.addColorStop(0.32, '#071630');
  grad.addColorStop(0.62, '#0f2c56');
  grad.addColorStop(0.84, '#154e7a');
  grad.addColorStop(1.0, '#040b18');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 512);

  const radGrad = ctx.createRadialGradient(128, 310, 12, 128, 310, 165);
  radGrad.addColorStop(0.0, 'rgba(0, 242, 254, 0.42)');
  radGrad.addColorStop(0.55, 'rgba(14, 165, 233, 0.14)');
  radGrad.addColorStop(1.0, 'rgba(2, 6, 18, 0.0)');
  ctx.fillStyle = radGrad;
  ctx.fillRect(0, 0, 256, 512);

  return new THREE.CanvasTexture(c);
}

function createBraidedCableTexture() {
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 128;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#64748b';
  ctx.fillRect(0, 0, 128, 128);
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 6;
  for (let i = -128; i < 256; i += 20) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + 80, 128);
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2, 320);
  return tex;
}

function createHelipadTexture() {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#09111f';
  ctx.fillRect(0, 0, 256, 256);

  ctx.strokeStyle = '#00f2fe';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(128, 128, 102, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = '#fde047';
  ctx.font = 'bold 116px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('H', 128, 134);
  return new THREE.CanvasTexture(c);
}

function createSkyscraperWindowTexture(isDistant = false) {
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 256;
  const ctx = c.getContext('2d');
  ctx.fillStyle = isDistant ? '#061121' : '#040914';
  ctx.fillRect(0, 0, 128, 256);

  const cols = 8;
  const rows = 24;
  for (let r = 1; r < rows; r++) {
    for (let col = 1; col < cols; col++) {
      const seed = (r * 17 + col * 31) % 100;
      if (seed < (isDistant ? 28 : 42)) {
        if (seed < 7) {
          ctx.fillStyle = '#00f2fe';
        } else if (seed < 18) {
          ctx.fillStyle = '#fef08a';
        } else {
          ctx.fillStyle = isDistant ? '#1e3a5f' : '#38bdf8';
        }
        ctx.fillRect(col * 14, r * 10, 7, 5);
      }
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1, 2);
  return tex;
}

export function buildThreeWorld(mountEl) {
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
  renderer.toneMappingExposure = 1.25;

  mountEl.innerHTML = '';
  mountEl.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0x38bdf8, 0.9);
  scene.add(ambientLight);

  const rimDirLight = new THREE.DirectionalLight(0x00f2fe, 1.75);
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

  const arrivalToriiGroup = new THREE.Group();
  arrivalGroup.add(arrivalToriiGroup);

  arrivalGroup.position.set(0, 0, -100);
  scene.add(arrivalGroup);

  // Monumento 3D Icónico en el horizonte (`Z = -totalDistance - 35`)
  const landmarkGroup = new THREE.Group();
  landmarkGroup.position.set(0, 0, -135);
  scene.add(landmarkGroup);

  // Rascacielos laterales
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
  const farMistyMat = new THREE.MeshBasicMaterial({ color: 0x113654 });
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

  // Tránsito nocturno en el abismo
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

  // Pool de partículas climáticas 3D
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
  // ACRÓBATA 3D CON MATERIALES DIFERENCIADOS Y ACCESORIOS POR ASPECTO (`SKINS_CATALOG`)
  // ============================================================================
  const acrobatGroup = new THREE.Group();
  acrobatGroup.position.set(0, 0, 0);
  scene.add(acrobatGroup);

  // Luces dedicadas acopladas al acróbata para que los colores 3D, metales y emisiones brillen nítidamente
  const acrobatKeyLight = new THREE.PointLight(0xffffff, 3.6, 12);
  acrobatKeyLight.position.set(0, 1.45, 2.4);
  acrobatGroup.add(acrobatKeyLight);

  const acrobatBackLight = new THREE.PointLight(0x38bdf8, 3.4, 12);
  acrobatBackLight.position.set(0, 1.55, -1.8);
  acrobatGroup.add(acrobatBackLight);

  // Referencias directas a los materiales de cada parte del cuerpo (BLOQUE 2)
  const torsoMat = new THREE.MeshStandardMaterial({
    color: 0x1e293b,
    emissive: 0x0b1829,
    emissiveIntensity: 0.35,
    metalness: 0.35,
    roughness: 0.55,
  });
  const limbsMat = new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    emissive: 0x070d19,
    emissiveIntensity: 0.25,
    metalness: 0.35,
    roughness: 0.55,
  });
  const neonStripMat = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    emissive: 0x38bdf8,
    emissiveIntensity: 1.35,
    metalness: 0.2,
    roughness: 0.2,
  });
  const shoesMat = new THREE.MeshStandardMaterial({
    color: 0x334155,
    emissive: 0x38bdf8,
    emissiveIntensity: 0.45,
    metalness: 0.5,
    roughness: 0.35,
  });
  const glovesMat = new THREE.MeshStandardMaterial({
    color: 0x334155,
    emissive: 0x38bdf8,
    emissiveIntensity: 0.45,
    metalness: 0.45,
    roughness: 0.35,
  });
  const headbandMat = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    emissive: 0x38bdf8,
    emissiveIntensity: 1.5,
    metalness: 0.3,
    roughness: 0.25,
  });

  // Alias compatibles para mallas del cuerpo
  const jacketMat = torsoMat;
  const pantsMat = limbsMat;
  const bootMat = shoesMat;
  const headMat = torsoMat;
  const gloveMat = glovesMat;
  const dorsalStripMat = neonStripMat;

  const soleMat = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    emissive: 0x38bdf8,
    emissiveIntensity: 1.4,
    metalness: 0.3,
    roughness: 0.25,
  });
  const wristBandMat = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    emissive: 0x38bdf8,
    emissiveIntensity: 1.6,
    metalness: 0.3,
    roughness: 0.25,
  });
  const ribbonMat = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    emissive: 0x38bdf8,
    emissiveIntensity: 1.6,
    side: THREE.DoubleSide,
    metalness: 0.2,
    roughness: 0.3,
  });

  // Materiales emisivos de accesorios específicos por skin
  const whiteReflectiveMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 2.2,
    metalness: 0.2,
    roughness: 0.2,
  });
  const cyanTacticalNeonMat = new THREE.MeshStandardMaterial({
    color: 0x00f2fe,
    emissive: 0x00f2fe,
    emissiveIntensity: 2.6,
    metalness: 0.3,
    roughness: 0.2,
  });
  const purpleIllusionMat = new THREE.MeshStandardMaterial({
    color: 0xc084fc,
    emissive: 0xc084fc,
    emissiveIntensity: 2.4,
    metalness: 0.4,
    roughness: 0.25,
  });
  const silverEdgeMat = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    emissive: 0xe2e8f0,
    emissiveIntensity: 1.5,
    metalness: 0.85,
    roughness: 0.18,
  });
  const crimsonCircuitMat = new THREE.MeshStandardMaterial({
    color: 0xff0055,
    emissive: 0xff0055,
    emissiveIntensity: 2.8,
    metalness: 0.4,
    roughness: 0.2,
  });
  const thrusterRedMat = new THREE.MeshStandardMaterial({
    color: 0xef4444,
    emissive: 0xff0055,
    emissiveIntensity: 2.2,
    metalness: 0.5,
    roughness: 0.25,
  });
  const goldAccentMat = new THREE.MeshStandardMaterial({
    color: 0xfbbf24,
    emissive: 0xf59e0b,
    emissiveIntensity: 2.6,
    metalness: 0.95,
    roughness: 0.15,
  });
  const darkArmorMat = new THREE.MeshStandardMaterial({
    color: 0x0c0a09,
    emissive: 0x1c1917,
    emissiveIntensity: 0.35,
    metalness: 0.75,
    roughness: 0.25,
  });

  const createArticulatedLeg = (isLeft) => {
    const hipGroup = new THREE.Group();
    hipGroup.position.set(isLeft ? -0.08 : 0.08, 0.88, 0);

    const thighGeo = new THREE.CapsuleGeometry(0.064, 0.34, 10, 18);
    const thighMesh = new THREE.Mesh(thighGeo, pantsMat);
    thighMesh.position.set(isLeft ? 0.018 : -0.018, -0.19, 0);
    thighMesh.rotation.z = isLeft ? 0.05 : -0.05;
    hipGroup.add(thighMesh);

    // Urbano: Bolsillo cargo lateral
    const cargoPocketGeo = new THREE.BoxGeometry(0.03, 0.12, 0.075);
    const cargoPocketMesh = new THREE.Mesh(cargoPocketGeo, jacketMat);
    cargoPocketMesh.position.set(isLeft ? -0.055 : 0.055, -0.18, 0);
    hipGroup.add(cargoPocketMesh);

    // Night Runner: Tira reflectiva blanca vertical en muslo
    const legReflectiveGeo = new THREE.BoxGeometry(0.018, 0.28, 0.032);
    const thighReflectiveMesh = new THREE.Mesh(legReflectiveGeo, whiteReflectiveMat);
    thighReflectiveMesh.position.set(isLeft ? -0.062 : 0.062, -0.19, 0.01);
    thighReflectiveMesh.visible = false;
    hipGroup.add(thighReflectiveMesh);

    const kneeGroup = new THREE.Group();
    kneeGroup.position.set(isLeft ? 0.035 : -0.035, -0.41, 0);
    hipGroup.add(kneeGroup);

    // Infiltrado Táctico: Rodillera de neón cian encendido
    const kneePadGeo = new THREE.TorusGeometry(0.062, 0.014, 10, 20);
    kneePadGeo.rotateX(Math.PI / 2);
    const tacticalKneeNeon = new THREE.Mesh(kneePadGeo, cyanTacticalNeonMat);
    tacticalKneeNeon.position.set(isLeft ? 0.01 : -0.01, -0.02, 0);
    tacticalKneeNeon.visible = false;
    kneeGroup.add(tacticalKneeNeon);

    const calfGeo = new THREE.CapsuleGeometry(0.05, 0.34, 10, 18);
    const calfMesh = new THREE.Mesh(calfGeo, pantsMat);
    calfMesh.position.set(isLeft ? 0.02 : -0.02, -0.2, 0);
    calfMesh.rotation.z = isLeft ? 0.04 : -0.04;
    kneeGroup.add(calfMesh);

    // Night Runner: Tira reflectiva blanca en pantorrilla
    const calfReflectiveGeo = new THREE.BoxGeometry(0.018, 0.25, 0.028);
    const calfReflectiveMesh = new THREE.Mesh(calfReflectiveGeo, whiteReflectiveMat);
    calfReflectiveMesh.position.set(isLeft ? -0.042 : 0.042, -0.2, 0.015);
    calfReflectiveMesh.visible = false;
    kneeGroup.add(calfReflectiveMesh);

    const bootGroup = new THREE.Group();
    bootGroup.position.set(isLeft ? 0.035 : -0.035, -0.43, 0);
    kneeGroup.add(bootGroup);

    const footGeo = new THREE.CapsuleGeometry(0.045, 0.14, 8, 14);
    footGeo.rotateX(Math.PI / 2);
    const footMesh = new THREE.Mesh(footGeo, bootMat);
    footMesh.position.set(0, -0.005, -0.025);
    bootGroup.add(footMesh);

    // Suela luminosa diferenciada bajo la bota/zapatilla
    const soleGeo = new THREE.BoxGeometry(0.095, 0.026, 0.22);
    const soleMesh = new THREE.Mesh(soleGeo, soleMat);
    soleMesh.position.set(0, -0.038, -0.025);
    bootGroup.add(soleMesh);

    // Infiltrado Táctico: Talón de neón cian
    const heelNeonGeo = new THREE.BoxGeometry(0.098, 0.032, 0.045);
    const tacticalHeelNeon = new THREE.Mesh(heelNeonGeo, cyanTacticalNeonMat);
    tacticalHeelNeon.position.set(0, -0.01, 0.068);
    tacticalHeelNeon.visible = false;
    bootGroup.add(tacticalHeelNeon);

    // Cyber-Shinobi: Propulsor trasero rojo incandescente en la bota magnética
    const thrusterGeo = new THREE.CylinderGeometry(0.024, 0.036, 0.06, 12);
    thrusterGeo.rotateX(Math.PI / 2);
    const shinobiBootThruster = new THREE.Mesh(thrusterGeo, thrusterRedMat);
    shinobiBootThruster.position.set(0, 0.01, 0.085);
    shinobiBootThruster.visible = false;
    bootGroup.add(shinobiBootThruster);

    return {
      hipGroup,
      kneeGroup,
      bootGroup,
      cargoPocketMesh,
      thighReflectiveMesh,
      calfReflectiveMesh,
      tacticalKneeNeon,
      tacticalHeelNeon,
      shinobiBootThruster,
    };
  };

  const leftLeg = createArticulatedLeg(true);
  const rightLeg = createArticulatedLeg(false);
  acrobatGroup.add(leftLeg.hipGroup);
  acrobatGroup.add(rightLeg.hipGroup);

  const upperBodyGroup = new THREE.Group();
  acrobatGroup.add(upperBodyGroup);

  const pelvisGeo = new THREE.CylinderGeometry(0.135, 0.12, 0.15, 18);
  pelvisGeo.scale(1.15, 1, 0.72);
  const pelvisMesh = new THREE.Mesh(pelvisGeo, pantsMat);
  pelvisMesh.position.set(0, 0.89, 0);
  upperBodyGroup.add(pelvisMesh);

  const torsoSpineGroup = new THREE.Group();
  torsoSpineGroup.position.set(0, 0.95, 0);
  upperBodyGroup.add(torsoSpineGroup);

  const lowerTorsoGeo = new THREE.CylinderGeometry(0.165, 0.125, 0.24, 18);
  lowerTorsoGeo.scale(1.18, 1, 0.68);
  const lowerTorsoMesh = new THREE.Mesh(lowerTorsoGeo, jacketMat);
  lowerTorsoMesh.position.set(0, 0.12, 0);
  torsoSpineGroup.add(lowerTorsoMesh);

  const chestGeo = new THREE.CylinderGeometry(0.215, 0.162, 0.28, 20);
  chestGeo.scale(1.24, 1, 0.68);
  const chestMesh = new THREE.Mesh(chestGeo, jacketMat);
  chestMesh.position.set(0, 0.35, 0);
  torsoSpineGroup.add(chestMesh);

  const dorsalStripGeo = new THREE.BoxGeometry(0.042, 0.38, 0.026);
  const dorsalStripMesh = new THREE.Mesh(dorsalStripGeo, dorsalStripMat);
  dorsalStripMesh.position.set(0, 0.26, 0.135);
  torsoSpineGroup.add(dorsalStripMesh);

  // ============================================================================
  // GRUPOS DE ACCESORIOS DORSALES Y DE TRAJE POR ASPECTO
  // ============================================================================

  // 1. URBANO CALLEJERO: Capucha en la nuca + borde cian suave
  const urbanoAccGroup = new THREE.Group();
  const hoodNapeGeo = new THREE.SphereGeometry(0.135, 16, 14);
  hoodNapeGeo.scale(1.15, 0.68, 0.95);
  const hoodNapeMesh = new THREE.Mesh(hoodNapeGeo, jacketMat);
  hoodNapeMesh.position.set(0, 0.5, 0.095);
  urbanoAccGroup.add(hoodNapeMesh);

  const hoodTrimGeo = new THREE.TorusGeometry(0.13, 0.014, 10, 24);
  hoodTrimGeo.rotateX(Math.PI * 0.42);
  const hoodTrimMesh = new THREE.Mesh(hoodTrimGeo, dorsalStripMat);
  hoodTrimMesh.position.set(0, 0.52, 0.09);
  urbanoAccGroup.add(hoodTrimMesh);
  torsoSpineGroup.add(urbanoAccGroup);

  // 2. NIGHT RUNNER: Tiras reflectivas blancas puras (#ffffff) verticales y horizontales en espalda
  const nightRunnerAccGroup = new THREE.Group();
  nightRunnerAccGroup.visible = false;
  const nrHorizTop = new THREE.Mesh(
    new THREE.BoxGeometry(0.42, 0.032, 0.026),
    whiteReflectiveMat
  );
  nrHorizTop.position.set(0, 0.4, 0.145);
  nightRunnerAccGroup.add(nrHorizTop);

  const nrHorizBot = new THREE.Mesh(
    new THREE.BoxGeometry(0.32, 0.028, 0.026),
    whiteReflectiveMat
  );
  nrHorizBot.position.set(0, 0.16, 0.135);
  nightRunnerAccGroup.add(nrHorizBot);

  const nrVertLeft = new THREE.Mesh(
    new THREE.BoxGeometry(0.032, 0.36, 0.026),
    whiteReflectiveMat
  );
  nrVertLeft.position.set(-0.11, 0.28, 0.142);
  nightRunnerAccGroup.add(nrVertLeft);

  const nrVertRight = new THREE.Mesh(
    new THREE.BoxGeometry(0.032, 0.36, 0.026),
    whiteReflectiveMat
  );
  nrVertRight.position.set(0.11, 0.28, 0.142);
  nightRunnerAccGroup.add(nrVertRight);
  torsoSpineGroup.add(nightRunnerAccGroup);

  // 3. INFILTRADO TÁCTICO: Hombreras tácticas + Arnés cruzado en X de neón cian intenso (#00f2fe)
  const infiltradoAccGroup = new THREE.Group();
  infiltradoAccGroup.visible = false;
  const xBarGeo = new THREE.BoxGeometry(0.042, 0.48, 0.028);
  const xStrap1 = new THREE.Mesh(xBarGeo, cyanTacticalNeonMat);
  xStrap1.position.set(0, 0.28, 0.148);
  xStrap1.rotation.z = 0.64;
  infiltradoAccGroup.add(xStrap1);

  const xStrap2 = new THREE.Mesh(xBarGeo, cyanTacticalNeonMat);
  xStrap2.position.set(0, 0.28, 0.148);
  xStrap2.rotation.z = -0.64;
  infiltradoAccGroup.add(xStrap2);

  const xCoreBuckle = new THREE.Mesh(
    new THREE.CylinderGeometry(0.055, 0.055, 0.032, 6),
    cyanTacticalNeonMat
  );
  xCoreBuckle.rotation.x = Math.PI / 2;
  xCoreBuckle.position.set(0, 0.28, 0.155);
  infiltradoAccGroup.add(xCoreBuckle);

  const shoulderPadArmorGeo = new THREE.BoxGeometry(0.14, 0.065, 0.18);
  const leftTacPad = new THREE.Mesh(shoulderPadArmorGeo, darkArmorMat);
  leftTacPad.position.set(-0.27, 0.48, 0);
  leftTacPad.rotation.z = 0.22;
  const leftTacEdge = new THREE.Mesh(
    new THREE.BoxGeometry(0.15, 0.018, 0.19),
    cyanTacticalNeonMat
  );
  leftTacEdge.position.set(0, 0.028, 0);
  leftTacPad.add(leftTacEdge);
  infiltradoAccGroup.add(leftTacPad);

  const rightTacPad = new THREE.Mesh(shoulderPadArmorGeo, darkArmorMat);
  rightTacPad.position.set(0.27, 0.48, 0);
  rightTacPad.rotation.z = -0.22;
  const rightTacEdge = new THREE.Mesh(
    new THREE.BoxGeometry(0.15, 0.018, 0.19),
    cyanTacticalNeonMat
  );
  rightTacEdge.position.set(0, 0.028, 0);
  rightTacPad.add(rightTacEdge);
  infiltradoAccGroup.add(rightTacPad);
  torsoSpineGroup.add(infiltradoAccGroup);

  // 4. ILUSIONISTA DE ALTURA: Chaleco con geometría púrpura neón (#c084fc) y bordes plata brillante (#f1f5f9)
  const ilusionistaAccGroup = new THREE.Group();
  ilusionistaAccGroup.visible = false;
  const diamondRingGeo = new THREE.TorusGeometry(0.13, 0.018, 8, 4);
  const backDiamondMesh = new THREE.Mesh(diamondRingGeo, purpleIllusionMat);
  backDiamondMesh.position.set(0, 0.3, 0.148);
  ilusionistaAccGroup.add(backDiamondMesh);

  const innerDiamondMesh = new THREE.Mesh(
    new THREE.TorusGeometry(0.065, 0.014, 8, 4),
    silverEdgeMat
  );
  innerDiamondMesh.position.set(0, 0.3, 0.152);
  ilusionistaAccGroup.add(innerDiamondMesh);

  const silverLapelLeft = new THREE.Mesh(
    new THREE.BoxGeometry(0.025, 0.42, 0.03),
    silverEdgeMat
  );
  silverLapelLeft.position.set(-0.16, 0.27, 0.138);
  silverLapelLeft.rotation.z = -0.12;
  ilusionistaAccGroup.add(silverLapelLeft);

  const silverLapelRight = new THREE.Mesh(
    new THREE.BoxGeometry(0.025, 0.42, 0.03),
    silverEdgeMat
  );
  silverLapelRight.position.set(0.16, 0.27, 0.138);
  silverLapelRight.rotation.z = 0.12;
  ilusionistaAccGroup.add(silverLapelRight);

  const silverCollar = new THREE.Mesh(
    new THREE.TorusGeometry(0.135, 0.016, 10, 24),
    silverEdgeMat
  );
  silverCollar.rotateX(Math.PI / 2);
  silverCollar.position.set(0, 0.49, 0.01);
  ilusionistaAccGroup.add(silverCollar);
  torsoSpineGroup.add(ilusionistaAccGroup);

  // 5. CYBER-SHINOBI TOKIO: Circuito carmesí (#ff0055) + Katana cruzada en diagonal con empuñadura roja/dorada
  const shinobiAccGroup = new THREE.Group();
  shinobiAccGroup.visible = false;

  const circuitSpine = new THREE.Mesh(
    new THREE.BoxGeometry(0.036, 0.4, 0.028),
    crimsonCircuitMat
  );
  circuitSpine.position.set(0, 0.27, 0.146);
  shinobiAccGroup.add(circuitSpine);

  for (let cIdx = 0; cIdx < 4; cIdx++) {
    const side = cIdx % 2 === 0 ? -1 : 1;
    const rowY = cIdx < 2 ? 0.36 : 0.21;
    const branch = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 0.022, 0.026),
      crimsonCircuitMat
    );
    branch.position.set(side * 0.08, rowY, 0.146);
    branch.rotation.z = side * 0.38;
    shinobiAccGroup.add(branch);
  }

  // Katana 3D cruzada en diagonal en la espalda
  const katanaPivot = new THREE.Group();
  katanaPivot.position.set(0.02, 0.31, 0.172);
  katanaPivot.rotation.z = -0.68; // Diagonal de hombro derecho a cadera izquierda

  // Vaina (Saya) negra con anillos carmesí
  const scabbardMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(0.018, 0.015, 0.66, 12),
    darkArmorMat
  );
  scabbardMesh.position.set(0, -0.06, 0);
  katanaPivot.add(scabbardMesh);

  const scabbardNeonLine = new THREE.Mesh(
    new THREE.BoxGeometry(0.012, 0.64, 0.038),
    crimsonCircuitMat
  );
  scabbardNeonLine.position.set(0, -0.06, 0);
  katanaPivot.add(scabbardNeonLine);

  // Guarda (Tsuba) dorada
  const tsubaMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(0.052, 0.052, 0.016, 16),
    goldAccentMat
  );
  tsubaMesh.position.set(0, 0.27, 0);
  katanaPivot.add(tsubaMesh);

  // Empuñadura (Tsuka) roja con pomo dorado
  const hiltMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(0.02, 0.02, 0.22, 12),
    thrusterRedMat
  );
  hiltMesh.position.set(0, 0.39, 0);
  katanaPivot.add(hiltMesh);

  const pommelMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(0.025, 0.025, 0.028, 12),
    goldAccentMat
  );
  pommelMesh.position.set(0, 0.51, 0);
  katanaPivot.add(pommelMesh);

  const singleKatanaMesh = katanaPivot;
  shinobiAccGroup.add(singleKatanaMesh);
  torsoSpineGroup.add(shinobiAccGroup);

  // 6. RONIN IMPERIAL DORADO (x4): Hombreras samurái + placas doradas + DOS Katanas con empuñadura dorada cruzadas en la espalda
  const roninGoldAccGroup = new THREE.Group();
  roninGoldAccGroup.visible = false;

  // Placas dorsales en oro brillante (#f59e0b)
  for (let pIdx = 0; pIdx < 3; pIdx++) {
    const plateMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.24 - pIdx * 0.03, 0.055, 0.03),
      goldAccentMat
    );
    plateMesh.position.set(0, 0.39 - pIdx * 0.1, 0.145);
    roninGoldAccGroup.add(plateMesh);
  }

  // Sub-grupo 3D: Hombreras samurái doradas (`samuraiShouldersGroup`)
  const samuraiShouldersGroup = new THREE.Group();
  samuraiShouldersGroup.visible = false;
  const sodeGeo = new THREE.BoxGeometry(0.16, 0.14, 0.2);
  const leftSode = new THREE.Mesh(sodeGeo, darkArmorMat);
  leftSode.position.set(-0.285, 0.45, 0);
  leftSode.rotation.z = 0.28;
  const leftSodeTrim = new THREE.Mesh(
    new THREE.BoxGeometry(0.17, 0.024, 0.21),
    goldAccentMat
  );
  leftSodeTrim.position.set(0, 0.06, 0);
  leftSode.add(leftSodeTrim);
  samuraiShouldersGroup.add(leftSode);

  const rightSode = new THREE.Mesh(sodeGeo, darkArmorMat);
  rightSode.position.set(0.285, 0.45, 0);
  rightSode.rotation.z = -0.28;
  const rightSodeTrim = new THREE.Mesh(
    new THREE.BoxGeometry(0.17, 0.024, 0.21),
    goldAccentMat
  );
  rightSodeTrim.position.set(0, 0.06, 0);
  rightSode.add(rightSodeTrim);
  samuraiShouldersGroup.add(rightSode);
  torsoSpineGroup.add(samuraiShouldersGroup);

  // Sub-grupo 3D: Dos Katanas cruzadas en X con empuñadura dorada (`dualGoldKatanasGroup`)
  const dualGoldKatanasGroup = new THREE.Group();
  dualGoldKatanasGroup.visible = false;
  const buildGoldenKatana = (rotZ, offsetZ) => {
    const kGroup = new THREE.Group();
    kGroup.position.set(0, 0.3, offsetZ);
    kGroup.rotation.z = rotZ;

    const saya = new THREE.Mesh(
      new THREE.CylinderGeometry(0.018, 0.015, 0.68, 12),
      darkArmorMat
    );
    saya.position.set(0, -0.06, 0);
    kGroup.add(saya);

    const goldStripe = new THREE.Mesh(
      new THREE.BoxGeometry(0.012, 0.65, 0.038),
      goldAccentMat
    );
    goldStripe.position.set(0, -0.06, 0);
    kGroup.add(goldStripe);

    const tsuba = new THREE.Mesh(
      new THREE.CylinderGeometry(0.054, 0.054, 0.018, 16),
      goldAccentMat
    );
    tsuba.position.set(0, 0.28, 0);
    kGroup.add(tsuba);

    const goldHilt = new THREE.Mesh(
      new THREE.CylinderGeometry(0.021, 0.021, 0.23, 12),
      goldAccentMat
    );
    goldHilt.position.set(0, 0.4, 0);
    kGroup.add(goldHilt);

    return kGroup;
  };

  dualGoldKatanasGroup.add(buildGoldenKatana(-0.62, 0.172));
  dualGoldKatanasGroup.add(buildGoldenKatana(0.62, 0.192));
  roninGoldAccGroup.add(dualGoldKatanasGroup);
  torsoSpineGroup.add(roninGoldAccGroup);

  // 7. ESPECTRO CUÁNTICO (x5): Núcleo energético en la espalda + Halo holográfico alrededor del cuerpo (`quantumHaloMesh`)
  const quantumSpecterAccGroup = new THREE.Group();
  quantumSpecterAccGroup.visible = false;
  const quantumHaloMesh = quantumSpecterAccGroup;

  const quantumCoreMesh = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.085, 1),
    cyanTacticalNeonMat
  );
  quantumCoreMesh.position.set(0, 0.3, 0.165);
  quantumSpecterAccGroup.add(quantumCoreMesh);

  const quantumCoreRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.13, 0.014, 10, 28),
    whiteReflectiveMat
  );
  quantumCoreRing.position.set(0, 0.3, 0.165);
  quantumSpecterAccGroup.add(quantumCoreRing);

  const quantumHoloRingA = new THREE.Mesh(
    new THREE.TorusGeometry(0.38, 0.014, 10, 36),
    cyanTacticalNeonMat
  );
  quantumHoloRingA.position.set(0, 0.28, 0);
  quantumHoloRingA.rotation.x = Math.PI * 0.35;
  quantumSpecterAccGroup.add(quantumHoloRingA);

  const quantumHoloRingB = new THREE.Mesh(
    new THREE.TorusGeometry(0.42, 0.012, 10, 36),
    whiteReflectiveMat
  );
  quantumHoloRingB.position.set(0, 0.28, 0);
  quantumHoloRingB.rotation.y = Math.PI * 0.25;
  quantumSpecterAccGroup.add(quantumHoloRingB);
  torsoSpineGroup.add(quantumSpecterAccGroup);

  // 8. LEYENDA DORADA INMORTAL (x8 VIP): Aura solar rotatoria + partículas doradas orbitales
  const goldenLegendAccGroup = new THREE.Group();
  goldenLegendAccGroup.visible = false;
  const solarAuraRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.34, 0.02, 12, 36),
    goldAccentMat
  );
  solarAuraRing.position.set(0, 0.32, 0.16);
  goldenLegendAccGroup.add(solarAuraRing);

  const solarParticlesGroup = new THREE.Group();
  solarParticlesGroup.position.set(0, 0.3, 0);
  const solarParticleGeo = new THREE.SphereGeometry(0.026, 8, 8);
  for (let sp = 0; sp < 8; sp++) {
    const ang = (sp / 8) * Math.PI * 2;
    const pMesh = new THREE.Mesh(solarParticleGeo, goldAccentMat);
    pMesh.position.set(Math.cos(ang) * 0.42, Math.sin(ang * 2) * 0.18, Math.sin(ang) * 0.32);
    solarParticlesGroup.add(pMesh);
  }
  goldenLegendAccGroup.add(solarParticlesGroup);
  torsoSpineGroup.add(goldenLegendAccGroup);

  const shoulderCapGeo = new THREE.SphereGeometry(0.078, 16, 16);
  const leftCapMesh = new THREE.Mesh(shoulderCapGeo, jacketMat);
  leftCapMesh.position.set(-0.255, 0.45, 0);
  torsoSpineGroup.add(leftCapMesh);

  const rightCapMesh = new THREE.Mesh(shoulderCapGeo, jacketMat);
  rightCapMesh.position.set(0.255, 0.45, 0);
  torsoSpineGroup.add(rightCapMesh);

  const neckGeo = new THREE.CylinderGeometry(0.05, 0.06, 0.1, 14);
  const neckMesh = new THREE.Mesh(neckGeo, jacketMat);
  neckMesh.position.set(0, 0.54, 0);
  torsoSpineGroup.add(neckMesh);

  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.67, 0);
  torsoSpineGroup.add(headGroup);

  const craniumGeo = new THREE.SphereGeometry(0.118, 24, 24);
  craniumGeo.scale(0.95, 1.06, 1.02);
  const craniumMesh = new THREE.Mesh(craniumGeo, headMat);
  headGroup.add(craniumMesh);

  const headbandGeo = new THREE.TorusGeometry(0.116, 0.018, 12, 28);
  headbandGeo.rotateX(Math.PI / 2);
  const headbandMesh = new THREE.Mesh(headbandGeo, headbandMat);
  headbandMesh.position.set(0, 0.025, 0);
  headGroup.add(headbandMesh);

  // Infiltrado Táctico: Visor táctico cian envolvente
  const tacticalVisorGeo = new THREE.CylinderGeometry(
    0.124,
    0.124,
    0.045,
    20,
    1,
    true,
    Math.PI * 0.55,
    Math.PI * 0.9
  );
  const tacticalVisorMesh = new THREE.Mesh(tacticalVisorGeo, cyanTacticalNeonMat);
  tacticalVisorMesh.position.set(0, 0.02, 0);
  tacticalVisorMesh.visible = false;
  headGroup.add(tacticalVisorMesh);

  // Leyenda Dorada: Corona/Halo solar sobre la cabeza (`immortalCrownMesh`)
  const goldenCrownHalo = new THREE.Mesh(
    new THREE.TorusGeometry(0.14, 0.015, 10, 28),
    goldAccentMat
  );
  goldenCrownHalo.rotateX(Math.PI / 2);
  goldenCrownHalo.position.set(0, 0.16, 0);
  goldenCrownHalo.visible = false;
  headGroup.add(goldenCrownHalo);
  const immortalCrownMesh = goldenCrownHalo;

  // Cinta / Bufanda de energía articulada en 3 segmentos reactivos al viento
  const ribbonPivot = new THREE.Group();
  ribbonPivot.position.set(0, 0.022, 0.118);
  headGroup.add(ribbonPivot);

  const segGeo1 = new THREE.BoxGeometry(0.18, 0.032, 0.01);
  segGeo1.translate(0.09, 0, 0);
  const ribbonSeg1 = new THREE.Mesh(segGeo1, ribbonMat);
  ribbonPivot.add(ribbonSeg1);

  const ribbonJoint2 = new THREE.Group();
  ribbonJoint2.position.set(0.175, 0, 0);
  ribbonSeg1.add(ribbonJoint2);

  const segGeo2 = new THREE.BoxGeometry(0.18, 0.028, 0.009);
  segGeo2.translate(0.09, 0, 0);
  const ribbonSeg2 = new THREE.Mesh(segGeo2, ribbonMat);
  ribbonJoint2.add(ribbonSeg2);

  const ribbonJoint3 = new THREE.Group();
  ribbonJoint3.position.set(0.175, 0, 0);
  ribbonSeg2.add(ribbonJoint3);

  const segGeo3 = new THREE.BoxGeometry(0.17, 0.022, 0.008);
  segGeo3.translate(0.085, 0, 0);
  const ribbonSeg3 = new THREE.Mesh(segGeo3, ribbonMat);
  ribbonJoint3.add(ribbonSeg3);

  const createArticulatedArm = (isLeft) => {
    const shoulderGroup = new THREE.Group();
    shoulderGroup.position.set(isLeft ? -0.255 : 0.255, 0.44, 0);

    const upperArmGeo = new THREE.CapsuleGeometry(0.048, 0.22, 10, 16);
    const upperArmMesh = new THREE.Mesh(upperArmGeo, jacketMat);
    upperArmMesh.position.set(isLeft ? -0.08 : 0.08, -0.11, -0.02);
    upperArmMesh.rotation.z = isLeft ? -0.56 : 0.56;
    shoulderGroup.add(upperArmMesh);

    // Night Runner: Tira reflectiva blanca en manga
    const sleeveReflectiveGeo = new THREE.BoxGeometry(0.02, 0.19, 0.028);
    const sleeveReflectiveMesh = new THREE.Mesh(sleeveReflectiveGeo, whiteReflectiveMat);
    sleeveReflectiveMesh.position.set(isLeft ? -0.095 : 0.095, -0.11, 0.025);
    sleeveReflectiveMesh.rotation.z = isLeft ? -0.56 : 0.56;
    sleeveReflectiveMesh.visible = false;
    shoulderGroup.add(sleeveReflectiveMesh);

    const elbowGroup = new THREE.Group();
    elbowGroup.position.set(isLeft ? -0.16 : 0.16, -0.21, -0.04);
    shoulderGroup.add(elbowGroup);

    const forearmGeo = new THREE.CapsuleGeometry(0.042, 0.21, 10, 16);
    const forearmMesh = new THREE.Mesh(forearmGeo, jacketMat);
    forearmMesh.position.set(isLeft ? -0.07 : 0.07, -0.04, -0.09);
    forearmMesh.rotation.x = 0.72;
    forearmMesh.rotation.z = isLeft ? -0.45 : 0.45;
    elbowGroup.add(forearmMesh);

    // Banda luminosa en muñeca / guante
    const wristGeo = new THREE.TorusGeometry(0.046, 0.013, 10, 20);
    const wristMesh = new THREE.Mesh(wristGeo, wristBandMat);
    wristMesh.position.set(isLeft ? -0.12 : 0.12, -0.07, -0.155);
    elbowGroup.add(wristMesh);

    const handGeo = new THREE.SphereGeometry(0.052, 14, 14);
    const handMesh = new THREE.Mesh(handGeo, gloveMat);
    handMesh.position.set(isLeft ? -0.14 : 0.14, -0.08, -0.18);
    elbowGroup.add(handMesh);

    return {
      shoulderGroup,
      elbowGroup,
      handMesh,
      wristMesh,
      sleeveReflectiveMesh,
    };
  };

  const leftArm = createArticulatedArm(true);
  const rightArm = createArticulatedArm(false);
  torsoSpineGroup.add(leftArm.shoulderGroup);
  torsoSpineGroup.add(rightArm.shoulderGroup);

  // Vara de Equilibrio en 3D
  const poleGroup = new THREE.Group();
  poleGroup.position.set(0, 0.17, -0.2);
  torsoSpineGroup.add(poleGroup);

  const poleLen = 4.0;
  const poleCoreGeo = new THREE.CylinderGeometry(0.018, 0.018, poleLen, 16);
  poleCoreGeo.rotateZ(Math.PI / 2);
  const poleCoreMat = new THREE.MeshBasicMaterial({ color: 0xe0f2fe });
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

  const tipGeo = new THREE.SphereGeometry(0.058, 14, 14);
  const poleTipMat = new THREE.MeshBasicMaterial({ color: 0x00f2fe });
  const leftTipMesh = new THREE.Mesh(tipGeo, poleTipMat);
  leftTipMesh.position.set(-poleLen * 0.5, 0, 0);
  poleGroup.add(leftTipMesh);

  const rightTipMesh = new THREE.Mesh(tipGeo, poleTipMat);
  rightTipMesh.position.set(poleLen * 0.5, 0, 0);
  poleGroup.add(rightTipMesh);

  const gyroRingGeo = new THREE.TorusGeometry(0.14, 0.015, 10, 24);
  const leftGyroRing = new THREE.Mesh(gyroRingGeo, poleTipMat);
  leftGyroRing.position.set(-poleLen * 0.5, 0, 0);
  leftGyroRing.visible = false;
  poleGroup.add(leftGyroRing);

  const rightGyroRing = new THREE.Mesh(gyroRingGeo, poleTipMat);
  rightGyroRing.position.set(poleLen * 0.5, 0, 0);
  rightGyroRing.visible = false;
  poleGroup.add(rightGyroRing);

  // Línea láser 3D del Gancho Salvavidas
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

  // Esferas incandescentes con estela de luz
  const orbCoreGeo = new THREE.SphereGeometry(0.12, 24, 24);
  const orbHaloGeo = new THREE.SphereGeometry(0.24, 16, 16);
  const trailSphereGeo = new THREE.SphereGeometry(0.072, 12, 12);

  const orbCoreMat = new THREE.MeshBasicMaterial({ color: 0xfef9c3 });
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

  const threeCtx = {
    scene,
    camera,
    renderer,
    ambientLight,
    rimDirLight,
    cyanPoleLight,
    goldOrbLight,
    acrobatKeyLight,
    acrobatBackLight,
    backlitBackdrop,
    cableTex,
    arrivalGroup,
    arrivalToriiGroup,
    beaconRingMesh,
    landmarkGroup,
    landmarkAnimRefs: {},
    activeLandmarkKey: '',
    skyscrapers,
    spotlightBeams,
    carMeshes,
    weatherPoints,
    weatherGeo,
    weatherMat,
    weatherCount,
    acrobatGroup,
    // Referencias directas a materiales del cuerpo (BLOQUE 2)
    torsoMat,
    limbsMat,
    neonStripMat,
    shoesMat,
    glovesMat,
    headbandMat,
    jacketMat,
    pantsMat,
    bootMat,
    headMat,
    soleMat,
    gloveMat,
    wristBandMat,
    ribbonMat,
    dorsalStripMat,
    // Sub-grupos 3D de accesorios en espalda, hombros y cabeza (BLOQUE 2)
    singleKatanaMesh,
    dualGoldKatanasGroup,
    samuraiShouldersGroup,
    quantumHaloMesh,
    immortalCrownMesh,
    urbanoAccGroup,
    nightRunnerAccGroup,
    infiltradoAccGroup,
    ilusionistaAccGroup,
    shinobiAccGroup,
    roninGoldAccGroup,
    quantumSpecterAccGroup,
    quantumCoreMesh,
    quantumHoloRingA,
    quantumHoloRingB,
    goldenLegendAccGroup,
    solarAuraRing,
    solarParticlesGroup,
    tacticalVisorMesh,
    goldenCrownHalo,
    poleCoreMat,
    poleLaserGlowMat,
    poleTipMat,
    poleGlowMesh,
    leftGyroRing,
    rightGyroRing,
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
    lastTimeSec: 0,
    smoothKneeFlex: 0,
    smoothHipX: 0,
    edgeSaveBlend: 0,
    smoothTorsoComp: 0,
    smoothNeckComp: 0,
    dynamicFov: 58,
    dynamicCamDist: 6.2,
    dynamicCamY: 3.38,
  };

  activeThreeCtxRef = threeCtx;
  applySkinToAcrobat('urbano', threeCtx, false);
  return threeCtx;
}

// ============================================================================
// BLOQUE 2: MUTACIÓN REAL EN VIVO DEL MODELO 3D (`applySkinToAcrobat`)
// ============================================================================
export function applySkinToAcrobat(skinId, threeCtxOverride = null, isFever = false) {
  const ctx = threeCtxOverride || activeThreeCtxRef;
  if (!ctx) return null;

  const skinKey = resolveSkinKey(skinId);
  const skin = SKINS_CATALOG[skinKey] || SKINS_CATALOG.urbano;
  const styleType = skin.styleType || skinKey;
  const metalVal = skin.metalness ?? 0.45;
  const roughVal = skin.roughness ?? 0.35;
  const stripEmissiveInt = isFever ? 3.2 : skin.emissiveIntensity ?? 2.2;
  const feverColorHex = 0xfde047;

  // 1. Actualizar inmediatamente `.color.set(...)`, `.emissive.set(...)` y `.emissiveIntensity` en todos los materiales del cuerpo
  if (ctx.torsoMat) {
    ctx.torsoMat.color.set(skin.torsoColor || skin.jacketHex);
    ctx.torsoMat.emissive.set(isFever ? feverColorHex : skin.torsoEmissive || skin.jacketEmissiveHex);
    ctx.torsoMat.emissiveIntensity = isFever ? 1.15 : skin.torsoEmissiveIntensity ?? 0.6;
    ctx.torsoMat.metalness = metalVal;
    ctx.torsoMat.roughness = roughVal;
    ctx.torsoMat.needsUpdate = true;
  }

  if (ctx.limbsMat) {
    ctx.limbsMat.color.set(skin.limbsColor || skin.pantsHex);
    ctx.limbsMat.emissive.set(isFever ? feverColorHex : skin.limbsEmissive || skin.pantsHex);
    ctx.limbsMat.emissiveIntensity = isFever ? 0.95 : skin.limbsEmissiveIntensity ?? 0.45;
    ctx.limbsMat.metalness = metalVal;
    ctx.limbsMat.roughness = roughVal;
    ctx.limbsMat.needsUpdate = true;
  }

  if (ctx.neonStripMat) {
    ctx.neonStripMat.color.set(isFever ? feverColorHex : skin.neonStripColor || skin.dorsalHex);
    ctx.neonStripMat.emissive.set(isFever ? feverColorHex : skin.neonStripColor || skin.dorsalHex);
    ctx.neonStripMat.emissiveIntensity = stripEmissiveInt;
    ctx.neonStripMat.needsUpdate = true;
  }

  if (ctx.shoesMat) {
    ctx.shoesMat.color.set(skin.shoesColor || skin.bootHex);
    ctx.shoesMat.emissive.set(isFever ? feverColorHex : skin.shoesColor || skin.soleHex);
    ctx.shoesMat.emissiveIntensity = isFever ? 1.4 : styleType === 'urbano' ? 0.35 : 1.15;
    ctx.shoesMat.metalness = metalVal;
    ctx.shoesMat.roughness = roughVal;
    ctx.shoesMat.needsUpdate = true;
  }

  if (ctx.glovesMat) {
    ctx.glovesMat.color.set(skin.glovesColor || skin.gloveHex);
    ctx.glovesMat.emissive.set(isFever ? feverColorHex : skin.glovesColor || skin.wristHex);
    ctx.glovesMat.emissiveIntensity =
      styleType === 'ilusionista' || styleType === 'quantum_specter' || styleType === 'immortal_legend'
        ? 1.75
        : 0.65;
    ctx.glovesMat.metalness = metalVal;
    ctx.glovesMat.roughness = roughVal;
    ctx.glovesMat.needsUpdate = true;
  }

  if (ctx.headbandMat) {
    ctx.headbandMat.color.set(isFever ? feverColorHex : skin.headbandColor || skin.headbandHex);
    ctx.headbandMat.emissive.set(isFever ? feverColorHex : skin.headbandColor || skin.headbandHex);
    ctx.headbandMat.emissiveIntensity = stripEmissiveInt * 0.9;
    ctx.headbandMat.needsUpdate = true;
  }

  if (ctx.soleMat) {
    ctx.soleMat.color.set(skin.soleColor || skin.soleHex);
    ctx.soleMat.emissive.set(isFever ? feverColorHex : skin.soleColor || skin.soleHex);
    ctx.soleMat.emissiveIntensity = stripEmissiveInt * 0.85;
    ctx.soleMat.needsUpdate = true;
  }

  if (ctx.wristBandMat) {
    ctx.wristBandMat.color.set(skin.wristColor || skin.wristHex);
    ctx.wristBandMat.emissive.set(isFever ? feverColorHex : skin.wristColor || skin.wristHex);
    ctx.wristBandMat.emissiveIntensity = stripEmissiveInt * 0.9;
    ctx.wristBandMat.needsUpdate = true;
  }

  if (ctx.ribbonMat) {
    ctx.ribbonMat.color.set(isFever ? feverColorHex : skin.ribbonColor || skin.ribbonHex);
    ctx.ribbonMat.emissive.set(isFever ? feverColorHex : skin.ribbonColor || skin.ribbonHex);
    ctx.ribbonMat.emissiveIntensity = stripEmissiveInt * 0.9;
    ctx.ribbonMat.needsUpdate = true;
  }

  if (ctx.acrobatBackLight) {
    ctx.acrobatBackLight.color.set(isFever ? feverColorHex : skin.neonStripColor || skin.rimHex);
  }

  const ribbonLengthScale =
    styleType === 'shinobi' || styleType === 'immortal_legend'
      ? 1.48
      : styleType === 'ilusionista' || styleType === 'ronin_gold'
      ? 1.32
      : 1.0;
  if (ctx.ribbonPivot) {
    ctx.ribbonPivot.scale.set(ribbonLengthScale, 1, 1);
  }

  // 2. Activar/desactivar (`.visible = true / false`) sub-grupos 3D de accesorios según la skin equipada
  const isUrbano = styleType === 'urbano';
  const isNightRunner = styleType === 'night_runner';
  const isInfiltrado = styleType === 'infiltrado';
  const isIlusionista = styleType === 'ilusionista';
  const isShinobi = styleType === 'shinobi';
  const isRoninGold = styleType === 'ronin_gold';
  const isQuantumSpecter = styleType === 'quantum_specter';
  const isGolden = styleType === 'immortal_legend' || styleType === 'leyenda_dorada';

  if (ctx.urbanoAccGroup) ctx.urbanoAccGroup.visible = isUrbano;
  if (ctx.leftLeg?.cargoPocketMesh) ctx.leftLeg.cargoPocketMesh.visible = isUrbano;
  if (ctx.rightLeg?.cargoPocketMesh) ctx.rightLeg.cargoPocketMesh.visible = isUrbano;

  if (ctx.nightRunnerAccGroup) ctx.nightRunnerAccGroup.visible = isNightRunner;
  if (ctx.leftArm?.sleeveReflectiveMesh) ctx.leftArm.sleeveReflectiveMesh.visible = isNightRunner;
  if (ctx.rightArm?.sleeveReflectiveMesh) ctx.rightArm.sleeveReflectiveMesh.visible = isNightRunner;
  if (ctx.leftLeg?.thighReflectiveMesh) ctx.leftLeg.thighReflectiveMesh.visible = isNightRunner;
  if (ctx.rightLeg?.thighReflectiveMesh) ctx.rightLeg.thighReflectiveMesh.visible = isNightRunner;
  if (ctx.leftLeg?.calfReflectiveMesh) ctx.leftLeg.calfReflectiveMesh.visible = isNightRunner;
  if (ctx.rightLeg?.calfReflectiveMesh) ctx.rightLeg.calfReflectiveMesh.visible = isNightRunner;

  if (ctx.infiltradoAccGroup) ctx.infiltradoAccGroup.visible = isInfiltrado;
  if (ctx.tacticalVisorMesh) ctx.tacticalVisorMesh.visible = isInfiltrado || isQuantumSpecter;
  if (ctx.leftLeg?.tacticalKneeNeon) ctx.leftLeg.tacticalKneeNeon.visible = isInfiltrado || isQuantumSpecter;
  if (ctx.rightLeg?.tacticalKneeNeon) ctx.rightLeg.tacticalKneeNeon.visible = isInfiltrado || isQuantumSpecter;
  if (ctx.leftLeg?.tacticalHeelNeon) ctx.leftLeg.tacticalHeelNeon.visible = isInfiltrado || isQuantumSpecter;
  if (ctx.rightLeg?.tacticalHeelNeon) ctx.rightLeg.tacticalHeelNeon.visible = isInfiltrado || isQuantumSpecter;

  if (ctx.ilusionistaAccGroup) ctx.ilusionistaAccGroup.visible = isIlusionista;

  // Sub-grupos 3D requeridos en BLOQUE 2:
  if (ctx.shinobiAccGroup) ctx.shinobiAccGroup.visible = isShinobi;
  if (ctx.singleKatanaMesh) ctx.singleKatanaMesh.visible = isShinobi;
  if (ctx.leftLeg?.shinobiBootThruster) ctx.leftLeg.shinobiBootThruster.visible = isShinobi;
  if (ctx.rightLeg?.shinobiBootThruster) ctx.rightLeg.shinobiBootThruster.visible = isShinobi;

  if (ctx.roninGoldAccGroup) ctx.roninGoldAccGroup.visible = isRoninGold;
  if (ctx.dualGoldKatanasGroup) ctx.dualGoldKatanasGroup.visible = isRoninGold;
  if (ctx.samuraiShouldersGroup) ctx.samuraiShouldersGroup.visible = isRoninGold || isGolden;

  if (ctx.quantumSpecterAccGroup) ctx.quantumSpecterAccGroup.visible = isQuantumSpecter;
  if (ctx.quantumHaloMesh) ctx.quantumHaloMesh.visible = isQuantumSpecter;

  if (ctx.goldenLegendAccGroup) ctx.goldenLegendAccGroup.visible = isGolden;
  if (ctx.immortalCrownMesh) ctx.immortalCrownMesh.visible = isGolden;
  if (ctx.goldenCrownHalo) ctx.goldenCrownHalo.visible = isGolden;

  return skin;
}

export function updateAndRenderThreeScene(
  threeCtx,
  eng,
  nowSec,
  gameState = 'menu',
  activeSkinId = 'urbano',
  activeTab = 'home'
) {
  if (!threeCtx || !eng) return;

  const dt = Math.min(
    0.05,
    Math.max(0.001, nowSec - (threeCtx.lastTimeSec || nowSec - 0.016))
  );
  threeCtx.lastTimeSec = nowSec;

  const playerZ = -(eng.distance || 0);
  const angle = eng.angle || 0;
  const absAngle = Math.abs(angle);
  const tiltRatio = Math.min(1, absAngle / CRITICAL_ANGLE_RAD);
  const speedMult = eng.cfg?.walkSpeed || 1.0;
  const isFever = Boolean(eng.frenzyActive);

  // ============================================================================
  // 1. APLICACIÓN EN TIEMPO REAL DEL ASPECTO EQUIPADO (`applySkinToAcrobat`)
  // ============================================================================
  const skinVis =
    applySkinToAcrobat(activeSkinId || eng.skinObj?.id, threeCtx, isFever) ||
    resolveSkinVisual(activeSkinId || eng.skinObj?.id);
  const styleType = skinVis.styleType;
  const rimHex = isFever ? 0xfde047 : skinVis.rimHex;
  const isQuantumSpecter = styleType === 'quantum_specter';
  const isGolden = styleType === 'immortal_legend' || styleType === 'leyenda_dorada';

  if (isQuantumSpecter) {
    if (threeCtx.quantumCoreMesh) {
      threeCtx.quantumCoreMesh.rotation.y = nowSec * 2.8;
      threeCtx.quantumCoreMesh.rotation.z = nowSec * 1.9;
    }
    if (threeCtx.quantumHoloRingA) {
      threeCtx.quantumHoloRingA.rotation.z = nowSec * 1.6;
      threeCtx.quantumHoloRingA.rotation.x = Math.PI * 0.35 + Math.sin(nowSec * 2.1) * 0.22;
    }
    if (threeCtx.quantumHoloRingB) {
      threeCtx.quantumHoloRingB.rotation.x = -nowSec * 1.4;
      threeCtx.quantumHoloRingB.rotation.y = Math.PI * 0.25 + Math.cos(nowSec * 1.8) * 0.25;
    }
  }

  if (isGolden) {
    if (threeCtx.solarAuraRing) {
      threeCtx.solarAuraRing.rotation.z = nowSec * 2.1;
    }
    if (threeCtx.solarParticlesGroup) {
      threeCtx.solarParticlesGroup.rotation.y = nowSec * 2.4;
      threeCtx.solarParticlesGroup.rotation.z = Math.sin(nowSec * 1.5) * 0.25;
    }
  }

  // ============================================================================
  // 2. IDENTIDAD CLIMÁTICA Y MONUMENTOS 3D ICÓNICOS POR CIUDAD
  // ============================================================================
  const city = eng.cfg?.city || CITIES[0];
  const targetDist = eng.targetDistance || 68;
  const landmarkKey = `${city.id || city.index}_${city.monument}_${targetDist}`;

  if (threeCtx.activeLandmarkKey !== landmarkKey) {
    threeCtx.activeLandmarkKey = landmarkKey;

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

    const accentHex = city.accentColor
      ? parseInt(city.accentColor.replace('#', ''), 16)
      : 0x00f2fe;
    const winHex = city.winColor
      ? parseInt(city.winColor.replace('#', ''), 16)
      : 0xfde047;

    threeCtx.landmarkAnimRefs = populateCityLandmark3D(
      threeCtx.landmarkGroup,
      threeCtx.arrivalToriiGroup,
      city.monument || 'obelisco',
      accentHex,
      winHex
    );
  }

  threeCtx.landmarkGroup.position.set(0, 0, -targetDist - 35);

  if (threeCtx.landmarkAnimRefs) {
    if (threeCtx.landmarkAnimRefs.londonEyeWheel) {
      threeCtx.landmarkAnimRefs.londonEyeWheel.rotation.z += dt * 0.22;
    }
    if (threeCtx.landmarkAnimRefs.eiffelBeacon) {
      threeCtx.landmarkAnimRefs.eiffelBeacon.rotation.y += dt * 1.4;
    }
    if (threeCtx.landmarkAnimRefs.libertyTorchHalo) {
      const s = 1 + Math.sin(nowSec * 6) * 0.18;
      threeCtx.landmarkAnimRefs.libertyTorchHalo.scale.set(s, s, s);
    }
    if (threeCtx.landmarkAnimRefs.auroraMesh) {
      threeCtx.landmarkAnimRefs.auroraMesh.position.x = Math.sin(nowSec * 0.9) * 4.5;
    }
  }

  // Partículas climáticas 3D
  const posAttr = threeCtx.weatherGeo.attributes.position;
  const arr = posAttr.array;
  const arch = city.weatherArchetype || 'urban';
  const windX = (eng.windForce || 0) * (arch === 'blizzard' ? 14.0 : 9.5);
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
  // 3. GEOMETRÍA Y NEÓN DE LA BARRA DE EQUILIBRIO EQUIPADA
  // ============================================================================
  const poleCfg = eng.poleObj || {};
  const poleScaleX = poleCfg.poleScaleX || 1.0;
  threeCtx.poleGroup.scale.set(poleScaleX, 1, 1);
  threeCtx.poleCoreMat.color.setHex(poleCfg.coreHex || 0xe0f2fe);
  threeCtx.poleLaserGlowMat.color.setHex(
    isFever ? 0xfde047 : poleCfg.glowHex || 0x00f2fe
  );
  threeCtx.poleTipMat.color.setHex(poleCfg.tipHex || 0x00f2fe);
  threeCtx.poleLaserGlowMat.opacity = isFever ? 0.85 : 0.48;
  const poleGlowThick = isFever ? 1.45 : 1.0;
  threeCtx.poleGlowMesh.scale.set(1, poleGlowThick, poleGlowThick);

  const showGyro = Boolean(poleCfg.hasGyroRings);
  threeCtx.leftGyroRing.visible = showGyro;
  threeCtx.rightGyroRing.visible = showGyro;
  if (showGyro) {
    threeCtx.leftGyroRing.rotation.x = nowSec * 7.5;
    threeCtx.leftGyroRing.rotation.y = nowSec * 5.2;
    threeCtx.rightGyroRing.rotation.x = -nowSec * 7.5;
    threeCtx.rightGyroRing.rotation.y = -nowSec * 5.2;
  }

  // ============================================================================
  // 4. CINEMÁTICA CORPORAL FLUIDA + CAÍDA 3D + RESCATE CON GANCHO
  // ============================================================================
  const lerpFast = Math.min(1, dt * 11);
  const lerpMed = Math.min(1, dt * 7.5);
  const fallSeq = eng.fallSequence || { active: false };

  const targetKneeFlex = tiltRatio * 0.56 + (fallSeq.active ? 0.22 : 0);
  threeCtx.smoothKneeFlex += (targetKneeFlex - threeCtx.smoothKneeFlex) * lerpFast;

  const targetHipOffsetX = -Math.sin(angle) * 0.25;
  threeCtx.smoothHipX += (targetHipOffsetX - threeCtx.smoothHipX) * lerpFast;

  const isNearCritical = absAngle > CRITICAL_ANGLE_RAD * 0.75 || fallSeq.active;
  const targetEdgeSave = isNearCritical ? 1.0 : 0.0;
  threeCtx.edgeSaveBlend += (targetEdgeSave - threeCtx.edgeSaveBlend) * lerpFast;

  const targetTorsoComp =
    -angle * 0.38 - Math.sin(angle) * 0.16 * (1 + threeCtx.edgeSaveBlend * 0.45);
  const targetNeckComp = -angle * 0.32;
  threeCtx.smoothTorsoComp += (targetTorsoComp - threeCtx.smoothTorsoComp) * lerpMed;
  threeCtx.smoothNeckComp += (targetNeckComp - threeCtx.smoothNeckComp) * lerpMed;

  const isSkinPreviewMode = gameState === 'menu' && activeTab === 'skins';

  if (fallSeq.active) {
    threeCtx.acrobatGroup.position.set(
      Math.sin(angle) * 0.85,
      fallSeq.fallY || 0,
      playerZ
    );
    threeCtx.acrobatGroup.rotation.z = -(fallSeq.fallRotZ || angle);
    threeCtx.acrobatGroup.rotation.x = fallSeq.fallRotX || 0;
    threeCtx.acrobatGroup.rotation.y = 0;
  } else {
    threeCtx.acrobatGroup.position.set(0, 0, playerZ);
    threeCtx.acrobatGroup.rotation.z = -angle * 0.72;
    threeCtx.acrobatGroup.rotation.x = 0;
    // En la pestaña Aspectos rotamos suavemente al acróbata para apreciar espalda, katana, arnés X y frente
    threeCtx.acrobatGroup.rotation.y = isSkinPreviewMode
      ? Math.sin(nowSec * 1.15) * 0.65
      : 0;
  }

  const isWalking = gameState === 'playing' && !fallSeq.active;
  const stepPhase = eng.walkCycle || 0;
  const stepSin = Math.sin(stepPhase);
  const stepCos = Math.cos(stepPhase);
  const strideAmp = isWalking ? Math.min(0.56, 0.34 * Math.pow(speedMult, 0.45)) : 0.12;
  const walkBobY = isWalking
    ? Math.abs(stepSin) * 0.036 * Math.min(1.5, speedMult)
    : Math.sin(nowSec * 2.6) * 0.014;
  const crouchDropY = threeCtx.smoothKneeFlex * 0.22;

  threeCtx.upperBodyGroup.position.x = threeCtx.smoothHipX;
  threeCtx.upperBodyGroup.position.y = walkBobY - crouchDropY;

  const pedalWave = Math.sin(nowSec * 22) * threeCtx.edgeSaveBlend;
  const kneeBendExtra = threeCtx.smoothKneeFlex * 0.95;

  threeCtx.leftLeg.hipGroup.position.x = -0.08 + threeCtx.smoothHipX * 0.65;
  threeCtx.rightLeg.hipGroup.position.x = 0.08 + threeCtx.smoothHipX * 0.65;
  threeCtx.leftLeg.hipGroup.position.y = 0.88 - crouchDropY;
  threeCtx.rightLeg.hipGroup.position.y = 0.88 - crouchDropY;

  const legCounterZ = -threeCtx.smoothHipX * 0.75;
  const leftKickOut =
    angle > 0 ? threeCtx.edgeSaveBlend * (0.28 + Math.abs(pedalWave) * 0.22) : 0;
  const rightKickOut =
    angle < 0 ? -threeCtx.edgeSaveBlend * (0.28 + Math.abs(pedalWave) * 0.22) : 0;

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

  const forwardLean = isWalking ? Math.min(0.24, (speedMult - 1) * 0.14) : 0.04;
  threeCtx.torsoSpineGroup.rotation.z =
    threeCtx.smoothTorsoComp + pedalWave * 0.08;
  threeCtx.torsoSpineGroup.rotation.x =
    0.06 + forwardLean + threeCtx.smoothKneeFlex * 0.18 + threeCtx.edgeSaveBlend * 0.28;

  threeCtx.headGroup.rotation.z = threeCtx.smoothNeckComp;
  threeCtx.headGroup.rotation.x =
    -forwardLean * 0.7 - threeCtx.smoothKneeFlex * 0.14 - threeCtx.edgeSaveBlend * 0.2;

  const isHookPulling =
    (fallSeq.active && fallSeq.mode === 'hook_rescue') || eng.hookActive;
  const armSwing = stepSin * 0.12 * speedMult;
  threeCtx.leftArm.shoulderGroup.rotation.x = -armSwing + pedalWave * 0.55;
  threeCtx.rightArm.shoulderGroup.rotation.x = isHookPulling
    ? -1.35
    : armSwing - pedalWave * 0.55;
  threeCtx.leftArm.shoulderGroup.rotation.z =
    -threeCtx.smoothTorsoComp * 0.4 - threeCtx.edgeSaveBlend * 0.22;
  threeCtx.rightArm.shoulderGroup.rotation.z =
    -threeCtx.smoothTorsoComp * 0.4 + threeCtx.edgeSaveBlend * 0.22;

  threeCtx.leftArm.elbowGroup.rotation.x = threeCtx.edgeSaveBlend * 0.25;
  threeCtx.rightArm.elbowGroup.rotation.x =
    (isHookPulling ? 1.35 : 0) + threeCtx.edgeSaveBlend * 0.25;

  threeCtx.poleGroup.rotation.z = -angle * 0.42 + pedalWave * 0.14;

  const windVal = eng.windForce || 0;
  const ribbonFreq = 10.5 * Math.min(1.6, speedMult);
  threeCtx.ribbonPivot.rotation.y =
    -Math.PI * 0.5 + windVal * 0.78 + Math.sin(nowSec * ribbonFreq) * 0.22;
  threeCtx.ribbonPivot.rotation.z = Math.cos(nowSec * (ribbonFreq * 1.15)) * 0.16;
  threeCtx.ribbonJoint2.rotation.y =
    Math.sin(nowSec * (ribbonFreq * 1.35) - 0.8) * 0.28 + windVal * 0.22;
  threeCtx.ribbonJoint3.rotation.y =
    Math.sin(nowSec * (ribbonFreq * 1.6) - 1.6) * 0.34 + windVal * 0.25;

  threeCtx.backlitBackdrop.position.z = playerZ - 210;
  threeCtx.arrivalGroup.position.set(0, 0, -targetDist - 3.5);
  const pulse = 1 + Math.sin(nowSec * 5) * 0.08;
  threeCtx.beaconRingMesh.scale.set(pulse, pulse, 1);

  for (let i = 0; i < threeCtx.spotlightBeams.length; i++) {
    const bObj = threeCtx.spotlightBeams[i];
    bObj.mesh.rotation.z =
      bObj.baseAngle + Math.sin(nowSec * bObj.speed + bObj.phaseOffset) * 0.14;
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

  if (isHookPulling) {
    threeCtx.grappleLaserLine.visible = true;
    threeCtx.grappleBeamMesh.visible = true;
    threeCtx.grappleAnchor.set(0, fallSeq.ropeTopY || 12, playerZ - 0.5);

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

  // ============================================================================
  // 5. ESFERAS DE MALABARES 3D Y AROS RECEPTORES EN LAS MANOS
  // ============================================================================
  const balls = eng.balls || [];
  let leftReady = false;
  let rightReady = false;

  for (let i = 0; i < balls.length; i++) {
    const b = balls[i];
    if (b.waitingCatch) {
      if (b.targetHand === 'left') leftReady = true;
      if (b.targetHand === 'right') rightReady = true;
    }
  }

  const ringBonusScale =
    1 + (poleCfg.catchRadiusBonus || 0) + (eng.skinObj?.catchWindowBonus || 0);
  threeCtx.leftReceiverRing.position.copy(lPos);
  threeCtx.rightReceiverRing.position.copy(rPos);
  threeCtx.leftReceiverMat.color.setHex(leftReady ? 0xfde047 : skinVis.rimHex);
  threeCtx.rightReceiverMat.color.setHex(rightReady ? 0xfde047 : skinVis.rimHex);
  const lScale = (leftReady ? 1.35 : 0.78) * ringBonusScale;
  const rScale = (rightReady ? 1.35 : 0.78) * ringBonusScale;
  threeCtx.leftReceiverRing.scale.set(lScale, lScale, lScale);
  threeCtx.rightReceiverRing.scale.set(rScale, rScale, rScale);

  for (let i = 0; i < 4; i++) {
    const b = balls[i];
    const orbObj = threeCtx.orbMeshes[i];
    if (!b || fallSeq.active) {
      orbObj.group.visible = false;
      for (let tIdx = 0; tIdx < orbObj.trails.length; tIdx++) {
        orbObj.trails[tIdx].visible = false;
      }
      continue;
    }

    orbObj.group.visible = true;
    const fromHand = b.targetHand === 'right' ? lPos : rPos;
    const toHand = b.targetHand === 'right' ? rPos : lPos;

    const p = Math.max(0, Math.min(1.05, b.progress || 0));
    const arcPeakMeters = 1.48 + (i % 2) * 0.22;
    const ox = fromHand.x + (toHand.x - fromHand.x) * p;
    const oy =
      fromHand.y + (toHand.y - fromHand.y) * p + 4 * arcPeakMeters * p * (1 - p);
    const oz = fromHand.z + (toHand.z - fromHand.z) * p - 0.12 * Math.sin(p * Math.PI);

    orbObj.group.position.set(ox, oy, oz);
    const orbScale = b.waitingCatch ? 1.28 : isFever ? 1.15 : 1.0;
    orbObj.group.scale.set(orbScale, orbScale, orbScale);

    const trailSpacing = isFever || skinVis.goldTrail ? 0.028 : 0.036;
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
  threeCtx.cyanPoleLight.color.setHex(rimHex);
  threeCtx.cyanPoleLight.intensity = isFever ? 6.8 : 4.2;
  threeCtx.goldOrbLight.position.set(0, 2.45, playerZ - 0.25);

  // ============================================================================
  // 6. CÁMARA DINÁMICA EN TERCERA PERSONA + ZOOM DE VISTA PREVIA DE ASPECTOS
  // ============================================================================
  const comboFactor = Math.min(1, (eng.combo || 0) / 14);
  const dangerZone = Math.min(
    1,
    Math.max(0, (absAngle - CRITICAL_ANGLE_RAD * 0.28) / (CRITICAL_ANGLE_RAD * 0.62))
  );
  const tensionFactor = fallSeq.active ? 1.0 : dangerZone;

  const openFov = isSkinPreviewMode ? 46 : 58 + comboFactor * 6;
  const targetFov = openFov * (1 - tensionFactor) + 48 * tensionFactor;

  const openDistZ = isSkinPreviewMode ? 3.25 : 6.2 + comboFactor * 0.55;
  const targetDistZ = openDistZ * (1 - tensionFactor) + 4.95 * tensionFactor;

  const openCamY = isSkinPreviewMode ? 2.15 : 3.38 + comboFactor * 0.16;
  const targetCamY = openCamY * (1 - tensionFactor) + 2.95 * tensionFactor;

  const camLerp = Math.min(1, dt * 5.5);
  threeCtx.dynamicFov += (targetFov - threeCtx.dynamicFov) * camLerp;
  threeCtx.dynamicCamDist += (targetDistZ - threeCtx.dynamicCamDist) * camLerp;
  threeCtx.dynamicCamY += (targetCamY - threeCtx.dynamicCamY) * camLerp;

  if (Math.abs(threeCtx.camera.fov - threeCtx.dynamicFov) > 0.02) {
    threeCtx.camera.fov = threeCtx.dynamicFov;
    threeCtx.camera.updateProjectionMatrix();
  }

  threeCtx.camera.position.set(
    Math.sin(angle) * 0.32,
    threeCtx.dynamicCamY,
    playerZ + threeCtx.dynamicCamDist
  );

  if (fallSeq.active) {
    threeCtx.camera.lookAt(threeCtx.acrobatGroup.position);
  } else if (isSkinPreviewMode) {
    threeCtx.camera.lookAt(0, 1.05, playerZ);
  } else {
    threeCtx.camera.lookAt(
      threeCtx.smoothHipX * 0.35,
      1.65 - threeCtx.smoothKneeFlex * 0.2,
      playerZ - 15
    );
  }

  threeCtx.renderer.render(threeCtx.scene, threeCtx.camera);
}
