import { useState } from "react";

function Contador(){
    const [contador, setContador] = useState(1)
    function adicionarCont(){
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarCont}>Adicionar</button>
        </div>
    )
}

export default Contador;