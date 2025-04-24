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
    description: "project_description_1"
  },
  {
    code: "caronae",
    title: "Caronaê",
    tags: "App",
    link: "https://caronae.org",
    description: "project_description_2"
  },
  {
    code: "noticeme",
    title: "Notice.me",
    tags: "App",
    link: "https://github.com/brunapr/Notice.me",
    description: "project_description_3"
  },
  {
    code: "nutrime",
    title: "Nutri.me",
    tags: "UI/UX",
    link: "https://www.behance.net/gallery/140113727/nutrime",
    description: "project_description_4"
  },
  {
    code: "cleanmarine",
    title: "Clean Marine",
    tags: "UI/UX",
    description: "project_description_5"
  },
  {
    code: "happy",
    title: "Happy",
    tags: "Web",
    link: "https://github.com/brunapr/Happy",
    description: "project_description_6"
  },
  {
    code: "lavanda",
    title: "Lavanda",
    tags: "UI/UX",
    description: "project_description_7"
  },
  {
    code: "hommy",
    title: "Hommy",
    tags: "Web",
    link: "https://github.com/brunapr/hommy-landing",
    description: "project_description_8"
  },
  {
    code: "pokefile",
    title: "Pokéfile",
    tags: "Web",
    link: "https://github.com/andradenathan/pokefile",
    description: "project_description_9"
  },
]