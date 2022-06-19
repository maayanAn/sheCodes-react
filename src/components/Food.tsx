import { useState } from "react";
import FoodCategories from "./FoodCategories";
import DishesList from "./DishesList";
import FoodMap from "../food.json";
import { CategoryType, DishType } from "../types";

const Food = () => {
  const [selectedFoodCategory, setSelectedFoodCategory] = useState<
    CategoryType | undefined
  >(undefined);
  const [dishes, setDishes] = useState<DishType[]>([]);
  const foodCategories = Object.keys(FoodMap) as CategoryType[];

  const updateSelectedFoodCategoryAndDish = (category: CategoryType) => {
    if (selectedFoodCategory === category) {
      setSelectedFoodCategory(undefined);
      setDishes([]);
    } else {
      setSelectedFoodCategory(category);
      setDishes(FoodMap[category]);
    }
  };

  return (
    <div>
      <FoodCategories
        foodCategories={foodCategories}
        selectedCategoryName={selectedFoodCategory}
        updateSelectedFood={updateSelectedFoodCategoryAndDish}
      />
      <div className="container">
        {selectedFoodCategory && <DishesList dishes={dishes}></DishesList>}
      </div>
    </div>
  );
};

export default Food;
