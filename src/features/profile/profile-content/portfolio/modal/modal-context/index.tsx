import React, { createContext, useState } from "react";
import { Portfolio } from "core/profiles/types";
import { PortfolioContent } from "./types";

export const PortfolioModalContext = createContext<PortfolioModalContextI>({
  content: PortfolioContent.Show,
  setContent: () => {},
  portfolio: [],
  aPortfolio: null,
  setAPortfolio: () => {},
});

export const PortfolioContentProvider = ({ children, portfolio }: Props) => {
  const [content, setContent] = useState<PortfolioContent>(
    PortfolioContent.Show
  );
  const [aPortfolio, setAPortfolio] = useState<Portfolio | null>(null);

  const contextValue = {
    content,
    setContent,
    portfolio,
    aPortfolio,
    setAPortfolio,
  };
  return (
    <PortfolioModalContext.Provider value={contextValue}>
      {children}
    </PortfolioModalContext.Provider>
  );
};

interface Props {
  portfolio: Portfolio[];
  children?: React.ReactNode;
}

export interface PortfolioModalContextI {
  content: PortfolioContent;
  setContent: (content: PortfolioContent) => void;
  portfolio: Portfolio[];
  aPortfolio: Portfolio | null;
  setAPortfolio: (aPortfolio: Portfolio | null) => void;
}

export default PortfolioModalContext;
