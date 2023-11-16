import { useState } from "react";

export default function useProfileState() {
  const [profile, setProfile] = useState({
    id: 0,
    userId: null as number | null,
    image: "",
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
  });

  return {
    profile,
    setProfile,
  };
}
