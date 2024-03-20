import { storeDatas } from "../data";
import { ShopContext } from "../ShopContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../Components/CartItem";

const Cart = () => {
  const { cartItems, getCartItemAmount } = useContext(ShopContext);
  const subTotal = getCartItemAmount();
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1 className="mx-3 text-center fs-4">Your Cart Items</h1>
      <div className="d-flex flex-column justify-content-center">
        <div className="row row-cols-1 align-item-strech g-3 px-3 py-3 ">
          <div>
            {storeDatas.map((storeData, id) => {
              if (cartItems[storeData.id] > 0) {
                return <CartItem storeData={storeData} key={id} />;
              }
            })}
          </div>
        </div>

        {subTotal > 0 ? (
          <div className="chekout px-3 py-3">
            <h2>SubTotal: &#8377; {subTotal}</h2>
            <div className="d-flex">
              <button
                className="btn btn-dark me-3"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </button>
              <button className="btn btn-dark ">Checkout</button>
            </div>
          </div>
        ) : (
          <h3>Your Cart is Empty</h3>
        )}
      </div>
    </div>
  );
};

export default Cart;
