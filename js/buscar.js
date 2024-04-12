async function buscar(){
    console.log("Passei por aqui")
    const resposta = await fetch("https://660f44bc356b87a55c510f18.mockapi.io/agendas")
    const respostaDadosAgenda = await resposta.json()
    console.log("Resposta: ", respostaDadosAgenda)

    const cards = document.getElementById("cards_games")

    cards.innerHTML = respostaDadosAgenda.map((itemAgenda) => {
       return "teste"
    });
}

console.log("Antes de buscar")
buscar()
console.log("Depois de buscar")