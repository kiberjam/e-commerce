import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between text-lg">
      <span>E-commerce</span>
      <div className="flex items-center space-x-6 text-blueGray-600">
        <NavLink
          to="/"
          exact
          className="flex items-center space-x-1"
          activeClassName="text-blue-500 cursor-default"
        >
          {dashboardIcon}
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/products"
          exact
          className="flex items-center space-x-1"
          activeClassName="text-blue-500 cursor-default"
        >
          {productIcon}
          <span> Products</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;

const dashboardIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 fill-current"
    viewBox="0 0 24 24"
  >
    <path d="M7 19h-6v-11h6v11zm8-18h-6v18h6v-18zm8 11h-6v7h6v-7zm1 9h-24v2h24v-2z" />
  </svg>
);

const productIcon = (
  <svg
    className="w-6 h-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
  >
    <path d="M23 6.066v12.065l-11.001 5.869-11-5.869v-12.131l11-6 11.001 6.066zm-21.001 11.465l9.5 5.069v-10.57l-9.5-4.946v10.447zm20.001-10.388l-9.501 4.889v10.568l9.501-5.069v-10.388zm-5.52 1.716l-9.534-4.964-4.349 2.373 9.404 4.896 4.479-2.305zm-8.476-5.541l9.565 4.98 3.832-1.972-9.405-5.185-3.992 2.177z" />
  </svg>
);
