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
    href: "/producto/mancuernas",
},
{
    label: "Cajon",
    href: "/producto/cajon",
},
{
    label: "Barras",
    href: "/producto/barras",
},
{
    label: "Kettblebells",
    href: "/producto/kettlebells",
},
{
    label: "Bandas",
    href: "/producto/bandas",
},
{
    label: "Colchoneta",
    href: "/producto/Colchoneta",
},
{
    label: "Disco",
    href: "/producto/disco",
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
