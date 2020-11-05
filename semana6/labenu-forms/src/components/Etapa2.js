import React from 'react';
import {PerguntaAberta} from './PerguntaAberta'

class Etapa1 extends React.Component{
    render (){
        return(
            <div>
                <h1>ETAPA 2- INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <PerguntaAberta pergunta={"1. Qual o curso?"} />
                <PerguntaAberta pergunta={"2. Qual a unidade de ensino?"} />
            </div>
        )
    }   
} export default Etapa1