const data = require('../../db/data');
const db = require('../database/models')
const posteos = db.Posteo;
const comentarios = db.Comentario;

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

            comentarios.destroy({
                where : { posteoId : idPost}
            })
                .then(function(result){
            posteos.destroy({
                where : {id : idPost}
            })})
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
    let idPost = req.params.id

        if (req.session.user != undefined) {
            posteos.update({
                url : req.body.url,
                pieImg: req.body.pieImg
            },
            { where : {id :idPost}})   
             
            return res.redirect('/usuarios/miperfil')
        } else {
            return res.render(`/posteos/detalle/${req.params.id}`)
        }
},

editPost: function (req, res){
    let id = req.params.id;

    db.Posteo.findByPk(id,{
        include:[{all:true, nested: true}]
    })
    .then(function(result){
        // return res.send(result)
        return res.render('editarPost', {posteo: result})
    })
    .catch(function(error){
        return res.send(error)
    }) 
},

agregarComment: function (req, res) {
    if(req.session.user != undefined){
        
        let comentario = {
            comentario : req.body.comentario,
            posteoId: req.params.id,
            usuarioId: req.session.user.id
        }
        
        comentarios.create(comentario)
        .then(function(result) {
            return res.redirect( `/posteos/detalle/${req.params.id}`)
        })
        .catch(function(error) {
            return res.send(error)
        })
    }else {
        return res.render("login")
    }
}

};
module.exports = posteosController