import tiffinPhoto from "../images/tiffin-photo.jpg";
import logo from "../images/tiffin-icon.png";

// import indianfont from '../assets/samarka

import { Link } from "react-router-dom";
import "../styles/welcome.css";

function WelcomePage() {
  return (
    <section className="welcome">
      <img className="main-image" src={tiffinPhoto} alt="a tiffin" />
      <div className="title">
        <img className="logo" src={logo} alt="a tiffin box icon" />

        <h1>Tiffin</h1>
      </div>

      <p className="subtitle">The healthy, delicious, vegan Indian food delivery service</p>
      <Link to="/menu">
        <button className="order">Order</button>
      </Link>
    </section>
  );
}

export default WelcomePage;
