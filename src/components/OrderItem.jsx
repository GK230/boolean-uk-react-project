import "../styles/order-item.css";
import useStore from "../store";

function OrderItem({ cartItem, menuItem, item }) {
  const addToCart = useStore((store) => store.addToCart);
  const removeFromCart = useStore((store) => store.removeFromCart);

  return (
    <li className="order-item" key={cartItem.id}>
      <h4 className="order-item-name">{menuItem.name}</h4>

      <div className="number">
        <button
          className="minus"
          onClick={() => {
            removeFromCart(cartItem.id);
          }}
        >
          -
        </button>
        <span>{cartItem.quantity}</span>
        <button className="plus" onClick={() => addToCart(cartItem.id)}>
          +
        </button>
      </div>
      <h4>£{menuItem.price}</h4>
    </li>
  );
}

export default OrderItem;
