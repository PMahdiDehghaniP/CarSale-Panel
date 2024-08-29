import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
const ContactUsCard = ({ Dealership }) => {
  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: 3,
        width: "90%",
        my: 2,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          zIndex: 10,
        },
      }}
    >
      <CardContent
        sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <Typography variant="body1" color="text.primary">
          {Dealership.location}
        </Typography>
        <Typography variant="h5" color="text.primary" my={2}>
          {Dealership.name}
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <Divider sx={{ width: "25%", bgcolor: "text.primary" }} />
        </Box>
        <Typography variant="body1" color="text.primary" my={2}>
          {Dealership.address}
        </Typography>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <Typography variant="body1" color="text.primary" sx={{ ml: 1 }}>
            <Box
              component="a"
              href={`tel:${Dealership.number}`}
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                fontWeight: "550",
                fontSize: "18px",
                color: "inherit",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "red",
                },
              }}
            >
              {Dealership.number}
            </Box>
          </Typography>
          <Typography variant="body1" color="text.primary">
            : تماس با ما
          </Typography>
          <Typography variant="body1" color="text.primary">
            <CallRoundedIcon fontSize="12px" sx={{ mx: 0.5 }} />
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default ContactUsCard;
