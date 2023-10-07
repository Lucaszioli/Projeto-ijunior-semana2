import { Data } from "../model/data.interface";
import serviceEstoque from "../service/serviceEstoque";


export async function adicionarProduto(data: Data){
    try{
        await serviceEstoque.criar(data);
        console.log("Produto adicionado com sucesso");
    }catch(error){
        console.log(error);
    }
}
export async function removerProduto(data : string){
    try{
        await serviceEstoque.remover(data);
    }catch(error){
        console.log(error)
    }
}

export async function lerEstoque() {
    try{
        await serviceEstoque.ler();
    }catch(error){
        console.log(error);;
    }
}

export async function calcularValorTotal() {
    try{
        const valor = await serviceEstoque.valorTotal();
        console.log("O valor total do estoque é R$",valor.toFixed(2));
    }catch(error){
        console.log(error);
    }
}
