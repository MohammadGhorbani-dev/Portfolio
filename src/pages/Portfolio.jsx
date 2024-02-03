import { useEffect, useState } from "react";
import { data } from "../constants/portfolioData";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  Tooltip,
  Fade,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import { blueGrey } from "@mui/material/colors";

const Portfolio = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    () => {
      setLoading(false);
    };
  });

  const handleCardClick = (projectLink) => {
    window.open(projectLink, "_blank");
  };

  return (
    <Grid2
      container
      rowSpacing={6}
      columnSpacing={5}
      sx={{
        m: "auto",
        height: "100vh",
        pt: {
          xs: 4,
          sm: 4,
          md: 2,
          lg: 1,
          xl: 1,
        },
        overflowY: "auto",
      }}
    >
      <Helmet>
        <title>PORTFOLIO | MOHAMMAD GHORBANI</title>
      </Helmet>
      {data.map((item) => (
        <Fade
          direction="right"
          in={loading}
          style={{
            transitionDelay: loading ? `${item.id + 2}99ms` : "0ms",
          }}
          {...(loading ? { timeout: (item.id + 1) * 700 } : {})}
          key={item.id}
        >
          <Grid2 xs={12} sm={6} md={6} lg={6} xl={6}>
            <Card
              sx={{
                backgroundColor: blueGrey[700],
                borderRadius: 3,
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                boxShadow: 10,
              }}
            >
              <CardActionArea onClick={() => handleCardClick(item.projectLink)}>
                <CardMedia
                  component="img"
                  height="250"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    objectFit: "cover",
                    objectPosition: "end",
                    transition: "transform 0.3s",

                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.info}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Tooltip title="More details GitHub" arrow>
                  <Button
                    size="large"
                    color="primary"
                    href={item.githubLink}
                    target="_blank"
                    sx={{ borderRadius: 2 }}
                  >
                    More
                  </Button>
                </Tooltip>
              </CardActions>
            </Card>
          </Grid2>
        </Fade>
      ))}
    </Grid2>
  );
};
export default Portfolio;
