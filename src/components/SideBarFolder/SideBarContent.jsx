import { Divider } from "@mui/material";
import SideBarHeader from "./SideBarHeader";
import SideBarTabs from "./SideBarTabs";
import SideBarFooter from "./SideBarFooter";
const SideBarContent = () => {
  return (
    <>
      <SideBarHeader />
      <Divider sx={{ borderColor: "#c9184a", borderWidth: 1 }} />
      <SideBarTabs />
      <Divider sx={{ borderColor: "#c9184a", borderWidth: 1 }} />
      <SideBarFooter />
    </>
  );
};
export default SideBarContent;
