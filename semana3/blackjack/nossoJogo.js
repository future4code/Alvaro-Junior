/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 console.log("Bem vindo ao jogo de Blackjack!")
 let continuar = true

 while (continuar===true){
   if (confirm("Quer iniciar uma nova rodada?")){
      const cartaUsuario1 = comprarCarta() 
      const cartaUsuario2 = comprarCarta() 
      const cartaComputador1 = comprarCarta()
      const cartaComputador2 = comprarCarta()
      // Sorteia uma carta. Por exemplo, o rei de ouros
      const valorCartasUsuario = cartaUsuario1.valor+cartaUsuario2.valor
      const valorCartasComputador = cartaComputador1.valor+cartaComputador2.valor
      // Soma o valor das cartas de cada jogador.
   
      console.log("Usuário - cartas: "+cartaUsuario1.texto+" "+cartaUsuario2.texto+" - pontuação "+valorCartasUsuario) 
      console.log("Usuário - cartas: "+cartaComputador1.texto+" "+cartaComputador2.texto+" - pontuação "+valorCartasComputador)
      // imprime as cartas do Usuário e Computador. Nesse caso: "K♦️", e o valor somado das cartas.
   
       if(valorCartasUsuario > valorCartasComputador){
          console.log("O usuário ganhou!")
       } else if(valorCartasUsuario === valorCartasComputador){
         console.log("Empate!")
       }else{
          console.log("O computador ganhou!")
       }
       // Verifica se o Usuário ou o Computador fez mais pontos e declara o vencedor
       continuar = true
       // Atualiza a condição para que se inicie nova rodada.
    }else{
       console.log("O jogo acabou")
       continuar = false
    }
 }
