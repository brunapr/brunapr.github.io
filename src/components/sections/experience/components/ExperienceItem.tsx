import { TranslationKey, useLocaleStore } from "../../../../stores/localeStore";
import { ExperienceData } from "../options/experienceList";

export function ExperienceTag({text}: {text: string}) {
  return(
    <div className="font-mono text-xs py-1 px-2 mb-2 rounded-sm bg-violet-200/40 dark:bg-indigo-300/10 text-violet-400/70 dark:text-indigo-300/50">
      <span>{text}</span>
    </div>
  );
}

export default function ExperienceItem({ experiences }: { experiences: ExperienceData }) {
  const { t } = useLocaleStore()
  const { title, subtitle, time, list, tags } = experiences

  return (
    <div className="flex space-x-4 lg:space-x-6 font-mono w-full">
      <div className="flex flex-col space-y-4 w-6 items-center justify-start mt-2">
        <div className="w-full aspect-square h-6 rounded-full bg-violet-400 dark:bg-indigo-400" />
        <div className="w-[2px] h-full bg-slate-400/40 dark:bg-slate-600 rounded-full" />
      </div>
      <div className="flex flex-col w-fit">
        <h1 className="text-2xl text-violet-400 dark:text-indigo-400 pt-1 font-abz mb-[-2px]">{title}</h1>
        <div className="flex flex-col md:flex-row md:space-x-2 md:items-center text-sm">
          <h2 className="italic text-slate-500 dark:text-slate-300 font-abz">{t(subtitle as TranslationKey)}</h2>
          <span className="hidden md:block text-slate-400 dark:text-slate-500">|</span>
          <span className="text-slate-400 dark:text-slate-500 font-mono">{time}</span>
        </div>
        <div className="flex space-x-2 items-center mt-2 mb-2 flex-wrap">
          {
            tags.map((item: string, index) => {
              return (
                <ExperienceTag key={"experience_tag_item_" + index} text={item}/>
              );
            })
          }
        </div>
        <div className="mt-4 text-slate-800 dark:text-slate-400 space-y-4 flex flex-col">
          {
            list.map((item: string, index) => {
              return (
                <span key={"experience_list_item_" + index} className="text-sm">{t(item as TranslationKey) + (list.length === index + 1 ? "." : ";")}</span>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}