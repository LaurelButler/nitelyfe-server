BEGIN;

TRUNCATE
nitelyfe_things
RESTART IDENTITY CASCADE;

INSERT INTO nitelyfe_things (description, location, day_of_week, title)
VALUES
('$7 Pitchers of Beer', 'The Local: 758 Ponce De Leon Ave NE Atlanta, GA 30306', '1', 'Karaoke Night'),
('$5 drinks for any alcohol and $3 for any beer! Top shelf, bottom shelf, Lager, IPA? Whatever you want. Be sure to have your id and a copy of your industry schedule.', 'Johnny Hideaway: 3771 Roswell Rd NE Atlanta, GA 30342', '0', 'Industry Night'),
('$2 tacos and $2 tequila shots!', 'MOTHER Bar + Kitchen: 447 Edgewood Ave SE Atlanta, GA 30312', '2', 'Taco Tuesday'),
('$4 well drinks', 'Bucket Shop Cafe: 3475 Lenox Rd NE 30326', '5', 'Industry Drink Specials'),
('$5 glasses of red wine, white wine, and bubbles from 4:30PM EST - 6:00PM EST!', 'Gypsy Kitchen: 3035 Peachtree Rd NE Atlanta, GA 30305', '4', 'Happy Hour'),
('Grab some discounted well cocktails and house wine! A bite to eat may be nice too. All available on our industry menu', 'Olde Blind Dog: 705 Town Blvd NE Brookhaven, GA 30319', '3', 'Industry Menu Specials');
-- ('frisky friday', 'atlanta', '5', 'the local'),
-- ('thirsty thursday', 'atlanta', '6', 'the local'),
-- ('sober sunday', 'atlanta', '6', 'the local'),
-- ('silly saturday', 'atlanta', '1', 'the local');

COMMIT;