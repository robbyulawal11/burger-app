import './about.css';
import burgerImg from '../../assets/burger.jpg';

const About = () => {
    return ( 
        <div>
            <section>
                <div className='bg-success text-white text-center p-4'>
                    <h1>About Us</h1>
                </div>
            </section>
            <section className='d-flex justify-content-center'>
                <div className='container m-4 row'>
                    <div className='col-6 text-start d-flex flex-column justify-content-center'>
                        <h3>Vision?</h3>
                        <p>To become the top choice for gamers and culinary enthusiasts alike to explore and enjoy a creative and educational virtual burger-making experience</p>
                    </div>
                    <div className='col-6 img-fluid width=25 d-flex justify-content-center'>
                        <img src={burgerImg} alt="burger" />
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default About;