import '../../App.css';
import meatImage from '../../assets/meat.png';
import cheeseImage from '../../assets/cheese.png';
import saladImage from '../../assets/salad.png';
import baconImage from '../../assets/bacan.png';
import React, {useState} from "react";
import IngredientsButton from "../IngredientsButton/IngredientsButton.tsx";


interface Ingredient {
    name: string;
    price: number;
    image: string;
}

interface IIngredient {
    name: string;
    count: number;
}

const Ingredients = () => {
    const [ingredients, setIngredients] = useState<IIngredient[]>([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0},
    ]);

    const INGREDIENTS: Ingredient[] = [
        {name: 'Meat', price: 80, image: meatImage},
        {name: 'Cheese', price: 50, image: cheeseImage},
        {name: 'Salad', price: 10, image: saladImage},
        {name: 'Bacon', price: 60, image: baconImage},
    ];

    const addIngredient = (event: React.MouseEvent<HTMLButtonElement>) => {

        setIngredients((prevState) => {
            return prevState.map((countin) => {
                return {
                    ...countin,
                    event.target.count: countin.count + 1,
                };
            });
        });
    };
    console.log(ingredients);


    return (
        <div className="container">
            {INGREDIENTS.map(item => (
                <div className="ingredient">
                    <IngredientsButton ingredientName = {item.name}
                                       ingredientImage = {item.image}
                                       onAddIngredient = {(event) => addIngredient(event)}
                                       sumIngredients = {addIngredient}/>

                </div>
            ))}
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                <div className="Salad"></div>
                <div className="Cheese"></div>
                <div className="Meat"></div>
                <div className="BreadBottom"></div>
                <div className="price">Price: <p>30</p></div>
            </div>
        </div>

    );
};

export default Ingredients;