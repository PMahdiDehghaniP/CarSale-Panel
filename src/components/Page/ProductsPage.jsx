import { Helmet } from "react-helmet-async";
const Products = ({ pageTitle }) => {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div>محصولات</div>
    </>
  );
};
export default Products;
