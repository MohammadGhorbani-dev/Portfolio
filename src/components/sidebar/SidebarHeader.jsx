import { Avatar, Typography } from "@mui/material";

import myProfile from "../../assets/myProfile.jpg";
import { useContext, useEffect, useState } from "react";
import MainContext from "../../context";

const SidebarHeader = () => {
  const { openDrawer } = useContext(MainContext);
  const [showAvatar, setShowAvatar] = useState(openDrawer);

  useEffect(() => {
    let timeoutId;

    if (openDrawer) {
      timeoutId = setTimeout(() => {
        setShowAvatar(openDrawer);
      }, 100);
    } else {
      setShowAvatar(openDrawer);
    }
    return () => clearTimeout(timeoutId);
  }, [openDrawer]);

  const displayStyle = showAvatar ? "block" : "none";

  return (
    <>
      <Avatar
        src={myProfile}
        sx={{
          width: 200,
          height: 200,
          margin: "0 auto",
          mt: 2,
          borderRadius: 3,
          display: {
            xs: displayStyle,
            sm: displayStyle,
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
