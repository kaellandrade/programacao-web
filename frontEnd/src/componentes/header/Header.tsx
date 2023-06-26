import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

function Header() {
  return (
    <header>
      <NavLink to={''}>
        <h1>Circulação de dinheiro no Brasil</h1>
			</NavLink>
      <nav className="nav">
        <ul className="nav-list">
          <a href="#">
            <li>
              <span className="material-symbols-outlined">person</span>
            </li>
          </a>
          <a href="#">
            <li>
              <span className="material-symbols-outlined">settings</span>
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;