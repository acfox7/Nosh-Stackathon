import axios from 'axios'
import { SPOONACULAR_KEY } from '@env'

const SEARCH_RECIPES = 'SEARCH_RECIPES'

export const haveRecipes = (recipes) => {
	return {
		type: SEARCH_RECIPES,
		recipes,
	}
}

//create thunk for getting data from API
export const fetchRecipesFromAPI = (ingredients) => {
	return async function (dispatch) {
		try {
			const ingredientsString = ingredients.join()
			const requestConfig = {
				method: 'GET',
				url: `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${SPOONACULAR_KEY}`,
				params: {
					ingredients: ingredientsString,
					ranking: 1,
				},
			}

			const { data } = await axios(requestConfig)
			dispatch(haveRecipes(data))
		} catch (error) {
			console.log(
				'Error fetching all recipe data from Spoonacular API: ',
				error.message
			)
		}
	}
}

export default function (state = [], action) {
	switch (action.type) {
		case SEARCH_RECIPES:
			return action.recipes
		default:
			return state
	}
}
