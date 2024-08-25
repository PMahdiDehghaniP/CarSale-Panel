import { Helmet } from "react-helmet-async";
const MainPage = ({ pageTitle }) => {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div>صفحه اصلی</div>
    </>
  );
};
export default MainPage;
