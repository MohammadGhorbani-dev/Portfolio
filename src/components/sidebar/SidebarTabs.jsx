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
import { blue } from "@mui/material/colors";
const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setOpenDrawer } =
    useContext(MainContext);

  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `Page-${index}`,
    };
  };

  const tabs = [
    { label: "صفحه اصلی", icon: <HomeRounded />, ...tabProps(0) },
    { label: "درباره من", icon: <PersonRounded />, ...tabProps(1) },
    { label: "رزومه من", icon: <TextSnippetRounded />, ...tabProps(2) },
    { label: "نمونه کارها", icon: <TerminalRounded />, ...tabProps(3) },
    { label: "ارتباط با من", icon: <AlternateEmailRounded />, ...tabProps(4) },
  ];

  return (
    <Tabs
      visibleScrollbar
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      onChange={handlePageNumber}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          sx={{
            color: "white",
            transition: "transform 0.4s",
            ":hover": {
              transform: "scale(0.8)",
              color: blue[100],
            },
          }}
          iconPosition="start"
          {...tab}
          onClick={() => setOpenDrawer(false)}
        />
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
