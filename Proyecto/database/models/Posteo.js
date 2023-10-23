module.exports = function (sequelize, dataTypes){
    let alias = 'Posteo';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuarioId: {
            type: dataTypes.INTEGER
        },
        url: {
            type: dataTypes.STRING
        },
        pieImg: {
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
        tableName : "posteo",
        timestamps: true,
        underscored: false,
    };
    
    const Posteo = sequelize.define(alias, cols, config);

    Posteo.associate = function(models) {
        Posteo.belongsTo( models.Usuario , {
            as: "posteosAUsuarios",
            foreignKey: "usuarioId",
            timestamps: false
        });
        Posteo.hasMany( models.Comentario , {
            as: "posteosAComentarios",
            foreignKey: "posteoId",
            timestamps: false
        })
    }
  
    return Posteo;
}