import * as THREE from 'three';
import { CITIES } from './gameData';
import { populateCityLandmark3D } from './landmarks3D';

export const CRITICAL_ANGLE_RAD = 0.82; // ~47 degrees critical fall angle

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

  // Grupo para el Arco Torii luminoso de Tokio en la azotea de llegada
  const arrivalToriiGroup = new THREE.Group();
  arrivalGroup.add(arrivalToriiGroup);

  arrivalGroup.position.set(0, 0, -100);
  scene.add(arrivalGroup);

  // BLOQUE 5: Grupo del Monumento 3D Icónico en el horizonte (`Z = -totalDistance - 35`)
  const landmarkGroup = new THREE.Group();
  landmarkGroup.position.set(0, 0, -135);
  scene.add(landmarkGroup);

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

  // Pool de partículas climáticas 3D recicladas (`THREE.Points`, cero GC)
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

  // Acróbata en silueta negra mate (`0x06080e`) + Rim Light
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

  // BLOQUE 2: Vara de Equilibrio en 3D con geometría y neón dinámicos según `BALANCE_POLES`
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

  const tipGeo = new THREE.SphereGeometry(0.058, 14, 14);
  const poleTipMat = new THREE.MeshBasicMaterial({ color: 0x00f2fe });
  const leftTipMesh = new THREE.Mesh(tipGeo, poleTipMat);
  leftTipMesh.position.set(-poleLen * 0.5, 0, 0);
  poleGroup.add(leftTipMesh);

  const rightTipMesh = new THREE.Mesh(tipGeo, poleTipMat);
  rightTipMesh.position.set(poleLen * 0.5, 0, 0);
  poleGroup.add(rightTipMesh);

  // Aros giroscópicos 3D para las barras Gyro, Quantum e Imperial
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

  // Esferas doradas incandescentes con estela de luz
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
    vectorSilhouetteMat,
    dorsalStripMat,
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
    activeCityIndex: -1,
  };
}

export function updateAndRenderThreeScene(threeCtx, eng, dt) {
  if (!threeCtx) return;

  const playerZ = -eng.distance;
  const angle = eng.angle;
  const absAngle = Math.abs(angle);
  const tiltRatio = Math.min(1, absAngle / CRITICAL_ANGLE_RAD);
  const speedMult = eng.walkSpeedMultiplier || 1.0;

  // ============================================================================
  // BLOQUE 4 y 5: IDENTIDAD CLIMÁTICA Y MONUMENTOS 3D ICÓNICOS POR CIUDAD
  // ============================================================================
  const city = eng.cfg?.city || CITIES[0];
  const landmarkKey = `${city.id || city.index}_${city.monument}_${eng.targetDistance}`;

  if (threeCtx.activeLandmarkKey !== landmarkKey) {
    threeCtx.activeLandmarkKey = landmarkKey;
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

  // Posicionar el monumento icónico en el horizonte (`Z = -totalDistance - 35`)
  threeCtx.landmarkGroup.position.set(0, 0, -eng.targetDistance - 35);

  // Animación suave de monumentos (London Eye giratorio, Faro Eiffel, Antorcha Libertad, Aurora)
  if (threeCtx.landmarkAnimRefs) {
    if (threeCtx.landmarkAnimRefs.londonEyeWheel) {
      threeCtx.landmarkAnimRefs.londonEyeWheel.rotation.z += dt * 0.22;
    }
    if (threeCtx.landmarkAnimRefs.eiffelBeacon) {
      threeCtx.landmarkAnimRefs.eiffelBeacon.rotation.y += dt * 1.4;
    }
    if (threeCtx.landmarkAnimRefs.libertyTorchHalo) {
      const s = 1 + Math.sin(eng.time * 6) * 0.18;
      threeCtx.landmarkAnimRefs.libertyTorchHalo.scale.set(s, s, s);
    }
    if (threeCtx.landmarkAnimRefs.auroraMesh) {
      threeCtx.landmarkAnimRefs.auroraMesh.position.x = Math.sin(eng.time * 0.9) * 4.5;
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
  // BLOQUE 2 y 3: GEOMETRÍA Y NEÓN DE LA BARRA EQUIPADA + ASPECTO (SKIN)
  // ============================================================================
  const isFever = eng.isFeverMode;
  const poleCfg = eng.poleObj || {};
  const skinCfg = eng.skinObj || {};

  const skinRimHex = skinCfg.rimHex || 0x00f2fe;
  const hasGoldTrail = Boolean(skinCfg.goldTrail || isFever);

  threeCtx.vectorSilhouetteMat.uniforms.uRimStrength.value =
    isFever || skinCfg.goldTrail ? 1.65 : 1.05;
  threeCtx.vectorSilhouetteMat.uniforms.uRimColor.value.setHex(
    hasGoldTrail && Math.sin(eng.time * 16) > -0.2 ? 0xfde047 : skinRimHex
  );
  threeCtx.dorsalStripMat.opacity = isFever || skinCfg.goldTrail ? 0.95 : 0.52;
  threeCtx.dorsalStripMat.color.setHex(hasGoldTrail ? 0xfde047 : skinRimHex);

  // Actualizar largo 3D y colores de neón de la Vara de Equilibrio equipada
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
    threeCtx.leftGyroRing.rotation.x = eng.time * 7.5;
    threeCtx.leftGyroRing.rotation.y = eng.time * 5.2;
    threeCtx.rightGyroRing.rotation.x = -eng.time * 7.5;
    threeCtx.rightGyroRing.rotation.y = -eng.time * 5.2;
  }

  // ============================================================================
  // CINEMÁTICA CORPORAL FLUIDA + CAÍDA 3D + RESCATE CON GANCHO
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
    threeCtx.acrobatGroup.position.set(eng.fallPosX, eng.fallPosY, playerZ);
    threeCtx.acrobatGroup.rotation.z = -angle * 1.35;
    threeCtx.acrobatGroup.rotation.x = eng.fallTumbleX;
  } else if (eng.grappleRescueTimer > 0) {
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

  let leftReady = false;
  let rightReady = false;
  for (let i = 0; i < eng.jugglePool.length; i++) {
    const b = eng.jugglePool[i];
    if (b.active && b.phase >= eng.catchThreshold) {
      if (b.targetHand === 'L') leftReady = true;
      if (b.targetHand === 'R') rightReady = true;
    }
  }

  const ringBonusScale = 1 + (poleCfg.catchRadiusBonus || 0);
  threeCtx.leftReceiverRing.position.copy(lPos);
  threeCtx.rightReceiverRing.position.copy(rPos);
  threeCtx.leftReceiverMat.color.setHex(leftReady ? 0xfde047 : 0x00f2fe);
  threeCtx.rightReceiverMat.color.setHex(rightReady ? 0xfde047 : 0x00f2fe);
  const lScale = (leftReady ? 1.32 : 0.78) * ringBonusScale;
  const rScale = (rightReady ? 1.32 : 0.78) * ringBonusScale;
  threeCtx.leftReceiverRing.scale.set(lScale, lScale, lScale);
  threeCtx.rightReceiverRing.scale.set(rScale, rScale, rScale);

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

    const trailSpacing = isFever || skinCfg.goldTrail ? 0.028 : 0.036;
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
