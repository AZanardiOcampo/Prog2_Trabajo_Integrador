module.exports = function (sequelize, dataTypes){
    let alias = 'Comentario';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuarioId: {
            type: dataTypes.INTEGER
        },
        posteoId: {
            type: dataTypes.INTEGER
        },
        comentario: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE,   
        }
    }
    let config = {
        tableName : "comentarios",
        timestamps: true,
        underscored: false,
    };
    
    const Comentario = sequelize.define(alias, cols, config);

    
    /* RELACIONES FALTA HACERLO DESPUES DE TODOS LOS MODELOS */
    Comentario.associate = function(models) {
        Comentario.belongsTo( models.Posteo , {
            as: "comentarioAPosteo",
            foreignKey: "posteoId",
            timestamps: false
        });
        Comentario.belongsTo( models.Usuario , {
            as: "comentarioAUsuario",
            foreignKey: "usuarioId",
            timestamps: false
        })
    
    }
  
    return Comentario;
}