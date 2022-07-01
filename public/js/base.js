const nome = "Ronne Assis"
let nome2 = ""
let pessoaDefault = {
    nome: "Ronne",
    idade: "30",
    trabalho: "Servidor Público"
}

let nomes = ["Ronne Assis", "Yan Gabriel", "Rosane Negreiros"]

let pessoas = [
    {
        nome: "Ronne",
        idade: "30",
        trabalho: "Servidor Público"
    },
    {
        nome: "Rosane Negreiros",
        idade: "31",
        trabalho: "Assistente Administrativo"
    }
]

function alterarNome() {
    nome2 = "Yan Gabriel"
    console.log("Nome alterado:")
    console.log(nome2)
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome
    console.log("Nome alterado, recebendo novo nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:")
    console.log(pessoa.nome)

    console.log("idade:")
    console.log(pessoa.idade)

    console.log("Trabalho:")
    console.log(pessoa.trabalho)
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("----------IMPRIMIR PESSOAS----------I")
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("idade:")
        console.log(item.idade)

        console.log("Trabalho:")
        console.log(item.trabalho)
    })
}

imprimirPessoas();

imprimirPessoa({
    nome: "Yan Gabriel",
    idade: "7",
    trabalho: "Estudante"
})

imprimirPessoas();

//recebeEalteraNome("Assis");
//recebeEalteraNome("Um Dois Três de Oliveira Quatro");

//alterarNome();