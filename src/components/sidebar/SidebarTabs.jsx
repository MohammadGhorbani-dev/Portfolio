import { Tabs, Tab } from "@mui/material";
import {
  HomeRounded,
  PersonRounded,
  TextSnippetRounded,
  TerminalRounded,
  AlternateEmailRounded,
} from "@mui/icons-material";
import MainContext from "../../context";
import { useContext } from "react";
const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setOpenDrawer } =
    useContext(MainContext);
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      onChange={handlePageNumber}
    >
      <Tab
        label="صفحه اصلی"
        icon={<HomeRounded />}
        sx={{ color: "white" }}
        iconPosition="start"
        {...tabProps(0)}
        onClick={() => setOpenDrawer(false)}
      />
      <Tab
        label="درباره من"
        icon={<PersonRounded />}
        sx={{ color: "white" }}
        iconPosition="start"
        {...tabProps(1)}
        onClick={() => setOpenDrawer(false)}
      />
      <Tab
        label="رزومه من"
        icon={<TextSnippetRounded />}
        sx={{ color: "white" }}
        iconPosition="start"
        {...tabProps(2)}
        onClick={() => setOpenDrawer(false)}
      />
      <Tab
        label="نمونه کارها"
        icon={<TerminalRounded />}
        sx={{ color: "white" }}
        iconPosition="start"
        {...tabProps(3)}
        onClick={() => setOpenDrawer(false)}
      />

      <Tab
        label="ارتباط با من"
        icon={<AlternateEmailRounded />}
        sx={{ color: "white" }}
        iconPosition="start"
        {...tabProps(4)}
        onClick={() => setOpenDrawer(false)}
      />
    </Tabs>
  );
};

export default SidebarTabs;
