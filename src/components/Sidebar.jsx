import {
  Avatar,
  Typography,
  Box,
  Divider,
  Hidden,
  Tabs,
  Tab,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { myPhoto } from "../assets/myPhoto";
import { grey } from "@mui/material/colors";
import {
  HomeRounded,
  PersonRounded,
  TextSnippetRounded,
  TerminalRounded,
  AlternateEmailRounded,
  CopyrightRounded,
} from "@mui/icons-material";

const Sidebar = ({ value, handleChange }) => {
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };
  return (
    <Grid
      xs={0}
      sm={0}
      md={3}
      lg={2}
      xl={2}
      sx={{ backgroundColor: grey[900], }}
    >
      <Box sx={{ textAlign: "center", justifyContent: "center" }}>
        <Hidden mdDown>
          <Avatar
            src={myPhoto}
            sx={{
              width: 200,
              height: 200,
              margin: "0 auto",
              mt: 2,
              borderRadius: 4,
            }}
            variant="rounded"
          >
            M Gh
          </Avatar>
        </Hidden>
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
          />
          <Tab
            label="درباره من"
            icon={<PersonRounded />}
            sx={{ color: "white" }}
            iconPosition="start"
            {...tabProps(1)}
          />
          <Tab
            label="رزومه من"
            icon={<TextSnippetRounded />}
            sx={{ color: "white" }}
            iconPosition="start"
            {...tabProps(2)}
          />
          <Tab
            label="نمونه کارها"
            icon={<TerminalRounded />}
            sx={{ color: "white" }}
            iconPosition="start"
            {...tabProps(3)}
          />

          <Tab
            label="ارتباط با من"
            icon={<AlternateEmailRounded />}
            sx={{ color: "white" }}
            iconPosition="start"
            {...tabProps(4)}
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
            directed by mohammad ghorbani
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
            opyright2023{<CopyrightRounded sx={{ height: 39 }} />}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Sidebar;
