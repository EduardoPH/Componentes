import { useState } from "react"
import { Container } from "./styled"

export default function App(props){
    const [quantidade, setQuantidade] = useState(props.value)

    function adicionar(){
        if(quantidade >= 10)
            return;
        setQuantidade(quantidade+1)
    }

    function subtrair(){
        if(quantidade === 0)
            return;
        setQuantidade(quantidade-1)
    }

    useEffect(() => {
        props.onChange(quantidade);
      }, [quantidade])

    return(
        <Container> 

            <div className="sub"> 
                -
            </div>

            <div className="valor"> 
                {quantidade}
            </div>

            <div className="add">
                +
            </div>
            
        </Container>
    )
}