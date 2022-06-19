import { DishType } from "../types";

interface Props {
  dish: DishType;
  selectedDish: string | undefined;
  updateSelectedDish: (selectedDish: DishType) => void;
}

const Dish = ({ dish, selectedDish, updateSelectedDish }: Props) => {
  return (
    <button
      className={`dish ${dish.name === selectedDish ? "selected-dish" : ""}`}
      onClick={() => updateSelectedDish(dish)}
    >
      <img src={dish.image} alt={dish.name} className="dish-image" />
      <div className="dish-details">
        <div className="dish-name">{dish.name}</div>
        <div>Preparation Time: {dish.preparationTime}</div>
        <div className="extra-info">
          <div>Calories: {dish.calories}</div> |
          <div>Difficulty: {dish.difficulty}</div>
        </div>
      </div>
    </button>
  );
};

export default Dish;
