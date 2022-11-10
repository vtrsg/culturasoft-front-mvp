import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from "./styled";

const Header = () => {
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="logoName">CulturaSoft</span>
          </Link>
        </div>
        <nav>
          <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                  <Link to="/produtos">Produtos</Link>
                </li>
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
};

export default Header;