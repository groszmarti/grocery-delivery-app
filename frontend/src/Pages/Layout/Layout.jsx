import { Outlet, Link } from "react-router-dom";

import "./Layout.css";

const Layout = () => (
  <div className="Layout">
    <nav>
      <ul>
      <li className="grow">
          <Link to="/" className="link">HOME</Link>
        </li>
        <li className="grow">
          <Link to="/dairy" className="link">DAIRIES</Link>
        </li>
        <li className="grow">
          <Link to="/fruits" className="link">FRUITS</Link>
        </li>
        <li className="grow">
          <Link to="/vegetables" className="link">VEGETABLES</Link>
        </li>
        <li className="grow">
          <Link to="/bakedgoods" className="link">BAKED GOODS</Link>
        </li>
        <li className="grow">
          <Link to="/seafood" className="link">SEAFOOD</Link>
        </li>
        <li className="grow">
          <Link to="/meats" className="link">MEATS</Link>
        </li>
        <li className="grow">
          <Link to="/cart" className="cart">CART</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default Layout;