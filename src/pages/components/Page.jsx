import { Box } from "@mui/material";

function Page(props) {
  const { children, pageNumber, index, ...other } = props;

  return (
    <div
      role="Page"
      hidden={pageNumber !== index}
      id={`vertical-Page-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {pageNumber === index && <Box sx={{ height: "100vh" }}>{children}</Box>}
    </div>
  );
}
export default Page;
