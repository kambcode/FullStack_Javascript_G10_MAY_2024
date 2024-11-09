
-- JOIN


-- INNER JOIN

SELECT * FROM customers;

SELECT * FROM orders;


SELECT * FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;


SELECT * FROM orders_products;

SELECT * FROM products
JOIN orders_products ON products.id = orders_products.product_id;


-- LEFT JOIN

SELECT * FROM products AS p
LEFT JOIN orders_products AS op 
ON p.id = op.product_id;


SELECT p.name, op.id, p.id FROM products AS p
LEFT OUTER JOIN orders_products AS op 
ON p.id = op.product_id;


-- RIGHT JOIN

SELECT * FROM products AS p
RIGHT JOIN orders_products AS op 
ON p.id = op.product_id;


SELECT * FROM orders_products AS op
RIGHT OUTER JOIN products AS p 
ON p.id = op.product_id;


-- FULL JOIN

SELECT * FROM products as p
FULL OUTER JOIN orders_products as op
ON  p.id = op.product_id;



-- MULTIPLE JOIN
-- obtener todos los products que tengan ordenes

SELECT o.order_date, p.id, p.name FROM orders AS o 
JOIN orders_products as op ON o.id = op.order_id
JOIN products AS p ON op.product_id = p.id;


-- tener todos los productos que han sido comprados y el cliente

SELECT 
	p.id as product_id,
	p.price,
	o.id as order_id, 
	op.quantity,
	c.name,
	c.email,
	c.id as customer_id
FROM products AS p
RIGHT JOIN orders_products AS op ON p.id = op.product_id
LEFT JOIN orders AS o ON op.order_id = o.id
LEFT JOIN customers AS c ON o.customer_id = c.id;



