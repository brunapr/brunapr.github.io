import { projectsList, Project } from "../options/projectList";
import ProjectItem from "./ProjectItem";

export default function ProjectsContent() {
  return (
    <div id="projects_content" className={`w-full h-fit flex flex-col space-y-10 md:space-y-10 xs:max-md:space-y-8 md:max-h-[600px] overflow-y-auto pr-4`}>
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