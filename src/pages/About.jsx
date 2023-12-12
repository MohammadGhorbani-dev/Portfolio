import Page from "../pages/components/Page";
import MainContext from "../context";
import bg04 from "../assets/img4.jpg";
import { useContext } from "react";
import { Box } from "@mui/material";
import { Myskills, AboutInfo } from ".";

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
          overflow: "auto",
        }}
      >
        <AboutInfo />
        <Myskills />
      </Box>
    </Page>
  );
};

export default About;
