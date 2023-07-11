import { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import Aside from '../aside/Aside';
import './index.css';

function Header() {

  const [visible, setVisible] = useState(false);

  const asideSetNotVisible = (isVisible: boolean) => {
    setVisible(isVisible);
  };

  useEffect(() => {
    const body = document.getElementById('root') as HTMLElement;
    if (body){
      if (visible)
        body.style.filter = 'blur(.2rem)';
      else
        body.style.filter = 'blur(0)';
    }
  }, [visible]);


  return (
    <header>
      <NavLink to={''}>
        <h1>Circulação de dinheiro no Brasil</h1>
			</NavLink>
      
      <nav className="nav">
        <ul className="nav-list">
          <span id='menu-show-aside' className="material-symbols-outlined" onClick={() => setVisible(true)} >
            menu
          </span>
          <Sidebar visible={visible} onHide={() => setVisible(false)} > 
            <Aside id='sidebar-mobile' asideSetNotVisible={asideSetNotVisible} />
          </Sidebar>
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