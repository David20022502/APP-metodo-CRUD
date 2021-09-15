import React, {useRef, useState} from 'react';
import { Modal, Button,Input } from 'antd';
import '../css/prueba.css';
import {db} from "../Firebase";
const Login = () => {
    const [autores,setautores]=useState(object.music);
    const playy= async ()=>{
        console.log("se hixo click");
        for (var i = 0; i < autores.length; i++) {
            console.log("esta denro for",autores[i]);
            db.ref(`musicas/${autores[i].id}`).set({
                id: autores[i].id,
                nombre: autores[i].nombre,
                genero: autores[i].genero,
                autor: autores[i].autor,
                enlace: autores[i].enlace
            });
        }
    }
    return (
        <>
            <Button  onClick={playy} style={{marginRight:"10px",fontSize:"25px"}}  type="primary" > play </Button>
        </>
    );
};
export default Login;
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

        ],
        music:[
            {
                "id": "101",
                "nombre": "El amor que perdimos",
                "genero": "bachata",
                "autor": "Prince Royce",
                "enlace": "https://docs.google.com/uc?export=download&id=14YHukSuwtpRKYJMpVzmmcGWN1xPvDTK9"
            },

            {
                "id": "102",
                "nombre": "Incondicional",
                "genero": "bachata",
                "autor": "Prince Royce",
                "enlace": "https://docs.google.com/uc?export=download&id=1TW94QwL_QbT-yR4RakztQrSYEC37rWPR"
            }
            ,
            {
                "id": "103",
                "nombre": "Su veneno",
                "genero": "bachata",
                "autor": "Aventura",
                "enlace": "https://docs.google.com/uc?export=download&id=1w22_gVYHaYNl02pjIt3MGqkWus4Svluj"
            }
            ,
            {
                "id": "104",
                "nombre": "Hilito",
                "genero": "bachata",
                "autor": "Romeo Santos",
                "enlace": "https://docs.google.com/uc?export=download&id=1FRGT1hhoCQpTB0vWsUNWZ0G7yQLFIFME"
            }
            ,
            {
                "id": "105",
                "nombre": "Noches de Fantasia",
                "genero": "bachata",
                "autor": "Joseph Fonseca",
                "enlace": "https://docs.google.com/uc?export=download&id=1RoShzI-JieIETjZTN7YSUK0SQ3l8zxwx"
            }
            ,
            {
                "id": "106",
                "nombre": "Tu eres ajena",
                "genero": "bachata",
                "autor": "Eddy Herrera",
                "enlace": "https://docs.google.com/uc?export=download&id=1WG0j4QML8SIrsS8SzmFyb9pZzaG8CCPM"
            }
            ,
            {
                "id": "107",
                "nombre": "Cancioncitas de amor",
                "genero": "bachata",
                "autor": "Romeo Santos",
                "enlace": "https://docs.google.com/uc?export=download&id=11fFI-wpPmcl-CV59y9uucm8E5DTQs7VF"
            }
            ,
            {
                "id": "108",
                "nombre": "Ensename a olvidar",
                "genero": "bachata",
                "autor": "Aventura",
                "enlace": "https://docs.google.com/uc?export=download&id=1ZxdRk85N6O1zmKA6BOhAYEPxkXsehlwl"
            }
            ,
            {
                "id": "109",
                "nombre": "Obsesion",
                "genero": "bachata",
                "autor": "Aventura",
                "enlace": "https://docs.google.com/uc?export=download&id=1U_qz9EP-rL4laUTwlrdZkycjpXTwo3T1"
            }
            ,
            {
                "id": "110",
                "nombre": "Dile al amor",
                "genero": "bachata",
                "autor": "Aventura",
                "enlace": "https://docs.google.com/uc?export=download&id=13A-Mf__3BV9fDrv8VmA_KrjGKi5AOJqU"
            }
            ,
            {
                "id": "111",
                "nombre": "Propuesta indecente",
                "genero": "bachata",
                "autor": "Romeo Santos",
                "enlace": "https://docs.google.com/uc?export=download&id=1KC-9KNqVHITvm1ofVOpw6CzPkOnjY9TY"
            }
            ,
            {
                "id": "112",
                "nombre": "Romeo y Julieta",
                "genero": "bachata",
                "autor": "Aventura",
                "enlace": "https://docs.google.com/uc?export=download&id=19mKK0k8KBk0eTKeAai0RGFjYm-Vih-AJ"
            }
            ,
            {
                "id": "201",
                "nombre": "Ojitos chiquititos",
                "genero": "regueton",
                "autor": "Don Omar",
                "enlace": "https://docs.google.com/uc?export=download&id=1tjgYdH7WWBgOvtYUZH7HPIgnMJNMSN-z"
            }
            ,
            {
                "id": "202",
                "nombre": "Dejame tocarte ahi na mas",
                "genero": "regueton",
                "autor": "Jking Maximan",
                "enlace": "https://docs.google.com/uc?export=download&id=1RnTz2Hkl8J5xzhxBkOOKBzKt9vrfYXfT"
            }
            ,
            {
                "id": "203",
                "nombre": "Perros salvajes",
                "genero": "regueton",
                "autor": "Daddy Yankee",
                "enlace": "https://docs.google.com/uc?export=download&id=1q9VwyNeX_nyD23el7-KhODdLrTJx6Iqc"
            }
            ,
            {
                "id": "204",
                "nombre": "Rakata",
                "genero": "regueton",
                "autor": "Wisin Yandel",
                "enlace": "https://docs.google.com/uc?export=download&id=14bBhyZzQDtSBcJKQvnhx4ALZ26zmphYJ"
            }
            ,
            {
                "id": "205",
                "nombre": "Bandoleros",
                "genero": "regueton",
                "autor": "Don Omar",
                "enlace": "https://docs.google.com/uc?export=download&id=10mVgXquU1YSqq63wk0D2IIbmyU2OPtzj"
            }
            ,
            {
                "id": "206",
                "nombre": "Rompe",
                "genero": "regueton",
                "autor": "Daddy Yankee",
                "enlace": "https://docs.google.com/uc?export=download&id=1w74Qg0sqwLfpS6jYJYrhFlLCAD3N6RU6"
            }
            ,
            {
                "id": "207",
                "nombre": "Gasolina",
                "genero": "regueton",
                "autor": "Daddy Yankee",
                "enlace": "https://docs.google.com/uc?export=download&id=1mHjIjeeQHJrHZYXnEuBJrzdvx6hWVXFr"
            }
            ,
            {
                "id": "208",
                "nombre": "Pose",
                "genero": "regueton",
                "autor": "Daddy Yankee",
                "enlace": "https://docs.google.com/uc?export=download&id=1Klcelp-Av93m19XNDgiK6xY1TxnvAoZr"
            }
            ,
            {
                "id": "209",
                "nombre": "Llamado de Emergencia",
                "genero": "regueton",
                "autor": "Daddy Yankee",
                "enlace": "https://docs.google.com/uc?export=download&id=1c_RGRDOaCPpo3GYUc5b8XzSLb7pT3EJv"
            }
            ,
            {
                "id": "210",
                "nombre": "Que Tengo Que Hacer",
                "genero": "regueton",
                "autor": "Daddy Yankee",
                "enlace": "https://docs.google.com/uc?export=download&id=1ZLm9lSNAxcc71ur7AtrToddSrQ-N1sQa"
            }
            ,
            {
                "id": "211",
                "nombre": "Diva virtual",
                "genero": "regueton",
                "autor": "Don Omar",
                "enlace": "https://docs.google.com/uc?export=download&id=1tcT3aujD9YHqGAnM2aIaEJz-naPo77Tb"
            }
            ,
            {
                "id": "212",
                "nombre": "Changueria",
                "genero": "regueton",
                "autor": "Jking Maximan",
                "enlace": "https://docs.google.com/uc?export=download&id=1kx8FKBHScrUVIuDxktp0de65YWlrKorM"
            }
            ,
            {
                "id": "301",
                "nombre": "Dueles",
                "genero": "baladas",
                "autor": "Jesse Joy",
                "enlace": "https://docs.google.com/uc?export=download&id=1Zug5pwd5oGW4NgyK9pBxsItbFRzNK6qS"
            },

            {
                "id": "302",
                "nombre": "Paris",
                "genero": "baladas",
                "autor": "La oreja de Van Gogh",
                "enlace": "https://docs.google.com/uc?export=download&id=1iDFJIkea_2TkHKfCmZoHuNqKz3aLv_jY"
            }
            ,
            {
                "id": "303",
                "nombre": "Melina",
                "genero": "baladas",
                "autor": "Camilo Sesto",
                "enlace": "https://docs.google.com/uc?export=download&id=1W7FpjSBWyAao_Dfl35JnQyd23djJvO8b"
            }
            ,
            {
                "id": "304",
                "nombre": "Cuatro palabras",
                "genero": "baladas",
                "autor": "Guardianes del amor",
                "enlace": "https://docs.google.com/uc?export=download&id=1NDhq2Y6mAYRJw6sqgF_ursJusaVRr9Ah"
            }
            ,
            {
                "id": "305",
                "nombre": "Tu y yo",
                "genero": "baladas",
                "autor": "Enmanuel",
                "enlace": "https://docs.google.com/uc?export=download&id=1FEHrPiBioCXcNtlhU2CccixPjwL394S5"
            }
            ,
            {
                "id": "306",
                "nombre": "Otro ocupa mi lugar",
                "genero": "baladas",
                "autor": "Miguel Gallardo",
                "enlace": "https://docs.google.com/uc?export=download&id=1chMsvcM_Am8BoX2nVs8gYogaZByBshra"
            }
            ,
            {
                "id": "307",
                "nombre": "Muchachita",
                "genero": "baladas",
                "autor": "Miguel Gallardo",
                "enlace": "https://docs.google.com/uc?export=download&id=17JMTEfsLW1mgTe1T2MLU0TBiNRuYSi5p"
            }
            ,
            {
                "id": "308",
                "nombre": "Y apago la luz",
                "genero": "baladas",
                "autor": "Miguel Gallardo",
                "enlace": "https://docs.google.com/uc?export=download&id=1EPHLvy9CdcbCJdqmC_Xvx0HxH2AWMVji"
            }
            ,
            {
                "id": "309",
                "nombre": "Un beso y una flor",
                "genero": "baladas",
                "autor": "Nino Bravo",
                "enlace": "https://docs.google.com/uc?export=download&id=1FlnlPPUDDZ2ynesTW1VBTX87QEIQc8HX"
            }
            ,
            {
                "id": "310",
                "nombre": "Te he prometido",
                "genero": "baladas",
                "autor": "Leo Dan",
                "enlace": "https://docs.google.com/uc?export=download&id=129jwOhglgPqy198SpxLP_ag0eZqsTuhF"
            }
            ,
            {
                "id": "311",
                "nombre": "Como te extrano mi amor",
                "genero": "baladas",
                "autor": "Leo Dan",
                "enlace": "https://docs.google.com/uc?export=download&id=1aKUzCjfiXxBB8J7yl7VCGMEz3K591wZt"
            }
            ,
            {
                "id": "312",
                "nombre": "Esa pared",
                "genero": "baladas",
                "autor": "Leo Dan",
                "enlace": "https://docs.google.com/uc?export=download&id=1SeXeBxewML4cI5kX6Bkn4vcguCvdz347"
            }
            ,
            {
                "id": "401",
                "nombre": "Ignite",
                "genero": "electronica",
                "autor": "Alan Walker",
                "enlace": "https://docs.google.com/uc?export=download&id=1-x0PmMX2yzTN-va2BeSYpNE92V8_gWC7"
            }
            ,
            {
                "id": "402",
                "nombre": "Everybody",
                "genero": "electronica",
                "autor": "Dj BoBo",
                "enlace": "https://docs.google.com/uc?export=download&id=1RAvRhvjPcPm05GHYQA5XAh5KsaftZRT7"
            }
            ,
            {
                "id": "403",
                "nombre": "The nights",
                "genero": "electronica",
                "autor": "Avicii",
                "enlace": "https://docs.google.com/uc?export=download&id=1ivcQx9h8Q_4d7XD8dLFgFn41hS8otrD7"
            }
            ,
            {
                "id": "404",
                "nombre": "Rattle",
                "genero": "electronica",
                "autor": "Bingo Players",
                "enlace": "https://docs.google.com/uc?export=download&id=1-6oWTnUonNp8P9pBsV3w6EFkNvRE22Np"
            }
            ,
            {
                "id": "405",
                "nombre": "The days",
                "genero": "electronica",
                "autor": "Avicii",
                "enlace": "https://docs.google.com/uc?export=download&id=1v7JTOZwLgrbXXzmwpm3ejPszvURu3ADh"
            }
            ,
            {
                "id": "406",
                "nombre": "Levels",
                "genero": "electronica",
                "autor": "Avicii",
                "enlace": "https://docs.google.com/uc?export=download&id=1JcTp9764JeOI1_x3V3rWJBlYX2CGl1UF"
            }
            ,
            {
                "id": "407",
                "nombre": "You make me",
                "genero": "electronica",
                "autor": "Avicii",
                "enlace": "https://docs.google.com/uc?export=download&id=1llahx8xU2rOJCoPxUEq4oEViFasvBmwF"
            }
            ,
            {
                "id": "408",
                "nombre": "Wake me up",
                "genero": "electronica",
                "autor": "Avicii",
                "enlace": "https://docs.google.com/uc?export=download&id=1-KWb5Um-0RcVICZfZegLnDJHpAdg2oS6"
            }
            ,
            {
                "id": "409",
                "nombre": "Faded",
                "genero": "electronica",
                "autor": "Alan Walker",
                "enlace": "https://docs.google.com/uc?export=download&id=1juXNJ2-_7r509JFT31cYEAV4xZDMaLeu"
            }
            ,
            {
                "id": "410",
                "nombre": "The spectre",
                "genero": "electronica",
                "autor": "Alan Walker",
                "enlace": "https://docs.google.com/uc?export=download&id=1xzJkBLbQ2jhJS1rB9zuNuog0tglFE0oa"
            }
            ,
            {
                "id": "411",
                "nombre": "My hearth",
                "genero": "electronica",
                "autor": "Alan Walker",
                "enlace": "https://docs.google.com/uc?export=download&id=1EYNdaO-dkxUz5s7WlcOHacYPNr_UF_hQ"
            }
            ,
            {
                "id": "412",
                "nombre": "Hello",
                "genero": "electronica",
                "autor": "OMFG",
                "enlace": "https://docs.google.com/uc?export=download&id=1EYNdaO-dkxUz5s7WlcOHacYPNr_UF_hQ"
            }
            ,
            {
                "id": "501",
                "nombre": "Hey brother",
                "genero": "nightcore",
                "autor": "Avicii",
                "enlace": "https://docs.google.com/uc?export=download&id=1ZnckVYH3jtKrKmumNH1_MVPCCBcCLTcY"
            }
            ,
            {
                "id": "502",
                "nombre": "Impossible",
                "genero": "nightcore",
                "autor": "James Author",
                "enlace": "https://docs.google.com/uc?export=download&id=1VpYl7sNoFeS730QynQLa9b_hdRYJMI4X"
            }
            ,
            {
                "id": "503",
                "nombre": "Rockerfeller Street",
                "genero": "nightcore",
                "autor": "Getter Jaani",
                "enlace": "https://docs.google.com/uc?export=download&id=14fu5jv0pFgDkdTE_KA7yay8AzoPaG-6x"
            }
            ,
            {
                "id": "504",
                "nombre": "Stamp on the ground",
                "genero": "nightcore",
                "autor": "ItaloBrothers",
                "enlace": "https://docs.google.com/uc?export=download&id=1HBRvRt0sz8MPuEH_pFZrsKE29EI2dSBT"
            },

            {
                "id": "505",
                "nombre": "Friends",
                "genero": "nightcore",
                "autor": "Marshmello",
                "enlace": "https://docs.google.com/uc?export=download&id=15U7I2SozcK-AWN7Lrkx1oDdkUWaPyDjK"
            }
            ,
            {
                "id": "506",
                "nombre": "Closer",
                "genero": "nightcore",
                "autor": "The Chainsmokers",
                "enlace": "https://docs.google.com/uc?export=download&id=1SEsfLAec-DEjsqYxnfMwA3FRYdDCBukD"
            }
            ,
            {
                "id": "507",
                "nombre": "DNA",
                "genero": "nightcore",
                "autor": "BTS",
                "enlace": "https://docs.google.com/uc?export=download&id=1-K9FBOpg5i7vNkdlLlS65-G_eM6Ezf-g"
            }
            ,
            {
                "id": "508",
                "nombre": "Fake love",
                "genero": "nightcore",
                "autor": "BTS",
                "enlace": "https://docs.google.com/uc?export=download&id=1okRWT0HYw1sINpKKFJxWZ2dn5FNMdrNl"
            }
            ,
            {
                "id": "509",
                "nombre": "Havana",
                "genero": "nightcore",
                "autor": "Camila Cabello",
                "enlace": "https://docs.google.com/uc?export=download&id=1BTJlhPpC6iga14B1MEdtYyack6Wur2Rd"
            }
            ,
            {
                "id": "510",
                "nombre": "Attention",
                "genero": "nightcore",
                "autor": "Charlie Puth",
                "enlace": "https://docs.google.com/uc?export=download&id=1O3Elns8O77O2CudpjTDkHXyxhmqFKatQ"
            }
            ,
            {
                "id": "511",
                "nombre": "All of me",
                "genero": "nightcore",
                "autor": "John Legend",
                "enlace": "https://docs.google.com/uc?export=download&id=1soaVUBDtDj0gXtkmJao5SCCf54gvRkER"
            }
            ,
            {
                "id": "512",
                "nombre": "A thousand years",
                "genero": "nightcore",
                "autor": "Christina Perri",
                "enlace": "https://docs.google.com/uc?export=download&id=1SOPj97z5L0iLUxWGIYNHGx9dV8SMz_8E"
            }
            ,
            {
                "id": "601",
                "nombre": "Cumbia chonera",
                "genero": "cumbia",
                "autor": "Don Medardo y sus Players",
                "enlace": "https://docs.google.com/uc?export=download&id=181XGjrX6q1pklbKhcafpbHx4md1AI_S2"
            }
            ,
            {
                "id": "602",
                "nombre": "El arbolito",
                "genero": "cumbia",
                "autor": "Grupo Nectar",
                "enlace": "https://docs.google.com/uc?export=download&id=1B4zMu5Dzku2Kd80fpxBeu7_WaXGQZ7EW"
            },

            {
                "id": "603",
                "nombre": "Enamorado",
                "genero": "cumbia",
                "autor": "Amar Azul",
                "enlace": "https://docs.google.com/uc?export=download&id=13Zrw7kTUKQAbTfKFL7W3vsq0waTfgUi6"
            },

            {
                "id": "604",
                "nombre": "Que calor",
                "genero": "cumbia",
                "autor": "Supermerk2",
                "enlace": "https://docs.google.com/uc?export=download&id=1FfyJzITVJg7N3t_jC_1-EZwRCvYy7027"
            },

            {
                "id": "605",
                "nombre": "La resaka",
                "genero": "cumbia",
                "autor": "Supermerk2",
                "enlace": "https://docs.google.com/uc?export=download&id=1onyOcyDyy3fb3y84hrxIsYrZsSYta0qW"
            }
            ,
            {
                "id": "606",
                "nombre": "La lata",
                "genero": "cumbia",
                "autor": "Supermerk2",
                "enlace": "https://docs.google.com/uc?export=download&id=1Zg9YqWQmbxTyYKdrbJvTk6kq5Cb61Kgy"
            }
            ,
            {
                "id": "607",
                "nombre": "Tomando porqueria",
                "genero": "cumbia",
                "autor": "Supermerk2",
                "enlace": "https://docs.google.com/uc?export=download&id=1xcRxDDuZOvfRLTK_b_NbmX6qEFmgYr-5"
            }
            ,
            {
                "id": "608",
                "nombre": "Duraznito",
                "genero": "cumbia",
                "autor": "Pibes chorros",
                "enlace": "https://docs.google.com/uc?export=download&id=18hjYuWlzBVRdxKCaszVzXy7dEQ5Ae8u7"
            },

            {
                "id": "609",
                "nombre": "El prisionero",
                "genero": "cumbia",
                "autor": "Pibes chorros",
                "enlace": "https://docs.google.com/uc?export=download&id=1vtjTJcyre9f30M9XtrTEIqNNDVIPoaAi"
            }
            ,
            {
                "id": "610",
                "nombre": "Yo me enamore",
                "genero": "cumbia",
                "autor": "Amar Azul",
                "enlace": "https://docs.google.com/uc?export=download&id=1XYlARsk1x91tO6F3omaKHal_It6Ooosl"
            },

            {
                "id": "611",
                "nombre": "El baile de la cumbia",
                "genero": "cumbia",
                "autor": "Grupo Nectar",
                "enlace": "https://docs.google.com/uc?export=download&id=1Y9DOLAavJq7x1oH2xkzhUZYCUS8S8_Qf"
            }
            ,
            {
                "id": "612",
                "nombre": "Sueltame",
                "genero": "cumbia",
                "autor": "Grupo Nectar",
                "enlace": "https://docs.google.com/uc?export=download&id=1-QWtQYfCCr8vgVa1lJRA9oITD6gqxuTq"
            }
            ,
            {
                "id": "701",
                "nombre": "House of the rising sun",
                "genero": "rock",
                "autor": "The white buffalo",
                "enlace": "https://docs.google.com/uc?export=download&id=1l98iJKeq3C243t7jLILxP_nIYXTMv6Yr"
            }
            ,
            {
                "id": "702",
                "nombre": "Thunderstruck",
                "genero": "rock",
                "autor": "ACDC",
                "enlace": "https://docs.google.com/uc?export=download&id=1aMnb8mMwqsEjki2Iaky8G-8OZSmPNKc-"
            }
            ,
            {
                "id": "703",
                "nombre": "Basket case",
                "genero": "rock",
                "autor": "Green Day",
                "enlace": "https://docs.google.com/uc?export=download&id=1IoeOHjrFOoiopmxvTkGXgJJ-NnJX5QVS"
            },

            {
                "id": "704",
                "nombre": "Sweet Child O Mine",
                "genero": "rock",
                "autor": "Guns N Roses",
                "enlace": "https://docs.google.com/uc?export=download&id=1IWY3zVvXRJkjto_w3NY4xLQnimpW2tKL"
            },

            {
                "id": "705",
                "nombre": "Back in Black",
                "genero": "rock",
                "autor": "ACDC",
                "enlace": "https://docs.google.com/uc?export=download&id=1r0a6l9vn_Hl59no_KhjygiDGTVqRX4Jx"
            }
            ,
            {
                "id": "706",
                "nombre": "High way to the hell",
                "genero": "rock",
                "autor": "ACDC",
                "enlace": "https://docs.google.com/uc?export=download&id=1P152zY0u2Ng-UIHNCscR7DOqXdssqPLS"
            },

            {
                "id": "707",
                "nombre": "Shoot to Thrill",
                "genero": "rock",
                "autor": "ACDC",
                "enlace": "https://docs.google.com/uc?export=download&id=1DYyWs2ci0C-UkvSGrVWCxNgpk7wiNUyU"
            },

            {
                "id": "708",
                "nombre": "hells bells",
                "genero": "rock",
                "autor": "ACDC",
                "enlace": "https://docs.google.com/uc?export=download&id=1TwDBJNkpF2SrhX9J_MJkNxL6GzN1DAko"
            },

            {
                "id": "709",
                "nombre": "Bohemian rhapsody",
                "genero": "rock",
                "autor": "Queen",
                "enlace": "https://docs.google.com/uc?export=download&id=1TwDBJNkpF2SrhX9J_MJkNxL6GzN1DAko"
            }
            ,
            {
                "id": "710",
                "nombre": "Paradise city",
                "genero": "rock",
                "autor": "Guns N Roses",
                "enlace": "https://docs.google.com/uc?export=download&id=1tpYSQ_Y-hGhg_YZIaMcALa_8o-cxT5aA"
            },

            {
                "id": "711",
                "nombre": "Welcome to the jungle",
                "genero": "rock",
                "autor": "Guns N Roses",
                "enlace": "https://docs.google.com/uc?export=download&id=1ZrjAmtKfFNebqad0JzJKYr48CmLRq1N3"
            }
            ,
            {
                "id": "712",
                "nombre": "Extranged",
                "genero": "rock",
                "autor": "Guns N Roses",
                "enlace": "https://docs.google.com/uc?export=download&id=1Stha_paYlOvK7YK0bMauwbs1XGGZrWBi"
            },

            {
                "id": "801",
                "nombre": "California Love",
                "genero": "rap",
                "autor": "2Pac",
                "enlace": "https://docs.google.com/uc?export=download&id=1K0jwkbYo6FPiUpshsRIY261677hCPaiL"
            }
            ,
            {
                "id": "802",
                "nombre": "Ganstas Paradise",
                "genero": "rap",
                "autor": "Coolio",
                "enlace": "https://docs.google.com/uc?export=download&id=1r_MSH76UcjkKYPRICAnTUU4q8A3uJKsT"
            }
            ,
            {
                "id": "803",
                "nombre": "Dragon Ball Rap",
                "genero": "rap",
                "autor": "Porta",
                "enlace": "https://docs.google.com/uc?export=download&id=1j79mnKxPVNYIGZGGu1SLRk5CLeT5c-HI"
            },

            {
                "id": "804",
                "nombre": "Without Me",
                "genero": "rap",
                "autor": "Eminen",
                "enlace": "https://docs.google.com/uc?export=download&id=15Adjr3ZU4NIokRCB0_-dBMV5PQgCXZf7"
            }
            ,
            {
                "id": "805",
                "nombre": "Not afraid",
                "genero": "rap",
                "autor": "Eminem",
                "enlace": "https://docs.google.com/uc?export=download&id=1akaWXE1rQGHCF-TnRP2KDfuvSIY491xJ"
            }
            ,
            {
                "id": "806",
                "nombre": "Lose yourself",
                "genero": "rap",
                "autor": "Eminem",
                "enlace": "https://docs.google.com/uc?export=download&id=1fG0s3cOf_LzzgLk4qrQn7wr-hKzT1YCp"
            }
            ,
            {
                "id": "807",
                "nombre": "My mom",
                "genero": "rap",
                "autor": "Eminem",
                "enlace": "https://docs.google.com/uc?export=download&id=1PzOiq_Mo6kJD244Y_7lXN9qmv3klfE42"
            },

            {
                "id": "808",
                "nombre": "The Real Slim Shady",
                "genero": "rap",
                "autor": "Eminem",
                "enlace": "https://docs.google.com/uc?export=download&id=1aE6aBUJVkISmytGdrixeNEycBgPN3vnb"
            }
            ,
            {
                "id": "809",
                "nombre": "Jeremias 175 muerte",
                "genero": "rap",
                "autor": "Canserbero",
                "enlace": "https://docs.google.com/uc?export=download&id=1NbpHjJ1ZSpJzGeFEdpD3Mm0irV4UkyT5"
            }
            ,
            {
                "id": "810",
                "nombre": "Maquiavelico",
                "genero": "rap",
                "autor": "Canserbero",
                "enlace": "https://docs.google.com/uc?export=download&id=1VEPjNjBeSxa8j1BFOqYUuz_zrI19Gizn"
            }
            ,
            {
                "id": "811",
                "nombre": "El primer trago",
                "genero": "rap",
                "autor": "Canserbero",
                "enlace": "https://docs.google.com/uc?export=download&id=1_wPGc8mrzvZXwvtXmCxy8aFw8mj5SrfI"
            },
            {
                "id": "812",
                "nombre": "Pensando en ti",
                "genero": "rap",
                "autor": "Canserbero",
                "enlace": "https://docs.google.com/uc?export=download&id=1FXuI4277VrI6IoA4KVaDThBnAO1mP5UN"
            }]
    }
