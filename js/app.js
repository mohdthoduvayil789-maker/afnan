/**
 * AFNAN P.C – CINEMATIC 3D PORTFOLIO ENGINE
 * Features:
 * - 3D WebGL Hero Canvas (Three.js interactive floating 3D core & particle field)
 * - 3D Physics Tilt & Specular Glare on cards (Vanilla 3D transforms)
 * - Single Video Playback Guarantee (Auto-pause all other videos)
 * - Inline Card Playback + Cinematic Modal Mode
 * - Category filtering & WhatsApp inquiry handler
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
    "description": "Festive celebratory motion piece featuring gold particle simulations, 3D typography, and cinematic lighting.",
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
    console.info('Using fallback dataset (18 projects)');
  }

  renderWorks(currentFilter);
  setupEventListeners();
  setupGlobalAutoPauseListener();
  
  // Initialize 3D Elements
  initGlobal3DCanvas();
  init3DCardTilt();
}

/**
 * =========================================================================
 * 1. CINEMATIC 3D WEBGL ENGINE FOR VIDEO EDITOR PORTFOLIO (Three.js)
 * =========================================================================
 * Custom-crafted 3D universe specifically designed for Afnan P.C's video editing craft:
 * - Multi-color dynamic studio lighting (Electric Cyan, Neon Magenta, Amber Gold, Emerald Green)
 * - Hero: 3D Cinema Film Reel & Lens Hub + 3D Clapperboard + Orbiting Keyframe Crystals + Playhead
 * - Services: 3D Three-Way Color Grading Wheels (Lift, Gamma, Gain) + Optical Dispersion Prism
 * - Works: 3D Twisting Film Strip Ribbon with glowing frames + 16:9 & 9:16 Aspect Ratio wireframes
 * - Toolkit: 3D Soundwave Audio Equalizer Spectrum bars fluctuating rhythmically + AE Bezier handles
 * - Contact: 3D Camera Aperture Iris breathing mechanism + Director Spotlight Beacon
 * - Multi-color Cosmic Dust: 2,000 particles in Cyan, Magenta, Gold, Emerald, Violet & Ice White
 * - Mouse parallax and smooth scroll tracking
 */
