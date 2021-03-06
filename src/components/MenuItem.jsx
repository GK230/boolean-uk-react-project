import "../styles/menu-item.css";
import useStore from "../store";

function MenuItem({ item }) {
  const addToCart = useStore((store) => store.addToCart);

  return (
    <div className="menu-item">
      <h4 className="menu-item-name">{item.name}</h4>
      <img className="item-image" src={"../" + item.image} alt={item.name} />
      <p>£{Number(item.price).toFixed(2)}</p>
      <button className="add-to-cart" onClick={() => addToCart(item.id)}>
        Add to order
      </button>
    </div>
  );
}

export default MenuItem;
