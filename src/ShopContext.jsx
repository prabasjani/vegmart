import { storeDatas } from "./data";
import { createContext, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultItems = () => {
  let cart = {};
  for (let i = 1; i < storeDatas.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultItems());
  const [searchItem, setSearchItem] = useState("");

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartCount = (newCount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newCount }));
  };

  const getCartItemAmount = () => {
    let totalAmount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = storeDatas.find(
          (storeData) => storeData.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const getCartCount = () => {
    let cartCount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let cartInfo = storeDatas.find((storeData) =>
          storeData.id === Number(item) ? cartItems[item].length : null
        );
        cartCount = cartItems[item].length * cartInfo;
      }
    }
    return cartCount;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartCount,
    getCartItemAmount,
    getCartCount,
    searchItem,
    setSearchItem,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
