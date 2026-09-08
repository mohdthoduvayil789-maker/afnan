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
    "id": "4zoGQV5MFn8",
    "title": "Let AI Create - Visual Exploration",
    "category": "AI Video Production",
    "type": "short",
    "client": "Afnan P.C",
    "aspect": "9:16",
    "thumbnail": "https://i.ytimg.com/vi/4zoGQV5MFn8/hq2.jpg",
    "youtubeUrl": "https://youtube.com/shorts/4zoGQV5MFn8",
    "description": "Cutting-edge AI-generated video sequence utilizing Midjourney, Runway Gen-2 and neural sound synthesis.",
    "tags": ["AI Video", "Runway Gen-2", "Generative Art"]
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
 * 1. GLOBAL THREE.JS 3D WEBGL ENGINE (Interactive Full-Page Background)
 * =========================================================================
 * Continuous 3D universe with section-aligned geometric clusters:
 * - Hero: Central 3D motion graphics core (Torus, Icosahedron, Orbiting rings)
 * - Services: Floating wireframe octahedrons & rotating 3D cubes
 * - Works: Floating cinematic prism & neon rings
 * - Toolkit: Cyber wireframe dodecahedron & orbital ring
 * - Contact & Footer: Glowing energy beacon sphere with concentric orbiting rings
 * - Universal Particle Galaxy: 2,400+ particles spanning top to bottom
 * - Responsive scroll-interpolated camera path & interactive mouse parallax
 */
