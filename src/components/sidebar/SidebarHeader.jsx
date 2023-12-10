import { Avatar, Typography } from "@mui/material";

import { myPhoto } from "../../assets/myPhoto";
import { useContext } from "react";
import MainContext from "../../context";

const SidebarHeader = () => {
  const { openDrawer } = useContext(MainContext);

  return (
    <>
      <Avatar
        src={myPhoto}
        sx={{
          width: 200,
          height: 200,
          margin: "0 auto",
          mt: 2,
          borderRadius: 4,
          display: {
            xs: openDrawer ? "block" : "none",
            sm: openDrawer ? "block" : "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
        variant="rounded"
      >
        M Gh
      </Avatar>

      <Typography variant="h5" color="white" sx={{ my: 1 }}>
        محمد قربانی
      </Typography>
      <Typography variant="caption" color="white" sx={{ my: 1 }}>
        front-end developer
      </Typography>
    </>
  );
};
export default SidebarHeader;
