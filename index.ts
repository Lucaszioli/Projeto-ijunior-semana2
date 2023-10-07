import { adicionarProduto } from "./controller/controleEstoque";
import { Data } from "./model/data.interface";
import {escolha,promptnome,promptvalor,promptpeso,promptqntd} from "./view/view";
import { lerEstoque } from "./controller/controleEstoque";


const action = escolha


if (action == 1){
    const nome = promptnome;
    const valor = promptvalor;
    const peso = promptpeso;
    const qntd = promptqntd;
    const dados = {
        
        Nome:nome,
        Valor:valor,
        Peso:peso,
        Qntd:qntd
    
    }as Data;
    
    adicionarProduto(dados);
}


if (action == 3){
    lerEstoque()
}