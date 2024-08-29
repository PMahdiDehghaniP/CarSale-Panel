import { Box, CardMedia, Tabs, Tab, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Banner from "../../images/Term-of-sale-banner.jpg";
import SaleCard from "../PageParts/SaleCarCard";
import { CheryCars, KiaCars, KmcCars } from "../../data/ProductData";
import { useState } from "react";
import SaleCardTabPanel from "../PageParts/SaleCardTabPanel";
import SwipeableViews from "react-swipeable-views";

const TermOfSale = ({ pageTitle }) => {
  const [carCompanyIndex, setCarCompanyIndex] = useState(0);

  const handleCompanyChange = (event, newValue) => {
    setCarCompanyIndex(newValue);
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        overflow="hidden"
      >
        <Typography
          variant="h3"
          color="error"
          sx={{
            mt: 3,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          شرایط فروش
        </Typography>
        <CardMedia
          component={"img"}
          alt="بنر"
          image={Banner}
          sx={{
            my: 2,
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          width="90%"
        >
          <Typography
            variant="h5"
            color="error"
            sx={{
              mt: 3,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            شرایط فروش محصولات ما
          </Typography>
          <Typography
            textAlign="left"
            sx={{ my: 1 }}
            variant="h6"
            color="text.primary"
            lineHeight={2}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </Typography>
        </Box>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Tabs value={carCompanyIndex} onChange={handleCompanyChange}>
            <Tab label="KMC" />
            <Tab label="Chery" />
            <Tab label="Kia" />
          </Tabs>
          <SwipeableViews
            index={carCompanyIndex}
            onChangeIndex={handleCompanyChange}
          >
            <SaleCardTabPanel value={carCompanyIndex} index={0}>
              {KmcCars.map((Car) => (
                <SaleCard key={Car.id} Car={Car} />
              ))}
            </SaleCardTabPanel>
            <SaleCardTabPanel value={carCompanyIndex} index={1}>
              {CheryCars.map((Car) => (
                <SaleCard key={Car.id} Car={Car} />
              ))}
            </SaleCardTabPanel>
            <SaleCardTabPanel value={carCompanyIndex} index={2}>
              {KiaCars.map((Car) => (
                <SaleCard key={Car.id} Car={Car} />
              ))}
            </SaleCardTabPanel>
          </SwipeableViews>
        </Box>
      </Box>
    </>
  );
};

export default TermOfSale;
