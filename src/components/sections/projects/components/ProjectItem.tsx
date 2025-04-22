import { Project } from "../options/projectList";

export default function ProjectItem({ project }: { project: Project }) {
  const { title, code, tags, description, link } = project

  return (
    <div className="group relative rounded-lg flex space-x-6 w-full">
      <div className="flex space-x-10 font-mono aspect-square rounded-lg w-32 h-32 ">
        <img src={`/assets/projects/${code}.png`} alt={"Projeto " + title} className="w-full h-auto object-cover rounded-lg" />
      </div>
      <div className="flex flex-col justify-between min-h-32 mt-[-4px]">
        <div className="flex flex-col w-full">
          <div className="flex space-x-2 items-center">
            <h1 className="font-abz text-violet-400 dark:text-indigo-400">{title}</h1>
            <span className="text-slate-400 dark:text-slate-500 text-xs font-abz mb-0.5">[{tags}]</span>
          </div>
          <p className="text-sm mt-1 dark:text-slate-400 text-slate-800">{description}</p>
        </div>
        {
          link &&
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm w-fit text-slate-500 dark:text-slate-300 mt-4 border-b-2 border-slate-500 dark:border-slate-300 transition font-abz">
            see more
          </a>
        }
      </div>
    </div>
  );
}