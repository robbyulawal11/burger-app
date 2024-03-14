import { Link } from "react-router-dom";

const DetailOrder = () => {
    return ( 
        <div>
            <div className="bg-success text-white text-center p-4">
                <h1>Detail Order</h1>
            </div>
            <div className="container m-5 d-flex flex-column align-items-center">
                <h1>Your order has been received</h1>
                <div className="bg-success rounded text-white p-3 m-3">
                    Total Harga: Rp120.000
                </div>
                <Link to="/">
                    <button className="btn btn-warning w-100">Back to home</button>
                </Link>
            </div>
        </div>
     );
}
 
export default DetailOrder;