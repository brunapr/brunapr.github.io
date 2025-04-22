import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function DesktopTab({
  title,
  children,
}: Props) {
  const id = "tab_" + title;

  return (
    <div
      id={id}
      className={`z-[2] top-1/2 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-translate-y-1/3 absolute md:bg-slate-700 flex flex-col rounded-lg border-3 border-[#00000000] md:border-slate-800 select-none transition duration-[1000ms]`}
    >
      <div className={`font-abz opacity-0 md:opacity-100 max-md:h-0 max-md:py-0 transition-all bg-violet-400 duration-[500ms] dark:bg-indigo-400 flex border-b-3 border-slate-800 text-slate-800 dark:text-slate-800 px-8 py-3 rounded-t-md tracking-wider w-full items-center justify-between`}>
        <span>{title}</span>
      </div>
      <div className={`w-fit [&>*]:p-8 [&>*]:pt-10 select-text md:bg-violet-100 max-h-[600px] dark:md:bg-slate-700 text-slate-800 dark:text-slate-400 rounded-b-md flex flex-col items-center justify-center`}>
        {children}
      </div>
    </div>
  );
}