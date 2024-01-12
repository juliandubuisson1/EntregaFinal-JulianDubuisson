import logo from "../../assets/mancuerna.svg";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Boton from "../Boton/Boton";


const links = [
{
    label: "Inicio",
    href: "/",
},
{
    label: "Funcional",
    href: "/productos/funcional",
},
{
    label: "Boxeo",
    href: "/productos/boxeo",
},
{
    label: "Pilates",
    href: "/productos/pilates",
},

];

const Navbar = () => {
    const { user, logout } = useContext(UserContext)
    
        return (
        <header className="bg-purpura">
            <div className="container m-auto py-6 flex justify-between items-center">
            
            <img src={logo} alt="Logo" />
    
            <nav className="flex gap-4">
                {links.map((link) => (
    
                <NavLink
                    key={link.href}
                    to={link.href}
                    className={({ isActive }) => (
                    `text-lg uppercase font-semibold ${isActive ? "text-purple-400" : "text-white"}`
                    )}
                >
                    {link.label}
                </NavLink>
    
                ))}
    
                <CartWidget />
            </nav>
    
            </div>
    
            {user.logged && <div className="flex gap-4 items-center container m-auto">
            <p className="text-white">{user.email}</p>
            <Boton onClick={logout}>Cerrar sesión</Boton>
            </div>}
        </header>
        );
    };
    
    export default Navbar;
