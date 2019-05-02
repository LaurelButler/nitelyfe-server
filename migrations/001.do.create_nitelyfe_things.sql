CREATE TABLE nitelyfe_things (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    location TEXT NOT NULL,
    date TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    title TEXT NOT NULL,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    date_modified TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
)