import { useDispatch } from "react-redux";
import { increment } from "../../features/counter/counterSlice";
import { Link } from "react-router-dom";
import { shoppingCardIcon, creditCardIcon } from "../../icons";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col">
      <div className="bg-white shadow-md  rounded-3xl p-4">
        <div className="flex-none lg:flex">
          <div className="h-full w-full lg:h-48 lg:w-48">
            <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
              <img
                src={product.imageURL}
                alt="Product image"
                className=" w-full  object-scale-down lg:object-cover  h-36 lg:h-48 rounded-2xl"
              />
            </div>
          </div>
          <div className="flex-auto ml-4 justify-evenly py-1">
            <div className="flex flex-wrap ">
              <div className="w-full flex-none text-sm text-blue-700 font-medium ">
                {product.category}
              </div>
              <h2 className="flex-auto text-lg font-medium h-10 leading-tight">
                {product.name}
              </h2>
            </div>
            <div className="flex py-4  text-lg text-gray-600">
              <div className="flex-1 inline-flex items-center">
                {creditCardIcon}
                <p className="">{product.price}</p>
              </div>
            </div>
            <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
            <div className="flex justify-end space-x-3 text-sm font-medium">
              <div className=" flex space-x-3">
                <button
                  onClick={() => dispatch(increment())}
                  className="mb-2 md:mb-0 bg-white px-5 py-2 shadow-sm tracking-wider border
                 text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-1 "
                >
                  <span className="text-green-400 hover:text-green-500 rounded-lg">
                    {shoppingCardIcon}
                  </span>
                  <span>Add to cart</span>
                </button>
              </div>
              <Link
                to={`/products/${product.id}`}
                className="mb-2 md:mb-0 bg-blueGray-800 px-5 py-2 shadow-sm tracking-wider 
                text-white rounded-full hover:bg-blueGray-600 flex items-center"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
