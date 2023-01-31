**INFOS :**
Cette application est encore en cours de développement


**Requirement :**

- Tout d'abord, il est nécessaire de lancer la commande "npm i"
- Ensuite, il faut avoir 3 terminals pour lancer les commandes : 
  - "npx directus start" dans le dossier du projet directus
  - "node ./server.js" dans le dossier du projet
  - "npm start" dans le dossier du projet
  
- Il est nécessaire d'importer le script de base de données disponible sur google drive et d'avoir un projet directus sur cette base de données.
- Le nom de la base de données est "directusblindtest". Il sera probablement nécessaire de modifier la base de données dans les paramètres du projet directus
  - Le compte admin est : 
    - Identifiant: "admin@example.com"
    - Mot de passe: "admin"
  
 Pour lancer l'application en PWA, il est nécessaire de lancer les commandes "npm run build" puis "serve -s build"
