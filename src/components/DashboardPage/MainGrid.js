import ProductCard, { ProductCard2 } from "../ProductCard";
import { Link } from "react-router-dom";

const MainGrid = () => {
  return (
    <div className="w-full  ">
      <h1 className="text-2xl border-b border-emerald-300 pb-2">
        Latest added products:
      </h1>
      <div class="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <ProductCard />
        <ProductCard2 />
        <ProductCard />
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
      <div className=" p-10 flex space-x-2">
        {listIcon}
        <h2 className="max-w-xs text-2xl ">View All the products</h2>
      </div>
    </Link>
  );
};

const listIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-full fill-current"
    viewBox="0 0 24 24"
  >
    <path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4 7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553 2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z" />
  </svg>
);
