import React from 'react';
import {PerguntaAberta} from './PerguntaAberta'

class Etapa1 extends React.Component{
    render (){
        return(
            <div>
                <h1>ETAPA 1- DADOS GERAIS</h1>
                <PerguntaAberta pergunta={"1. Qual o seu nome"} />
                <PerguntaAberta pergunta={"2. Qual sua idade"} />
                <PerguntaAberta pergunta={"3. Qual seu email"} />
                <p>4. Qual a sua escolaridade</p>
                <select>
                    <option value="EMIncompleto">Ensino Médio Incompleto</option>
                    <option value="EMCompleto">Ensino Médio Completo</option>
                    <option value="ESIncompleto">Ensino Superior Incompleto</option>
                    <option value="EsCompleto">Ensino Superior Completo</option>
                </select>
            </div>
        )
    }   
} export default Etapa1