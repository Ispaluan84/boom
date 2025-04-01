
function juegoBomba(){
const userInput = document.getElementById('userInput');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');
const btnrestart = document.getElementById('restart')
let numeroMaquina = Math.floor(Math.random() * 3) + 1;

    function cuentaAtras(numeroUsuario) {
        countdown.innerHTML = 'Cuenta atrás: ';
        let contador = 5;

        const tiempo = setInterval(() => {
            countdown.innerHTML =`Cuenta atrás: ${contador}`;
            contador --;
              if (contador === 0) {
                clearInterval(tiempo);
                countdown.innerHTML = '';
                result.innerHTML =`<h3>Tu numero es el ${numeroUsuario} | El número correcto es ${numeroMaquina}</h3><br>`
                result.innerHTML += numeroUsuario == numeroMaquina ? '<h2 class="green"><strong>¡Has Salvado al mundo!</strong></h2>' : `<h2 class="red"><strong>¡Ups!¡La bomba ha estallado.!</strong></h2>`;
            }
        }, 1000);   
    }

    function confirmarSeleccion() {
        const numeroUsuario = parseInt(userInput.value);
          if (![1, 2, 3].includes(numeroUsuario)) {
            alert('Introduce un número entre 1 y 3')
            return
        }

        cuentaAtras(numeroUsuario);
        document.removeEventListener('click', confirmarSeleccion);
        userInput.removeEventListener('keypress', detectarEnter);
    }
    function detectarEnter(event){
        if (event.key ==='Enter') {
            confirmarSeleccion();
        }
    }

    function reiniciar() {
        location.reload()
    }

    document.addEventListener('click', confirmarSeleccion);
    userInput.addEventListener('keypress', detectarEnter);
    btnrestart.addEventListener('click', reiniciar);
}

document.addEventListener('DOMContentLoaded', juegoBomba);
