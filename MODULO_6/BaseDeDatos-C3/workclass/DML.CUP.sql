

-- DML  - Data modifcation language


SELECT * FROM grades;


-- CREATE  

INSERT INTO students(name, email)
	VALUES ('Claudia Diaz', 'clau@gmail.com');


INSERT INTO teachers(name, department)
	VALUES ('Camilo', 'Matematicas'),
			('Camilo', 'Matematicas'),
			('Camilo', 'Matematicas'),
			('Camilo', 'Matematicas'),
			('Camilo', 'Matematicas');


INSERT INTO courses(title, teacherid)
VALUES ('algebra', 2),
		('Calculo', 3),
		('Matematicas discretas', 4);


INSERT INTO grades(grade, enrollment_date, studentid, courseid)
VALUES ( 5, '2024-12-25', 2, 4);



-- DELETE

SELECT * FROM grades;

DELETE FROM grades WHERE grade = 5;

-- UPDATE

SELECT * FROM students;

UPDATE students
SET name = 'Milena Saenz'
WHERE id = 1; 


-- SELECT < READ >






