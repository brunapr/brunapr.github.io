import { TranslationKey, useLocaleStore } from "../../../../stores/localeStore";
import { Project } from "../options/projectList";

export default function ProjectItem({ project }: { project: Project }) {
  const { t } = useLocaleStore()
  const { title, code, tags, description, link } = project

  return (
    <div className="group relative rounded-lg flex flex-col space-y-3 items-center w-full transition-all">
      <div className="flex space-x-10 font-mono aspect-video rounded-lg w-full transition-all">
        <img src={`/assets/projects/${code}.png`} alt={"Projeto " + title} className="w-full h-auto object-cover rounded-lg" />
      </div>
      <div className="w-full flex flex-col justify-between transition-all">
        <div className="flex flex-col w-full">
          <div className="flex space-x-2 items-center">
            <h1 className="font-abz text-violet-400 dark:text-indigo-400">{title}</h1>
            <span className="text-slate-400 dark:text-slate-500 text-xs font-abz mb-0.5">[{tags}]</span>
          </div>
          <p className="w-full text-sm mt-1 dark:text-slate-400 text-slate-800">{t(description as TranslationKey)}</p>
        </div>
        {
          link &&
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm w-fit text-slate-500 dark:text-slate-300 mt-2 border-b-2 border-slate-500 dark:border-slate-300 transition font-abz">
            {t("see_more")}
          </a>
        }
      </div>
    </div>
  );
}