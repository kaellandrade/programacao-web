import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

function Header() {

  const showAside = () => {
    const aside = document.querySelector('aside') as HTMLElement;
    if (aside){
      if (aside.style.display == 'block'){
        aside.style.display = 'none';
        aside.style.opacity = '1';
      }
      else
        aside.style.display = 'block';
    }
  };

  return (
    <header>
      <NavLink to={''}>
        <h1>Circulação de dinheiro no Brasil</h1>
			</NavLink>
      
      <nav className="nav">
        <ul className="nav-list">
          <span id='menu-show-aside' className="material-symbols-outlined" onClick={showAside} >
            menu
          </span>
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