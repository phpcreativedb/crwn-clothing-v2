import { useContext  } from "react";
import { ProductContext } from "../../contexts/product/product.context";
const Shop = () => {
    const {products} = useContext(ProductContext);
    return (
        <div>
            {
                products.map(({id,name})=>{
                   return( <div key={id}>
                        {name}
                    </div>)
                })
            }
        </div>
    );
}
export default Shop