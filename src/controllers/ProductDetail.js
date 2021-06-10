import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  creaditCardIcon,
  shoppingCardIcon,
  leftArrow,
  editIcon,
  deleteIcon,
} from "../icons";

const ProductDetailController = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const history = useHistory();

  useEffect(() => {
    const productsList = JSON.parse(localStorage.getItem("myProducts"));
    const singleProduct = productsList.find((p) => p.id === id);
    setData(singleProduct);
  }, []);

  const deleteProduct = () => {
    const productsList = JSON.parse(localStorage.getItem("myProducts"));

    const newList = productsList.filter((p) => {
      return p.id != id;
    });
    localStorage.setItem("myProducts", JSON.stringify(newList));
    history.push("/");
  };

  // if application is not mounted yet, showing loading word
  if (!data) {
    return "loading";
  }
  return (
    <ProductDetailView
      product={data}
      deleteProduct={deleteProduct}
      history={history}
    />
  );
};

export default ProductDetailController;

const ProductDetailView = ({ product, deleteProduct }) => {
  const history = useHistory();
  return (
    <div className="bg-blueGray-100   pb-10 min-h-screen">
      <div className="h-12 bg-white shadow flex items-center px-4  justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              history.goBack();
            }}
            className="w-8 h-8 bg-white rounded-full flex 
        justify-center items-center text-blueGray-500 hover:text-blue-500"
          >
            {leftArrow}
          </button>
          <Link to={`/`} className=" hover:text-blue-500">
            E-commerce
          </Link>
        </div>
        <div className="flex space-x-6 text-lg text-blueGray-600">
          <Link
            to={`/products/${product.id}/edit`}
            className="flex hover:text-blue-500 items-center space-x-1"
          >
            {editIcon}
            <span to="/">Edit</span>
          </Link>
          <button
            className="flex items-center space-x-1 hover:text-red-500"
            onClick={deleteProduct}
          >
            {deleteIcon}
            <span to="/">Delete</span>
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-4  h-full px-4">
        <div className="w-full h-full bg-white  rounded shadow my-20 p-10 grid grid-cols-1 sm:grid-cols-2">
          <div className="relative pb-16/9 overflow-hidden">
            <img
              className=" absolute h-full w-full object-contain rounded-md transform duration-500 
              group-hover:scale-105"
              src={product.imageURL}
            />
          </div>
          <div className="text-lg">
            <h2 className="text-2xl">{product.name}</h2>
            <h3 className="text-blueGray-500">ID: {product.id}</h3>
            <hr className="my-2" />
            <h3>{product.category}</h3>
            <div className="flex py-4 text-emerald-600">
              <div className="flex-1 inline-flex items-center">
                {creaditCardIcon}
                <p className="  text-3xl">$ {product.price}</p>
              </div>
            </div>
            <div className=" flex space-x-3">
              <button
                className="mb-2 md:mb-0 bg-white px-5 py-2 shadow-sm tracking-wider border
                 text-gray-600 rounded-full hover:border-emerald-500 inline-flex items-center 
                 space-x-1 border-gray-400"
              >
                <span className="text-green-400 hover:text-green-500 rounded-lg">
                  {shoppingCardIcon}
                </span>
                <span className="text-xl">Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
