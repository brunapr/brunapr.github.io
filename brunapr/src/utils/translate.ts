import { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";

export default function Translate(text: string) {
  const { language } = useContext(LanguageContext);

  if(language == "pt") {
    switch (text) {
      case "front-end developer and ui/ux designer":
        return "desenvolvedora front-end e designer de ui/ux";
      case "home":
        return "início";
      case "about me":
        return "sobre mim";
      case "projects":
        return "projetos";
      case "contact":
        return "contato";
      case "who i am":
        return "sobre mim";
      case "skills":
        return "tecnologias";
      case "basic":
        return "básico";
      case "how it started":
        return "como começou";
      case "love":
        return "amores";
      case "22 years old":
        return "22 anos";
      case "brazil":
        return "Brasil";
      case "sagittarius":
        return "Sagitário";
      case "she/her":
        return "Ela/Dela";
      case "my pets":
        return "animais";
      case "games":
        return "jogos";
      case "desserts":
        return "doces";
      case "curriculum":
        return "curriculo";
      case "copy":
        return "copiar";
      case "open":
        return "abrir";
    }
  } else if(language == "en") {
    switch (text) {
      case "front-end developer and ui/ux designer":
        return "front-end developer and ui/ux designer";
      case "home":
        return "home";
      case "about me":
        return "about me";
      case "projects":
        return "projects";
      case "contact":
        return "contact";
      case "who i am":
        return "who i am";
      case "skills":
        return "skills";
      case "basic":
        return "basic";
      case "how it started":
        return "how it started";
      case "love":
        return "love";
      case "22 years old":
        return "22 years old";
      case "brazil":
        return "Brazil";
      case "sagittarius":
        return "Sagittarius";
      case "she/her":
        return "She/Her";
      case "my pets":
        return "my pets";
      case "games":
        return "games";
      case "desserts":
        return "desserts";
      case "curriculum":
        return "curriculum";
      case "copy":
        return "copy";
      case "open":
        return "open";
    }
  }
}