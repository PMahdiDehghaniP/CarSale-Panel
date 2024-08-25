import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";
const SideBarContainer = ({ children }) => {
  return (
    <Grid
      xs={0}
      sm={0}
      md={3}
      xl={2}
      lg={2}
      bgcolor={grey[900]}
      sx={{
        borderRadius: 2,
        overflowY: "auto",
        overflowX: "hidden",
        height: "100vh",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {children}
    </Grid>
  );
};
export default SideBarContainer;
