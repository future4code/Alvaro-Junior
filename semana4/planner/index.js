function addTarefa(){
    const tarefa = document.getElementById("tarefa")
    if(tarefa.value !== ""){
        const dia = document.getElementById("dias-semana")
        const diaInserir = document.getElementById(dia.value)
        diaInserir.innerHTML += `<li><p onclick='style.textDecoration = "line-through"'>${tarefa.value}</p></li>`
        tarefa.value= ""
    } else {
        alert("Digite uma tarefa váida")
    }
}

function limparTarefas(){

    const dias = document.getElementsByClassName("semana")
    for (let i = 0; i < dias.length; i++){
        dias.item(i).lastElementChild.innerHTML=""
    }
}