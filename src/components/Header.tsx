import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link to="/" className="text-success navbar-brand">
          <FontAwesomeIcon icon={faCloudSun} className="mx-3" />
          Weather forecast
        </Link>
      </div>
    </nav>
  );
};

export default Header;
