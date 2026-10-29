import * as THREE from 'three';

/**
 * Construye en el horizonte 3D (`Z = -totalDistance - 35`) la silueta tridimensional
 * iluminada en neón del monumento emblemático de cada ciudad/país.
 * Se ejecuta únicamente al cambiar de ciudad/nivel (Cero Garbage Collection por frame).
 */
export function populateCityLandmark3D(
  landmarkGroup,
  arrivalToriiGroup,
  monumentType,
  accentHex = 0x00f2fe,
  winHex = 0xfde047
) {
  // Limpiar hijos previos al cambiar de ciudad
  while (landmarkGroup.children.length > 0) {
    landmarkGroup.remove(landmarkGroup.children[0]);
  }
  while (arrivalToriiGroup.children.length > 0) {
    arrivalToriiGroup.remove(arrivalToriiGroup.children[0]);
  }

  const animRefs = {
    londonEyeWheel: null,
    eiffelBeacon: null,
    libertyTorchHalo: null,
    auroraMesh: null,
  };

  const darkMat = new THREE.MeshBasicMaterial({
    color: 0x050b16,
    fog: false,
  });
  const primaryNeonMat = new THREE.MeshBasicMaterial({
    color: accentHex,
    fog: false,
  });
  const secondaryNeonMat = new THREE.MeshBasicMaterial({
    color: winHex,
    fog: false,
  });
  const whiteNeonMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    fog: false,
  });
  const cyanNeonMat = new THREE.MeshBasicMaterial({
    color: 0x00f2fe,
    fog: false,
  });
  const goldNeonMat = new THREE.MeshBasicMaterial({
    color: 0xfde047,
    fog: false,
  });
  const redNeonMat = new THREE.MeshBasicMaterial({
    color: 0xef4444,
    fog: false,
  });

  const addNeonWireBox = (parent, w, h, d, x, y, z, edgeMat = primaryNeonMat) => {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geo, darkMat);
    mesh.position.set(x, y, z);
    const edges = new THREE.EdgesGeometry(geo);
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: edgeMat.color, fog: false })
    );
    mesh.add(line);
    parent.add(mesh);
    return mesh;
  };

  const baseFloorY = -28;

  if (monumentType === 'obelisco') {
    // 🇦🇷 BUENOS AIRES: El Obelisco en celeste y blanco + Puente de la Mujer
    const skyBlueMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, fog: false });
    const shaft = addNeonWireBox(landmarkGroup, 5.2, 68, 5.2, -10, baseFloorY + 34, 0, skyBlueMat);

    // Franjas celeste y blanca verticales del Obelisco
    const stripGeo = new THREE.BoxGeometry(1.1, 66, 5.4);
    const whiteStrip = new THREE.Mesh(stripGeo, whiteNeonMat);
    shaft.add(whiteStrip);

    // Punta piramidal iluminada
    const apexGeo = new THREE.ConeGeometry(3.7, 10, 4);
    apexGeo.rotateY(Math.PI / 4);
    const apexMesh = new THREE.Mesh(apexGeo, whiteNeonMat);
    apexMesh.position.set(-10, baseFloorY + 73, 0);
    landmarkGroup.add(apexMesh);

    // Puente de la Mujer (Mástil inclinado blanco/celeste + pasarela curva)
    const deckGeo = new THREE.BoxGeometry(36, 1.4, 3.2);
    const deckMesh = new THREE.Mesh(deckGeo, skyBlueMat);
    deckMesh.position.set(14, baseFloorY + 12, 2);
    landmarkGroup.add(deckMesh);

    const mastGeo = new THREE.CylinderGeometry(0.45, 0.9, 42, 10);
    const mastMesh = new THREE.Mesh(mastGeo, whiteNeonMat);
    mastMesh.position.set(12, baseFloorY + 28, 2);
    mastMesh.rotation.z = -0.46;
    landmarkGroup.add(mastMesh);

    for (let i = 0; i < 6; i++) {
      const cableGeo = new THREE.CylinderGeometry(0.08, 0.08, 24 + i * 2, 6);
      const cable = new THREE.Mesh(cableGeo, skyBlueMat);
      cable.position.set(16 + i * 2.2, baseFloorY + 21, 2);
      cable.rotation.z = 0.55 + i * 0.06;
      landmarkGroup.add(cable);
    }
  } else if (monumentType === 'cristo') {
    // 🇧🇷 RÍO DE JANEIRO: El Cristo Redentor con los brazos abiertos sobre el morro e iluminación de reflectores
    const mountGeo = new THREE.ConeGeometry(28, 44, 7);
    const mountMesh = new THREE.Mesh(mountGeo, darkMat);
    mountMesh.position.set(0, baseFloorY + 14, 0);
    const mountEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(mountGeo),
      new THREE.LineBasicMaterial({ color: 0x22c55e, fog: false })
    );
    mountMesh.add(mountEdges);
    landmarkGroup.add(mountMesh);

    // Pedestal
    addNeonWireBox(landmarkGroup, 7, 10, 7, 0, baseFloorY + 39, 0, goldNeonMat);

    // Cuerpo y túnica del Cristo
    const body = addNeonWireBox(landmarkGroup, 6.2, 26, 4.2, 0, baseFloorY + 57, 0, whiteNeonMat);
    const robeGlow = new THREE.Mesh(
      new THREE.BoxGeometry(3.8, 25, 4.4),
      new THREE.MeshBasicMaterial({ color: 0xe0f2fe, fog: false })
    );
    body.add(robeGlow);

    // Brazos extendidos abiertos de par en par
    const armsGeo = new THREE.BoxGeometry(32, 3.2, 3.0);
    const armsMesh = new THREE.Mesh(armsGeo, whiteNeonMat);
    armsMesh.position.set(0, baseFloorY + 64, 0);
    landmarkGroup.add(armsMesh);

    // Cabeza inclinada y halo
    const headGeo = new THREE.SphereGeometry(2.6, 14, 14);
    const headMesh = new THREE.Mesh(headGeo, whiteNeonMat);
    headMesh.position.set(0, baseFloorY + 72.5, 0.5);
    landmarkGroup.add(headMesh);

    // Reflectores apuntando hacia el Cristo
    const beamGeo = new THREE.ConeGeometry(12, 55, 16, 1, true);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0x4ade80,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
      fog: false,
    });
    const leftBeam = new THREE.Mesh(beamGeo, beamMat);
    leftBeam.position.set(-14, baseFloorY + 46, 2);
    leftBeam.rotation.z = -0.35;
    landmarkGroup.add(leftBeam);

    const rightBeam = new THREE.Mesh(beamGeo, beamMat);
    rightBeam.position.set(14, baseFloorY + 46, 2);
    rightBeam.rotation.z = 0.35;
    landmarkGroup.add(rightBeam);
  } else if (monumentType === 'liberty_empire') {
    // 🇺🇸 NUEVA YORK: Estatua de la Libertad con antorcha en alto + Aguja del Empire State
    // Estatua de la Libertad (Izquierda)
    addNeonWireBox(landmarkGroup, 11, 20, 11, -16, baseFloorY + 10, 0, cyanNeonMat);
    addNeonWireBox(landmarkGroup, 6.5, 28, 5.5, -16, baseFloorY + 34, 0, cyanNeonMat);

    const crownHead = new THREE.Mesh(new THREE.SphereGeometry(2.8, 12, 12), cyanNeonMat);
    crownHead.position.set(-16, baseFloorY + 50, 0);
    landmarkGroup.add(crownHead);

    // 7 rayos de la corona
    for (let s = -3; s <= 3; s++) {
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.35, 3.6, 6), cyanNeonMat);
      spike.position.set(-16 + s * 0.9, baseFloorY + 53, 0);
      spike.rotation.z = -s * 0.22;
      landmarkGroup.add(spike);
    }

    // Brazo derecho levantado sosteniendo la antorcha luminosa
    const raisedArm = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.9, 14, 8), cyanNeonMat);
    raisedArm.position.set(-12.5, baseFloorY + 54, 0);
    raisedArm.rotation.z = -0.25;
    landmarkGroup.add(raisedArm);

    const torchFlame = new THREE.Mesh(new THREE.SphereGeometry(2.2, 16, 16), goldNeonMat);
    torchFlame.position.set(-10.8, baseFloorY + 62, 0);
    landmarkGroup.add(torchFlame);

    const torchHalo = new THREE.Mesh(
      new THREE.SphereGeometry(5.2, 16, 16),
      new THREE.MeshBasicMaterial({
        color: 0xfde047,
        transparent: true,
        opacity: 0.42,
        blending: THREE.AdditiveBlending,
        fog: false,
      })
    );
    torchHalo.position.copy(torchFlame.position);
    landmarkGroup.add(torchHalo);
    animRefs.libertyTorchHalo = torchHalo;

    // Empire State Building (Derecha)
    addNeonWireBox(landmarkGroup, 14, 52, 12, 15, baseFloorY + 26, -2, cyanNeonMat);
    addNeonWireBox(landmarkGroup, 9.5, 18, 9, 15, baseFloorY + 61, -2, cyanNeonMat);
    addNeonWireBox(landmarkGroup, 5.5, 12, 5.5, 15, baseFloorY + 76, -2, goldNeonMat);
    const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.9, 24, 10), whiteNeonMat);
    spire.position.set(15, baseFloorY + 94, -2);
    landmarkGroup.add(spire);
  } else if (monumentType === 'eiffel') {
    // 🇫🇷 PARÍS: Torre Eiffel con silueta reticulada en neón ámbar/dorado y haz de luz giratorio en la cima
    const amberMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24, fog: false });
    const legOffsets = [
      [-11, -6],
      [11, -6],
      [-11, 6],
      [11, 6],
    ];
    for (let i = 0; i < legOffsets.length; i++) {
      const [lx, lz] = legOffsets[i];
      const legGeo = new THREE.CylinderGeometry(1.1, 2.4, 30, 8);
      const leg = new THREE.Mesh(legGeo, amberMat);
      leg.position.set(lx * 0.72, baseFloorY + 14, lz * 0.72);
      leg.rotation.z = lx < 0 ? -0.24 : 0.24;
      landmarkGroup.add(leg);
    }

    // 1er y 2do nivel de plataforma
    addNeonWireBox(landmarkGroup, 20, 3.2, 14, 0, baseFloorY + 28, 0, goldNeonMat);
    addNeonWireBox(landmarkGroup, 12, 24, 9, 0, baseFloorY + 42, 0, amberMat);
    addNeonWireBox(landmarkGroup, 14, 2.6, 10, 0, baseFloorY + 54, 0, goldNeonMat);

    // Aguja reticulada superior
    const upperTower = new THREE.Mesh(
      new THREE.CylinderGeometry(1.2, 4.8, 34, 4, 4, true),
      new THREE.MeshBasicMaterial({ color: 0xfde047, wireframe: true, fog: false })
    );
    upperTower.position.set(0, baseFloorY + 72, 0);
    upperTower.rotation.y = Math.PI / 4;
    landmarkGroup.add(upperTower);

    // Faro giratorio en la cima
    const beaconPivot = new THREE.Group();
    beaconPivot.position.set(0, baseFloorY + 90, 0);
    const beamCone = new THREE.ConeGeometry(9, 75, 16, 1, true);
    beamCone.translate(0, -37.5, 0);
    beamCone.rotateZ(Math.PI / 2);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xfef08a,
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
      fog: false,
    });
    const beam1 = new THREE.Mesh(beamCone, beamMat);
    const beam2 = new THREE.Mesh(beamCone, beamMat);
    beam2.rotation.y = Math.PI;
    beaconPivot.add(beam1);
    beaconPivot.add(beam2);
    landmarkGroup.add(beaconPivot);
    animRefs.eiffelBeacon = beaconPivot;
  } else if (monumentType === 'tokyotower') {
    // 🇯🇵 TOKIO: Torre de Tokio en neón rojo/blanco + Gran Arco Torii japonés sobre la azotea de llegada
    const tiers = [
      { y: 14, rBot: 11, rTop: 7, h: 28, mat: redNeonMat },
      { y: 38, rBot: 7, rTop: 4.5, h: 20, mat: whiteNeonMat },
      { y: 56, rBot: 4.5, rTop: 2.4, h: 16, mat: redNeonMat },
      { y: 71, rBot: 2.4, rTop: 0.8, h: 14, mat: whiteNeonMat },
      { y: 84, rBot: 0.8, rTop: 0.2, h: 14, mat: redNeonMat },
    ];
    for (let i = 0; i < tiers.length; i++) {
      const t = tiers[i];
      const geo = new THREE.CylinderGeometry(t.rTop, t.rBot, t.h, 4, 2, true);
      const mesh = new THREE.Mesh(
        geo,
        new THREE.MeshBasicMaterial({
          color: t.mat.color,
          wireframe: true,
          fog: false,
        })
      );
      mesh.position.set(0, baseFloorY + t.y, 0);
      mesh.rotation.y = Math.PI / 4;
      landmarkGroup.add(mesh);
    }

    // Gran Arco Torii luminoso sobre la azotea de llegada (`arrivalToriiGroup`)
    const pillarGeo = new THREE.CylinderGeometry(0.24, 0.28, 6.2, 12);
    const leftPillar = new THREE.Mesh(pillarGeo, redNeonMat);
    leftPillar.position.set(-2.5, 3.1, 2.2);
    arrivalToriiGroup.add(leftPillar);

    const rightPillar = new THREE.Mesh(pillarGeo, redNeonMat);
    rightPillar.position.set(2.5, 3.1, 2.2);
    arrivalToriiGroup.add(rightPillar);

    const kasagiTop = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.42, 0.55), redNeonMat);
    kasagiTop.position.set(0, 6.2, 2.2);
    arrivalToriiGroup.add(kasagiTop);

    const kasagiGoldTrim = new THREE.Mesh(new THREE.BoxGeometry(7.5, 0.16, 0.6), goldNeonMat);
    kasagiGoldTrim.position.set(0, 6.48, 2.2);
    arrivalToriiGroup.add(kasagiGoldTrim);

    const nukiCrossbar = new THREE.Mesh(new THREE.BoxGeometry(5.8, 0.28, 0.38), redNeonMat);
    nukiCrossbar.position.set(0, 4.9, 2.2);
    arrivalToriiGroup.add(nukiCrossbar);
  } else if (monumentType === 'pyramids') {
    // 🇪🇬 EL CAIRO: Las Tres Grandes Pirámides de Giza con aristas doradas brillantes
    const pyrConfigs = [
      { x: 0, z: -4, r: 26, h: 48 },
      { x: -24, z: 4, r: 19, h: 36 },
      { x: 24, z: 6, r: 16, h: 30 },
    ];
    for (let i = 0; i < pyrConfigs.length; i++) {
      const p = pyrConfigs[i];
      const geo = new THREE.ConeGeometry(p.r, p.h, 4);
      geo.rotateY(Math.PI / 4);
      const mesh = new THREE.Mesh(geo, darkMat);
      mesh.position.set(p.x, baseFloorY + p.h * 0.5, p.z);
      const edges = new THREE.EdgesGeometry(geo);
      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: 0xfde047, fog: false })
      );
      mesh.add(line);

      // Punta piramidión dorada incandescente
      const capGeo = new THREE.ConeGeometry(p.r * 0.22, p.h * 0.22, 4);
      capGeo.rotateY(Math.PI / 4);
      const capMesh = new THREE.Mesh(capGeo, goldNeonMat);
      capMesh.position.set(0, p.h * 0.39, 0);
      mesh.add(capMesh);

      landmarkGroup.add(mesh);
    }
  } else if (monumentType === 'londoneye') {
    // 🇬🇧 LONDRES: Torre del reloj Big Ben + Gran aro luminoso del London Eye girando suavemente
    // Big Ben (Izquierda)
    addNeonWireBox(landmarkGroup, 7.5, 54, 7.5, -18, baseFloorY + 27, 0, goldNeonMat);
    addNeonWireBox(landmarkGroup, 8.6, 8.6, 8.6, -18, baseFloorY + 58, 0, goldNeonMat);

    // Esfera luminosa del reloj Big Ben
    const clockFace = new THREE.Mesh(
      new THREE.CylinderGeometry(3.2, 3.2, 0.5, 20),
      goldNeonMat
    );
    clockFace.rotation.x = Math.PI / 2;
    clockFace.position.set(-18, baseFloorY + 58, 4.4);
    landmarkGroup.add(clockFace);

    const belfrySpire = new THREE.Mesh(new THREE.ConeGeometry(5.2, 16, 4), goldNeonMat);
    belfrySpire.rotation.y = Math.PI / 4;
    belfrySpire.position.set(-18, baseFloorY + 70, 0);
    landmarkGroup.add(belfrySpire);

    // London Eye (Derecha)
    const wheelGroup = new THREE.Group();
    wheelGroup.position.set(14, baseFloorY + 42, 0);

    const rimMesh = new THREE.Mesh(
      new THREE.TorusGeometry(21, 0.65, 12, 48),
      cyanNeonMat
    );
    wheelGroup.add(rimMesh);

    for (let i = 0; i < 12; i++) {
      const ang = (i / 12) * Math.PI * 2;
      const spoke = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.12, 42, 6),
        cyanNeonMat
      );
      spoke.rotation.z = ang;
      wheelGroup.add(spoke);

      const pod = new THREE.Mesh(new THREE.SphereGeometry(1.15, 10, 10), whiteNeonMat);
      pod.position.set(Math.cos(ang) * 21, Math.sin(ang) * 21, 0);
      wheelGroup.add(pod);
    }

    landmarkGroup.add(wheelGroup);
    animRefs.londonEyeWheel = wheelGroup;
  } else if (monumentType === 'burjkhalifa') {
    // 🇦🇪 DUBÁI: Aguja gigante del Burj Khalifa atravesando las nubes con anillos de luz cian
    const setbacks = [
      { w: 15, h: 24, y: 12 },
      { w: 12, h: 24, y: 36 },
      { w: 9, h: 22, y: 59 },
      { w: 6.2, h: 22, y: 81 },
      { w: 3.6, h: 20, y: 102 },
      { w: 1.5, h: 24, y: 124 },
    ];
    for (let i = 0; i < setbacks.length; i++) {
      const s = setbacks[i];
      addNeonWireBox(landmarkGroup, s.w, s.h, s.w, 0, baseFloorY + s.y, 0, cyanNeonMat);
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(s.w * 0.68, 0.32, 10, 28),
        i % 2 === 0 ? cyanNeonMat : goldNeonMat
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.set(0, baseFloorY + s.y + s.h * 0.5, 0);
      landmarkGroup.add(ring);
    }
  } else if (monumentType === 'opera') {
    // 🇦🇺 SÍDNEY: Las velas curvas de la Ópera de Sídney iluminadas en neón + Harbour Bridge
    addNeonWireBox(landmarkGroup, 44, 6, 14, 0, baseFloorY + 12, 0, goldNeonMat);
    const sailPositions = [-14, -6, 3, 12];
    for (let i = 0; i < sailPositions.length; i++) {
      const sx = sailPositions[i];
      const sailH = 22 + (i % 2) * 8;
      const sailGeo = new THREE.ConeGeometry(6.5, sailH, 4);
      const sail = new THREE.Mesh(sailGeo, whiteNeonMat);
      sail.position.set(sx, baseFloorY + 15 + sailH * 0.45, 2);
      sail.rotation.z = -0.28;
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(sailGeo),
        new THREE.LineBasicMaterial({ color: 0x00f2fe, fog: false })
      );
      sail.add(edges);
      landmarkGroup.add(sail);
    }

    // Arco del Harbour Bridge detrás
    const archGeo = new THREE.TorusGeometry(30, 0.85, 10, 36, Math.PI);
    const archMesh = new THREE.Mesh(archGeo, cyanNeonMat);
    archMesh.position.set(0, baseFloorY + 14, -8);
    landmarkGroup.add(archMesh);
  } else if (monumentType === 'stbasil') {
    // 🇷🇺 MOSCÚ: Las cúpulas bulbosas de San Basilio con estrellas luminosas en las puntas
    const domes = [
      { x: 0, h: 48, r: 5.2, mat: redNeonMat },
      { x: -12, h: 36, r: 4.2, mat: cyanNeonMat },
      { x: 12, h: 36, r: 4.2, mat: goldNeonMat },
      { x: -22, h: 28, r: 3.5, mat: goldNeonMat },
      { x: 22, h: 28, r: 3.5, mat: cyanNeonMat },
    ];
    for (let i = 0; i < domes.length; i++) {
      const d = domes[i];
      addNeonWireBox(landmarkGroup, d.r * 1.4, d.h, d.r * 1.4, d.x, baseFloorY + d.h * 0.5, 0, d.mat);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(d.r, 16, 16), d.mat);
      bulb.scale.set(1, 1.25, 1);
      bulb.position.set(d.x, baseFloorY + d.h + d.r * 0.8, 0);
      landmarkGroup.add(bulb);

      const spireTip = new THREE.Mesh(new THREE.ConeGeometry(d.r * 0.45, 7, 8), goldNeonMat);
      spireTip.position.set(d.x, baseFloorY + d.h + d.r * 2.1, 0);
      landmarkGroup.add(spireTip);

      // Estrella luminosa en la punta
      const star = new THREE.Mesh(new THREE.OctahedronGeometry(1.6, 0), goldNeonMat);
      star.position.set(d.x, baseFloorY + d.h + d.r * 2.1 + 4.5, 0);
      landmarkGroup.add(star);
    }
  } else if (monumentType === 'marinabay') {
    // 🇸🇬 SINGAPUR: 3 Torres Marina Bay Sands + SkyPark Ship en la cima
    const towerXs = [-16, 0, 16];
    for (let i = 0; i < towerXs.length; i++) {
      addNeonWireBox(landmarkGroup, 7.5, 58, 7, towerXs[i], baseFloorY + 29, 0, cyanNeonMat);
    }
    const skyparkShip = new THREE.Mesh(new THREE.BoxGeometry(46, 3.8, 10), goldNeonMat);
    skyparkShip.position.set(2, baseFloorY + 60, 0);
    landmarkGroup.add(skyparkShip);
  } else if (monumentType === 'swiss_alps') {
    // 🇨🇭 ALPES SUIZOS VIP: Cumbres alpinas + Teleférico + Aurora Boreal
    const leftPeak = new THREE.Mesh(new THREE.ConeGeometry(24, 65, 5), darkMat);
    leftPeak.position.set(-20, baseFloorY + 32, -4);
    leftPeak.add(
      new THREE.LineSegments(
        new THREE.EdgesGeometry(leftPeak.geometry),
        new THREE.LineBasicMaterial({ color: 0x38bdf8, fog: false })
      )
    );
    landmarkGroup.add(leftPeak);

    const rightPeak = new THREE.Mesh(new THREE.ConeGeometry(26, 72, 5), darkMat);
    rightPeak.position.set(20, baseFloorY + 36, -4);
    rightPeak.add(
      new THREE.LineSegments(
        new THREE.EdgesGeometry(rightPeak.geometry),
        new THREE.LineBasicMaterial({ color: 0x4ade80, fog: false })
      )
    );
    landmarkGroup.add(rightPeak);

    // Cortina de Aurora Boreal verde/cian en el cielo
    const auroraGeo = new THREE.PlaneGeometry(76, 32, 16, 4);
    const auroraMat = new THREE.MeshBasicMaterial({
      color: 0x4ade80,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
      fog: false,
    });
    const auroraMesh = new THREE.Mesh(auroraGeo, auroraMat);
    auroraMesh.position.set(0, baseFloorY + 78, -8);
    landmarkGroup.add(auroraMesh);
    animRefs.auroraMesh = auroraMesh;
  } else {
    // Puentes colgantes y Torres de Observación Emblemáticas para el resto de ciudades
    addNeonWireBox(landmarkGroup, 10, 62, 10, -16, baseFloorY + 31, 0, primaryNeonMat);
    addNeonWireBox(landmarkGroup, 10, 62, 10, 16, baseFloorY + 31, 0, primaryNeonMat);

    const podSphere = new THREE.Mesh(
      new THREE.SphereGeometry(6.2, 16, 16),
      secondaryNeonMat
    );
    podSphere.position.set(0, baseFloorY + 62, 0);
    landmarkGroup.add(podSphere);

    const centerTower = addNeonWireBox(
      landmarkGroup,
      5.5,
      78,
      5.5,
      0,
      baseFloorY + 39,
      0,
      secondaryNeonMat
    );
    const antenna = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25, 0.8, 22, 8),
      whiteNeonMat
    );
    antenna.position.set(0, 48, 0);
    centerTower.add(antenna);

    const bridgeDeck = new THREE.Mesh(
      new THREE.BoxGeometry(48, 1.8, 4),
      primaryNeonMat
    );
    bridgeDeck.position.set(0, baseFloorY + 24, 2);
    landmarkGroup.add(bridgeDeck);
  }

  return animRefs;
}
