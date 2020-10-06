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
let continuar1 = true

while (continuar1===true){
   if (confirm("Quer iniciar uma nova rodada?")){
      const cartaUsuario = []
      const cartaComputador = []
      cartaUsuario.push(comprarCarta())
      cartaUsuario.push(comprarCarta())
      cartaComputador.push(comprarCarta())
      cartaComputador.push(comprarCarta())
      // Sorteia uma carta. Por exemplo, o rei de ouros

      while(cartaUsuario[0] === cartaUsuario[1]){
         cartaUsuario[0] = comprarCarta()
         cartaUsuario[1] = comprarCarta()
      }
      
      while(cartaComputador[0] === cartaComputador[1]){
         cartaComputador[0] = comprarCarta()
         cartaComputador[1] = comprarCarta()
      }
      // Sorteia novas cartas caso elas sejam iguais

      let valorCartasUsuario=0
      let valorCartasComputador=0
      for(let valor of cartaUsuario){
         valorCartasUsuario += valor.valor
      }
      for(let valor of cartaComputador){
         valorCartasComputador += valor.valor
      }
      // Calcula o valor total das cartas dos jogadores

      let cartaUsuarioImprimir =""
      for (let valor of cartaUsuario){
         cartaUsuarioImprimir += valor.texto+" "
      }
      let cartaComputadorImprimir =""
      for (let valor of cartaComputador){
         cartaComputadorImprimir += valor.texto+" "
      }
      // Coloca as cartas em uma string para impressão

      let continuar2 = true

      while(continuar2===true){
         if(confirm("Suas cartas são "+cartaUsuarioImprimir+". A carta revelada do computador é "+cartaComputador[0].texto+"\nDeseja comprar mais uma carta?")){
            cartaUsuario.push(comprarCarta())
            // Verifica se o usuário quer comprar nova carta
            cartaUsuarioImprimir = ""
            for (let valor of cartaUsuario){
               cartaUsuarioImprimir += valor.texto+" "
            }
            // Atualiza a strig para impressão
   
            valorCartasUsuario=0
   
            for(let valor of cartaUsuario){
               valorCartasUsuario += valor.valor
            }
            // Atualiza o valor das cartas do usuário.

            if(valorCartasUsuario >= 21){continuar2 = false}
         } else{continuar2 = false}
      }
      // Respetir a compra de cartas até atingir os pontos do usuário atingir o limite de 21 pontos

      let continuar3 = true
      while(continuar3===true){
         if (valorCartasComputador < 21 && valorCartasComputador < valorCartasUsuario && valorCartasUsuario <= 21){
            cartaComputador.push(comprarCarta())
            
            cartaComputadorImprimir =""
            for (let valor of cartaComputador){
               cartaComputadorImprimir += valor.texto+" "
            }
            // Atualiza a string para impressão

            valorCartasComputador=0

            for(let valor of cartaComputador){
               valorCartasComputador += valor.valor
            }
            // Atualiza o valor das cartas do computador.
         } else{continuar3 = false}
      }
      
      console.log("Usuário - cartas: "+cartaUsuarioImprimir+" - pontuação "+valorCartasUsuario) 
      console.log("Usuário - cartas: "+cartaComputadorImprimir+" - pontuação "+valorCartasComputador)
      // imprime as cartas do Usuário e Computador. Nesse caso: "K♦️", e o valor somado das cartas.
      
      
   
       if((valorCartasUsuario > valorCartasComputador || valorCartasComputador > 21) && valorCartasUsuario <= 21){
         console.log("O usuário ganhou!")
       } else if((valorCartasUsuario < valorCartasComputador || valorCartasUsuario > 21) && valorCartasComputador <= 21){
         console.log("O computador ganhou!")
       }else{
         console.log("Empate!")
       }
       // Verifica se o Usuário ou o Computador fez mais pontos e declara o vencedor
       continuar = true
       // Atualiza a condição para que se inicie nova rodada.
   }else{
       console.log("O jogo acabou")
       continuar1 = false
   }
}