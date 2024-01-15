import { useState, useEffect, useMemo } from "react"
import Boton from "./Boton"


export const Contador = () => {
    const [counter, setCounter] = useState(0)
    const [saludar, setSaludar] = useState(true)

    const incrementar = () => {
        setCounter( counter + 1 )
    }

    const restar = () => {
        if (counter > 0) {
            setCounter( counter - 1 )
        }
    }

    const cambiarSaludo = () => {
        setSaludar( !saludar )
    }
    

    useEffect(() => {
        console.log("Efecto de montaje")

        return () => {
            // * Efecto de limpieza
            console.log("Efecto de desmontaje")
        }
    }, []) // * Efecto de montaje

    useEffect(() => {
        console.log("Contador: ", counter)

        return () => {
            // Efecto de limpieza
            console.log("Contador en limpieza: ", counter)
            localStorage.setItem('last-value', counter)
        }
    }, [counter])

    const fecha = useMemo(() => new Date(), [saludar])

    return (
        <div>
            <p>fyh: {fecha.toLocaleString()}</p>
            
            <Boton onClick={incrementar}>Sumar 1</Boton>
            <Boton onClick={restar}>Restar 1</Boton>
            <hr/>
            <p>Clicks: {counter}</p>

            <hr/>

            <Boton onClick={cambiarSaludo}>Cambiar saludo</Boton>
            <p>{ saludar ? "Hola mundo" : "Chau a todos" }</p>


        </div>
    )
}