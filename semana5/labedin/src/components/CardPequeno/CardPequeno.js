import React from 'react';

function CardPequeno (props) {
    return <div className="smallcard-container"> 
        <img src={ props.imagem } />
        <h4>{ props.titulo }</h4>
        <p>{ props.descricao }</p>
    </div>
}

export default CardPequeno;