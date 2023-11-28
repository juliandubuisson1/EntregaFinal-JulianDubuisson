const NavLink = ({href, text}) => {
    return (
        <a href="#" className="text-white text-xl font-bold" href={href}>
            {text}
        </a>
    )
}

export default NavLink;