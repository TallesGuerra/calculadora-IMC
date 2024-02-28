import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'


// variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

/* 3 maneiras de cirar e atribuir a função em um evento 
form.onsubmit = function() {}

form.onsubmit = () => {}

form.onsubmit = handleSubmit
function handleSubmit(){

} */

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()


form.onsubmit = function (event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber) {
        AlertError.open()    
        return;
    }

    AlertError.close()
    

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}
    Lembre-se que esse resultado não determina a sua beleza.`

    Modal.message.innerText = message
    Modal.open()
}



