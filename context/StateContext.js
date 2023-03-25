import product from '../mernkart/schemas/product';
import React, {createContext,useContext,useState,useEffect} from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext=({children})=>{
 const [showCart, setShowCart] = useState(false);
 const [cartItems, setCartItems] = useState([]);    
 const [totalPrice, setTotalPrice] = useState(0);
 const [totalQuantities, setTotalQuantities] = useState(0);
 const [qty, setQty] = useState(1);

 let foundProduct;
 let index;

 //Creating functionalities for the page
 const incQty=()=>{
    setQty((prevQty)=>prevQty + 1);
 }
 const decQty=()=>{
    setQty((prevQty)=>
    {
        if(prevQty == 1)
        return 1;
        else
        return prevQty - 1
    });
 }

 const onAdd =(product,quantity)=>{

    const checkProductInCaRT = cartItems.find((item)=>item._id === product._id);

    setTotalPrice((prevTotalPrice)=>prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities + quantity);

    if(checkProductInCaRT){

        const updatedCartItems=cartItems.map((cartProduct)=>{
            if(cartProduct._id === product._id)
            return{
                ...cartProduct,
                quantity:cartProduct.quantity + quantity
            }
        })
        setCartItems(updatedCartItems);
    }else{

        product.quantity = quantity;
        setCartItems([...cartItems,{...product}])
    }
    toast.success(`${qty} ${product.name} added to cart XD`);
 }


const toggleCartItemQuantity =(id,value)=>{
    foundProduct = cartItems.find((item)=> item._id === id)
    index=cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item)=>item._id !== id);

    if(value==="inc"){
        setCartItems([...newCartItems,{...foundProduct, quantity:foundProduct.quantity+1}]);
        setTotalPrice((prevTotalPrice)=>prevTotalPrice + foundProduct.price);
        setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities + 1);
    }
    else if(value === "dec"){
        if(foundProduct.quantity > 1){
            setCartItems([...newCartItems,{...foundProduct, quantity:foundProduct.quantity-1}]);
            setTotalPrice((prevTotalPrice)=>prevTotalPrice - foundProduct.price);
            setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities - 1);
        }
        
    }
}

const onRemove = (product) => {
    foundProduct = cartItems.find((item)=> item._id === product._id)
    const newCartItems = cartItems.filter((item)=>item._id !== product._id);
    
    setTotalPrice((prevTotalPrice)=>prevTotalPrice - foundProduct.price * foundProduct.quantities);
    setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities - foundProduct.quantities);
    setCartItems(newCartItems)
}



 //Context Provider will allow us to access all these values from anywhere and in every component
 return(
    <Context.Provider
    value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities
    }}
    >
        {children}
    </Context.Provider>
 )
}

export const useStateContext=()=>useContext(Context);
