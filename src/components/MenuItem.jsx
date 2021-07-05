import "../styles/menu-item.css";
import longBeans from "../assets/VegImages/Long-Beans.jpg";

function MenuItem() {
  return (
    <div className="menu-item">
      <h4>Long Beans</h4>
      <img className="item-image" src={longBeans} alt="long beans" />
      <h5>£2</h5>
    </div>
  );
}

export default MenuItem;
