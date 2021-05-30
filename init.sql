CREATE EXTENSION tablefunc;
create table sales_db(id serial, firstname varchar, lastname varchar, email varchar, item varchar, quantity numeric, total_price numeric);
INSERT INTO public.sales_db (firstname,lastname,email,item,quantity,total_price) VALUES
	 ('Yoh','Asakura','yoh@mail.com','sepatu',3,60000),
	 ('Tao','Ren','tao@mail.com','baju',4,160000),
	 ('Johann','Faust','faust@mail.com','sendal',7,84000),
	 ('Lyserg','Diethel','lyserg@mail.com','celana',31,1240000),
	 ('Yoh','Asakura','yoh@mail.com','sendal',6,72000),
	 ('Johann','Faust','faust@mail.com','sepatu',7,140000),
	 ('Tao','Ren','tao@mail.com','celana',1,40000),
	 ('Lyserg','Diethel','lyserg@mail.com','sendal',2,24000),
	 ('Yoh','Asakura','yoh@mail.com','baju',5,200000),
	 ('Johann','Faust','faust@mail.com','jaket',7,420000);
