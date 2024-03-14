import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const OrderHeader = ({
    allIngredients=[],
    selectedIngredients=[],
    onReset,
}) => {
    const isEmptySelectedIngredients = selectedIngredients.length === 0;
    
    const totalCost = () => {
        const filterBySelectedIngredients = selectedIngredients.map(
            (id) => allIngredients.find((item) => item?.id === id)?.price
          );    
          return `Rp${filterBySelectedIngredients.reduce((a,b) => a + b, 0)}`;
    }

    return ( 
        <div>
            <div className="d-flex justify-content-between m-5">
                <h3 className="fw-bold">Total Harga: {totalCost()}</h3>
                <div className="">
                    <Link to="/order?done=true" onClick={!isEmptySelectedIngredients? null : (e) => e.preventDefault()}>
                        <button disabled={isEmptySelectedIngredients} className="btn btn-success mx-3">Order</button>
                    </Link>
                    {!isEmptySelectedIngredients && (
                    <button className="btn btn-outline-danger"
                    onClick={onReset}>Reset</button>)}
                </div>
            </div>
        </div>
     );
}
 
export default OrderHeader;