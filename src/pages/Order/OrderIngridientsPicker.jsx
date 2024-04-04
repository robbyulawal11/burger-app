/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";

const OrderIngridientsPicker = ({
    manageIngredients,
    isReachMax
}) => {
    const {allIngredients } = useSelector((state)=> state.burger);
    return ( 
        <section>
            {isReachMax && <div className="alert alert-danger text-center fw-bold" role="alert">You reach the maximal quantity of ingredients</div>}
            <div className="container d-flex justify-content-center">
                {allIngredients.map((item) => (
                    <button key={item?.id} 
                    className="mx-2 btn btn-warning"
                    disabled={isReachMax}
                    onClick={() => isReachMax ? null : manageIngredients(item?.id)}>
                        <h4>{item?.name}</h4>
                        <p>Rp{item?.price}</p>
                    </button>
                ))}
            </div>
        </section>
     );
}
 
export default OrderIngridientsPicker;