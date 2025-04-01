//El contador de 5s tiene que aparecer en el div countdow
//En result pondremos los numeros tanto del jugsdor como de la maquina
//Tambien saldra el mensaje de Enhorabuena o de lo siento en result
//el boton con id restart sera utilizado para reiniciar el juego
const userInput = document.getElementById('userInput');
const countdow = document.getElementById('countdow');
const result = document.getElementById('result');
let randomNumber;

    function cuentaAtras(from, to) {
        let cuenta = from;
        let tiempo = setInterval(function(){
            if (cuenta == to) {
                clearInterval(tiempo);
            }
            cuenta --;
        }, 1000);   
    }
    cuentaAtras(5,0)

    userInput.addEventListener('keydown', (event) => { 
        if (event.keyCode === 13) {
            cuentaAtras()
        }
    })

    document.addEventListener('click', (event) => {
        if (event.target !== userInput) {
            cuentaAtras()
        }
    })

    const number = new Promise ((resove) => {
        setTimeout (() =>{
            randomNumber = Math.floor(Math.random() * 3) + 1;
        }, 5000);
    })


    


//Contador

