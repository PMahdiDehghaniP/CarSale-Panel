import Grid from "@mui/material/Unstable_Grid2";
const SideBarContainer = ({ children }) => {
  return (
    <Grid
      xs={0}
      sm={0}
      md={3}
      xl={2}
      lg={2}
      bgcolor={"black"}
      sx={{
        overflowX: "hidden",
        borderRadius:2
      }}
    >
      {children}
    </Grid>
  );
};
export default SideBarContainer;
