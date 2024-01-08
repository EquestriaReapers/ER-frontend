import { useContext } from "react";
import ContactCardContext from "./contact-card-context";

export default function useContactCardContext() {
  return useContext(ContactCardContext);
}
