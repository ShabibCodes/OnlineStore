/* Replace with your SQL commands */


CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name varchar(50) NOT NULL,
    price INTEGER NOT NULL,
    url varchar(400) NOT NULL,
    description varchar(200) NOT NULL
);


insert into products(name, price, url, description)
 values('Book', 9.99,
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
'You can read it!'
 );
