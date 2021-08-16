import { createStore, combineReducers, applyMiddleware } from 'redux'
import ThunkMiddleware from 'redux-thunk'
//import individual store files here
import totalIngredients from './totalIngredients'
import filterIngredients from './filterIngredients'
import recipes from './recipes'
import recipeDetails from './recipeDetails'
import recipeInstructions from './recipeInstructions'
import user from './user'

//insert different reducers in here
const reducer = combineReducers({
	user,
	totalIngredients,
	filterIngredients,
	recipes,
	recipeDetails,
	recipeInstructions,
})
const middleware = applyMiddleware(ThunkMiddleware)

const store = createStore(reducer, middleware)

export default store
