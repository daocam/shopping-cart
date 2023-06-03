import { useEffect, useState } from "react"
import "../styles/Cart.css"

const Cart = ({cart, updateCart}) => {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price, 0
	)

    useEffect(() => {
        document.title = `THG - panier: ${total}$`
    }, [total])

    return isOpen ? (
        <div className="thg-cart">
            <button 
                className="thg-cart-toggle-button"
                onClick={() => setIsOpen(false)} 
            >Fermer</button>
            {cart.length> 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul  className="thg-cart-content">
                        {cart.map(({name, price, amount}, index) => (
                            <div key={`${name}-${index}`} >
                                {name} {price}$ x {amount}
                            </div>
                        ))}
                    </ul>
                    <h3>Total : {total}$</h3>
                    <button onClick={() => updateCart([])} className="thg-cart-toggle-button">Vider le panier</button>
                </div>
            ) : (
                <div className="thg-cart-msg">Votre panier est vide</div>        
            )}
        </div>
    ) : (
            <div className="thg-cart-closed" >
                <button 
                    className="thg-cart-toggle-button"
                    onClick={() => setIsOpen(true)} 
                >Ouvrir le panier</button>
            </div>
    )
}

export default Cart