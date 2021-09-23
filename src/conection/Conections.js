import {db} from "../Firebase";
import {useEffect, useState} from "react";

export const getName=(value)=>{
    return "Hola "+value;
}
export const getMusics = async (nomArtista)=> {
    console.log('actualizar busqueda');
    const musicastemporales = [];
        await db.ref(`musicas/`).on("value", (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                    const childId = childSnapshot.key;
                    const data = childSnapshot.val();
                    const NOMBRE = data.nombre;
                    const GENERO = data.genero;
                    const AUTOR = data.autor;
                    //console.log(NOMBRE,GENERO,AUTOR);
                if (NOMBRE.toLowerCase().includes(nomArtista.toLowerCase()) === true ||
                    GENERO.toLowerCase().includes(nomArtista.toLowerCase()) === true ||
                    AUTOR.toLowerCase().includes(nomArtista.toLowerCase()) === true) {
                    musicastemporales.push(data);
                    console.log();
                }
                }
            );
             console.log("cancinones desde conexion",musicastemporales);
        });
    return musicastemporales;
}