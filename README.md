# 🚀 Modern Full-Stack Developer Portfolio

A sleek, highly interactive, and responsive portfolio website built with **React 19**, **Vite**, and **Tailwind CSS 4**. This project showcases my professional journey, technical skills, and featured projects with a focus on smooth user experience and modern design aesthetics.

![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

## ✨ Key Features

- **Interactive Mouse Follower:** A custom-built cursor experience using `mouse-follower` and `GSAP` for fluid, context-aware interactions.
- **Dynamic Education Timeline:** A visually rich, vertical timeline representing my academic journey from secondary school to M.Tech.
- **Scroll Animations:** Smooth "reveal-on-scroll" effects powered by `Framer Motion` for an engaging browsing experience.
- **Glassmorphic UI:** Modern design language utilizing backdrop blurs, gradients, and subtle borders.
- **Fully Responsive:** Optimized for all screen sizes, from mobile devices to ultra-wide monitors.
- **Smooth Navigation:** Seamless section scrolling with a sticky, blurred header.

## 🛠️ Tech Stack

- **Frontend:** React 19 (Functional Components, Hooks)
- **Styling:** Tailwind CSS 4.0 (utilizing the new `@tailwindcss/vite` plugin)
- **Animations:** Framer Motion & GSAP
- **Icons:** React Icons (Font Awesome, Simple Icons)
- **Build Tool:** Vite
- **Cursor Effects:** Mouse Follower

## 📁 Project Structure

```text
src/
├── assets/             # Images and static assets
├── component/          # Reusable UI components (Header, Timeline, Cursor)
│   ├── AnimateOnScroll.jsx
│   ├── PointerFollower.jsx
│   └── ...
├── sections/           # Major page sections
│   ├── Hero.jsx        # Introduction & Socials
│   ├── Skills.jsx      # Tech stack grid
│   ├── Projects.jsx    # Work showcase
│   ├── MyJourney.jsx   # Education timeline
│   └── Contact.jsx     # Functional contact form UI
├── App.jsx             # Main application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/suprabhatmaiti/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 📝 Configuration

- **Tailwind CSS:** This project uses the latest **Tailwind v4**. Configuration is handled via the `@tailwindcss/vite` plugin in `vite.config.js`.
- **React Compiler:** Experimental React Compiler is enabled for optimized performance (see `vite.config.js`).

## 🤝 Contact

**Suprabhat Maiti**

- **Email:** [maitisuprabhat@gmail.com](mailto:maitisuprabhat@gmail.com)
- **LinkedIn:** [suprabhat-maiti](https://linkedin.com/in/suprabhat-maiti)
- **GitHub:** [@suprabhatmaiti](https://github.com/suprabhatmaiti)

---

_Made with ❤️ and React._
