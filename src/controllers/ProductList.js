import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import { arrowIcon } from "../icons";

const ProductListController = () => {
  const [data, setData] = useState([]);
  const [sortPriceAsc, setSortPriceAsc] = useState(true);

  useEffect(() => {
    const productsList = JSON.parse(localStorage.getItem("myProducts"));
    setData(productsList.reverse());
  }, []);

  const onSortCategory = (category) => {
    const productsList = JSON.parse(localStorage.getItem("myProducts"));

    const newArray = [...data];
    const sortedList = productsList.reverse().filter((p) => {
      return p.category === category;
    });
    setData(sortedList);
  };

  const onSortPrice = (category) => {
    const newArray = [...data];
    let sortedList;
    if (sortPriceAsc) {
      sortedList = newArray.sort((a, b) => a.price - b.price);
    } else {
      sortedList = newArray.sort((a, b) => b.price - a.price);
    }
    setSortPriceAsc(!sortPriceAsc);
    setData(sortedList);
  };

  if (!data) {
    return "loading";
  }

  return (
    <ProductListView
      products={data}
      onSortCategory={onSortCategory}
      onSortPrice={onSortPrice}
    />
  );
};

export default ProductListController;

const ProductListView = ({ products, onSortCategory, onSortPrice }) => {
  return (
    <div className="bg-blueGray-100 min-h-screen">
      <div className=" max-w-6xl mx-auto pt-4 pb-20 px-4 ">
        <Header />
        <div className="text-xl text-blueGray-700 mt-10">
          <h2 className="text-2xl border-b pb-2 border-emerald-300">
            List of all products
          </h2>
          <div className="mt-4 mb-6 flex items-center space-x-4">
            <h3>Sort by:</h3>
            <div className="flex space-x-4">
              <CategoryDropDownMenu onSortCategory={onSortCategory} />
              <button
                onClick={onSortPrice}
                className="px-4 py-2 bg-white text-sm font-medium text-gray-700 
              hover:bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
              >
                Price
              </button>
            </div>
          </div>
          <div className="grid mt-4  gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-2">
            {products.map((item) => {
              return <ProductCard key={item.id} product={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryDropDownMenu = ({ onSortCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onLaptop = () => {
    onSortCategory("laptop");
    setIsMenuOpen(false);
  };

  const onMonoblock = () => {
    onSortCategory("monoblock");
    setIsMenuOpen(false);
  };

  const onPrinter = () => {
    onSortCategory("printer");
    setIsMenuOpen(false);
  };

  return (
    <div class="w-full relative inline-block text-left">
      <div>
        <button
          type="button"
          class="inline-flex justify-between  rounded-lg border border-gray-300 shadow-sm
           px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 
           focus:outline-none focus:ring-1  focus:ring-emerald-400"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          Category
          {arrowIcon}
        </button>
      </div>
      {isMenuOpen && (
        <div
          class="origin-top-right w-36 absolute right-0 mt-2 rounded-md shadow bg-white ring-1 
        ring-black ring-opacity-5 focus:outline-none border border-gray-300"
        >
          <div>
            <button
              onClick={onLaptop}
              className="text-gray-700 hover:bg-blueGray-200 
            block w-full px-4 py-2 text-sm text-left"
            >
              Laptop
            </button>
            <button
              onClick={onMonoblock}
              className="text-gray-700 hover:bg-blueGray-200 
            block w-full px-4 py-2 text-sm text-left"
            >
              Monoblock
            </button>
            <button
              onClick={onPrinter}
              className="text-gray-700 hover:bg-blueGray-200 
            block w-full px-4 py-2 text-sm text-left"
            >
              Printer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
