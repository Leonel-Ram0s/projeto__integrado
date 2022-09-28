/******************************************************************************
 * Objetivo: Fazer uma API de uma escola Chamada Lion School
 * 
 * autor: Leonel Pereira Ramos
 * Data: 15/09/2022
 * versão: 1.0
 ****************************************************************************/


// Importe da bibilioteca do express para criar a API
const express = require('express'); 

// Importa da bibliteca do cors para manipular as permissoes do protocolo http
const cors = require('cors');

// Importe da biblioteca do body-parser que irá manipular o corpo das requisicoes do protocolo http 
const bodyParser = require('body-parser');

//Import do arquivo de estados 
const { getMatricula, notasAlunos, getAlunos, getCursos, getAnoaluno, getStatus } = require('./modulo/function');
// Criar um objeto chamado app que será especialista nas funcoes do express 
const app = express(); 

app.use((request, response, next) => { 
    // PErmite especificar quem serao os IPs que podem acessar a API (* - significa todos) 
    response.header('Access-Control-Allow-Origin', '*'); 
    // Permite especificar quais serao os verbos (metodos) que a API ira reconhecer
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    
    // Estabelece qye as permissoes acima serao representadas pelo cors
    app.use(cors());

    next();


});

app.get('/curso/',cors(), async function(request, response, next){

    let cursoDisponiveis = getCursos()

    if (cursoDisponiveis) {
        response.status(200)
        response.json(cursoDisponiveis)
    }else {
        response.status(404)
    }
});

app.get('/aluno', cors(), async function(request, response, next){
    let aluno = getAlunos()
        if (aluno) {
            response.status(200)
            response.json(aluno)
        }else {
            response.status(404)
        }
});

app.get('/aluno/:ano', cors(), async function(request, response, next){

    let Conclusao =  request.params.ano
    let Ano = getAnoaluno(Conclusao)
        if (Ano) {
            response.status(200)
            response.json(Ano)
        }else {
            response.status(404)
        }
})

app.get('/status', cors(), async function(request, response, next){

    let status = request.params.status
    let situacao = getStatus(status)
    
        if (status) {
            response.status(200)
            response.json(situacao)
        }else {
            response.status(404)
        }
})

app.get('/aluno/:matricula', cors(), async function(request, response, next){
    let matriculaAluno = request.params.matricula
    let alunoMatricula = getMatricula(matriculaAluno)
        if(matriculaAluno){
            response.status(200)
            response.json(alunoMatricula)
        }else {
            response.status(404)
        }
});

app.get('/disciplina/aluno/:matricula', cors(), async function(request, response, next){
    let mediaAluno = request.params.matricula
    let alunoMedia = notasAlunos(mediaAluno)
        if(mediaAluno) {
            response.status(200)
            response.json(alunoMedia)
        }else {
            response.status(404)
        }
});

app.listen(8080, function () {
    console.log('Servidor aguardando requisicoes.')
});