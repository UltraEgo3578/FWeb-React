import { useState } from "react";

function Contador(){
    const [contador, setContador] = useState(1)
    function adicionarCont(){
        setContador(contador + 1);
    }
    function diminuirCont(){
        setContador(contador - 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button id="plus" onClick={adicionarCont}>Adicionar</button>
            <button id="minus" onClick={diminuirCont}>Diminuir</button>
        </div>
    )
}

export default Contador;