import React from "react";
import stockImage from '../../assets/stock.png';

interface IngredientsButtonProps extends React.PropsWithChildren {
    ingredientImage: string,
    ingredientName: string,
    onAddIngredient: React.MouseEventHandler<HTMLButtonElement>,
    sumIngredients: () => number,
    onRemove: React.MouseEventHandler<HTMLButtonElement>;
}

const IngredientsButton: React.FC<IngredientsButtonProps>= ({ingredientImage, ingredientName, onAddIngredient, sumIngredients, onRemove}) => {

    const count = sumIngredients();

    return (
        <div className="ingredient-btn">
            <img alt={'image'} key={`${ingredientName}-image`} src={ingredientImage} style={{width: '80px', height: '80px'}} className="ingredients__image" />
            <button className="ingredients__button" onClick={onAddIngredient}>{ingredientName}</button>
            <p>x {count}</p>
            <button onClick={onRemove} className="stock"><img src={stockImage} alt="Stock Image" style={{width: '70px', height: '70px'}}/></button>
        </div>
    );
};

export default IngredientsButton;