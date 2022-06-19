import { DishType } from "../types";

const Recipe = ({ selectedDish }: { selectedDish: DishType }) => {
  return (
    <div className="recipe">
      <div className="ingredients-list">
        Ingredients List:
        <ul>
          {selectedDish.ingredients.map((ing) => (
            <li className="ingredient">{ing}</li>
          ))}
        </ul>
      </div>
      <div className="recipe-list">
        Recipe:
        <ul>
          {selectedDish.recipe.map((step) => (
            <li className="ingredient">{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
