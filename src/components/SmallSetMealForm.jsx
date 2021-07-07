import "../styles/small-set-meal-form.css";
import thali from "../images/thali.jpg";

function SmallSetMealForm() {
  return (
    <form>
      <img className="thali" src={thali} alt="small thali" />
      <div className="small-select">
      <label htmlFor="veg">
        Choose your veg:
        <select className="veg" name="veg" id="veg">
          <option value="longBeans">Long Beans</option>
          <option value="greenBeans">Green Beans</option>
          <option value="flatBeans">Flat Beans</option>
          <option value="cauliflower">Cauliflower</option>
          <option value="peas">Peas</option>
          <option value="okra">Okra</option>
          <option value="spinach">Spinach</option>
        </select>
      </label>
      <label htmlFor="dal">
        Choose your dal:
        <select className="dal" name="dal" id="dal">
          <option value="redLentil">Red Lentil</option>
          <option value="moongBean">Moong Bean</option>
          <option value="blackLentil">Black Lentil</option>
          <option value="chana">Chana</option>
        </select>
      </label>
      </div>
      {/* <button className="add-to-cart" onClick={addToCart(item.id)}> */}
      {/* Add to order */}
      {/* </button> */}{" "}
    </form>
  );
}

export default SmallSetMealForm;
