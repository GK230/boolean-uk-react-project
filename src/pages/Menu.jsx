import "../styles/menu.css";

import MenuHeaderSections from "../components/MenuHeaderSections";
import MenuSections from "../components/MenuSections";

import { Link } from "react-router-dom";

function Menu() {
  return (
    <section className="menu">
      <div className="headings">
        <h2>Menu</h2>
        <Link to="/order">
          <button className="order">
            Your Order
          </button>
        </Link>
      </div>
      <MenuHeaderSections />
      <MenuSections />
    </section>
  );
}

export default Menu;
