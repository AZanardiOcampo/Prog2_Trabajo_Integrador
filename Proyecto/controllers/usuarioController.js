const data = require('../../db/data');
const db = require('../database/models');
const posteos = db.Posteo;
const usuarios = db.Usuario;
const comentarios = db.Comentario;

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
      
      let usuario = req.session.user;
      usuarios.findByPk(usuario.id, {include:[{all:true, nested: true}], order: [["createdAt","DESC"]]})
      .then(function(result) {
         //return res.send(result)
         res.render("miPerfil", {datos: result})   
      })
      .catch(error => console.log(error))
   }
      /* res.send({data: req.session.user})
      res.render("miPerfil", {datos: usuarioEncontrado}) */
     ,
     editar: function(req, res){
         res.render('editarPerfil')
     },
     editarPost: function(req, res){
         let infoNueva = {
            nombreUsuario: req.body.nombreUsuario, 
            email: req.body.email,
            fechaNac: req.body.fechaNac,
            fotoPerfil: req.body.fotoPerfil
         }

         if (req.body.contrasenia != "") {
            infoNueva.clave = bcrypt.hashSync(req.body.contrasenia)
         }

         usuario.update(infoNueva,
            { where: { usuarioId: req.session.user.usuarioId } }
        )
            .then(function (result) {
                console.log(infoNueva);
                req.session.user = result
                return res.redirect('/')
            })
            .catch(function (error) {
                return res.send(error)
            })

        /*  info.nombreUsuario = res.locals.nombreUsuario
         info.email = res.locals.email
         info.contrasenia = res.locals.contrasenia
         info.fotoPerfil = res.locals.fotoPerfil */
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
  },
  /* CHEQUEAR SI ESTO ESTA BIEN */
  logout: function (req, res) {
      res.clearCookie("userId");
      req.session.user = undefined
      return res.render('login')
  },
}

module.exports = usuariosController 