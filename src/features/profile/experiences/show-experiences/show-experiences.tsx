import { Experience } from "core/profiles/types";
import ExperienceCard from "./experience-card";

const ShowExperiences = ({ experience }: Props) => {
  return (
    <>
      {experience.map((item: Experience) => {
        return <ExperienceCard item={item} />;
      })}
    </>
  );
};

interface Props {
  experience: Experience[];
}

export default ShowExperiences;
