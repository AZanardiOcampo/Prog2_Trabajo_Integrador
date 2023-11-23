const data = require('../../db/data');
const db = require('../database/models');
const posteos = db.Posteo;
const usuarios = db.Usuario;
const comentarios = db.Comentario;

const usuariosController = {

    detalle: function(req, res){
        
       let id = req.params.usuarioId
     //  let usuarioEncontrado = []

       usuarios.findByPk(id, {include:[{all:true, nested: true}], order: [["createdAt","DESC"]]})
       .then(function(result) {
          console.log(result);
          res.render("detalleUsuario", {datos: result})   
       })
       .catch(error => console.log(error))

       /* for (let i = 0; i < data.posteos.length; i++) {
           if(id == data.posteos[i].usuarioId){
            usuarioEncontrado.push(data.posteos[i])
           }
        }
        console.log(usuarioEncontrado);
        res.render("detalleUsuario", {datos: usuarioEncontrado}) */
    },
    miPerfil: function(req, res){
      
      let usuario = req.session.user;
     // return res.send(usuario)
      usuarios.findByPk(usuario.id, {include:[{all:true, nested: true}], order: [["createdAt","DESC"]]})
      .then(function(result) {
        // return res.send(result)
         res.render("miPerfil", {datos: result})   
      })
      .catch(error => console.log(error))
   }
      /* res.send({data: req.session.user})
      res.render("miPerfil", {datos: usuarioEncontrado}) */
     ,
     editar: function(req, res){
        console.log(req.session.user);
         res.render('editarPerfil')
     },
     editarPost: function(req, res){
         let errors = {};
         let infoNueva = {
            nombreUsuario: req.body.nombreUsuario, 
            email: req.body.email,
            fechaNac: req.body.fechaNac,
            fotoPerfil: req.body.fotoPerfil
         }

         if (req.body.nombreUsuario == "") {
            infoNueva.nombreUsuario = req.session.user.nombreUsuario
         }

         if (req.body.email == "") {
            infoNueva.email = req.session.user.email
         }

         if (req.body.fechaNac == "") {
            infoNueva.fechaNac = req.session.user.fechaNac
         }

         if (req.body.fotoPerfil == "") {
            infoNueva.fotoPerfil = req.session.user.fotoPerfil
         }

         usuarios.update(infoNueva,
            { where: { id: req.session.user.id } }
        )
            .then(function (result) {
                console.log(infoNueva);
                req.session.user.email = infoNueva.email;
                req.session.user.fotoPerfil = infoNueva.fotoPerfil;
                req.session.user.fechaNac = infoNueva.fechaNac;
                req.session.user.nombreUsuario = infoNueva.nombreUsuario;

                return res.redirect('/usuarios/miperfil')
            })
            .catch(function (error) {
               if(error.errors[0].message == "email must be unique"){
                  errors.message = "Ese email ya fue utilizado"
                  res.locals.errors = errors
                  return res.render("editarPerfil")}

               if(error.errors[0].message == "nombreUsuario must be unique"){
                  errors.message = "Ese Nombre de Usuario ya fue utilizado"
                  res.locals.errors = errors
                  return res.render("editarPerfil")}

                  else {
               return res.send(error)
            }
            })
     },
   
  /* CHEQUEAR SI ESTO ESTA BIEN */
  logout: function (req, res) {
      res.clearCookie("userId");
      req.session.user = undefined
      return res.render('login')
  },
}

module.exports = usuariosController 