

Alter user 'root'@'localhost' identified with mysql_native_password by 'rasta1998';

FLUSH PRIVILEGES




CREATE DATABASE Project_UmegaStudio;

use Project_UmegaStudio;

-- TABLE STUDIO

CREATE TABLE Studio(
    id CHAR(10) PRIMARY KEY NOT NULL,
    nama varchar(25) NOT NULL,
    alamat text NOT NULL,
    no_telp int NOT NULL
)

CREATE TABLE user(
    id_user INT PRIMARY KEY NOT NULL auto_increment,
    nama varchar(30) NOT NULL,
    alamat text,
    no_telp int not NULL,
    email varchar(35) NOT NULL 
)

CREATE TABLE package(
    id_package INT PRIMARY KEY NOT NULL auto_increment,
    nama varchar(30) NOT NULL,
    harga int NOT NULL,
    deskripsi text
)

CREATE TABLE shop (
    id_brg INT PRIMARY KEY NOT NULL auto_increment,
    nama varchar(30) NOT NULL,
    harga int NOT NULL,
    deskripsi text
)