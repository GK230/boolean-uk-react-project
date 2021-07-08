import "../styles/small-set-meal-form.css";

function SmallSetMealForm({item, addToCart}) {
  return (
    <form>
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
      
    </form>
  );
}

export default SmallSetMealForm;
