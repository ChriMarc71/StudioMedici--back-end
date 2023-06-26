# TODO
* [x] implemenentare ***l'util makeID(64)***
* [x] implementare ***/auth/login*** Simo
* [x] implementa l'assegnazione ***token temporaneo JWT*** Chri
* [x] implementare il controllo ***middleware JWT*** Chri 
* [X] implementare un ***mailValidator*** Chri
* [x] implementare ***sendEmail*** con ***nodemailer*** (usando ***mailValidator***) Simo
* [x] implementare ***/auth/register*** Simo
* [x] implementare protocollo ***/auth/resetPassword*** Simo
* [x] implementare protocollo ***/auth/forgottenPassword*** Simo
* [X] creare ***tabella dottori/segreteria*** Chri
* [X] aggiornare ***prisma ORM*** Chri
* [X] middleware ***controllo tokenAmm*** (per controllare i ruoli delle pagine) Chri
* [X] creare ***tabella pazienti*** Chri
* [X] aggiornare ***prisma ORM*** Chri
* [x] implementare i ***metodi di /personaleStudio*** (SUPER-AMDIN) Simo
* [X] implementare i ***metodi di /pazienti*** (doctors) Chri
* [X] creare ***tabella prenotazioni*** Chri
* [X] aggiornare ***prisma ORM***
* [X] implementare i ***metodi di /prenotazioni*** Simo

## Dati prenotazioni:
Id INT AUTO_INCREMENT PRIMARY KEY,
StartTime DATETIME,
EndTime DATETIME,
PatientUsername VARCHAR(50),
PatientNumber VARCHAR(50),
DoctorUsername VARCHAR(50)
## Dati dottori:
Id INT AUTO_INCREMENT PRIMARY KEY,
Name VARCHAR(50),
Surname VARCHAR(50),
Email VARCHAR(100),
Username VARCHAR(50),
Password VARCHAR(50),
Number VARCHAR(20),
Doctor VARCHAR(50),
TokenAmm VARCHAR(255),
IsEnable TINYINT(1)
## Dati segreteria:
Id INT AUTO_INCREMENT PRIMARY KEY,
Name VARCHAR(50),
Surname VARCHAR(50),
Email VARCHAR(100),
Username VARCHAR(50),
Password VARCHAR(50),
Number VARCHAR(20),
TokenAmm VARCHAR(255),
IsEnable TINYINT(1)
## Dati pazienti:
Id INT AUTO_INCREMENT PRIMARY KEY,
Name VARCHAR(50),
Surname VARCHAR(50),
Email VARCHAR(100),
Username VARCHAR(50),
Password VARCHAR(50),
Number VARCHAR(20),
Doctor VARCHAR(50),
EmailConfirmed TINYINT(1),
DoctorConfirmed TINYINT(1),
IsEnable TINYINT(1)
