import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between text-lg">
      <span>E-commerce</span>
      <div className="flex items-center space-x-4">
        <NavLink
          to="/"
          exact
          className=" text-blue-500"
          activeClassName="text-blue-900 cursor-default"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/products"
          exact
          activeClassName="text-blue-900 cursor-default"
          className="text-blue-500"
        >
          Products
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
