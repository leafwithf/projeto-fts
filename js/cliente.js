function toggleChat() {
    const chatWindow = document.getElementById("chat-window");
    chatWindow.classList.toggle("open");
}

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatContent = document.getElementById("chat-content");

    if (userInput.value.trim() !== "") {
        // Adicionar mensagem do usuário
        const userMessage = document.createElement("div");
        userMessage.classList.add("user-message");
        userMessage.innerText = userInput.value;
        chatContent.appendChild(userMessage);

        // Gerar resposta do bot
        const botMessage = document.createElement("div");
        botMessage.classList.add("bot-message");
        const response = getBotResponse(userInput.value);
        botMessage.innerText = response;
        chatContent.appendChild(botMessage);

        // Limpar entrada do usuário
        userInput.value = "";
        chatContent.scrollTop = chatContent.scrollHeight; // Rolar para o final
    }
}

// Objeto com frases para diferentes interações
const frases = {
    saudacao: {
        casual: "Ei, tudo bem? Sou o Falco, assistente virtual da MIA.",
        amigavel: "Oi! Sou o Falco, seu assistente aqui.",
        descontraida: "E aí? Sou o Falco, assistente da MIA.",
    },
    introducao: {
        bate_papo: "Bem-vindo à MIA! Aqui, a segurança inteligente está sempre ao seu alcance. Como posso te ajudar?",
        leve: "A MIA oferece soluções práticas para segurança. O que você precisa ajustar ou verificar?",
        historia: "A MIA foi criada para revolucionar a segurança com tecnologia de ponta. Estamos aqui para proteger o que importa.",
        fundadores: "Fundada por especialistas em tecnologia e segurança, a MIA busca sempre as melhores soluções para nossos clientes.",
        missão: "Garantir a melhor proteção através de tecnologia avançada. Estamos focados em sua segurança.",
    },
    transicao: {
        direcionamento: "Me conte mais sobre o que você precisa. Podemos ajustar as configurações ou verificar algo específico.",
        aberta: "Se precisar de algo, é só me avisar. O que você gostaria de ajustar ou verificar?",
        amigavel: "Fique à vontade! Vamos encontrar a melhor solução para você.",
        nova_opcao: "Posso te ajudar a configurar alertas de segurança. O que acha?",
    },
    perguntas: {
        segurança_residencial: "Está pensando em melhorar a segurança da sua casa? Podemos ajustar câmeras, sensores ou alarmes.",
        segurança_comercial: "Precisa de segurança para o seu negócio? Temos câmeras e controle de acesso. Posso ajudar com algo específico?",
        instalação: "Tem dúvidas sobre instalação? Nosso time cuida de tudo. Posso te ajudar com mais informações?",
        personalização: "A MIA cria soluções sob medida para você. O que precisa ajustar?",
        monitoramento: "Nosso sistema garante monitoramento constante. Posso te ajudar com alguma configuração ou ajuste?",
        câmeras: "Temos câmeras 24h em tempo real. Precisa de ajuda com alguma configuração delas?",
        sensores: "Nossos sensores monitoram diversos aspectos do ambiente. Alguma configuração que precise ser ajustada?",
        sensores_inteligentes: "Sensores inteligentes ajustam-se automaticamente ao ambiente. Quer ajustar algum parâmetro?",
        monitoramento_completo: "Nosso monitoramento é completo, com câmeras, sensores e alarmes integrados. Precisa de algum ajuste?",
        notificações: "Você pode configurar notificações para eventos importantes. Quer ajuda para ajustar isso?",
        segurança_completa: "Câmeras, sensores e alarmes trabalham juntos para sua segurança. Quer ajustar alguma configuração?",
        controle_acesso: "Temos controle de acesso para áreas restritas. Precisa de ajuda para configurar?",
        histórico_gráficos: "Você pode ver o histórico dos seus sensores. Alguma configuração a ser feita?",
        integração_sistemas: "Câmeras, sensores e alarmes integrados. Precisa de ajuda com a configuração de algum sistema?",
    },
    oferta_ajuda: {
        geral: "Estou aqui para ajudar com qualquer dúvida. Como posso ajudar você agora?",
        simpatica: "Qualquer coisa que você precise, me avise. Estou aqui para te ajudar!",
        mais_detalhes: "Temos câmeras de alta definição e sensores para monitoramento completo. Posso ajudar com algum ajuste?",
        visão_geral: "Se precisar de ajuda com qualquer outra configuração, é só me falar. O que posso fazer por você?",
        dados_sensores: "Está tudo monitorado, qualquer ajuste que precisar, estou à disposição!",
        configuração_sensores: "Se precisar configurar algo, posso te ajudar com isso. O que precisa ajustar?",
    },
    suporte: {
        amigavel: "Está com problemas? Me conta o que está acontecendo e resolvo pra você.",
        simples: "Qual o problema? Me fala e já te ajudo.",
        técnico: "Se há algum problema com o sistema, vou verificar a instalação e configuração. Qual o problema específico?",
        sensores_falhando: "Se o sensor não está funcionando, vamos verificar a instalação. Qual sensor?",
        câmeras_falhando: "As câmeras não estão captando? Vamos ajustar as configurações.",
        perda_conexão: "Perdeu conexão? Vamos verificar a instalação e as configurações.",
    },
    contato: {
        leve: "Se preferir, temos outros canais como WhatsApp. Quer tentar?",
        amigavel: "Se quiser falar com nossa equipe, posso passar o WhatsApp ou telefone. Me avise!",
        técnico: "Se precisar de ajuda técnica, posso passar o contato da nossa equipe. Como posso ajudar?",
    },
    orçamento: {
        descontraido: "Quer um orçamento? Me fala o que você precisa proteger, e calculo isso pra você!",
        leve: "Vamos montar um orçamento personalizado. Me conta o que você precisa.",
        técnico: "Preciso saber quais câmeras e sensores deseja para calcular o orçamento. Quer ajuda para escolher?",
    },
    despedida: {
        casual: "Foi um prazer ajudar! Se precisar de algo, me chama. Até mais!",
        amigavel: "Se surgir mais alguma dúvida, é só me chamar. Estarei por aqui!",
        técnico: "Se precisar de mais suporte técnico, é só me avisar. A equipe está sempre pronta para ajudar.",
    },
};

