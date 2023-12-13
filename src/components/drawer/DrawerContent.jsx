import { SwipeableDrawer } from "@mui/material";
import { SidebarContent } from "../sidebar";
import MainContext from "../../context";
import { useContext } from "react";


const DrawerContent = () => {
  const { setOpenDrawer, openDrawer } = useContext(MainContext);


  return (
    <SwipeableDrawer
      variant="temporary"
      anchor="left"
      open={openDrawer}
      onOpen={() => setOpenDrawer(true)}
      onClose={() => setOpenDrawer(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: 250,
        },
        display: {
          xs: "Block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <SidebarContent />
    </SwipeableDrawer>
  );
};
export default DrawerContent;
