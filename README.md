# README - Projet Django en Python

Ce README fournit des informations et des instructions pour le projet Django en Python.

## Description

Le projet Django est une application web développée en utilisant le framework Django en Python. Il s'agit d'une
application puissante et flexible conçue pour faciliter le développement rapide et efficace de sites web.

Explication des étapes de création du projet Django.

## Installation

## Configuration

Le projet Django utilise un fichier de configuration `settings.py` pour définir les paramètres de l'application. Avant
de lancer le serveur, assurez-vous de configurer les éléments suivants :

- Base de données : Configurez les informations de connexion à votre base de données dans un fichier `.env` à la racine
  du projet. Voir le fichier `.env.example` pour un exemple de configuration ou voir la section "Configuration de la
  base de donnée" ci-dessous.

- Clé secrète : Générez une clé secrète unique pour votre application Django et définissez-la votre fichier
  d'environnement `.env`.

- Paramètres spécifiques à l'application : Vérifiez les autres paramètres dans le fichier `settings.py` et modifiez-les
  si nécessaire, en fonction des besoins de votre application.

## Utilisation

Une fois le serveur de développement lancé, vous pouvez accéder à l'application dans votre navigateur à
l'adresse http://localhost:8000/. Explorez les différentes fonctionnalités et utilisez l'application conformément à ses
spécifications.

## Configuration de la base donnée.

Ce qui nous permet désormais de créer un fichier `.env` à la racine du projet et d'y stocker nos variables
d'environnement.

```shell
touch .env
```

Ensuite, nous avons rempli le fichier `.env` avec les variables nécéssaire à votre configuration mysql :

```shell
DB_NAME=event_immediat # Le nom de votre base de données
DB_USER=root
DB_PASSWORD=root
DB_HOST=localhost
DB_PORT=3306
```

Avant de lancer le projet pour vérifier que tout est bon, nous devons créer la base de données dans MySQL.

```shell
mysql -u root -p
# Entrer votre mot de passe
```

Création de la base de données :

```sql
CREATE
DATABASE event_immediat;
```
