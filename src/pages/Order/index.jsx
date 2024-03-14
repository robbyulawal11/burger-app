import { useEffect, useState } from "react";
import OrderBurgerDisplay from "./OrderBurgerDisplay";
import OrderHeader from "./OrderHeader";
import OrderIngridientsPicker from "./OrderIngridientsPicker";
import { useLocation } from "react-router-dom";
import DetailOrder from "./detailOrder";

const allIngredients = [
    {
        id: "cheese",
        name: "Cheese",
        price: 5000
    },
    {
        id: "lettuce",
        name: "Lettuce",
        price: 1000
    },
    {
        id: "tomato",
        name: "Tomato",
        price: 2500
    },
    {
        id: "pickles",
        name: "Pickles",
        price: 2000
    },
    {
        id: "meat",
        name: "Meat",
        price: 14000
    },
    {
        id: "mayo",
        name: "Mayo",
        price: 4000
    },
    {
        id: "sauce",
        name: "Sauce",
        price: 4000
    }
];

const Order = () => {
    const [selectedIngredients, selectedIngredientsSet] = useState([]);
    const [isReachMax, isReachMaxSet] = useState(false);
    const [isDone, isDoneSet] = useState(false);

    const {search} = useLocation()

    const manageIngredients = (type, id, idx) => {
        if (type === "add") {
            selectedIngredientsSet((prev) => [...prev, id]);
        }
        if (type === "remove") {
            selectedIngredientsSet((prev) => {
              const filtered = [...prev].filter((_, index) => index !== idx);
              return filtered;
            });
        }
    }

    useEffect(() => {
        if(selectedIngredients.length >= 10){
            isReachMaxSet(true);
        }
    }, [selectedIngredients])

    useEffect(() => {
        if(new URLSearchParams(search).get("done") === "true") {
          isDoneSet(true);
        }
      },[search])
    
      if(isDone) return (
        <DetailOrder/>
      )

    return ( 
        <div>
            <div className="bg-success text-white text-center p-4">
                <h1>Order</h1>
            </div>
            <div className="container">
                <OrderHeader
                allIngredients={allIngredients}
                selectedIngredients={selectedIngredients}
                onReset={() => {selectedIngredientsSet([]);
                isReachMaxSet(false);
                isDoneSet(false);}}
                />
                <OrderBurgerDisplay
                selectedIngredients={selectedIngredients}
                removeIngredient={(idx) => manageIngredients("remove", undefined, idx)}
                />
                <OrderIngridientsPicker 
                    allIngredients={allIngredients}
                    manageIngredients={(id) => manageIngredients("add", id)}
                    isReachMax={isReachMax}
                    />
            </div>
        </div>
     );
}
 
export default Order;