BEGIN;

TRUNCATE
nitelyfe_things
RESTART IDENTITY CASCADE;

INSERT INTO nitelyfe_things (description, location, date, title)
VALUES
('party here with us', 'atlanta', '2019-05-20', 'the local');

COMMIT;