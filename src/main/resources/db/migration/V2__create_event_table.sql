CREATE TABLE event
(
    id        BIGSERIAL Primary key,
    name VARCHAR(255),
    base VARCHAR(255),
    location VARCHAR(255),
    date VARCHAR(255),
    description VARCHAR(255),
    branch VARCHAR(255)
)