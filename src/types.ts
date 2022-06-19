export type CategoryType =
  | "Italian"
  | "American"
  | "Japanese"
  | "Mexican"
  | "Israeli";

export type DishType = {
  name: string;
  ingredients: string[];
  preparationTime: string;
  calories: string;
  recipe: string[];
  difficulty: string;
  image: string;
};
