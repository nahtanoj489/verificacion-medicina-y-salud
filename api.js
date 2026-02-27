const DB_URL =
"https://raw.githubusercontent.com/nahtanoj489/verificacion-medicina-y-salud/main/db.json";


async function verificarCertificado(code){

const response = await fetch(DB_URL);

const data = await response.json();

return data.filter(cert => cert.code === code);

}
