import { BACKEND_V1_URL } from "app/config";

export const PORTFOLIO_URL = `${BACKEND_V1_URL}/portfolio`;
export const SEARCH_PORTFOLIOS_URL = `${BACKEND_V1_URL}/search/portfolio`;

export interface MessageResponse {
  message: string;
}
