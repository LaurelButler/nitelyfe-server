BEGIN;

TRUNCATE
nitelyfe_things
RESTART IDENTITY CASCADE;

INSERT INTO nitelyfe_things (description, location, date, title)
VALUES
('party here with us', 'atlanta', '2019-05-20', 'the local'),
('drinks on me', 'atlanta', '2019-05-30', 'the local'),
('get drunk', 'atlanta', '2019-05-15', 'superica'),
('brunch here', 'atlanta', '2019-05-11', 'blind dog'),
('mimosa monday', 'atlanta', '2019-05-09', 'west egg'),
('taco tuesday', 'atlanta', '2019-05-05', 'loca luna'),
('frisky friday', 'atlanta', '2019-05-19', 'the local'),
('thirsty thursday', 'atlanta', '2019-05-27', 'the local'),
('sober sunday', 'atlanta', '2019-05-18', 'the local'),
('silly saturday', 'atlanta', '2019-05-07', 'the local');

COMMIT;