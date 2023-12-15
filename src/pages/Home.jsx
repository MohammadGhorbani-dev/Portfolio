
import { useState, useEffect, useRef } from "react";
import { Typography, Box, Zoom } from "@mui/material";
import Typed from "typed.js";
import { Helmet } from "react-helmet-async";

const Home = () => {
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
    <>
      <Helmet>
        <title>HOME | MOHAMMAD GHORBANI</title>
      </Helmet>

      <Box
        sx={{
         
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
          {...(loading ? { timeout: 1500 } : {})}
        >
          <Typography
            variant="h4"
            sx={{ color: "whitesmoke", textAlign: "center" }}
          >
            Hi my name is mohammad
          </Typography>
        </Zoom>

        <Typography
          ref={infoEl}
          variant="h4"
          sx={{ color: "whitesmoke", textAlign: "center" }}
        />
      </Box>
    </>
  );
};

export default Home;
