import { useEffect, useState } from "react"
import logo from '../assets/logo.png'
import Banner from "./Banner"
import Cart from "./Cart"
import ShoppingList from "./ShoppingList"
import '../styles/Layout.css'
import '../styles/index.css'


function App() {
	const savedCart = localStorage.getItem("cart")
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart): [])
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart))
	}, [cart])

	return (
    <div>
      <Banner>
        <img src={logo} alt='The home garden' className='thg-logo' />
        <h1 className='thg-title'>The Home Garden</h1>
      </Banner>
      <div className='thg-layout-inner'>
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} updateCart={updateCart}/>
      </div>
    </div>
  )
}

export default App;