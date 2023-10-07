import readCSV from "../model/readCSV";
import writeCSV from "../model/writeCSV";
import { Data } from "../model/data.interface";
import { read } from "fs";


class serviceEstoque{

    async criar(data: Data, dados:Data[]){

        if(data.id<0){
            throw new Error("O id não pode ser negativo.");

        }
        writeCSV('./model/estoque.csv', [data]);

    }
    async ler(){
        const data = await readCSV('./model/estoque.csv')
        console.log(data)
    }
}


export default new serviceEstoque()