const session = require('express-session');
const data = require('../../db/data');
const db = require('../database/models')
const bcrypt = require('bcryptjs');

const indexController = {
    index: function (req, res) {

        return res.send(req.session.user)
        
        /* INDEX ES EL NOMBRE DE LA VISTA, DATOS ES EL NOMBRE PARA EL EJS Y POSTEOS ES LA VARIABLE CREADA */
       return res.render('index', {datos: data.posteos}); 
    },
    
    registro: function (req, res) {
        return res.render('registracion')
    },

    registroPost: function(req, res){
        let info = req.body;                    // info del formulario
        let user = {
            name: info.name,
            email: info.email,
            password: bcrypt.hashSync(info.password, 10),
            remember_token: "false"
        };

        db.User.create(user)
        .then((result) => {
            return res.redirect("/usuarios/login");
        }).catch((error) => {
            return console.log(error);
        });
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