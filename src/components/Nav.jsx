import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link to="/">Simpsons</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
