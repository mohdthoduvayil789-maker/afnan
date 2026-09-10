/**
 * AFNAN P.C — MULTI-PAGE CREATIVE ENGINE
 * - Universal SVG Circular Loader
 * - 3D Front/Back Mode Transition Engine (Home)
 * - Desktop Project Index with Live Hover Previews
 * - Fluid Magnetic Custom Cursor with Contextual States
 * - Ambient Deep Space Canvas
 * - Interactive Project Inquiry Lab & WhatsApp Generator (Contact)
 * - Live Asia/Kolkata Studio Clock
 * - Responsive 16:9 & 9:16 Theater Video Modal
 */

// Fallback dataset of Afnan Portfolio's 16 video projects
const FALLBACK_WORKS = [
  {
    "id": "pZK6zT61dG4",
    "title": "UFUQ Event Promo",
    "category": "Commercial & Promos",
    "type": "long",
    "client": "Afnan P.C Portfolio",
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
    "client": "Afnan P.C Portfolio",
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
    "client": "Afnan P.C Portfolio",
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
    "client": "Afnan P.C Portfolio",
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
    "client": "Afnan P.C Portfolio",
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
    "client": "Afnan P.C Portfolio",
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
    "client": "Afnan P.C Portfolio",
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
    "client": "Afnan P.C Portfolio",
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
    "client": "Afnan P.C Portfolio",
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
    "client": "Afnan P.C Portfolio",
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
    "client": "Afnan P.C Portfolio",
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
    "client": "Afnan P.C Portfolio",
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
let currentFeaturedIndex = 0;
let currentMatrixFilter = 'all';
let isBackMode = false;

// Global Elements
const body = document.body;
const loaderOverlay = document.getElementById('loaderOverlay');
const loaderPercent = document.getElementById('loaderPercent');
const loaderMaskCircle = document.getElementById('loaderMaskCircle');

const copyEmailBtn = document.getElementById('copyEmailBtn');
const footerEmailBtn = document.getElementById('footerEmailBtn');
const copyToast = document.getElementById('copyToast');

const customCursor = document.getElementById('customCursor');
const cursorCircle = customCursor ? customCursor.querySelector('.cursor-circle') : null;
const cursorDot = customCursor ? customCursor.querySelector('.cursor-dot') : null;
const cursorText = document.getElementById('cursorText');

// Theater Modal Elements
const theaterModal = document.getElementById('theaterModal');
const theaterBackdrop = document.getElementById('theaterBackdrop');
const theaterWindow = document.getElementById('theaterWindow');
const theaterCloseBtn = document.getElementById('theaterCloseBtn');
const theaterIframe = document.getElementById('theaterIframe');
const theaterTitle = document.getElementById('theaterTitle');
const theaterAspectTag = document.getElementById('theaterAspectTag');
const theaterYtLink = document.getElementById('theaterYtLink');
const theaterWaBtn = document.getElementById('theaterWaBtn');
const theaterClientInfo = document.getElementById('theaterClientInfo');

/**
 * =========================================================================
 * 1. APP INITIALIZATION & LOADER
 * =========================================================================
 */
async function init() {
  try {
    const res = await fetch('data/works.json');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        allWorks = data;
      }
    }
  } catch (e) {}

  // Global Systems
  setupCursor();
  setupAmbientCanvas();
  setupGlobalListeners();
  runLoaderAnimation();

  // Page 1 (Home) Specific Setup
  if (document.getElementById('faceFront')) {
    setupHomePage();
  }

  // Page 3 (Contact & Lab) Specific Setup
  if (document.getElementById('deliverableChips')) {
    setupInquiryLabPage();
  }
}

