const express = require("express");

const mysql = require("mysql");
const url = require('url');

const fs = require('fs');

const app = express();

const optionConnection = { 
    host: "localhost",
    user: "root",
    password: "pd+12SQm",
    port: 3306,
    database: "restaurant"
};
 

app.use(myConnection(optionConnection, "pool"));

app.set("views", "./views");

app.set("view engine", "ejs");

app.use(express.static("public"));
// insérer un route GET

app.get("/accueil", (req, res) => {
    // Récupère l'heure actuelle
    let date = new Date();
    let salutation = "Bonjour"; // Salutation par défaut = Bonjour

    if (date.getHours() > 14) {
        salutation = "Bonsoir";
    }

    const utilisateur = {
        nom: ["Massida"], // Tableau de noms
        prenom: "Dominique",
        maSalutation: salutation // Correction du nom de la propriété
    };

    res.render("accueil", utilisateur);
});


app.get("/menu", (req, res) => {
    nosPlats = { // Changer le nom de la variable ici
     plats: [
       { nom: "Suprême de Poulet à la Crème", prix: "18€" },
       { nom: "Poisson du Jour à la Plancha", prix: "22€" },
       { nom: "Risotto aux Champignons Sauvages", prix: "16€" },
       { nom: "Tartare de Boeuf à l'Italienne", prix: "19€" },
       { nom: "Tarte Tatin Maison", prix: "7€" },
     ]
   };
  
   // Passe nosPlats à la vue "menu"
   res.render("menu", nosPlats); // Changer ici pour correspondre au nom de la variable
  });


  app.get("/contact", (req, res) => {
      contactInfo = { // Changer le nom de la variable ici
        info: [
            { horaires: "Lundi - Vendredi : 12h00 - 14h30 / 19h00 - 22h00" },
            { weekend: "Samedi - Dimanche : 12h00 - 15h00 / 19h00 - 23h00" }
        ]
    };

    // Passe contactInfo à la vue "contact"
    res.render("contact", contactInfo); // Changer ici pour correspondre au nom de la variable
});


// une route get qui mène au fichier accueil




module.exports = app;