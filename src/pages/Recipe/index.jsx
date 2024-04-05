/* eslint-disable react/prop-types */
"use client";

import { useEffect, useState } from "react";
import { useFetch } from "../../utils/useFetch";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { listOfAllRecipeSet } from "../../lib/store/slice/recipe.slice";

const Recipe = () => {
    const { listOfAllRecipe } = useSelector((state) => state.recipe);
    const [inputText, setInputText] = useState("");
    const [recipe, recipeSet] = useState("ayam");
    const {fetcher, data, isLoading} = useFetch();
    const [modalShow, setModalShow] = useState(false);

    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        setInputText(event.target.value);
      };
    
    const handleSubmit = (event) => {
    event.preventDefault();
    recipeSet(inputText);
    setInputText(""); 
    };

    useEffect(() => {
        fetcher(`/recipe?query=${recipe}`);
        dispatch(listOfAllRecipeSet(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [recipe]); 

    console.log(isLoading);
    console.log(listOfAllRecipe);

    function RecipeModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Detail Recipe
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>{props.recipe.title}</h4>
              <h6>Ingredient:</h6>
              <p>
              {props.recipe.ingredients}
              </p>
              <h6>Instructions:</h6>
              <p>
              {props.recipe.instructions}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    return ( 
        <div className="container">
            <h2>Find your recipe below</h2>
            <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                    <Form.Control
                    value={inputText} 
                    onChange={handleChange}
                    placeholder="Search The Recipe"
                    aria-label="Search The Recipe"
                    aria-describedby="basic-addon2"
                    />
                    <Button type="submit"  variant="outline-secondary" id="button-addon2">
                    Search
                    </Button>
                </InputGroup>
            </Form>
            <div className="row ">
                {listOfAllRecipe && listOfAllRecipe.map((recipe, i) => (
                    <div className="col-3" key={i}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{recipe.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{recipe.servings}</Card.Subtitle>
                            <Button variant="primary" onClick={() => setModalShow(true)}>
                                View The Recipe
                            </Button>
                        </Card.Body>
                        </Card>
                        <RecipeModal
                        recipe={recipe}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Recipe;