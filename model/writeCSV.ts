import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import { Data } from './data.interface';

const writeCSV = async (filePath: string, data: Data[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'Nome', title: 'Nome' },
      { id: 'Valor', title: 'Valor' },
      {id: 'Peso', title: 'Peso'},
      {id: 'Qntd', title: 'Qntd'}
    ],
  });

  return csvWriter.writeRecords(data);
};

export default writeCSV