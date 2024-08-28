import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        fontSize: "30px",
        right: "-25px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};
export default NextArrow;
