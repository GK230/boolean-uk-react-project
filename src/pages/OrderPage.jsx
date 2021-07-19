import OrderItem from "../components/OrderItem";
import { Link } from "react-router-dom";
import "../styles/order-page.css";
import useStore from "../store";

function OrderPage({ cartItem, menuItem }) {
  const menu = useStore((store) => store.menu);
  const cart = useStore((store) => store.cart);
  const result = useStore(store => store.calculateTotal())


  if (menuItem === 0) {
    return <h2>Add some tasty items to your order....</h2>
  }  

  return (
    <section className="order-section">
      <h2>Your Order</h2>
      {/* <Link to=""
      <button className="order">Back</button> */}
      <article className="order-article">
        <ul>
          {cart.map((cartItem) => {
            const menuItem = menu.find(
              (menuItem) => menuItem.id === cartItem.menuItemId
            );

            return (
              <OrderItem
                menuItem={menuItem}
                cartItem={cartItem}
                key={cartItem.id}
              />
            );
          })}
        </ul>
        <h5>Total: £{result.total.toFixed(2)}</h5>
      </article>
      <Link to="/recipt">
        <button className="order place-order">View order</button>
      </Link>
    </section>
  );
}

export default OrderPage;
