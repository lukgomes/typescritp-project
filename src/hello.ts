console.log(`hello there!`)

const nome = 'lucas gomes'
console.log(`Ola, ${nome}`)

interface Funcionario {
  nome: string // essa propriedade é obrigatorio
  idade?: number // essa propriedade se torna opcional
}

const novoFuncionario: Funcionario = {
  nome: 'Lucas Gomes'
}

const novoFuncionario2: Funcionario = {
  nome: 'Luffy',
  idade: 20
}

console.log(novoFuncionario)
console.log(novoFuncionario2)