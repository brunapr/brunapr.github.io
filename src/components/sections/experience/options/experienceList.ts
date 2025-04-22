export interface ExperienceData {
  year: string
  title: string
  subtitle: string
  time: string
  list: string[]
}

export const experiences: ExperienceData[] = [
  {
    year: "2025",
    title: "Blocks",
    subtitle: "Professional Experience",
    time: "2023-2025",
    list: [
      "Development of a BIM objects plugin for Revit using Svelte",
      "Dark Mode implementation for the Revit plugin",
      "Development of the plugin's Year-in-Review feature for users",
      "Company CMS development with ReactJs",
      "Company website development with NextJs",
      "White-label Catalog solution development in NextJs",
      "Implementation of Storybook design system for all projects",
      "AWS build verifications and deployment monitoring"
    ]
  },
  {
    year: "2023",
    title: "Caronaê",
    subtitle: "University Extension Project",
    time: "2022-2023",
    list: [
      "Caronaê app development using React Native and Expo",
      "Front-end team organization, sprint planning and task refinement",
      "Participation in app prototyping with Figma",
    ]
  },
  {
    year: "2022",
    title: "PSR",
    subtitle: "Internship",
    time: "2021-2022",
    list: [
      "Maintenance of main platform using HTML, CSS, jQuery and JavaScript",
      "Platform redesign and prototyping with Figma",
      "Internal CMS development with ReactJs",
    ]
  },
  {
    year: "2021",
    title: "EJCM",
    subtitle: "Junior Enterprise",
    time: "2020-2021",
    list: [
      "Initiative to adopt React in the company",
      "App development with React Native and Ionic",
      "Project prototyping with Figma",
      "Trainee training in CSS and front-end/back-end integration",
      "Code reviews and sprint organization"
    ]
  },
]