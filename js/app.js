/**
 * AFNAN P.C – CINEMATIC VIDEO PORTFOLIO ENGINE
 * Features:
 * - Single Video Playback Guarantee (Auto-pause all other videos)
 * - Inline Card Playback + Cinematic Modal Theater Mode
 * - Category filtering & WhatsApp inquiry handler
 * - Ultra-fast responsive performance
 */

// Embedded fallback data
const FALLBACK_WORKS = [
  {
    "id": "pZK6zT61dG4",
    "title": "UFUQ Event Promo",
    "category": "Commercial & Promos",
    "type": "long",
    "client": "Afnan P.C",
    "aspect": "16:9",
    "thumbnail": "https://i.ytimg.com/vi/pZK6zT61dG4/hqdefault.jpg",
    "youtubeUrl": "https://youtu.be/pZK6zT61dG4",
    "description": "Official promotional campaign video featuring high-impact cinematic pacing, dynamic motion titles, and atmospheric sound design.",
    "tags": ["Premiere Pro", "Sound Design", "Promo"]
  },
  {
    "id": "MU0mm44lkXA",
    "title": "MALABAR: The Resistance Echoes Through History",
    "category": "Documentary & Motion Graphics",
    "type": "long",
    "client": "SIO Kerala",
    "aspect": "16:9",
    "thumbnail": "https://i.ytimg.com/vi/MU0mm44lkXA/hqdefault.jpg",
    "youtubeUrl": "https://youtu.be/MU0mm44lkXA",
    "description": "Narrative documentary project combining archival restoration, historical motion overlays, dramatic voiceover pacing, and cinematic score integration.",
    "tags": ["Documentary", "Motion Graphics", "Sound Design"]
  },
  {
    "id": "d0a3c7AYMDA",
    "title": "Slide Dynamic Presentation",
    "category": "Motion Graphics",
    "type": "long",
    "client": "Afnan P.C",
    "aspect": "16:9",
    "thumbnail": "https://i.ytimg.com/vi/d0a3c7AYMDA/hqdefault.jpg",
    "youtubeUrl": "https://youtu.be/d0a3c7AYMDA",
    "description": "Fluid slide-based graphic animations, seamless wipe transitions, and corporate motion typography.",
    "tags": ["After Effects", "Typography", "Presentation"]
  },
  {
    "id": "hkia-fM9Lc8",
    "title": "Resist Never Rest | Historical Reel",
    "category": "Social Media Reels",
    "type": "short",
    "client": "SIO Kerala",
    "aspect": "9:16",
    "thumbnail": "https://i.ytimg.com/vi/hkia-fM9Lc8/hq2.jpg",
    "youtubeUrl": "https://youtube.com/shorts/hkia-fM9Lc8",
    "description": "High-impact kinetic typography reel with sync-to-voice sound effects, visual grain, and bold typographic emphasis.",
    "tags": ["Reels", "Kinetic Typography", "Sound Sync"]
  },
  {
    "id": "6yok8-93vYI",
    "title": "Hackathon Glimpses Aftermovie",
    "category": "Commercial & Promos",
    "type": "short",
    "client": "Afnan P.C",
    "aspect": "9:16",
    "thumbnail": "https://i.ytimg.com/vi/6yok8-93vYI/hq2.jpg",
    "youtubeUrl": "https://youtube.com/shorts/6yok8-93vYI",
    "description": "High energy event aftermovie short featuring speed ramps, glitch transitions, beat drops, and ambient lighting.",
    "tags": ["Speed Ramp", "Glitch VFX", "Beat Sync"]
  },
  {
    "id": "OvUMdtjHCpc",
    "title": "Tech Hackathon Recap Reel",
    "category": "Social Media Reels",
    "type": "short",
    "client": "Afnan P.C",
    "aspect": "9:16",
    "thumbnail": "https://i.ytimg.com/vi/OvUMdtjHCpc/hq2.jpg",
    "youtubeUrl": "https://youtube.com/shorts/OvUMdtjHCpc",
    "description": "Modern Instagram reel showcasing developers in action with swift camera transitions and overlay graphics.",
    "tags": ["Reels", "Transitions", "Event Cut"]
  },

  {
    "id": "tOOEV2Oe-4Y",
    "title": "Early Bird Commercial Ad Reel",
    "category": "Commercial & Promos",
    "type": "short",
    "client": "Campaign Client",
    "aspect": "9:16",
    "thumbnail": "https://i.ytimg.com/vi/tOOEV2Oe-4Y/hq2.jpg",
    "youtubeUrl": "https://youtube.com/shorts/tOOEV2Oe-4Y",
    "description": "High-conversion marketing ad reel emphasizing urgency, price drops, animated badge stickers, and call to action.",
    "tags": ["Ad Creatives", "Conversion Cut", "Motion Graphic"]
  },
  {
    "id": "O6Qzk6Uom4Y",
    "title": "EID Motion Greeting Poster",
    "category": "Motion Graphics",
    "type": "short",
    "client": "Afnan P.C",
    "aspect": "9:16",
    "thumbnail": "https://i.ytimg.com/vi/O6Qzk6Uom4Y/hq2.jpg",
    "youtubeUrl": "https://youtube.com/shorts/O6Qzk6Uom4Y",
    "description": "Festive celebratory motion piece featuring gold particle simulations, kinetic typography, and cinematic lighting.",
    "tags": ["Motion Poster", "Particles", "Typography"]
  },
  {
    "id": "Q1ksPGvIkwk",
    "title": "Al Meezan Conference Trailer",
    "category": "Commercial & Promos",
    "type": "short",
    "client": "Afnan P.C",
    "aspect": "9:16",
    "thumbnail": "https://i.ytimg.com/vi/Q1ksPGvIkwk/hq2.jpg",
    "youtubeUrl": "https://youtube.com/shorts/Q1ksPGvIkwk",
    "description": "Official conference teaser with clean typography badges, date reveals, and rousing cinematic score.",
    "tags": ["Trailer", "Teaser", "Social Promo"]
  },
  {
    "id": "HDQpvI8yVA8",
    "title": "Musical Rhythm & Color Grade Cut",
    "category": "Video Editing",
    "type": "short",
    "client": "Afnan P.C",
    "aspect": "9:16",
    "thumbnail": "https://i.ytimg.com/vi/HDQpvI8yVA8/hq2.jpg",
    "youtubeUrl": "https://youtube.com/shorts/HDQpvI8yVA8",
    "description": "Creative music video edit demonstrating custom LUT color grading, match cuts, and musical sync.",
    "tags": ["Color Grade", "Music Edit", "Match Cut"]
  },
  {
    "id": "8ggbu9UhwUU",
    "title": "NS0 Visual Sequence",
    "category": "Social Media Reels",
    "type": "short",
    "client": "Afnan P.C",
    "aspect": "9:16",
    "thumbnail": "https://i.ytimg.com/vi/8ggbu9UhwUU/hq2.jpg",
    "youtubeUrl": "https://youtube.com/shorts/8ggbu9UhwUU",
    "description": "Dynamic short form video cut engineered for maximum watch time and scroll-stopping hook.",
    "tags": ["Hooks", "Fast Pacing", "Shorts"]
  },
  {
    "id": "U39q44F3uis",
    "title": "BS01 Brand Showcase",
    "category": "Social Media Reels",
    "type": "short",
    "client": "Afnan P.C",
    "aspect": "9:16",
    "thumbnail": "https://i.ytimg.com/vi/U39q44F3uis/hq2.jpg",
    "youtubeUrl": "https://youtube.com/shorts/U39q44F3uis",
    "description": "Modern vertical video format highlighting branding and product aesthetics.",
    "tags": ["Branding", "Reels", "Commercial"]
  },
  {
    "id": "Z60TkGgf2D4",
    "title": "Campaign Out 2 Motion Cut",
    "category": "Commercial & Promos",
    "type": "short",
    "client": "Afnan P.C",
    "aspect": "9:16",
    "thumbnail": "https://i.ytimg.com/vi/Z60TkGgf2D4/hq2.jpg",
    "youtubeUrl": "https://youtube.com/shorts/Z60TkGgf2D4",
    "description": "Promo reel featuring fast transitions, text tracking, and promotional bumper.",
    "tags": ["Motion", "Promo", "Campaign"]
  },
  {
    "id": "LuWFLoJvI8E",
    "title": "Video02 Campaign Delivery",
    "category": "Commercial & Promos",
    "type": "short",
    "client": "Afnan P.C",
    "aspect": "9:16",
    "thumbnail": "https://i.ytimg.com/vi/LuWFLoJvI8E/hq2.jpg",
    "youtubeUrl": "https://youtube.com/shorts/LuWFLoJvI8E",
    "description": "Final deliverable version with master audio level matching and multi-platform aspect ratio adaptation.",
    "tags": ["Audio Mastering", "Commercial", "Promo"]
  },
  {
    "id": "6mULTVZr04g",
    "title": "Manha Brand Final Reel",
    "category": "Commercial & Promos",
    "type": "short",
    "client": "Afnan P.C",
    "aspect": "9:16",
    "thumbnail": "https://i.ytimg.com/vi/6mULTVZr04g/hq2.jpg",
    "youtubeUrl": "https://youtube.com/shorts/6mULTVZr04g",
    "description": "Custom-edited client reel with luxury color palette, smooth slow motion, and logo animation.",
    "tags": ["Luxury Grade", "Slow Motion", "Client Work"]
  },
  {
    "id": "UkCR8kcL_3g",
    "title": "Interactive Tool Promo",
    "category": "Motion Graphics",
    "type": "short",
    "client": "Showcase",
    "aspect": "9:16",
    "thumbnail": "https://i.ytimg.com/vi/UkCR8kcL_3g/hq2.jpg",
    "youtubeUrl": "https://youtube.com/shorts/UkCR8kcL_3g",
    "description": "Screen recording animated showcase with UI mockups, cursor tracking, and software demo pacing.",
    "tags": ["UI Animation", "Screen Capture", "Product Demo"]
  }
];

