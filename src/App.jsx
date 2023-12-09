import Header from "./components/ui/Header";
import MainLayout from "./components/layouts/MainLayout";
import Sidebar from "./components/Sidebar";
import ContentContainer from "./components/ContentContainer";
import TabPanel from "./components/tabs/TabPanel";

import { useState } from "react";

import { Typography } from "@mui/material";

function App() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainLayout>
      {/* <Header /> */}
      <Sidebar value={value} handleChange={handleChange} />
      <ContentContainer>
        <TabPanel value={value} index={0}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            صفحه اصلی
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            درباره من
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            رزومه من
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            نمونه کارها
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            ارتباط با من
          </Typography>
        </TabPanel>
      </ContentContainer>
    </MainLayout>
  );
}

export default App;
