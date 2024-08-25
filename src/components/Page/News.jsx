import { Helmet } from "react-helmet-async";
const News = ({ pageTitle }) => {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div>صفحه اصلی</div>
    </>
  );
};
export default News;
