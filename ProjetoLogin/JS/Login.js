const input = document.querySelector('#senha');
const btn = document.querySelector('#btnVerSenha');

let count = 1;
document.getElementById("slide1").checked = true;

setInterval(function () {
    proximoSlide();
}, 5000)

function proximoSlide() {
    count++;
    if (count > 4) {
        count = 1;
    }
    document.getElementById("slide" + count).checked = true;
}

btn.addEventListener('click', btnVerSenha);

function btnVerSenha() {
    if (input.type == "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

