type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// Exercício 4 - a)
// Para gerar o arquivo javascript a partir do  arquivo typescript basta colocar o comando tsc
// terminal.

// b)
// Sim seria diferente, para isso devemos no arquivo tsconfig colocar a pasta src como root
// então é possível a partir do comando tsc.

// c)
// Sim para transpilar múltilplos arquivos de uma vez só é necessário utilizar o comando tsc --init
// isso irá gerar o arquivo tsconfig, nele é possível colocar a pasta src como root, e se colocar-
// mos nela todos os arquivos ts que queremos transpilar o comando tsc irá realizar essa transpi-
// lação de todos esses arquivos.

// d)
// O que me chamou atenção foi que o arquivo gerado ele tem muitos comandos possíveis, e também
// me chamou atenção que a versão que do javascript padrão é o ecmascript 5. O que mudou é que
// no arquivo gerado mostra muitas opções comentadas, inclusive algumas que na aula nós fomos 
// ensinados a usarl.