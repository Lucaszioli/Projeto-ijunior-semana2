const prompts = require('prompt-sync')()

const escolha = prompts('1. Adicionar Item ao Inventário\n\
2. Remover Item do Inventário\n\
3. Listar Itens do Inventário\n\
4. Ver Valor Total do Inventário\n\
5. Ver Peso Total do Inventário\n\
6. Calcular Média de Valor dos Itens\n\
7. Calcular Média de Peso dos Itens\n\
8. Ver Quantidade Total de Itens no Inventário\n\
9. Ver Quantidade Total de Produtos no Inventário\n\ ')

export default escolha