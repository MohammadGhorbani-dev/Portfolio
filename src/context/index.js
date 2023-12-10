import { createContext } from "react";

export default createContext({
  pageNumber: 0,
  setPageNumber: () => {},
  handlePageNumber: () => {},
  openDrawer: false,
  setOpenDrawer: () => {},
});
