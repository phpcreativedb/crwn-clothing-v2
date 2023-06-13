import { useContext } from 'react';

import Button from '../components/buttons/buttons.component'
import { CartContext } from '../contexts/cart/cart.context';

import './product-card.styles.scss';
const ProductCard = ({product}) =>{
    const {addItemToCart} = useContext(CartContext);
    const {imageUrl,name,price} = product;

    const addProductToCard =()=>{
        addItemToCart(product)
    }

    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType="inverted" onClick={addProductToCard}>Add to cart</Button>
        </div>
    )
}

export default ProductCard;