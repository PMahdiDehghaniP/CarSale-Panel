import { Box, Tab, Tabs } from "@mui/material";
import { tabsData } from "../../data/TabsData";
import { projectContext } from "../../Context/ProjectContext";
import { useContext } from "react";
const SideBarTabs = () => {
  const { pageNumber, handlePageNumberChange, setDrawerOpen } =
    useContext(projectContext);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ my: 2 }}
    >
      <Tabs
        textColor="secondary"
        indicatorColor="secondary"
        orientation="vertical"
        variant="scrollable"
        scrollbutton="auto"
        allowScrollButtonsMobile
        sx={{
          width: "100%",
          textAlign: "center",
        }}
        value={pageNumber}
        onChange={handlePageNumberChange}
      >
        {tabsData.map((tabData) => (
          <Tab
            onClick={() => setDrawerOpen(false)}
            key={tabData.index}
            label={tabData.name}
            sx={{
              backgroundColor: "primary.main",
              color: "text.primary",
              my: 2,
              ml: "auto",
              mr: "auto",
              fontSize: "19px",
              borderRadius: 2,
              width: 200,
              height: 60,
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};
export default SideBarTabs;
