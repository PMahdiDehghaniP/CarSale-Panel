import MainLayout from "./layouts/MainLayout";
import SideBarContainer from "./containers/SideBarContainer";
import PagesContainer from "./containers/PagesContainer";
import SideBar from "./components/SideBarFolder/SideBar";
import { projectContext } from "./Context/ProjectContext";
import { useState } from "react";
import { tabsData } from "./data/TabsData";
import { PageControler } from "./components/Page";
import SwipeableViews from "react-swipeable-views";
import DrawerButton from "./components/Drawer/DrawerButton";
const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const handlePageNumberChange = (event, newPageNumber) => {
    setPageNumber(newPageNumber);
  };
  return (
    <>
      <projectContext.Provider
        value={{
          pageNumber,
          handlePageNumberChange,
          drawerOpen,
          setDrawerOpen,
        }}
      >
        <MainLayout>
          <DrawerButton />
          <PagesContainer>
            <SwipeableViews
              index={pageNumber}
              onChangeIndex={handlePageNumberChange}
            >
              {tabsData.map((tabData) => (
                <PageControler key={tabData.index} index={tabData.index}>
                  {tabData.component}
                </PageControler>
              ))}
            </SwipeableViews>
          </PagesContainer>
          <SideBarContainer>
            <SideBar />
          </SideBarContainer>
        </MainLayout>
      </projectContext.Provider>
    </>
  );
};

export default App;
