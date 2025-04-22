import { ExperienceData } from "../options/experienceList";

export default function ExperienceItem({ experience }: { experience: ExperienceData }) {
  const { title, subtitle, time, list } = experience

  return (
    <div className="flex space-x-4 lg:space-x-6 font-mono w-full">
      <div className="flex flex-col space-y-4 w-10 md:w-8 lg:w-6 items-center justify-start mt-2">
        <div className="w-full aspect-square h-10 md:h-8 lg:h-6 rounded-full bg-violet-400 dark:bg-indigo-400" />
        <div className="w-[2px] h-full bg-slate-400/40 dark:bg-slate-600 rounded-full" />
      </div>
      <div className="flex flex-col w-fit">
        <h1 className="text-2xl text-violet-400 dark:text-indigo-400 pt-1 font-abz mb-[-2px]">{title}</h1>
        <h2 className="italic text-slate-500 dark:text-slate-300 font-abz italic text-sm">{subtitle}</h2>
        <span className="text-slate-400 dark:text-slate-500 font-mono text-sm">{time}</span>
        <div className="mt-4 text-slate-800 dark:text-slate-400 space-y-4">
          {
            list.map((item: string, index) => {
              return (
                <div key={"experience_" + index} className="flex space-x-2 text-sm">
                  <span className="">{item + (list.length === index + 1 ? "." : ";")}</span>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}