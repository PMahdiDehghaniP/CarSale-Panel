import { Avatar, Typography, Box } from "@mui/material";
const SideBarHeader = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          my: 2,
        }}
      >
        <Avatar
          sx={{
            width: 100,
            height: 100,
            bgcolor: "#f4d58d",
            margin: "0 auto",
          }}
        >
          <img
            src="https://ringo.ir/mag/wp-content/uploads/2022/11/Jac-J7-1.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Avatar>
        <Typography
          variant="h6"
          sx={{ color: "primary.main", fontWeight: 500, marginTop: 1.1 }}
        >
          سامانه خرید و فروش خودرو
        </Typography>
      </Box>
    </>
  );
};
export default SideBarHeader;
