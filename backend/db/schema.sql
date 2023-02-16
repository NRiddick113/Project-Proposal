DROP DATABASE IF EXISTS games_dev;
CREATE DATABASE games_dev;

\c games_dev;

CREATE TABLE games(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    price NUMERIC,
    description TEXT,
    release TEXT,
    developers TEXT,
    platforms TEXT,
    genres TEXT NOT NULL,
    autisic BOOLEAN,
    image TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <=5)
)