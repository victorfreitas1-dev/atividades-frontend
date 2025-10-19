function verificarRefeicao() {
    let comida = document.getElementById("comida").value.toLocaleLowerCase();
    let refeicao = document.getElementById("refeicao");

    if (comida === "pão com ovo") {
        refeicao.textContent = "Você esta consumindo: Café da Manhã"
    }
    else if (comida === "feijão com arroz") {
        refeicao.textContent = "Você esta consumindo: Almoço"
    }
    else if ((comida !== "pão com ovo" && comida !== "feijão com arroz") || comida === "") {
        refeicao.textContent = "Você esta consumindo: Jantar"
    }
}


