import { createContext } from "react";
export const projectContext = createContext({
  pageNumber: 0,
  handlePageNumberChange: () => {},
});
