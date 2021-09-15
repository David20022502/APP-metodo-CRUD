import React, {useEffect, useState} from 'react';
import '../css/HomeApp.css';
import ArtistCard from "./ArtistCard";
import {db} from "../Firebase";
const HomeApp=({gustosdatabase,changealbumPages})=>{
    const [generos,setGeneros]=useState(object.genre);
   // const [autores,setAutores]=useState(autoresdata);
    const[autoresdata,setautoresdata]=useState(null);
    useEffect(()=>{
        const gustostemporales = [];
        db.ref(`autores/`).on("value",(snapshot)=>{
            console.log("gustos traidos de la base",snapshot);
            snapshot.forEach((childSnapshot)=>{
                    const childId = childSnapshot.key;
                    const data = childSnapshot.val();
                    if(gustosdatabase.includes(data.genero)){
                        gustostemporales.push(data)
                    }
                    //console.log("autores",data);
                }
            );
            setautoresdata(gustostemporales);
        });
    },[])
    return(
            <div className="homeAppdiv">
                <h1 className="defaultTitlesobjects">Artistas destacados</h1>
                <div className="separadorHomeapp">
                </div>
                {
                    autoresdata && autoresdata.map((autor,index)=>{
                        return(
                            <ArtistCard object={autor} changealbumPages={changealbumPages}/>

                        );
                    })
                }
                <h1 className="defaultTitlesobjects">Géneros</h1>
                <div className="separadorHomeapp">
                </div>
                    {
                        generos.map((genro,index)=>{
                            return(
                                <ArtistCard object={genro}  changealbumPages={changealbumPages}/>

                            );
                        })
                    }
            </div>
    );
}
export default HomeApp;
const object=
    {
        genre:[
            {
                "id": "901",
                "genero": "nightcore",
                "enlace": "https://i1.sndcdn.com/artworks-000208284301-2jb7rj-t500x500.jpg"
            },

            {
                "id": "902",
                "genero": "cumbia",
                "enlace": "https://m.media-amazon.com/images/I/81HQ4euMsvL._SS500_.jpg"
            },

            {
                "id": "903",
                "genero": "electronica",
                "enlace": "https://i1.sndcdn.com/artworks-000046667360-v9zkxu-t500x500.jpg"
            },
            {
                "id": "904",
                "genero": "balada",
                "enlace": "https://i1.sndcdn.com/artworks-000128187888-rld6ww-t500x500.jpg"
            },

            {
                "id": "905",
                "genero": "bachata",
                "enlace": "https://i.pinimg.com/originals/da/c6/6e/dac66e8da9dd14005a1e16a06782cd42.jpg"
            },

            {
                "id": "906",
                "genero": "regueton",
                "enlace": "https://i1.sndcdn.com/artworks-000232551310-ufpmbn-t500x500.jpg"
            },

            {
                "id": "907",
                "genero": "rock",
                "enlace": "https://i.pinimg.com/originals/2f/e7/ab/2fe7ab21854b4b6cf29686700eca9298.png"
            },

            {
                "id": "908",
                "genero": "rap",
                "enlace": "https://i1.sndcdn.com/avatars-yQkNtBFwyMmolDgf-zFetdQ-t500x500.jpg"
            }
            ],
        autores: [

            {
                "id": "1001",
                "nombre": "Eminem",
                "enlace": "https://images-na.ssl-images-amazon.com/images/I/51QICO7PvQL.jpg"
            },
            {
                "id": "1002",
                "nombre": "Canserbero ",
                "enlace": "https://cdns-images.dzcdn.net/images/cover/109f9fe5b573033e11aabd72700b3d1a/500x500.jpg"
            },
            {
                "id": "1003",
                "nombre": "Porta",
                "enlace": "http://pm1.narvii.com/6533/6dccb81ae8b1358c7033f2f4eab7f83af8acd8e8_00.jpg"
            },
            {
                "id": "1004",
                "nombre": "Guns n roses",
                "enlace": "http://pm1.narvii.com/6467/55b46c7642cc9e3fe6fa5105fa85c639c37d5d30_00.jpg"
            },
            {
                "id": "1005",
                "nombre": "ACDC",
                "enlace": "https://m.media-amazon.com/images/I/51M4VPUxUhL._AC_.jpg"
            },
            {
                "id": "1007",
                "nombre": "Queen",
                "enlace": "https://cdns-images.dzcdn.net/images/artist/0b17b99897d17ceb7027ed57cdbb7044/500x500.jpg"
            },
            {
                "id": "1008",
                "nombre": "Supermerk2",
                "enlace": "https://direct.rhapsody.com/imageserver/images/alb.323195489/500x500.jpg"
            },
            {
                "id": "1009",
                "nombre": "Amar Azul",
                "enlace": "https://direct.rhapsody.com/imageserver/images/alb.144100782/500x500.jpg"
            },
            {
                "id": "1010",
                "nombre": "Avicii",
                "enlace": "https://i.pinimg.com/564x/3d/a2/a6/3da2a6b4730d7695cec76863af74845d.jpg"
            },
            {
                "id": "1011",
                "nombre": "Nectar",
                "enlace": "https://i1.sndcdn.com/artworks-000031180295-rpulnt-t500x500.jpg"
            },
            {
                "id": "1012",
                "nombre": "James Author",
                "enlace": "https://i1.sndcdn.com/artworks-000121934368-xx83lb-t500x500.jpg"
            },
            {
                "id": "1013",
                "nombre": "Alan Walker",
                "enlace": "https://i1.sndcdn.com/avatars-000228887415-y11o4w-t500x500.jpg"
            },
            {
                "id": "1014",
                "nombre": "Bingo Players ",
                "enlace": "https://i1.sndcdn.com/avatars-000536551911-o2x4w2-t500x500.jpg"
            },
            {
                "id": "1015",
                "nombre": "Miguel Gallardo",
                "enlace": "https://direct.rhapsody.com/imageserver/images/alb.10483540/500x500.jpg"
            },
            {
                "id": "1016",
                "nombre": "Leo Dan",
                "enlace": "https://i.kfs.io/album/global/20234920,0v1/fit/500x500.jpg"
            },
            {
                "id": "1017",
                "nombre": "Camilo Sesto",
                "enlace": "https://direct.rhapsody.com/imageserver/images/alb.237721363/500x500.jpg"
            },
            {
                "id": "1018",
                "nombre": "Prince Royce",
                "enlace": "https://i1.sndcdn.com/artworks-fecbd0c7-483d-4562-a8af-c55724dbf42c-0-t500x500.jpg"
            },
            {
                "id": "1019",
                "nombre": "Aventura",
                "enlace": "https://cdns-images.dzcdn.net/images/cover/2940b55bcb3b0857b917e3edc34e0dcb/500x500.jpg"
            },
            {
                "id": "1020",
                "nombre": "Romeo Santos",
                "enlace": "https://cdns-images.dzcdn.net/images/artist/27c204497e5c7e95fcf6e83c11e741a7/500x500.jpg"
            },
            {
                "id": "1021",
                "nombre": "Daddy Yankee",
                "enlace": "https://cdns-images.dzcdn.net/images/artist/5f45206580cde1388f71ccc7f8226768/500x500.jpg"
            },
            {
                "id": "1022",
                "nombre": "Don Omar",
                "enlace": "https://i1.sndcdn.com/artworks-000112865822-s1hyl3-t500x500.jpg"
            },
            {
                "id": "1023",
                "nombre": "Wisin Yandel",
                "enlace": "https://s.mxmcdn.net/images-storage/albums5/9/0/2/7/4/1/32147209_500_500.jpg"
            },

        ]
    }



