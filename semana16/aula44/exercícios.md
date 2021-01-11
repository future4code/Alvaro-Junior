### Exercício 1
a) O comando CREATE TABLE é utilizado para criar uma nova tabela, ele precisa de um nome, que no caso é Actor, e o título das colunas, que no caso são: id, name, slary, birth_date e gender.
O comando VARCHAR(255) é utilizado para declarar uma string, e o valor entre parêntesis é o tamanho máximo dessa string.
O comando PRIMARY KEY é utilizado para declarar o valor identificador do elemento, ele não pode ser nulo e deve ser único.
O comando NOT NULL é utilizado para limitar os valores aceitos na coluna apenas para valores que não sejam nulos.
O comando DATE é utilizado para declarar uma data com o formato (YYYY-MM-DD).

b) O comando SHOW DATABASES retorna os esquemas que estão no banco de dados.
O comando SHOW TABLES retorna todas as tabelas do banco de dados.

c) O comando DESCRIBE Actor retorna a estrutura da tabela, contendo o título, o tipo, se aceita valores nulos ou não, se é uma primary key, o valor padrão antes da inserção de novas informações e outras informações extras.

### Exercício 2
a) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);

b) O erro apresentado foi: Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' (Código do erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'). O erro ocorreu pois tentamos adicionar uma nova informação na table Actor que tinha um id já presente na tabela. Como o id é uma chave primária deve ser única, e por isso o erro foi apresentado.

c) O erro apresentado foi: Error Code: 1136. Column count doesn't match value count at row 1 (Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1). Esse erro ocorreu pois devemos indicar os títulos de cada coluna que queremos preencher, e também se a coluna for não nula.
A correção seria:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d) O erro apresentado foi: Error Code: 1364. Field 'name' doesn't have a default value (Código de erro: 1364. O campo 'nome' não tem um valor padrão). Esse erro ocorreu pois ignoramos uma coluna não nula e não passamos nenhum valor padrão para caso isso viesse a ocorrer.
Para solucionar podemos inserir a informação de nome:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antonio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
Ou antes de cirar a tabela definir um valor padrão para nome:
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL DEFAULT "Anônimo",
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
	gender VARCHAR(6) NOT NULL
);

e) O erro apresentado foi: Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 (Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1). Esse erro ocorreu pois o tipo do dado enviado não corresponde ao tipo de dados esperado.
A correção seria:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

### Exercício 3

a) SELECT * 
FROM Actor
WHERE gender = "female";

b) SELECT salary 
FROM Actor
WHERE name = "Tony Ramos";

c) SELECT * 
FROM Actor
WHERE gender = "invalid";
O resultado foi um elemento com todos os dados null, isso ocorre pois nenhum dado há para ser retornado, então o mySQL retorna os dados como null.

d) SELECT id, name, salary
FROM Actor
WHERE salary <= 500000;

e) O erro foi Error Code: 1054. Unknown column 'nome' in 'field list' (Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'). Colocamos o título da coluna com a escrita errada, era esperado "name", e escrevemos "nome".
A correção seria:
SELECT id, name 
from Actor 
WHERE id = "002"

### Exercício 4

a) SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
A query acima busca dentro do banco de dados atores que tem nomes que começam com a letra A ou J, e além disso tem salário superior a R$ 300.000,00.

b) SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

c) SELECT * FROM Actor
WHERE name LIKE "$G%" OR name LIKE "%g%";

d) SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "$G%" OR name LIKE "%g%") AND (salary BETWEEN 350000 AND 900000);

### Exercício 5

a) CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    release_date DATE NOT NULL,
	  rating INT NOT NULL
);
A query criará uma tabela de filmes onde o id vai ser uma string com no máximo 255 caracteres, assim como o nome, a sinopse vai ser do tipo text (texto), a data de lançamento vai ser do tipo date e o rating vai ser do tipo int, todos não poderão ser nulos.

b) INSERT INTO Movies (id, name, sinopse, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

c) INSERT INTO Movies (id, name, sinopse, release_date, rating)
VALUES(
  "002", 
  "Doce de mel",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

d) INSERT INTO Movies (id, name, sinopse, release_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

e) INSERT INTO Movies (id, name, sinopse, release_date, rating)
VALUES(
  "004", 
  "O Shaolin do Sertão",
  "Durante a década de 80, lutadores de vale-tudo passam por dificuldades devido à falta de lutas profissionais. A fim de manter a paixão pela luta, eles desafiam os valentões no interior do Ceará que aceitam participar da competição criada. É assim que Aluiso Li (Edmilson Filho) vê a sua chance de ouro para realizar o sonho de se tornar um verdadeiro mestre das lutas como os heróis de seus filmes favoritos. ",
  "2016-10-13", 
  8
);

### Exercício 6
a) SELECT id, name, rating 
FROM Movies
WHERE id = "001";

b) SELECT * 
FROM Movies
WHERE name = "Se eu Fosse Você";

c) SELECT id, name, sinopse 
FROM Movies
WHERE rating >= 7;

### Exercício 7
a) SELECT *
FROM Movies
WHERE name LIKE "%vida%";

b) SELECT *
FROM Movies
WHERE (name LIKE "%vida%" OR sinopse LIKE "%vida%");

c) SELECT *
FROM Movies
WHERE release_date < CURDATE();

d) SELECT *
FROM Movies
WHERE (name LIKE "%vida%" OR sinopse LIKE "%vida%") AND (release_date < CURDATE()) AND (rating >= 7);
as