const data = require('../../db/data');

const posteosController ={
agregarPost: function(req,res){

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
searchResults: function(req,res){

}

};
module.exports = posteosController