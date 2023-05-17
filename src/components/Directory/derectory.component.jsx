import './derectory.styles.scss'
import CategoryItem from '../category-item/category-item.component.jsx'
const Derectory = (props) =>{
    console.log(props);
    const {categories} = props;
    return (
        <div className='directory-container'>
            {
                categories.map((category)=>{
                    return <CategoryItem category={category} key={category.id}/>
                })
            } 
        </div>
    );
}
export default Derectory;