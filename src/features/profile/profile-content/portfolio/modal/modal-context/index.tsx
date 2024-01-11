import React, { createContext, useState } from "react";
import { Portfolio } from "core/profiles/types";
import { PortfolioContent } from "./types";

const PortfolioModalContext = createContext<PortfolioModalContextI>({
  content: PortfolioContent.Show,
  setContent: () => {},
  portfolio: [],
  aPortfolio: null,
  setAPortfolio: () => {},
  loading: false,
  setLoading: () => {},
});

export const PortfolioContentProvider = ({ children, portfolio }: Props) => {
  const [loading, setLoading] = useState(false);
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
    loading,
    setLoading,
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
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export default PortfolioModalContext;
