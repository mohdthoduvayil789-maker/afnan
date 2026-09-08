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
    console.info('Using fallback dataset (18 projects)');
  }

  renderWorks(currentFilter);
  setupEventListeners();
  setupGlobalAutoPauseListener();
  
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
