CREATE TABLE application
(
    id          BIGSERIAL Primary key,
    branch      VARCHAR(255),
    dodid       VARCHAR(15),
    first_name  VARCHAR(255),
    last_name   VARCHAR(255),
    rank        VARCHAR(15),
    mos         VARCHAR(10)
)