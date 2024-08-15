import React, { useState, useCallback, useMemo } from "react";

function Items(){
    const [contador, setContador] = useState(0)
    const [items, setItems] = useState([
        {id:1, nome:'Produto A', preço:10},
        {id:2, nome:'Produto B', preço:20},
        {id:3, nome:'Produto C', preço:5},
        {id:4, nome:'Produto D', preço:15},
        {id:5, nome:'Produto E', preço:5},
        {id:6, nome:'Produto F', preço:34},
    ])
    const click = useCallback(() =>{setContador(contador + 1)}, [contador])
    const itemsFilter = useMemo(() =>{return items.filter(item=>item.preço>10)}, [items])
    return(
        <div>
            <p>{contador}</p>
            <button onClick={click}>Receba</button>
            <ul>
                {itemsFilter.map(item=>(<li key={item.id}>{item.nome}</li>))}
            </ul>
        </div>
    )
}
export default Items;