import { Experience } from "core/profiles/types";
import ExperienceCard from "./experience-card";

const ShowProfileExperiencies = ({ experiences }: Props) => {
  return (
    <>
      {experiences.map((item: Experience) => {
        return <ExperienceCard key={item.id} item={item} />;
      })}
    </>
  );
};

interface Props {
  experiences: Experience[];
}

export default ShowProfileExperiencies;
