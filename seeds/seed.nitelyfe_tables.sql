BEGIN;

TRUNCATE
nitelyfe_things
RESTART IDENTITY CASCADE;

INSERT INTO nitelyfe_things (description, location, day_of_week, title)
VALUES
('party here with us', 'atlanta', '3', 'the local'),
('drinks on me', 'atlanta', '0', 'the local'),
('get drunk', 'atlanta', '5', 'superica'),
('brunch here', 'atlanta', '3', 'blind dog'),
('mimosa monday', 'atlanta', '4', 'west egg'),
('taco tuesday', 'atlanta', '4', 'loca luna'),
('frisky friday', 'atlanta', '5', 'the local'),
('thirsty thursday', 'atlanta', '6', 'the local'),
('sober sunday', 'atlanta', '6', 'the local'),
('silly saturday', 'atlanta', '1', 'the local');

COMMIT;