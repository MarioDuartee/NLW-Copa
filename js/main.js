function createGame(player1, hour, player2, name1, name2) {
    return `
<li>
    <img src="./assets/${player1}.svg" alt="logo brasil">    
    <strong>${hour}</strong>
    <img src="./assets/${player2}.svg" alt="logo servia">
    
</li>
<section><p>${name1}</p>
<p>${name2}</p>
</section>
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
${createCard("20/11", "domingo",
    createGame("qatar", "13:00", "ecuador", "Qatar", "Equador")
)}
${createCard("21/11", "terça",
    createGame("england", "10:00", "iran", "Inglaterra", "Irã") +
    createGame("senegal", "13:00", "netherlands", "Senegal", "Holanda") +
    createGame("united-states", "16:00", "wales", "Usa", "Gales")
)}
${createCard("22/11", "Quarta",
    createGame("argentina", "07:00", "saudi arabia", "Argentina", "Arabia Saudita") +
    createGame("denmark", "10:00", "tunisia", "Hungria", "Argentina") +
    createGame("mexico", "13:00", "japan", "Mexico", "Polônia") +
    createGame("france", "16:00", "australia", "Mexico", "Polônia")
)}
${createCard("24/11", "quinta",
    createGame("morocco", "07:00", "croatia", "Marrocos", "Croácia") +
    createGame("germany", "10:00", "japan", "Alemanha", "Japão") +
    createGame("spain", "13:00", "costa rica", "Espanha", "costa Rica") +
    createGame("belgium", "16:00", "canada", "Bélgica", "Canadá")
)}

</main >
    `