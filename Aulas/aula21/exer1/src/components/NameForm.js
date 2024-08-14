import { useState } from "react";

function Form(){
    const [nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState('')
    const mudaNome = (event) => {
        setNome(event.target.value);
    } 
    const clickEnter = (event) =>{
        event.preventDefault();
        setMensagem(`Bem vindo: ${nome} ` )
    }
    return (
        <div>
            <form onSubmit={clickEnter}>
            <h2>Olá, Digite seu nome</h2>
            <input type="text" value={nome} onChange={mudaNome}></input>
        </form>
        <button>Submit</button>{
        <p>{mensagem}</p>
}
        </div>
        
    )
}

export default Form;