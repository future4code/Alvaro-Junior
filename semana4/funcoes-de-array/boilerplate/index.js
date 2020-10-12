let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    // AQUI VEM A IMPLEMENTAÇÃO
    const despesasDetalhadas = (despesa, index, despesas) => {
        divDespesas.innerHTML += `<p>valor: R$${despesa.valor} | tipo: ${despesa.tipo} | descrição: ${despesa.descricao}</p>`
    }

    despesas.forEach(despesasDetalhadas)

    divDespesas.innerHTML += '<button onclick="ordenarDespesas()">Ordenar</button>'
}


// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO
    // const arrayGastoTotal = arrDespesas.map ((despesa, index, despesas) => {
    //     return despesa.valor
    // })
    // for (let i =  0; i < arrayGastoTotal.length; i++){
    //     gastoTotal += arrayGastoTotal[i]
    // }

    gastoTotal = arrDespesas.map ((despesa, index, despesas) => {
        return despesa.valor
    }).reduce((acumulator, currentValue) => {
        return acumulator+currentValue
    }, 0)
    
    // const arrayGastoAlimentacao = arrDespesas.filter((despesa, index, depesas) => {
    //     return despesa.tipo === "alimentação"
    // }).map((despesa, index, despesas) => {
    //     return despesa.valor
    // })
    // for (let i =  0; i < arrayGastoAlimentacao.length; i++){
    //     gastoAlimentacao += arrayGastoAlimentacao[i]
    // }

    gastoAlimentacao = arrDespesas.filter((despesa, index, depesas) => {
        return despesa.tipo === "alimentação"
    }).map((despesa, index, despesas) => {
        return despesa.valor
    }).reduce((acumulator, currentValue) => {
        return acumulator+currentValue
    }, 0)

    // const arrayGastoUtilidades = arrDespesas.filter((despesa, index, depesas) => {
    //     return despesa.tipo === "utilidades"
    // }).map((despesa, index, despesas) => {
    //     return despesa.valor
    // })
    // for (let i =  0; i < arrayGastoUtilidades.length; i++){
    //     gastoUtilidades += arrayGastoUtilidades[i]
    // }

    gastoUtilidades = arrDespesas.filter((despesa, index, depesas) => {
        return despesa.tipo === "utilidades"
    }).map((despesa, index, despesas) => {
        return despesa.valor
    }).reduce((acumulator, currentValue) => {
        return acumulator+currentValue
    }, 0)

    // const arrayGastoViagem = arrDespesas.filter((despesa, index, depesas) => {
    //     return despesa.tipo === "viagem"
    // }).map((despesa, index, despesas) => {
    //     return despesa.valor
    // })
    // for (let i =  0; i < arrayGastoViagem.length; i++){
    //     gastoViagem += arrayGastoViagem[i]
    // }

    gastoViagem = arrDespesas.filter((despesa, index, depesas) => {
        return despesa.tipo === "viagem"
    }).map((despesa, index, despesas) => {
        return despesa.valor
    }).reduce((acumulator, currentValue) => {
        return acumulator+currentValue
    }, 0)

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("Faltou algum valor ou algum valor é um número negativo")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)
    
    if(validarTipoFiltro(tipoFiltro) && validarValorFiltro(valorMin) && validarValorFiltro(valorMax)){
        // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO
        let despesasFiltradas = arrDespesas.filter((despesa, index, despesas) => {
            return (despesa.tipo === tipoFiltro && despesa.valor >= valorMin && despesa.valor <= valorMax)
        })

        imprimirDespesas(despesasFiltradas)
    } else {
        alert("Faltou algum valor ou algum valor é um número negativo")
    }
}

function ordenarDespesas(){
    arrDespesas.sort((a, b) => {
        return b.valor - a.valor
    })
    imprimirDespesas(arrDespesas)
}





// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}

function validarTipoFiltro(tipo){
    if(tipo !== ""){
        return true
    }
    return false
}

function validarValorFiltro(valor){
    if(valor > 0){
        return true
    }
    return false
}