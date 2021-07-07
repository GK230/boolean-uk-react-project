import OrderItem from "../components/OrderItem";
import { Link } from "react-router-dom";

function OrderPage() {
  return (
    <section>
      <h2>Your Order</h2>
      <article>
        <ul>
          <OrderItem />
        </ul>
      </article>
      <Link to="/recipt">
        <button className="order">Place order</button>
      </Link>
    </section>
  );
}

export default OrderPage;
