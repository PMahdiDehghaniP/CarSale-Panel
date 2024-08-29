import { Drawer } from "@mui/material";
import { useContext } from "react";
import { projectContext } from "../../Context/ProjectContext";
import SideBarContent from "../SideBarFolder/SideBarContent";
const SidebarDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useContext(projectContext);
  return (
    <>
      <Drawer
        open={drawerOpen}
        variant="temporary"
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 300,
            "&::-webkit-scrollbar": {
              display: "none",
            },
            borderRadius:2
          },
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <SideBarContent />
      </Drawer>
    </>
  );
};
export default SidebarDrawer;
