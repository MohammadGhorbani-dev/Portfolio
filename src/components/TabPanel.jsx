import { Box } from "@mui/material";

function TabPanel(props) {
  const { children, pageNumber, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={pageNumber !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {pageNumber === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
export default TabPanel;
