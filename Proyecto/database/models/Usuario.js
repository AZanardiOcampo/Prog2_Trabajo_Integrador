module.exports = function (sequelize, dataTypes){
    let alias = 'Usuario';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        },
        nombreUsuario: {
            type: dataTypes.STRING
        },
        fotoPerfil: {
            type: dataTypes.STRING
        },
        clave: {
            type: dataTypes.STRING
        },
        fechaNac: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
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
        tableName : "usuario",
        timestamps: true,
        underscored: false,
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {
        Usuario.hasMany( models.Posteo , {
            as: "usuariosAPosteos",
            foreignKey: "usuarioId",
            timestamps: false
        });
        Usuario.hasMany( models.Comentario , {
            as: "usuariosAComentarios",
            foreignKey: "usuarioId",
            timestamps: false
        })
    }
  
    return Usuario;
}