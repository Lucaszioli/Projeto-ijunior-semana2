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
        const ler = await serviceEstoque.ler();
        console.log(ler)
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

export async function calcularPesoTotal(){
    try{
        const valor = await serviceEstoque.pesoTotal()
        console.log(`O peso total do estoque é ${valor.toFixed(1)}Kg`)
    }catch(error){
        console.log(error);
    }
}

export async function calcularMediaValor(){
    try{
        const valormedio = await serviceEstoque.mediaValor();
        console.log(`A média de valor dos itens é de R$${valormedio.toFixed(2)}`);
    }catch(error){
        console.log(error);
    }
}

export async function calcularQntdItens(){
    try{
        const qntd = await serviceEstoque.qntdItens()
        console.log(`Tem ${qntd} itens no estoque`);
    }catch(error){
        console.log(error);
    }
}


