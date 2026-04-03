/**
 * Site configuration — update these values to personalize your portfolio.
 *
 * All personal information that does not live in the Sanity CMS belongs here.
 * Search for "YOUR_" to find every placeholder that needs to be replaced.
 */
export const siteConfig = {
  /** Your full name — appears in the Navbar logo, Hero heading, and page titles. */
  name: "Your Name",

  /** Short tagline strings cycled by the Hero typewriter effect. */
  typewriterStrings: [
    "A Frontend focused Web Developer",
    "Full-stack to be",
    "Welcome to my webpage",
  ],

  /** Used in <meta name="description"> and Open Graph tags. */
  description:
    "A personal portfolio website built with Next.js and Sanity CMS.",

  /**
   * Your contact email address.
   * Used by the contact form's mailto: link.
   */
  email: "your.email@example.com",

  /**
   * Path to your resume PDF relative to the /public folder.
   * Place the file at public/resume.pdf before deploying.
   */
  resumeFile: "/resume.pdf",

  /**
   * Social / contact links shown in the Contact section.
   * Supported platforms: "linkedin" | "github" | "instagram" | "twitter"
   */
  social: [
    {
      platform: "linkedin",
      label: "Your Name",
      href: "https://www.linkedin.com/in/your-profile/",
    },
    {
      platform: "github",
      label: "your-username",
      href: "https://github.com/your-username",
    },
    {
      platform: "instagram",
      label: "@your-handle",
      href: "https://www.instagram.com/your-handle",
    },
    {
      platform: "twitter",
      label: "@your-handle",
      href: "https://x.com/your-handle",
    },
  ],
};
