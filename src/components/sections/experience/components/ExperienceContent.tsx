import { experiences, ExperienceData } from "../options/experienceList";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceContent() {
  return (
    <div className="w-full flex flex-col space-y-6 md:max-h-[600px] h-full overflow-y-auto">
      {
        experiences.map((experiences: ExperienceData) => {
          return (
            <ExperienceItem key={"experience_" + experiences.title} experiences={experiences} />
          );
        })
      }
    </div>
  );
}