import { storeDatas } from "../data";
import Product from "../Components/Product";
import { ShopContext } from "../ShopContext";
import { useContext } from "react";

const Shop = () => {
  const { searchItem } = useContext(ShopContext);
  return (
    <div className="container">
      <h1 className="mx-3 text-center fs-4">Welcome to VEGMART</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 align-item-strech g-3 px-3 py-3">
        {storeDatas
          .filter((storeData) => {
            return searchItem.toLowerCase() === ""
              ? storeData
              : storeData.title.toLowerCase().includes(searchItem);
          })
          .map((storeData, id) => {
            return <Product storeData={storeData} key={id} />;
          })}
      </div>
    </div>
  );
};

export default Shop;
