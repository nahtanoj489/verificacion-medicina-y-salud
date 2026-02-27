const OWNER = "nahtanoj489";
const REPO = "verificacion-medicina-y-salud";
const FILE = "db.json";
const BRANCH = "main";


const TOKEN = "PEGAR_AQUI_TU_TOKEN";


async function getDB(){

const response = await fetch(
`https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE}?ref=${BRANCH}`
);

const data = await response.json();

const content = atob(data.content);

return {

sha:data.sha,
data:JSON.parse(content)

};

}



async function guardarCertificado(cert){

const db = await getDB();

db.data.push(cert);

const newContent = btoa(
JSON.stringify(db.data,null,2)
);

await fetch(
`https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE}`,
{
method:"PUT",

headers:{
Authorization:`Bearer ${TOKEN}`,
"Content-Type":"application/json"
},

body:JSON.stringify({

message:"Nuevo certificado",

content:newContent,

sha:db.sha,

branch:BRANCH

})
});

}



async function verificarCertificado(code){

const db = await getDB();

return db.data.filter(c=>c.code===code);

}
