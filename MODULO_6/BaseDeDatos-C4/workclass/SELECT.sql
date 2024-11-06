-- SELECT -- 

SELECT * FROM products
ORDER BY category;

-- WHERE

-- > < >= <= 

SELECT * FROM products
WHERE id = 17;

SELECT * FROM products
WHERE category = 'Books';

SELECT category AS custom_name FROM products
WHERE category = 'Books';

SELECT * FROM products
WHERE stock <> 5;

-- AND OR 

SELECT * FROM products
WHERE stock > 5 AND stock < 15;

SELECT * FROM products
WHERE stock > 5 OR stock < 15;


-- ( LIKE % _ ) 

SELECT * FROM products
WHERE name LIKE '%Great Gatsby%';

SELECT * FROM products
WHERE name LIKE 'The _reat Gatsby';

-- BETWEEN

SELECT * FROM products
WHERE price BETWEEN 10.1 AND 15.0;

-- IN

SELECT * FROM products
WHERE category IN ('Books', 'Sports', 'any');


-- NOT

SELECT * FROM products
WHERE category NOT IN ('Books', 'Sports');



-- DISTINCT

SELECT DISTINCT category FROM products;


-- ORDER BY  ASC DESC

SELECT * FROM products
ORDER BY stock DESC;

SELECT * FROM products
ORDER BY name ASC;

-- LIMIT OFFSET
	2		2
SELECT * FROM products;
WHERE stock > 6
ORDER BY id ASC
LIMIT 2 OFFSET 4;


-- funciones de agregación

-- MAX()
-- MIN()
-- COUNT()
-- SUM()
-- AVG()

SELECT MAX(stock) FROM products;

SELECT MIN(stock) FROM products;

SELECT COUNT(*) AS total_count FROM products;

SELECT SUM(stock) FROM products;

SELECT AVG(stock) AS average FROM products;


SELECT MAX(price) AS maximum, MIN(price) AS minimum FROM products;


-- GROUP BY


SELECT category, 
	COUNT(*) AS quantity_products, 
	SUM(stock) AS total_stock 
FROM products
GROUP BY category;


-- HAVING

-- combinación clausula GROUP BY -- filtrar

-- SELECT field, condicion , funcion agregate , table FROM , group by , having field  condicion

SELECT category,
	COUNT(stock) AS quantity_products, 
	SUM(stock) AS total_stock 
FROM products
GROUP BY category
HAVING category = 'Books';



SELECT category, COUNT(*) AS num_products
FROM products
GROUP BY category
HAVING COUNT(*) >3;




-- CONCAT

SELECT 'product name: ' || name || ' stock: ' || stock AS name_stock FROM products;

--SELECT CONCAT('product name', name, ' stock: ', stock);


-- CASE

SELECT *, 
CASE 
	WHEN price < 30.0 THEN 'Lowest price'
	WHEN price > 30.0 AND price < 50 THEN 'Price Greather than 30'
	WHEN price > 50.0 AND price < 2499 THEN 'Price greather than 50'
ELSE 'with out range'
END AS grather_than
FROM products;




-- SUBCONSULTAS

-- 325.56

SELECT * FROM products
WHERE price > (
	SELECT AVG(price) FROM products
);

-- 325.56
SELECT AVG(price) FROM products;



-- 


SELECT * FROM products
WHERE stock = 50;



SELECT * FROM products
WHERE stock = (
	SELECT MAX(stock) FROM products
);

-- 50
SELECT MAX(stock) FROM products;
