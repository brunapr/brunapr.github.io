export interface ExperienceData {
  year: string
  title: string
  subtitle: string
  time: string
  tags: string[]
  list: string[]
}

export const experiences: ExperienceData[] = [
  {
    year: "2025",
    title: "Blocks",
    subtitle: "exp_type_1",
    time: "2023-2025",
    tags: ["html/css", "reactjs", "svelte", "nextjs", "typescript", "scrum", "storybook", "aws"],
    list: Array.from({length:8}).map((_, index) => `exp_list_1_${index+1}`)
  },
  {
    year: "2023",
    title: "Caronaê",
    subtitle: "exp_type_2",
    time: "2022-2023",
    tags: ["html/css", "react native", "scrum", "expo", "figma"],
    list: Array.from({length:3}).map((_, index) => `exp_list_2_${index+1}`)
  },
  {
    year: "2022",
    title: "PSR",
    subtitle: "exp_type_3",
    time: "2021-2022",
    tags: ["html/css", "reactjs", "javascript"],
    list: Array.from({length:3}).map((_, index) => `exp_list_3_${index+1}`)
  },
  {
    year: "2021",
    title: "EJCM",
    subtitle: "exp_type_4",
    time: "2020-2021",
    tags: ["html/css", "reactjs", "react native", "angular", "ionic", "javascript", "typescript", "scrum", "figma"],
    list: Array.from({length:5}).map((_, index) => `exp_list_4_${index+1}`)
  },
]