let allWorks = FALLBACK_WORKS;
let currentFilter = 'all';
let currentActivePlayerId = null;

// DOM Elements
const grid = document.getElementById('portfolioGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('videoModal');
const modalBox = document.getElementById('modalBox');
const modalIframe = document.getElementById('modalIframe');
const modalVideoTitle = document.getElementById('modalVideoTitle');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const contactForm = document.getElementById('contactForm');

// Initialize Application
async function init() {
  try {
    const res = await fetch('data/works.json');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        allWorks = data;
      }
    }
  } catch (err) {
    console.info('Using fallback dataset (16 projects)');
  }

  renderWorks(currentFilter);
  setupEventListeners();
  setupGlobalAutoPauseListener();
  
  // Initialize Global 3D Universe & Tactile Micro-Tilt
  initMinimalCardTilt();
  initGlobal3DUniverse();
}

/**
 * =========================================================================
 * MINIMAL 3D TACTILE MICRO-TILT & SHEEN
 * =========================================================================
 */
function initMinimalCardTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  
  const cards = document.querySelectorAll('.minimal-tilt');
  cards.forEach(card => {
    // Add specular sheen overlay if not present
    let sheen = card.querySelector('.minimal-sheen');
    if (!sheen) {
      sheen = document.createElement('div');
      sheen.className = 'minimal-sheen';
      card.appendChild(sheen);
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Subtle, tactile micro-tilt (max ±4.5 degrees)
      const rotateX = ((y - centerY) / centerY) * -4.5;
      const rotateY = ((x - centerX) / centerX) * 4.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;

      // Subtle dynamic sheen
      const sheenX = (x / rect.width) * 100;
      const sheenY = (y / rect.height) * 100;
      sheen.style.background = `radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 65%)`;
      sheen.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      if (sheen) sheen.style.opacity = '0';
    });
  });
}

