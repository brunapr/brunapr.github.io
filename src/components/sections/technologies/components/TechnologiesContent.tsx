export default function TechnologiesContent() {
  const techs = [
    { name: "html", width: "100%" },
    { name: "css", width: "100%" },
    { name: "react", width: "80%" },
    { name: "nextJs", width: "70%" },
    { name: "typescript", width: "70%" },
    { name: "svelte", width: "60%" },
    { name: "figma", width: "50%" },
  ]

  return (
    <div className="flex flex-col space-y-6 max-md:w-full w-fit">
      {
        techs.map(({ name, width }, index) => {
          return (
            <div key={"skill_" + name} className="w-full flex max-md:space-x-8 space-x-4 items-center">
              <span className="w-22 text-sm">{name}</span>
              <div className="max-md:w-[calc(100%-6rem)] w-34 rounded-full bg-violet-200 dark:bg-slate-600 h-4 flex items-center">
                <div
                  style={{ maxWidth: width, animationDelay: `${index * 200}ms` }}
                  className={`mount-fill bg-violet-400 dark:bg-indigo-400 h-4 rounded-full transition-all w-0`}
                />
              </div>
            </div>
          );
        })
      }
    </div>
  );
}