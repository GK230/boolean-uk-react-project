function OrderItem() {
  return (
    <li>
      {/* <h4>{cart.item.name}</h4> */}
      <div class="number">
        <span class="minus">-</span>
        <input type="text" value="1" />
        <span class="plus">+</span>
      </div>
      {/* <h4>{totalPrice}</h4> */}
    </li>
  );
}

export default OrderItem;
