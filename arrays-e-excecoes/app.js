try {
    const listaProdutosDisponiveis = [
        "Pão",
        "Leite",
        "Café",
        "Laranja",
        "Macarrao",
        "Sabonete",
        "Detergente"
    ]

    const listaArgumentos = process.argv.slice(2);

    const listaProdutosSolicitadosDisponiveis = listaProdutosDisponiveis.filter(produto => {
        return listaArgumentos.find(argumento => argumento === produto);
    });

    listaProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nos temos: ${produto}`));

    const listaProdutosSolicitadosNaoDisponiveis = listaArgumentos.filter(argumento => {
        return !listaProdutosSolicitadosDisponiveis.find(produto => produto === argumento);
    })

    listaProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produto nos não temos: ${argumento}`));

    listaProdutosDisponiveis.sort();
    listaProdutosDisponiveis.forEach(produto => console.log(`Este produto esta disponivel ${produto}`));
} catch (e) {
    console.log('Não foi possível executar pedido de compra')
}