/**
 * =========================================================================
 * GLOBAL 3D CINEMA UNIVERSE (Full-Page Depth & Multi-Section Post-Production Artifacts)
 * =========================================================================
 */
function initGlobal3DUniverse() {
  const canvas = document.getElementById('global3dCanvas');
  if (!canvas || typeof THREE === 'undefined') return;

  // Scene & Camera
  const scene = new THREE.Scene();
  const width = window.innerWidth;
  const height = window.innerHeight;

  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 3500);
  camera.position.set(0, 0, 420);

  // Renderer
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
  } catch (e) {
    return;
  }
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  // Dynamic Multi-Color Studio Lighting (Tracks camera as user scrolls)
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(ambientLight);

  const lightCrimson = new THREE.PointLight(0xef4444, 4.0, 950); // Crimson Key
  lightCrimson.position.set(160, 100, 200);
  scene.add(lightCrimson);

  const lightCyan = new THREE.PointLight(0x00f0ff, 3.6, 950); // Electric Cyan Rim
  lightCyan.position.set(-180, -90, 180);
  scene.add(lightCyan);

  const lightAmber = new THREE.PointLight(0xffb703, 2.4, 850); // Amber Fill
  lightAmber.position.set(0, 180, 140);
  scene.add(lightAmber);

  const lightPurple = new THREE.PointLight(0xa855f7, 2.0, 800); // Violet Ambient
  lightPurple.position.set(-100, 0, 160);
  scene.add(lightPurple);

  // =========================================================================
  // SECTION 1: HERO (Y = 0) — Cinema Keyframe Gemstone & Dual Aperture Rings
  // =========================================================================
  const heroGroup = new THREE.Group();
  scene.add(heroGroup);

  // A. Central Keyframe Diamond Gemstone
  const keyframeGeom = new THREE.IcosahedronGeometry(95, 0);
  const keyframeMat = new THREE.MeshStandardMaterial({
    color: 0x222638,
    metalness: 0.75,
    roughness: 0.25,
    flatShading: true,
    emissive: 0x141424,
    emissiveIntensity: 0.35
  });
  const keyframeMesh = new THREE.Mesh(keyframeGeom, keyframeMat);
  heroGroup.add(keyframeMesh);

  // Inner Pulsing Core
  const coreGeom = new THREE.OctahedronGeometry(48, 0);
  const coreMat = new THREE.MeshBasicMaterial({
    color: 0xff3b5c,
    wireframe: true
  });
  const coreMesh = new THREE.Mesh(coreGeom, coreMat);
  heroGroup.add(coreMesh);

  // Outer Glowing Wireframe Cage
  const wireGeom = new THREE.WireframeGeometry(keyframeGeom);
  const wireMat = new THREE.LineBasicMaterial({
    color: 0xff3355,
    transparent: true,
    opacity: 0.9
  });
  const wireMesh = new THREE.LineSegments(wireGeom, wireMat);
  heroGroup.add(wireMesh);

  // B. Dual Glowing Cinema Aperture Rings
  const ringMat1 = new THREE.MeshStandardMaterial({
    color: 0x3d101a,
    metalness: 0.85,
    roughness: 0.2,
    emissive: 0xef4444,
    emissiveIntensity: 0.65
  });
  const ring1 = new THREE.Mesh(new THREE.TorusGeometry(168, 2.5, 16, 100), ringMat1);
  ring1.rotation.x = Math.PI / 3.2;
  heroGroup.add(ring1);

  const ringMat2 = new THREE.MeshStandardMaterial({
    color: 0x082530,
    metalness: 0.85,
    roughness: 0.2,
    emissive: 0x00f0ff,
    emissiveIntensity: 0.7
  });
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(205, 2.0, 16, 100), ringMat2);
  ring2.rotation.y = -Math.PI / 3.8;
  ring2.rotation.x = Math.PI / 5;
  heroGroup.add(ring2);

  // C. 4 Orbiting 3D Keyframe Diamonds
  const kfColors = [0xef4444, 0x00f0ff, 0xffb703, 0xa855f7];
  const heroKeyframes = [];
  const kfGeom = new THREE.OctahedronGeometry(12, 0);

  for (let i = 0; i < 4; i++) {
    const kfMat = new THREE.MeshStandardMaterial({
      color: kfColors[i],
      emissive: kfColors[i],
      emissiveIntensity: 0.7,
      metalness: 0.9,
      roughness: 0.1
    });
    const kf = new THREE.Mesh(kfGeom, kfMat);
    heroGroup.add(kf);
    heroKeyframes.push({
      mesh: kf,
      radius: 175 + i * 22,
      speed: 0.6 + i * 0.25,
      offsetAngle: (i * Math.PI) / 2
    });
  }

  // =========================================================================
  // SECTION 2: SERVICES (Y = -550) — 3D Three-Way Color Grading Wheels & Prism
  // =========================================================================
  const servicesGroup = new THREE.Group();
  servicesGroup.position.set(0, -550, 0);
  scene.add(servicesGroup);

  const wheelConfigs = [
    { x: -160, color: 0x00e5ff, name: 'Lift' },   // Shadow Teal
    { x: 0,    color: 0xffb703, name: 'Gamma' },  // Midtone Gold
    { x: 160,  color: 0xf72585, name: 'Gain' }    // Highlight Magenta
  ];
  const colorWheels = [];

  wheelConfigs.forEach(cfg => {
    const wheelGroup = new THREE.Group();
    wheelGroup.position.set(cfg.x, 0, 0);

    // Glowing Outer Ring
    const wMat = new THREE.MeshStandardMaterial({
      color: 0x14141e,
      emissive: cfg.color,
      emissiveIntensity: 0.6,
      metalness: 0.8,
      roughness: 0.25
    });
    const wRing = new THREE.Mesh(new THREE.TorusGeometry(48, 1.8, 16, 60), wMat);
    wheelGroup.add(wRing);

    // Center Puck
    const puckMat = new THREE.MeshStandardMaterial({
      color: cfg.color,
      emissive: cfg.color,
      emissiveIntensity: 0.85
    });
    const puck = new THREE.Mesh(new THREE.SphereGeometry(6, 16, 16), puckMat);
    wheelGroup.add(puck);

    servicesGroup.add(wheelGroup);
    colorWheels.push({ group: wheelGroup, puck, baseAngle: cfg.x });
  });

  // Optical Dispersion Prism
  const prismGeom = new THREE.ConeGeometry(36, 52, 3);
  const prismMat = new THREE.MeshStandardMaterial({
    color: 0x181a28,
    emissive: 0x00f0ff,
    emissiveIntensity: 0.4,
    metalness: 0.9,
    roughness: 0.15,
    wireframe: false
  });
  const prismMesh = new THREE.Mesh(prismGeom, prismMat);
  prismMesh.position.set(0, -80, -30);
  servicesGroup.add(prismMesh);

  // =========================================================================
  // SECTION 3: WORKS (Y = -1200) — 3D Aspect Ratio Frames & Keyframes
  // =========================================================================
  const worksGroup = new THREE.Group();
  worksGroup.position.set(0, -1200, 0);
  scene.add(worksGroup);

  // 16:9 Widescreen Wireframe
  const frame169Mat = new THREE.MeshStandardMaterial({
    color: 0x241018,
    emissive: 0xef4444,
    emissiveIntensity: 0.6,
    metalness: 0.8,
    roughness: 0.2
  });
  const frame169 = new THREE.Mesh(new THREE.BoxGeometry(180, 101, 3), frame169Mat);
  frame169.position.set(-150, 0, -20);
  worksGroup.add(frame169);

  // 9:16 Vertical Reel Wireframe
  const frame916Mat = new THREE.MeshStandardMaterial({
    color: 0x082530,
    emissive: 0x00f0ff,
    emissiveIntensity: 0.65,
    metalness: 0.8,
    roughness: 0.2
  });
  const frame916 = new THREE.Mesh(new THREE.BoxGeometry(85, 151, 3), frame916Mat);
  frame916.position.set(160, 0, -20);
  worksGroup.add(frame916);

  // Orbiting crystal between frames
  const worksDiamondMat = new THREE.MeshStandardMaterial({
    color: 0xffb703,
    emissive: 0xffb703,
    emissiveIntensity: 0.8
  });
  const worksDiamond = new THREE.Mesh(new THREE.OctahedronGeometry(18, 0), worksDiamondMat);
  worksGroup.add(worksDiamond);

  // =========================================================================
  // SECTION 4: TOOLKIT (Y = -1800) — 3D Soundwave Frequency Equalizer Bars
  // =========================================================================
  const toolkitGroup = new THREE.Group();
  toolkitGroup.position.set(0, -1800, 0);
  scene.add(toolkitGroup);

  const eqBars = [];
  const numBars = 9;
  for (let i = 0; i < numBars; i++) {
    const isEven = i % 2 === 0;
    const barMat = new THREE.MeshStandardMaterial({
      color: isEven ? 0xef4444 : 0x00f0ff,
      emissive: isEven ? 0xef4444 : 0x00f0ff,
      emissiveIntensity: 0.65,
      metalness: 0.85,
      roughness: 0.2
    });
    const bar = new THREE.Mesh(new THREE.BoxGeometry(10, 48, 10), barMat);
    bar.position.set((i - (numBars - 1) / 2) * 26, 0, 0);
    toolkitGroup.add(bar);
    eqBars.push({ bar, offset: i * 0.7 });
  }

  // Motion Bezier Rings
  const bezierRing = new THREE.Mesh(
    new THREE.TorusGeometry(88, 1.8, 16, 70),
    new THREE.MeshStandardMaterial({ color: 0x181824, emissive: 0xa855f7, emissiveIntensity: 0.5 })
  );
  bezierRing.rotation.x = Math.PI / 2.8;
  toolkitGroup.add(bezierRing);

  // =========================================================================
  // SECTION 5: CONTACT (Y = -2350) — 3D Camera Aperture Iris Mechanism
  // =========================================================================
  const contactGroup = new THREE.Group();
  contactGroup.position.set(0, -2350, 0);
  scene.add(contactGroup);

  const irisBlades = [];
  const numBlades = 6;
  for (let i = 0; i < numBlades; i++) {
    const angle = (i / numBlades) * Math.PI * 2;
    const bladeMat = new THREE.MeshStandardMaterial({
      color: 0x14141c,
      emissive: i % 2 === 0 ? 0xef4444 : 0x00f0ff,
      emissiveIntensity: 0.55,
      metalness: 0.85,
      roughness: 0.25
    });
    const blade = new THREE.Mesh(new THREE.BoxGeometry(42, 9, 2), bladeMat);
    blade.position.set(Math.cos(angle) * 45, Math.sin(angle) * 45, 0);
    blade.rotation.z = angle + Math.PI / 3;
    contactGroup.add(blade);
    irisBlades.push({ blade, baseAngle: angle });
  }

  // Center Beacon Light Core
  const beaconMat = new THREE.MeshStandardMaterial({
    color: 0xffb703,
    emissive: 0xffb703,
    emissiveIntensity: 0.95
  });
  const beaconMesh = new THREE.Mesh(new THREE.SphereGeometry(14, 16, 16), beaconMat);
  contactGroup.add(beaconMesh);

  // =========================================================================
  // FULL-PAGE AMBIENT CINEMATIC DUST MOTES (Y = 150 to -2600)
  // =========================================================================
  const particleCount = 85;
  const particleGeom = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const colorPalette = [
    new THREE.Color(0xef4444), // Crimson
    new THREE.Color(0x00f0ff), // Cyan
    new THREE.Color(0xffb703), // Gold
    new THREE.Color(0xa855f7)  // Purple
  ];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 700;
    positions[i * 3 + 1] = Math.random() * -2700 + 100; // Spanning whole page!
    positions[i * 3 + 2] = (Math.random() - 0.5) * 350;

    const col = colorPalette[i % colorPalette.length];
    colors[i * 3] = col.r;
    colors[i * 3 + 1] = col.g;
    colors[i * 3 + 2] = col.b;
  }

  particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 4.5,
    vertexColors: true,
    transparent: true,
    opacity: 0.85
  });
  const particles = new THREE.Points(particleGeom, particleMat);
  scene.add(particles);

  // =========================================================================
  // SCROLL PROGRESS TRACKER (Glide down 3D Universe smoothly)
  // =========================================================================
  let targetCameraY = 0;
  let currentCameraY = 0;

  function updateScrollProgress() {
    const scrollMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const scrollFraction = Math.min(1, Math.max(0, window.scrollY / scrollMax));
    targetCameraY = -scrollFraction * 2350;
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  // Position Hero 3D cluster around creator card
  function updateLayout() {
    const visualEl = document.querySelector('.hero-visual') || document.querySelector('.creator-card');
    if (visualEl) {
      const cardRect = visualEl.getBoundingClientRect();
      const cardCenterX = (cardRect.left + cardRect.width / 2) - (window.innerWidth / 2);
      const vFov = (camera.fov * Math.PI) / 180;
      const visibleHeight = 2 * Math.tan(vFov / 2) * camera.position.z;
      const visibleWidth = visibleHeight * (window.innerWidth / window.innerHeight);
      const worldX = (cardCenterX / window.innerWidth) * visibleWidth;
      heroGroup.position.set(worldX, 0, -40);
    } else {
      const isDesktop = window.innerWidth >= 992;
      heroGroup.position.set(isDesktop ? 140 : 0, 0, -40);
    }
  }
  updateLayout();

  // Mouse Parallax
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.0007;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.0007;
  }, { passive: true });

  // Animation Loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Smooth lerp mouse tracking
    targetX += (mouseX - targetX) * 0.04;
    targetY += (mouseY - targetY) * 0.04;

    // Smooth camera scroll descent
    currentCameraY += (targetCameraY - currentCameraY) * 0.055;
    camera.position.y = currentCameraY + (-targetY * 30);
    camera.position.x += (targetX * 35 - camera.position.x) * 0.05;
    camera.lookAt(new THREE.Vector3(0, currentCameraY, 0));

    // Studio lights follow the camera smoothly down the page
    lightCrimson.position.y = Math.sin(elapsedTime * 0.6) * 140 + currentCameraY + 90;
    lightCyan.position.y = -Math.cos(elapsedTime * 0.7) * 140 + currentCameraY - 70;
    lightAmber.position.y = Math.cos(elapsedTime * 0.5) * 120 + currentCameraY;
    lightPurple.position.y = Math.sin(elapsedTime * 0.4) * 100 + currentCameraY;

    // 1. Hero Animations
    keyframeMesh.rotation.y = elapsedTime * 0.35 + targetX * 1.5;
    keyframeMesh.rotation.x = Math.sin(elapsedTime * 0.4) * 0.18 + targetY * 1.2;
    wireMesh.rotation.y = keyframeMesh.rotation.y;
    wireMesh.rotation.x = keyframeMesh.rotation.x;

    const corePulse = 1 + Math.sin(elapsedTime * 2.5) * 0.15;
    coreMesh.scale.set(corePulse, corePulse, corePulse);

    ring1.rotation.z = elapsedTime * 0.38;
    ring1.rotation.y = targetX * 0.8;
    ring2.rotation.z = -elapsedTime * 0.32;
    ring2.rotation.x = Math.PI / 5 + targetY * 0.8;

    heroKeyframes.forEach(item => {
      const angle = elapsedTime * item.speed + item.offsetAngle;
      item.mesh.position.set(
        Math.cos(angle) * item.radius,
        Math.sin(angle) * (item.radius * 0.55),
        Math.sin(angle) * 60
      );
      item.mesh.rotation.x = elapsedTime * 1.5;
      item.mesh.rotation.y = elapsedTime * 2.0;
    });

    // 2. Services Animations (Color Wheels)
    colorWheels.forEach((cw, idx) => {
      cw.group.rotation.z = elapsedTime * (0.2 + idx * 0.08);
      cw.puck.position.x = Math.sin(elapsedTime * (1.6 + idx * 0.3)) * 18;
      cw.puck.position.y = Math.cos(elapsedTime * (1.3 + idx * 0.4)) * 18;
    });
    prismMesh.rotation.x = elapsedTime * 0.35;
    prismMesh.rotation.y = elapsedTime * 0.45;

    // 3. Works Animations (Aspect Ratio Frames)
    frame169.rotation.y = elapsedTime * 0.25;
    frame169.rotation.x = Math.sin(elapsedTime * 0.5) * 0.1;
    frame916.rotation.y = -elapsedTime * 0.28;
    frame916.rotation.z = Math.cos(elapsedTime * 0.4) * 0.08;
    worksDiamond.rotation.y = elapsedTime * 0.8;
    worksDiamond.rotation.x = elapsedTime * 0.6;
    worksDiamond.position.y = Math.sin(elapsedTime * 1.8) * 12;

    // 4. Toolkit Animations (Soundwave Beat Fluctuations)
    eqBars.forEach((item, idx) => {
      const beat = Math.abs(Math.sin(elapsedTime * 4.2 + item.offset)) * 2.2 +
                   Math.abs(Math.cos(elapsedTime * 2.0 + idx * 0.4)) * 0.8 + 0.3;
      item.bar.scale.y = beat;
      item.bar.position.y = (beat * 24) / 2 - 24;
    });
    bezierRing.rotation.z = elapsedTime * 0.35;

    // 5. Contact Animations (Aperture Iris Breathing)
    irisBlades.forEach((item, idx) => {
      const breathe = Math.sin(elapsedTime * 2.0) * 0.22;
      item.blade.rotation.z = item.baseAngle + Math.PI / 3 + breathe;
    });
    const beaconPulse = 1 + Math.sin(elapsedTime * 2.2) * 0.12;
    beaconMesh.scale.set(beaconPulse, beaconPulse, beaconPulse);

    // Dust motes drift
    particles.rotation.y = elapsedTime * 0.02;

    renderer.render(scene, camera);
  }

  animate();

  // Resize Handler
  window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
    updateLayout();
    updateScrollProgress();
  });
}

