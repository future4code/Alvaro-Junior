import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton';
import minhaImagem from './imagens/eu.png'
import email from './imagens/email.png'
import endereco from './imagens/endereco.png'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={minhaImagem}
          nome="Álvaro" 
          descricao="Oi, eu sou o Álvaro. Sou um aluno da Labenu. Gosto de natureza, acampar e estar ao ar livre, sou Desbravador e amo muito minha esposa Hallynny Henrique Barros."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={email}
          titulo="Email:"
          descricao="alvarobarros@gmail.com"
        />
        <CardPequeno 
          imagem={endereco}
          titulo="Endereço: "
          descricao="Rua Pombal, n° 50"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://adra.org/wp-content/uploads/2019/11/adra-vertical-logo.png" 
          nome="ADRA" 
          descricao="Ensinando inglês para crianças e adolescentes em situação de vulnerabilidade social!" 
        />
        
        <CardGrande 
          imagem="https://static.wixstatic.com/media/ea60dc_41a19b983f6a4184922a1c381b8a93f0.gif" 
          nome="Desbravadores" 
          descricao="Aconselhando meninos de 10 a 15 anos, auxiliando no crescimento físico mental e espiritual deles!" 
        />
      </div>

      <div className="page-section-container">
        <h2>Fomração Acadêmica</h2>
        <CardGrande 
          imagem="https://ufrn.br/resources/img/logo-ufrn-color-og.png" 
          nome="Engenharia de Petróleo" 
          descricao="Graduado em Engenharia de Petróleo, 2017" 
        />
        <CardGrande 
          imagem="https://ufrn.br/resources/img/logo-ufrn-color-og.png" 
          nome="Ciências e Tecnologia" 
          descricao="Graduado em Ciências e Tecnologia, 2015" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
