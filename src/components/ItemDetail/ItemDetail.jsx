
import Boton from "../Boton/Boton";



const ItemDetail = ({ item }) => {

return (
    <div className="container m-auto mt-8">
        <h3 className="text-2xl font-semibold">{item.name}</h3>
        <hr />
        <div className="flex items-center gap-8 pt-4">
            <img className="w-1/4" src={item.img} alt={item.name} />

            <div>
            <p className="text-center text-xl font-bold">{item.description}</p>
            <p className="text-center text-xl font-bold p-2 bg-teal-600 m-5">Precio: ${item.price}</p>
            </div>
        </div>

        <Boton className="bg-green-400">Agregar al carrito</Boton>
    </div>
);
}

export default ItemDetail;