import "../styles/PlantItem.css"
import CareScale from "./CareScale"

const handleClick = (plantName) => {
    alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

const PlantItem = ({name, cover, price, light, water}) => {

    return(
        <li className="thg-plant-item" onClick={() => handleClick(name)} >
            <span className="thg-plant-item-price">{price}$</span>
            <img className="thg-plant-item-cover" src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem