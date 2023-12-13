import MainContext from "../context";
import Page from "../pages/components/Page";
import bg02 from "../assets/img2.jpg";

import { useState, useContext, useEffect, useRef } from "react";
import { Typography, Box, Fade, Zoom, Collapse } from "@mui/material";
import Typed from "typed.js";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { pageNumber } = useContext(MainContext);
  const infoEl = useRef(null);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    () => {
      setLoading(false);
    };
  });

  useEffect(() => {
    const typedInfo = new Typed(infoEl.current, {
      strings: ["welcome to my profile", "i'm front-end developer"],
      startDelay: 1000,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 200,
      showCursor: false,
    });

    return () => {
      typedInfo.destroy();
    };
  }, []);

  return (
    <Page pageNumber={pageNumber} index={0}>
      <Helmet>
        <title>MOHAMMAD GHORBANI | Home </title>
      </Helmet>

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
        <Zoom
          in={loading}
          style={{ transitionDelay: loading ? "100ms" : "0ms" }}
          {...(loading ? { timeout: 1000 } : {})}
        >
          <Typography variant="h4" sx={{ color: "whitesmoke" }}>
            my name is mohammad
          </Typography>
        </Zoom>

        <Typography ref={infoEl} variant="h4" sx={{ color: "whitesmoke" }} />
      </Box>
    </Page>
  );
};

export default Home;
