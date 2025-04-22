import { ReactNode } from "react";
import { THEME, useThemeStore } from "../../../../stores/themeStore";
import { Linkedin, Github } from "lucide-react";

function ContactButton({ children }: { children: ReactNode }) {
  return (
    <a
      href="https://github.com/brunapr"
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-lg bg-violet-300 dark:bg-slate-600 hover:text-slate-100 flex p-3 px-4 items-center justify-center space-x-3 hover:bg-violet-400 hover:dark:bg-indigo-400 transition"
    >
      {children}
    </a>
  );
}

export default function AboutContent() {
  const { theme } = useThemeStore()

  const iconClass = "group-hover:text-slate-100 group-hover:fill-slate-100 dark:text-slate-400 text-slate-800 dark:fill-slate-400 fill-slate-800"

  return (
    <div className="max-h-[600px] h-full overflow-y-auto overflow-x-hidden">
      <div className="flex items-center space-x-6 w-full">
        <img
          src={`/assets/about/${theme === THEME.LIGHT ? "violet" : "indigo"}.png`}
          alt="pixel art drawing of bruna"
          className="rounded-full w-40 h-40"
        />
        <div className="flex flex-col space-y-1 h-40 justify-center">
          <h1 className="text-5xl font-abz dark:text-indigo-400 text-violet-400">Bruna Pimenta</h1>
          <span className="font-abz italic text-slate-400 dark:text-slate-500 leading-5 text-sm">front-end developer with 3+ years of experience</span>
        </div>
      </div>
      <div className="space-y-4 mt-10 font-mono">
        <p>I'm a <span className="dark:bg-indigo-400 dark:text-slate-800 bg-violet-400">front-end developer</span> who discovered my passion for the field when I joined <span className="border-b">UFRJ</span> and participated in <span className="border-b">EJCM</span>, a Junior Enterprise.
        </p>
        <p>My goal is to create interfaces that not only work but tell stories and solve <span className="text-stroke">real problems</span>. To me, seeing everything come together in code is like <b className="dark:text-indigo-400 text-violet-400">magic</b>!
        </p>
        <p>email: <span className="border-b">rbrmnt@gmail.com</span></p>
      </div>
      <div className="flex w-full space-x-4 mt-10">
        <ContactButton>
          <Linkedin className={`${iconClass} mb-1`} size={22} />
          {/* <span>linkedin</span> */}
        </ContactButton>
        <ContactButton>
          <Github className={`${iconClass}`} size={22} />
          {/* <span>github</span> */}
        </ContactButton>
      </div>
    </div>
  );
}