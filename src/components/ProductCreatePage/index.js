import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "nanoid";

const ProductCreateController = () => {
  const history = useHistory();

  const handleSubmit = (values) => {
    const productId = nanoid(10);
    const newProduct = {
      id: "000000" + productId, // because user does not submit the ID auto-generating it on submission with 6 leading zeros
      ...values,
    };
    const productsList = JSON.parse(localStorage.getItem("myProducts"));
    productsList.push(newProduct);

    localStorage.setItem("myProducts", JSON.stringify(productsList));

    history.push("/"); // after succesfully updating the local storage with new item redirecting the user to dashboard page
  };

  // in below calling the view function to render the UI
  return <ProductCreateView handleSubmit={handleSubmit} />;
};

export default ProductCreateController;

const ProductCreateView = ({ handleSubmit }) => {
  return (
    <div className="min-h-screen bg-blueGray-100 space-y-10 pb-32">
      <div className="h-12 bg-white shadow flex items-center px-4">
        <Link
          to="/"
          className="w-8 h-8 flex 
        justify-center items-center text-blueGray-500"
        >
          {leftArrow}
        </Link>
      </div>
      <div className="max-w-4xl mx-auto">
        <h2 className=" text-2xl my-2 text-blueGray-700 font-semibold">
          Adding new Product
        </h2>
        <Formik
          initialValues={{
            name: "",
            imageURL: "",
            price: "",
            category: "laptop",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Nameis required").min(2),
            imageURL: Yup.string().required("ImageURL is Required"),
            price: Yup.number().required().positive().integer(),
          })}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form className="space-y-4  bg-white p-4 shadow rounded border border-gray-300">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xl">
                Name of the product
              </label>
              <Field
                className=" w-full bg-emerald-50 border border-emerald-300 p-2 rounded"
                name="name"
                type="text"
              />
              <span className="text-red-500">
                <ErrorMessage name="name" />
              </span>
            </div>
            <div className="space-y-2">
              <label htmlFor="imageURL" className="text-xl">
                Cover image URL
              </label>
              <Field
                className=" w-full bg-emerald-50 border border-emerald-300 p-2 rounded"
                name="imageURL"
                type="text"
              />
              <span className="text-red-500">
                <ErrorMessage name="imageURL" />
              </span>
            </div>
            <div className="space-y-2">
              <label htmlFor="price" className="text-xl">
                Price
              </label>
              <Field
                className=" w-full bg-emerald-50 border border-emerald-300 p-2 rounded"
                name="price"
                type="text"
              />
              <span className="text-red-500">
                <ErrorMessage name="price" />
              </span>
            </div>
            <div className="space-y-2">
              <label htmlFor="nickname" className="text-xl">
                Category
              </label>
              <Field
                className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm
           px-2 py-2 bg-white hover:bg-blue-50 focus:outline-none focus:ring-1  focus:ring-emerald-400"
                name="category"
                as="select"
              >
                <option value="laptop">Laptop</option>
                <option value="monoblock">Monoblock</option>
                <option value="printer">Printer</option>
              </Field>
            </div>
            <div className="flex justify-end">
              <button
                className="py-2 px-4 w-32 text-xl bg-emerald-500 hover:bg-emerald-400 
            text-white rounded-lg"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

const CategoryDropDownMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div class="w-full relative inline-block text-left">
      <div>
        <button
          type="button"
          class="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm
           px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 
           focus:outline-none focus:ring-1  focus:ring-emerald-400"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          Options
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div
          class="origin-top-right w-full absolute right-0 mt-2 rounded-md shadow bg-white ring-1 
        ring-black ring-opacity-5 focus:outline-none border border-gray-300"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <Field type="select">
              <option>sd</option>
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Account settings
              </a>
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Support
              </a>
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                License
              </a>
            </Field>
          </div>
        </div>
      )}
    </div>
  );
};

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
