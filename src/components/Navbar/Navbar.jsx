import logo from '../../assets/shoe.svg'
import CartWidget from './CartWidget'
import NavLink from './NavLink'

export const Navbar = () =>{

    return (
            
            <header className="bg-teal-700">
                <div className="container m-auto py-6 flex justify-between items-center">
                    
                    <img className= "w-20" 
                    src={logo} alt="Logo"/>
                
                    <nav className="flex gap-4">
                        <NavLink href={"#"} text={"Inicio"}/>
                        <NavLink href={"#"} text={"Sobre Nosotros"}/>
                        <NavLink href={"#"} text={"Contacto"}/>
                    </nav>

                    <CartWidget />
                </div>
            </header>
    )

} 