function runLoaderAnimation() {
  let progress = 0;
  const duration = 1000;
  const startTime = performance.now();

  function updateLoader(currentTime) {
    const elapsed = currentTime - startTime;
    progress = Math.min(100, Math.floor((elapsed / duration) * 100));

    if (loaderPercent) loaderPercent.textContent = progress;

    if (loaderMaskCircle) {
      const scale = progress / 100;
      loaderMaskCircle.style.transform = `scale(${Math.max(0.01, scale)})`;
    }

    if (progress < 100) {
      requestAnimationFrame(updateLoader);
    } else {
      setTimeout(() => {
        document.documentElement.classList.remove('is-loading');
        document.documentElement.classList.add('is-loaded');
      }, 150);
    }
  }

  requestAnimationFrame(updateLoader);
}

/**
 * =========================================================================
 * 2. HOME PAGE ENGINE (3D Front/Back Modes & Index)
 * =========================================================================
 */
function setupHomePage() {
  const modeToggleBtn = document.getElementById('modeToggleBtn');
  const modeToggleBtnBack = document.getElementById('modeToggleBtnBack');
  const backReturnBtn = document.getElementById('backReturnBtn');
  const heroExploreBtn = document.getElementById('heroExploreBtn');
  const featuredCard = document.getElementById('featuredCard');
  const filterGroup = document.getElementById('filterGroup');

  updateFeaturedCard(0);
  renderIndexList();
  renderMatrixGrid('all');

  function setBackMode(active) {
    isBackMode = active;
    if (isBackMode) {
      body.classList.remove('mode-front');
      body.classList.add('mode-back');
      if (modeToggleBtn) modeToggleBtn.classList.add('active-back');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      body.classList.remove('mode-back');
      body.classList.add('mode-front');
      if (modeToggleBtn) modeToggleBtn.classList.remove('active-back');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  if (modeToggleBtn) modeToggleBtn.addEventListener('click', () => setBackMode(!isBackMode));
  if (modeToggleBtnBack) modeToggleBtnBack.addEventListener('click', () => setBackMode(false));
  if (backReturnBtn) backReturnBtn.addEventListener('click', () => setBackMode(false));
  if (heroExploreBtn) heroExploreBtn.addEventListener('click', () => setBackMode(true));

  // Auto-flip if URL has #matrix
  if (window.location.hash === '#matrix') {
    setBackMode(true);
  }

  if (featuredCard) {
    featuredCard.addEventListener('click', () => {
      const item = allWorks[currentFeaturedIndex];
      if (item) openTheater(item.id, item.title, item.aspect, item.client, item.youtubeUrl);
    });
  }

  if (filterGroup) {
    filterGroup.querySelectorAll('.back-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filterGroup.querySelectorAll('.back-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter') || 'all';
        renderMatrixGrid(filter);
      });
    });
  }
}

function updateFeaturedCard(index) {
  if (!allWorks[index]) return;
  currentFeaturedIndex = index;
  const item = allWorks[index];

  const featuredImg = document.getElementById('featuredImg');
  const featuredTitle = document.getElementById('featuredTitle');
  const featuredDesc = document.getElementById('featuredDesc');
  const featuredCategory = document.getElementById('featuredCategory');
  const featuredAspectBadge = document.getElementById('featuredAspectBadge');

  if (featuredImg) featuredImg.src = item.thumbnail;
  if (featuredTitle) featuredTitle.textContent = item.title;
  if (featuredDesc) featuredDesc.textContent = item.description;
  if (featuredCategory) featuredCategory.textContent = item.category;
  if (featuredAspectBadge) {
    featuredAspectBadge.textContent = item.aspect === '9:16' ? '9:16 REEL' : '16:9 CINEMA';
  }
}

