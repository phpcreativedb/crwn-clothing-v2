import {ReactComponent as ShoopingIcon} from '../../assets/shopping-bag.svg';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart/cart.context';


import './cart-icon.styles.scss';

const CartIcon = () =>{
    const {isCartOpen,setIsCartOpen} = useContext(CartContext);
    const togglecart = ()=>setIsCartOpen(!isCartOpen);
    return( 
        <div className='cart-icon-container' onClick={togglecart}>
            <ShoopingIcon className='shopping-icon' />
            <span className='item-count'>10</span>
        </div>
    )

}
export default CartIcon;
