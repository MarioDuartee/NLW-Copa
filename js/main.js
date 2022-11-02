function createGame(player1, hour, player2) {
    return `
<li>
    <img src="./assets/icon-${player1}.svg" alt="logo brasil">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="logo servia">
</li>

    `
}


function createCard(date, day, games) {
    return `
    <div class="card">
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
</header>
<main class="cards">
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


</main >
    `
