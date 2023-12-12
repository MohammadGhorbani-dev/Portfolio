import { ArrowLeftRounded } from "@mui/icons-material";
import { Box, Typography, Divider, Chip } from "@mui/material";
import { blue } from "@mui/material/colors";
import { react } from "../assets/icons";
const AboutInfo = () => {
  const myInfo = [
    "نام و نام خانوادگی : محمد قربانی",
    "سن : 24",
    "شهر : مشهد",
    "آدرس ایمیل : mohamad.ghorbani.official@gmail.com",
  ];
  return (
    <Box>
      <Divider variant="middle" textAlign="right" sx={{ pt: 5, pb: 1 }}>
        <Chip
          icon={<Box component="img" src={react} sx={{ width: 25 }} />}
        
          variant="outlined"
          label="front-end developer"
        />
      </Divider>
      {myInfo.map((e, index) => (
        <Typography
          key={index}
          variant="body1"
          sx={{ pl: 2, color: "white", display: "flex", py: 1 }}
        >
          <ArrowLeftRounded sx={{ color: blue[300] }} />
          {e}
        </Typography>
      ))}
    </Box>
  );
};

export default AboutInfo;
