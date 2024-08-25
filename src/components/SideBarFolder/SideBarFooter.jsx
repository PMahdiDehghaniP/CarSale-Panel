import { Box, Typography } from "@mui/material";
const SideBarFooter = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ my: 2 }}
      >
        <Typography sx={{ color: "whitesmoke" }}>
          طراحی شده برای خرید خودرو
        </Typography>
        <Typography sx={{ color: "whitesmoke" }}>
          تمامی حقوق متعلق به
          <br />
          &copy; شرکت سازنده است
        </Typography>
      </Box>
    </>
  );
};
export default SideBarFooter;
