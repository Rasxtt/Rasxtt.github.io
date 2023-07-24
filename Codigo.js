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
const dedicatoriab = document.getElementById('dedicatoriab')
const playlistb = document.getElementById('playlistb')

const back = document.getElementById('return')

const photo = document.getElementById('photos')
const div = document.getElementById('div')



class Page {
    constructor(name, tittle, src, about, download) {
        this.name = name
        this.tittle = tittle
        this.src = src
        this.about = about
        this.download = download
    }
}


let flower = new Page('flower', 'Flores ad dilectione mea', 'files/Fondo-de-Flores.jpg', 'Presentamos una exquisita obra de arte creada por el talentoso artista Diego Chuquiure, titulada "Flores ad dilectione mea" en latín, que se traduce como "Flores para mi amor". Este hermoso cuadro es un conjunto de doce flores seleccionadas minuciosamente por el artista por su belleza y reconocimiento. Las flores representadas son: rosa, hortensia, orquídea, tulipán, lirio, gardenia, flor de loto, girasol, amapola, corazón sangrante, narcisos y margaritas. Cada flor fue individualmente creada y meticulosamente ubicada por el artista para resaltar su esplendor único. La combinación de estas flores emblemáticas forma una composición armoniosa que cautiva los sentidos y evoca emociones profundas.', 'files/Fondo-de-Flores.jpg')
let video = new Page ('video', 'Video del año', 'files/Video año.mp4', 'Este cautivador video es una conmovedora reflexión sobre el amor, presentada por el talentoso videógrafo Diego Chuquiure. A través de imágenes cuidadosamente seleccionadas y una narrativa magistral, nos sumerge en su propia experiencia y nos invita a explorar el mágico mundo de las emociones y conexiones humanas. Desde momentos de ternura hasta desafíos profundos, esta pieza cinematográfica es una auténtica lección de vida que nos enseña sobre el crecimiento personal y el significado del amor en todas sus formas. En resumen, Diego Chuquiure ha creado una experiencia visual única que nos toca en lo más profundo del corazón y nos recuerda la importancia transformadora del amor en nuestras vidas.', 'files/Video año.mp4')
let song = new Page('song', 'Il mio bel viaggio', 'files/Mon_Amour.wav', 'Presentamos una cautivadora canción compuesta por el reconocido músico Diego Chuquiure, titulada "Il mio bel viaggio" en italiano, que se traduce al español como "Mi hermoso viaje". Esta emotiva pieza musical narra el transcurso de una relación a lo largo de los primeros 12 meses, donde cada 12 segundos representa uno de esos significativos períodos. La canción abarca emociones de altibajos, felicidad y tristeza, capturando la complejidad de la experiencia humana. <br><br> "Il mio bel viaggio" está inspirada en el tradicional blues de 12 compases, característico del género musical homónimo y estilos posteriores. Aunque el autor no ha definido un género musical específico, esto se ha hecho intencionalmente para permitir a cada oyente interpretarla a su manera y conectar con la música de una forma personal. <br><br> Con una duración de 144 segundos, simbolizando la raíz cuadrada de 12, y un tempo de 240, que representa la veintena de 12, la canción muestra una cuidadosa atención a los detalles, demostrando la habilidad del artista para plasmar emociones a través de su música. <br><br> No cabe duda de que "Il mio bel viaggio" es una composición musical que invita a los oyentes a embarcarse en un viaje íntimo y emocional a través de sus armonías y melodías cautivadoras.', 'files/Mon_Amour.mp3')
let text = new Page('text', 'Texto año', 'files/Texto Año.pdf', '', 'files/Texto Año.pdf')
let dedicatoria = new Page('dedicatoria', 'It\'s been a long long time', 'files/Dedicatoria.mp3', 'Aquí tenemos la emotiva pieza "It\'s Been A Long, Long Time" interpretada por el renombrado trompetista Diego Chuquiure. Su virtuosismo musical y pasión desbordante nos sumergen en una experiencia nostálgica y cautivadora, conectándonos con emociones que trascienden el tiempo. Cada nota magistralmente ejecutada nos invita a revivir momentos especiales y nos recuerda el poder universal de la música para unir corazones. La interpretación de Diego es una verdadera joya que deja una impresión duradera en cada oyente afortunado que tiene el privilegio de escucharla.', 'files/Dedicatoria.mp3')

