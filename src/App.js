import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import dadosIniciais from './data/dados_iniciais.json';

function App() {
    return (
        <div>
            <Menu/>
            <BannerMain 
                videoTitle="teste"
                url="teste2"
                videoDescription="teste3"
            />
            <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[0]}
            />
            <Footer />
        </div>
    );
}

export default App;
