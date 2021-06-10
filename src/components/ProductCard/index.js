import { useDispatch } from "react-redux";
import { increment } from "../../features/counter/counterSlice";
import { Link } from "react-router-dom";

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
                alt="Just a flower"
                className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"
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
                {creaditCardIcon}
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
                text-white rounded-full hover:bg-blueGray-600"
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

export const ProductCard2 = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white shadow-md  rounded-3xl p-4">
        <div className="flex-none lg:flex">
          <div className="h-full w-full lg:h-48 lg:w-48">
            <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
              <img
                src="https://www.techinn.com/f/13754/137543058_5/apple-macbook-air-13-i3-1.1-8gb-256gb-laptop.jpg"
                alt="Just a flower"
                className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"
              />
            </div>
          </div>
          <div className="flex-auto ml-4 justify-evenly py-1">
            <div className="flex flex-wrap ">
              <div className="w-full flex-none text-sm text-blue-700 font-medium ">
                Shop
              </div>
              <h2 className="flex-auto text-lg font-medium h-10 leading-tight line-clamp-2">
                Lenovo ThinkPad T490s Lenovo ThinkPad T490s ahds
                kjashdkljashdljkash
              </h2>
            </div>
            <div className="flex py-4  text-lg text-gray-600">
              <div className="flex-1 inline-flex items-center">
                {creaditCardIcon}
                <p className="">9,659,760 UZS</p>
              </div>
            </div>
            <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
            <div className="flex justify-end space-x-3 text-sm font-medium">
              <div className="flex space-x-2">
                <button
                  className="mb-2 md:mb-0 bg-white px-5 py-2 shadow-sm
                 tracking-wider border text-gray-600 rounded-full
                  hover:bg-gray-100 inline-flex items-center space-x-1 "
                >
                  <span className="text-green-400 hover:text-green-500 rounded-lg">
                    {shoppingCardIcon}
                  </span>
                  <span>Add to cart</span>
                </button>
              </div>
              <button
                className="mb-2 md:mb-0 bg-blueGray-800 px-5 py-2 shadow-sm tracking-wider 
                text-white rounded-full hover:bg-blueGray-600"
                type="button"
                aria-label="like"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const shoppingCardIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 fill-current"
    viewBox="0 0 24 24"
  >
    <path d="M10.975 8l.025-.5c0-.517-.066-1.018-.181-1.5h5.993l-.564 2h-5.273zm-2.475 10c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-10.428l-.455-1.083c-.324.049-.652.083-.99.083-.407 0-.805-.042-1.191-.114l1.306 3.114h13.239l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-9-15c-2.486 0-4.5 2.015-4.5 4.5s2.014 4.5 4.5 4.5c2.484 0 4.5-2.015 4.5-4.5s-2.016-4.5-4.5-4.5zm-.469 6.484l-1.687-1.636.695-.697.992.94 2.115-2.169.697.696-2.812 2.866z" />
  </svg>
);

const creaditCardIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-3 fill-current"
    viewBox="0 0 24 24"
  >
    <path d="M0 8v-2c0-1.104.896-2 2-2h18c1.104 0 2 .896 2 2v2h-22zm24 7.5c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-2.156-.882l-.696-.696-2.116 2.169-.991-.94-.696.697 1.688 1.637 2.811-2.867zm-8.844.882c0 1.747.696 3.331 1.82 4.5h-12.82c-1.104 0-2-.896-2-2v-7h14.82c-1.124 1.169-1.82 2.753-1.82 4.5zm-5 .5h-5v1h5v-1zm3-2h-8v1h8v-1z" />
  </svg>
);
