import { CardContent, Card, CardMedia, Typography } from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        width: "80%",
        margin: "10px auto",
        borderRadius: 2,
        boxShadow: 3,
        textAlign: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          zIndex: 10,
          cursor: "pointer",
        },
      }}
    >
      <CardMedia
        component="img"
        alt={product.name}
        image={product.photoPath}
        sx={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          textAlign="center"
          fontSize="18px"
        >
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="left"
          fontSize="18px"
        >
          گیر بکس: {product.gearbox}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="left"
          fontSize="18px"
        >
          حجم موتور: {product.enginevolume}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="left"
          fontSize="18px"
        >
          توان موتور: {product.power}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="left"
          fontSize="18px"
        >
          گشتاور: {product.torque}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="left"
          fontSize="18px"
        >
          حداکثر سرعت: {product.maxSpeed}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="left"
          fontSize="18px"
        >
          تنفس موتور: {product.engineBreather}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
