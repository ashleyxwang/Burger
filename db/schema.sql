DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN, NOT NULL
);

-- SELECT id, burger_name,
-- IF(devoured,'true','false') devoured
-- FROM burgers;

