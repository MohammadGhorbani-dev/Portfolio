import { Box, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SidebarHeader, SidebarTabs, SidebarFooter } from ".";

const SidebarContent = () => {
  return (
    <Box sx={{ textAlign: "center", justifyContent: "center" }}>
      <SidebarHeader />
      <Divider variant="middle" color={grey[700]} sx={{ my: 2 }} />
      <SidebarTabs />
      <Divider variant="middle" color={grey[700]} sx={{ mt: 2 }} />
      <SidebarFooter />
    </Box>
  );
};

export default SidebarContent;
