let express = require('express')
let router = express.Router()

const Usercontrolleur = require('./controllers/user');
const Classroomcontrolleur = require('./controllers/classe');

router.post("/users",Usercontrolleur.Add); //ajouter un utilisateur
router.get("/users", Usercontrolleur.Show); // trouver un utilisateur
router.post('/users/login', Usercontrolleur.Login) // login 

router.post('/classes', Classroomcontrolleur.Add) // ajouter une classe
router.get("/classes", Classroomcontrolleur.Show) // Afficher les données d'une classe
router.post("/classes/addUser", Classroomcontrolleur.AddUser) // ajouter un utilisateur à une classe


module.exports = router;
