import { CircleRounded } from "@mui/icons-material";
import { Box, Typography, Divider, Chip, Rating } from "@mui/material";
import { blue } from "@mui/material/colors";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
  css3,
  html5,
  git,
  javascript,
  react,
  next,
  tailwind,
  typescript,
} from "../assets/icons";

const Myskills = () => {
  const skills = [
    { name: "React JS", value: "4.5" },
    { name: "HTML & CSS", value: "5" },
    { name: "JavaScript", value: "4.5" },
    { name: "Material UI", value: "4" },
    { name: "Tailwind css", value: "4.5" },
    { name: "GitHub", value: "4" },
    { name: "Git", value: "3.5" },
    { name: "Responsive Design", value: "4" },
    { name: "Next JS", value: "1.5" },
    { name: "Redux", value: "1.5" },
    { name: "Figma      ", value: "3" },
    { name: "Typescript", value: "2" },
  ];
  const icons = [
    css3,
    html5,
    git,
    javascript,
    react,
    next,
    tailwind,
    typescript,
  ];
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Divider variant="middle" textAlign="left" sx={{ pt: 6, pb: 1 }}>
        <Chip
          variant="outlined"
          label="My skills"
          icon={
            <>
              {icons.map((i, index) => (
                <Box
                  key={index}
                  alt={i}
                  component="img"
                  src={i}
                  sx={{ width: 20, mx: 0.5 }}
                />
              ))}
            </>
          }
        />
      </Divider>

      <Grid2
        container
        spacing={3}
        sx={{ pl: 2, py: 3, alignItems: "center", justifyContent: "center" }}
      >
        {skills.map((s, index) => (
          <Grid2 xs={12} sm={6} md={6} lg={4} xl={4} key={index}>
            <Typography variant="body1" color="whitesmoke" sx={{ ml: 1 }}>
              {s.name}
            </Typography>
            <Rating
              size="large"
              readOnly
              value={parseFloat(s.value)}
              precision={0.5}
              icon={
                <CircleRounded fontSize="large" sx={{ color: blue[300] }} />
              }
              emptyIcon={<CircleRounded fontSize="large" />}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Myskills;
