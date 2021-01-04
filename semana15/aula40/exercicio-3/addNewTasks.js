var fs = require('fs')

const tasksList = fs.readFileSync('tasks.txt', 'utf8').split(",")

// console.log(tasksList)

const task = process.argv[2]

// const tasksList = []

const newList = [...tasksList, task]

fs.writeFileSync('tasks.txt', newList, 'utf8')

console.log(`Tarefas: [${newList}]`)