import { Helmet } from "react-helmet-async";
const TermOfSale = ({ pageTitle }) => {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div>صفحه اصلی</div>
      {console.log(3)}
    </>
  );
};
export default TermOfSale;
