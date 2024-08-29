import { Helmet } from "react-helmet-async";
import { CheryCars, KmcCars, KiaCars } from "../../data/ProductData";
import ProductCard from "../PageParts/ProductCard";
import { Box } from "@mui/material";
import Slider from "react-slick";
import Chery from "../../images/CHERY.png";
import Kmc from "../../images/KMC.png";
import Kia from "../../images/KIA.png";
import { options } from "../../constants/SliderOption";
const Products = ({ pageTitle }) => {
  return (
    <Box sx={{ paddingX: 5, paddingY: 3, overflow: "hidden" }}>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Box display="flex" justifyContent="center" width="100%" sx={{ mb: 1 }}>
        <Box component="img" width="20%" src={Chery}></Box>
      </Box>
      <Slider {...options}>
        {CheryCars.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        sx={{ mt: 4, mb: 1 }}
      >
        <Box component="img" width="20%" src={Kmc}></Box>
      </Box>
      <Slider {...options}>
        {KmcCars.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        sx={{ mt: 4, mb: 2 }}
      >
        <Box component="img" width="20%" src={Kia}></Box>
      </Box>
      <Slider {...options}>
        {KiaCars.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </Box>
  );
};
export default Products;
