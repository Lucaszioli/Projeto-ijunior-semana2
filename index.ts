import { adicionarProduto, removerProduto } from "./controller/controleEstoque";
import { Data } from "./model/data.interface";
import {escolha} from "./view/view";
import { lerEstoque } from "./controller/controleEstoque";
import {promptnome,promptvalor,promptpeso,promptqntd,} from './view/view'
import {promptremover} from './view/view'
const pergunta = require('prompt-sync')()


const action = pergunta(escolha)


if (action == 1){
    const nome = pergunta(promptnome);
    const valor =pergunta(promptvalor);
    const peso = pergunta(promptpeso);
    const qntd = pergunta(promptqntd);
    const dados = {
        
        Nome:nome,
        Valor:valor,
        Peso:peso,
        Qntd:qntd
    
    }as Data;
    
    adicionarProduto(dados);
}

if (action == 2){
    const remover = pergunta(promptremover)
    removerProduto(remover)
}

if (action == 3){
    lerEstoque()
}