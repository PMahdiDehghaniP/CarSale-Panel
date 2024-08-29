import { Helmet } from "react-helmet-async";
import { Box, Typography } from "@mui/material";
import { DealershipsData } from "../../data/ContactUsData";
import ContactUsCard from "../PageParts/ContactUsCard";
import { useEffect, useState } from "react";

const ContactUs = ({ pageTitle }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);
  console.log(loading);
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        overflow="hidden"
      >
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        <Typography
          variant="h3"
          color="error"
          sx={{
            mt: 3,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          تماس با ما
        </Typography>
        {DealershipsData.map((Dealership, index) => (
          <ContactUsCard Dealership={Dealership} />
        ))}
      </Box>
    </>
  );
};
export default ContactUs;
