create schema proyecto;

use proyecto;

create table usuario (
      id                        int           unsigned primary key auto_increment,
	email                   varchar(50)           not null unique,
      nombreUsuario           varchar(50)         not null,
     fotoPerfil              varchar(200),          
     clave                   varchar(200)          not null,
     fechaNac                   date              not null,
     dni                        int                 unique,
     createdAt               timestamp default current_timestamp, 
     updatedAt               timestamp default current_timestamp on update current_timestamp,
     deletedAt               timestamp null
    );

create table posteo (
      id                        int           unsigned primary key auto_increment,
	usuarioId                   int                        unsigned not null,
      url                    varchar(500),
	 pieImg                  varchar(500),          
     createdAt               timestamp default current_timestamp, 
     updatedAt               timestamp default current_timestamp on update current_timestamp,
     deletedAt               timestamp null,
	foreign key (usuarioId)  references usuario(id)
);

create table comentarios ( 
      id                        int           unsigned primary key auto_increment,
	usuarioId                   int                       unsigned not null,
	posteoId                    int                       unsigned not null,
    comentario               varchar(500),
     createdAt               timestamp default current_timestamp, 
     updatedAt               timestamp default current_timestamp on update current_timestamp,
     deletedAt               timestamp null,
	foreign key (usuarioId)  references usuario(id),
    foreign key (posteoId)  references posteo(id)
);

insert into usuario (id, nombreUsuario, email, fotoPerfil, clave, fechaNac, dni) values
(default, "goleroexperto", "goleroexperto@gmail.com", "https://i.pinimg.com/originals/24/1b/8a/241b8a8ac4d409581bf664f3312f64f5.jpg", "$2a$10$g.9br4i7FJ7jdDwI8mYu5umEfRy9NWGb2BPtodJ3RCbJtCD9Tg.BO", "1998-09-24", 98765432),
(default, "futbolamante", "futbolamante@gmail.com", "https://i.pinimg.com/originals/13/56/5b/13565bb630a44bf1bee6fdfad7af309f.jpg", "$2a$10$g.9br4i7FJ7jdDwI8mYu5umEfRy9NWGb2BPtodJ3RCbJtCD9Tg.BO", "2004-03-05", 36765432),
(default, "jugadorestrella", "jugadorestrella@gmail.com", "https://i.pinimg.com/originals/c8/bd/78/c8bd78ec453b025407c2ce02bf2ba55f.jpg", "$2a$10$g.9br4i7FJ7jdDwI8mYu5umEfRy9NWGb2BPtodJ3RCbJtCD9Tg.BO", "1987-07-31", 47955432),
(default, "campodejuego", "campodejuego@gmail.com", "https://i.pinimg.com/originals/df/4f/9f/df4f9f97d31c38cdd05bdbc6f5c6df0b.jpg", "campo", "2012-01-06", 47928032),
(default, "entrenadorhabil", "entrenadorhabil@gmail.com", "https://i.pinimg.com/originals/76/3c/cc/763ccc261482595ed42c94f76ddd6764.jpg", "$2a$10$g.9br4i7FJ7jdDwI8mYu5umEfRy9NWGb2BPtodJ3RCbJtCD9Tg.BO", "1987-06-24", 55674032);

insert into posteo(id, usuarioId, url, pieImg) values
(default, 1, "https://i.pinimg.com/736x/49/19/a8/4919a8dc44184ea27159ad8e1e6dde41.jpg" , "Parado no bailão"),
(default, 1, "https://i.pinimg.com/originals/30/56/6b/30566b73b45265855eec978630163a9e.jpg" , "El ultimo Diez"),
(default, 2, "https://i.pinimg.com/originals/22/ad/21/22ad219ca0f55b0b46c8d79a556a56ae.jpg" , "SIUUUUUUUUUUU"),
(default, 2, "https://i.pinimg.com/originals/34/21/2e/34212e4bf0581d9f528907987ff40f58.jpg" , "Caipirinha, samba e futebol"),
(default, 3, "https://i.pinimg.com/originals/e5/33/20/e533200b8ffded0453a22c0cde450585.jpg" , "TE AMO ARGENTINAAAA <3 <3"),
(default, 3, "https://i.pinimg.com/originals/f4/b3/6c/f4b36cef73d4dbbaf1a765cc97ed2b00.jpg" , "Kikando e me olhandooo"),
(default, 4, "https://i.pinimg.com/originals/ad/f1/a6/adf1a69d625058b82066e88c76665b41.jpg" , "Vinotinto de mi vida..."),
(default, 4, "https://i.pinimg.com/originals/6e/9a/61/6e9a612e1f3ea6344bc952e570e79ad8.jpg" , "Baila Dibu Baila"),
(default, 5, "https://i.pinimg.com/originals/e2/c1/bc/e2c1bcfe56dbf10c545d06cf2c00512f.jpg" , "+3, Vamos globo!"),
(default, 5, "https://i.pinimg.com/originals/98/59/a1/9859a1196280b00ef8cb5b1ae49b6268.jpg" , "Messi debuts for Inter Miami");