/**
 * =========================================================================
 * 1. SINGLE PLAYBACK MANAGER (Auto-Pause all other videos)
 * =========================================================================
 */
function pauseAllOtherVideos(exceptId) {
  currentActivePlayerId = exceptId;

  // Pause other iframes
  document.querySelectorAll('iframe').forEach(iframe => {
    if (iframe.id !== exceptId) {
      try {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      } catch (e) {}
    }
  });

  // Pause modal if active video is inline
  if (exceptId !== 'modalIframe' && modal && modal.classList.contains('active')) {
    try {
      modalIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    } catch (e) {}
  }

  // Update Visual Card Styles
  document.querySelectorAll('.work-card').forEach(card => {
    const cardIframe = card.querySelector('iframe');
    if (cardIframe && cardIframe.id === exceptId) {
      card.classList.add('is-playing');
    } else {
      card.classList.remove('is-playing');
    }
  });
}

function setupGlobalAutoPauseListener() {
  window.addEventListener('message', (event) => {
    try {
      if (typeof event.data !== 'string') return;
      const data = JSON.parse(event.data);

      const isPlaying = 
        (data.event === 'onStateChange' && data.info === 1) ||
        (data.event === 'infoDelivery' && data.info && data.info.playerState === 1);

      if (isPlaying) {
        document.querySelectorAll('iframe').forEach(iframe => {
          if (iframe.contentWindow === event.source) {
            pauseAllOtherVideos(iframe.id);
          }
        });
      }
    } catch (err) {}
  });
}

