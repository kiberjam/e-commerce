import Header from "../Header";
import ProductCard, { ProductCard2 } from "../ProductCard";

const ProductsPage = () => {
  return (
    <div className="bg-blueGray-100 min-h-screen">
      <div className=" max-w-6xl mx-auto pt-4 pb-20 ">
        <Header />
        <div className="text-xl font-semibold text-blueGray-700 mt-10">
          <h2 className="text-2xl border-b pb-2 border-emerald-300">
            List of all products
          </h2>
          <div className="grid mt-4  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
            <ProductCard />
            <ProductCard2 />
            <ProductCard />
            <ProductCard />
            <ProductCard2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
