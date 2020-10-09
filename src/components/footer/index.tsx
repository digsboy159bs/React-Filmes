import React from 'react';
import template from '../../assets/images/template.png'
import './style.css';
import '../../assets/styles/global.css'

function Footer() {
    return (
      <div className="footer-principal">
        <div className="footer">
          <nav>
            <img src={template} alt="footer-logo"/>
          </nav>
        </div>
      </div>
    );
  }

  export default Footer