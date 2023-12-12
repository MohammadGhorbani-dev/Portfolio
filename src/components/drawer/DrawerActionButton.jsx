import { Box, Fab } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
import { useContext } from "react";
import MainContext from "../../context";

const DrawerActionButton = () => {
  const { setOpenDrawer, openDrawer } = useContext(MainContext);
  return (
    <Box
      sx={{
        position: "absolute",
        m: 3,

        display: {
          xs: "Block",
          sm: "Block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <Fab
        size="small"
        aria-label="Sidebar"
        sx={{
          borderRadius: 4,
          background: "inherit",
          boxShadow: "none",
          transition: "transform 0.4s",
          color: "whitesmoke",

          ":hover": {
            background: "inherit",
            boxShadow: "none",
            transform: "scale(2)",
          },
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
};
export default DrawerActionButton;
