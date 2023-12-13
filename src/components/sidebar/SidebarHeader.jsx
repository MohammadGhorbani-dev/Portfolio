import { Avatar, Typography, Box, IconButton, Tooltip } from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Instagram,
  SportsEsports,
  Telegram,
} from "@mui/icons-material";
import myProfile from "../../assets/myProfile.jpg";
import { useContext, useEffect, useState } from "react";
import MainContext from "../../context";
import { blue, grey } from "@mui/material/colors";

const SidebarHeader = () => {
  const { openDrawer } = useContext(MainContext);
  const [showAvatar, setShowAvatar] = useState(openDrawer);

  const socialMedia = [
    {
      name: "GitHub",
      icon: GitHub,
      link: "https://github.com/MohammadGhorbani-dev",
      hoverColor: "white",
    },
    {
      name: "LinkedIn",
      icon: LinkedIn,
      link: "https://www.linkedin.com/in/mohammad--ghorbani/",
      hoverColor: blue[400],
    },
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/mohammad_devs/",
      hoverColor: "#ff1744",
    },
    {
      name: "Telegram",
      icon: Telegram,
      link: "https://web.telegram.org/k/",
      hoverColor: blue[400],
    },
    {
      name: "Steam",
      icon: SportsEsports,
      link: "https://steamcommunity.com/profiles/76561198839628975/",
      hoverColor: "#330e62",
    },
  ];

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
