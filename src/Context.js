import React, {useState, useEffect} from "react"
import ProductsDB from "./Database/products"
import UsersDB from "./Database/users"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allProducts, setAllProducts] = useState([])
    const [userData, setUserData] = useState('')
    const [cartItems, setCartItems] = useState([])
    const [faveItems, setFaveItems] = useState([])
    const [sidebarState, setSidebarState] = useState('translateX(-30rem)')

    useEffect(() => {
        setAllProducts(ProductsDB);
        setUserData(UsersDB[1]);
        setCartItems(userData.cart);
        setFaveItems(userData.faveList);
    }, [])


    return (
        <Context.Provider value={{
            allProducts,
            cartItems,
            faveItems,
            userData,
            sidebarState,
            setSidebarState,
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}