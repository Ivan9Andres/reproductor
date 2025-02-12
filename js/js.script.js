

const contenedor = $(".contenedor")
const canciones = $(".playlista")

const artistasArray = [
    {
        nombre: "Shakira",
        imagen: "https://i.scdn.co/image/ab67616d0000b273ab72724cec94b3bcf8d39c55",
    }, {
        nombre: "Carlos Vives",
        imagen: "https://i.scdn.co/image/ab67616d0000b273575fb66ec11e54fb68d548a5",
    }, {
        nombre: "J Balvin",
        imagen: "https://i.scdn.co/image/ab67616d0000b273922a7339d969b5f0262580f5",
    }, {
        nombre: "Maluma",
        imagen: "https://i.scdn.co/image/ab67616d0000b2739fa9c0acaf11becc12d22300",
    }, {
        nombre: "Juanes",
        imagen: "https://i.scdn.co/image/ab6761610000e5eb330d24db775125dcec2c7b4c",
    }, {
        nombre: "Karol G",
        imagen: "https://i.scdn.co/image/ab6761610000e5eb4b0754aefc9db490e02205ec",
    }, {
        nombre: "Silvestre Dangond",
        imagen: "https://i.scdn.co/image/ab67616d0000b273230a81da41123c32556dc7b0",
    }, {
        nombre: "Andrés Cepeda",
        imagen: "https://i.scdn.co/image/ab67616100005174411c4d5bc2f3b8539a57eecf",
    }, {
        nombre: "Fonseca",
        imagen: "https://i.scdn.co/image/ab676161000051741b23d87d2cf78c98e8e1092d",
    }, {
        nombre: "Mono Zabaleta",
        imagen: "https://i.scdn.co/image/ab676161000051745c982d2b7ed307493dc0ebb3",
    }, {
        nombre: "Elder Dayán",
        imagen: "https://i.scdn.co/image/ab67616d0000b273ea7afa36d7d68c3fb2b1819e",
    }, {
        nombre: "Jhonny Rivera",
        imagen: "https://i.scdn.co/image/ab6761610000517479b94dc35fe1c63c589f5391",
    }, {
        nombre: "Diego Daza",
        imagen: "https://i.scdn.co/image/ab6761610000e5ebf6d18b47247a38621a90a69b"
    }
];

let cancionesFavoritas = [{
    nombre: "Mi propia historia",
    artista: "Silvestre",
    duracion: "3:30"
},

{
    nombre: "Loba",
    artista: "Shakira",
    duracion: "3:28"
},

{
    nombre: "Volvi a nacer",
    artista: "carlos vives",
    duracion: "3:27"
},

{
    nombre: "Ambiente",
    artista: "J Balvin",
    duracion: "3:26"
},

{
    nombre: "El perdedor",
    artista: "Maluma",
    duracion: "3:25",
},]

for (let i = 0; i < artistasArray.length; i++) {
    contenedor.append(`<div class='musicos'>
        <img src = '${artistasArray[i].imagen}' >
        <h3>${artistasArray[i].nombre}</h3>
        </div >

    `);
}

for (let i = 0; i < cancionesFavoritas.length; i++) {
    canciones.append(`
        <div class='cancion'>
        <div class='play'>
        <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#fcfcfd" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
        </div>

        <div class='texto'>
        <h2>${cancionesFavoritas[i].nombre}</h2>
        <h3>${cancionesFavoritas[i].artista}</h3>
        </div>

        
        <div class='fondo'>
        <h3>${cancionesFavoritas[i].duracion}</h3>
        <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#fcfcfd" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
        </div>

        </div>
        `)
}

$(".musicos").click(
    function () {
        $('#artistaSelect').html($(this).children("h3").html())
        $('#imgArtista').attr("src", $(this).children("img").attr("src"))
    }
)

