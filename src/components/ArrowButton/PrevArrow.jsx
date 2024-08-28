import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosIcon
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        fontSize: "30px",
        left: "-25px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};
export default PrevArrow;
