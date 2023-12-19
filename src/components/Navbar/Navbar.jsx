import logo from "../../assets/mancuerna.svg"
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

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
    label: "Funcional",
    href: "/productos/funcional/bandas",
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
return (
    <header className="bg-teal-700 ">
        <div className="container m-auto py-6 flex justify-between items-center">

            <img className="w-28" src={logo} alt="Logo" />
            <nav className="flex gap-4">
            {links.map((link) => (
                <Link
                key={link.href}
                to={link.href}
                className="text-stone-950 hover:text-white text-2xl uppercase font-semibold"
                >
                {link.label}
                </Link>
            ))}
            </nav>

            <CartWidget/>
        </div>

        <img src="https://images.unsplash.com/photo-1597075941308-6215ddcf6c39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagen header" />
    </header>
);
};

export default Navbar;
