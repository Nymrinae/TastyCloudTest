import { db } from '../plugins/firebase'

export const getMeal = async () => {
  const meals = await getMeals()

  return meals[Math.floor(Math.random() * meals.length)]
}

export const getMeals = async () => {
  const mealsRef = db.collection('meals')
  const res = await mealsRef.get()

  return res.docs.map(item => item.data())
}

export const getDessert = async () => {
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

export const getNews = async () => {
  const items = []

  while (items.length != 4) {
    const meal = await getMeal()
    const dessert = await getDessert()
    const item = Math.random() > 0.5 ? meal : dessert

    if (!items.some(elem => elem.id === item.id)) // avoid duplicates
      items.push(item)
  }

  return items
}