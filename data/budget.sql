--
-- File generated with SQLiteStudio v3.2.1 on Mon Apr 27 15:28:39 2020
--
-- Text encoding used: UTF-8
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: accounts
CREATE TABLE `accounts` (`id` integer not null primary key autoincrement, `name` varchar(255) not null, `budget` float not null);
INSERT INTO accounts (id, name, budget) VALUES (2, 'account-02', 206.75);
INSERT INTO accounts (id, name, budget) VALUES (3, 'account-03', 6789.0);
INSERT INTO accounts (id, name, budget) VALUES (4, 'account-04', 199.99);
INSERT INTO accounts (id, name, budget) VALUES (5, 'account-05', 22.34);
INSERT INTO accounts (id, name, budget) VALUES (6, 'account-06', 300.0);
INSERT INTO accounts (id, name, budget) VALUES (7, 'account-07', 7000.0);
INSERT INTO accounts (id, name, budget) VALUES (8, 'account-08', 78800.0);
INSERT INTO accounts (id, name, budget) VALUES (9, 'account-09', 3030.3);
INSERT INTO accounts (id, name, budget) VALUES (10, 'account-10', 19.56);
INSERT INTO accounts (id, name, budget) VALUES (11, 'account-11', 19.91);
INSERT INTO accounts (id, name, budget) VALUES (12, 'account-12', 7080.0);
INSERT INTO accounts (id, name, budget) VALUES (13, 'account-13', 1234.0);
INSERT INTO accounts (id, name, budget) VALUES (14, 'Lukas', 1000.0);

-- Table: knex_migrations
CREATE TABLE `knex_migrations` (`id` integer not null primary key autoincrement, `name` varchar(255), `batch` integer, `migration_time` datetime);
INSERT INTO knex_migrations (id, name, batch, migration_time) VALUES (1, '20190522212205_accounts-schema.js', 1, 1562461603813);

-- Table: knex_migrations_lock
CREATE TABLE `knex_migrations_lock` (`index` integer not null primary key autoincrement, `is_locked` integer);
INSERT INTO knex_migrations_lock ("index", is_locked) VALUES (1, 0);

-- Index: accounts_name_unique
CREATE UNIQUE INDEX `accounts_name_unique` on `accounts` (`name`);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