insert into comentarios (id, usuarioId, posteoId, comentario) values
/* NEYMAR */ /* PRIMER POSTEO DE USUARIO 1 */
(default, 2, 1, "Vamos Santos !!!!!"), /* el usuario 2 comenta en el posteo 1 (que es del usuario 1), ese comentario */
(default, 3, 1, "Te amo Neymar !!!!!"),
(default, 4, 1, "La copa libertadores es mi obsesion"),
(default, 5, 1, "Que Jogadorrrr..."),
/* ROMAN */ /* SEGUNDO POSTEO DE USUARIO 1 */
(default, 2, 2, "EL ULTIMO 10"),
(default, 3, 2, "Roman, Boca es tu casa"),
(default, 4, 2, "QUIERO LA LIBERTADOOOREEEEE"),
(default, 5, 2, "Romanticoooo"),
/* BICHO */ /* PRIMER POSTEO DE USUARIO 2 */
(default, 1, 3, "THE GOAT"),
(default, 3, 3, "Mr. Championsss"), 
(default, 4, 3, "EL COMANDANTEEEE"), 
(default, 5, 3, "Messi > Ronaldo"),
/* DINHO */ /* SEGUNDO POSTEO DE USUARIO 2 */
(default, 1, 4, "Zaaambaaaaa"),
(default, 3, 4, "The magician"), 
(default, 4, 4, "Futeboolll"), 
(default, 5, 4, "Baila Dinho Baila"),
/* MESSI */ /* PRIMER POSTEO DE USUARIO 3 */
(default, 1, 5, "THE GOAT"),
(default, 2, 5, "Muchaaaachooosssss"),
(default, 4, 5, "Ronaldo > Messi"),
(default, 5, 5, "HERMOSAAAAA"),
/* NEY CHAMPIONS */ /* SEGUNDO POSTEO DE USUARIO 3  */
(default, 1, 6, "Visca Barca"),
(default, 2, 6, "Volveeeeee"),
(default, 4, 6, "Neymar Barcelona > Neymar PSG"),
(default, 5, 6, "Campeonesssss"),
/* VENEZUELA */ /* PRIMER POSTEO DE USUARIO 4 */
(default, 1, 7, "Grande Josefff!!!!!"),
(default, 2, 7, "Idoloooo"),
(default, 3, 7, "Vamos seleccioooonnnn"),
(default, 5, 7, "Vinotiintooooo"),
/* DIBU */ /* SEGUNDO POSTEO DE USUARIO 4*/
(default, 1, 8, "SIIIIII"),
(default, 2, 8, "Dibujeeeeee"),
(default, 3, 8, "LO SIENTO PERO TE COMO HERMANO"),
(default, 5, 8, "Genioooooo"),
/* ZORRO */ /* PRIMER POSTEO DE USUARIO 5 */
(default, 1, 9, "VAMO ARRIBAAA"),
(default, 2, 9, "Vamos Globo de mi vidaaaaa"),
(default, 3, 9, "Como te quiero bigoteeeeeee"),
(default, 4, 9, "CRACK"),
/* MESSI INTER */ /* SEGUNDO POSTEO DE USUARIO 5 */
(default, 1, 10, "Vamos LEOOOOO"),
(default, 2, 10, "El mejor de todos los tiempos"),
(default, 3, 10, "COME ON MESSIIIII"),
(default, 4, 10, "The Last Dance")
;