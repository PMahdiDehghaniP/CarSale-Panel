import { Box, Typography } from "@mui/material";
const SideBarFooter = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        width="100%"
        sx={{ mt: 2,mb:2 }}
      >
        <Box border="2px solid #60d394" width="80%" borderRadius={6} sx={{paddingY:1}}>
          <Typography
            sx={{ color: "whitesmoke", lineHeight: 2 }}
            textAlign="center"
          >
            طراحی شده برای خرید خودرو
          </Typography>
          <Typography
            sx={{ color: "whitesmoke", lineHeight: 2 }}
            textAlign="center"
          >
            تمامی حقوق متعلق به
            <br />
            &copy; شرکت سازنده است
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default SideBarFooter;
