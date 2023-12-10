import {
  Avatar,
  Typography,
  Box,
  Divider,
  Hidden,
  Tabs,
  Tab,
  Drawer,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import {
  HomeRounded,
  PersonRounded,
  TextSnippetRounded,
  TerminalRounded,
  AlternateEmailRounded,
  CopyrightRounded,
} from "@mui/icons-material";

import { myPhoto } from "../../assets/myPhoto";

const DrawerContent = ({ value, handleChange, openDrawer, setOpenDrawer }) => {
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };
  return (
    <Box sx={{ textAlign: "center", justifyContent: "center" }}>
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
      <Divider variant="middle" color={grey[700]} sx={{ my: 2 }} />
      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        value={value}
        onChange={handleChange}
      >
        <Tab
          label="صفحه اصلی"
          icon={<HomeRounded />}
          sx={{ color: "white" }}
          iconPosition="start"
          {...tabProps(0)}
          onClick={() => setOpenDrawer(false)}
        />
        <Tab
          label="درباره من"
          icon={<PersonRounded />}
          sx={{ color: "white" }}
          iconPosition="start"
          {...tabProps(1)}
          onClick={() => setOpenDrawer(false)}
        />
        <Tab
          label="رزومه من"
          icon={<TextSnippetRounded />}
          sx={{ color: "white" }}
          iconPosition="start"
          {...tabProps(2)}
          onClick={() => setOpenDrawer(false)}
        />
        <Tab
          label="نمونه کارها"
          icon={<TerminalRounded />}
          sx={{ color: "white" }}
          iconPosition="start"
          {...tabProps(3)}
          onClick={() => setOpenDrawer(false)}
        />

        <Tab
          label="ارتباط با من"
          icon={<AlternateEmailRounded />}
          sx={{ color: "white" }}
          iconPosition="start"
          {...tabProps(4)}
          onClick={() => setOpenDrawer(false)}
        />
      </Tabs>
      <Divider variant="middle" color={grey[700]} sx={{ mt: 2 }} />
      <Box>
        <Typography
          variant="caption"
          color="initial"
          sx={{
            color: "white",
            display: "flex",
            justifyContent: "right",
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
            justifyContent: "right",
            alignItems: "center",
            mx: 2,
          }}
        >
          opyright 2023{<CopyrightRounded sx={{ height: 39 }} />}
        </Typography>
      </Box>
    </Box>
  );
};

export default DrawerContent;
