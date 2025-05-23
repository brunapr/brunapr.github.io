import { ReactNode } from "react";
import { THEME, useThemeStore } from "../../../../stores/themeStore";
import { Linkedin, Github } from "lucide-react";
import { useLocaleStore } from "../../../../stores/localeStore";

function ContactButton({ link, Icon }: { link: string, Icon: ReactNode }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-lg bg-violet-300 dark:bg-slate-600 hover:text-slate-100 flex p-4 items-center justify-center space-x-3 hover:bg-violet-400 hover:dark:bg-indigo-400 transition"
    >
      {Icon}
    </a>
  );
}

export default function AboutContent() {
  const { theme } = useThemeStore()
  const { t } = useLocaleStore()

  const iconProps = {
    className: "group-hover:text-slate-100 group-hover:fill-slate-100 dark:text-slate-400 text-slate-800 dark:fill-slate-400 fill-slate-800",
    size: 22
  }

  const contacts = [
    {Icon: <Linkedin {...iconProps}/>, link: "https://www.linkedin.com/in/prbruna"},
    {Icon: <Github {...iconProps}/>, link: "https://github.com/brunapr"},
  ]

  return (
    <div id="about_content" className={`md:max-h-[600px] h-fit overflow-y-auto overflow-x-hidden`}>
      <div className="flex max-md:flex-col items-center md:space-x-6 w-full">
        <img
          src={`/assets/about/${theme === THEME.LIGHT ? "violet" : "indigo"}.webp`}
          alt="pixel art drawing of bruna"
          className="rounded-full w-40 h-40 bg-slate-800"
        />
        <div className="flex flex-col space-y-1 max-md:my-6 md:h-40 justify-center">
          <h1 className="max-md:text-center text-5xl font-abz dark:text-indigo-400 text-violet-400">Bruna Pimenta</h1>
          <span className="max-md:text-center font-abz italic text-slate-400 dark:text-slate-500 leading-5 text-sm">{t("about_subtitle")}</span>
        </div>
      </div>
      <div className="space-y-4 md:mt-10 font-mono max-md:text-justify">
        <p>{t("about_1")} <span className="px-1 dark:bg-indigo-400 text-violet-100 dark:text-slate-800 bg-violet-400">{t("about_2")}</span> {t("about_3")} <span className="border-b">UFRJ</span> {t("about_4")} <span className="border-b">EJCM</span>{t("about_5")}
        </p>
        <p>{t("about_6")} <span className="text-stroke">{t("about_7")}</span>{t("about_8")} <b className="dark:text-indigo-400 text-violet-400">{t("about_9")}</b>!
        </p>
        <p>email: <span className="border-b">rbrmnt@gmail.com</span></p>
      </div>
      <div className="flex w-full space-x-4 mt-10">
        {contacts.map(({link, Icon}, index) => {
          return(
            <ContactButton key={"contact_"+index} link={link} Icon={Icon}/>
          );
        })}
      </div>
    </div>
  );
}