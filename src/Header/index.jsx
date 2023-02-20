import './index.css';
import TuLogo from './tu_logo.svg'
import ArrowDown from './arrow_down.svg'
import Menu from './Menu'

function Header() {
  return (
    <div className="header">
      <div className='pre-header'>

        <div className='logo'>
          <a href="/">
            <img src={TuLogo} alt="Logo" />
          </a>
        </div>

        <div className='user-name-container'>
          <span className='name-message'>Nombre </span>
          <span className='user-name'>Usuario </span>
          <img src={ArrowDown} alt="flecha hacia abajo" />
        </div>
      </div>

      <div className='menu-container'>
        <Menu />
      </div>
    </div>
  );
}

export default Header;
