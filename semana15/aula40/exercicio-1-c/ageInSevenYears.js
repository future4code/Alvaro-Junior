const Name = process.argv[2]
const age = process.argv[3]

const newAge = Number(age) + 7

if (process.argv.length === 4){
  console.log(`Olá ${Name}! Você tem ${age} anos!`)
  console.log(`Em sete anos você terá ${newAge} anos!`)
} else if(process.argv.length < 4) {
  console.log("Nome ou idade faltando!")
} else {
  console.log("Esperava apenas o nome e a idade! Verifique sua entrada!")
}