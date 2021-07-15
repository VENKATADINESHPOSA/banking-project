import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import MULink from "@material-ui/core/Link";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  const link = props.link;
  return (
    <Breadcrumbs aria-label="breadcrumb" style={{ padding: "10px" }}>
      <Link color="inherit" to="/accounts">
        Accounts
      </Link>
      {link && <MULink color="inherit">{link}</MULink>}
    </Breadcrumbs>
  );
};

export default BreadCrumb;
