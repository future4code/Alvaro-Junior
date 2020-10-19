import React from 'react';
import {PerguntaAberta} from './PerguntaAberta'

class Etapa1 extends React.Component{
    render (){
        return(
            <div>
                <h1>ETAPA 3- INFORMAÇÕES GERAIS DE ENSINO</h1>
                <PerguntaAberta pergunta={"1. Por que você não terminou um curso de graduação?"} />
                <p>2. Você fez algum curso complementar?</p>
                <select>
                    <option value="tecnico">Curso técnico</option>
                    <option value="inglês">Cursos de inglês</option>
                    <option value="não">Não fiz curso complementar</option>
                </select>
            </div>
        )
    }   
} export default Etapa1