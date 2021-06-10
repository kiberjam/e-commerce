import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, useHistory } from "react-router-dom";
import { nanoid } from "nanoid";
import { leftArrow } from "../icons";

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
    <div className="min-h-screen bg-blueGray-100 space-y-10 pb-16">
      <div className="h-12 bg-white shadow flex items-center px-4">
        <Link
          to="/"
          className="w-8 h-8 flex 
        justify-center items-center text-blueGray-500"
        >
          {leftArrow}
        </Link>
      </div>
      <div className="max-w-4xl mx-auto  px-4">
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
