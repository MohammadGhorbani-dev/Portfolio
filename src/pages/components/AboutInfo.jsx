import { ArrowRightRounded } from "@mui/icons-material";
import { Box, Typography, Divider, Chip, Slide } from "@mui/material";
import { blue } from "@mui/material/colors";
import { react } from "../../assets/icons";
import { useState, useEffect } from "react";
import { myInfo } from "../../constants/myInfo";
const AboutInfo = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    () => {
      setLoading(false);
    };
  });
  return (
    <Box>
      <Slide
        direction="left"
        in={loading}
        style={{ transitionDelay: loading ? "300ms" : "0ms" }}
        {...(loading ? { timeout: 1000 } : {})}
      >
        <Divider variant="middle" textAlign="right" sx={{ pt: 5, pb: 1 }}>
          <Chip
            icon={<Box component="img" src={react} sx={{ width: 25 }} />}
            variant="outlined"
            label="Front-end Developer"
          />
        </Divider>
      </Slide>

      {myInfo.map((e, index) => (
        <Typography
          key={index}
          variant="body1"
          sx={{ pl: 2, color: "white", display: "flex", py: 1 }}
        >
          <ArrowRightRounded sx={{ color: blue[300] }} />
          {e}
        </Typography>
      ))}
    </Box>
  );
};

export default AboutInfo;
