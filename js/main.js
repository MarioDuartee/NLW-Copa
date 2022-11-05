function createGame(player1, hour, player2) {
    return `
<li>
    <img src="./assets/icon-${player1}.svg" alt="logo brasil">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="logo servia">
</li>

    `
}

let delay = -0.3
function createCard(date, day, games) {
    delay += 0.3
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
</div>
    `
}

document.querySelector("#app").innerHTML = `
<header>
<img src="./assets/logo.svg" alt="logo da NLW">
<div id="btn">
<h4>Escolha a cor do tema</h4>
<button class="btn btn-green" value="green">Verde</button>
<button class="btn btn-yellow" value="yellow">Amarelo</button>
<button class="btn btn-blue" value="blue">Azul</button>
</div>
</header>

<main id="cards">
${createCard("24/11", "quinta",
    createGame("brazil", "16:00", "camaroes") +
    createGame("hungary", "13:00", "argentina") +
    createGame("colombia", "20:00", "japan")
)}
${createCard("28/11", "Segunda",
    createGame("columbia", "13:00", "camaroes") +
    createGame("india", "13:00", "armenia") +
    createGame("comoros", "13:00", "jodan")
)}
${createCard("28/11", "Segunda",
    createGame("columbia", "13:00", "camaroes") +
    createGame("india", "13:00", "armenia") +
    createGame("comoros", "13:00", "jodan")
)}

</main >
    `
