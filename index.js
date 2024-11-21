function calcular() {
    var a = document.querySelector('.resultado-container');
    const valorInput = document.getElementById("valor");
    const resultadoDiv1 = document.getElementById("resultado1");
    const resultadoDiv2 = document.getElementById("resultado2");
    const resultadoDiv3 = document.getElementById("resultado3");
    const porcentagem = parseFloat(document.getElementById("porcentagem").value);
    const frete = parseFloat(document.getElementById("frete").value);
    const valor = parseFloat(valorInput.value);


    if (isNaN(valor)) {
        resultadoDiv1.innerText = "";
        resultadoDiv2.innerText = "";
        resultadoDiv3.innerText = "";
    } else {
     
        a.style.display = 'block';
        a.style.backgroundColor = "#333333";
        const resultado1 = (valor / 20 + frete) * (porcentagem / 100 + 1);
        const resultado2 = (valor / 20 + frete) * 1.02 * (porcentagem / 100 + 1);
        const resultado3 = (valor / 20 + frete) * 1.02 * 1.02 * (porcentagem / 100 + 1);
        resultadoDiv1.innerText = `A vista: R$ ${resultado1.toFixed(4)}`;
        resultadoDiv2.innerText = `30 dias: R$ ${resultado2.toFixed(4)}`;
        resultadoDiv3.innerText = `60 dias: R$ ${resultado3.toFixed(4)}`;
    }
}


const apiKey = '3f2468ea53603a6a5e6b5c1b237cd6fc'; // Sua chave válida

function getWeather(latitude, longitude) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br&appid=${apiKey}`;
    console.log("URL da API:", url);

    fetch(url)
        .then(response => {
            console.log("Resposta da API:", response);
            if (!response.ok) {
                throw new Error(`Erro na API: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Dados da API:", data);
            document.getElementById('location').textContent = `Localização: ${data.name}`;
            document.getElementById('weather').textContent = `Clima: ${data.weather[0].description}`;
            document.getElementById('temperature').textContent = `Temperatura: ${data.main.temp}°C`;
        })
        .catch(error => {
            console.error('Erro ao obter o clima:', error);
            document.getElementById('weather').textContent = 'Não foi possível obter o clima.';
        });
}

function getLocation() {
    if (navigator.geolocation) {
        console.log("Tentando obter localização...");
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            console.log("Localização obtida:", latitude, longitude);
            getWeather(latitude, longitude);
        }, error => {
            console.error('Erro ao obter localização:', error);
            document.getElementById('location').textContent = 'Não foi possível obter a localização.';
        });
    } else {
        document.getElementById('location').textContent = 'Geolocalização não é suportada pelo navegador.';
    }
}

document.addEventListener('DOMContentLoaded', getLocation);


function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    clockElement.textContent = now.toLocaleDateString('pt-BR', options);
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Exibe a hora imediatamente ao carregar a página
updateClock();

