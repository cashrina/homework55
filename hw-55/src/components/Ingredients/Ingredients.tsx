import '../../App.css';
import meatImage from '../../assets/meat.png';
import cheeseImage from '../../assets/cheese.png';
import saladImage from '../../assets/salad.png';
import baconImage from '../../assets/bacan.png';
import {useState} from "react";
import IngredientsButton from "../IngredientsButton/IngredientsButton.tsx";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient.tsx";


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

    const addIngredient = (name: string) => {
        setIngredients((prevState) => {
            return prevState.map((ingredient) => {
                if (ingredient.name === name) {
                return {...ingredient, count: ingredient.count + 1};
            }
            return ingredient;
            });
        });
    };

    const getCount = (value: string) => {
        const count = ingredients.filter(item => item.name === value);
        return count[0].count;
    };
    const removeIngredient = (deleteIngredient:string) => {
        setIngredients((prevState) => {
            return prevState.map((ingredient) => {
                if (ingredient.name === deleteIngredient) {
                    if (ingredient.count > 0) {
                        return {...ingredient, count: ingredient.count - 1};
                    }
                }
                return ingredient;
            });
        });
    };

    const getTotalPrise  = () => {
        let emptySum = 0;
        ingredients.forEach(item => {
            INGREDIENTS.forEach(info => {
                if (item.name === info.name) {
                    if (item.count > 0) {
                        emptySum += item.count * info.price;
                    }
                }
            });
        });
        return emptySum;
    };
    const total:number = 30 + getTotalPrise();

    return (
        <div className="container">
            <div className="ingredients">
                {INGREDIENTS.map((item,index) => (
                    <IngredientsButton key={index}
                                       ingredientName = {item.name}
                                       ingredientImage = {item.image}
                                       onAddIngredient = {() => addIngredient(item.name)}
                                       sumIngredients = {() => getCount(item.name)}
                                       onRemove={() => removeIngredient(item.name)}/>
                ))}
            </div>

            <div className="burgerIngredient">
                <div className="Burger">
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                    {ingredients.map(((createIngredient, index) => (
                        <BurgerIngredient key={index} name={createIngredient.name} count={createIngredient.count}/>
                    )))}
                    <div className="BreadBottom"></div>
                    <div className="price">Price: <p>{total}</p></div>
                </div>

            </div>
        </div>

    );
};
export default Ingredients;