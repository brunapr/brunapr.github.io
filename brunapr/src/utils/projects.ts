export interface IProjectData {
  id: number;
  name: string; 
  src: string; 
  tag: string;
  url: string; 
}

const projects = [
  {
    id: 1,
    name: "Cara!",
    tag: "ui/ux",
    src: "cara",
    url: "",
  },
  {
    id: 2,
    name: "Caronaê",
    tag: "app",
    src: "caronae",
    url: "https://github.com/caronae",
  },
  {
    id: 3,
    name: "Clean Marine",
    tag: "ui/ux",
    src: "cleanmarine",
    url: "",
  },
  {
    id: 4,
    name: "Coliseum",
    tag: "app",
    src: "coliseum",
    url: "",
  },
  {
    id: 5,
    name: "Happy",
    tag: "web",
    src: "happy",
    url: "https://github.com/brunapr/Happy",
  },
  {
    id: 6,
    name: "Hommy",
    tag: "app",
    src: "hommyapp",
    url: "https://github.com/brunapr/hommy-app",
  },
  {
    id: 7,
    name: "Hommy",
    tag: "web",
    src: "hommy",
    url: "https://github.com/brunapr/hommy-landing",
  },
  {
    id: 8,
    name: "Lavanda",
    tag: "ui/ux",
    src: "lavanda",
    url: "",
  },
  {
    id: 9,
    name: "Notice.me",
    tag: "app",
    src: "noticeme",
    url: "https://github.com/brunapr/hommy-landing",
  },
  {
    id: 10,
    name: "Nutri.me",
    tag: "ui/ux",
    src: "nutrime",
    url: "https://www.behance.net/gallery/140113727/nutrime",
  },
  {
    id: 11,
    name: "Pokefile",
    tag: "web",
    src: "pokefile",
    url: "https://github.com/andradenathan/pokefile",
  },
];

export default projects;