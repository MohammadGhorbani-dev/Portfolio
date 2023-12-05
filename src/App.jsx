import { ThemeProvider, createTheme } from "@mui/material/styles";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Button } from "@mui/material";

// Create Custom Theme
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "vazir,roboto",
  },
});

// Create RTL Cache
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, stylisRTLPlugin],
});

function App() {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>وب سایت شخصی محمد قربانی</title>
          </Helmet>
          <div className="App">
            <Button variant="contained">سلام</Button>{" "}
            <Button variant="contained">Hello</Button>
          </div>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
