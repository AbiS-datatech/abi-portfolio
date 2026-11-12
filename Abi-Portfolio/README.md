<div align="center">

# 💼 Personal Portfolio – Abi S

**A modern, responsive developer portfolio built with React, Vite and Framer Motion.**

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-0055FF?logo=framer&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Custom%20Styles-1572B6?logo=css3&logoColor=white)
![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white)

[GitHub](https://github.com/AbiS-datatech) · [LinkedIn](https://www.linkedin.com/in/abi-s-3a07a0358/) · [Email](mailto:abiselvaraj162006@gmail.com)

</div>

<!-- Add your live portfolio URL here once deployed, e.g. a "🌐 Live Site" link. -->

---

## 📑 Table of Contents

1. [About the Project](#-about-the-project)
2. [Project Objectives](#-project-objectives)
3. [Key Features](#-key-features)
4. [Technology Stack](#-technology-stack)
5. [Project Structure](#-project-structure)
6. [Website Sections](#-website-sections)
7. [Featured Projects](#-featured-projects)
8. [Installation and Setup](#-installation-and-setup)
9. [Deployment](#-deployment)
10. [Security](#-security)
11. [Responsive Design](#-responsive-design)
12. [Project Status](#-project-status)
13. [Future Enhancements](#-future-enhancements)
14. [About the Developer](#-about-the-developer)
15. [Connect With Me](#-connect-with-me)

---

## 📖 About the Project

**Personal Portfolio – Abi S** is a responsive personal portfolio website that showcases my technical skills, featured projects, experience and learning journey as a B.Tech Artificial Intelligence and Data Science student.

The site highlights my interests in **Cloud Computing, Web Development, Networking and IT Support** through a dark, editorial-style interface with smooth scroll-based animations and an overlapping stacked project-card layout.

> The visual direction (midnight teal background, forest-green project cards, serif headings, mint accents and a floating pill navigation) was inspired by the *Personal Folio* Framer template. All content, code and projects are my own.

## 🎯 Project Objectives

- Present my skills, projects and experience clearly to recruiters and interviewers.
- Provide quick access to live demos and GitHub repositories for each project.
- Practise building a polished, accessible and responsive interface with React.
- Keep all site content in one data file so it is easy to update.
- Offer a working contact form that never fakes a successful submission.

## ✨ Key Features

| Feature | Description |
|---|---|
| 📱 Responsive design | Layouts adapt from small phones to large desktop screens |
| 👋 Personal introduction | Hero section with name, tagline, education details and a portrait |
| 🧑‍🎓 About section | Professional summary, education details, interests and skills |
| 🧩 Skills showcase | Skills grouped by category and shown as softly floating tags (no percentage ratings) |
| 🗂️ Featured projects | Large cards with description, technology tags, status and preview image |
| 🔗 Live demo and GitHub links | Buttons appear only when a real link exists and open in a new tab |
| 🏢 Experience and certificates | Timeline of internships, a group project and a workshop certificate with a click-to-enlarge viewer |
| ❓ FAQ | Accessible accordion with answers about skills, projects, career interests and contact |
| ✉️ Contact section | Validated form (Formspree), email, LinkedIn and GitHub links |
| 🎞️ Animations | Framer Motion reveal animations, sticky stacked project cards and smooth scrolling |
| ♿ Accessibility | Semantic HTML, ARIA labels, keyboard-friendly controls and `prefers-reduced-motion` support |

## 🧰 Technology Stack

| Category | Technology |
|---|---|
| Framework | [React 18](https://react.dev/) (JavaScript / JSX) |
| Build tool | [Vite 5](https://vitejs.dev/) with `@vitejs/plugin-react` |
| Animation | [Framer Motion 11](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Styling | CSS3 (single stylesheet with CSS custom properties) |
| Fonts | Fraunces (headings) and Inter (body) via Google Fonts |
| Contact form | [Formspree](https://formspree.io/) (optional, configured with an environment variable) |
| Hosting config | Netlify (`netlify.toml`) |

## 📁 Project Structure

```text
Abi-Portfolio/
├── public/
│   └── images/
│       ├── hero-projects.jpg                 # Hero portrait
│       ├── tripora.png                       # Tripora preview
│       ├── career-path-recommendation.png    # Career Path preview
│       └── cloudvault.webp                   # CloudVault preview
├── src/
│   ├── components/
│   │   ├── Nav.jsx          # Floating pill navigation
│   │   ├── Hero.jsx         # Introduction section
│   │   ├── Projects.jsx     # Stacked featured project cards
│   │   ├── About.jsx        # About details and skills
│   │   ├── Experience.jsx   # Experience & Certificates timeline + certificate viewer
│   │   ├── FAQ.jsx          # FAQ accordion
│   │   ├── Contact.jsx      # Contact form and links
│   │   └── Reveal.jsx       # Reusable scroll-reveal wrapper
│   ├── App.jsx              # Page layout and footer
│   ├── data.js              # All site content (profile, projects, skills, experience, FAQ)
│   ├── main.jsx             # React entry point
│   └── styles.css           # Global styles and responsive rules
├── .env.example             # Environment variable template
├── index.html               # HTML entry, fonts and meta tags
├── netlify.toml             # Netlify build settings
├── package.json
└── vite.config.js
```

## 🖥️ Website Sections

| Section | Description |
|---|---|
| **Home** | Introduction, tagline "Exploring Technology. Building Ideas.", education details, call-to-action buttons and portrait |
| **Featured Work** | Overlapping stacked project cards on desktop; simple stacked cards on mobile |
| **About** | Summary, education, CGPA, interests and grouped skills |
| **Experience & Certificates** | Internship timeline, group project participation and the Cloud Service Management Workshop certificate |
| **FAQ** | Four questions with an animated accordion |
| **Contact** | Name, email and message form with validation, plus email, LinkedIn and GitHub links |

## 🚀 Featured Projects

| Project | Status | Description | Technologies | Links |
|---|---|---|---|---|
| **Tripora – India Travel Discovery and Trip Planner** | 🚧 In progress | Full-stack project to explore destinations, create day-wise itineraries and estimate trip budgets | React, Flask, MySQL | _No public links yet_ |
| **Career Path Recommendation System** | ✅ Completed | Flask application that suggests suitable career paths based on users' skills and interests | Python, Flask | [Live](https://lnkd.in/gDMfSGTt) · [GitHub](https://lnkd.in/gkGGTSYR) |
| **CloudVault** | ✅ Completed | Cloud file storage application with user authentication and file upload, download and management | Python, Flask, MySQL, MinIO | [GitHub](https://lnkd.in/gdAFgBtq) |
| **GlowNest** | ✅ Completed | Responsive skincare brand landing page with a clean, modern interface | HTML, CSS, JavaScript | [Live Demo](https://dreamy-pastelito-0c223c.netlify.app) · [GitHub](https://github.com/AbiS-datatech/GlowNest-Landing-Page) |
| **Aranya Ayurveda – Landing Page** | — | Responsive Ayurveda and wellness landing page presenting Ayurvedic products and services | Next.js, React, TypeScript, Tailwind CSS | [Live Demo](https://ayurvedha-landing.vercel.app/) · [GitHub](https://github.com/AbiS-datatech/aranya-ayurveda-landing) |

> Links shown as `lnkd.in` are LinkedIn short links to the project pages.

**Also listed under Experience & Certificates (not a featured project):** *Email Spam Detection using NLP* — group project participation exploring NLP and Machine Learning techniques for classifying emails as spam or legitimate.

### 🧩 Skills Shown on the Site

| Category | Skills |
|---|---|
| Programming | Python, Java (Basic), Machine Learning, Natural Language Processing (NLP) |
| Frontend Development | HTML, CSS, JavaScript, React |
| Backend Development | Flask, REST API Development |
| Cloud & Technologies | Cloud Computing, AWS, Microsoft Azure, Linux Administration, Computer Networking |
| Tools & Platforms | Git, GitHub, Linux, Windows |

## ⚙️ Installation and Setup

**Prerequisites:** [Node.js](https://nodejs.org/) (LTS) and npm.

```bash
# 1. Clone the repository
git clone https://github.com/AbiS-datatech/Abi-Portfolio.git
cd Abi-Portfolio

# 2. Install dependencies
npm install

# 3. (Optional) enable the contact form
cp .env.example .env        # on Windows PowerShell: copy .env.example .env
# then set VITE_FORMSPREE_ID in .env

# 4. Start the development server
npm run dev
```

Open the local URL printed in the terminal (normally `http://localhost:5173`).

| Command | Purpose |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |

> ⚠️ Do not open `index.html` directly from the file explorer. Use `npm run dev` or `npm run preview`.

### ✏️ Updating Content

Most content (profile details, projects, skills, experience, certificate and FAQ) lives in [`src/data.js`](src/data.js). Project and certificate images go in `public/images/`.

### ✉️ Contact Form (Formspree)

1. Create a form at [formspree.io](https://formspree.io/) and copy its ID (the part after `/f/`).
2. Add it to `.env` as `VITE_FORMSPREE_ID=your_form_id`.

If the variable is missing, the form validates the input and then shows a clear "not configured" message with the email address instead of pretending the message was sent.

## 🌐 Deployment

The project is configured for **Netlify** through `netlify.toml`:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |

**Deploy from GitHub:**

1. Push the repository to GitHub.
2. In Netlify, choose **Add new site → Import an existing project** and select the repository.
3. Confirm the build command and publish directory above.
4. Add `VITE_FORMSPREE_ID` under **Site settings → Environment variables**, then redeploy.

Alternatively, run `npm run build` and drag the `dist` folder onto [Netlify Drop](https://app.netlify.com/drop).

## 🔒 Security

- The Formspree form ID is read from an environment variable (`VITE_FORMSPREE_ID`) and a template is provided in `.env.example`; keep your real `.env` file out of version control.
- Contact form input is validated in the browser (name, email format and message length) before submission.
- External links open in a new tab with `rel="noopener noreferrer"`.
- No API secrets, passwords or private keys are used in the source code.

> Note: Vite exposes `VITE_` variables to the browser, so the Formspree ID is public by design. Form submissions are handled by Formspree.

## 📱 Responsive Design

- Fluid layouts using CSS grid, flexbox and relative units.
- Desktop: overlapping sticky project cards with scroll-based stacking.
- At widths of 900px and below, the layout switches to a single column and project cards become a simple stack.
- Extra navigation spacing for very small screens (400px and below).
- Images are lazy-loaded and the page avoids horizontal overflow.
- Animations are disabled when the user prefers reduced motion.

## 📊 Project Status

| Area | Status |
|---|---|
| Core portfolio website | ✅ Implemented |
| Featured projects, skills, experience and FAQ | ✅ Implemented |
| Contact form | ✅ Implemented (requires a Formspree ID to send messages) |
| Tripora project | 🚧 Still in development |

## 🛠️ Future Enhancements

These are ideas for later and are **not implemented yet**:

- Add real screenshots for GlowNest and Aranya Ayurveda instead of live previews.
- Add a mobile navigation menu for small screens.
- Convert large images to WebP for faster loading.
- Add links for Tripora once the project is published.
- Add social-sharing meta tags (Open Graph) for better link previews.

## 👩‍💻 About the Developer

**Abi S.** is a B.Tech Artificial Intelligence and Data Science student at **RVS Institute of Technology, Coimbatore** (CGPA 8.16, expected graduation 2027). Abi enjoys learning new technologies and applying them through hands-on projects, with interests in Cloud Computing, Linux, Networking, REST APIs and Web Development.

Currently looking for internship and entry-level opportunities in Web Development, IT Support, Networking and Cloud Computing.

## 🤝 Connect With Me

| Platform | Link |
|---|---|
| 💻 GitHub | [AbiS-datatech](https://github.com/AbiS-datatech) |
| 🔗 LinkedIn | [Abi S](https://www.linkedin.com/in/abi-s-3a07a0358/) |
| ✉️ Email | [abiselvaraj162006@gmail.com](mailto:abiselvaraj162006@gmail.com) |

<div align="center">

⭐ If you like this project, feel free to star the repository.

</div>
