CREATE database amazonolan;

use amazonolan;

create table Products (
    PID INT NOT NULL,
    PName VARCHAR(50),
    PDisc VARCHAR(100),
    PCat INT NOT NULL,
    PCost float(10, 3),
    PRetail float(10, 3),
    QonHand int,
    primary key (PID)
);

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
    isAdmin boolean,
    primary key(CID)
);

create table Orders (
    OrderID int,
    CID int,
    totalPrice FLoat(10, 3),
    primary key(OrderID)
);

create table OrderItems (
    OIID int,
    OrderID int,
    PID int,
    QOrdered int,
    TotalPrice float,
    primary key (OIID)
);