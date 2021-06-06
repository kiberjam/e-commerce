import { Link } from "react-router-dom";

const LeftGrid = () => {
  return (
    <div
      className="h-screen flex-none z-50 w-72 bg-white  shadow border-r border-gray-300 p-4
    flex flex-col"
    >
      <div className="flex-auto text-left">
        <h2 className="border-b pb-2 text-xl">
          Number of products per category:
        </h2>
        <div className="mt-8 space-y-6">
          <SingleCategory2 />
          <SingleCategory />
          <SingleCategory3 />
        </div>
      </div>
      <Link
        to="/"
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

const SingleCategory = () => {
  return (
    <div className="grid grid-cols-4 ">
      <div className="flex items-center text-blueGray-500">{mono}</div>
      <div className="col-span-3 text-xl text-blueGray-500">
        <h3>Monoblock:</h3>
        <h3>87</h3>
      </div>
    </div>
  );
};

const SingleCategory2 = () => {
  return (
    <div className="grid grid-cols-4 ">
      <div className="flex items-center text-blueGray-500">{note}</div>
      <div className="col-span-3 text-xl text-blueGray-500">
        <h3>Notebook:</h3>
        <h3>123</h3>
      </div>
    </div>
  );
};

const SingleCategory3 = () => {
  return (
    <div className="grid grid-cols-4 ">
      <div className="flex items-center text-blueGray-500">{printer}</div>
      <div className="col-span-3 text-xl text-blueGray-500">
        <h3>Printers:</h3>
        <h3>43</h3>
      </div>
    </div>
  );
};

const mono = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 fill-current"
    viewBox="0 0 24 24"
  >
    <path d="M2 0c-1.104 0-2 .896-2 2v15c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-15c0-1.104-.896-2-2-2h-20zm20 14h-20v-12h20v12zm-6.599 7c0 1.6 1.744 2.625 2.599 3h-12c.938-.333 2.599-1.317 2.599-3h6.802z" />
  </svg>
);

const note = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 fill-current"
    viewBox="0 0 24 24"
  >
    <path d="M22 3.2c0-.663-.537-1.2-1.2-1.2h-17.6c-.663 0-1.2.537-1.2 1.2v11.8h20v-11.8zm-2 9.8h-16v-9h16v9zm2 3h-20c-.197.372-2 4.582-2 4.998 0 .522.418 1.002 1.002 1.002h21.996c.584 0 1.002-.48 1.002-1.002 0-.416-1.803-4.626-2-4.998zm-12.229 5l.467-1h3.523l.467 1h-4.457z" />
  </svg>
);

const printer = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 fill-current"
    viewBox="0 0 24 24"
  >
    <path d="M16 18h-8v-1h8v1zm-2 1h-6v1h6v-1zm10-14v13h-4v6h-16v-6h-4v-13h4v-5h16v5h4zm-18 0h12v-3h-12v3zm12 10h-12v7h12v-7zm4-8h-20v9h2v-3h16v3h2v-9zm-1.5 1c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.224-.5-.5-.5z" />
  </svg>
);

const addIcon = (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
      clipRule="evenodd"
    />
  </svg>
);
