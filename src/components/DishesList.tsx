import { useEffect, useState } from "react";
import { DishType } from "../types";
import Dish from "./Dish";
import noResultsImg from "../assets/no-results.png";
import Recipe from "./Recipe";

interface Props {
  dishes: DishType[];
}
const DishesList = ({ dishes }: Props) => {
  const [selectedDish, setSelectedDish] = useState<DishType | undefined>(
    undefined
  );

  // For Search part
  const [displayDishes, setDisplayDishes] = useState<DishType[]>(dishes);
  const [searchTerm, setSearchTerm] = useState("");

  const searchList = (term: string) => {
    setSearchTerm(term);
    setDisplayDishes(
      dishes.filter((dish) =>
        dish.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };
  ///

  useEffect(() => {
    /// For Search part
    setDisplayDishes(dishes);
    setSearchTerm("");
    ///
    setSelectedDish(undefined);
  }, [dishes]);

  useEffect(() => {
    if (searchTerm.length > 0) setSelectedDish(undefined);
  }, [searchTerm]);

  return (
    <div className="dishes">
      <div className="dishes-list">
        <div className="search">
          <input
            type="text"
            placeholder="Dish name"
            value={searchTerm}
            onChange={(event) => searchList(event.target.value)}
          />
        </div>
        {displayDishes.length === 0 ? (
          <div className="no-results">
            <div className="text">
              There are no results that matches your search. <br /> Please try
              again.
            </div>
            <img src={noResultsImg} alt="no-results" width={200} />
          </div>
        ) : (
          <div className="dishes-container">
            {displayDishes.map((dish: DishType) => (
              <Dish
                key={dish.name}
                dish={dish}
                selectedDish={selectedDish?.name}
                updateSelectedDish={() => setSelectedDish(dish)}
              />
            ))}
          </div>
        )}
      </div>
      {selectedDish && <Recipe selectedDish={selectedDish} />}
    </div>
  );
};

export default DishesList;
