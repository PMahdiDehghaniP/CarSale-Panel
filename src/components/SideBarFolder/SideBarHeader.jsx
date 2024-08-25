import { Avatar, Typography, Box } from "@mui/material";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
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
            width: 55,
            height: 55,
            bgcolor: "success.main",
            margin: "0 auto",
          }}
        >
          <DashboardCustomizeRoundedIcon />
        </Avatar>
        <Typography
          variant="h6"
          sx={{ color: "primary.main", fontWeight: 500, marginTop: 1.1 }}
        >
          پنل مدیریت
        </Typography>
      </Box>
    </>
  );
};
export default SideBarHeader;
