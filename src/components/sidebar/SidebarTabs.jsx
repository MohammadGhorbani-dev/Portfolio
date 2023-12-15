import { Tabs, Tab } from "@mui/material";
import { tabs } from "../../constants/tabsData";
import MainContext from "../../context";
import { useContext } from "react";
import { blue } from "@mui/material/colors";

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setOpenDrawer } =
    useContext(MainContext);

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
