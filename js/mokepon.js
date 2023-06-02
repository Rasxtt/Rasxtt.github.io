let attackP = ""
let attackEnemy = ""
let WinORlose = ""
let LifeP = 3
let LifeE = 3
function iniciarJuego() {
    document.getElementById('seleccionar-ataque').style.display = 'none'
    document.getElementById('Reiniciar').style.display = 'none'

    let botonMascota = document.getElementById('boton-mascota')
    botonMascota.addEventListener('click', seleccionarMascotajugador,)

    document.getElementById('Btnfire').addEventListener('click', attackF)
    document.getElementById('Btnwater').addEventListener('click', attackW)
    document.getElementById('Btnearth').addEventListener('click', attackE)    
    
    document.getElementById('Reiniciarb').addEventListener('click', restart)
}

function seleccionarMascotajugador() {
    document.getElementById('seleccionar-mascota').style.display = 'none'
    document.getElementById('seleccionar-ataque').style.display = 'flex'

    let pettype = document.getElementById('npet')
    if (document.getElementById('Hipodoge').checked) {
        pettype.innerHTML = "Hipodoge" 
    } else if (document.getElementById('Capipepo').checked) {
        pettype.innerHTML = "Capipepo"
    } else if (document.getElementById('Ratigüeya').checked) {
        pettype.innerHTML = "Ratigüeya"
    } else if (document.getElementById('Langostelvis').checked) {
        pettype.innerHTML = "Langostelvis"
    } else if (document.getElementById('Tucapalma').checked) {
        pettype.innerHTML = "Tucapalma"
    } else if (document.getElementById('Pydos').checked) {
        pettype.innerHTML = "Pydos"
    } else {
        alert("Elige tu mascota")
        restart()
    }
    
    randomE(1, 6)
    
}

function randomE(min, max) {
    let petenemy = Math.floor(Math.random() * (max - min + 1) + min)
    let petN = document.getElementById('npete')
    if (petenemy == 1) {
    petN.innerHTML = "Hipodoge"
    } else if (petenemy == 2) {
        petN.innerHTML = "Capipepo"
    } else if (petenemy == 3) {
        petN.innerHTML = "Ratigüeya"
    } else if (petenemy == 4) {
        petN.innerHTML = "Langostelvis"
    } else if (petenemy == 5) {
        petN.innerHTML = "Tucapalma"
    } else if (petenemy == 6) {
        petN.innerHTML = "Pydos"
    }
}

function attackF() {
    attackP = 'Fuego'
    attacks(1, 3)
}

function attackW() {
    attackP = 'Agua'
    attacks(1, 3)
}

function attackE() {
    attackP = 'Tierra'
    attacks(1, 3)
}

function attacks(min, max) {
    attackEnemy = Math.floor(Math.random() * (max - min + 1) + min)
    if (attackEnemy == 1) {
        attackEnemy = 'Fuego'
    } else if (attackEnemy == 2) {
        attackEnemy = 'Agua'
    } else if (attackEnemy == 3) {
        attackEnemy = 'Tierra'
    }

    creatmessage()
}

function creatmessage() {
    let newattackp = document.createElement('p')

    let newattacke = document.createElement('p')



    newattackp.innerHTML = attackP
    newattacke.innerHTML = attackEnemy
    WORL()
    
    document.getElementById('result').innerHTML = WinORlose

    document.getElementById('attackFP').appendChild(newattackp)
    document.getElementById('attackFE').appendChild(newattacke)

}

function WORL() {
    let spanLifeP = document.getElementById('LifeP')
    let spanLifeE = document.getElementById('LifeE')
    if (attackP == attackEnemy) {
        WinORlose = 'Empate'
    } else if (attackP == 'Fuego' && attackEnemy == 'Tierra' || attackP == 'Agua' && attackEnemy == 'Fuego' || attackP == 'Tierra' && attackEnemy == 'Agua') {
        WinORlose = 'Ganaste'
        LifeE--
        spanLifeE.innerHTML = LifeE
    } else {
        WinORlose = 'Perdiste'
        LifeP--
        spanLifeP.innerHTML = LifeP 
    }

    Checklife()
}

function Checklife() {
    let sectionMessage = document.getElementById('result')
    let h2 = document.createElement('h2')
    let F = document.getElementById('Btnfire')
    let W = document.getElementById('Btnwater')
    let E = document.getElementById('Btnearth')
    if (LifeE == 0) {
        h2.innerHTML = 'Ganaste'
        sectionMessage.appendChild(h2)
        F.disabled = true
        W.disabled = true
        E.disabled = true
        document.getElementById('Reiniciar').style.display = 'block'
    } else if (LifeP == 0) {
        h2.innerHTML = 'Perdiste'
        sectionMessage.appendChild(h2)
        F.disabled = true
        W.disabled = true
        E.disabled = true
        document.getElementById('Reiniciar').style.display = 'block'

    }
}

function restart() {
    location.reload()
}

window.addEventListener('load', iniciarJuego)