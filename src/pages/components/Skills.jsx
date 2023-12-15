import { useEffect, useState } from "react";
import { CircleRounded } from "@mui/icons-material";
import { skills, icons } from "../../constants/skillsAndIconsData,js";
import {
  Box,
  Typography,
  Divider,
  Chip,
  Rating,
  Slide,
  Grow,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Skills = () => {
  const [skillValues, setSkillValues] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    () => {
      setLoading(false);
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillValues((prevSkills) => {
        const nextSkills = { ...prevSkills };
        let allSkillsUpdated = true;
        skills.forEach((skill) => {
          if (
            !(skill.name in nextSkills) ||
            nextSkills[skill.name] < parseFloat(skill.value)
          ) {
            if (!(skill.name in nextSkills)) {
              nextSkills[skill.name] = 0;
            }
            nextSkills[skill.name] += 0.5;
            allSkillsUpdated = false;
          }
        });
        if (allSkillsUpdated) {
          clearInterval(interval);
        }
        return nextSkills;
      });
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Slide
        direction="right"
        in={loading}
        style={{
          transitionDelay: loading ? "350ms" : "0ms",
        }}
        {...(loading ? { timeout: 1000 } : {})}
      >
        <Divider variant="middle" textAlign="left" sx={{ pt: 6, pb: 1 }}>
          <Chip
            variant="outlined"
            label="My Skills"
            icon={
              <>
                {icons.map((i, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={i}
                    alt={i}
                    sx={{ width: 20, mx: 0.5 }}
                  />
                ))}
              </>
            }
          />
        </Divider>
      </Slide>

      <Grid2
        container
        spacing={3}
        sx={{ pl: 2, pt: 3, alignItems: "center", justifyContent: "center" }}
      >
        {skills.map((s) => (
          <Grow
            key={s.name}
            in={loading}
            style={{
              transformOrigin: "1 1 1",
              transitionDelay: loading ? "350ms" : "0ms",
            }}
            {...(loading ? { timeout: 1500 } : {})}
          >
            <Grid2 xs={12} sm={6} md={6} lg={4} xl={4}>
              <Typography variant="body1" color="whitesmoke" sx={{ ml: 1 }}>
                {s.name}
              </Typography>
              <Rating
                size="large"
                readOnly
                value={skillValues[s.name] || 0}
                precision={0.5}
                icon={<CircleRounded fontSize="large" color="info" />}
                emptyIcon={<CircleRounded fontSize="large" />}
              />
            </Grid2>
          </Grow>
        ))}
      </Grid2>
    </Box>
  );
};

export default Skills;
