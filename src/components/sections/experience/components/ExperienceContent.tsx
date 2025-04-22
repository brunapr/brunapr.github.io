import { experiences, ExperienceData } from "../options/experienceList";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceContent() {
  return (
    <div className="w-full flex flex-col space-y-6 max-h-[600px] h-full overflow-y-auto">
      {
        experiences.map((experience: ExperienceData) => {
          return (
            <ExperienceItem key={"experience_" + experience.title} experience={experience} />
          );
        })
      }
    </div>
  );
}