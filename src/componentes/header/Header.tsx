import './index.css';
import { SplitButton } from 'primereact/splitbutton';
import { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import Aside from '../aside/Aside';
import AuthContext from '../../context/auth';

function Header() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const context = useContext(AuthContext);
  const { logout } = context;
  const sair = () => {
    logout();
    navigate('/publica/entrar');
  }

  const items = [
    {
      label: 'Configurações',
      icon: 'pi pi-refresh',
      command: () => {
        console.log('update');
      }
    },
  ];

  const asideSetNotVisible = (isVisible: boolean) => {
    setVisible(isVisible);
  };

  useEffect(() => {
    const body = document.getElementById('root') as HTMLElement;
    if (body) {
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
          <li>
            <SplitButton label='Sair' icon="pi pi-plus" onClick={sair} model={items} rounded />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;