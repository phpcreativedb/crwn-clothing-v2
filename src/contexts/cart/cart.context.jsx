import { createContext , useState,useEffect} from "react";


const addCartItem = (cartItems,productToAdd) =>{
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
    return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems,ProductToDelete)=>{
    if(ProductToDelete.quantity<=1){
        return cartItems.filter((item)=>item.id!=ProductToDelete.id);
    }else{
        return cartItems.map((cartItem) =>
            cartItem.id === ProductToDelete.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
    }
}

const clearCartItem = (cartItems,cartToDelete)=>{
    return cartItems.filter((item)=>item.id!=cartToDelete.id);
}

export const CartContext = createContext({
    isCartOpen:null,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    deleteItemToCart:()=>{},
    clearItemFromCart:()=>{},
    total:0
});

export const CartProvider = ({children}) =>{
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [total,setTotal] = useState(0);
    
    useEffect(()=>{
        const totalPrice =  cartItems.reduce((acumulator,item)=>acumulator+(item.price*item.quantity),0);
         setTotal(totalPrice)
    },[cartItems]);

    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd));
    }

    const deleteItemToCart = (productToDelete)=>{
        setCartItems(removeCartItem(cartItems,productToDelete));
    }

    const clearItemFromCart = (cartToDelete)=>{
        setCartItems(clearCartItem(cartItems,cartToDelete))
    }
    const value = {isCartOpen,setIsCartOpen,addItemToCart,deleteItemToCart,cartItems,clearItemFromCart,total};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}