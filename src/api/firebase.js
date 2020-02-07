import { db } from '../plugins/firebase'

const mealsRef = db.collection('meals')
const dessertsRef = db.collection('desserts')
const drinksRef = db.collection('drinks')

export const getMealByName = async mealName => {
  let query = mealsRef.where('name', '==', mealName)
}

export const getAllMeals = async () => {
  const meals = []
  let allMeals = await mealsRef.get()

  allMeals.forEach(item => meals.push(item.data()))

  return meals
}

export const geatDessertByName = async dessertName => {

}

export const getAllDesserts = () => {

}

export const getDrinkByName = async drinkName => {

}

export const getAllDrinks = () => {

}