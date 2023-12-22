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
import SwipeableViews from "react-swipeable-views";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const handelPageChange = (index) => {
    setPageNumber(index);
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
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="dark"
          />
          <SwipeableViews
            enableMouseEvents
            index={pageNumber}
            onChangeIndex={handelPageChange}
          >
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
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
