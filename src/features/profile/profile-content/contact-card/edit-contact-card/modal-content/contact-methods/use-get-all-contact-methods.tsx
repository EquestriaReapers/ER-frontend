import useProfileContext from "features/profile/profile-context/use-profile-context";
import { ContactMethod } from "core/profiles/types";
import { getAllContactMethods } from "core/cardcontent/get-all-contact-methods.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback, useEffect, useState } from "react";

const useGetAllContacthMethods = () => {
  const [allContactMethods, setAllContactMethods] = useState<
    ContactMethod[] | null
  >(null);
  const { profileId } = useProfileContext();
  const { showErrorToast } = useErrorToast();

  const getContactMethods = useCallback(async () => {
    try {
      const data = await getAllContactMethods(profileId);
      setAllContactMethods(data);
    } catch (error) {
      showErrorToast(error);
    }
  }, [showErrorToast]);

  useEffect(() => {
    getContactMethods();
  }, [getContactMethods]);

  return allContactMethods;
};

export default useGetAllContacthMethods; //
