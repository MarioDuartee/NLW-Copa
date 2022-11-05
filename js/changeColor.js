const color = document.querySelectorAll('.btn')

color.forEach(btn => btn.addEventListener('click', function () {
    valor = this.value
    changeColor(valor)
}))



function changeColor(val) {
    const body = document.querySelector('body')
    if (val === "yellow") {
        body.classList.remove('blue');
        body.classList.remove('green');
        body.classList.add('yellow')
    } else if (val === "green") {
        body.classList.remove('yellow');
        body.classList.remove('blue');
        body.classList.add('green')
    } else {
        body.classList.remove('green');
        body.classList.remove('yellow');
        body.classList.add('blue')
    }
}