Npages.push(flower, video, song, text, dedicatoria)

Npages.forEach((Page) => {
    info = `
    <div id="${Page.name}">
            <h2 id="${Page.name}h2">${Page.tittle}</h2>
            <img id="${Page.name}img" src=${Page.src}>
            <audio controls id="${Page.name}audio">
            <source src="${Page.src}" type="audio/wav">
            </audio>
            <video controls id="${Page.name}video" width="1920" height="1080" frameborder="0">
            <source src="${Page.src}" type="video/mp4">
            </video>
            <iframe src="${Page.src}" id="${Page.name}pdf" width="1920" height="1080" frameborder="0"></iframe>
            <p id="${Page.name}p">${Page.about}</p>
            <a download="${Page.tittle}" href="${Page.download}">
                <button id="${Page.name}d">Descargar</button>
              </a>
        </div>
    `
    pages.innerHTML += info
})

const flowerid = document.getElementById('flower')
const videoid = document.getElementById('video')
const songid = document.getElementById('song')
const textid = document.getElementById('text')
const dedicatoriaid = document.getElementById('dedicatoria')
const playlist = document.getElementById('playlist')

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
    photo.style.display = 'none'
    div.style.display = 'none'
    dedicatoriaid.style.display = 'none'
    playlist.style.display = 'none'

    

    flowerb.addEventListener('click', FlowerP)
    videob.addEventListener('click', VideoP)
    songb.addEventListener('click', SongP)
    textb.addEventListener('click', TextP)
    dedicatoriab.addEventListener('click', DedicatoriaP)
    playlistb.addEventListener('click', PlaylistP)

    back.addEventListener('click', Lobby)
}



function transition () {
    lobbyP.style.display = 'none'
    pages.style.display = 'flex'
    videoid.style.display = 'none'
    songid.style.display = 'none'
    textid.style.display = 'none'
    flowerid.style.display = 'none'
    dedicatoriaid.style.display = 'none'
    back.style.display = 'flex'

    document.getElementById('floweraudio').style.display = 'none'
    document.getElementById('flowervideo').style.display = 'none'
    document.getElementById('flowerpdf').style.display = 'none'
    document.getElementById('flowerp').style.display = 'none'
    document.getElementById('songimg').style.display = 'none'
    document.getElementById('songvideo').style.display = 'none'
    document.getElementById('songpdf').style.display = 'none'
    document.getElementById('songp').style.display = 'none'
    document.getElementById('videoaudio').style.display = 'none'
    document.getElementById('videoimg').style.display = 'none'
    document.getElementById('videopdf').style.display = 'none'
    document.getElementById('videop').style.display = 'none'
    document.getElementById('textaudio').style.display = 'none'
    document.getElementById('textvideo').style.display = 'none'
    document.getElementById('textimg').style.display = 'none'
    document.getElementById('dedicatoriavideo').style.display = 'none'
    document.getElementById('dedicatoriapdf').style.display = 'none'
    document.getElementById('dedicatoriaaudio').style.display = 'none'
    document.getElementById('dedicatoriap').style.display = 'none'
    document.getElementById('dedicatoriaimg').style.display = 'none'
}

function FlowerP () {
    transition()
    flowerid.style.display = 'flex'
    document.getElementById('flowerimg').style.display = 'flex'
    document.getElementById('flowerp').style.display = 'flex'
}
function VideoP () {
    transition()
    videoid.style.display = 'flex'
    document.getElementById('videovideo').style.display = 'flex'
    document.getElementById('videop').style.display = 'flex'
}

function SongP () {
    transition()
    songid.style.display = 'flex'
    document.getElementById('songaudio').style.display = 'flex'
    document.getElementById('songp').style.display = 'flex'
}

function TextP () {
    transition()
    textid.style.display = 'flex'
}

function DedicatoriaP () {
    transition()
    dedicatoriaid.style.display = 'flex'
    document.getElementById('dedicatoriaaudio').style.display = 'flex'
    document.getElementById('dedicatoriap').style.display = 'flex'
}

function PlaylistP () {
    transition()
    playlist.style.display = 'flex'
}

window.addEventListener('load', Start)
