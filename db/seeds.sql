USE burgers_db;

TRUNCATE TABLE burgers;

INSERT INTO 
    burgers (burger_name, devoured)
VALUES 
    ('Crispy-licious', false),
    ('Cheeseball', false),
    ('Veggin & Surfin', false);

SELECT * FROM burgers;