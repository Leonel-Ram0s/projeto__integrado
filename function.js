'use strict'

const { Console } = require("console")
const { NOMEM } = require("dns")
const { get } = require("https")
const { alunos } = require("./alunos")
const { cursos } = require("./cursos")


const getCursos = function () {
    let nomeCursos = []

    cursos.forEach(item => {
        nomeCursos.push(
            {
                nome: item.nome,
                sigla: item.sigla,
                carga: item.carga,
                icone: item.icone
            }
        )
    });

    return nomeCursos
}


const getMatricula = function (matriculaAluno) {

    let matricula = matriculaAluno
    let alunosLista = []
    let erro = true

    alunos.forEach(item => {
        if (item.matricula.indexOf(matricula) > -1) {
            alunosLista.push(
                {
                    disciplinas: alunosLista
                }
            )
            erro = false
        }
    })
    return alunos
}



const getAlunos = function (nomeStudant) {

    let Alunonome = nomeStudant
    let nomeAlunos = [];
    let erro = true;

    alunos.forEach(item => {
        nomeAlunos.push(
            {
                curso: item.curso,
                nome: item.nome,
                foto: item.foto,
                matricula: item.matricula,
                sexo: item.sexo
            }
        )
    });

    return nomeAlunos
}

const notasAlunos = function (MatriculaStudant) {

    let Alunonome = MatriculaStudant
    let nomeAlunos = [];
    let erro = true;

    alunos.forEach(item => {

        if (item.matricula.indexOf(Alunonome)) {


            item.curso.forEach(cursos => {

                cursos.disciplinas.forEach(disciplinasAluno => {
                    nomeAlunos.push(
                        {
                            nome: disciplinasAluno.nome,
                            media: disciplinasAluno.media,
                            status: disciplinasAluno.status
                        }
                    )


                }
                )

            })

        }

    });
    return nomeAlunos
}

const getAnoaluno = function (alunoAno) {
    let Ano = alunoAno
    let listaAno = []
    let erro = true;

    alunos.forEach(item => {
        item.curso.forEach(concItem => {
            if (concItem.conclusao.indexOf(Ano) > -1) {
                listaAno.push(
                    {
                        conclusao: concItem.conclusao,
                        nome: item.nome,
                        status: item.status,
                        foto: item.foto,
                        matricula: item.matricula,
                        sexo: item.sexo
                    }
                )
        }
    })
})
    return listaAno
}

const getStatus = function (statusAluno) {
    let status = statusAluno
    let statusLista = []
    let erro = true; 

    alunos.forEach(item => {
        if (item.status.indexOf(status) > -1) {
            statusLista.push(
                {
                    status: item.status,
                    nome: item.nome,
                    status: item.status,
                    foto: item.foto,
                    matricula: item.matricula,
                    sexo: item.sexo

                }
            )
        }
    })
}

module.exports = {
    getCursos,
    getAlunos,
    getMatricula,
    notasAlunos,
    getAnoaluno,
    getStatus
}
console.log(getCursos())