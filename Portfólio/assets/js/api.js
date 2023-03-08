/*
Essa função assíncrona tem como objetivo fazer uma requisição
para uma API que contém informações sobre o meu perfil e retornar
os dados no formato JSON.
*/

async function fetchProfileData() {
    // Define a URL da API que será consumida
    const url = 'https://raw.githubusercontent.com/LucasMatheusDaCruz/images/main/Images/data/profile.json';
    
    // Faz uma requisição GET utilizando a função fetch e armazena a resposta em uma variável
    const response = await fetch(url);
    
    // Extrai os dados no formato JSON da resposta da API utilizando o método json() e armazena em uma variável
    const profileData = await response.json();
    
    // Retorna os dados do perfil
    return profileData;
    }