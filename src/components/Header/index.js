import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCount } from "../../features/counter/counterSlice";
import { dashboardIcon, shoppingCardIcon, productIcon } from "../../icons";

const Header = () => {
  const count = useSelector(selectCount);
  return (
    <div className="flex justify-between text-lg">
      <Link to={`/`} className=" hover:text-blue-500">
        E-commerce
      </Link>
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
