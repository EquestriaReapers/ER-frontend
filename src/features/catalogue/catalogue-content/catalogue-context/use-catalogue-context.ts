import { useContext } from "react";
import CatalogueContext from "./context";

export default function useCatalogueContext() {
  return useContext(CatalogueContext);
}
