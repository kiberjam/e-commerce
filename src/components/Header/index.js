import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCount } from "../../features/counter/counterSlice";

const Header = () => {
  const count = useSelector(selectCount);
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
        <div className=" relative">
          {shoppingCardIcon}
          <span
            className=" absolute top-0 right-0 rounded-full bg-red-400 w-6 h-6
           top right p-0 mr-4 -mt-2 text-white text-center leading-tight"
          >
            {count}
          </span>
        </div>
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

const shoppingCardIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 fill-current"
    viewBox="0 0 24 24"
  >
    <path d="M10.975 8l.025-.5c0-.517-.066-1.018-.181-1.5h5.993l-.564 2h-5.273zm-2.475 10c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-10.428l-.455-1.083c-.324.049-.652.083-.99.083-.407 0-.805-.042-1.191-.114l1.306 3.114h13.239l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-9-15c-2.486 0-4.5 2.015-4.5 4.5s2.014 4.5 4.5 4.5c2.484 0 4.5-2.015 4.5-4.5s-2.016-4.5-4.5-4.5zm-.469 6.484l-1.687-1.636.695-.697.992.94 2.115-2.169.697.696-2.812 2.866z" />
  </svg>
);
