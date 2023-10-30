const data = require('../../db/data');
const db = require('../database/models')

const posteosController ={
agregarPost: function(req,res){
    return res.render('agregarPost')
},
detallePost: function(req,res){
    let id = req.params.id;
    let posteoEncontrado = null;
        
    for (let i = 0; i < data.posteos.length; i++) {
        if(data.posteos[i].id == id){
        posteoEncontrado = data.posteos[i]
             }
        }

    res.render('detallePost',{posteo: posteoEncontrado})
},

nuevoPost: function(req, res){
    let posteo = {url: req.body.URL, pieImg: req.body.pieImg}
}

/* terminar cuando terminemos lo de las cookies */

};
module.exports = posteosController