function initGlobal3DCanvas() {
  const canvas = document.getElementById('global3dCanvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 4000);
  camera.position.z = 320;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // =========================================================================
  // MULTI-COLOR STUDIO LIGHTING RIG
  // =========================================================================
  const ambientLight = new THREE.AmbientLight(0x1a1a2e, 1.2);
  scene.add(ambientLight);

  const lightCyan = new THREE.PointLight(0x00f2fe, 3.0, 950);
  const lightMagenta = new THREE.PointLight(0xff007f, 3.0, 950);
  const lightAmber = new THREE.PointLight(0xf59e0b, 2.6, 950);
  const lightEmerald = new THREE.PointLight(0x10b981, 2.2, 950);

  scene.add(lightCyan);
  scene.add(lightMagenta);
  scene.add(lightAmber);
  scene.add(lightEmerald);

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.75);
  dirLight.position.set(150, 250, 180);
  scene.add(dirLight);

  // =========================================================================
  // 1. HERO SECTION (Y = 0): 3D CINEMA FILM REEL, CLAPPERBOARD & KEYFRAMES
  // =========================================================================
  const heroGroup = new THREE.Group();
  heroGroup.position.set(window.innerWidth < 992 ? 0 : 85, 0, 0);

  // A. Film Reel & Lens Assembly
  const reelAssembly = new THREE.Group();

  // Outer Film Reel Rim
  const reelRimGeo = new THREE.TorusGeometry(62, 3.4, 16, 80);
  const reelRimMat = new THREE.MeshStandardMaterial({
    color: 0x00f2fe,
    metalness: 0.85,
    roughness: 0.25,
    wireframe: true
  });
  const reelRimMesh = new THREE.Mesh(reelRimGeo, reelRimMat);
  reelAssembly.add(reelRimMesh);

  // Secondary concentric rim
  const innerRimGeo = new THREE.TorusGeometry(48, 1.8, 16, 64);
  const innerRimMat = new THREE.MeshStandardMaterial({
    color: 0xff007f,
    metalness: 0.7,
    roughness: 0.3,
    wireframe: true
  });
  const innerRimMesh = new THREE.Mesh(innerRimGeo, innerRimMat);
  reelAssembly.add(innerRimMesh);

  // Film Reel Center Hub
  const hubGeo = new THREE.CylinderGeometry(18, 18, 4, 32);
  const hubMat = new THREE.MeshStandardMaterial({
    color: 0x181824,
    metalness: 0.9,
    roughness: 0.2
  });
  const hubMesh = new THREE.Mesh(hubGeo, hubMat);
  hubMesh.rotation.x = Math.PI / 2;
  reelAssembly.add(hubMesh);

  const hubRingGeo = new THREE.TorusGeometry(18, 2, 16, 40);
  const hubRingMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    metalness: 0.8,
    roughness: 0.2
  });
  const hubRingMesh = new THREE.Mesh(hubRingGeo, hubRingMat);
  reelAssembly.add(hubRingMesh);

  // Film Reel 5 Spokes
  const spokeGeo = new THREE.CylinderGeometry(1.4, 1.4, 60, 8);
  const spokeMat = new THREE.MeshStandardMaterial({
    color: 0x00f2fe,
    metalness: 0.8,
    roughness: 0.3
  });
  for (let i = 0; i < 5; i++) {
    const spoke = new THREE.Mesh(spokeGeo, spokeMat);
    spoke.rotation.z = (i * Math.PI * 2) / 5;
    reelAssembly.add(spoke);
  }

  // Film Reel Cutout Rings
  const cutoutGeo = new THREE.RingGeometry(5, 8, 20);
  const cutoutMat = new THREE.MeshBasicMaterial({
    color: 0x10b981,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.65
  });
  for (let i = 0; i < 5; i++) {
    const cutout = new THREE.Mesh(cutoutGeo, cutoutMat);
    const angle = (i * Math.PI * 2) / 5 + (Math.PI / 5);
    cutout.position.set(Math.cos(angle) * 33, Math.sin(angle) * 33, 0.5);
    reelAssembly.add(cutout);
  }

  // Optical Camera Lens Core (Glass center)
  const lensGeo = new THREE.SphereGeometry(14, 24, 24);
  const lensMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.1,
    roughness: 0.1,
    transparent: true,
    opacity: 0.85
  });
  const lensMesh = new THREE.Mesh(lensGeo, lensMat);
  reelAssembly.add(lensMesh);

  // Outer Aperture Ring
  const apertureRingGeo = new THREE.RingGeometry(78, 83, 64);
  const apertureRingMat = new THREE.MeshBasicMaterial({
    color: 0xf59e0b,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.55
  });
  const apertureRingMesh = new THREE.Mesh(apertureRingGeo, apertureRingMat);
  reelAssembly.add(apertureRingMesh);

  // Timeline Playhead Indicator hovering above
  const playheadGeo = new THREE.ConeGeometry(7, 13, 3);
  const playheadMat = new THREE.MeshStandardMaterial({
    color: 0xef4444,
    emissive: 0xaa1111,
    roughness: 0.3
  });
  const playheadMesh = new THREE.Mesh(playheadGeo, playheadMat);
  playheadMesh.position.set(0, 78, 0);
  playheadMesh.rotation.z = Math.PI;
  reelAssembly.add(playheadMesh);

  heroGroup.add(reelAssembly);

  // B. 3D Floating Cinema Clapperboard (Film Slate)
  const clapperGroup = new THREE.Group();
  clapperGroup.position.set(-170, -35, 30);
  clapperGroup.rotation.set(0.15, 0.35, -0.1);

  // Slate base board
  const slateBodyGeo = new THREE.BoxGeometry(38, 26, 2.5);
  const slateBodyMat = new THREE.MeshStandardMaterial({
    color: 0x16161f,
    metalness: 0.6,
    roughness: 0.4
  });
  const slateBody = new THREE.Mesh(slateBodyGeo, slateBodyMat);
  clapperGroup.add(slateBody);

  // Slate outline glowing border
  const slateBorderGeo = new THREE.EdgesGeometry(slateBodyGeo);
  const slateBorderMat = new THREE.LineBasicMaterial({ color: 0x00f2fe });
  const slateBorder = new THREE.LineSegments(slateBorderGeo, slateBorderMat);
  clapperGroup.add(slateBorder);

  // Clapper stick (top angled stick)
  const clapperStickGeo = new THREE.BoxGeometry(38, 6, 2.5);
  const clapperStickMat = new THREE.MeshStandardMaterial({
    color: 0x22222e,
    metalness: 0.5,
    roughness: 0.3
  });
  const clapperStick = new THREE.Mesh(clapperStickGeo, clapperStickMat);
  clapperStick.position.set(0, 16, 0);
  clapperStick.rotation.z = 0.32; // Open clapper angle
  clapperGroup.add(clapperStick);

  // Clapper chevron zebra stripes
  for (let s = -2; s <= 2; s++) {
    const stripeGeo = new THREE.BoxGeometry(4.5, 5.8, 2.6);
    const stripeMat = new THREE.MeshBasicMaterial({
      color: s % 2 === 0 ? 0xffffff : 0x00f2fe
    });
    const stripe = new THREE.Mesh(stripeGeo, stripeMat);
    stripe.position.set(s * 7.5, 0, 0);
    clapperStick.add(stripe);
  }

  // Clapper Hinge Pin
  const hingeGeo = new THREE.SphereGeometry(2.2, 12, 12);
  const hingeMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    metalness: 0.9,
    roughness: 0.2
  });
  const hinge = new THREE.Mesh(hingeGeo, hingeMat);
  hinge.position.set(-18, 13, 1.5);
  clapperGroup.add(hinge);

  heroGroup.add(clapperGroup);

  // C. Orbiting 3D Keyframe Crystals (Premiere Pro & After Effects Diamonds)
  const keyframes = [];
  const keyframeConfigs = [
    { color: 0xf59e0b, radius: 115, speed: 0.65, yOffset: 30, size: 10 }, // Amber (Position)
    { color: 0x00f2fe, radius: 100, speed: -0.85, yOffset: -25, size: 8 }, // Cyan (Scale)
    { color: 0xff007f, radius: 125, speed: 0.50, yOffset: -45, size: 9 }, // Magenta (Rotation)
    { color: 0x10b981, radius: 95, speed: -0.70, yOffset: 45, size: 7.5 }  // Emerald (Opacity)
  ];

  keyframeConfigs.forEach(cfg => {
    const kfGroup = new THREE.Group();
    // Inner Solid Keyframe
    const kfGeo = new THREE.OctahedronGeometry(cfg.size, 0);
    const kfMat = new THREE.MeshStandardMaterial({
      color: cfg.color,
      emissive: cfg.color,
      emissiveIntensity: 0.35,
      metalness: 0.7,
      roughness: 0.2
    });
    const kfMesh = new THREE.Mesh(kfGeo, kfMat);
    kfGroup.add(kfMesh);

    // Outer Wireframe Cage
    const cageGeo = new THREE.OctahedronGeometry(cfg.size * 1.35, 0);
    const cageMat = new THREE.MeshBasicMaterial({
      color: cfg.color,
      wireframe: true,
      transparent: true,
      opacity: 0.75
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    kfGroup.add(cageMesh);

    heroGroup.add(kfGroup);
    keyframes.push({ group: kfGroup, config: cfg, kfMesh, cageMesh });
  });

  scene.add(heroGroup);

  // =========================================================================
  // 2. SERVICES SECTION (Y = -500): 3D COLOR GRADING WHEELS (LIFT, GAMMA, GAIN)
  // =========================================================================
  const servicesGroup = new THREE.Group();
  servicesGroup.position.set(0, -500, 0);

  // DaVinci 3-Way Color Wheels
  const colorWheels = [];
  const wheelData = [
    { name: 'Lift (Shadows)', color: 0x00e5ff, x: -175, y: 15, z: -50 },
    { name: 'Gamma (Midtones)', color: 0xf59e0b, x: 0, y: -25, z: -70 },
    { name: 'Gain (Highlights)', color: 0xff007f, x: 175, y: 15, z: -50 }
  ];

  wheelData.forEach(wd => {
    const wheelGroup = new THREE.Group();
    wheelGroup.position.set(wd.x, wd.y, wd.z);

    // Color Ring
    const ringGeo = new THREE.TorusGeometry(32, 2.2, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({
      color: wd.color,
      emissive: wd.color,
      emissiveIntensity: 0.4,
      metalness: 0.8,
      roughness: 0.2
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    wheelGroup.add(ring);

    // Crosshair axis lines
    const axisGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-30, 0, 0), new THREE.Vector3(30, 0, 0),
      new THREE.Vector3(0, -30, 0), new THREE.Vector3(0, 30, 0)
    ]);
    const axisMat = new THREE.LineBasicMaterial({ color: wd.color, transparent: true, opacity: 0.4 });
    const axes = new THREE.LineSegments(axisGeo, axisMat);
    wheelGroup.add(axes);

    // Balance Coordinate Tracker Puck
    const puckGeo = new THREE.SphereGeometry(3.8, 16, 16);
    const puckMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: wd.color,
      emissiveIntensity: 0.6
    });
    const puck = new THREE.Mesh(puckGeo, puckMat);
    puck.position.set(5, 5, 0);
    wheelGroup.add(puck);

    servicesGroup.add(wheelGroup);
    colorWheels.push({ group: wheelGroup, puck, color: wd.color });
  });

  // Optical Dispersion Prism (Refraction element)
  const prismGeo = new THREE.TetrahedronGeometry(28, 0);
  const prismMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.2,
    roughness: 0.1,
    wireframe: true,
    transparent: true,
    opacity: 0.65
  });
  const prismMesh = new THREE.Mesh(prismGeo, prismMat);
  prismMesh.position.set(-190, -40, -40);
  servicesGroup.add(prismMesh);

  scene.add(servicesGroup);

  // =========================================================================
  // 3. WORKS SECTION (Y = -1250): TWISTING 3D FILM STRIP RIBBON & ASPECT RATIOS
  // =========================================================================
  const worksGroup = new THREE.Group();
  worksGroup.position.set(0, -1250, 0);

  // Twisting Film Strip with Multi-Colored Cinematic Frames
  const filmFrames = [];
  const frameColors = [0x00f2fe, 0xff007f, 0xf59e0b, 0x10b981, 0x8b5cf6, 0xec4899, 0x06b6d4, 0xf97316];
  const numFrames = 12;

  for (let i = 0; i < numFrames; i++) {
    const frameGroup = new THREE.Group();
    const t = (i / numFrames) * Math.PI * 2;

    // Frame Outer Dark Border
    const fBorderGeo = new THREE.BoxGeometry(28, 17, 1.2);
    const fBorderMat = new THREE.MeshStandardMaterial({
      color: 0x161622,
      metalness: 0.7,
      roughness: 0.3
    });
    const fBorder = new THREE.Mesh(fBorderGeo, fBorderMat);
    frameGroup.add(fBorder);

    // Frame Luminous Screen (Cinematic color palette)
    const fScreenGeo = new THREE.PlaneGeometry(22, 13);
    const col = frameColors[i % frameColors.length];
    const fScreenMat = new THREE.MeshBasicMaterial({
      color: col,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45
    });
    const fScreen = new THREE.Mesh(fScreenGeo, fScreenMat);
    fScreen.position.z = 0.7;
    frameGroup.add(fScreen);

    // Sprocket perforations on border edges
    const spGeo = new THREE.BoxGeometry(2, 2, 1.4);
    const spMat = new THREE.MeshBasicMaterial({ color: 0x0a0a0f });
    [-9, -3, 3, 9].forEach(spX => {
      const spTop = new THREE.Mesh(spGeo, spMat);
      spTop.position.set(spX, 7, 0);
      frameGroup.add(spTop);
      const spBot = new THREE.Mesh(spGeo, spMat);
      spBot.position.set(spX, -7, 0);
      frameGroup.add(spBot);
    });

    // Position frames along a graceful S-curve helix in 3D
    const curveX = Math.sin(t) * 190;
    const curveY = Math.cos(t * 2) * 55;
    const curveZ = Math.cos(t) * 90 - 70;
    frameGroup.position.set(curveX, curveY, curveZ);
    frameGroup.rotation.set(Math.sin(t) * 0.4, t, Math.cos(t) * 0.3);

    worksGroup.add(frameGroup);
    filmFrames.push(frameGroup);
  }

  // 16:9 Widescreen Cinema Wireframe Frame
  const frame169Geo = new THREE.BoxGeometry(52, 29.25, 2);
  const frame169Mat = new THREE.MeshBasicMaterial({
    color: 0xf59e0b,
    wireframe: true,
    transparent: true,
    opacity: 0.4
  });
  const frame169 = new THREE.Mesh(frame169Geo, frame169Mat);
  frame169.position.set(-185, 20, -50);
  worksGroup.add(frame169);

  // 9:16 Social Reels Wireframe Frame
  const frame916Geo = new THREE.BoxGeometry(22, 39.1, 2);
  const frame916Mat = new THREE.MeshBasicMaterial({
    color: 0x00f2fe,
    wireframe: true,
    transparent: true,
    opacity: 0.4
  });
  const frame916 = new THREE.Mesh(frame916Geo, frame916Mat);
  frame916.position.set(185, -20, -50);
  worksGroup.add(frame916);

  scene.add(worksGroup);

  // =========================================================================
  // 4. TOOLKIT SECTION (Y = -1800): 3D SOUNDWAVE EQUALIZER & MOTION BEZIER
  // =========================================================================
  const toolkitGroup = new THREE.Group();
  toolkitGroup.position.set(0, -1800, 0);

  // 13 3D Audio Frequency Spectrum Bars (Visualizing Sound Design & Beat Sync)
  const eqBars = [];
  const numEqBars = 13;
  const barColors = [
    0x10b981, 0x10b981, 0x00f2fe, 0x00f2fe, 0xf59e0b,
    0xf59e0b, 0xff007f, 0xff007f, 0xf59e0b, 0x00f2fe, 0x00f2fe, 0x10b981, 0x10b981
  ];

  for (let b = 0; b < numEqBars; b++) {
    const barGeo = new THREE.BoxGeometry(4, 28, 4);
    const barMat = new THREE.MeshStandardMaterial({
      color: barColors[b],
      emissive: barColors[b],
      emissiveIntensity: 0.4,
      metalness: 0.8,
      roughness: 0.2
    });
    const bar = new THREE.Mesh(barGeo, barMat);
    const barX = (b - (numEqBars - 1) / 2) * 12;
    bar.position.set(barX, 0, -60);
    toolkitGroup.add(bar);
    eqBars.push(bar);
  }

  // Floating Cyber Dodecahedron (Plugins & VFX Node)
  const dodecGeo = new THREE.DodecahedronGeometry(34, 0);
  const dodecMat = new THREE.MeshStandardMaterial({
    color: 0x8b5cf6,
    metalness: 0.7,
    roughness: 0.3,
    wireframe: true
  });
  const dodecMesh = new THREE.Mesh(dodecGeo, dodecMat);
  dodecMesh.position.set(-180, 0, -70);
  toolkitGroup.add(dodecMesh);

  // Motion Keyframe Diamond
  const toolKfGeo = new THREE.OctahedronGeometry(18, 0);
  const toolKfMat = new THREE.MeshBasicMaterial({
    color: 0xf59e0b,
    wireframe: true
  });
  const toolKf = new THREE.Mesh(toolKfGeo, toolKfMat);
  toolKf.position.set(180, 0, -70);
  toolkitGroup.add(toolKf);

  scene.add(toolkitGroup);

  // =========================================================================
  // 5. CONTACT & FOOTER (Y = -2300): 3D CAMERA APERTURE IRIS & DIRECTOR BEACON
  // =========================================================================
  const contactGroup = new THREE.Group();
  contactGroup.position.set(0, -2300, 0);

  // Concentric Camera Aperture Blades Assembly
  const apertureAssembly = new THREE.Group();
  apertureAssembly.position.set(0, 15, -40);

  const irisBladeGeo = new THREE.BoxGeometry(26, 4, 1.2);
  const irisBladeMat = new THREE.MeshStandardMaterial({
    color: 0x00f2fe,
    metalness: 0.8,
    roughness: 0.2
  });
  const irisBlades = [];
  const numBlades = 8;

  for (let bl = 0; bl < numBlades; bl++) {
    const blade = new THREE.Mesh(irisBladeGeo, irisBladeMat);
    const blAngle = (bl * Math.PI * 2) / numBlades;
    blade.position.set(Math.cos(blAngle) * 32, Math.sin(blAngle) * 32, 0);
    blade.rotation.z = blAngle + Math.PI / 4;
    apertureAssembly.add(blade);
    irisBlades.push({ mesh: blade, baseAngle: blAngle });
  }

  // Floating Central Director Spotlight Lens
  const beaconGeo = new THREE.SphereGeometry(18, 24, 24);
  const beaconMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0x00f2fe,
    emissiveIntensity: 0.4,
    metalness: 0.3,
    roughness: 0.1,
    transparent: true,
    opacity: 0.9
  });
  const beaconMesh = new THREE.Mesh(beaconGeo, beaconMat);
  apertureAssembly.add(beaconMesh);

  // Concentric Outer Spotlight Rings
  const spotRing1Geo = new THREE.TorusGeometry(62, 2.2, 16, 64);
  const spotRing1Mat = new THREE.MeshBasicMaterial({ color: 0xff007f, wireframe: true, transparent: true, opacity: 0.5 });
  const spotRing1 = new THREE.Mesh(spotRing1Geo, spotRing1Mat);
  apertureAssembly.add(spotRing1);

  const spotRing2Geo = new THREE.TorusGeometry(82, 1.8, 16, 64);
  const spotRing2Mat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true, transparent: true, opacity: 0.4 });
  const spotRing2 = new THREE.Mesh(spotRing2Geo, spotRing2Mat);
  spotRing2.rotation.x = Math.PI / 3;
  apertureAssembly.add(spotRing2);

  contactGroup.add(apertureAssembly);
  scene.add(contactGroup);

  // =========================================================================
  // 6. MULTI-COLOR CINEMATIC COSMIC DUST (2,000 Particles)
  // =========================================================================
  const particleCount = 2000;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  const particleColors = new Float32Array(particleCount * 3);

  // 6 Cinematic Palette Types
  const colorPalette = [
    [0.0, 0.95, 1.0],   // Electric Cyan (#00f2fe)
    [1.0, 0.0, 0.5],    // Neon Magenta (#ff007f)
    [0.96, 0.62, 0.04], // Sunset Amber (#f59e0b)
    [0.06, 0.73, 0.5],  // Emerald Green (#10b981)
    [0.55, 0.36, 0.96], // Neon Violet (#8b5cf6)
    [0.92, 0.94, 1.0]   // Ice White (#e0e7ff)
  ];

  for (let i = 0; i < particleCount; i++) {
    const idx = i * 3;
    particlePositions[idx] = (Math.random() - 0.5) * 1150;
    // Spread evenly across scroll height (+400 to -2600)
    particlePositions[idx + 1] = Math.random() * -3000 + 400;
    particlePositions[idx + 2] = (Math.random() - 0.5) * 550;

    const colChoice = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    particleColors[idx] = colChoice[0];
    particleColors[idx + 1] = colChoice[1];
    particleColors[idx + 2] = colChoice[2];
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 2.0,
    vertexColors: true,
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending
  });

  const particleSystem = new THREE.Points(particleGeo, particleMat);
  scene.add(particleSystem);

  // Mouse & Scroll Parallax Tracking
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;
  let targetCameraY = 0;
  let currentCameraY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.0008;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.0008;
  }, { passive: true });

  function updateScrollProgress() {
    const scrollMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const scrollFraction = Math.min(1, Math.max(0, window.scrollY / scrollMax));
    targetCameraY = -scrollFraction * 2300;
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    heroGroup.position.x = width < 992 ? 0 : 85;
    updateScrollProgress();
  });

  // =========================================================================
  // ANIMATION LOOP (Silky 60fps Multi-Color Motion & Beats)
  // =========================================================================
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    currentCameraY += (targetCameraY - currentCameraY) * 0.06;
    camera.position.y = currentCameraY + (-targetY * 35);
    camera.position.x += (targetX * 45 - camera.position.x) * 0.05;
    camera.lookAt(new THREE.Vector3(0, currentCameraY, 0));

    // Dynamic Multi-Color Orbiting Lights
    lightCyan.position.set(
      Math.sin(elapsedTime * 0.7) * 220,
      Math.cos(elapsedTime * 0.5) * 180 + currentCameraY,
      160
    );
    lightMagenta.position.set(
      Math.cos(elapsedTime * 0.6) * 240,
      Math.sin(elapsedTime * 0.8) * 160 + currentCameraY,
      140
    );
    lightAmber.position.set(
      Math.sin(elapsedTime * 0.5) * 190,
      Math.cos(elapsedTime * 0.9) * 210 + currentCameraY,
      130
    );
    lightEmerald.position.set(
      -Math.cos(elapsedTime * 0.7) * 200,
      -Math.sin(elapsedTime * 0.6) * 170 + currentCameraY,
      150
    );

    // 1. Hero Film Reel & Lens Assembly Rotations
    reelAssembly.rotation.z = elapsedTime * 0.45;
    reelAssembly.rotation.y = elapsedTime * 0.35 + targetX * 1.2;
    reelAssembly.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2 + targetY * 0.8;
    apertureRingMesh.rotation.z = -elapsedTime * 0.6;
    const lensPulse = 1 + Math.sin(elapsedTime * 2.5) * 0.08;
    lensMesh.scale.set(lensPulse, lensPulse, lensPulse);

    // Clapperboard Float & Gentle Clap Motion
    clapperGroup.rotation.y = 0.35 + Math.sin(elapsedTime * 1.2) * 0.15 + targetX * 0.8;
    clapperGroup.position.y = -35 + Math.sin(elapsedTime * 1.8) * 6;
    clapperStick.rotation.z = 0.30 + Math.sin(elapsedTime * 2.5) * 0.12;

    // Orbiting Keyframe Crystals
    keyframes.forEach(kf => {
      const cfg = kf.config;
      const angle = elapsedTime * cfg.speed;
      kf.group.position.set(
        Math.cos(angle) * cfg.radius,
        cfg.yOffset + Math.sin(elapsedTime * 1.5 + cfg.radius) * 12,
        Math.sin(angle) * cfg.radius
      );
      kf.kfMesh.rotation.x = elapsedTime * 1.5;
      kf.kfMesh.rotation.y = elapsedTime * 2.0;
      kf.cageMesh.rotation.x = -elapsedTime * 1.0;
      kf.cageMesh.rotation.z = elapsedTime * 1.2;
    });

    // 2. Services: Color Grading Wheels & Optical Prism
    colorWheels.forEach((cw, idx) => {
      cw.group.rotation.z = elapsedTime * (0.2 + idx * 0.05);
      cw.puck.position.x = Math.sin(elapsedTime * (1.5 + idx * 0.3)) * 14;
      cw.puck.position.y = Math.cos(elapsedTime * (1.2 + idx * 0.4)) * 14;
    });
    prismMesh.rotation.x = elapsedTime * 0.3;
    prismMesh.rotation.y = elapsedTime * 0.45;

    // 3. Works: Twisting Film Strip Flow & Aspect Ratio Frames
    filmFrames.forEach((frame, idx) => {
      frame.rotation.z += 0.003;
      frame.position.y += Math.sin(elapsedTime * 2 + idx) * 0.15;
    });
    frame169.rotation.y = elapsedTime * 0.25;
    frame916.rotation.y = -elapsedTime * 0.3;

    // 4. Toolkit: Audio Equalizer Bars Beat Fluctuations
    eqBars.forEach((bar, idx) => {
      const beat = Math.abs(Math.sin(elapsedTime * 4.5 + idx * 0.65)) * 2.2 +
                   Math.abs(Math.cos(elapsedTime * 2.2 + idx * 0.35)) * 0.8 + 0.3;
      bar.scale.y = beat;
      bar.position.y = (beat * 14) / 2 - 14;
    });
    dodecMesh.rotation.x = elapsedTime * 0.3;
    dodecMesh.rotation.y = -elapsedTime * 0.35;
    toolKf.rotation.y = elapsedTime * 0.8;
    toolKf.rotation.z = elapsedTime * 0.6;

    // 5. Contact: Camera Aperture Iris Breathing & Beacon
    irisBlades.forEach((bl, idx) => {
      const breathe = Math.sin(elapsedTime * 2) * 0.18;
      bl.mesh.rotation.z = bl.baseAngle + Math.PI / 4 + breathe;
    });
    spotRing1.rotation.z = elapsedTime * 0.3;
    spotRing2.rotation.z = -elapsedTime * 0.25;
    const beaconPulse = 1 + Math.sin(elapsedTime * 2.2) * 0.1;
    beaconMesh.scale.set(beaconPulse, beaconPulse, beaconPulse);

    // Cosmic Dust Drift
    particleSystem.rotation.y = elapsedTime * 0.015 + targetX * 0.25;

    renderer.render(scene, camera);
  }

  animate();
}


