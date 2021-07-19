import "../styles/medium-set-meal-form.css";

function MediumSetMealForm() {
  function handleChange(e) {
    let smallVeg = e.target.value;
  }

  return (
    <form>
      <div className="medium-select">
        <label htmlFor="medVeg">
          Choose your veg:
          <select
            className="medVeg"
            name="veg"
            id="veg"
            onChange={handleChange}
          >
            <option value="longBeans">Long Beans</option>
            <option value="greenBeans">Green Beans</option>
            <option value="flatBeans">Flat Beans</option>
            <option value="cauliflower">Cauliflower</option>
            <option value="peas">Peas</option>
            <option value="okra">Okra</option>
            <option value="spinach">Spinach</option>
          </select>
        </label>
        <label htmlFor="medBeans">
          Choose your beans:
          <select
            className="medBeans"
            name="beans"
            id="beans"
            onChange={handleChange}
          >
            <option value="adzuki">Adzuki</option>
            <option value="blackeye">Blackeye</option>
            <option value="butter">Butter</option>
            <option value="kidney">Red Kidney</option>
          </select>
        </label>
        <label htmlFor="medDal">
          Choose your dal:
          <select
            className="medDal"
            name="dal"
            id="dal"
            onChange={handleChange}
          >
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

export default MediumSetMealForm;
