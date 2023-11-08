const data = require('../../db/data');
const db = require('../database/models')

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
        return res.render('detallePost', {posteo: result})
    })
    .catch(function(error){
        return res.send(error)
    }) 
},

nuevoPost: function(req, res){
    let posteo = {url: req.body.URL, pieImg: req.body.pieImg}
}

/* terminar cuando terminemos lo de las cookies */

};
module.exports = posteosController