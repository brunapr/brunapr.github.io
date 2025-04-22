import { projectsList, Project } from "../options/projectList";
import ProjectItem from "./ProjectItem";

export default function ProjectsContent() {
  return (
    <div className={`w-full flex flex-col space-y-8 max-h-[600px] overflow-y-auto pr-4`}>
      {
        projectsList.map((project: Project) => {
          return (
            <ProjectItem key={"project_" + project.code} project={project} />
          );
        })
      }
    </div>
  );
}