import {createContext, useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const isInCart = (id) =>{ //Función que verifica si un producto esta en el carrito.
        return cart.some(e => e.id === id);
    }
    const addItem = (item, quantity) => {//Función que añade un producto al carrito en caso de que este no se encuentre.
        if (isInCart(item.id)) {//En caso de existir, lo que hace es aumentar la cantidad de ese producto.
            let pos = cart.findIndex(e => e.id === item.id);
            cart[pos].quantity += quantity;
            setCart([...cart]);
        } else {//En caso de no existir, el producto se añade al carrito con las cantidades que el cliente elije.
            setCart([...cart, {...item, quantity:quantity}]);
        }
    }
    const removeItem = (id) =>{ //Función que elimina un item del carrito.
        const products = cart.filter(e => e.id !== id);
        setCart([...products]);
        toast.success('🐶 Tu producto ha sido eliminado!', {//Notificación que avisa que un producto ha sido eliminado al carrito.
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
    const clearCart = () =>{//Función que limpia todo el carrito.
        setCart([]);
    }
    const cartTotal = () =>{//Función que suma la cantidad de items en el carrito.
        return cart.reduce((total, item) => total += item.quantity,0);
    }
    const sumTotal = () =>{//Función que calcula el total a pagar con IVA incluido
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