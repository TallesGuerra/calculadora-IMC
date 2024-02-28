export function notANumber(value){
    return isNaN(value) || value == ""
}

// IMC = peso / (altura * altura)
export function calculateIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}
