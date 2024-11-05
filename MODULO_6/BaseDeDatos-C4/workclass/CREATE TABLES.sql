CREATE TABLE IF NOT EXISTS public.products (
    id integer NOT NULL DEFAULT nextval('products_id_seq'::regclass),
    name character varying(50) NOT NULL,
    price numeric(6,2) CHECK (price >= 0),
    stock smallint DEFAULT 0 CHECK (stock >= 0),
    category character varying(20),
    CONSTRAINT products_pkey PRIMARY KEY (id)
);