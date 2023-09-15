const data = require('../../db/data');

const usuariosController = {

    detalle: function(req, res){
        
       let id = req.params.usuarioId
       let usuarioEncontrado = []

        for (let i = 0; i < data.posteos.length; i++) {
           if(id == data.posteos[i].usuarioId){
            usuarioEncontrado.push(data.posteos[i])
           }
        }
        console.log(usuarioEncontrado);
        res.render("detalleUsuario", {datos: usuarioEncontrado})
    },
    miPerfil: function(req, res){
        
        let id = req.params.usuarioId
        let usuarioEncontrado = []
 
         for (let i = 0; i < data.posteos; i++) {
            if(id == data.posteos[i].usuarioId){
             usuarioEncontrado.push(data.posteos[i])
            }
         }
 
         res.render("miPerfil", {datos: usuarioEncontrado})
     },
     editar: function(req,res){
         res.render('editarPerfil')
     }
}

module.exports = usuariosController 