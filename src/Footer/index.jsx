import './index.css';
import Isotipo from './Isotipo.svg'

function Footer() {
  return (
    <div className="footer">
      <div className='footer-container-inner'>
        <div className='isotipo'>
          <a href="/">
            <img src={Isotipo} alt="Isotipo" />
          </a>
        </div>

        <div className='copyright'>
          @ 2023 Sergio Beleño Inc. All rights reserved
        </div>

        <div className='isotipo'>
          <a href="/">
            <img src={Isotipo} alt="Isotipo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
