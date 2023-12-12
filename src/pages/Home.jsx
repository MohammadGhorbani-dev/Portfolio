import Page from "../pages/components/Page";
import MainContext from "../context";
import bg02 from "../assets/img2.jpg";


import { useContext, useEffect, useRef } from "react";
import { Typography, Box } from "@mui/material";

import Typed from "typed.js";

const Home = () => {
  const { pageNumber } = useContext(MainContext);

  useEffect(() => {
    const typedInfo = new Typed(infoEl.current, {
      strings: strings,
      startDelay: 1000,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 200,
      showCursor: false,
      loop: true,
    });
    return () => {
      typedInfo.destroy();
    };
  }, []);
  const infoEl = useRef(null);
  const strings = ["i'm front-end developer"];

  return (
    <Page pageNumber={pageNumber} index={0}>
      <Box
        sx={{
          backgroundImage: `url(${bg02})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ color: "whitesmoke" }}>
          my name is mohammad
        </Typography>
        <Typography ref={infoEl} variant="h4" sx={{ color: "whitesmoke" }} />
      </Box>
    </Page>
  );
};

export default Home;