function renderIndexList() {
  const indexList = document.getElementById('indexList');
  const indexPreviewBox = document.getElementById('indexPreviewBox');
  const indexPreviewImg = document.getElementById('indexPreviewImg');
  const indexPreviewBadge = document.getElementById('indexPreviewBadge');
  const indexPreviewCaption = document.getElementById('indexPreviewCaption');
  if (!indexList) return;

  indexList.innerHTML = '';
  allWorks.forEach((item, index) => {
    const li = document.createElement('li');
    const num = (index + 1).toString().padStart(2, '0');
    
    const a = document.createElement('a');
    a.className = `index-item-link ${index === currentFeaturedIndex ? 'active' : ''}`;
    a.setAttribute('data-cursor', 'VIEW');
    a.innerHTML = `<span class="index-item-num">${num}</span> <span>${escapeHtml(item.title)}</span>`;

    a.addEventListener('mouseenter', () => {
      updateFeaturedCard(index);
      if (indexPreviewBox && indexPreviewImg) {
        indexPreviewImg.src = item.thumbnail;
        if (indexPreviewBadge) indexPreviewBadge.textContent = item.aspect;
        if (indexPreviewCaption) indexPreviewCaption.textContent = item.title;
        indexPreviewBox.classList.add('is-visible');
      }
      document.querySelectorAll('.index-item-link').forEach(el => el.classList.remove('active'));
      a.classList.add('active');
    });

    a.addEventListener('mouseleave', () => {
      if (indexPreviewBox) indexPreviewBox.classList.remove('is-visible');
    });

    a.addEventListener('click', (e) => {
      e.preventDefault();
      openTheater(item.id, item.title, item.aspect, item.client, item.youtubeUrl);
    });

    li.appendChild(a);
    indexList.appendChild(li);
  });
}

function renderMatrixGrid(filter) {
  const matrixGrid = document.getElementById('matrixGrid');
  if (!matrixGrid) return;
  matrixGrid.innerHTML = '';

  const filtered = allWorks.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'long') return item.type === 'long';
    if (filter === 'short') return item.type === 'short';
    if (filter === 'promo') return item.category.includes('Promo') || item.category.includes('Commercial') || item.category.includes('Trailer');
    if (filter === 'motion') return item.category.includes('Motion');
    return true;
  });

  filtered.forEach(item => {
    const isShort = item.type === 'short';
    const card = document.createElement('article');
    card.className = `matrix-card ${isShort ? 'format-short' : ''}`;
    const tagsHtml = (item.tags || []).map(t => `<span class="matrix-tag">${escapeHtml(t)}</span>`).join('');

    card.innerHTML = `
      <div class="matrix-thumb-holder">
        <img class="matrix-thumb-img" src="${item.thumbnail}" alt="${escapeAttr(item.title)}" loading="lazy">
        <div class="matrix-aspect-badge">${isShort ? '9:16 REEL' : '16:9 CINEMA'}</div>
        <div class="matrix-action-layer">
          <button type="button" class="matrix-play-btn" onclick="openTheater('${item.id}', '${escapeAttr(item.title)}', '${item.aspect}', '${escapeAttr(item.client)}', '${item.youtubeUrl}')" data-cursor="PLAY">
            ▶ Play Video
          </button>
        </div>
      </div>
      <div class="matrix-card-info">
        <span class="matrix-category">${escapeHtml(item.category)}</span>
        <h3 class="matrix-card-title">${escapeHtml(item.title)}</h3>
        <p class="matrix-card-desc">${escapeHtml(item.description)}</p>
        <div class="matrix-tags-row">
          ${tagsHtml}
        </div>
        <div class="matrix-card-bottom">
          <span class="matrix-client">Client: ${escapeHtml(item.client)}</span>
          <a class="matrix-yt-link" href="${item.youtubeUrl}" target="_blank" rel="noopener noreferrer" data-cursor="YT">
            YouTube ↗
          </a>
        </div>
      </div>
    `;
    matrixGrid.appendChild(card);
  });

  bindCursorListeners();
}

/**
 * =========================================================================
 * 3. PAGE 3: INTERACTIVE PROJECT INQUIRY LAB ENGINE
 * =========================================================================
 */
