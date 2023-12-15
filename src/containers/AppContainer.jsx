import MainLayout from "../components/layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../pages/components/Page";
import { useEffect, useState } from "react";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { Home, About, Portfolio, ContactUs } from "../pages";
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
          <Page pageNumber={pageNumber} index={0}>
            <Home />
          </Page>
          <Page pageNumber={pageNumber} index={1}>
            <About />
          </Page>
          <Page pageNumber={pageNumber} index={2}>
            <Portfolio />
          </Page>
          <Page pageNumber={pageNumber} index={3}>
            <ContactUs />
          </Page>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
