export interface Project {
  code: string
  title: string
  tags: string
  description?: string
  link?: string
}

export const projectsList: Project[] = [
  {
    code: "doae",
    title: "Doaê",
    tags: "App • Web • UI/UX",
    description: "Undergraduate Thesis Project aimed at encouraging blood donation at UFRJ."
  },
  {
    code: "caronae",
    title: "Caronaê",
    tags: "App",
    link: "https://caronae.org",
    description: "Ridesharing system designed for the academic community of UFRJ."
  },
  {
    code: "noticeme",
    title: "Notice.me",
    tags: "App",
    link: "https://github.com/brunapr/Notice.me",
    description: "Mobile application for quick notes and reminders."
  },
  {
    code: "nutrime",
    title: "Nutri.me",
    tags: "UI/UX",
    link: "https://www.behance.net/gallery/140113727/nutrime",
    description: "Healthy menu solution that considers user's preferences and dietary restrictions."
  },
  {
    code: "cleanmarine",
    title: "Clean Marine",
    tags: "UI/UX",
    description: "Aligned with SDG 14, it's a solution that seeks to encourage beach cleanups through gamification."
  },
  {
    code: "happy",
    title: "Happy",
    tags: "Web",
    link: "https://github.com/brunapr/Happy",
    description: "Project created to better learn ReactJs, developed following NLW#3 videos."
  },
  {
    code: "lavanda",
    title: "Lavanda",
    tags: "UI/UX",
    description: "Diary writing app where the goal is to track your personal development over months."
  },
  {
    code: "hommy",
    title: "Hommy",
    tags: "Web",
    link: "https://github.com/brunapr/hommy-landing",
    description: "Technical training challenge landing page project for EJCM."
  },
  {
    code: "pokefile",
    title: "Pokéfile",
    tags: "Web",
    link: "https://github.com/andradenathan/pokefile",
    description: "Pokémon platform where users can save Pokémon and display their profile to friends."
  },
]