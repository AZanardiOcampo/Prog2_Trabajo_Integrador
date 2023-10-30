const data = require('../../db/data');
const db = require('../database/models')

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
        
        let usuario = "nombre"
        let usuarioEncontrado = []
 
         for (let i = 0; i < data.posteos.length; i++) {
            if(usuario == data.posteos[i].nombreUsuario){
             usuarioEncontrado.push(data.posteos[i])
            }
         }
 
        res.render("miPerfil", {datos: usuarioEncontrado})
     },
     editar: function(req, res){
         res.render('editarPerfil')
     },
     
     editarPost: function(req, res)
     {
         let info = {
            nombreUsuario: req.body.nombreUsuario, 
            email: req.body.email,
            contrasenia: req.body.contrasenia,
            fotoPerfil: req.body.fotoPerfil
         }

        info.nombreUsuario = res.locals.nombreUsuario
         info.email = res.locals.email
         info.contrasenia = res.locals.contrasenia
         info.fotoPerfil = res.locals.fotoPerfil

     },
   
     busqueda: function (req, res) {
      let nombre = req.params.username; 
      let usuarioEncontrado = []

      for (let i = 0; i < data.posteos.length; i++) {
         if(nombre == data.posteos[i].nombreUsuario){
          usuarioEncontrado.push(data.posteos[i])
         }
      }

      res.render('resultadoBusqueda', {datos: usuarioEncontrado}); /* No pudimos hacer funcionar el boton de la lupa, pero si ponen el nombre de usuario en la url, te muestra el perfil del usuario */
  }
  
}

module.exports = usuariosController 