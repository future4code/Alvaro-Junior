### Exercício 1

a) Usar strings para representar ID é a melhor solução, pois assim é possível ter muito mais possibilidades de IDs diferentes, uma vez que qulquer caractere pode ser utilizado para a construção do ID, de forma que se torna muito mais improvável a repetição mesmo que se gere muitos IDs.

### Exercício 2

a) O código acima insere na tabela "User" um novo usuário, contendo o id, email e senha.

b) CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

### Exercício 3

a) O termo as string é utilizado pois o process.env.JWT_KEY pode retornar tanto um valor com o typo string como com o tipo undefined, de forma que quando utilizamos o as string nós estamos fixando que o process.env.JWT_KEY vai retornar um valor com o tipo string. A ausencia dele geraria um erro, pois o token precisa de uma chave válida, ou seja, uma chave com o tipo string.

### Exercício 7

a) O as any é utilizado pois o payload retornará um tipo que não é definido. O as any faz com que qualquer tipo seja admitido para o dado em questão.