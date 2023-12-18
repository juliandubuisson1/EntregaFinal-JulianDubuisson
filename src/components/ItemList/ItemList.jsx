import ItemCard from "../ItemCard/ItemCard"

const ItemList = ({productos}) => {
    
    return (
        <section className="container m-auto mt-8">
            <h2 className="container m-auto mt-8 text-4xl italic">Productos</h2>

            <hr className="mb-2 h-3"/>

            <div className="grid grid-rows-4 grid-cols-3 flex flex-wrap justify-start gap-10 items-center">
                {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
            </div>
        </section>

    );
};

export default ItemList;