let express = require('express')
let router = express.Router()

const Usercontrolleur = require('./controllers/user');
const Classroomcontrolleur = require('./controllers/classe');

router.post("/users",Usercontrolleur.Add);

router.get("/users", Usercontrolleur.Show);
router.post('/users/login', Usercontrolleur.Login)

router.post('/classes', Classroomcontrolleur.Add)
router.get("/classes", Classroomcontrolleur.Show)
router.post("/classes/addUser", Classroomcontrolleur.AddUser)


module.exports = router;
