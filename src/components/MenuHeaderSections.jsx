import "../styles/menu-header-sections.css";
import {
  Router,
  Switch,
  Link,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function MenuHeaderSections() {
  let { path, url } = useRouteMatch();
  let { menuSection } = useParams();

  // // Loop through the buttons and add the active class to the current/clicked button
  // for (var i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", function () {
  //     var current = document.getElementsByClassName("active");
  //     current[0].className = current[0].className.replace(" active", "");
  //     this.className += " active";
  //   });
  // }

  return (
    <div className="menu-header-sections active">
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
