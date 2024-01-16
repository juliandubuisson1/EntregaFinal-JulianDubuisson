const OzSelector = ({setOz}) => {

    const handleSelect = (event) => {
        setOz(event.target.value)
    }

    return (
        <select onChange={handleSelect} className="border p-2">
            <option value="ochoOz">8 Oz</option>
            <option value="diezOz">10 Oz</option>
            <option value="doceOz">12 Oz</option>
            <option value="catorceOz">14 Oz</option>
            <option value="dieciseisOz">16 Oz</option>
        </select>
    )
}

export default OzSelector