/**
 * =========================================================================
 * 2. RENDER PORTFOLIO GRID
 * =========================================================================
 */
function renderWorks(filter) {
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = allWorks.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'long') return item.type === 'long';
    if (filter === 'short') return item.type === 'short';
    if (filter === 'promo') return item.category.includes('Promo') || item.category.includes('Commercial');
    if (filter === 'motion') return item.category.includes('Motion');
    return true;
  });

  filtered.forEach((work, index) => {
    const card = document.createElement('article');
    const isShort = work.type === 'short';
    const cardPlayerId = `inline-player-${work.id}-${index}`;
    card.className = `work-card ${isShort ? 'short-format' : ''}`;
    card.id = `card-${work.id}-${index}`;

    card.innerHTML = `
      <div class="thumb-holder" id="holder-${cardPlayerId}">
        <!-- Thumbnail View -->
        <div class="thumb-cover" id="cover-${cardPlayerId}" onclick="playInline('${cardPlayerId}', '${work.id}', '${work.aspect}')" title="Play Video Inline">
          <img class="thumb-image" src="${work.thumbnail}" alt="${escapeAttr(work.title)}" loading="lazy">
          <div class="play-action-overlay">
            <div class="play-circle">
              <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
          </div>
          <div class="aspect-badge">
            <span>${isShort ? '📱 REEL' : '🎬 16:9'}</span>
          </div>
        </div>

        <!-- Video Container -->
        <div class="inline-video-wrap" id="wrap-${cardPlayerId}" style="display: none;"></div>

        <!-- Quick Theater Expand Button -->
        <button class="expand-card-btn" onclick="openPlayer('${work.id}', '${escapeAttr(work.title)}', '${work.aspect}')" title="Watch Fullscreen / Theater Mode">
          ⛶ Expand
        </button>
      </div>

      <div class="work-info">
        <div class="playing-indicator-pill">
          <span class="sound-wave"><span></span><span></span><span></span></span>
          <span>Now Playing</span>
        </div>
        <span class="work-category-tag">${work.category}</span>
        <h3 class="work-title">${escapeHtml(work.title)}</h3>
        <p class="work-desc">${escapeHtml(work.description)}</p>
        <div class="work-meta">
          <span class="work-client">👤 ${escapeHtml(work.client)}</span>
          <div class="card-action-links">
            <button class="inline-play-text-btn" onclick="playInline('${cardPlayerId}', '${work.id}', '${work.aspect}')">
              ▶ Play Inline
            </button>
            <a class="watch-yt-btn" href="${work.youtubeUrl}" target="_blank" rel="noopener noreferrer">
              YouTube ↗
            </a>
          </div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

/**
 * Play a video inline inside the card
 */
window.playInline = function(cardPlayerId, videoId, aspect) {
  const holder = document.getElementById(`holder-${cardPlayerId}`);
  const cover = document.getElementById(`cover-${cardPlayerId}`);
  const wrap = document.getElementById(`wrap-${cardPlayerId}`);
  if (!holder || !cover || !wrap) return;

  pauseAllOtherVideos(cardPlayerId);

  cover.style.display = 'none';
  wrap.style.display = 'block';

  if (!wrap.querySelector('iframe')) {
    wrap.innerHTML = `
      <iframe 
        id="${cardPlayerId}"
        class="inline-iframe"
        src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    `;
  } else {
    const iframe = wrap.querySelector('iframe');
    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  }

  const card = holder.closest('.work-card');
  if (card) card.classList.add('is-playing');
};

/**
 * Video Player Modal (Theater Mode)
 */
window.openPlayer = function(videoId, title, aspect) {
  if (!modal || !modalIframe) return;

  pauseAllOtherVideos('modalIframe');
  modalVideoTitle.textContent = title;
  
  if (aspect === '9:16') {
    modalBox.classList.add('vertical-mode');
  } else {
    modalBox.classList.remove('vertical-mode');
  }

  modalIframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1`;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

function closePlayer() {
  if (!modal || !modalIframe) return;
  modal.classList.remove('active');
  modalIframe.src = '';
  document.body.style.overflow = '';
  currentActivePlayerId = null;
}

// Event Listeners
function setupEventListeners() {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      pauseAllOtherVideos(null);
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderWorks(currentFilter);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closePlayer);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closePlayer();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closePlayer();
    }
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName')?.value || 'Client';
      const projectType = document.getElementById('projectType')?.value || 'Video Editing';
      const details = document.getElementById('projectDetails')?.value || '';

      const messageText = `Hi Afnan, I saw your portfolio! My name is ${name}. I need help with ${projectType}. Details: ${details}`;
      const whatsappUrl = `https://wa.me/919037747079?text=${encodeURIComponent(messageText)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  const mobileToggle = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '76px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = '#0a0a0c';
        navLinks.style.padding = '20px';
        navLinks.style.borderBottom = '1px solid #272732';
      }
    });
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text || '';
  return div.innerHTML;
}

function escapeAttr(text) {
  return (text || '').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

document.addEventListener('DOMContentLoaded', init);
