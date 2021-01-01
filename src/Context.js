import React, {useState, useEffect} from "react"
import ProductsDB from "./Database/products"
import UsersDB from "./Database/users"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allProducts, setAllProducts] = useState([])
    const [userData, setUserData] = useState(UsersDB[1])
    const [cartItems, setCartItems] = useState([])
    const [faveItems, setFaveItems] = useState([])
    const [sidebarState, setSidebarState] = useState('translateX(-30rem)')

    const userCart = userData.cart;
    const userFave = userData.faveList;

    useEffect(() => {
        setAllProducts(ProductsDB);
        setUserData(UsersDB[1]);
        setCartItems( prevItems => [ ...prevItems, userCart.map((item) => (item))]);
        setFaveItems( prevItems => [ ...prevItems, userFave.map((item) => (item))])
    }, [])


    return (
        <Context.Provider value={{
            allProducts,
            cartItems,
            faveItems,
            userData,
            sidebarState,
            setSidebarState,
            setCartItems,
            setFaveItems,
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}