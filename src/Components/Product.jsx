import { FaStarHalfAlt } from "react-icons/fa";
import { ShopContext } from "../ShopContext";
import { useContext } from "react";

const Product = ({ storeData }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[storeData.id];
  return (
    <div className="col d-flex align-items-start shadow rounded p-3 me-3 vegcard">
      <img
        src={storeData.imgSrc}
        alt={storeData.title}
        width={120}
        height={120}
        className="me-4"
      />
      <div>
        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
          {storeData.title}
        </h3>
        <span className="starRating my-1">
          <FaStarHalfAlt />
          <span className="mx-3">{storeData.starRate} ratings</span>
        </span>
        <p className="quantity my-1">quantity: {storeData.quantity} kg </p>
        <p className="price mb-2 fw-bold">
          Price: &#8377; {storeData.price}.00
        </p>
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => addToCart(storeData.id)}
        >
          Add to Cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
