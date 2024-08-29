import { Box } from "@mui/material";
const SaleCardTabPanel = ({ value, index, children }) => {
  return (
    <>
      {value === index ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
        >
          {children}
        </Box>
      ) : null}
    </>
  );
};
export default SaleCardTabPanel;
