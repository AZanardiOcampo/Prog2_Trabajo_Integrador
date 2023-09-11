const data = {
    usuarios: [{
        nombreUsuario: "goleroexperto" ,
        email: "goleroexperto@gmail.com",
        fotoPerfil: null,
        clave: "golero123" ,
        fecNac: "1998-09-24",
        dni: 98765432
    },
    {
        nombreUsuario: "futbolamante",
        email: "futbolamante@gmail.com",
        fotoPerfil: null,
        clave: "amantefulbo",
        fecNac: "2004-03-05",
        dni: 36765432
    },
    {
        nombreUsuario: "jugadorestrella",
        email: "jugadorestrella@gmail.com",
        fotoPerfil: null,
        clave: "star",
        fecNac: "1987-07-31",
        dni: 47955432
    },
    {
        nombreUsuario: "campodejuego",
        email: "campodejuego@gmail.com",
        fotoPerfil: null,
        clave: "campo",
        fecNac: "2012-01-06",
        dni: 47928032
    },
    {
        nombreUsuario: "entrenadorhabil",
        email: "entrenadorhabil@gmail.com",
        fotoPerfil: null,
        clave: "dt",
        fecNac: "1987-06-24",
        dni: 55674032
    }
],
    posteos: [{
        id: 1,
        usuarioId: 1,
        nombreUsuario: "goleroexperto",
        url: "https://i.pinimg.com/736x/49/19/a8/4919a8dc44184ea27159ad8e1e6dde41.jpg" ,
        pieImg: "Parado no bailão",
        comentarios: [
            {usuario: "futbolamante",comentario:"Vamos Santos !!!!!"},
            {usuario: "jugadorestrella",comentario:"Te amo Neymar !!!!!"},
            {usuario: "campodejuego",comentario:"La copa libertadores es mi obsesion"},
            {usuario: "entrenadorhabil",comentario:"Que Jogadorrrr..."}]
    },
    {
        id: 2,
        usuarioId: 1,
        nombreUsuario: "goleroexperto",
        url: "https://i.pinimg.com/originals/30/56/6b/30566b73b45265855eec978630163a9e.jpg" ,
        pieImg: "El ultimo Diez",
        comentarios: [
            {usuario: "futbolamante",comentario:"EL ULTIMO 10"},
            {usuario: "jugadorestrella",comentario:"Roman, Boca es tu casa"},
            {usuario: "campodejuego",comentario:"QUIERO LA LIBERTADOOOREEEEE"},
            {usuario: "entrenadorhabil",comentario:"Romanticoooo"}]
    },
    {
        id: 3,
        usuarioId: 2,
        nombreUsuario: "futbolamante",
        url: "https://i.pinimg.com/originals/22/ad/21/22ad219ca0f55b0b46c8d79a556a56ae.jpg",
        pieImg: "SIUUUUUUUUUUU",
        comentarios: [
            {usuario: "goleroexperto", comentario: "THE GOAT"},
            {usuario: "jugadorestrella", comentario: "Mr. Championsss"},
            {usuario: "campodejuego", comentario: "EL COMANDANTEEEE"},
            {usuario: "entrenadorhabil", comentario: "Messi > Ronaldo"}
        ]
    }
    ,
    {
        id: 4,
        usuarioId: 2,
        nombreUsuario: "futbolamante",
        url: "https://i.pinimg.com/originals/34/21/2e/34212e4bf0581d9f528907987ff40f58.jpg",
        pieImg: "Caipirinha, samba e futebol",
        comentarios: [
            {usuario: "goleroexperto", comentario: "Zaaambaaaaa"},
            {usuario: "jugadorestrella", comentario: "The magician"},
            {usuario: "campodejuego", comentario: "Futeboolll"},
            {usuario: "entrenadorhabil", comentario: "Baila Dinho Baila"}
        ]
    }
    ,
    {
        id: 5,
        usuarioId: 3,
        nombreUsuario: "jugadorestrella",
        url: "https://i.pinimg.com/originals/e5/33/20/e533200b8ffded0453a22c0cde450585.jpg",
        pieImg: "TE AMO ARGENTINAAAA <3 <3",
        comentarios: [
            {usuario: "goleroexperto", comentario: "THE GOAT"},
            {usuario: "futbolamante", comentario: "Muchaaaachooosssss"},
            {usuario: "campodejuego", comentario: "Ronaldo > Messi"},
            {usuario: "entrenadorhabil", comentario: "HERMOSAAAAA"}
        ]
    }
    ,
    {
        id: 6,
        usuarioId: 3,
        nombreUsuario: "jugadorestrella",
        url: "https://i.pinimg.com/originals/f4/b3/6c/f4b36cef73d4dbbaf1a765cc97ed2b00.jpg",
        pieImg: "Kikando e me olhandooo",
        comentarios: [
            {usuario: "goleroexperto", comentario: "Visca Barca"},
            {usuario: "futbolamante", comentario: "Volveeeeee"},
            {usuario: "campodejuego", comentario: "Neymar Barcelona > Neymar PSG"},
            {usuario: "entrenadorhabil", comentario: "Campeonesssss"}
        ]
    }
    ,
    {
        id: 7,
        usuarioId: 4,
        nombreUsuario: "campodejuego",
        url: "https://i.pinimg.com/originals/ad/f1/a6/adf1a69d625058b82066e88c76665b41.jpg",
        pieImg: "Vinotinto de mi vida...",
        comentarios: [
            {usuario: "goleroexperto", comentario: "Grande Josefff!!!!!"},
            {usuario: "futbolamante", comentario: "Idoloooo"},
            {usuario: "jugadorestrella", comentario: "Vamos seleccioooonnnn"},
            {usuario: "entrenadorhabil", comentario: "Vinotiintooooo"}
        ]
    }
    ,
    {
        id: 8,
        usuarioId: 4,
        nombreUsuario: "campodejuego",
        url: "https://i.pinimg.com/originals/6e/9a/61/6e9a612e1f3ea6344bc952e570e79ad8.jpg",
        pieImg: "Baila Dibu Baila",
        comentarios: [
            {usuario: "goleroexperto", comentario: "SIIIIII"},
            {usuario: "futbolamante", comentario: "Dibujeeeeee"},
            {usuario: "jugadorestrella", comentario: "LO SIENTO PERO TE COMO HERMANO"},
            {usuario: "entrenadorhabil", comentario: "Genioooooo"}
        ]
    }
    ,
    {
        id: 9,
        usuarioId: 5,
        nombreUsuario: "entrenadorhabil",
        url: "https://i.pinimg.com/originals/e2/c1/bc/e2c1bcfe56dbf10c545d06cf2c00512f.jpg",
        pieImg: "+3, Vamos globo!",
        comentarios: [
            {usuario: "goleroexperto", comentario: "VAMO ARRIBAAA"},
            {usuario: "futbolamante", comentario: "Vamos Globo de mi vidaaaaa"},
            {usuario: "jugadorestrella", comentario: "Como te quiero bigoteeeeeee"},
            {usuario: "campodejuego", comentario: "CRACK"}
        ]
    }
    ,
    {
        id: 10,
        usuarioId: 5,
        nombreUsuario: "entrenadorhabil",
        url: "https://i.pinimg.com/originals/98/59/a1/9859a1196280b00ef8cb5b1ae49b6268.jpg",
        pieImg: "Messi debuts for Inter Miami",
        comentarios: [
            {usuario: "goleroexperto", comentario: "Vamos LEOOOOO"},
            {usuario: "futbolamante", comentario: "El mejor de todos los tiempos"},
            {usuario: "jugadorestrella", comentario: "COME ON MESSIIIII"},
            {usuario: "campodejuego", comentario: "The Last Dance"}
        ]
    }
]
};

module.exports = data;
