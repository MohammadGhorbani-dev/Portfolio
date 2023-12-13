import MainLayout from "../components/layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../pages/components/Page";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { Home } from "../pages";
import About from "../pages/About";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    isMdUp ? setOpenDrawer(false) : null;
  }, [isMdUp]);

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        setPageNumber,
        handlePageNumber,
        openDrawer,
        setOpenDrawer,
      }}
    >
      <MainLayout>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <PagesContainer>
          <Home />
          <About />

          {/* <Page pageNumber={pageNumber} index={2}>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              رزومه من
            </Typography>
          </Page> */}
          <Page pageNumber={pageNumber} index={2}>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              نمونه کارها
            </Typography>
          </Page>
          <Page pageNumber={pageNumber} index={3}>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              ارتباط با من
            </Typography>
          </Page>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
