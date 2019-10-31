CREATE database amazonolan;

use amazonolan;

create table Products (
    item_ID INT NOT NULL,
    product_name VARCHAR(50),
    department_name VARCHAR(100),
    price float(10, 2),
    quantity int,
    primary key (item_ID)
);

INSERT INTO Products (item_ID, product_name, department_name, price, quantity)
VALUES (0, "snacks", "food", 2, 20);

INSERT INTO Products (item_ID, product_name, department_name, price, quantity)
VALUES (1, "vegetables", "food", 4, 8);

INSERT INTO Products (item_ID, product_name, department_name, price, quantity)
VALUES (2, "beer", "food", 8, 6);

INSERT INTO Products (item_ID, product_name, department_name, price, quantity)
VALUES (3, "convertible", "vehicle", 50000, 1);

INSERT INTO Products (item_ID, product_name, department_name, price, quantity)
VALUES (4, "speedboat", "vehicle", 12469, 2);

INSERT INTO Products (item_ID, product_name, department_name, price, quantity)
VALUES (5, "atv", "vehicle", 6900, 10);

INSERT INTO Products (item_ID, product_name, department_name, price, quantity)
VALUES (6, "helicaopter", "vehicle", 33420, 3);

INSERT INTO Products (item_ID, product_name, department_name, price, quantity)
VALUES (7, "phone", "technology", 690, 1);

INSERT INTO Products (item_ID, product_name, department_name, price, quantity)
VALUES (8, "gameboy", "technology", 340, 1);

INSERT INTO Products (item_ID, product_name, department_name, price, quantity)
VALUES (9, "laptop", "technology", 2300, 1);







create table ProductCategories (
    PCID INT NOT NULL,
    PCName varchar(50),
    PCDisc VARCHAR(100),
    primary key (PCID)
);

create table Customers (
    CID INT auto_increment,
    UserName varchar(50),
    password varchar(25),
    isLogged boolean,
    primary key(CID)
);

create table Orders (
    OrderID int,
    CID int,
    totalPCost FLoat(10, 3),
    primary key(OrderID)
);

create table OrderItems (
    OIID int,
    OrderID int,
    PID int,
    QOrdered int,
    TotalPCost float,
    primary key (OIID)
);