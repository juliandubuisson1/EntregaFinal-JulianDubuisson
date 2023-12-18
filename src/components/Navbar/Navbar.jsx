import logo from "../../assets/shoe.svg"
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const links = [
{
    label: "Inicio",
    href: "/",
},
{
    label: "Mancuernas",
    href: "/productos/mancuernas",
},
{
    label: "Cajon",
    href: "/productos/cajon",
},
{
    label: "Barras",
    href: "/productos/barras",
},
{
    label: "Kettlebells",
    href: "/productos/kettlebells",
},
{
    label: "Bandas",
    href: "/productos/bandas",
},
{
    label: "Colchoneta",
    href: "/productos/colchoneta",
},
{
    label: "Disco",
    href: "/productos/disco",
},

];

const Navbar = () => {
return (
    <header className="bg-teal-700 ">
        <div className="container m-auto py-6 flex justify-between items-center">

            <img className="w-20" src={logo} alt="Logo" />
            <nav className="flex gap-4">
            {links.map((link) => (
                <Link
                key={link.href}
                to={link.href}
                className="text-stone-950 hover:text-white text-lg uppercase font-semibold"
                >
                {link.label}
                </Link>
            ))}
            </nav>

            <CartWidget/>
        </div>
    </header>
);
};

export default Navbar;
