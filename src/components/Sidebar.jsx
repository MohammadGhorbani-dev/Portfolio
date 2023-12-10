import { Box, SwipeableDrawer, Fab } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { blue, grey } from "@mui/material/colors";
import { MenuRounded } from "@mui/icons-material";
import { useState } from "react";
import DrawerContent from "./ui/DrawerContent";

const Sidebar = ({ value, handleChange }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Grid
      xs={0}
      sm={0}
      md={3}
      lg={2}
      xl={2}
      sx={{ backgroundColor: grey[900] }}
    >
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
          sx={{
            background: blue[300],
            ":hover": { background: blue[400] },
          }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuRounded />
        </Fab>
      </Box>
      <DrawerContent value={value} handleChange={handleChange} />
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
        <DrawerContent
          value={value}
          handleChange={handleChange}
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
        />
      </SwipeableDrawer>
    </Grid>
  );
};

export default Sidebar;
