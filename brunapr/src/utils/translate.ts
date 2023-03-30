import { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";

export default function Translate(text: string) {
  const { language } = useContext(LanguageContext);

  if(language == "pt-BR") {
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
      case "copied!":
        return "copiado!";
      case "open":
        return "abrir";
      case "all":
        return "todos";
      case "learn more":
        return "Saiba Mais";
      case "cara":
        return "Cara! nasceu da minha vontade de desenhar e não saber o quê. O programa te dá várias opções para aleatorizar um personagem - desde a cor do cabelo até seu signo. Dessa forma, fica bem mais divertido se desafiar criando coisas novas. Já tinha visto alguns programas parecidos pela internet que te dão ações, expressões ou fundos para desenhar, mas nunca encontrei um que tivesse opcões mais específicas, como cor dos olhos, cicatrizes e outros detalhes. Com isso, resolvi criar meu próprio projeto que faz isso por mim.";
      case "caronae":
        return "O Caronaê é um Projeto de Extensão da faculdade qual faço parte (UFRJ). Feito inteiro por uma equipe de alunos com uma professora sendo coordenadora, ele propõe facilitar a oferta e busca por caronas nos campi. É possível tanto se cadastrar como motorista e oferecer caronas, como se cadastrar como passageiro e pesquisar por elas. Para se cadastrar, é necessário que o usuário tenha matrícula ativa na UFRJ. Após cadastrar seu carro, o motorista pode criar uma corrida com hora marcada e trajeto. O usuário que busca a carona por sua vez, pode pesquisar exatamente para onde ele quer ir e que horas e fazer uma busca a partir disso.";
      case "cleanmarine":
        return "Clean Marine foi um projeto criado na disciplina de Computadores e Sociedade no curso de Computação da UFRJ, em Março de 2022. O projeto tem como base o Objetivo de Desenvolvimento Sustentável (ODS) 14 - Vida na Água da ONU. O objetivo era criar um produto que ajudasse de alguma forma a conclusão desse objetivo. Para isso, pensamos em criar um evento de coleta de lixo na praia de forma gamificada, com rankings, recompensas colecionáveis, patrocinadores e opção de doação direta para alguma ONG que esteja relacionada com a ODS. A ideia é manter uma competitividade saudável entre os usuários com jogos e ao mesmo tempo ajudar o meio ambiente.";
      case "coliseum":
        return "Aplicativo criado para a Iniciativa React da EJCM. A Empresa Junior queria trocar de Stack (Angular -> React), então juntou um grupo de pessoas interessadas em pesquisa para aprender React em conjunto e eventualmente passar esse conhecimento para toda a empresa. O Coliseum tem como objetivo fazer o usuário achar eventos próximos de si de forma mais fácil. Com o uso da localização, conseguimos ver eventos no mapa e outros que estão perto do mesmo no feed principal. É possível clicar em um evento e ver data, horário, local e várias outras informações. Além disso, é possível confirmar presença em um evento e ver também quantos já confirmaram. Cada evento tem seu próprio chat, onde pessoas podem tirar outras dúvidas e conversar.";
      case "happy":
        return "Happy foi o primeiro aplicativo web em React que eu fiz. Tema da Next Level Week (NLW) da Rocketseat, tinha como objetivo tornar a busca e visita em casas de Serviços de Acolhimento Institucional para Crianças e Adolescentes (SAICA) mais fácil.";
      case "hommyapp":
        return "Projeto de Treinamento Técnico de Angular/Ionic da EJCM. Consistia em criar um aplicativo chamado Hommy, onde um estudante consegue buscar e ver informações de alojamentos disponíveis para aluguel. Era centrado em alojamentos próximos à universidades.";
      case "hommy":
        return "Projeto de Treinamento Técnico de HTML/CSS da EJCM. Consistia em criar uma Landing Page de um aplicativo chamado Hommy, onde um estudante consegue buscar e ver informações de alojamentos disponíveis para aluguel. Era centrado em alojamentos próximos à universidades. Na Landing Page, ficava disponível informações como contato e link para download do aplicativo.";
      case "lavanda":
        return "Lavanda é um projeto de aplicativo que quer trazer a experiência do antigo diário de uma forma mais digital. Com páginas infinitas, o usuário consegue escrever sobre seu dia todos os dias e filtrar eles depois por dia, mês ou ano. Também existem outras funcionalidades como troca da cor do aplicativo, troca de nome exibido e escolha de um emoji para demonstrar emoções diárias.";
      case "noticeme":
        return "É um simples aplicativo de registro notas. É possível criar, editar, deletar, favoritar e colocar tags em notas. Também é possível filtrar essas notas, mostrando apenas as favoritadas ou por suas tags.";
      case "nutrime":
        return "É um conceito de aplicativo criado em grupo durante a disciplina de Interface Humano-Computador no curso de Computação da UFRJ, tendo início em Novembro de 2021. O nutri.me é uma solução de cardápios saudáveis levando em conta as preferências e restrições alimentares de cada pessoa. O aplicativo conta com a presença de nutricionistas dispostos a ajudas e usuários interessados em se alimentar de forma saudável.";
      case "pokefile":
        return "Pokefile foi um website criado para a matéria de Banco de Dados no curso de Computação da UFRJ, feito em React.js e Express.js utilizando a PokéAPI, uma API de Pokémon disponível de forma gratuita. Tem como objetivo servir como uma plataforma onde você guarda informações sobre sua conta e seus pokémons, podendo criar um perfil, exibir seus pokémons mais fortes e compartilhar com seus amigos seu código de usuário.";
    }
  } else {
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
      case "copied!":
        return "copied!";
      case "open":
        return "open";
      case "all":
        return "All";
      case "learn more":
        return "Learn More";
      case "cara":
        return "Cara! born from my feeling of wishing to draw but couldn't know what. The program gives you a variety of options to randomize a character - from haircolor to zodiac signs. It gets funnier to challenge yourself to create new things this way. I've had already seem similar programs around the internet that would give me actions, background or expressions to draw, but never one that had that many diverse options, like eye color, scars and other details. With that in mind, I decided to create my own project that would do that for me!";
      case "caronae":
        return "Caronaê is an University Extension Program from UFRJ which I'm a part of. Made from an entire team of students and a teacher as a coordinator, Caronaê wants to make the life of people that wants to ask for rides in UFRJ's campi easier. It's not only possible to register as a driver and offer rides, but you can register as a passenger and search for them too. It's only possible to register if you have an active enrollment at UFRJ. After filling your car data, the driver can create a ride containing date, time and route. The passenger can use the search page to input exactly where and when he needs a ride. If he finds one that he likes, he can ask the driver to join by clicking a button.";
      case "cleanmarine":
        return "Clean Marine was a group project made for Computers and Society class from Computer Science at UFRJ, in March 2022. The project has the Sustainable Development Goals (SDG) 14 - Life Below Water from the UN as an inspiration. The goal was to create a product that would help getting closer to SDG 14 in some way. For this to happen, we thought about creating a garbage collecting event at the beach in a gamified way, with rankings, collectible rewards, sponsors and the direct option to donate for one of the NGO that are related with our SDG. The main idea is to maintain a healthy user competition and at the same time help the environment.";
      case "coliseum":
        return "App made for EJCM's React Initiative. The Junior Enterprise wanted to change their stacks from Angular to React, so gathered an interested group of people to research and learn about React, with the objective in mind to teach to all the other members from the JE. Coliseum's objective is to help users to find all sorts of real life events close to them in a easier way. Using the cellphone's location, they can see all events in a map and in their own feed. When clicking an event, it's possible to see date, hour, place and many other informations. Besides, it's also possible to confirm your own presence in the event and see how many already did the same too. Events also have their own chat, where users can send messages and ask questions.";
      case "happy":
        return "Happy was my first React.js website. Rocketseat NLW's theme, Happy's main goal is to help users to search and visit Adoption Houses.";
      case "hommyapp":
        return "EJCM's Angular/Ionic Tecnical Training project. We had to create an app called Hommy, where a university student can search for informations about available lodgings and rent them. It's concept is centered around cheap lodgings near UFRJ.";
      case "hommy":
        return "EJCM's HTML/CSS Tecnical Training project. We had to create a Landing Page for an app called Hommy. In this app, a university student can search for informations about available lodgings and rent them. It's concept is centered around cheap lodgings near UFRJ. About the Landing Page itself, we could see contact informations and the download link for the app.";
      case "lavanda":
        return "Lavanda it's an app that wants to bring that cozy feeling of writing in a diary back, in a digital way. With infinite pages, users can write about their day, everyday. They can also filter by day, month or year. About other features, they can change the app's theme color, change their names and choose a emoji to demonstrate their daily humor anytime.";
      case "noticeme":
        return "It's a simple app where users can save notes. Besides creating, editing, deleting, marking as favorite and puting tags on them, it's also possible to filter those notes, showing only favorites or by their tags.";
      case "nutrime":
        return "App concept made by a group of students for Interface Human-Computer's class, at UFRJ on Novembem 2022. Nutri.me brings a solution to healthy menus taking preferences and dietary restrictions from users into account. Available nutritionists are the key on this proccess. They can use the app to help any interested user to eat in a healthier way by taking their appointments and talk with them directly.";
      case "pokefile":
        return "Pokefile was an website created for Database's class, at UFRJ - made with React.js and Express.js using PokéAPI, which is available for free. It's main objective is to be used as a plataform where users can store their Pokémon account information and their Pokémons. Users are able to create a profile, display their Pokédex and teams and share their user code with friends.";
    }
  }
}