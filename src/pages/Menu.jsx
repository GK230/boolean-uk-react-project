import '../styles/menu.css'

import MenuHeaderSections from "../components/MenuHeaderSections";
import MenuSection from "../components/MenuSections";

function Menu() {
  return (
    <section className="menu">
      <h2>Menu</h2>
      <MenuHeaderSections />
      <MenuSection />
    </section>
  );
}

export default Menu;
