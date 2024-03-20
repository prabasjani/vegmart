import { ShopContext } from "../ShopContext";
import { useContext } from "react";

const CartItem = ({ storeData }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <div className="col-12 d-flex justify-content-center shadow rounded p-3 my-3  ">
      <img
        src={storeData.imgSrc}
        alt={storeData.title}
        width={120}
        height={120}
        className="me-4"
      />
      <div className="d-flex flex-column align-item-center">
        <h3 className="fw-bold fs-3 m-0 text-body-emphasis">
          {storeData.title}
        </h3>
        <h4 className="fs-5 my-2"> Price: &#8377; {storeData.price}.00</h4>
        <div className="input-group mb-3">
          <button
            className="btn btn-sm btn-outline-danger"
            type="button"
            id="button-addon1"
            onClick={() => removeFromCart(storeData.id)}
          >
            -
          </button>
          <input
            value={cartItems[storeData.id]}
            onChange={(e) =>
              updateCartCount(Number(e.target.value), storeData.id)
            }
            className="form-control-sm border border-primary-subtle"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            style={{
              width: "75px",
              textAlign: "center",
              outline: "none",
            }}
          />
          <button
            className="btn btn-sm btn-outline-success"
            type="button"
            id="button-addon2"
            onClick={() => addToCart(storeData.id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
