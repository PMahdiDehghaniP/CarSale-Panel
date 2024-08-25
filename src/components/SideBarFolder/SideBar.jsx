import { Divider } from "@mui/material";
import SideBarHeader from "./SideBarHeader";
import SideBarTabs from "./SideBarTabs";
import SideBarFooter from "./SideBarFooter";

const SideBar = () => {
  return (
    <>
      <SideBarHeader />
      <Divider sx={{ borderColor: "secondary.main", borderWidth: 1 }} />
      <SideBarTabs />
      <Divider sx={{ borderColor: "secondary.main", borderWidth: 1 }} />
      <SideBarFooter />
    </>
  );
};

export default SideBar;
