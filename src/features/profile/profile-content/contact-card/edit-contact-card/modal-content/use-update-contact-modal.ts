import useProfileContext from "features/profile/profile-context/use-profile-context";
import updateContactData from "core/profiles/update-contact-data.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";
import useContactCardContext from "../contact-card-context/use-contact-card-context";
import { useAuthState } from "hooks/use-auth-state";
import { useNavigate } from "react-router-dom";
import { LocalLanguague } from "../contact-card-context/contact-card-context";
import { useSuccessToast } from "hooks/use-success-toast";
import {
  AddProfileLanguague,
  addProfileLanguague,
} from "core/profiles/add-profile-languague.service";
import { removeProfileLanguage } from "core/profiles/remove-profile-languague.service";

const useUpdateContactDataAction = () => {
  const { basicData } = useContactCardContext();

  const getToken = useGetToken();
  return useCallback(async () => {
    const token = getToken();
    const data = await updateContactData(token, basicData);
    return data;
  }, [getToken, basicData]);
};

const useAddNewLanguaguesAction = () => {
  const getToken = useGetToken();
  const { newLanguagues, setNewLanguagues } = useContactCardContext();

  const addLanguague = useCallback(
    async (body: AddProfileLanguague) => {
      const token = getToken();
      const data = await addProfileLanguague(token, body);
      return data;
    },
    [getToken]
  );

  const addNewLanguagues = useCallback(async () => {
    newLanguagues.forEach(async (languague: LocalLanguague) => {
      await addLanguague({
        languageId: languague.languagueId,
        level: languague.level,
      });
    });

    setNewLanguagues([]);
    return;
  }, [addLanguague, newLanguagues, setNewLanguagues]);

  return addNewLanguagues;
};

const useDeleteNewLanguaguesAction = () => {
  const getToken = useGetToken();
  const { deletedLanguaguesIds, setDeletedLanguaguesIds } =
    useContactCardContext();

  const deleteLanguague = useCallback(
    async (languagueId: number) => {
      const token = getToken();
      await removeProfileLanguage(token, languagueId);
      return;
    },
    [getToken]
  );

  const deleteNewLanguagues = useCallback(async () => {
    deletedLanguaguesIds.forEach(async (languagueId: number) => {
      await deleteLanguague(languagueId);
    });

    setDeletedLanguaguesIds([]);
    return;
  }, [deleteLanguague, deletedLanguaguesIds, setDeletedLanguaguesIds]);

  return deleteNewLanguagues;
};

const useUpdateContactModal = () => {
  const { setLoading } = useContactCardContext();
  const { fetchProfile } = useProfileContext();
  const { showErrorToast } = useErrorToast();
  const { showSuccessToast } = useSuccessToast();
  const updateContactDataAction = useUpdateContactDataAction();
  const addNewLanguaguesAction = useAddNewLanguaguesAction();
  const deleteNewLanguaguesAction = useDeleteNewLanguaguesAction();

  return useCallback(async () => {
    try {
      setLoading(true);
      await deleteNewLanguaguesAction();
      await addNewLanguaguesAction();
      await updateContactDataAction();
      fetchProfile();
      showSuccessToast("Datos de contacto actualizados correctamente 🎉");
      return;
    } catch (error) {
      showErrorToast(error);
    } finally {
      setLoading(false);
    }
  }, [
    addNewLanguaguesAction,
    deleteNewLanguaguesAction,
    fetchProfile,
    setLoading,
    showErrorToast,
    showSuccessToast,
    updateContactDataAction,
  ]);
};

function useGetToken() {
  const navigate = useNavigate();
  const { token } = useAuthState();

  return useCallback(() => {
    if (!token) {
      navigate("/login");
      throw new Error(
        "No se ha encontrado un token local para hacer la peticion"
      );
    }

    return token;
  }, [navigate, token]);
}

export default useUpdateContactModal;
