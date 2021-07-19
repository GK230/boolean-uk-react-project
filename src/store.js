import create from "zustand";

const useStore = create((set, get) => ({
  menu: [],
  descriptions: [],
  cart: [],
  setMeals: [],

  fetchDes: () => {
    fetch("http://localhost:4000/descriptions")
      .then((resp) => resp.json())
      .then((descriptions) => set({ descriptions: descriptions }));
  },
  fetchMenu: () => {
    fetch("http://localhost:4000/menu")
      .then((resp) => resp.json())
      .then((menu) => set({ menu: menu }));
  },
  fetchCart: () => {
    fetch("http://localhost:4000/cart")
      .then((resp) => resp.json())
      .then((cart) => set({ cart: cart }));
  },

  getVeg: () => {
    const veg = get().menu.filter((item) => item.type === "veg");
    return veg;
  },
  getBeans: () => {
    const beans = get().menu.filter((item) => item.type === "beans");
    return beans;
  },

  getDal: () => {
    const dal = get().menu.filter((item) => item.type === "dal");
    return dal;
  },
  getBreadRice: () => {
    const breadRice = get().menu.filter(
      (item) => item.type === "bread" || item.type === "rice"
    );
    return breadRice;
  },
  getSides: () => {
    const sides = get().menu.filter(
      (item) =>
        item.type === "salad" ||
        item.type === "papadom" ||
        item.type === "pickle"
    );
    return sides;
  },
  getSmallSetMeal: () => {
    const smallSetMeal = get().menu.filter(
      (item) => item.type === "small-set-meal"
    );
    return smallSetMeal;
  },

  getMedSetMeal: () => {
    const medSetMeal = get().menu.filter(
      (item) => item.type === "med-set-meal"
    );
    return medSetMeal;
  },
  getDrinks: () => {
    const drinks = get().menu.filter((item) => item.type === "drink");
    return drinks;
  },
  getVegDes: () => {
    const vegDes = get().descriptions.filter(
      (description) => description.type === "veg"
    );
    return vegDes;
  },
  getBeansDes: () => {
    const beansDes = get().descriptions.filter(
      (description) => description.type === "beans"
    );
    return beansDes;
  },
  getDalDes: () => {
    const dalDes = get().descriptions.filter(
      (description) => description.type === "dal"
    );
    return dalDes;
  },

  getBreadDes: () => {
    const breadDes = get().descriptions.filter(
      (description) => description.type === "bread"
    );
    return breadDes;
  },
  getSaladDes: () => {
    const saladDes = get().descriptions.filter(
      (description) => description.type === "salad"
    );
    return saladDes;
  },
  getPapadomsDes: () => {
    const papadomsDes = get().descriptions.filter(
      (description) => description.type === "papadoms"
    );
    return papadomsDes;
  },
  getSmallSetMealDes: () => {
    const smallSetMealDes = get().descriptions.filter(
      (description) => description.type === "small-set-meal"
    );
    return smallSetMealDes;
  },
  getMediumSetMealDes: () => {
    const mediumSetMealDes = get().descriptions.filter(
      (description) => description.type === "medium-set-meal"
    );
    return mediumSetMealDes;
  },

  addToCart: (menuItemId) => {
    const cartItem = {
      menuItemId: menuItemId,
      quantity: 1,
    };

    // if (menuItemId === 29) {
    //   const smallMealVeg = smallVeg.target.value;
    //   const smallMealDal = smallDal.target.value;
    // }

    // if (menuItemId === 30) {
    //   const medMealVeg = medVeg.target.value;
    //   const medMealBeans = medBeans.target.value;
    //   const medMealDal = medDal.target.value;
    // }

    const itemInCart = get().cart.find(
      (cartItem) => cartItem.id === menuItemId
    );

    // IF THE ITEM IS IN THE CART
    if (itemInCart !== undefined) {
      const increasedQuantity = {
        id: menuItemId,
        quantity: itemInCart.quantity + 1,
      };
      fetch(`http://localhost:4000/cart/${menuItemId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(increasedQuantity),
      })
        .then((resp) => resp.json())
        .then((cartItem) =>
          set({
            cart: get().cart.map((item) =>
              item.menuItemId === cartItem.menuItemId ? cartItem : item
            ),
          })
        );
    } else {
      fetch("http://localhost:4000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((resp) => resp.json())
        .then((cartItem) => set({ cart: [...get().cart, cartItem] }));
    }
  },

  removeFromCart: (cartItemId) => {
    const itemToRemove = get().cart.find(
      (cartItem) => cartItem.id === cartItemId
    );
    console.log(cartItemId);

    if (itemToRemove.quantity === 1) {
      fetch(`http://localhost:4000/cart/${cartItemId}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((cartItem) => set({ cart: [...get().cart, cartItem] }));
    } else {
      const decreasedQuantity = {
        id: cartItemId,
        quantity: itemToRemove.quantity - 1,
      };
      fetch(`http://localhost:4000/cart/${cartItemId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(decreasedQuantity),
      })
        .then((resp) => resp.json())
        .then((cartItem) =>
          set({
            cart: get().cart.map((item) =>
              item.menuItemId === cartItem.menuItemId ? cartItem : item
            ),
          })
        );
    }
  },
  calculateTotal: () => {
    let result = { total: 0 };

    for (const cartItem of get().cart) {
      const menuItem = get().menu.find(
        (menuItem) => menuItem.id === cartItem.menuItemId
      );
      result[menuItem.name] = menuItem.price * cartItem.quantity;
      result.total += menuItem.price * cartItem.quantity;
    }
    return result;
  },
}));

export default useStore;
