import { useEffect, useState } from "react";
import { BasicDataFormState } from "../../contact-card-context/contact-card-context";

export default function useBasicDataFormState({
  onChange,
  externalState,
}: Props) {
  const [countryResidence, setCountryResidence] = useState("");
  const [website, setWebiste] = useState("");

  // Establecemos el valor de countryResidence y website segun el valor externo si cambia
  useEffect(() => {
    setCountryResidence(externalState.countryResidence);
    setWebiste(externalState.website);
  }, [externalState.countryResidence, externalState.website]);

  useEffect(() => {
    onChange({
      countryResidence,
      website,
    });
  }, [countryResidence, onChange, website]);

  return {
    countryResidence,
    setCountryResidence,
    website,
    setWebiste,
  };
}

interface Props {
  onChange: (value: BasicDataFormState) => void;
  externalState: BasicDataFormState;
}
