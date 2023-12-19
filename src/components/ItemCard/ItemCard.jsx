import {Link} from "react-router-dom";
import Boton from "../Boton/Boton";

const ItemCard = ({item}) => {

    return (
        <article className="w-80 border-2 border-teal-600 p-3">
            <img src={item.img} alt={item.name} />
            <h3 className="text-2xl font-semibold mt-2 text-center italic">{item.name}</h3>
            <hr />
            <p className="text-xl font-bold">Precio: ${item.price}</p>

            <Boton className="text-black">
                <Link className="rounded-3xl bg-teal-600 w-20" to={`/item/${item.id}`}>Ver más</Link>
            </Boton>
        </article>
    )
}

export default ItemCard;