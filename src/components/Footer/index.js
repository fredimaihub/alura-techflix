import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/images/logo.png';

function Footer() {
  return (
    <FooterBase>
      <img src={Logo} alt="Logo Alura" width="150px" />
      <p>
        Desenvolvido durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
