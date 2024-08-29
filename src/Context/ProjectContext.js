import { createContext } from "react";
export const projectContext = createContext({
  pageNumber: 0,
  drawerOpen: true,
  setDrawerOpen: () => {},
  handlePageNumberChange: () => {},
});
