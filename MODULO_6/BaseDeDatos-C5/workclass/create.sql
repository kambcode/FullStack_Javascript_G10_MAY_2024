DROP TABLE IF EXISTS cliente_ordenes_productos;
DROP TABLE IF EXISTS cliente_ordenes;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS productos;

CREATE TABLE customers (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	email TEXT UNIQUE
);

CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	price NUMERIC(6,2) CHECK(price >= 0),
	stock SMALLINT CHECK(stock >= 0) DEFAULT 0,
	category VARCHAR(20)
);

CREATE TABLE orders (
	id SERIAL PRIMARY KEY,
	customer_id INT REFERENCES customers(id),
	order_date DATE DEFAULT NOW(),
    total_amount NUMERIC NOT NULL
);

CREATE TABLE orders_products (
    id SERIAL PRIMARY KEY,
	order_id INT REFERENCES orders(id),
	product_id INT REFERENCES products(id),
	quantity SMALLINT DEFAULT 1
);