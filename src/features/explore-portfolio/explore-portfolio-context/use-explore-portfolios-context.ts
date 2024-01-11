import { useContext } from "react";
import PortfoliosContext from "./context";

export default function usePortfolioContext() {
  return useContext(PortfoliosContext);
}
