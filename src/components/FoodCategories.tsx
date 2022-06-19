import { CategoryType } from "../types";

interface Props {
  foodCategories: CategoryType[];
  selectedCategoryName: CategoryType | undefined;
  updateSelectedFood: (selectedCategory: CategoryType) => void;
}

const FoodCategories = ({
  foodCategories,
  selectedCategoryName,
  updateSelectedFood,
}: Props) => {
  return (
    <div className="food-categories">
      {foodCategories.map((food: CategoryType) => (
        <button
          key={food}
          className={`food-category ${
            food === selectedCategoryName ? "selected-category" : ""
          }`}
          onClick={() => updateSelectedFood(food)}
        >
          {food}
        </button>
      ))}
    </div>
  );
};

export default FoodCategories;
