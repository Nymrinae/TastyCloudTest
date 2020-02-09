import { db } from '../plugins/firebase'

export const getMeals = async () => {
  const mealsRef = db.collection('meals')
  const res = await mealsRef.get()

  return res.docs.map(item => item.data())
}

export const getMealOfTheDay = async () => {
  const meals = await getMeals()

  return meals[Math.floor(Math.random() * meals.length)]
}

export const getDessertOfTheDay = async () => {
  const desserts = await getDesserts()

  return desserts[Math.floor(Math.random() * desserts.length)]
}

export const getDesserts = async () => {
  const dessertsRef = db.collection('desserts')
  const res = await dessertsRef.get()

  return res.docs.map(item => item.data())
}

export const getDrinks = async () => {
  const drinksRef = db.collection('drinks')
  const res = await drinksRef.get()

  return res.docs.map(item => item.data())
}

export const getAllItems = async () => {
  let meals = await getMeals()
  let desserts = await getDesserts()
  let drinks = await getDrinks()

  return [...meals, ...desserts, ...drinks]
}