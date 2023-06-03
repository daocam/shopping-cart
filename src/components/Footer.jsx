import { useState } from "react";
import "../styles/Footer.css"

const Footer = () => {
    const [inputValue, setInputValue] = useState("")

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleBlur = () => {
        if (!inputValue.includes("@")) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
        }
    }

    return (
        <footer className="thg-footer">
            <div className="thg-footer-elem">
                Pour les accros de plantes 🌿🌱🌵 !
            </div>
            <div className="thg-footer-elem">Laissez-nous votre courriel :</div>
            <input 
                placeholder="Entrez votre courriel"
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
        </footer>
    )
}

export default Footer