import React from 'react';
import '../../App.css';

interface IngredientProps {
     name: string;
     count: number;
}

const BurgerIngredient: React.FC<IngredientProps> = ({name,count}) => {
    let burgerClass  = '';

    if (name === 'Meat'){
        burgerClass = 'Meat';
    } else if(name === 'Salad'){
        burgerClass = 'Salad'
    } else if(name === 'Cheese'){
        burgerClass = 'Cheese';
    } else {
        burgerClass = 'Bacon';
    }
    const div: React.ReactNode[] = [];

    if (count > 0) {
        for (let i = 0; i < count; i++) {
            const item = (<div className={burgerClass}></div>);
            div.push(item);
        }
    }
    return (div)
};

export default BurgerIngredient;