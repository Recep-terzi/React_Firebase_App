import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

const Navbar = () => {
  const {logout} = useLogout();
  return (
    <nav>
      <h1>Pyson Kitaplık</h1>
      <ul>
        <li>
          <Link to="/"> Anasayfa</Link>
        </li>
        <li>
          <Link to="/login"> Giriş</Link>
        </li>
        <li>
          <Link to="/signup"> Üye Ol</Link>
        </li>
        <li onClick={logout}>Çıkış</li>
      </ul>
    </nav>
  );
};

export default Navbar;
