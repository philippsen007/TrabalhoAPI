//Função ativada ao clicar no botão de pesquisa.
function searchTeam() {
    // URL base para solicitar informações.
    const baseUrl = "https://v3.football.api-sports.io/teams?name=";
    
    // Limpar os resultados anteriores.
    document.getElementsByClassName("generaldisplay").innerHTML = "";

    // Receber o que foi digitado na barra de pesquisa em formato de variável.
    const searchTerm = document.getElementById("searchInput").value;

    // Construir a URL da API com o termo de pesquisa.
    const apiUrl = `${baseUrl}${searchTerm}`;

    // Configurar a requisição com a chave de API e outros cabeçalhos necessários.
    const options = {
        // Cabeçalho com informações sobre a API
        headers: {
            // Host responsável pelas requisições.
            'Host': 'v3.football.api-sports.io',
            // Chave da API.
            'X-APISports-key': 'ee91caadb87daddf67ade15f0adef0d1',
        }
    };

    // Fazer a solicitação à API usando fetch
    fetch(apiUrl, options)
        // Indicar o tipo de resultado que será obtido.
        .then(response => response.json())
        // Função para processar os dados e exibir os resultados ao usuário.
        .then(Team => {
            // Container de conteúdo que adiciona a foto do escudo do clube selecionado ao ID "logo".
            const logoContainer = document.getElementById("logo");
            // Container de conteúdo que adiciona a foto do estádio do clube selecionado ao ID "venueimg".
            const venueimgContainer = document.getElementById("venueimg");

            // Váriavel responsaver por adquirir e repassar as informações sobre o país do time escolhido.
            var country
            country = document.getElementById("country")
            country.textContent = `País: ${Team.response[0].team.country} `;

            // Váriavel responsaver por adquirir e repassar as informações sobre a sigla do time escolhido.
            var code
            code = document.getElementById("code")
            code.textContent = `Sigla: ${Team.response[0].team.code} `;

            // Váriavel responsaver por adquirir e repassar as informações sobre o ano de fundação do time escolhido.
            var founded
            founded = document.getElementById("founded")
            founded.textContent = `Ano de fundação: ${Team.response[0].team.founded} `;
            
            // Váriavel responsaver por adquirir e repassar as informações sobre o nome do time escolhido.
            var name
            name = document.getElementById("name")
            name.textContent = `Nome: ${Team.response[0].team.name} `;

            // Váriavel responsaver por adquirir e repassar as informações sobre o nome do estádio do time escolhido.
            var venuename
            venuename = document.getElementById("venuename")
            venuename.textContent = `Estádio: ${Team.response[0].venue.name} `;

            // Váriavel responsaver por adquirir e repassar as informações sobre a localização do estádio do time escolhido.
            var address
            address = document.getElementById("address")
            address.textContent = `Localização: ${Team.response[0].venue.address} `;

            // Váriavel responsaver por adquirir e repassar as informações sobre a cidade na qual está localizado o estádio do time escolhido.
            var city
            city = document.getElementById("city")
            city.textContent = `Cidade: ${Team.response[0].venue.city} `;

            // Váriavel responsaver por adquirir e repassar as informações sobre a capacidade do estádio do time escolhido.
            var capacity
            capacity = document.getElementById("capacity")
            capacity.textContent = `Capacidade: ${Team.response[0].venue.capacity} `;

            // Introdução de itens ao HTML.
            logoContainer.innerHTML =
                // Logo do clube.
                `
                     <img src="${Team.response[0].team.logo}">
                 `;
            venueimgContainer.innerHTML =
                // Imagem do estádio.
                 `
                    <img src="${Team.response[0].venue.image}">
                `;
        })
    }