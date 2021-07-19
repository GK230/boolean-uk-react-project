import "../styles/order-item.css";
import useStore from "../store";

function OrderItem({ cartItem, menuItem }) {
  const addToCart = useStore((store) => store.addToCart);
  const removeFromCart = useStore((store) => store.removeFromCart);
  const result = useStore((store) => store.calculateTotal());

  // if (menuItem.id === 29 || menuItem.id === 30) {

  // }

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
      <h4>£{result[menuItem.name].toFixed(2)}</h4>
    </li>
  );
}

export default OrderItem;
