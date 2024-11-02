
/*  file.sql
SQL
- DDL  - data definition language
- DML  - Data modifcation language
*/

-- 
CREATE DATABASE "my-database";
DROP DATABASE "my-database";


--CREATE

CREATE TABLE IF NOT EXISTS students (
	id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	name VARCHAR NOT NULL,
	email VARCHAR NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS teachers (
	id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	name VARCHAR(50) NOT NULL,
	department VARCHAR NOT NULL
);


CREATE TABLE courses (
	id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	title VARCHAR(100) NOT NULL,
	teacherId integer NOT NULL,

	FOREIGN KEY (teacherId) REFERENCES teachers(id)
);


CREATE TABLE IF NOT EXISTS grades (
	id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	grade numeric NOT NULL,
	enrollment_date DATE NOT NULL DEFAULT CURRENT_DATE,
	studentId integer NOT NULL REFERENCES students(id),
	courseId integer NOT NULL REFERENCES courses(id)
);


SELECT * FROM professors;

-- ALTER

-- ADD COLUMN
ALTER TABLE students ADD COLUMN birthdate DATE;

-- DROP COLUMN
ALTER TABLE students DROP COLUMN birthdate;

-- RENAME COLUMN
ALTER TABLE courses RENAME COLUMN name TO title;

-- ALTER COLUMN
ALTER TABLE teachers ALTER COLUMN department TYPE VARCHAR(100);

-- REANME TABLE
ALTER TABLE teachers RENAME TO professors;
ALTER TABLE professors RENAME TO teachers;


-- DELETE

DROP TABLE grades;


-- TRUNCATE

TRUNCATE TABLE grades;






