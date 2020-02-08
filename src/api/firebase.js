import { db } from '../plugins/firebase'

const mealsRef = db.collection('meals')
const dessertsRef = db.collection('desserts')
const drinksRef = db.collection('drinks')

export const getMealByName = async mealName => {
  let query = mealsRef.where('name', '==', mealName)
}

export const getAllMeals = async () => {
  const meals = []
  const allMeals = await mealsRef.get()

  allMeals.forEach(item => meals.push(item.data()))

  return meals
}

export const geatDessertByName = async dessertName => {

}

export const getAllDesserts = async () => {
  const desserts = []
  const allDesserts = await dessertsRef.get()

  allDesserts.forEach(item => desserts.push(item.data()))

  return desserts
}

export const getDrinkByName = async drinkName => {

}

export const getAllDrinks = async () => {
  const drinks = []
  const allDrinks = await drinksRef.get()

  allDrinks.forEach(item => drinks.push(item.data()))

  return drinks
}

export const getItems = async type => {
  const items = []
  let res = null

  switch(type) {
    case 'meals':
      res = await mealsRef.get()
      break
    case 'drinks':
      res = await drinksRef.get()
      break
    case 'desserts':
      res = await dessertsRef.get()
      break
    default:
      break
  }

  res.forEach(item => items.push(item.data()))

  return items
}