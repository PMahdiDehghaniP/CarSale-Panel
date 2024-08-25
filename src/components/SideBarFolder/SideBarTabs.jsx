import { Box, Tab, Tabs } from "@mui/material";
import { tabsData } from "../../data/TabsData";
import { projectContext } from "../../Context/ProjectContext";
import { useContext } from "react";
const SideBarTabs = () => {
  const { pageNumber, handlePageNumberChange } = useContext(projectContext);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ my: 2 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollbutton="auto"
        allowScrollButtonsMobile
        sx={{
          width: "100%",
        }}
        value={pageNumber}
        onChange={handlePageNumberChange}
      >
        {tabsData.map((tabData) => (
          <Tab
            key={tabData.index}
            label={tabData.name}
            sx={{
              backgroundColor: "purple",
              my: 2,
              mx: 3,
              fontSize: "19px",
              borderRadius: 2,
              textAlign: "center",
              width:220,
              height: 60,
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};
export default SideBarTabs;
