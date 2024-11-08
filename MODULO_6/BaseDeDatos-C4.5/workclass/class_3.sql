-- ESQUEMA BASE DE DATOS CREACION

CREATE TABLE author (
	authorID SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	nationality VARCHAR(50)
);


CREATE TABLE publisher (
	publisherID SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	country VARCHAR(50)
);

CREATE TABLE book (
	bookID SERIAL PRIMARY KEY,
	title VARCHAR(100),
	genre VARCHAR(50),
	publicationYear INTEGER,
	publishearID INTEGER REFERENCES publisher(publisherID)
);

CREATE TABLE book_author (
	bookID INTEGER REFERENCES book(bookID),
	authorID INTEGER REFERENCES author(authorID)
);


-- INSERCION DE DATA

INSERT INTO author(name, nationality)
VALUES 
	('George Orwell ', 'British'),
	('Jane Austen', 'British'),
	('Mark Twain ', 'American');

SELECT * FROM author;


INSERT INTO publisher(name, country)
VALUES 
	('Penguin Books', 'United Kingdom'),
	('Oxford University Press', 'United Kingdom');

SELECT * FROM publisher;


INSERT INTO book(title, genre, publicationYear, publishearID)
VALUES 
	('1984', 'Dystopian', 1949, 1),
	('Pride and Prejudice', 'Romance', 1813, 2),
	('Adventures of Huckleberry Finn', 'Adventure', 1884, 1);

SELECT * FROM book;


INSERT INTO book_author (bookID, authorID)
values (2, 1),
		(3, 2),
		(4, 3);


SELECT * FROM book_author;