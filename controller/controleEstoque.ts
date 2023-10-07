import { Data } from "../model/data.interface";
import serviceEstoque from "../service/serviceEstoque";


export async function adicionarProduto(data: Data){
    try{
        await serviceEstoque.criar(data);
    }catch(error){
        console.log(error);
    }
}