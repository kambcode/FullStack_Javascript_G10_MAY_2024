
INSERT INTO products
(name, price, stock, category)
VALUES
	('Latte', 2.50, 100, 'café'),
    ('Espresso', 1.80, 50, 'café'),
    ('Croissant', 1.20, 30, 'panadería');

INSERT INTO customers (name)
VALUES
    ('María', 'maria@example.com'),
    ('Juan');
	('Josefa', 'josefa@example.com');

SELECT * FROM customers;
SELECT * FROM products;


INSERT INTO orders (customer_id, total_amount) VALUES
(1, 5.00), -- María
(2, 3.60); -- Juan



INSERT INTO orders_products (order_id, product_id, quantity) VALUES
(1, 1, 2), -- María compró 2 Latte
(2, 2, 2), -- Juan compró 2 Espresso
(2, 3, 1); -- Juan compró 1 Croissant


INSERT INTO products (name, price, stock, category) VALUES
('Capuchino', 3.00, 50, 'café'),   
('Bagel', 1.50, 20, 'panadería'); 