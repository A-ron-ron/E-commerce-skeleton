import React, {useState, useEffect} from "react"
import ProductsDB from "./Database/products"
import UsersDB from "./Database/users"
import AboutDB from "./Database/about"
import ShippingPolDB from "./Database/ShippingPol"
import PrivacyDB from "./Database/privacy"
import ServerAPI from "./Database/serverAPI"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allProducts, setAllProducts] = useState([])
    const [userData, setUserData] = useState('')
    const [cartItems, setCartItems] = useState([])
    const [faveItems, setFaveItems] = useState([])
    const [sidebarState, setSidebarState] = useState('translateX(-30rem)')
    const [About, setAbout] = useState([]);
    const [ShippingPol, setShippingPol] = useState(ShippingPolDB);
    const [Privacy, setPrivacy] = useState(PrivacyDB)

    useEffect(() => {
        setAllProducts(ProductsDB);
        // setAllProducts(ServerAPI.READ/products/)
        setUserData('');
        setAbout(AboutDB);
        // setAbout(ServerAPI.READ(api/about/));
        setShippingPol(ShippingPolDB);
        // setShippingPol(ServerAPI.READ(api/ShippingPol/));
        setPrivacy(PrivacyDB);
        // setPrivacy(ServerAPI.READ(api/Privacy/));
        if (userData) {
        setCartItems( prevItems => [ ...prevItems, userData.cart.map((item) => (item))]);
        setFaveItems( prevItems => [ ...prevItems, userData.faveList.map((item) => (item))]);
        }

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
            setUserData,
            About,
            ShippingPol,
            Privacy
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}