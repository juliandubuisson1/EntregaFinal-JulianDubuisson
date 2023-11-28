export const Productos = ({producto, precio}) => {

    return (
        <div className="cards">
            <h1>Producto: {producto} </h1> 
            <p>Precio: ${precio}</p>
        </div>
    )
}