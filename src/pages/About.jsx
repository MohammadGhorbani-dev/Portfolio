import Page from "../pages/components/Page";
import MainContext from "../context";
import bg04 from "../assets/img4.jpg";
import { useContext } from "react";
import {
  Box,
  CircularProgress,
  Typography,
  Rating,
  Divider,
  Chip,
} from "@mui/material";
import AboutInfo from "./AboutInfo";
import Myskills from "./MySkills";

const About = () => {
  const { pageNumber } = useContext(MainContext);

  return (
    <Page pageNumber={pageNumber} index={1}>
      <Box
        sx={{
          backgroundImage: `url(${bg04})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <AboutInfo />
        <Myskills />
      </Box>
    </Page>
  );
};

export default About;


