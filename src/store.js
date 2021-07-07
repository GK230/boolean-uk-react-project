import create from "zustand";

const useStore = create((set, get) => ({
  menu: [],
  descriptions: [],

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

  getSetMeals: () => {
    const setMeals = get().menu.filter((item) => item.type === "set-meal");
    return setMeals;
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

  cart: [],
  addToCart: (id) =>
    set((state) => {
      const inCart = state.cart.find((item) => item.id === id);

      if (!inCart) {
        return {
          ...state,
          cart: [...state.cart, { id, count: 1 }],
        };
      }

      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      );

      return {
        ...state,
        cart: updatedCart,
      };
    }),
  removeFromCart: (id) =>
    set((state) => {
      const isPresent = state.cart.findIndex((item) => item.id === id);

      if (isPresent === -1) {
        return {
          ...state,
        };
      }

      const updatedCart = state.cart
        .map((item) =>
          item.id === id
            ? { ...item, count: Math.max(item.count - 1, 0) }
            : item
        )
        .filter((item) => item.count);

      return {
        ...state,
        cart: updatedCart,
      };
    }),
}));

export default useStore;
