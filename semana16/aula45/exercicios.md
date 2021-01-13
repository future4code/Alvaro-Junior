### Exercício 1

a) ALTER TABLE Actor DROP COLUMN salary;
O comando acima é utilizado para apagar uma coluna presente na tabela, no caso apagar a coluna salary na tabela Actor.

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
O comando acima é utilizado para alterar uma coluna presente na tabela, no caso alterar a coluna gender na tabla actor, onde a coluna gender passará a se chamar sex.

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
Assim como o comando da letra anterior este é utilizado para alterar uma coluna presente na tabela, no caso alterar a coluna gender na tabla actor, onde a coluna gender manterá seu título, contudo poderá receber textos com mais caracteres, 255, que originalmente, 6.

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercício 2

a) UPDATE Actor
SET name = "Fernanda M.",
birth_date = "1929-10-24"
WHERE id = "003";

b) UPDATE Actor
SET name = "JULIANA PÃES"
WHERE id = "006";

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "006";

c) UPDATE Actor
SET name = "Thayla Ayala",
salary = 325000,
birth_date = "1986-04-14",
gender = "female"
WHERE id = "005";

d) UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "010";
Foi possível completar a requisição mesmo com o id inválido, o que resultou na seguinte mensagem: "0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0". Contudo apesar de completar a requisição nenhuma ação foi realmente feita.

### Exercício 3

a) DELETE FROM Actor
WHERE name = "Fernanda Montenegro";

b) DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;

### Exercício 4

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor
WHERE gender = "female";

c) SELECT COUNT(*) FROM Actor
WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor;

### Exercício 5

a) SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
O comando acima retorna a quantidade de atores por sexo, ou seja, retorna a quantidade de atores e atoras.

b) SELECT id, name FROM Actor
ORDER BY name ASC;

c) SELECT * FROM Actor
ORDER BY salary ASC;

d) SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e) SELECT AVG(salary) FROM Actor;

### Exercício 6

a) ALTER TABLE Movies
ADD playing_limit_date DATE;

b) ALTER TABLE Movies
CHANGE rating rating FLOAT;

c) UPDATE Movies
SET playing_limit_date = "2021-01-21"
WHERE id = "001";
UPDATE Movies
SET playing_limit_date = "2020-01-21"
WHERE id = "002";

d) DELETE FROM Movie
WHERE id = "003";
UPDATE Movies
SET sinopse = "Sinopse atualizada!"
WHERE id = "003";
O comando de atualização não gerou erros, no entanto a resposta foi: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0. Portanto apesar de não gerar erro, o comando não gera nenhum mudança nos dados.

### Exercício 7

a) SELECT COUNT(*) FROM Movies
WHERE rating > 7.5;

b) SELECT AVG(rating) FROM Movies;

c) SELECT COUNT(*) FROM Movies
WHERE playing_limit_date > CURDATE();

d) SELECT COUNT(*) FROM Movies
WHERE release_date > CURDATE();

e) SELECT MAX(rating) FROM Movies;

f) SELECT MIN(rating) FROM Movies;

### Exercício 8

a) SELECT * FROM Movies
ORDER BY name ASC;

b) SELECT * FROM Movies
ORDER BY name DESC
LIMIT 5;

c) SELECT * FROM Movies
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;

d) SELECT * FROM Movies
ORDER BY rating DESC
LIMIT 3;