import { useContext } from "react";
import { projectContext } from "../../Context/ProjectContext";
const PageControler = ({ index, children }) => {
  const { pageNumber } = useContext(projectContext);
  return <>{pageNumber !== index ? null : children}</>;
};
export default PageControler;
