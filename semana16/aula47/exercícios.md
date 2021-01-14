### Exercício 1

a) A chave estrangeira é o campo que relaciona uma tabela a outra, ela deve sempre se relacionar a primary key da outra tabela.

b) CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating VALUES
("a", "Filme muito bom, mas gosto mais de outros estilos!",7.5,"001"),
("b", "Nunca assisti!",7,"002"),
("c", "Filme muito engraçado!",8.5,"004"),
("d", "Nunca assisti!",7,"006");

c) INSERT INTO Rating VALUES
("e", "kkkkkkkkk!",7.5,"007");
O comando acima gerou o seguinte erro: Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-alvaro-barros`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)). Esse erro foi gerado pois o mySQL procurou na tabela Movie um elemento com id digitado na foreign key da tabela Rating, como não havia o elemento retornou um erro de constraint.

d) ALTER TABLE Movie 
DROP rating;

e) DELETE FROM Movie
WHERE id = "006";
O comando acima gerou o seguinte erro: Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-alvaro-barros`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)). Esse erro ocorreu pois tentamos apagar um elemento da tabela Movies que tem um elemento relacionado a ele na tabela Rating, para ser possível essa operação primeiro deve-se apagar o elemento na table Rating e então apagar o elemento na table Movie.

### Exercício 2

a) A tabela MovieCast é uma tabela intermediária, a tabela intermediária é necessária quando temos uma relação N:M, ela vai se relacionar tanto a tabela Movie quanto a tabela Actor.

b) INSERT INTO MovieCast VALUES
('001', '002'), ('002', '002'), ('004', '002'), ('006', '004'), 
('006', '005'), ('001', '006');

c)INSERT INTO MovieCast VALUES
('003', '006');
O comando acima gerou o seguinte erro:  Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-alvaro-barros`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)). Esse erro foi gerado pois o mySQL procurou na tabela Movie um elemento com id digitado na foreign key movie_id da tabela MovieCast, como não havia o elemento retornou um erro de constraint.

d)DELETE FROM Actor
WHERE id = "002";
O comando acima gerou o seguinte erro: Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-alvaro-barros`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`)). Esse erro ocorreu pois tentamos apagar um elemento da tabela Actor que tem um elemento relacionado a ele na tabela MovieCast, para ser possível essa operação primeiro deve-se apagar o(s) elemento(s) na table MovieCast e então apagar o elemento na table Actor.

### Exercício 3

a) O operador ON é responsável pela comparação dos valores das colunas provenientes das tabelas associadas. Isso permite que apenas os dados que se relacionam das tabelas sejam gerados.

b) SELECT Movie.name AS name, Movie.id AS id, rate
FROM Movie 
INNER JOIN Rating 
ON Movie.id = Rating.movie_id;

### Exercício 4

a) SELECT Movie.name AS name, Movie.id AS id, rate, comment
FROM Movie 
INNER JOIN Rating 
ON Movie.id = Rating.movie_id;

b) SELECT Movie.id AS id, Movie.name AS name, Actor.id
FROM Movie 
INNER JOIN MovieCast 
ON Movie.id = MovieCast.movie_id
INNER JOIN Actor
ON MovieCast.actor_id = Actor.id;

c) SELECT AVG(Rating.rate) AS rating, Movie.id, Movie.name FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id
GROUP BY (Movie.id);

### Exercício 5

a) A query une as tabelas Movie e Actor. A necessidade de dois JOIN se dá pois a relação entre as tabélas é N:M, e por isso pé necessário uma tabela intermediária, portanto para unir as duas é necessário também unir a tablea intermediária.

b) SELECT Movie.id, Movie.name, Actor.id, Actor.name
FROM Movie
LEFT JOIN MovieCast 
ON Movie.id = MovieCast .movie_id
JOIN Actor 
ON Actor.id = MovieCast .actor_id;

c) A query resulta em erro, Error Code: 1054. Unknown column 'm' in 'field list', esse erro ocorreu pois ao invés de escrever m.title, foi escrito m,title, de forma que o mySQL entendeu que m se referia a uma coluna, e ao buscar na tabela a coluna m não foi encontrada.

d) SELECT m.name, a.name, r.rate, r.comment
FROM Movie m
LEFT JOIN MovieCast mc 
ON m.id = mc.movie_id
JOIN Actor a 
ON a.id = mc.actor_id
JOIN Rating r 
ON r.movie_id = mc.movie_id;

### Exercício 6

a) A relação entre a tabela de Oscar e a tabela de Filmes é N:M, pois tanto um filme pode ter mais de um Oscar, quanto mais de um filme pode ter ganhado o mesmo Oscar, em anos diferentes.

b) CREATE TABLE Oscar (
	id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE OscarList (
	movie_id VARCHAR(255),
	oscar_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (OSCAR_id) REFERENCES Oscar(id)
);

c) INSERT INTO Oscar (id, name)
VALUES
("001", "Oscar de melhor edição de som"),
("002", "Oscar de melhores efeitos visuais"),
("003", "Oscar de melhor figurino"),
("004", "Oscar de melhor filme"),
("005", "Oscar de melhor fotografia");

INSERT INTO OscarList VALUES
('001', '001'), ('001', '002'), ('002', '002'), ('002', '003'), 
('004', '004'), ('004', '005'), ('006', '001'), ('006', '002');

d) SELECT *
FROM Movie m
LEFT JOIN OscarList ol 
ON m.id = ol.movie_id
JOIN Oscar o
ON o.id = ol.oscar_id;