import { db } from '../plugins/firebase'

const mealsRef = db.collection('meals')
const dessertsRef = db.collection('desserts')
const drinksRef = db.collection('drinks')

export const getItems = async type => {
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
    case 'all':
      res = await getAllItems()
      break
    default:
      break
  }

  return type === 'all' ? res : res.docs.map(item => item.data())
}

export const getAllItems = async () => {
  let meals = await mealsRef.get()
  let desserts = await dessertsRef.get()
  let drinks = await drinksRef.get()

  meals = meals.docs.map(item => item.data())
  desserts = desserts.docs.map(item => item.data())
  drinks = drinks.docs.map(item => item.data())

  return [...meals, ...desserts, ...drinks]
}