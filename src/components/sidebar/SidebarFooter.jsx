import { Typography, Box } from "@mui/material";
import { CopyrightRounded } from "@mui/icons-material";

const SidebarFooter = () => {
  return (
    <Box>
      <Typography
        variant="caption"
        color="initial"
        sx={{
          color: "white",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          mt: 2,
          mx: 2,
        }}
      >
        Designed by Mohammad Ghorbani
      </Typography>
      <Typography
        variant="caption"
        color="initial"
        sx={{
          color: "white",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          mx: 2,
        }}
      >
        {<CopyrightRounded sx={{ height: 40 }} />} opyright 2023 
      </Typography>
    </Box>
  );
};
export default SidebarFooter;
