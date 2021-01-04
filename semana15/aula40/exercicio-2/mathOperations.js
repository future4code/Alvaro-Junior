const mathOperation = process.argv[2]

const firstNumber = Number(process.argv[3])
const secondNumber = Number(process.argv[4])

if (process.argv.length === 5){
  switch (mathOperation) {
    case "add":
      console.log(firstNumber + secondNumber)
      break
    case "sub":
      console.log(firstNumber - secondNumber)
      break
    case "mult":
      console.log(firstNumber * secondNumber)
      break
    case "div":
      console.log(firstNumber / secondNumber)
      break
    default:
      console.log("Operação inválida")
  }
} else if (process.argv.length < 5){
  console.log("Operação ou valores faltando")
} else {
  console.log("Esperava como entrada apenas a operação e dois valores!")
}
