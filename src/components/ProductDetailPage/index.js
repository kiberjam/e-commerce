import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Header from "../Header";
import { Link, useHistory } from "react-router-dom";

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
    <div className="bg-blueGray-100  min-h-screen">
      <div className="h-12 bg-white shadow flex items-center px-4  justify-between">
        <button
          onClick={() => {
            history.goBack();
          }}
          className="w-8 h-8 bg-white rounded-full flex 
        justify-center items-center text-blueGray-500"
        >
          {leftArrow}
        </button>
        <div className="flex space-x-6 text-lg text-blueGray-600">
          <Link
            to={`/products/${product.id}/edit`}
            className="flex hover:text-blue-500"
          >
            {editIcon}
            <span to="/">Edit</span>
          </Link>
          <button className="flex hover:text-red-500" onClick={deleteProduct}>
            {deleteIcon}
            <span to="/">Delete</span>
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-4  h-full ">
        <div className="w-full h-96 bg-white rounded shadow my-20 p-10 grid grid-cols-2">
          <div className="relative pb-16/9 overflow-hidden">
            <img
              className=" absolute h-full w-full object-contain rounded-md transform duration-500 group-hover:scale-105"
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

const creaditCardIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 mr-3 fill-current"
    viewBox="0 0 24 24"
  >
    <path d="M0 8v-2c0-1.104.896-2 2-2h18c1.104 0 2 .896 2 2v2h-22zm24 7.5c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-2.156-.882l-.696-.696-2.116 2.169-.991-.94-.696.697 1.688 1.637 2.811-2.867zm-8.844.882c0 1.747.696 3.331 1.82 4.5h-12.82c-1.104 0-2-.896-2-2v-7h14.82c-1.124 1.169-1.82 2.753-1.82 4.5zm-5 .5h-5v1h5v-1zm3-2h-8v1h8v-1z" />
  </svg>
);

const shoppingCardIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 fill-current"
    viewBox="0 0 24 24"
  >
    <path d="M10.975 8l.025-.5c0-.517-.066-1.018-.181-1.5h5.993l-.564 2h-5.273zm-2.475 10c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-10.428l-.455-1.083c-.324.049-.652.083-.99.083-.407 0-.805-.042-1.191-.114l1.306 3.114h13.239l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-9-15c-2.486 0-4.5 2.015-4.5 4.5s2.014 4.5 4.5 4.5c2.484 0 4.5-2.015 4.5-4.5s-2.016-4.5-4.5-4.5zm-.469 6.484l-1.687-1.636.695-.697.992.94 2.115-2.169.697.696-2.812 2.866z" />
  </svg>
);

const leftArrow = (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
    />
  </svg>
);

const editIcon = (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  </svg>
);

const deleteIcon = (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);
