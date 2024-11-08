-- 1 )Seleccionar todos los libros publicados por 'Penguin Books'.

SELECT * FROM book
WHERE publisher_id = (
	SELECT publisher_id FROM publisher
	WHERE name = 'Penguin Books'
);


SELECT publisher_id FROM publisher
WHERE name = 'Penguin Books';


-- 2) Seleccionar los nombres de los autores que han escrito libros de género
-- 'Fantasy' utilizando una subconsulta.

SELECT name FROM author
WHERE author_id IN (
	SELECT author_id FROM book_author
	WHERE book_id IN (
		SELECT book_id FROM book
		WHERE genre = 'Fantasy'
	)
);


-- 4, 5, 1, 2
SELECT author_id FROM book_author
WHERE book_id IN (4,5);


-- 4, 5
SELECT book_id FROM book
WHERE genre = 'Fantasy';


--3 3)Cambiar la nacionalidad de 'Mark Twain' a 'Canadian'.

SELECT * FROM author;

UPDATE author
SET nationality = 'Canadian'
WHERE author_id = 56;

