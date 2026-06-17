import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { useState } from "react";

function CartItem() {
  const dispatch = useDispatch();
  const { items, totalAmount, totalQuantity } = useSelector(
    (state) => state.cart
  );
  const [showComingSoon, setShowComingSoon] = useState(false);

  const calculateTotalAmount = () => {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  };

  const handleIncrease = (id, currentQuantity) => {
    dispatch(updateQuantity({ id, quantity: currentQuantity + 1 }));
  };

  const handleDecrease = (id, currentQuantity) => {
    if (currentQuantity === 1) {
      dispatch(removeItem(id));
    } else {
      dispatch(updateQuantity({ id, quantity: currentQuantity - 1 }));
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 3000);
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {showComingSoon && (
        <div
          style={{
            textAlign: "center",
            padding: "1rem",
            backgroundColor: "#fff3cd",
            color: "#856404",
            borderRadius: "8px",
            marginBottom: "1rem",
            fontWeight: 600,
          }}
        >
          Coming Soon! Checkout functionality will be available shortly.
        </div>
      )}

      {items.length === 0 && !showComingSoon ? (
        <div className="cart-empty">
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            Your cart is empty.
          </p>
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="unit-price">&#8377;{item.price} each</p>
                <p className="item-total">
                  Total: &#8377;{item.totalPrice}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginTop: "0.5rem",
                  }}
                >
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => handleDecrease(item.id, item.quantity)}
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleIncrease(item.id, item.quantity)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                    title="Remove item"
                  >
                    &#128465;
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <p>
              Total ({totalQuantity} items): &#8377;{calculateTotalAmount()}
            </p>
          </div>

          <div className="cart-actions">
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
