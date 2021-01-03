import React, {useState, useEffect} from "react"
import ProductsDB from "./Database/products"
import UsersDB from "./Database/users"
import AboutDB from "./Database/about"
import ShippingPolDB from "./Database/ShippingPol"
import PrivacyDB from "./Database/privacy"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allProducts, setAllProducts] = useState([])
    const [userData, setUserData] = useState(UsersDB[0])
    const [cartItems, setCartItems] = useState([])
    const [faveItems, setFaveItems] = useState([])
    const [sidebarState, setSidebarState] = useState('translateX(-30rem)')
    const [About, setAbout] = useState([]);
    const [ShippingPol, setShippingPol] = useState(ShippingPolDB);
    const [Privacy, setPrivacy] = useState(PrivacyDB)

    const userCart = userData.cart;
    const userFave = userData.faveList;

    useEffect(() => {
        setAllProducts(ProductsDB);
        setUserData(UsersDB[0]);
        setCartItems( prevItems => [ ...prevItems, userCart.map((item) => (item))]);
        setFaveItems( prevItems => [ ...prevItems, userFave.map((item) => (item))]);
        setAbout(AboutDB);
        setShippingPol(ShippingPolDB);
        setPrivacy(PrivacyDB);
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
            About,
            ShippingPol,
            Privacy
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}