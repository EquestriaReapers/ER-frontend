import { Language } from "core/profiles/types";
import { getAllLanguages } from "core/languagues/get-all-languages.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "hooks/use-auth-state";

const useAllLanguages = (name: string) => {
  const [allLanguages, setAllLanguages] = useState<Language[]>([]);
  const getToken = useGetToken();
  const { showErrorToast } = useErrorToast();

  const getLanguages = useCallback(async () => {
    try {
      const token = getToken();
      const data = await getAllLanguages(token, name);
      setAllLanguages(data);
    } catch (error) {
      showErrorToast(error);
    }
  }, [name, getToken, showErrorToast]);

  useEffect(() => {
    getLanguages();
  }, [getLanguages]);

  return allLanguages;
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

export default useAllLanguages;
