import readCSV from "../model/readCSV";
import writeCSV from "../model/writeCSV";
import { Data } from "../model/data.interface";


class serviceEstoque{

    async criar(data: Data){

        if(data.id<0){
            throw new Error("O id não pode ser negativo.");

        }
        writeCSV('./model/estoque.csv', [data]);


    }
}


export default new serviceEstoque()