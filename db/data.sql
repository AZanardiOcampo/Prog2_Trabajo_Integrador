/* create schema proyecto */

use proyecto;

create table usuario (
      id                        int           unsigned primary key auto_increment,
	 email                   varchar(50)           not null,
     fotoPerfil              varchar(200),          
     clave                   varchar(200)          not null,
     fechaNac                datetime              not null,
     dni                        int                 unique not null,
     createdAt               timestamp default current_timestamp, 
     updatedAt               timestamp default current_timestamp on update current_timestamp,
     deletedAt               timestamp on update current_timestamp
    );

create table posteo (
      id                        int           unsigned primary key auto_increment,
	usuarioId                   int                        not null,
      url                    varchar(500),
	 pieImg                  varchar(500),          
     createdAt               timestamp default current_timestamp, 
     updatedAt               timestamp default current_timestamp on update current_timestamp,
     deletedAt               timestamp on update current_timestamp,
	foreign key (usuarioId)  references usuario(id)
);

create table comentarios ( 
      id                        int           unsigned primary key auto_increment,
	usuarioId                   int                        not null,
	posteoId                    int                        not null,
    comentario               varchar(500),
     createdAt               timestamp default current_timestamp, 
     updatedAt               timestamp default current_timestamp on update current_timestamp,
     deletedAt               timestamp on update current_timestamp,
	foreign key (usuarioId)  references usuario(id),
    foreign key (posteoId)  references posteo(id)
);

use usuario;

insert into usuario (id, email, fotoPerfil, clave, fechaNac, dni) values
(default, "goleroexperto@gmail.com", null, "golero123", 1998-09-24, 98765432),
(default, "futbolamante@gmail.com", null, "amantefulbo", 2004-03-05, 36765432),
(default, "jugadorestrella@gmail.com", null, "star", 1987-07-31, 47955432),
(default, "campodejuego@gmail.com", null, "campo", 2012-01-06, 47928032),
(default, "entrenadorhabil@gmail.com", null, "dt", 1987-06-24, 55674032);

use posteo;
insert into posteo( id, usuarioId, url, pieImg) values
(default, 1, "https://ar.pinterest.com/pin/879820477187056538/" , "Parado no bailão"),
(default, 2, "https://ar.pinterest.com/pin/300896818871643042/" , "SIUUUUUUUUUUU"),
(default, 3, "https://ar.pinterest.com/pin/26177241577705188/" , "TE AMO ARGENTINAAAA <3 <3"),
(default, 4, "https://ar.pinterest.com/pin/32158584832113879/" , "Vinotinto de mi vida..."),
(default, 5, "https://www.google.com/search?sca_esv=562548860&rlz=1C1UEAD_esAR1001AR1001&sxsrf=AB5stBhLy8zmNBzJdgEd_ZjSQfFizr9qnw:1693840563956&q=matias+coccaro+wallpaper&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjHmvvon5GBAxWNQ7gEHdy_DycQ0pQJegQIDBAB&biw=1664&bih=985&dpr=1.5#imgrc=RkhKEsSNYZaoQM
" , "+3, Vamos globo!"),
(default, 1, "https://ar.pinterest.com/pin/33495590970955186/" , "El ultimo Diez"),
(default, 2, "https://ar.pinterest.com/pin/1337074885492709/" , "Caipirinha, samba e futebol"),
(default, 3, "https://ar.pinterest.com/pin/1140044093164423904/" , "Kikando e me olhandooo"),
(default, 4, "" , ""),