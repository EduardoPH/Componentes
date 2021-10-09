import Cookie from 'js-cookie'
import { useState } from 'react';
import Contador from '../contador'
import { Container, img} from "./styled"

export default function App(props){
    const [produto, setProduto] = useState(props.info)

    function alterarQtd(qtd) {
        setProduto({...produto, qtd})
    }

    function remover() {
        props.Remove(produto.id);
    }

    return(
        <Container> 
            <div>
                <img className="capa" src={produto.imagem} alt="" />
                <Contador onChange={alterarQtd} value={produto.qtd} />
            </div>

            <div className="titulo"> 
                {produto.titulo} 
            </div>
        
            <div className="preco"> 
                <span>Preço unitário</span> <br /> 
                {produto.preco} 
            </div>

            <div className="qtd"> 
                <span>Qtd</span> <br /> 
                {produto.qtd} 
            </div>
        </Container>
    )
}