import React, {useState, useEffect} from "react"
import ProductsDB from "./database/products"
import UsersDB from "./database/users"
import AboutDB from "./database/about"
import ShippingPolDB from "./database/ShippingPol"
import PrivacyDB from "./database/privacy"
import ServerAPI from "./database/serverAPI"

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
    const [orderCur, setOrderCur] = useState([])
    const [orderHist, setOrderHist] = useState([])

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
            Privacy,
            orderCur,
            orderHist
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }