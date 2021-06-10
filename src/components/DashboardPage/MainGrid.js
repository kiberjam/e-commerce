import ProductCard, { ProductCard2 } from "../ProductCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { listIcon } from "../../icons";

const MainGrid = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const productsList = JSON.parse(localStorage.getItem("myProducts"));
    const latestThree = productsList.slice(-3).reverse(); // reversing the array and slicing so that only top 3 appears
    setData(latestThree);
  }, []);

  return (
    <div className="w-full  ">
      <h1 className="text-2xl border-b border-emerald-300 pb-2">
        Latest added products:
      </h1>
      <div class="grid mt-8  gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-2">
        {data.length !== 0 &&
          data.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
        <ViewProductsBox />
      </div>
    </div>
  );
};

export default MainGrid;

const ViewProductsBox = () => {
  return (
    <Link
      to="/products"
      className="flex bg-indigo-500 text-white hover:text-indigo-500 
      shadow-md  rounded-3xl justify-center items-center hover:bg-white"
    >
      <div className=" p-10 flex  items-center space-x-2">
        {listIcon}
        <h2 className="max-w-xs text-2xl ">View All the products</h2>
      </div>
    </Link>
  );
};