function initGlobal3DCanvas() {
  const canvas = document.getElementById('global3dCanvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 4000);
  camera.position.z = 300;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // =========================================================================
  // 1. HERO 3D CORE (Y = 0)
  // =========================================================================
  const heroGroup = new THREE.Group();
  heroGroup.position.set(window.innerWidth < 992 ? 0 : 85, 0, 0);

  const torusGeo = new THREE.TorusGeometry(60, 4, 16, 100);
  const torusMat = new THREE.MeshBasicMaterial({ color: 0xef4444, wireframe: true, transparent: true, opacity: 0.65 });
  const torusMesh = new THREE.Mesh(torusGeo, torusMat);
  heroGroup.add(torusMesh);

  const icoGeo = new THREE.IcosahedronGeometry(38, 1);
  const icoMat = new THREE.MeshBasicMaterial({ color: 0xff3b30, wireframe: true, transparent: true, opacity: 0.8 });
  const icoMesh = new THREE.Mesh(icoGeo, icoMat);
  heroGroup.add(icoMesh);

  const sphereGeo = new THREE.SphereGeometry(16, 16, 16);
  const sphereMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.95 });
  const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
  heroGroup.add(sphereMesh);

  const ringGeo = new THREE.RingGeometry(80, 84, 64);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
  const ringMesh = new THREE.Mesh(ringGeo, ringMat);
  heroGroup.add(ringMesh);

  scene.add(heroGroup);

  // =========================================================================
  // 2. SERVICES 3D ACCENTS (Minimal & Ambient, Y = -500)
  // =========================================================================
  const servicesGroup = new THREE.Group();
  servicesGroup.position.set(0, -500, 0);

  const octGeo = new THREE.OctahedronGeometry(32, 0);
  const octMat = new THREE.MeshBasicMaterial({ color: 0xef4444, wireframe: true, transparent: true, opacity: 0.22 });
  const octMesh = new THREE.Mesh(octGeo, octMat);
  octMesh.position.set(-180, 10, -70);
  servicesGroup.add(octMesh);

  const boxGeo = new THREE.BoxGeometry(34, 34, 34);
  const boxMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true, transparent: true, opacity: 0.20 });
  const boxMesh = new THREE.Mesh(boxGeo, boxMat);
  boxMesh.position.set(180, -10, -70);
  servicesGroup.add(boxMesh);

  scene.add(servicesGroup);

  // =========================================================================
  // 3. WORKS / PORTFOLIO SECTION (Minimal Subtle Framing, Y = -1250)
  // =========================================================================
  const worksGroup = new THREE.Group();
  worksGroup.position.set(0, -1250, 0);

  const prismGeo = new THREE.TetrahedronGeometry(38, 0);
  const prismMat = new THREE.MeshBasicMaterial({ color: 0xef4444, wireframe: true, transparent: true, opacity: 0.20 });
  const prismMesh = new THREE.Mesh(prismGeo, prismMat);
  prismMesh.position.set(-190, 0, -80);
  worksGroup.add(prismMesh);

  const workRingGeo = new THREE.TorusGeometry(46, 2, 16, 64);
  const workRingMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true, transparent: true, opacity: 0.18 });
  const workRingMesh = new THREE.Mesh(workRingGeo, workRingMat);
  workRingMesh.position.set(190, 0, -80);
  worksGroup.add(workRingMesh);

  scene.add(worksGroup);

  // =========================================================================
  // 4. TOOLKIT / SKILLS SECTION (Minimal Tech Node, Y = -1800)
  // =========================================================================
  const toolkitGroup = new THREE.Group();
  toolkitGroup.position.set(0, -1800, 0);

  const dodecGeo = new THREE.DodecahedronGeometry(35, 0);
  const dodecMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6, wireframe: true, transparent: true, opacity: 0.22 });
  const dodecMesh = new THREE.Mesh(dodecGeo, dodecMat);
  dodecMesh.position.set(-175, 0, -70);
  toolkitGroup.add(dodecMesh);

  scene.add(toolkitGroup);

  // =========================================================================
  // 5. CONTACT & FOOTER (BOTTOM) (Minimal Soft Beacon & Ring, Y = -2300)
  // =========================================================================
  const contactGroup = new THREE.Group();
  contactGroup.position.set(0, -2300, 0);

  const beaconGeo = new THREE.SphereGeometry(16, 16, 16);
  const beaconMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55 });
  const beaconMesh = new THREE.Mesh(beaconGeo, beaconMat);
  beaconMesh.position.set(0, 15, -30);
  contactGroup.add(beaconMesh);

  const bottomRingGeo = new THREE.RingGeometry(62, 65, 64);
  const bottomRingMat = new THREE.MeshBasicMaterial({ color: 0xef4444, side: THREE.DoubleSide, transparent: true, opacity: 0.25 });
  const bottomRingMesh = new THREE.Mesh(bottomRingGeo, bottomRingMat);
  bottomRingMesh.position.set(0, 15, -30);
  bottomRingMesh.rotation.x = Math.PI / 3;
  contactGroup.add(bottomRingMesh);

  scene.add(contactGroup);

  // =========================================================================
  // 6. MINIMAL AMBIENT PARTICLE GALAXY (1,600 Delicate Particles)
  // =========================================================================
  const particleCount = 1600;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  const particleColors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    particlePositions[i] = (Math.random() - 0.5) * 1100;
    // Spread evenly across scroll height (+400 to -2600)
    particlePositions[i + 1] = Math.random() * -3000 + 400;
    particlePositions[i + 2] = (Math.random() - 0.5) * 500;

    const rType = Math.random();
    if (rType > 0.55) {
      particleColors[i] = 0.94; particleColors[i + 1] = 0.27; particleColors[i + 2] = 0.27; // Soft Red
    } else if (rType > 0.25) {
      particleColors[i] = 0.96; particleColors[i + 1] = 0.62; particleColors[i + 2] = 0.04; // Soft Gold
    } else {
      particleColors[i] = 0.95; particleColors[i + 1] = 0.95; particleColors[i + 2] = 0.95; // Soft White
    }
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 1.6,
    vertexColors: true,
    transparent: true,
    opacity: 0.55,
    blending: THREE.AdditiveBlending
  });

  const particleSystem = new THREE.Points(particleGeo, particleMat);
  scene.add(particleSystem);

  // Mouse & Scroll Parallax Variables
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;
  let targetCameraY = 0;
  let currentCameraY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.0008;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.0008;
  });

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

  // Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    targetX += (mouseX - targetX) * 0.04;
    targetY += (mouseY - targetY) * 0.04;

    currentCameraY += (targetCameraY - currentCameraY) * 0.06;
    camera.position.y = currentCameraY + (-targetY * 35);
    camera.position.x += (targetX * 45 - camera.position.x) * 0.04;
    camera.lookAt(new THREE.Vector3(0, currentCameraY, 0));

    // 1. Hero Rotations (Keeps premium centerpiece energy)
    torusMesh.rotation.x = elapsedTime * 0.45;
    torusMesh.rotation.y = elapsedTime * 0.35 + targetX * 1.2;
    icoMesh.rotation.x = -elapsedTime * 0.55 + targetY * 1.2;
    icoMesh.rotation.y = elapsedTime * 0.75 + targetX * 1.2;
    ringMesh.rotation.x = 1.2 + Math.sin(elapsedTime * 0.6) * 0.2;
    ringMesh.rotation.y = elapsedTime * 0.25;
    const heroPulse = 1 + Math.sin(elapsedTime * 3) * 0.1;
    sphereMesh.scale.set(heroPulse, heroPulse, heroPulse);

    // 2. Services Minimal Rotations (Calm & slow)
    octMesh.rotation.x = elapsedTime * 0.3;
    octMesh.rotation.y = elapsedTime * 0.35;
    boxMesh.rotation.x = -elapsedTime * 0.25;
    boxMesh.rotation.z = elapsedTime * 0.2;

    // 3. Works Subtle Margins Rotations
    prismMesh.rotation.y = elapsedTime * 0.35;
    prismMesh.rotation.z = elapsedTime * 0.2;
    workRingMesh.rotation.y = elapsedTime * 0.25;

    // 4. Toolkit Minimal Rotation
    dodecMesh.rotation.x = elapsedTime * 0.25;
    dodecMesh.rotation.y = -elapsedTime * 0.3;

    // 5. Contact Soft Beacon
    bottomRingMesh.rotation.z = elapsedTime * 0.2;
    const bottomPulse = 1 + Math.sin(elapsedTime * 2) * 0.1;
    beaconMesh.scale.set(bottomPulse, bottomPulse, bottomPulse);

    // Gentle particle drift
    particleSystem.rotation.y = elapsedTime * 0.01 + targetX * 0.2;

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
    if (filter === 'motion') return item.category.includes('Motion') || item.category.includes('AI');
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
