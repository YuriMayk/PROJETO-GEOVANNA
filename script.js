// Perguntas da Roleta
const perguntasRoleta = [
  "O que você fez no primeiro dia em Coari?",
  "Qual foi a primeira impressão que teve da cidade?",
  "O que mais te surpreendeu durante a campanha?",
  "Quem foi a primeira pessoa que você conheceu lá?",
  "Qual comida típica de Coari você mais gostou?",
  "Que paisagem te deixou sem palavras?",
  "Qual foi o momento mais engraçado da viagem?",
  "Teve algum costume local que te encantou?",
  "Em que momento você se sentiu mais desafiada?",
  "Qual foi a lição mais importante que aprendeu?",
  "Teve algum animal amazônico que você viu de perto?",
  "Como foi a sua primeira noite em Coari?",
  "Qual música ou som marcou sua estadia?",
  "O que te fez sentir saudade de casa?",
  "Qual foi o maior gesto de carinho que recebeu?",
  "Teve algo que te emocionou profundamente?",
  "Com que palavra você descreveria a cidade de Coari?",
  "Quem foi uma pessoa especial que conheceu?",
  "Qual comida local você achou mais diferente?",
  "Conte uma história curiosa que aconteceu em Coari.",
  "O que foi mais desafiador no dia a dia?",
  "Qual cheiro ou aroma vai ficar na memória?",
  "Teve algum costume local que achou curioso?",
  "Qual momento te fez rir até doer a barriga?",
  "De que paisagem sentirá mais saudade?",
  "Teve alguma situação que te deixou sem reação?",
  "Que aprendizado você gostaria de levar para a vida?",
  "Qual imagem você queria guardar para sempre?",
  "Teve algo que você gostaria de ter feito e não conseguiu?",
  "Se pudesse definir Coari em uma frase, qual seria?"
];

// Perguntas do Quiz
const perguntasQuiz = [
  { pergunta: "Qual o nome do rio que margeia Coari?", alternativas: ["Rio Negro", "Rio Solimões", "Rio Madeira"], correta: 1 },
  { pergunta: "Qual é a população aproximada de Coari (em 2025)?", alternativas: ["80 mil habitantes", "58 mil habitantes", "100 mil habitantes"], correta: 1 },
  { pergunta: "Coari é famosa pela produção de qual combustível natural?", alternativas: ["Petróleo", "Ouro", "Carvão"], correta: 0 },
  { pergunta: "Qual é a principal religião praticada em Coari?", alternativas: ["Hinduísmo", "Cristianismo", "Budismo"], correta: 1 },
  { pergunta: "Em que estado fica Coari?", alternativas: ["Acre", "Amazonas", "Pará"], correta: 1 },
  { pergunta: "Coari é banhada principalmente pelo qual rio?", alternativas: ["Rio Amazonas", "Rio Solimões", "Rio Madeira"], correta: 1 },
  { pergunta: "Qual é o principal combustível extraído em Coari?", alternativas: ["Gás natural", "Carvão", "Petróleo bruto"], correta: 0 },
  { pergunta: "Qual das opções é um festival tradicional em Coari?", alternativas: ["Festival do Peixe", "Festival do Sol e da Lua", "Festival da Castanha"], correta: 1 },
  { pergunta: "Qual é o nome do grande terminal fluvial de gás em Coari?", alternativas: ["Terminal Solimões", "Porto Rio Negro", "Terminal Tarumã"], correta: 0 },
  { pergunta: "Qual destes animais é mais comum na região de Coari?", alternativas: ["Onça-pintada", "Urso pardo", "Lobo-guará"], correta: 0 },
  { pergunta: "Qual a principal via de transporte entre Manaus e Coari?", alternativas: ["Rodovia BR-319", "Transporte fluvial", "Transporte ferroviário"], correta: 1 },
  { pergunta: "Coari é famosa por suas ilhas flutuantes em qual lago?", alternativas: ["Lago Tarumã", "Lago de Coari", "Lago do Juruá"], correta: 1 },
  { pergunta: "A cidade de Coari é considerada parte de qual bioma?", alternativas: ["Cerrado", "Caatinga", "Amazônia"], correta: 2 },
  { pergunta: "O principal aeroporto de Coari é conhecido como:", alternativas: ["Aeroporto Internacional do Solimões", "Aeroporto de Coari", "Aeroporto Amazônia Verde"], correta: 1 },
  { pergunta: "Qual importante recurso econômico impulsiona a cidade?", alternativas: ["Agricultura", "Indústria petrolífera", "Turismo"], correta: 1 },
  { pergunta: "A economia de Coari é fortemente baseada na produção de:", alternativas: ["Borracha", "Petróleo e gás", "Algodão"], correta: 1 },
  { pergunta: "Quantos habitantes aproximadamente Coari possui?", alternativas: ["50 mil", "58 mil", "75 mil"], correta: 1 },
  { pergunta: "Qual destes rios não está diretamente ligado a Coari?", alternativas: ["Rio Solimões", "Rio Juruá", "Rio Negro"], correta: 2 },
  { pergunta: "Coari está localizado a oeste de qual capital?", alternativas: ["Belém", "Rio Branco", "Manaus"], correta: 2 },
  { pergunta: "Coari é conhecida por ter um dos maiores reservatórios de:", alternativas: ["Minério de ferro", "Gás natural", "Diamantes"], correta: 1 }
];

// Função para jogar Roleta
function jogarRoleta() {
  const area = document.getElementById('game-area');
  const indice = Math.floor(Math.random() * perguntasRoleta.length);
  area.innerHTML = `<h2>Pergunta Sorteada:</h2><p>${perguntasRoleta[indice]}</p>`;
}

// Função para jogar Quiz
function jogarQuiz() {
  const area = document.getElementById('game-area');
  const indice = Math.floor(Math.random() * perguntasQuiz.length);
  const pergunta = perguntasQuiz[indice];

  let html = `<h2>${pergunta.pergunta}</h2>`;
  pergunta.alternativas.forEach((alt, i) => {
    html += `<button onclick=\"verificarResposta(${i}, ${pergunta.correta})\">${alt}</button><br><br>`;
  });
  area.innerHTML = html;
}

// Função para verificar resposta
function verificarResposta(selecionada, correta) {
  const area = document.getElementById('game-area');
  if (selecionada === correta) {
    area.innerHTML = `<h2>✅ Resposta correta! 🎉</h2>`;
  } else {
    area.innerHTML = `<h2>❌ Resposta errada! Tente novamente!</h2>`;
  }
}

// Função para limpar a tela
function limparTela() {
  const area = document.getElementById('game-area');
  area.innerHTML = "";
}
