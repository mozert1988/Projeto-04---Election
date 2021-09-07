//Declaração das constantes
const VOTO_NEGADO = "Negado";
const VOTO_OPCIONAL = "Opcional";
const VOTO_OBRIGATORIO = "Obrigatorio";

// Declaraçao das variaveis
let idadeEleitor = 0;
let voto = 0;
let autorizacao = "";
let opcoesDeVoto = []; 
let resultado = "";
let votarNovamente = true;

//Executando  função com as opcoes de votos disponíveis
opcaoDeVotos();

//Crianco o laço de repetição enquanto tiverem eleitores
while(votarNovamente){
  console.log("-----------------------Urna Eletronica--------------------------\n");

  //Recebendo a idade do eleitor
  idadeEleitor = prompt("Qual é seu ano de nascimento? ");
  
  //Exibindo as opções de voto
  console.log("Escolha seu voto: ");
  console.log(
    "1 = " + opcoesDeVoto[0].nome + 
    "\n2 = " + opcoesDeVoto[1].nome +
    "\n3 = " + opcoesDeVoto[2].nome +
    "\n4 = " + opcoesDeVoto[3].nome +
    "\n5 = " + opcoesDeVoto[4].nome
    );

  // Recebendo o voto do eleitor
  voto = prompt("Digite seu voto: ");

  // Guardando resultado da função para autorizar voto
  autorizacao = autorizaVoto(idadeEleitor);
  //Guardando resultado da função votação
  resultado = votacao(autorizacao, voto);
  console.log("\n" + resultado);
  // Salvando a resposta se existem mais eleitores 
  let resposta = prompt("\nExistem mais eleitores para votar? \nDigite 1 para sim e 2 para não:");
  
  // Verificando a resposta para dar continuidade ou encerrar o programa.
  if(resposta == "2"){
    votarNovamente = false;
  }

  console.log(resultado);
  //limpa o console para resposta dos outros eleitores não ficarem disponiveis. 
  console.clear();
}

// executando a função para exibir o resultado da votação
exibirResultados();

//--------------------------------------- FIM DA EXECUÇAO DO PROGRAMA---------------------------------------------------------

// Função que verifica a idade do eleitor
function autorizaVoto(anoNascimento){
  //Guardando o ano atual
  let anoAtual = new Date().getFullYear(); 
  //Calculando a idade do eleitor
  let idade = anoAtual - anoNascimento;

  // Verificando se o eleitor está apto a votar
  if(idade < 16){
    return VOTO_NEGADO;
  } else if(idade >= 16 && idade <= 18 || idade >= 60){
    return VOTO_OPCIONAL;
  } else {
    return VOTO_OBRIGATORIO;
  }
}

// Função para verificar se o eleitor está apto a votar, se sim ele computa voto, se não ele passa a mensagem de voto negado
function votacao(autorizacao, voto){
  switch (autorizacao){
    case VOTO_NEGADO:
      return "Você não pode votar!";
    case VOTO_OPCIONAL:
    case VOTO_OBRIGATORIO:
      //Executando a função para computar votos
      computarVotos(voto);
      return "Voto computado com sucesso!";
  }
}

//Função que calcula e exibe o resultado da votação
function exibirResultados(){
  console.log("\n---------------Resultado Eleições 2022--------------------------\n")
  console.log("O " + opcoesDeVoto[0].nome + " teve " + opcoesDeVoto[0].votos + " votos");
  console.log("O " + opcoesDeVoto[1].nome + " teve " + opcoesDeVoto[1].votos + " votos");
  console.log("O " + opcoesDeVoto[2].nome + " teve " + opcoesDeVoto[2].votos + " votos");
  console.log("O total de " + opcoesDeVoto[3].nome + " foi de " + opcoesDeVoto[3].votos + " votos");
  console.log("O total de " + opcoesDeVoto[4].nome + " foi de " + opcoesDeVoto[4].votos + " votos");

  // Retirando voto Nulo e Branco do resultado
  opcoesDeVoto.splice(3,2);
  // Ordenando a lista de votação de forma decrescente 
  opcoesDeVoto.sort(function (x,y){
    return x.votos - y.votos
  }).reverse();

  // Exibindo o resultado da eleição
  console.log("\nO candidato " + opcoesDeVoto[0].nome + " recebeu " + opcoesDeVoto[0].votos +  " votos e foi eleito!");
}

//Adicionando os candidatos disponiveis em uma lista
function opcaoDeVotos(){
    //Criando objeto candidato
    let candidato1 = new Object();
    //atributos do objeto (nome e votos).
    candidato1.nome = "Candidato 1";
    candidato1.votos = 0;
    //Adicionando o objeto candidato na lista
    opcoesDeVoto.push(candidato1);

    let candidato2 = new Object();
    candidato2.nome = "Candidato 2";
    candidato2.votos = 0;
    opcoesDeVoto.push(candidato2);

    let candidato3 = new Object();
    candidato3.nome = "Candidato 3";
    candidato3.votos = 0;
    opcoesDeVoto.push(candidato3);

    let votoNulo = new Object();
    votoNulo.nome = "Voto Nulo";
    votoNulo.votos = 0;
    opcoesDeVoto.push(votoNulo);

    let votoEmBranco = new Object();
    votoEmBranco.nome = "Voto em Branco";
    votoEmBranco.votos = 0;
    opcoesDeVoto.push(votoEmBranco);
}
//Funçao que computa votos por candidatos
function computarVotos(voto){
    switch (voto){
      case "1": 
        opcoesDeVoto[0].votos++; 
        break;
      case "2":
        opcoesDeVoto[1].votos++;
        break;
      case "3":
        opcoesDeVoto[2].votos++;
        break;
      case "4":
        opcoesDeVoto[3].votos++;
        break;
      case "5":
        opcoesDeVoto[4].votos++;
        break;
      default:
        opcoesDeVoto[3].votos++;
        break;
    }
}