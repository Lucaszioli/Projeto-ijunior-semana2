import { adicionarProduto } from "./controller/controleEstoque";
import { Data } from "./model/data.interface";
import escolha from "./view/view";
import { lerEstoque } from "./controller/controleEstoque";
var data : any = []
lerEstoque()
console.log("Adicionando produto");

const dados = {
    id:1,
    title:"bolo de morango",
    value: "10.00",
}as Data
adicionarProduto(dados,data);

console.log("Produto adicionado com sucesso")