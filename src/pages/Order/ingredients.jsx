/* eslint-disable react/prop-types */
import './orderBurgerDisplay.css';

const Cheese = () => (
    <div className="col-12 cheese text-center text-white rounded-pill">
    </div>
  );
  const Tomato = () => <div className="col-12 tomato text-center text-white rounded-pill" />;
  const Lettuce = () => <div className="col-12 lettuce text-center text-white rounded-pill" />;
  const Meat = () => <div className="col-12 meat text-center text-white rounded-pill" />;
  const Pickles = () => (
    <div className='col-12 d-flex gap-2 justify-content-center'>
        <div className='pickle rounded-pill'/>
        <div className='pickle rounded-pill'/>
    </div>
  );
  export const BreadTop = () => (
    <div className="col-12 breadTop" />
  );
  export const BreadBottom = () => (
    <div className="col-12 breadBottom" />
  );
  
  export const Ingredient = ({type, onClickX}) => (
    <div className="position-relative">
      <button onClick={onClickX} className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2 d-flex justify-content-center items-center text-white cursor-pointer btn-close opacity-0">
      </button>
      {type === "cheese" && <Cheese />}
      {type === "meat" && <Meat />}
      {type === "lettuce" && <Lettuce />}
      {type === "tomato" && <Tomato />}
      {type === "pickles" && <Pickles />}
    </div>
  );