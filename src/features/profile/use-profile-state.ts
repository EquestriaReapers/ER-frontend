import { useState } from "react";

export default function useProfileState() {
  const [profile, setProfile] = useState({
    id: 0,
    userId: null as number | null,
    description: "",

    user: {
      email: "",
      name: "",
    },

    skills: [
      {
        id: 0,
        name: "",
      },
    ],

    experience: [
      {
        id: 0,
        profileId: 0,
        urlProyecto: "",
        cargo: "",
        descripcion: "",
        nombreProyecto: "",
      },
    ],
  });

  return {
    profile,
    setProfile,
  };
}
