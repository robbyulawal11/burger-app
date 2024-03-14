/* eslint-disable react/prop-types */
import './orderBurgerDisplay.css';
import {
    BreadBottom,
    BreadTop,
    Ingredient
} from "./ingredients";

const OrderBurgerDisplay = ({
    selectedIngredients = [],
    removeIngredient
}) => {

    return ( 
        <section>
            <div className='d-flex justify-content-center'>
                <div className="burgerContainer d-flex flex-column align-items-center row-gap-1 m-5 mw-250px">
                <BreadTop/>
                {selectedIngredients.reverse().map((id,idx) => (
                    <Ingredient key={idx} type={id} onClickX={() => removeIngredient(idx)} />
                ))}
                <BreadBottom/>
                </div>
            </div>
        </section>
     );
}
 
export default OrderBurgerDisplay;