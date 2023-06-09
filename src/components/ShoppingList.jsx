import { useState } from "react"
import { plantList } from "../datas/plantList"
import PlantItem from "./PlantItem"
import Categories from "./Categories"
import '../styles/ShoppingList.css'

const ShoppingList = ({cart, updateCart}) => {
    const [activeCategory, setActiveCategory] = useState("")
    const categories = plantList.reduce(
        (acc, plant) => 
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
            []
    )

    const addToCart = (name, price) => {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )

            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    return (
        <div className="thg-shopping-list" >
            <Categories 
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />

            <ul className="thg-plant-list">
                {plantList.map(({id, cover, name, water, light, price, category}) => 
                    !activeCategory || activeCategory === category ? (
                        <div key={id} className="thg-plant-block">
                            <PlantItem
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                price={price}
                            />
                            <button 
                                onClick={() => addToCart(name, price)} 
                                className="thg-plant-add-button"
                            >Ajouter</button>
                        </div>
                    
                    ) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList