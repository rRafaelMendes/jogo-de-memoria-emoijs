const emojis = [
    "🦈",
    "🦈",
    "🐬",
    "🐬",
    "🐳",
    "🐳",
    "🐋",
    "🐋",
    "🐟",
    "🐟",
    "🐠",
    "🐠",
    "🐡",
    "🐡",
    "🦐",
    "🦐"
]
let openCards = []
// criando e embaralhamento para os emojis
let shufflerEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1))

//criando uma condição para mostrar meus elementos na tela a partir da classe item que criamos no css 

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div")
    box.className = "item"
    box.innerHTML = shufflerEmojis[i]
    box.onclick = handleClick 
    document.querySelector(".game").appendChild(box)
}
function playSound(audioName){
    let audio = new Audio(`./src/audio/${audioName}.m4a`)
    audio.volume = 0.2
    audio.play()
}
function handleClick () {
    if (openCards.length < 2) {
        this.classList.add("boxOpen")
        openCards.push(this)
        playSound("hit")
    }
    if (openCards.length == 2) {
        setTimeout (checkMatch, 500)
    }
}
//chiando função para checar a comparação das imagens selecionadas
function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch")
        openCards[1].classList.add("boxMatch")
    } else {
        openCards[0].classList.remove("boxOpen")
        openCards[1].classList.remove("boxOpen")
    }
    openCards = []
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você venceu !")
    }
}