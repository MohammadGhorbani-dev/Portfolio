import { Box } from "@mui/material";
import { Skills, AboutInfo } from ".";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>ABOUT | MOHAMMAD GHORBANI</title>
      </Helmet>
      <Box
        sx={{
          height: "100vh",
          overflow: "auto",
          overflowX: "hidden",
        }}
      >
        <AboutInfo />
        <Skills />
      </Box>
    </>
  );
};

export default About;
