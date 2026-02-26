const API_URL = "https://sheetdb.io/api/v1/bex292dwd3pa4";


async function guardarCertificado(cert){

    try{

        const response = await fetch(API_URL,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                data:[cert]
            })

        });

        const result = await response.json();

        console.log("Guardado correctamente:", result);

    }catch(error){

        console.error("Error al guardar:", error);

    }

}



async function verificarCertificado(code){

    try{

        const response = await fetch(
            API_URL + "/search?code=" + encodeURIComponent(code)
        );

        const result = await response.json();

        console.log("Resultado verificación:", result);

        return result;

    }catch(error){

        console.error("Error verificación:", error);

        return [];

    }

}
