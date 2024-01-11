import LocationInput from "./location-input";
import WebsiteInput from "./website-input";
import useBasicDataFormState from "./basic-data-form-state";
import { BasicDataFormState } from "../../contact-card-context/contact-card-context";

const BasicDataForm = ({ onChange, externalState }: Props) => {
  const { setCountryResidence, countryResidence, website, setWebiste } =
    useBasicDataFormState({ onChange, externalState });

  return (
    <>
      <LocationInput
        onChange={(value: string) => {
          setCountryResidence(value);
        }}
        value={countryResidence}
      />
      <WebsiteInput
        onChange={(value: string) => {
          setWebiste(value);
        }}
        value={website}
      />
    </>
  );
};

interface Props {
  onChange: (value: BasicDataFormState) => void;
  externalState: BasicDataFormState;
}

export default BasicDataForm;
