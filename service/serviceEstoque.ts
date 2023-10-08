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
        if (data.Nome == ''){
            throw new Error ('É necessario um nome.');
        }
        if (data.Peso<0 || Number(data.Peso) == 0){
            throw new Error ("O peso não pode ser negativo ou nulo.");
        }
        
        if (data.Valor<0||Number(data.Valor) == 0){
            throw new Error ("O valor não pode ser negativo ou nulo.");
        }

        if (data.Qntd<=0 || Number(data.Qntd) == 0){
            throw new Error ("A quantidade não pode ser negativa ou nula.");
        }
        if (!Number.isInteger(Number(data.Qntd))){
            throw new Error('Número deve ser um inteiro.');
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
        if (data2.length == 0){
            writeCSV(filePath, [data]);
        }else{ 
            for(var i=0;i<data2.length;i++){
                if (data2[i].Nome == data.Nome && Number(data2[i].Existe) == 1){
                    throw new Error("O nome não pode ser repetido");
                }else if(data2[i].Nome == data.Nome && Number(data2[i].Existe) == 0){
                    data2[i].Valor = data.Valor
                    data2[i].Peso = data.Peso
                    data2[i].Qntd = data.Qntd
                    data2[i].Existe = 1
                    break
                }else if(i == data2.length-1){
                    data2.push(data)
                    break
                }
            }
            writeCSV('./model/estoque.csv', data2);
        }
        
    }

    async ler(){
        return await readCSV('./model/estoque.csv');
    }

    async remover(data : string){
        var data2 : Data[] ;
        data2 = await readCSV('./model/estoque.csv');
        if (!isNaN(Number(data))){
            throw new Error ('O nome do produto deve ser uma palavra')
        }
        for (var i=0; i<data2.length; i++){
            if (Object.values(data2[i]).includes(data)){
                data2[i].Existe = 0
                data2[i].Peso = 0
                data2[i].Valor = 0
                data2[i].Qntd = 0
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
                total += Number(Object.values(data[i])[1])*Number(data[i].Qntd);
            }
        }
        return total
    }

    async pesoTotal(){
        var data : Data[];
        data = await readCSV(filePath);
        if (data.length === 0){
            return 0
        }
        let total = 0;
        for(var i = 0; i<data.length; i++){
            if (!isNaN(Number (data[i].Peso))){
                total += Number(data[i].Peso)*Number(data[i].Qntd);
            }
        }
        return total
    }

    async mediaValor(){
        const data : Data[] = await this.ler()
        const valorTotal = await this.valorTotal()
        const qntd = await this.qntdItens()

        if (data.length === 0){
            return 0 
        }
            if(isNaN(valorTotal/qntd)){
                throw new Error('Não há itens no inventario');
            }else{
                return valorTotal/qntd;
            } 
}
    async mediaPeso(){
        const data:Data[] = await this.ler()
        if (data.length === 0){
            return 0
        }
        const pesoTotal = await this.pesoTotal()
        const qntd = await this.qntdItens()
        if(isNaN(pesoTotal/qntd)){
            throw new Error('Não há itens no estoque');
        }else{
            return(pesoTotal/qntd);
        }
    }    

    async qntdItens(){
        const data:Data[] = await this.ler()
        if (data.length === 0){
            return 0;
        }
        let total = 0
        for(var i = 0; i<data.length; i++){
            if(!isNaN(Number(data[i].Qntd))){
                total += Number(data[i].Qntd)
            }
        }
        return total
    }

    async qntdProdutos(){
        const data:Data[] = await this.ler()
        if (data.length === 0){
            return 0;
        }
        let total = 0
        for(var i = 0; i<data.length; i++){
            if(data[i].Existe == 1){
                total += 1
            }
        }
        return total;
    }
}


export default new serviceEstoque();