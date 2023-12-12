import { CircleRounded } from "@mui/icons-material";
import { Box, Typography, Divider, Chip, Rating } from "@mui/material";
import { blue, red } from "@mui/material/colors";

const Myskills = () => {
  const skills = [
    { name: "React JS", value: "4.5" },
    { name: "HTML & CSS", value: "5" },
    { name: "JavaScript", value: "4.5" },
    { name: "Material UI", value: "4" },
    { name: "Tailwind css", value: "5" },
    { name: "GitHub", value: "4" },
    { name: "Git", value: "3.5" },
    { name: "Responsive Design", value: "4" },
    { name: "Next JS", value: "1.5" },
    { name: "Redux", value: "1.5" },
    { name: "Figma      ", value: "3" },
    { name: "Typescript", value: "2" },
  ];
  return (
    <Box>
      <Divider variant="middle" textAlign="left" sx={{ pt: 9, pb: 1 }}>
        <Chip variant="outlined" label="My skills" />
      </Divider>

      <Box
        sx={{
          py: 2,
          pl: 2,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {skills.map((s) => (
          <Box
            key={s.name}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography color="whitesmoke">{s.name}</Typography>
            <Rating
              readOnly
              value={parseFloat(s.value)}
              precision={0.5}
              icon={
                <CircleRounded fontSize="large" sx={{ color: blue[300] }} />
              }
              emptyIcon={<CircleRounded fontSize="large" />}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Myskills;
