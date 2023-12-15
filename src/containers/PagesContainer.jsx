import Grid from "@mui/material/Unstable_Grid2";
import bg01 from "../assets/img1.jpg";

const PagesContainer = ({ children }) => {
  return (
    <Grid
      xs={12}
      sm={12}
      md={9}
      lg={10}
      xl={10}
      sx={{
        backgroundImage: `url(${bg01})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </Grid>
  );
};

export default PagesContainer;
