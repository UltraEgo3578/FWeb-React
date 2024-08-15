import { useState,useMemo } from "react";
import { Link } from "react-router-dom";

function Calculadora(){
    const[numero1,setnumero1] = useState(0)
    const[numero2,setnumero2] = useState(0)
    
    const soma = useMemo(() => {console.log('calculando a soma'); return numero1+numero2;},[numero1,numero2]);

    return (
        <div>
            <input type="number" value={numero1} onChange={(e)=>setnumero1(parseInt(e.target.value))}/>
            <input type="number" value={numero2} onChange={(e)=>setnumero2(parseInt(e.target.value))}/>
            <p>soma:{soma}</p>
            <Link to='/contador'>Pagina Contador</Link>
            <br></br>
            <Link to='/form'>Pagina Name Form</Link>
        </div>
    )
}
export default Calculadora;