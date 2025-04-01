import React from 'react'
import Cart from "../Pages/Cart";

export default function Remove(id, setCartItems) {
    let storedCart = localStorage.getItem("addToCart");
    let listLocalStorage = storedCart ? JSON.parse(storedCart) : [];
    
    listLocalStorage = listLocalStorage.filter((prod, i) => {
        return (prod.id !== id)
    })
    localStorage.setItem("addToCart", JSON.stringify(listLocalStorage))

    setCartItems(listLocalStorage)

  return (
    <div>
        
    </div>
  )
}