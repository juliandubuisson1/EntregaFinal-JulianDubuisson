import { useEffect, useState } from "react";
import { pedirDatos } from "../../utils/utils";

const whitProductsData = (Component) =>{

    const WhitProductsData = () => {
        const [productos, setProductos] = useState ([])
        const [loading, setLoading] = useState(true)

        useEffect (() => {

            setLoading(true)
            pedirDatos()
                .then((data) => {
                    setProductos(data)
                })
                .finally(() =>[
                    setLoading(false)
                ])
        }, [])

        return <Component productos={productos} loading={loading}/>
    }

    return WhitProductsData
}

export default whitProductsData