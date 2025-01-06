document.addEventListener('DOMContentLoaded', function () {
    // Estados com SP em primeiro lugar
    const estados = ["SP", "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SE", "TO"];

    // Cidades ajustadas com São José do Rio Preto em primeiro lugar para SP
    const cidades = {
        "SP": ["São José do Rio Preto", "São Paulo", "Campinas", "Santos", "Ribeirão Preto", "Sorocaba", "São Bernardo do Campo", "Osasco", "Guarulhos", "Jundiaí", "Piracicaba"],
        "AC": ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá"],
        "AL": ["Maceió", "Arapiraca", "Rio Largo", "Palmeira dos Índios"],
        "AP": ["Macapá", "Santana", "Laranjal do Jari"],
        "AM": ["Manaus", "Parintins", "Itacoatiara"],
        "BA": ["Salvador", "Feira de Santana", "Vitória da Conquista"],
        "CE": ["Fortaleza", "Caucaia", "Juazeiro do Norte"],
        "DF": ["Brasília", "Taguatinga", "Ceilândia"],
        "ES": ["Vitória", "Vila Velha", "Serra"],
        "GO": ["Goiânia", "Aparecida de Goiânia", "Anápolis"],
        "MA": ["São Luís", "Imperatriz", "Timon"],
        "MT": ["Cuiabá", "Várzea Grande", "Rondonópolis"],
        "MS": ["Campo Grande", "Dourados", "Três Lagoas"],
        "MG": ["Belo Horizonte", "Uberlândia", "Contagem"],
        "PA": ["Belém", "Ananindeua", "Santarém"],
        "PB": ["João Pessoa", "Campina Grande", "Santa Rita"],
        "PR": ["Curitiba", "Londrina", "Maringá"],
        "PE": ["Recife", "Jaboatão dos Guararapes", "Olinda"],
        "PI": ["Teresina", "Parnaíba", "Picos"],
        "RJ": ["Rio de Janeiro", "Niterói", "Petrópolis"],
        "RN": ["Natal", "Mossoró", "Parnamirim"],
        "RS": ["Porto Alegre", "Caxias do Sul", "Pelotas"],
        "RO": ["Porto Velho", "Ji-Paraná", "Ariquemes"],
        "RR": ["Boa Vista", "Rorainópolis", "Caracaraí"],
        "SC": ["Florianópolis", "Joinville", "Blumenau"],
        "SE": ["Aracaju", "Nossa Senhora do Socorro", "Lagarto"],
        "TO": ["Palmas", "Araguaína", "Gurupi"]
    };

    const estadoSelect = document.getElementById('estado');
    const cidadeSelect = document.getElementById('cidades');

    // Preenche as opções do select de estados
    estados.forEach(estado => {
        const option = document.createElement('option');
        option.value = estado;
        option.textContent = estado;
        estadoSelect.appendChild(option);
    });

    // Atualiza as opções do select de cidades com base no estado selecionado
    estadoSelect.addEventListener('change', function () {
        const selectedEstado = estadoSelect.value;
        const cidadesDoEstado = cidades[selectedEstado] || [];

        // Limpa as opções anteriores
        cidadeSelect.innerHTML = '';

        // Adiciona novas opções de cidades
        cidadesDoEstado.forEach(cidade => {
            const option = document.createElement('option');
            option.value = cidade;
            option.textContent = cidade;
            cidadeSelect.appendChild(option);
        });
    });

    // Garante que o select de cidades esteja atualizado ao carregar a página
    estadoSelect.dispatchEvent(new Event('change'));
});
document.getElementById('problemaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Exibe a mensagem flutuante
    const floatingMessage = document.getElementById('floatingMessage');
    floatingMessage.style.display = 'block';

    // Esconde a mensagem flutuante após 10 segundos
    setTimeout(function() {
        floatingMessage.style.display = 'none';
    }, 15000); 
});
