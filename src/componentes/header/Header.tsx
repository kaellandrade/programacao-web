import './index.css';
import { SplitButton } from 'primereact/splitbutton';
import { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import Aside from '../aside/Aside';
import AuthContext from '../../context/auth';
import Logo from '../../../imgs/LogoCash.svg';
import LogoName from '../../../imgs/logo_name_1.svg';
import { getDadosUsuario } from '../../api/data';


function Header() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const context = useContext(AuthContext);
  const { logout } = context;

  const sair = () => {
    logout();
    navigate('/publica/entrar');
  };

  const items = [
    {
      label: 'Sobre o portal',
      icon: 'pi pi-info-circle',
      command: () => {
        navigate('/painel');;
      }
    },
    {
      label: 'Analytics',
      icon: 'pi pi-chart-bar',
      command: () => {
        navigate('/painel/analytics');;
      }
    },
    {
      label: 'Configurações',
      icon: 'pi pi-cog',
      command: () => {
        console.log('Menu -> Configurações');
      }
    },
    {
      label: 'Sair',
      icon: 'pi pi-sign-out',
      command: () => sair()
    }
  ];

  const [infoUser, setInfoUser] = useState({} as any);

  const asideSetNotVisible = (isVisible: boolean) => {
    setVisible(isVisible);
  };

  const getDados = async () => {
    const dados = await getDadosUsuario();
    console.log(dados.nome.trim().split(' ')[0]);
    if (dados != null)
      setInfoUser(dados);
    else{
      setInfoUser({});
    }
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

  useEffect(() => {
    getDados();
  }, []);


  return (
    <header>
      <span id='menu-show-aside' className="material-symbols-outlined" onClick={() => setVisible(true)} >
        menu
      </span>
      <Sidebar visible={visible} onHide={() => setVisible(false)} >
        <Aside id='sidebar-mobile' asideSetNotVisible={asideSetNotVisible} />
      </Sidebar>
      <NavLink to={'/painel'}>
        <div className='flex align-items-center'>
          <img src={Logo} alt="Logo" className='logo-header' />
          <img src={LogoName} alt="Logo" className='logo-name-header' />
        </div>
      </NavLink>

      <nav className="nav">
        <ul className="nav-list">
          <li>
            <SplitButton 
            id='btn-user-options' 
            label={typeof infoUser.nome === 'string' ? infoUser.nome.trim().split(' ')[0] : ''} 
            icon="pi pi-user" 
            model={items} 
            text />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;