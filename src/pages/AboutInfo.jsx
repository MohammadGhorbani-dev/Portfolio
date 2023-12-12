import { ArrowLeftRounded } from "@mui/icons-material";
import { Box, Typography, Divider, Chip } from "@mui/material";
const AboutInfo = () => {
  const myInfo = [
    "نام و نام خانوادگی : محمد قربانی",
    "سن : 24",
    "شهر : مشهد",
    "آدرس ایمیل : mohamad.ghorbani.official@gmail.com",
  ];
  return (
    <Box>
      <Divider variant="middle" textAlign="right" sx={{ pt: 9, pb: 1 }}>
        <Chip variant="outlined" label="front-end developer" />
      </Divider>
      {myInfo.map((e) => (
        <Typography
          variant="body1"
          sx={{ pl: 2, color: "white", display: "flex", py: 1 }}
        >
          <ArrowLeftRounded />
          {e}
        </Typography>
      ))}
    </Box>
  );
};

export default AboutInfo;
