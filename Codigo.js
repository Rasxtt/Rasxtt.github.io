let Npages = []
let info 

const startP = document.getElementById('start')
const startbtn = document.getElementById('continue')
const lobbyP = document.getElementById('lobby')
const pages = document.getElementById('pages')



const flowerb = document.getElementById('flowerb')
const videob = document.getElementById('videob')
const songb = document.getElementById('songb')
const textb = document.getElementById('textb')

const back = document.getElementById('return')




class Page {
    constructor(name, tittle, img, about, download) {
        this.name = name
        this.tittle = tittle
        this.img = img
        this.about = about
        this.download = download
    }
}


let flower = new Page('flower', 'Fondo de flores', 'flowers/Fondo-de-Flores.jpg', '', 'flowers/Fondo-de-Flores.jpg')
let video = new Page ('video', 'Video', '', '', '')
let song = new Page('song', 'Cancion', '', '', '')
let text = new Page('text', 'Texto', '', '', '')

Npages.push(flower, video, song, text)

Npages.forEach((Page) => {
    info = `
    <div id="${Page.name}">
            <h2>${Page.tittle}</h2>
            <img src=${Page.img}>
            <p>${Page.about}</p>
            <a download="${Page.tittle}" href="${Page.download}">
                <button id="${Page.name}d" download>Descargar</button>
              </a>
        </div>
    `
    pages.innerHTML += info
})

const flowerid = document.getElementById('flower')
const videoid = document.getElementById('video')
const songid = document.getElementById('song')
const textid = document.getElementById('text')

function Start() {
    startbtn.addEventListener('click', Lobby)
    lobbyP.style.display = 'none'
    pages.style.display = 'none'
    back.style.display = 'none'

    

    
}

function Lobby () {
    videoid.style.display = 'none'
    songid.style.display = 'none'
    textid.style.display = 'none'
    flowerid.style.display = 'none'
    startP.style.display = 'none'
    lobbyP.style.display = 'flex'
    back.style.display = 'none'

    

    flowerb.addEventListener('click', FlowerP)
    videob.addEventListener('click', VideoP)
    songb.addEventListener('click', SongP)
    textb.addEventListener('click', TextP)

    back.addEventListener('click', Lobby)
}



function transition () {
    lobbyP.style.display = 'none'
    pages.style.display = 'flex'
    videoid.style.display = 'none'
    songid.style.display = 'none'
    textid.style.display = 'none'
    flowerid.style.display = 'none'
    back.style.display = 'flex'
}
function FlowerP () {
    transition()
    flowerid.style.display = 'flex'
}
function VideoP () {
    transition()
    videoid.style.display = 'flex'
}

function SongP () {
    transition()
    songid.style.display = 'flex'
}

function TextP () {
    transition()
    textid.style.display = 'flex'
}


window.addEventListener('load', Start)
