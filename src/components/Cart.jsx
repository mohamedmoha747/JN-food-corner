function Cart({ cart, onPlaceOrder, onRemoveItem, onUpdateQuantity }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const formatOrderMessage = () => {
    let message = "Order Details:\n\n";
    cart.forEach(item => {
      message += `${item.name} x${item.quantity} - ₹${item.price * item.quantity}\n`;
    });
    message += `\nTotal: ₹${calculateTotal()}`;
    return message;
  };

  const handlePlaceOrder = () => {
    const message = formatOrderMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919487902634?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    onPlaceOrder();
  };

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <p className="empty-cart">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <h4>{item.name}</h4>
              <p>₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}</p>
            </div>
            <div className="cart-item-controls">
              <button 
                className="cart-quantity-btn"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button 
                className="cart-quantity-btn"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button 
                className="remove-btn"
                onClick={() => onRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ₹{calculateTotal()}</h3>
      </div>
      <button className="place-order-btn" onClick={handlePlaceOrder}>
        Place Order via WhatsApp
      </button>
    </div>
  );
}

export default Cart;

