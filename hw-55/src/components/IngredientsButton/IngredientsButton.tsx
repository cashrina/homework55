import React from "react";

interface IngredientsButtonProps extends React.PropsWithChildren {
    ingredientImage: string,
    ingredientName: string,
    onAddIngredient: React.MouseEventHandler<HTMLButtonElement>,
    sumIngredients: () => number,
    onRemove: React.MouseEventHandler<HTMLButtonElement>;
}

const IngredientsButton: React.FC<IngredientsButtonProps>= ({ingredientImage, ingredientName, onAddIngredient, sumIngredients}) => {

    const count = sumIngredients();

    return (
        <div className="ingredient-btn">
            <img alt={'image'} key={`${ingredientName}-image`} src={ingredientImage} style={{width: '100px', height: '100px'}} />
            <button className="ingredients__button" onClick={onAddIngredient}>{ingredientName}</button>
            <p>x {count}</p>
            <button>delete</button>
        </div>
    );
};

export default IngredientsButton;