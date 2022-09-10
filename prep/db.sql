-- remember to run it as root!!!

CREATE DATABASE Products;


CREATE TABLE Products.Food (
  foodID INT NOT NULL AUTO_INCREMENT,
  productName VARCHAR(255) NOT NULL,
  priceForUnit FLOAT NOT NULL,
  unitsStored FLOAT,
  -- can be either 'l'(litre) or 'kg' (kilogram)
  unit varchar(50) NOT NULL,
  PRIMARY KEY(foodID),
  CHECK (unit IN ('kg','l'))
);

-- dummy data
INSERT INTO Products.Food(foodID,productName,priceForUnit,unitsStored,unit) 
VALUES (null,'banana',3.5, 10, 'kg');
INSERT INTO Products.Food(foodID,productName,priceForUnit,unitsStored,unit) 
VALUES (null,'strawberry',4.99, 5, 'kg');
INSERT INTO Products.Food(foodID,productName,priceForUnit,unitsStored,unit) 
VALUES (null,'milk',2.99, 10, 'l');
INSERT INTO Products.Food(foodID,productName,priceForUnit,unitsStored,unit) 
VALUES (null,'juice',3.75, 5, 'l');