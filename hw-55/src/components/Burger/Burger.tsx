import React from "react";

interface BurgerProps {
    onPrise: () => number,
}
const Burger: React.FC<BurgerProps> = ({onPrise}) => {
    const total:number = 30 + onPrise();
    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            <div className="Salad"></div>
            <div className="Cheese"></div>
            <div className="Meat"></div>
            <div className="BreadBottom"></div>
            <div className="price">Price: <p>{total}</p></div>
        </div>
    );
};

export default Burger;