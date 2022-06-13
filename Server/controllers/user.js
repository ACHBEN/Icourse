const User = require('../models/user');
const Classe = require('../models/classe')


exports.ShowAll = function(req,res){
    User.findAll({ attributes: ['Username', 'Password']} )
    .then(data => {
    res.json(data);
    })
    .catch(err => {
    res.status(500).json({ message: err.message })
    })
}


exports.Show = function(req,res){
    const id = parseInt(req.query.id)
    User.findOne({attributes:['UserName'], where:{id:id}, include: Classe})
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.status(500).json({message:err.message})
    }
    )
    }

exports.Add = function(req,res){
    console.log(req.body);
    const user = User.build({ UserName: req.body.Name,Password:req.body.Password})
    user.save()
        .then(data=>{
            res.status(200).json({ message: 'Signup succeeded !'})
        })
        .catch(err=>{
            res.status(500).json({ message: err.message })
        }
    )
}

exports.Delete = async function(req,res){
    try {
        const data = await User.delete(
            {where:{id:req.body.id}})
        res.status(200).json(data);
    } catch(e) {
        res.status(500).json({message:err.message})
    }
}

exports.Update = function(req,res){    
    User.update(
        {UserName:req.body.Name,Password:req.body.Password},
        {where:{id: req.body.id}}
        )
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.status(500).json({ message: err.message })
        }
    )
}

exports.Login = async function(req, res) {
    const { Name, Password, code } = req.body
    const user = await User.findOne({attributes:['Password'], where:{ UserName: Name }})

    if (!user) {
        res.status(404).json({ message: 'User not found '});
        return;
    }

    if (user.Password !== Password ) {
        res.status(500).json({ message: 'The password is not correct'})
        return;
    }

    const classe = await Classe.findOne({ where: { code }})

    if (!classe) {
        res.status(404).json({ message: "The classroom does not exist"});
        return;
    }

    // classe.addUser(user);

    res.status(200).json({ message: 'ROOM JOINED !', room: classe})

}