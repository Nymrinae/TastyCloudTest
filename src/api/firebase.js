import { db } from '../plugins/firebase'

export const getMeals = async () => {
  const mealsRef = db.collection('meals')
  const res = await mealsRef.get()

  return res.docs.map(item => item.data())
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

export const getItems = async type => {
  let res = null

  switch(type) {
    case 'meals':
      res = await getMeals()
      break
    case 'drinks':
      res = await getDrinks()
      break
    case 'desserts':
      res = await getDesserts()
      break
    case 'all':
      res = await getAllItems()
      break
    default:
      break
  }

  return res
}

export const getAllItems = async () => {
  let meals = await getMeals()
  let desserts = await getDesserts()
  let drinks = await getDrinks()

  return [...meals, ...desserts, ...drinks]
}

export const getMealOfTheDay = async () => {

}