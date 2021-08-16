import axios from 'axios'
import { SPOONACULAR_KEY } from '@env'

const GET_RECIPE_INSTRUCTIONS = 'GET_RECIPE_INSTRUCTIONS'

export const haveRecipeInstructions = (recipeInstructions) => {
	return {
		type: GET_RECIPE_INSTRUCTIONS,
		recipeInstructions,
	}
}

//create thunk for getting recipe data from API
export const fetchRecipeInstructions = (id) => {
	return async function (dispatch) {
		try {
			const requestConfig = {
				method: 'GET',
				url: `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${SPOONACULAR_KEY}`,
			}
			const { data } = await axios(requestConfig)
			dispatch(haveRecipeInstructions(data))
		} catch (error) {
			console.log('Error fetching recipe instructions: ', error.message)
		}
	}
}

export default function (state = {}, action) {
	switch (action.type) {
		case GET_RECIPE_INSTRUCTIONS:
			return action.recipeInstructions
		default:
			return state
	}
}
