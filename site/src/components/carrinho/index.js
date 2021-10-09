import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { Container } from './styled'
import Cookie from 'js-cookie'
import CarrinhoItem from './carrinhoitem'

export default function App(){
    const [produto, setProdutos] = useState([]);

    useEffect(CarrinhoItem, [])

    function carregarCarrinho(){
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho !== undefined ? JSON.parse(carrinho) : []

        setProdutos(carrinho);
    }

    function descarregarCarrinho(){
        let carrinho = produtos.filter(item => item.id !== id);
        Cookie.set('carrinho', JSON.stringify(carrinho))

        setProdutos([...carrinho]);
    }

    function altProduto(){
        let prodAlterado = produto.filter
    }
}

