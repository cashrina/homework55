import React from "react";

interface IngredientsButtonProps {
    ingredientImage: string,
    ingredientName: string,
    onAddIngredient: React.MouseEventHandler<HTMLButtonElement>,
    sumIngredients: React.MouseEventHandler<HTMLButtonElement>,
}

const IngredientsButton: React.FC<IngredientsButtonProps>= ({ingredientImage, ingredientName, onAddIngredient, sumIngredients}) => {
    return (
        <div className="ingredients">
            <img className="ingredients__img" src={ingredientImage} style={{width: '100px', height: '100px'}} />
            <button className="ingredients__button" onClick={onAddIngredient}>{ingredientName}</button>
            <p onSum={sumIngredients}>x </p>
            <button>delete</button>
        </div>
    );
};

export default IngredientsButton;