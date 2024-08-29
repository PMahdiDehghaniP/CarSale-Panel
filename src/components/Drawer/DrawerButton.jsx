import { MenuRounded } from "@mui/icons-material";
import { Fab, Box } from "@mui/material";
import { red } from "@mui/material/colors";
import { useContext } from "react";
import { projectContext } from "../../Context/ProjectContext";
const DrawerButton = () => {
  const { setDrawerOpen } = useContext(projectContext);
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          left:0,
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Fab
          sx={{ backgroundColor: red[500], m: 2 }}
          size="small"
          aria-label="Sidebar"
          onClick={() => setDrawerOpen(true)}
        >
          <MenuRounded />
        </Fab>
      </Box>
    </>
  );
};
export default DrawerButton;