// Função para obter resposta do bot
function getBotResponse(userInput) {
    // Dicionário de palavras-chave com as respostas associadas
    const keywordResponses = {
        "segurança": frases.perguntas.segurança_residencial,
        "problema": frases.suporte.amigavel,
        "monitoramento": frases.perguntas.monitoramento,
        "câmeras": frases.perguntas.câmeras,
        "sensores": frases.perguntas.sensores,
        "instalação": frases.perguntas.instalação,
        "personalização": frases.perguntas.personalização,
        "gráficos": frases.oferta_ajuda.mais_detalhes,
        "sensores inteligentes": frases.perguntas.sensores_inteligentes,
        "monitoramento completo": frases.perguntas.monitoramento_completo,
        "notificações": frases.perguntas.notificações,
        "segurança completa": frases.perguntas.segurança_completa,
        "controle de acesso": frases.perguntas.controle_acesso,
        "histórico gráfico": frases.perguntas.histórico_gráficos,
        "integração sistema": frases.perguntas.integração_sistemas,
    };

    // Identificar o tom da mensagem (amigável ou sério)
    const isFriendly = ["oi", "olá", "e aí", "oi tudo bem", "olá tudo bem"].some(keyword => userInput.toLowerCase().includes(keyword));
    const isSerious = ["segurança", "problema", "serviços", "ajuda", "contato"].some(keyword => userInput.toLowerCase().includes(keyword));

    let response = "";

    // Determinar a saudação com base no tom da mensagem
    if (isFriendly) {
        response = frases.saudacao.amigavel;
    } else if (isSerious) {
        response = frases.saudacao.casual;
    } else {
        response = frases.saudacao.descontraida;
    }

    // Buscar resposta baseada nas palavras-chave
    for (let keyword in keywordResponses) {
        if (userInput.toLowerCase().includes(keyword)) {
            response += "\n" + keywordResponses[keyword];
            break;  // Caso a resposta seja encontrada, não precisa continuar verificando as outras palavras-chave
        }
    }

    // Caso não tenha encontrado nenhuma palavra-chave, oferece uma resposta geral
    if (!response.includes("segurança") && !response.includes("problema") && !response.includes("monitoramento")) {
        response += "\n" + frases.oferta_ajuda.geral;
    }

    return response;
}



// Função para alternar o status da câmera e a cor dos sensores
function toggleCameraStatus() {
    const cameraStatusText = document.querySelector('.online-text'); // Status da câmera principal
    const sireneImage = document.querySelector('.camera-status img'); // Imagem da sirene principal
    const sensorPoints = document.querySelectorAll('.sensor-point'); // Seleciona os pontos dos sensores
    const cameraPoints = document.querySelectorAll('.camera-point'); // Seleciona os pontos das cameras

    // Gera um valor aleatório para decidir se a câmera está ONLINE ou OFFLINE
    const isOnline = Math.random() < 0.5; // 50% de chance de ser online

    // Define o status da câmera e cor dos sensores com base no valor aleatório
    if (isOnline) {
        updateCameraAndSensorStatus("ONLINE", "#00A651", "VideosFts/sirene.png", sensorPoints, "sensor-online", "sensor-offline", cameraPoints, "camera-online", "camera-offline");
    } else {
        updateCameraAndSensorStatus("OFFLINE", "#CC0733", "VideosFts/sirene3.png", sensorPoints, "sensor-offline", "sensor-online", cameraPoints, "camera-offline", "camera-online");
    }
}

