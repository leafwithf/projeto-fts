const estados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
const cidades = {
        "AC": ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá", "Feijó", "Brasiléia", "Xapuri", "Senador Guiomard", "Plácido de Castro", "Manoel Urbano", "Acrelândia", "Capixaba", "Assis Brasil", "Porto Acre", "Epitaciolândia", "Bujari", "Santa Rosa do Purus", "Rodrigues Alves", "Mâncio Lima", "Jordão", "Porto Walter", "Marechal Thaumaturgo", "Mâncio Lima", "Feijó", "Manoel Urbano", "Jordão", "Santa Rosa do Purus", "Porto Acre"],
        "AL": ["Maceió", "Arapiraca", "Rio Largo", "Palmeira dos Índios", "União dos Palmares", "Penedo", "Campo Alegre", "Delmiro Gouveia", "Coruripe", "São Miguel dos Campos", "Santana do Ipanema", "Marechal Deodoro", "Atalaia", "Teotônio Vilela", "São Sebastião", "Igaci", "São Luís do Quitunde", "Girau do Ponciano", "Murici", "Joaquim Gomes", "Piranhas", "Olho d'Água das Flores", "Cajueiro", "Colônia Leopoldina", "Major Isidoro", "São José da Tapera", "Traipu", "Cacimbinhas", "Maribondo", "Boca da Mata", "Ibateguara"],
        "AP": ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque", "Porto Grande", "Mazagão", "Pedra Branca do Amapari", "Ferreira Gomes", "Calçoene", "Amapá", "Itaubal", "Serra do Navio", "Tartarugalzinho", "Cutias", "Pracuúba", "Vitória do Jari", "Laranjal do Jari", "Mazagão Velho", "Serra do Navio", "Santana", "Calçoene", "Ferreira Gomes", "Cutias do Araguari", "Pedra Branca do Amapari", "Porto Grande", "Serra do Navio", "Vitória do Jari"],
        "AM": ["Manaus", "Parintins", "Itacoatiara", "Manacapuru", "Coari", "Tabatinga", "Maués", "Tefé", "Humaitá", "Eirunepé", "Benjamin Constant", "São Gabriel da Cachoeira", "Borba", "Autazes", "Careiro", "Novo Aripuanã", "Presidente Figueiredo", "Iranduba", "Lábrea", "Manicoré", "Careiro da Várzea", "Manaquiri", "Nova Olinda do Norte", "Boca do Acre", "Urucará", "Fonte Boa", "Rio Preto da Eva", "Tonantins", "Jutaí", "Itapiranga", "Alvarães", "Silves"],
        "BA": ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna", "Juazeiro", "Ilhéus", "Lauro de Freitas", "Jequié", "Teixeira de Freitas", "Barreiras", "Porto Seguro", "Simões Filho", "Paulo Afonso", "Eunápolis", "Santo Antônio de Jesus", "Alagoinhas", "Valença", "Candeias", "Senhor do Bonfim", "Dias d'Ávila", "Candeias", "Guanambi", "Jacobina", "Serrinha", "Santo Amaro", "Irecê", "Itamaraju", "Brumado", "Cruz das Almas", "Campo Formoso", "Bom Jesus da Lapa"],
        "CE": ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú", "Sobral", "Crato", "Itapipoca", "Maranguape", "Iguatu", "Quixadá", "Canindé", "Pacatuba", "Aquiraz", "Russas", "Tianguá", "Aracati", "Icó", "Camocim", "Horizonte", "Morada Nova", "Pacajus", "Acaraú", "Crateús", "Itarema", "Quixeramobim", "Baturité", "Tabuleiro do Norte", "Viçosa do Ceará", "Cedro", "Tauá", "Boa Viagem", "São Gonçalo do Amarante"],
        "DF": ["Brasília", "Ceilândia", "Taguatinga", "Samambaia", "Planaltina", "Sobradinho", "Gama", "Santa Maria", "Recanto das Emas", "São Sebastião", "Brazlândia", "Paranoá", "Núcleo Bandeirante", "Riacho Fundo", "Lago Sul", "Lago Norte", "Park Way", "Sudoeste", "Cruzeiro", "Octogonal", "Varjão", "Jardim Botânico", "Itapoã", "Vicente Pires", "Fercal", "Arniqueiras", "SCIA", "Riacho Fundo II", "Sobradinho II", "Samambaia Sul", "Samambaia Norte"],
        "ES": ["Vitória", "Vila Velha", "Serra", "Cariacica", "Linhares", "Cachoeiro de Itapemirim", "Colatina", "São Mateus", "Guarapari", "Aracruz", "Viana", "Nova Venécia", "Barra de São Francisco", "Domingos Martins", "Alegre", "Anchieta", "Santa Maria de Jetibá", "Ibiraçu", "Baixo Guandu", "Montanha", "Pedro Canário", "Pinheiros", "Venda Nova do Imigrante", "Castelo", "Bom Jesus do Norte", "Ibatiba", "Marataízes", "João Neiva", "Pancas", "Itaguaçu", "Atílio Vivácqua", "Sooretama"],
        "GO": ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Luziânia", "Águas Lindas de Goiás", "Trindade", "Formosa", "Itumbiara", "Senador Canedo", "Novo Gama", "Catalão", "Jataí", "Planaltina", "Cristalina", "Caldas Novas", "Mineiros", "Goianésia", "Inhumas", "Jaraguá", "Morrinhos", "Quirinópolis", "Cidade Ocidental", "Porangatu", "Uruaçu", "Posse", "Ipameri", "Goiatuba", "São Luís de Montes Belos", "Niquelândia", "São Miguel do Araguaia", "Itapuranga"],
        "MA": ["São Luís", "Imperatriz", "Timon", "Caxias", "Codó", "Paço do Lumiar", "Açailândia", "Bacabal", "Santa Inês", "Balsas", "Barra do Corda", "Grajaú", "Buriticupu", "Chapadinha", "Santa Luzia", "Pedreiras", "Viana", "Pinheiro", "Itapecuru Mirim", "Presidente Dutra", "Zé Doca", "Santa Helena", "Cururupu", "São José de Ribamar", "Rosário", "Coelho Neto", "Tuntum", "Vargem Grande", "Arari", "Mirinzal", "São Mateus do Maranhão", "Carolina"],  
        "MT": ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Tangará da Serra", "Cáceres", "Lucas do Rio Verde", "Sorriso", "Primavera do Leste", "Barra do Garças", "Alta Floresta", "Nova Mutum", "Pontes e Lacerda", "Guarantã do Norte", "Peixoto de Azevedo", "Colíder", "Campo Novo do Parecis", "Jaciara", "Juruena", "Poconé", "Juína", "Diamantino", "Vila Rica", "Juara", "Nobres", "Mirassol d'Oeste", "Comodoro", "Sapezal", "Santo Antônio do Leverger", "Arenápolis", "Aripuanã", "Alto Araguaia", "São José dos Quatro Marcos", "Barra do Bugres"],
        "MS": ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Ponta Porã", "Naviraí", "Aquidauana", "Nova Andradina", "Paranaíba", "Sidrolândia", "Amambai", "Maracaju", "Coxim", "Ribas do Rio Pardo", "Chapadão do Sul", "Jardim", "Bataguassu", "Caarapó", "Ivinhema", "Miranda", "São Gabriel do Oeste", "Costa Rica", "Anastácio", "Rio Verde de Mato Grosso", "Cassilândia", "São Gabriel do Oeste", "Rio Brilhante", "Nioaque", "Anaurilândia", "Aparecida do Taboado", "Mundo Novo", "Laguna Carapã", "Bela Vista", "Inocência"],
        "MG": ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim", "Montes Claros", "Ribeirão das Neves", "Uberaba", "Governador Valadares", "Ipatinga", "Sete Lagoas", "Divinópolis", "Santa Luzia", "Sabará", "Varginha", "Poços de Caldas", "Ibirité", "Patos de Minas", "Teófilo Otoni", "Araxá", "Pouso Alegre", "Barbacena", "Conselheiro Lafaiete", "Ituiutaba", "Paracatu", "Passos", "Itabira", "Pará de Minas", "Nova Lima", "Lavras", "Patrocínio", "Itajubá", "João Monlevade", "Ubá", "Curvelo"],
        "PA": ["Belém", "Ananindeua", "Santarém", "Marabá", "Castanhal", "Parauapebas", "Abaetetuba", "Cametá", "Bragança", "Altamira", "Barcarena", "Itaituba", "Breves", "Tailândia", "Tucuruí", "Moju", "Capanema", "Monte Alegre", "Redenção", "São Félix do Xingu", "Capitão Poço", "Paragominas", "Ourilândia do Norte", "Portel", "Dom Eliseu", "Marituba", "Tomé-Açu", "Ulianópolis", "Xinguara", "Novo Repartimento", "Pacajá", "Oriximiná", "Jacundá", "Uruará", "Rondon do Pará"],
        "PB": ["João Pessoa", "Campina Grande", "Santa Rita", "Patos", "Bayeux", "Sousa", "Cajazeiras", "Guarabira", "Cabedelo", "Queimadas", "São Bento", "Monteiro", "Esperança", "Mamanguape", "Alagoa Grande", "Sumé", "Itaporanga", "Pombal", "Catolé do Rocha", "Santa Luzia", "Solânea", "Conde", "Itabaiana", "Alhandra", "Areia", "Bananeiras", "Pedras de Fogo", "Piancó", "Taperoá", "Princesa Isabel", "Aroeiras", "Boqueirão", "Conceição", "Sapé"],
        "PR": ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel", "São José dos Pinhais", "Foz do Iguaçu", "Colombo", "Guarapuava", "Paranaguá", "Araucária", "Apucarana", "Pinhais", "Campo Largo", "Toledo", "Almirante Tamandaré", "Umuarama", "Cambé", "Pato Branco", "Paranavaí", "Sarandi", "Francisco Beltrão", "Palmas", "Telêmaco Borba", "Rolândia", "Cianorte", "Arapongas", "Mandaguari", "Irati", "Clevelândia", "Cornélio Procópio", "Ibiporã", "Castro", "Assis Chateaubriand", "Jacarezinho"],
        "PE": ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru", "Paulista", "Petrolina", "Cabo de Santo Agostinho", "Camaragibe", "Garanhuns", "Vitória de Santo Antão", "Igarassu", "São Lourenço da Mata", "Santa Cruz do Capibaribe", "Ipojuca", "Araripina", "Gravatá", "Surubim", "Goiana", "Ouricuri", "Timbaúba", "Pesqueira", "Belo Jardim", "Palmares", "Arcoverde", "Limoeiro", "Bezerros", "Escada", "Carpina", "Bonito", "Serra Talhada", "Afogados da Ingazeira", "Salgueiro", "São José do Egito", "Flores", "Buíque"],
        "PI": ["Teresina", "Parnaíba", "Picos", "Floriano", "Piripiri", "Campo Maior", "Barras", "Altos", "Batalha", "José de Freitas", "Esperantina", "Oeiras", "União", "Pedro II", "Elesbão Veloso", "Luís Correia", "Cocal", "Miguel Alves", "Corrente", "Bom Jesus", "Valença do Piauí", "Piracuruca", "Buriti dos Lopes", "Canto do Buriti", "Simplício Mendes", "São Raimundo Nonato", "Luzilândia", "Porto", "Castelo do Piauí", "Fronteiras", "Paulistana", "Jaicós", "Angical do Piauí", "Pio IX", "Itainópolis"],
        "RJ": ["Rio de Janeiro", "Niterói", "Petrópolis", "Volta Redonda", "Campos dos Goytacazes", "Nova Iguaçu", "Duque de Caxias", "Cabo Frio", "Teresópolis", "Macaé", "Resende", "Angra dos Reis", "Queimados", "Itaboraí", "Maricá", "Nilópolis", "São Gonçalo", "Magé", "Belford Roxo", "Mesquita", "Barra Mansa", "Três Rios", "Rio das Ostras", "Nova Friburgo", "Iguaba Grande", "Itaperuna", "Japeri", "Paraíba do Sul", "Quissamã", "Sapucaia", "Saquarema", "Rio Bonito", "Seropédica", "São João de Meriti", "Paty do Alferes"],
        "RN": ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante", "Macaíba", "Ceará-Mirim", "Caicó", "Assu", "Currais Novos", "Santa Cruz", "Nova Cruz", "Apodi", "João Câmara", "Touros", "Canguaretama", "Areia Branca", "São José de Mipibu", "São Miguel", "Caraúbas", "Pau dos Ferros", "Macau", "Jucurutu", "Acari", "Lajes", "Alexandria", "Monte Alegre", "Pendências", "Tibau do Sul", "Goianinha", "Martins", "Ipanguaçu", "Umarizal", "São Miguel do Gostoso", "Pedro Velho", "Portalegre"],
        "RS": ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria", "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo", "Rio Grande", "Alvorada", "Passo Fundo", "Sapucaia do Sul", "Uruguaiana", "Bagé", "Santa Cruz do Sul", "Bento Gonçalves", "Erechim", "Guaíba", "Cachoeirinha", "Esteio", "Santana do Livramento", "Ijuí", "Capão da Canoa", "Farroupilha", "Tramandaí", "Lajeado", "Santa Rosa", "Venâncio Aires", "Santo Ângelo", "Osório", "Carlos Barbosa", "Parobé", "Dom Pedrito", "Campo Bom"],
        "RO": ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena", "Cacoal", "Rolim de Moura", "Guajará-Mirim", "Jaru", "Machadinho d'Oeste", "Buritis", "Ouro Preto do Oeste", "Pimenta Bueno", "Alta Floresta d'Oeste", "Espigão d'Oeste", "Nova Mamoré", "São Miguel do Guaporé", "Colorado do Oeste", "Monte Negro", "Alto Paraíso", "Campo Novo de Rondônia", "Candeias do Jamari", "Presidente Médici", "Costa Marques", "Alvorada d'Oeste", "Seringueiras", "Nova Brasilândia d'Oeste", "Theobroma", "Urupá", "Chupinguaia", "Cabixi", "Ministro Andreazza", "Rio Crespo", "Governador Jorge Teixeira", "Mirante da Serra"],
        "RR": ["Boa Vista", "Rorainópolis", "Caracaraí", "Mucajaí", "Cantá", "Alto Alegre", "Iracema", "Pacaraima", "Bonfim", "São João da Baliza", "Normandia", "Amajari", "Uiramutã", "Caracaraí", "Feliz Natal", "Barcelos", "Presidente Figueiredo", "São Gabriel da Cachoeira", "Eirunepé", "Tabatinga", "Maués"],
        "SC": ["Florianópolis", "Joinville", "Blumenau", "São José", "Chapecó", "Itajaí", "Criciúma", "Lages", "Jaraguá do Sul", "Palhoça", "Balneário Camboriú", "Brusque", "Tubarão", "Caçador", "Gaspar", "Rio do Sul", "Araranguá", "Laguna", "Concórdia", "Xanxerê", "Navegantes", "Biguaçu", "Itapema", "São Bento do Sul", "Canoinhas", "Imbituba", "Camboriú", "São Francisco do Sul", "Mafra", "Timbó", "Videira", "Fraiburgo", "Indaial", "Campo Alegre", "São Lourenço do Oeste"],
        "SP": ["São Paulo", "Campinas","Ribeirão Pires", "Santos", "Sorocaba", "São José dos Campos", "São José do Rio Preto", "Ribeirão Preto", "Jundiaí", "Piracicaba", "Bauru", "Franca", "Guarujá", "Barueri", "Araraquara", "Itu", "Botucatu", "Marília", "Jacareí", "Taubaté", "Limeira", "Mogi das Cruzes", "Sumaré", "Indaiatuba", "Cotia", "Americana", "Itapevi", "São Caetano do Sul", "Hortolândia", "Bragança Paulista", "Ferraz de Vasconcelos", "Salto", "Itapetininga", "Avaré", "Itatiba", "Ourinhos"],
}

