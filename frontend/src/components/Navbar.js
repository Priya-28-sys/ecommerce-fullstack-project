
import { Link } from "react-router-dom";

import "../styles/Navbar.css";
function Navbar({

  cartCount,

  darkMode,

  setDarkMode

}) {

  return (

    <nav className="navbar">

      <h2 className="logo">
        ShopEasy
      </h2>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/">
          Products
        </Link>

        <Link to="/cart">
          Cart ({cartCount})
        </Link>
        <button
  onClick={() =>
    setDarkMode(!darkMode)
  }
>

  {
    darkMode

      ?

      "☀ Light"

      :

      "🌙 Dark"
  }

</button>

      </div>

    </nav>

  );
}

export default Navbar;