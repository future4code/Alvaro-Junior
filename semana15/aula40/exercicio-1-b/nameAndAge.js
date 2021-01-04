const Name = process.argv[2]
const age = process.argv[3]

if (process.argv.length === 4){
  console.log(`Olá ${Name}! Você tem ${age} anos!`)
} else if(process.argv.length < 4) {
  console.log("Nome ou idade faltando!")
} else {
  console.log("Esperava apenas o nome e a idade! Verifique sua entrada!")
}
