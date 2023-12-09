import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Fab,
  Fade,
  Box,
  Typography,
} from "@mui/material";
import { TiArrowUpThick } from "react-icons/ti";

const Header = () => {
  function ScrollTop(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    return (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Fade>
    );
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography>سلام</Typography>
        </Toolbar>
      </AppBar>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <TiArrowUpThick />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default Header;
