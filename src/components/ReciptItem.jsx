import "../styles/recipt-item.css";
import useStore from "../store";

function ReciptItem(menuItem) {
  const result = useStore(store => store.calculateTotal())

  return (
    <li>
      <p>{menuItem.menuItem.name}</p>
      <p>£{result[menuItem.menuItem.name].toFixed(2)}</p>
    </li>
  );
}

export default ReciptItem;
