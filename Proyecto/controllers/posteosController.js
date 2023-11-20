const data = require('../../db/data');
const db = require('../database/models')
const posteos = db.Posteo;

const posteosController ={
agregarPost: function(req,res){
    return res.render('agregarPost')
},
detallePost: function(req,res){
    let id = req.params.id;

    db.Posteo.findByPk(id,{
        include:[{all:true, nested: true}]
    })
    .then(function(result){
        // return res.send(result)
        return res.render('detallePost', {posteo: result})
    })
    .catch(function(error){
        return res.send(error)
    }) 
},

nuevoPost: function(req, res){
    let nuevoPosteo = {
        usuarioId: req.session.user.id,
        url: req.body.url,
        pieImg: req.body.pieImg
    }
    
    posteos.create(nuevoPosteo)
    .then(result=> {
        console.log(result);
        return res.redirect('/posteos/agregar')
    })
    .catch((error)=> {
        
        return res.send(error)
    })
    
},
borrar: function (req,res) {
    let idPost = req.params.id
        if (req.session.user != undefined) {
            posteos.destroy({
                where : {id : idPost}
            })
            .then(function(result){
                return res.redirect('/usuarios/miperfil')
            })
            .catch(function(error){
               return res.send(error)
            })
        } else {
            return res.render(`/posteos/detalle/${req.params.id}`)
        }
},
edit: function (req,res) {
    let idPost= req.params.id
        if (req.session.user != undefined) {
            post.update({
                url : req.body.url,
                pieImg: req.body.pieImg
            },
            { where : {id :idPost}})    
        } else {
            return res.render(`/posteos/detalle/${req.params.id}`)
        }
}

};
module.exports = posteosController