// Função auxiliar para atualizar o status da câmera e sensores
function updateCameraAndSensorStatus(status, color, imageSrc, sensors, sensorAddClass, sensorRemoveClass, cameras, cameraAddClass, cameraRemoveClass) {
    const cameraStatusText = document.querySelector('.online-text'); 
    const sireneImage = document.querySelector('.camera-status img'); 

    cameraStatusText.innerText = status;
    cameraStatusText.style.color = color;
    sireneImage.src = imageSrc;

    sensors.forEach(sensor => {
        sensor.classList.add(sensorAddClass);
        sensor.classList.remove(sensorRemoveClass);
    });

    cameras.forEach(camera => {
        camera.classList.add(cameraAddClass);
        camera.classList.remove(cameraRemoveClass);
    });
}

// Executa a função ao carregar a página
window.onload = function() {
    toggleCameraStatus(); // Chama a função para definir o status inicial
};

// Função auxiliar para atualizar o status da câmera e sensores
function updateCameraAndSensorStatus(status, color, imageSrc, sensors, sensorAddClass, sensorRemoveClass, cameras, cameraAddClass, cameraRemoveClass) {
    const cameraStatusText = document.querySelector('.online-text'); 
    const sireneImage = document.querySelector('.camera-status img'); 

    cameraStatusText.innerText = status;
    cameraStatusText.style.color = color;
    sireneImage.src = imageSrc;

    sensors.forEach(sensor => {
        sensor.classList.add(sensorAddClass);
        sensor.classList.remove(sensorRemoveClass);
    });

    cameras.forEach(camera => {
        camera.classList.add(cameraAddClass);
        camera.classList.remove(cameraRemoveClass);
    });
}


// Simulação de dados dos sensores
function getRandomData(min, max) {
    return Math.random() * (max - min) + min;
}

function updateSensorData() {
    document.getElementById('temperature').textContent  = getRandomData(20, 30).toFixed(1) + '°C';
    document.getElementById('humidity').textContent     = getRandomData(30, 70).toFixed(1) + '%';
    document.getElementById('airQuality').textContent   = Math.floor(getRandomData(0, 500));
    document.getElementById('noiseLevel').textContent   = Math.floor(getRandomData(30, 90)) + ' dB';
}

// Atualiza os dados a cada 5 segundos
setInterval(updateSensorData, 5000);
updateSensorData(); // Chamada inicial

// Configuração dos gráficos
const charts = ['temperature', 'humidity', 'airQuality', 'noiseLevel'];
const chartData = {};
const chartConfigs = {
    temperature: { label: 'Temperatura (°C)', min: 0, max: 40, color: '#FF5733' },  // Vermelho
    humidity: { label: 'Umidade (%)', min: 0, max: 100, color: '#33B5FF' },        // Azul
    airQuality: { label: 'Qualidade do Ar (AQI)', min: 0, max: 500, color: '#FFB533' }, // Amarelo
    noiseLevel: { label: 'Nível de Ruído (dB)', min: 0, max: 120, color: '#4CAF50' }  // Verde
};

charts.forEach(sensorType => {
    const ctx = document.getElementById(sensorType + 'Chart').getContext('2d');
    chartData[sensorType] = {
        labels: [],
        datasets: [{
            label: chartConfigs[sensorType].label,
            data: [],
            borderColor: chartConfigs[sensorType].color,
            backgroundColor: chartConfigs[sensorType].color + '33', // Cor de fundo transparente
            fill: true,
            tension: 0.1
        }]
    };
    new Chart(ctx, {
        type: 'line',
        data: chartData[sensorType],
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    min: chartConfigs[sensorType].min,
                    max: chartConfigs[sensorType].max
                }
            },
            animation: {
                duration: 1000, // Suaviza a animação, durando 1 segundo
                easing: 'easeInOutQuad' // Tipo de transição suave
            },
            responsive: true
        }
    });
});

function updateCharts() {
    const now = new Date();
    const timeString = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    
    charts.forEach(sensorType => {
        const value = parseFloat(document.getElementById(sensorType).textContent);
        chartData[sensorType].labels.push(timeString);
        chartData[sensorType].datasets[0].data.push(value);
        
        if (chartData[sensorType].labels.length > 10) {
            chartData[sensorType].labels.shift();
            chartData[sensorType].datasets[0].data.shift();
        }
        
        // Atualiza o gráfico com animação suave
        Chart.getChart(sensorType + 'Chart').update();
    });
}

// Atualiza os gráficos a cada 5 segundos
setInterval(updateCharts, 5000);



// Função para exibir o vídeo selecionado
function showVideo(videoSrc) {
    const videoElement = document.getElementById('carousel-video');
    videoElement.src = videoSrc;
    videoElement.play();
}