# Afnan P.C – Portfolio Website

A cinematic, standalone portfolio website for **Afnan P.C** (Video Editor • Motion Graphics • AI Video Production).

Rebuilt from [afnanpc.framer.website](https://afnanpc.framer.website/) as a clean, portable codebase with no Framer badges or subscription limits.

---

## 🚀 Quick Start

### 1. View Locally
Simply double-click `index.html` to open it in your browser (Chrome, Edge, Firefox, Safari). No build tools, Node.js, or server required!

### 2. File Structure
```text
afnan-pc-portfolio/
│
├── index.html            # Main semantic webpage with navigation, hero, services, and footer
├── README.md             # Project documentation
│
├── css/
│   └── style.css         # Dark cinematic styling, custom animations, responsive layouts
│
├── js/
│   └── app.js            # Video modal logic, category filtering, WhatsApp inquiry handler
│
├── data/
│   └── works.json        # Structured JSON dataset containing all 18 video projects
│
└── assets/
    └── profile.png       # High-resolution profile avatar of Afnan P.C
```

---

## 🎬 Adding or Updating Works

All video projects are stored in `data/works.json`. To add a new work, simply append a new object:

```json
{
  "id": "YOUR_YOUTUBE_VIDEO_ID",
  "title": "Project Title",
  "category": "Commercial & Promos",
  "type": "long",
  "client": "Client Name",
  "aspect": "16:9",
  "thumbnail": "https://i.ytimg.com/vi/YOUR_YOUTUBE_VIDEO_ID/hqdefault.jpg",
  "youtubeUrl": "https://youtu.be/YOUR_YOUTUBE_VIDEO_ID",
  "description": "Short description of the edit, pacing, and visual effects.",
  "tags": ["Premiere Pro", "Color Grade"]
}
```

* For vertical videos (Reels/Shorts), set `"aspect": "9:16"` and `"type": "short"`. The modal player will automatically switch to vertical phone format.
* For standard horizontal videos, set `"aspect": "16:9"` and `"type": "long"`.

---

## 🌐 Free Hosting Options

You can deploy this website live for free in under 2 minutes:

1. **GitHub Pages**:
   - Push this folder to a GitHub repository.
   - Go to `Settings` -> `Pages` -> choose `main` branch root.
   - Live URL: `https://<your-username>.github.io/<repo-name>/`
2. **Vercel / Netlify**:
   - Drag and drop the `afnan-pc-portfolio` folder directly into [Netlify Drop](https://app.netlify.com/drop) or [Vercel](https://vercel.com).
3. **Custom Domain**:
   - Point your custom domain (e.g. `afnanpc.com`) in DNS settings.

---

## 📞 Contact Details Configured
* **WhatsApp**: `+91 9037747079`
* **Email**: `afnanpc3@gmail.com`
* **Original Framer Site**: [afnanpc.framer.website](https://afnanpc.framer.website/)
