const data = require('../../db/data');

const indexController = {
    index: function (req, res) {
        /* INDEX ES EL NOMBRE DE LA VISTA, DATOS ES EL NOMBRE PARA EL EJS Y POSTEOS ES LA VARIABLE CREADA */
        return res.render('index', {datos: data.posteos});
    },
    registro: function (req, res) {
        return res.render('registracion')
    },
    login: function(req,res){
        
    }
}

module.exports = indexController;