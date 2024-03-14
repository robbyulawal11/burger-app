import {Link} from "react-router-dom";
import './home.css';
import Button from 'react-bootstrap/Button';

const Home = () => {
    const listCTA = [
        {
            label: "Order",
            link:"/order",
            variant: "success"
        },
        {
            label: "About Us",
            link:"/about",
            variant: "outline-success"
        },
        {
            label: "Feedback",
            link:"/feedback",
            variant: "outline-success"
        }
    ]
    return ( 
        <div>
            <section className="mb-4">
                <div className="text-center text-white bg-success py-4">
                    <h1>Welcome To Burger App</h1>
                    <p>Where you will eat virtual burger!</p>
                </div>
            </section>
            <section className="d-flex flex-column justify-content-center align-items-center">
                <div className="row gap-3 text-white d-flex flex-column justify-content-center">
                {listCTA.map((item, i) => (
                    <Link key={i} to={item?.link}>
                        <Button className='col-12' variant={item?.variant}>{item?.label}</Button>
                    </Link>
                ) )
                }
                </div>
            </section>
        </div>
     );
}
 
export default Home;