function setupInquiryLabPage() {
  let selectedFormat = 'YouTube 4K Long-Form';
  let selectedSpeed = 'Standard Production (4-6 Days)';
  
  const deliverableChips = document.getElementById('deliverableChips');
  const speedChips = document.getElementById('speedChips');
  const briefPreview = document.getElementById('briefPreview');
  const clientNameInput = document.getElementById('clientNameInput');
  const clientRefInput = document.getElementById('clientRefInput');
  const sendWhatsappBtn = document.getElementById('sendWhatsappBtn');
  const sendEmailBtn = document.getElementById('sendEmailBtn');
  const studioClock = document.getElementById('studioClock');

  function updateBrief() {
    if (!briefPreview) return;
    const clientName = clientNameInput ? clientNameInput.value.trim() || 'Creative Partner' : 'Creative Partner';
    const clientRef = clientRefInput ? clientRefInput.value.trim() : '';

    const selectedAddons = [];
    document.querySelectorAll('.lab-addon-checkbox:checked').forEach(cb => {
      selectedAddons.push(`• ${cb.value}`);
    });

    const brief = [
      `PROJECT CONFIGURATION // AFNAN P.C PORTFOLIO STUDIO`,
      `Client / Brand: ${clientName}`,
      `Deliverable: ${selectedFormat}`,
      `Timeline: ${selectedSpeed}`,
      `Key Add-ons:\n${selectedAddons.length > 0 ? selectedAddons.join('\n') : '• Core Post-Production Assembly'}`,
      clientRef ? `Reference / Raw Footage: ${clientRef}` : null
    ].filter(Boolean).join('\n\n');

    briefPreview.textContent = brief;
    return brief;
  }

  // Chip selection listeners
  if (deliverableChips) {
    deliverableChips.querySelectorAll('.lab-chip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        deliverableChips.querySelectorAll('.lab-chip-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedFormat = btn.getAttribute('data-value') || 'YouTube 4K Long-Form';
        updateBrief();
      });
    });
  }

  if (speedChips) {
    speedChips.querySelectorAll('.lab-chip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        speedChips.querySelectorAll('.lab-chip-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedSpeed = btn.getAttribute('data-value') || 'Standard Production';
        updateBrief();
      });
    });
  }

  // Add-on and input listeners
  document.querySelectorAll('.lab-addon-checkbox').forEach(cb => {
    cb.addEventListener('change', updateBrief);
  });

  if (clientNameInput) clientNameInput.addEventListener('input', updateBrief);
  if (clientRefInput) clientRefInput.addEventListener('input', updateBrief);

  // Dispatch Actions
  if (sendWhatsappBtn) {
    sendWhatsappBtn.addEventListener('click', () => {
      const briefText = updateBrief();
      const waUrl = `https://wa.me/919037747079?text=${encodeURIComponent(briefText)}`;
      window.open(waUrl, '_blank');
    });
  }

  if (sendEmailBtn) {
    sendEmailBtn.addEventListener('click', () => {
      const briefText = updateBrief();
      const mailtoUrl = `mailto:afnanpc3@gmail.com?subject=Project%20Inquiry%20-%20${encodeURIComponent(selectedFormat)}&body=${encodeURIComponent(briefText)}`;
      window.location.href = mailtoUrl;
    });
  }

  // Live Studio Clock (Asia/Kolkata UTC+5:30)
  function updateClock() {
    if (!studioClock) return;
    const now = new Date();
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    studioClock.textContent = new Intl.DateTimeFormat('en-US', options).format(now);
  }

  updateClock();
  setInterval(updateClock, 1000);
  updateBrief();
}

/**
 * =========================================================================
 * 4. UNIVERSAL THEATER VIDEO MODAL
 * =========================================================================
 */
