import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function DesktopTab({
  children,
}: Props) {

  return (
    <div className="bg-red-200 max-w-5xl w-full flex justify-center items-center h-[calc(var(--dvh)-36px)] md:h-[calc(var(--dvh)-7rem)] transition-[height]">
      <div
        id="tab_home"
        className={`max-w-[480px] max-md:h-fit md:max-h-[350px] h-full w-full z-[2] absolute md:bg-violet-100 dark:md:bg-slate-700 flex flex-col rounded-lg border-3 border-[#00000000] md:border-slate-800 select-none`}
      >
        <div className={`font-abz opacity-0 md:opacity-100 max-md:h-0 max-md:py-0 transition-all bg-violet-400 duration-[0ms] dark:bg-indigo-400 flex border-b-3 border-slate-800 text-slate-800 dark:text-slate-800 px-8 py-3 rounded-t-md tracking-wider w-full items-center justify-between`}>
          <span className="opacity-0 md:opacity-100 transition-opacity">home</span>
        </div>
        <div className={`w-full h-full [&>*]:p-8 [&>*]:pt-10 select-text md:bg-violet-100 dark:md:bg-slate-700 text-slate-800 dark:text-slate-400 rounded-b-md `}>
          {children}
        </div>
      </div>
    </div>
  );
}