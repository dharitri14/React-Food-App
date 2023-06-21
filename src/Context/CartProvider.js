import { useReducer } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
    const defaultCart = {
        items: [],
        totalAmount: 0,
        showModal: false,
    }

    const cartReducer = ( ) => {

        };
    
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);

    const addItemHandler = (item) => {
        dispatchCart ({type: 'Add', item:item});
    }
    const removeItemHandler = (id) => {
        dispatchCart ({type: 'remove', id: id});
    }
    const openCartHandler = () => {

    }
    const closeCartHandler = () => {

    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        showModal: cartState.showModal,
        openCart: openCartHandler,
        closeCart: closeCartHandler, 
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};
export default CartProvider;