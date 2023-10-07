import { Data } from "../model/data.interface";
import serviceEstoque from "../service/serviceEstoque";


export async function adicionarProduto(data: Data, dados:Data[]){
    try{
        await serviceEstoque.criar(data, dados);
    }catch(error){
        console.log(error);
    }
}
export async function lerEstoque() {
    try{
        await serviceEstoque.ler();
    }catch(error){
        console.log(error);;
    }

}