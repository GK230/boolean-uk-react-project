import "../styles/menu-header-sections.css";
import { Router, Switch, Link, Route, useRouteMatch } from "react-router-dom";

function MenuHeaderSections() {
  let { path, url } = useRouteMatch();

  return (
    <div className="menu-header-sections">
      <Link to={`${url}/veg`}>
        <div className="menu-item-header">
          <h3>Veg</h3>
        </div>
      </Link>
      <Link to={`${url}/beans`}>
        <div className="menu-item-header">
          <h3>Beans</h3>
        </div>
      </Link>

      <Link to={`${url}/dal`}>
        <div className="menu-item-header">
          <h3>Dal</h3>
        </div>
      </Link>

      <Link to={`${url}/bread-rice`}>
        <div className="menu-item-header">
          <h3>Bread &amp; Rice</h3>
        </div>
      </Link>

      <Link to={`${url}/sides`}>
        <div className="menu-item-header">
          <h3>Sides</h3>
        </div>
      </Link>

      <Link to={`${url}/set-meals`}>
        <div className="menu-item-header">
          <h3>Set Meals</h3>
        </div>
      </Link>

      <Link to={`${url}/drinks`}>
        <div className="menu-item-header">
          <h3>Water &amp; Juice</h3>
        </div>
      </Link>
    </div>
  );
}

export default MenuHeaderSections;