window.openTheater = function(videoId, title, aspect, client, youtubeUrl) {
  if (!theaterModal || !theaterIframe) return;

  if (theaterTitle) theaterTitle.textContent = title || 'Project Preview';
  if (theaterAspectTag) {
    theaterAspectTag.textContent = aspect === '9:16' ? '9:16 REEL / SHORT' : '16:9 CINEMA';
  }
  if (theaterClientInfo) {
    theaterClientInfo.textContent = `Client: ${client || 'Afnan P.C Portfolio'}`;
  }
  if (theaterYtLink) {
    theaterYtLink.href = youtubeUrl || `https://youtu.be/${videoId}`;
  }
  if (theaterWaBtn) {
    theaterWaBtn.href = `contact.html`;
  }

  if (aspect === '9:16') {
    theaterWindow.classList.add('is-vertical');
  } else {
    theaterWindow.classList.remove('is-vertical');
  }

  theaterIframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1`;
  theaterModal.classList.add('is-active');
  body.classList.add('no-scroll');
};

function closeTheater() {
  if (!theaterModal || !theaterIframe) return;
  theaterModal.classList.remove('is-active');
  theaterIframe.src = '';
  body.classList.remove('no-scroll');
}

/**
 * =========================================================================
 * 5. FLUID MAGNETIC CURSOR
 * =========================================================================
 */
function setupCursor() {
  if (!customCursor) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let circleX = mouseX;
  let circleY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorDot) {
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    }
  });

  function renderCursorPhysics() {
    circleX += (mouseX - circleX) * 0.18;
    circleY += (mouseY - circleY) * 0.18;

    if (cursorCircle) {
      cursorCircle.style.transform = `translate(${circleX}px, ${circleY}px) translate(-50%, -50%)`;
    }

    requestAnimationFrame(renderCursorPhysics);
  }

  requestAnimationFrame(renderCursorPhysics);
  bindCursorListeners();
}

function bindCursorListeners() {
  if (!customCursor) return;

  document.querySelectorAll('[data-cursor]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      const label = el.getAttribute('data-cursor') || 'VIEW';
      if (cursorText) cursorText.textContent = label;
      customCursor.classList.add('is-hovering');
    });

    el.addEventListener('mouseleave', () => {
      customCursor.classList.remove('is-hovering');
    });
  });
}

/**
 * =========================================================================
 * 6. AMBIENT CANVAS
 * =========================================================================
 */
function setupAmbientCanvas() {
  const canvas = document.getElementById('ambientCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: -1000, y: -1000 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    particles = [];
    const count = Math.min(45, Math.floor(width / 35));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1
      });
    }
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  resize();

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const radial = ctx.createRadialGradient(
      mouse.x > 0 ? mouse.x : width / 2, 
      mouse.y > 0 ? mouse.y : height / 3, 
      10, 
      width / 2, 
      height / 2, 
      width * 0.6
    );
    radial.addColorStop(0, 'rgba(56, 189, 248, 0.04)');
    radial.addColorStop(0.5, 'rgba(255, 51, 68, 0.02)');
    radial.addColorStop(1, 'rgba(0, 3, 31, 0)');
    ctx.fillStyle = radial;
    ctx.fillRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

/**
 * =========================================================================
 * 7. GLOBAL LISTENERS (Modal, Email Copy, ESC)
 * =========================================================================
 */
function setupGlobalListeners() {
  if (theaterCloseBtn) theaterCloseBtn.addEventListener('click', closeTheater);
  if (theaterBackdrop) theaterBackdrop.addEventListener('click', closeTheater);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (theaterModal && theaterModal.classList.contains('is-active')) {
        closeTheater();
      } else if (isBackMode && typeof setBackMode === 'function') {
        setBackMode(false);
      }
    }
  });

  const copyAction = (btn) => {
    const email = btn.getAttribute('data-email') || 'afnanpc3@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      if (copyToast) {
        copyToast.classList.add('active');
        setTimeout(() => {
          copyToast.classList.remove('active');
        }, 2200);
      }
    }).catch(() => {
      window.location.href = `mailto:${email}`;
    });
  };

  if (copyEmailBtn) copyEmailBtn.addEventListener('click', () => copyAction(copyEmailBtn));
  if (footerEmailBtn) footerEmailBtn.addEventListener('click', () => copyAction(footerEmailBtn));
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
