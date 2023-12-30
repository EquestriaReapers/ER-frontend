import { Education } from "core/profiles/types";
import EducationCard from "./education-card";

const ShowProfileEducation = ({ educations }: Props) => {
  return (
    <>
      {educations.map((item: Education) => {
        return <EducationCard key={item.id} item={item} />;
      })}
    </>
  );
};

interface Props {
  educations: Education[];
}

export default ShowProfileEducation;