const estadoInput = document.getElementById("estado");
const cidadeInput = document.getElementById("cidade");
const stateSuggestions = document.getElementById("stateSuggestions");
const citySuggestions = document.getElementById("citySuggestions");

function filterStates() {
    const query = estadoInput.value.toUpperCase();
    stateSuggestions.innerHTML = '';
    if (query.length > 0) {
        const filteredStates = estados.filter(estado => estado.startsWith(query));
        stateSuggestions.style.display = filteredStates.length > 0 ? "block" : "none";
        filteredStates.forEach(estado => {
            const li = document.createElement("li");
            li.textContent = estado;
            li.onclick = () => {
                estadoInput.value = estado;
                stateSuggestions.style.display = "none";
                showSuggestions();
            };
            stateSuggestions.appendChild(li);
        });
    } else {
        stateSuggestions.style.display = "none";
    }
}

function showSuggestions() {
    const estado = estadoInput.value.toUpperCase();
    const query = cidadeInput.value.toLowerCase();
    citySuggestions.innerHTML = '';

    if (estado && cidades[estado]) {
        const filteredCities = cidades[estado].filter(cidade => cidade.toLowerCase().startsWith(query)).slice(0, 20);
        citySuggestions.style.display = filteredCities.length > 0 ? "block" : "none";
        filteredCities.forEach(cidade => {
            const li = document.createElement("li");
            li.textContent = cidade;
            li.onclick = () => {
                cidadeInput.value = cidade;
                citySuggestions.style.display = "none";
            };
            citySuggestions.appendChild(li);
        });
    } else {
        citySuggestions.style.display = "none";
    }
}

document.addEventListener("click", (e) => {
    if (e.target !== estadoInput && e.target !== cidadeInput) {
        stateSuggestions.style.display = "none";
        citySuggestions.style.display = "none";
    }
});
