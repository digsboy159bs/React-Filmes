import React from 'react';
import logo from '../../assets/images/logo.png'
import './style.css';
import '../../assets/styles/global.css'
import {Link} from 'react-router-dom';

interface HeaderProps{
  description:string;
}

const Header:React.FunctionComponent<HeaderProps> = (props) => {
    return (
      <div className="principal">
        <div className="header">
          <div className="align">
            <nav>
              <Link to="/"><img src={logo} alt="o logo da coletanea"/></Link>
              <ul className="menu">
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/login">Login</Link></li>
                <li><Link className="link" to="/cadastro">Cadastro</Link></li>
              </ul>
              
            </nav>
              <h3>{props.description}</h3>
          </div>
          
        </div>
      </div>
    );
  }

  export default Header