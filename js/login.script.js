
const email = $("#email");
const contraseña = $("#contraseña");
const boton = $("button");

const emailregistrado = "navi@gmail.com";
const contraseñaregistrada = "fuerza"

boton.click(
    function () {
        if (email.val() == emailregistrado && contraseña.val() == contraseñaregistrada) {
            window.location.href = 'portal.html'
        } else {
            alert("email o contraseña no coincide")
        }

    }
)
