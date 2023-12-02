import { useState, useEffect } from "react"
import { pedirDatos } from "../../utils/utils"
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(()=>{
        pedirDatos()
            .then((data)=>{
                setProductos(data)
            })
    }, [])

    return (
        <>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer

