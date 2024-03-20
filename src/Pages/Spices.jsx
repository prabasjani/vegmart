import { storeDatas } from "../data";
import Product from "../Components/Product";

const Spices = () => {
  return (
    <div className="container">
      <h1 className="mx-3 text-center fs-3 fw-bold">Hot and HomeMade</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 align-item-strech g-3 px-3 py-3">
        {storeDatas.map((storeData, id) => {
          return storeData.category === "spices" ? (
            <Product storeData={storeData} key={id} />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Spices;
