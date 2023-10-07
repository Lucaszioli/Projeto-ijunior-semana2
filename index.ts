import { adicionarProduto, calcularPesoTotal, calcularValorTotal, removerProduto } from "./controller/controleEstoque";
import { Data } from "./model/data.interface";
import {escolha} from "./view/view";
import { lerEstoque } from "./controller/controleEstoque";
import {promptnome,promptvalor,promptpeso,promptqntd,} from './view/view'
import {promptremover} from './view/view'
const pergunta = require('prompt-sync')()

var continuar = 1
async function main() {
    
    while (continuar == 1){
    
        const action = pergunta(escolha)
        switch(action){
            case '0':
                continuar = 0
                break
        
            case '1':
                const nome = pergunta(promptnome);
                const valor =pergunta(promptvalor);
                const peso = pergunta(promptpeso);
                const qntd = pergunta(promptqntd);
                const dados = {
                    
                    Nome:nome,
                    Valor:valor,
                    Peso:peso,
                    Qntd:qntd,
                    Existe: 1
                
                }as Data;
                
                await adicionarProduto(dados);
                break;

            case '2':
                const remover = pergunta(promptremover);
                await removerProduto(remover);
                break;
            
            case '3':
                await lerEstoque();
                break;
            case '4':
                await calcularValorTotal();
                break;
            case '5':
                await calcularPesoTotal();
                break
            default:
                console.log('Opção invalida')
        }    
    }
}

main();