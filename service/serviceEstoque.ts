import readCSV from "../model/readCSV";
import writeCSV from "../model/writeCSV";
import { Data } from "../model/data.interface";
import fs from 'fs';

const filePath = './model/estoque.csv'

class serviceEstoque{
    async criar(data: Data){
        console.log(console.log("Adicionando produto"));
        if (!fs.existsSync(filePath))(
            fs.writeFile(filePath,'',(err) =>{
                if (err){
                    console.log('Ocorreu um erro ao criar o arquivo:',err)
                }
            })
        )
        var data2 : Data[] 
        data2 = await readCSV('./model/estoque.csv') 
        if (data.Peso<0){
            throw new Error ("O peso não pode ser negativo");
        }
        if (data.Qntd<=0){
            throw new Error ("A quantidade não pode ser negativa");
        }
        if (!isNaN(Number(data.Nome))){
            throw new Error ("O nome do produto deve ser uma palavra.");
        }
        if (isNaN(Number(data.Valor))){
            throw new Error ("O valor do produto deve ser um número.");
        }
        if (isNaN(Number((data.Peso)))){
            throw new Error ("O peso do produto deve ser um número")
        }
        if (isNaN(Number(data.Qntd))){
            throw new Error ("A quantidade de produtos deve ser um número.");
        }
        for(var i=0;i<data2.length;i++){
            if (Object.values(data2[i]).includes(data.Nome)){
                throw new Error("O nome não pode ser repetido");
            }
        }
        
        data2.push(data)
        writeCSV('./model/estoque.csv', data2);
    }

    async ler(){
        const data = await readCSV('./model/estoque.csv');
        console.log(data);
    }

    async remover(data : string){
        var data2 : Data[] ;
        data2 = await readCSV('./model/estoque.csv');
        if (!isNaN(Number(data))){
            throw new Error ('O nome do produto deve ser uma palavra')
        }
        for (var i=0; i<data2.length; i++){
            if (Object.values(data2[i]).includes(data)){
                data2.splice(i,1)
                writeCSV('./model/estoque.csv', data2);
                console.log('Produto removido com sucesso');
                break
            }else if (i == data2.length-1) {
                throw new Error('Digite um produto que existe no estoque')
            }
        }
    }
    
    async valorTotal(){
        var data : Data[];
        data = await readCSV('./model/estoque.csv');
        if (data.length === 0){
            return 0 
        }
        let total = 0;
        for(var i = 0; i<data.length; i++){
            if(!isNaN(Number(Object.values(data[i])[1]))){
                total += Number(Object.values(data[i])[1]);
            }
        }
        return total
    }
}


export default new serviceEstoque();