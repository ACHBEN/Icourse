const Classe = require('./classe')
const User = require('./user')

Classe.hasMany(User);
User.belongsTo(Classe);