import { Box, Fab } from "@mui/material";
import { blue } from "@mui/material/colors";
import { MenuRounded } from "@mui/icons-material";
import { useContext } from "react";
import MainContext from "../../context";

const DrawerActionButton = () => {
  const { setOpenDrawer, openDrawer } = useContext(MainContext);
  return (
    <Box
      sx={{
        m: 3,
        display: {
          xs: "Block",
          sm: "block",
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
          background: blue[300],
          ":hover": { background: blue[400] },
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
};
export default DrawerActionButton;
