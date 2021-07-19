import ReciptItem from "../components/ReciptItem";
import useStore from "../store";
import "../styles/recipt-page.css";

function ReciptPage() {
  const cart = useStore((store) => store.cart);
  const menu = useStore((store) => store.menu);
  const result = useStore((store) => store.calculateTotal());

  return (
    <div className="recipt-div">
      <h2>Order</h2>
      <ul>
        {cart.map((cartItem) => {
          const menuItem = menu.find(
            (menuItem) => menuItem.id === cartItem.menuItemId
          );

          return (
            <ReciptItem
              menuItem={menuItem}
              cartItem={cartItem}
              result={result}
              key={cartItem.id}
            />
          );
        })}
      </ul>
      <p>Total: £{result.total.toFixed(2)}</p>
      {/* <button className="order recipt">View order</button> */}

      <button className="order recipt">Place order</button>
    </div>
  );
}

export default ReciptPage;
