const API_URL = "https://sheetdb.io/api/v1/bex292dwd3pa4";

async function guardarCertificado(cert) {

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      data: cert
    })
  });

  return await response.json();
}


async function verificarCertificado(code) {

  const response = await fetch(
    API_URL + "/search?code=" + encodeURIComponent(code)
  );

  return await response.json();
}
