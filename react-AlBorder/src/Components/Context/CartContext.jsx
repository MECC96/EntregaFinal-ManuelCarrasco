import {createContext, useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const isInCart = (id) =>{
        return cart.some(e => e.id === id);
    }
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(e => e.id === item.id);
            cart[pos].quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity:quantity}]);
        }
    }
    const removeItem = (id) =>{
        const products = cart.filter(e => e.id !== id);
        setCart([...products]);
        toast.success('🐶 Tu producto ha sido eliminado!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    const clearCart = () =>{
        setCart([]);
    }
    const cartTotal = () =>{
        return cart.reduce((total, item) => total += item.quantity,0);
    }
    const sumTotal = () =>{
        const IVA = 1.21;
        return cart.reduce((total, item) => total += item.quantity * item.price,0) * IVA;
    }
    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, cartTotal, sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider;