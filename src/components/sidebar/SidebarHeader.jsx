import { Avatar, Typography, Box, IconButton, Tooltip } from "@mui/material";
import myProfile from "../../assets/myProfile.jpg";
import { useContext, useEffect, useState } from "react";
import MainContext from "../../context";
import { grey } from "@mui/material/colors";
import { socialMedia } from "../../constants/socialMediaData";

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
          width: {
            xs: 200,
            sm: 210,
            lg: 210,
            xl: 210,
          },
          height: {
            xs: 200,
            sm: 210,
            lg: 200,
            xl: 200,
          },
          margin: "0 auto",
          mt: 2,
          borderRadius: 2,
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

      <Typography variant="h6" color="white" sx={{ my: 1 }}>
        Mohammad Ghorbani
      </Typography>
      <Typography variant="caption" color="white" sx={{ my: 1 }}>
        Front-end Developer
      </Typography>
      <Box
        component="div"
        sx={{
          margin: "0 auto",
          mt: 2,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {socialMedia.map((i) => (
          <Tooltip key={i.name} title={i.name} enterDelay={800} arrow>
            <IconButton aria-label={i.name}>
              <a href={i.link} target="_blank" rel="noopener noreferrer">
                <i.icon
                  fontSize="medium"
                  sx={{
                    color: grey[400],
                    transition: "transform 0.3s",
                    ":hover": {
                      color: i.hoverColor,
                      transform: "scale(1.8)",
                    },
                  }}
                />
              </a>
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </>
  );
};
export default SidebarHeader;
