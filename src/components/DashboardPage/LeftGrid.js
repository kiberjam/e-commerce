import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { addIcon, printer, note, mono } from "../../icons";

const LeftGrid = () => {
  const [numOfLaptops, setNumOfLaptops] = useState(0);
  const [numOfMonos, setNumOfMonos] = useState(0);
  const [numOfPrinters, setNumOfPrinters] = useState(0);

  useEffect(() => {
    let laptops = 0;
    let monos = 0;
    let printers = 0;
    const productsList = JSON.parse(localStorage.getItem("myProducts"));
    productsList.forEach((element) => {
      console.log(element.category);
      switch (element.category) {
        case "laptop":
          laptops++;
          break;
        case "printer":
          printers++;
          break;
        case "monoblock":
          monos++;
          break;
      }
    });
    setNumOfLaptops(laptops);
    setNumOfMonos(monos);
    setNumOfPrinters(printers);
  }, []);

  return (
    <div
      className="h-screen flex-none z-50 w-64 bg-white  shadow border-r border-gray-300 p-4
     flex-col hidden xl:flex "
    >
      <div className="flex-auto text-left">
        <h2 className="border-b pb-2 text-xl">
          Number of products per category:
        </h2>
        <div className="mt-8 space-y-6">
          <LaptopCategory number={numOfLaptops} />
          <MonoCategory number={numOfMonos} />
          <PrinterCategory number={numOfPrinters} />
        </div>
      </div>
      <Link
        to="/products/create"
        className="bg-emerald-500 text-white font-semibold p-2 rounded 
        text-lg hover:bg-emerald-400 flex items-center justify-center"
      >
        {addIcon}
        Add new product
      </Link>
    </div>
  );
};

export default LeftGrid;

const LaptopCategory = ({ number }) => {
  return (
    <div className="grid grid-cols-4 ">
      <div className="flex items-center text-blueGray-500">{note}</div>
      <div className="col-span-3 text-xl text-blueGray-500">
        <h3>Laptops:</h3>
        <h3>{number}</h3>
      </div>
    </div>
  );
};

const MonoCategory = ({ number }) => {
  return (
    <div className="grid grid-cols-4 ">
      <div className="flex items-center text-blueGray-500">{mono}</div>
      <div className="col-span-3 text-xl text-blueGray-500">
        <h3>Monoblocks:</h3>
        <h3>{number}</h3>
      </div>
    </div>
  );
};

const PrinterCategory = ({ number }) => {
  return (
    <div className="grid grid-cols-4 ">
      <div className="flex items-center text-blueGray-500">{printer}</div>
      <div className="col-span-3 text-xl text-blueGray-500">
        <h3>Printers:</h3>
        <h3>{number}</h3>
      </div>
    </div>
  );
};
