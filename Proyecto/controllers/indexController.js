const session = require('express-session');
const data = require('../../db/data');
const db = require('../database/models')
const bcrypt = require('bcryptjs');

const indexController = {
    index: function (req, res) {

       // return res.send(req.session.user)
        
        /* INDEX ES EL NOMBRE DE LA VISTA, DATOS ES EL NOMBRE PARA EL EJS Y POSTEOS ES LA VARIABLE CREADA */
       let filtro = {
        include:[{all:true, nested: true}], order: [["createdAt","DESC"]]
       };
       db.Posteo.findAll(filtro)
       .then((result) => {
       // res.send(result)
        return res.render("index",{datos: result})
       }).catch((err) => {
        console.log(err)
       });
    },
    
    registro: function (req, res) {
        return res.render('registracion')
    },

    registroPost: function(req,res){
            let errors = {};
    
            if (req.body.email == "") {
                errors.message = "El campo del email no puede estar vacío"
                res.locals.errors = errors
                return res.render("registracion")
            }
            else if (req.body.contrasenia.length < 4) {
                errors.message = "La contraseña no puede tener menos de 4 caracteres"
                res.locals.errors = errors
                return res.render("registracion")
            }
            else {
                let user = {
                    nombreUsuario : req.body.nombre,
                    email : req.body.email,
                    clave : bcrypt.hashSync(req.body.contrasenia, 10),
                    fechaNac : req.body.fechaNac,
                    dni : req.body.dni,
                    fotoPerfil : req.body.fotoPerfil
                }
                
    
                db.Usuario.create(user)
                .then(result=> {
                    console.log("---------------------------------------");
                    console.log(result);
                    return res.redirect('/login')
                })
                .catch((error)=> {

                    console.log(error);
                    if(error.errors[0].message == "email must be unique"){
                        errors.message = "Ese email ya fue utilizado"
                        res.locals.errors = errors
                        return res.render("registracion")
                    }else{
                        return res.send(error)
                    }
                    
                })
                
            }
        },
    login: function(req, res){
        return res.render('login')   
    },

    loginPost: (req, res) => {
        let emailBuscado = req.body.email;
        let pass = req.body.contrasenia;               // clave del formulario
        let remenberme=req.body.remenberme;
        let criterio = {
            where: [{email: emailBuscado}]
        };
       
        db.Usuario.findOne(criterio)
        .then((result) => {

            if (result != null) {
                let check = bcrypt.compareSync(pass, result.clave)
                
                if (check) {
                    req.session.user=result.dataValues;
                    if (remenberme!=undefined) {
                        res.cookie('userId', result.id,{maxAge:1000 * 60 * 5})
                    }
                    return res.redirect("/")
                } else {
                    return res.render("login")
                }

            } else {
                return res.send("No existe el mail " + emailBuscado)
            }
            
        }).catch((err) => {
            return console.log(err);
        });

        return res.redirect("/");
    }
}

module.exports = indexController;