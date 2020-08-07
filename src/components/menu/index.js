import React from 'react';
import Logo from '../../assets/images/logo.png';
import './Menu.css';
import ButtonLink from '../ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Techflix logo" />
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Adicionar vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;