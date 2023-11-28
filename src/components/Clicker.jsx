//HOOK

import { useState } from "react" 

export const Clicker = () => {

    const [counter, setCounter] = useState(0)
    const[saludar, setSaludar] = useState (true)
    console.log(saludar);

    const incrementar = () =>{
        setCounter (counter + 1)
    }

    const restar = () => {
        if (counter > 0){
            setCounter (counter - 1)
        }
    } //NO DEJA QUE SE RESTE MENOS DE 0

    const cambiarSaludo = () => {
        setSaludar (!saludar)
    }

    return(
        <div>
            <button onClick={incrementar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <hr />
            <p>Clicks: {counter} </p>
            <hr/>
            <button onClick={cambiarSaludo}>Cambiar saludo</button>
            <p>
                {
                    saludar ? 'Hola Mundo' : 'Chau a todos'
                }
            </p>
        </div>
    )
}