# Developer Portfolio

A responsive developer portfolio built with Next.js and Sanity CMS. Supports dark/light mode, animated backgrounds, a project showcase, skills section, resume page, and a contact form.

## Stack

- **Next.js 13** — SSG with ISR
- **Tailwind CSS** + **NextUI** — styling
- **Sanity CMS** — content (bio, skills, projects)
- **Framer Motion** — animations
- **react-tsparticles** — particle background
- **typewriter-effect** — hero typing animation
- **react-hook-form** — contact form
- **next-themes** — dark/light toggle

## Project Structure

```
├── components/
│   ├── About.js
│   ├── Contact.js
│   ├── ContactForm.js
│   ├── ContactItems.js
│   ├── Hero.js
│   ├── Project.js
│   ├── Skill.js
│   └── Layout/
│       ├── Footer.js
│       ├── Layout.js
│       ├── Navbar.js
│       └── ThemeSwitcher.js
├── config/
│   ├── sanity.config.js   # Sanity client
│   └── site.config.js     # Personal info & social links
├── pages/
│   ├── index.js
│   ├── projects.js
│   ├── resume.js
│   └── 404.js
├── styles/
│   ├── globals.css
│   ├── custom.css
│   └── hero.css
├── assets/                # Custom fonts
└── public/                # Static files
```

## Getting Started

### Prerequisites

- Node.js 16+
- A [Sanity](https://sanity.io) account and project

### Setup

1. Clone and install:

   ```bash
   git clone <repository-url>
   cd developer-portfolio
   npm install
   ```

2. Create `.env.local`:

   ```env
   SANITY_PROJECT_ID=your_project_id
   SANITY_DATASET=production
   ```

3. Update `config/site.config.js` with your name, email, social links, and typewriter strings.

4. Add your resume PDF at `public/resume.pdf`.

5. Start the dev server:
   ```bash
   npm run dev
   ```

## Sanity CMS

Create the following document types in your Sanity studio:

**`bio`**
| Field | Type | Description |
|-------|------|-------------|
| `info` | string | Short intro text shown in the Hero |
| `image` | image | Profile photo |

**`skill`**
| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Skill name (shown as tooltip) |
| `image` | image | Skill icon |

**`project`**
| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Project name |
| `summary` | string | Short description |
| `note` | string | Optional footnote |
| `technologies` | array of string | Tech stack |
| `image` | image | Preview screenshot |
| `linkToDeployment` | url | Live URL |
| `linkToBuild` | url | Source code URL |

## Customization

All personal information lives in two places:

- **`config/site.config.js`** — name, email, social links, typewriter strings, resume file path
- **Sanity CMS** — bio text, profile image, skills, projects

Accent colors (`#86906F` / `#a1b378`) are defined as `accent` tokens in `tailwind.config.js`.

## Deployment

**Vercel (recommended):**

1. Push to GitHub and connect the repo to Vercel.
2. Add `SANITY_PROJECT_ID` and `SANITY_DATASET` in the Vercel dashboard.
3. Deploy — ISR will keep content fresh without full rebuilds.

**Other platforms (Render, Railway, etc.):**

```bash
npm run build
npm run start
```

Set the same two environment variables on the platform.

## Pages

| Route       | Description              |
| ----------- | ------------------------ |
| `/`         | Hero, About, and Contact |
| `/projects` | Project showcase         |
| `/resume`   | Resume / CV viewer       |
| `/404`      | Custom 404 page          |

## License

[MIT](LICENSE)
