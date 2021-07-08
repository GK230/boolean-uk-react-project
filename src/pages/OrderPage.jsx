import OrderItem from "../components/OrderItem";
import { Link } from "react-router-dom";
import "../styles/order-page.css";
import useStore from "../store";

function OrderPage({ item }) {
  const menu = useStore((store) => store.menu);
  const cart = useStore((store) => store.cart);
  const total = useStore((store) => store.total);


  if (cart === undefined) {
    return <h2>Add some tasty items to your order....</h2>
  }

  return (
    <section>
      <h2>Your Order</h2>
      <article className="order-article">
        <ul>
          {cart.map((cartItem) => {
            const menuItem = menu.find(
              (menuItem) => menuItem.id === cartItem.id
            );
            
            return <OrderItem menuItem={menuItem} cartItem={cartItem} key={cartItem.id}/>;
          })}
        </ul>
        {/* <h5>Total: £${total.toFixed(2)}</h5> */}
      </article>
      {/* <Link to="/recipt">
        <button className="order">Place order</button>
      </Link> */}
    </section>
  );
}

export default OrderPage;
