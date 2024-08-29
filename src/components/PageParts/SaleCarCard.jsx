import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const SaleCard = ({ Car }) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          width: "90%",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius:5,
          my: 2,
        }}
      >
        <Typography variant="h6" color={"text.primary"} sx={{mr:3}}>
          {Car.name}
        </Typography>
        <Typography variant="h6" color={"text.primary"}>
          قیمت نقدی : {Car.price} تومان
        </Typography>
        <CardMedia
          component="img"
          alt={Car.name}
          image={Car.photoPath}
          sx={{
            width: "20%",
          }}
        ></CardMedia>
      </Card>
    </>
  );
};
export default SaleCard;
