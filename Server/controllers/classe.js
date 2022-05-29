const Classroom = require('../models/classe');
const User = require('../models/user')

exports.Show = function(req,res){
    Classroom.findOne({attributes:['code'], where:{code: req.query.code}})
    .then(data=>{
        console.log('DATA : ', data)
        res.status(200).json(data)
    })
    .catch(err=>{
        res.status(500).json({message:err.message})
    }
    )
    }

exports.Add = function(req,res){
    const classroom = Classroom.build({ code: req.body.code})
    classroom.save()
        .then(data=>{
            res.status(200).json({ message: "The classroom has been created ! "})
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

//ajout d'un utilisateur dans une classe

exports.AddUser = async function(req, res) {
    const { code, username } = req.body;

    const classe = await Classroom.findOne({where: { code }})
    const user = await User.findOne({ where: { UserName: username }})

    if (!user) {
        res.status(404).json({ message: "The user does not exist"});
        return;
    }

    if (!classe) {
        res.status(404).json({ message: "The classroom does not exist"});
        return;
    }

    classe.addUser(user)

    res.status(200).json({ message: 'ROOM JOINED !', room: classe})


}