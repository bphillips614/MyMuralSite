DROP TABLE murals;
DROP TABLE photos;
DROP TABLE neighborhoods;
DROP TABLE photo_types;

CREATE TABLE murals (
    id INTEGER PRIMARY KEY,
    neighborhood INTEGER,
    artist TEXT,
    discovery_date TEXT,
    last_visit_date TEXT,
    current BOOLEAN,
    latitude DOUBLE,
    longitude DOUBLE,
    street TEXT,
    photo_id INTEGER
);
CREATE TABLE photos (
    id INTEGER PRIMARY KEY,
    photo TEXT,
    "type" INTEGER
);
CREATE TABLE photo_types (
    id INTEGER PRIMARY KEY,
    photo_type TEXT
);
CREATE TABLE neighborhoods (
    id INTEGER PRIMARY KEY,
    neighborhood TEXT,
    logo_id INTEGER
);