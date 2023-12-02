

const ItemList = ({productos}) => {
    
    return (
        <section className="container m-auto mt-8">
            <h2 className="text-4xl font-bold">Productos</h2>
            <hr />

                <div className="flex flex-wrap justify-start gap-10
                items-center">       
                    {productos.map ((item)=>(
                        
                        <article key={item.id} className="w-80">
                            <img src={item.img} alt={item.name} />
                            <h3 className="text-2x1 font-semibold">{item.name}</h3>
                            <hr />
                            <p>{item.description}</p>
                            <p className="text-x1 font-bold">${item.price}</p>
                        </article>
                ))}
                </div>
        </section>
    );
}

export default ItemList;