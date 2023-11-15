import { useState } from "react";

export default function useProfileState() {
  const [profile, setProfile] = useState({
    userId: null as number | null,
    image: "",
    description: "",

    user: {
      email: "",
      id: 0,
      name: "",
      role: "",
      deletedAt: null as Date | null,
    },
  });

  return {
    profile,
    setProfile,
  };
}
