import { useCallback, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Box, Typography, Slide, Zoom } from "@mui/material";
import Background from "../../images/BgMainPage.jpg";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { carSaleParticles } from "../../constants/Particles";
const MainPage = ({ pageTitle }) => {
  const MainPageEl = useRef(null);
  const DescEl = useRef(null);
  useEffect(() => {
    const MainPageTyped = new Typed(MainPageEl.current, {
      strings: ["صفحه اصلی"],
      typeSpeed: 110,
      backSpeed: 80,
      backDelay: 50,
      showCursor: false,
      onComplete: () => {
        const DescTyped = new Typed(DescEl.current, {
          strings: [
            "سامانه خرید و فروش انواع خودرو",
            "فروش انواع خودرو داخلی و خارجی",
            "امکان پرداخت اقساطی",
          ],
          typeSpeed: 90,
          backSpeed: 60,
          backDelay: 50,
          showCursor: false,
          loop: true,
        });
      },
    });

    return () => {
      MainPageTyped.destroy();
    };
  }, []);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          sx={{ width: "100%", px: { xs: 2, sm: 4, md: 6 }, mt: 1 }}
        >
          <Typography
            ref={MainPageEl}
            textAlign="center"
            variant="h5"
            sx={{
              fontSize: "25px",
              color: "whitesmoke",
              mb: 2,
              mt: 0.5,
              fontWeight: 600,
            }}
          ></Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            borderRadius: 2.5,
            width: "100%",
            height: "600px",
            backgroundImage: `url(${Background})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={carSaleParticles}
          />
          <Typography
            textAlign="center"
            ref={DescEl}
            variant="body1"
            sx={{
              fontSize: 34,
              color: "whitesmoke",
              mb: 2,
              mt: 0.5,
            }}
          ></Typography>
        </Box>
      </Box>
    </>
  );
};

export default MainPage;