/**
 * =========================================================================
 * 2. 3D CARD TILT & SPECULAR GLARE PHYSICS (Pure Vanilla CSS3D)
 * =========================================================================
 */
function init3DCardTilt() {
  const tiltableElements = document.querySelectorAll('.tilt-3d');

  tiltableElements.forEach(card => {
    // Add specular glare layer if not present
    if (!card.querySelector('.glare-3d')) {
      const glare = document.createElement('div');
      glare.className = 'glare-3d';
      card.appendChild(glare);
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles (-14 to +14 deg)
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

      // Dynamic Glare
      const glare = card.querySelector('.glare-3d');
      if (glare) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%)`;
        glare.style.opacity = '1';
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      const glare = card.querySelector('.glare-3d');
      if (glare) {
        glare.style.opacity = '0';
      }
    });
  });
}

/**
 * =========================================================================
 * 3. SINGLE PLAYBACK MANAGER (Auto-Pause all other videos)
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
 * 4. RENDER PORTFOLIO GRID WITH 3D TILT INTEGRATION
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
    // Add tilt-3d class for 3D physics interaction!
    card.className = `work-card tilt-3d ${isShort ? 'short-format' : ''}`;
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

  // Re-bind 3D tilt to newly rendered cards
  init3DCardTilt();
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

      const messageText = `Hi Afnan, I saw your 3D portfolio! My name is ${name}. I need help with ${projectType}. Details: ${details}`;
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
