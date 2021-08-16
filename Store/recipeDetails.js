import axios from 'axios'
import { SPOONACULAR_KEY } from '@env'

const GET_RECIPE_DETAILS = 'GET_RECIPE_DETAILS'

export const haveRecipeDetails = (recipeInfo) => {
	return {
		type: GET_RECIPE_DETAILS,
		recipeInfo,
	}
}

//create thunk for getting data from API
export const fetchRecipeDetails = (id) => {
	return async function (dispatch) {
		try {
			const requestConfig = {
				method: 'GET',
				url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=${SPOONACULAR_KEY}`,
			}

			const { data } = await axios(requestConfig)
			//console.log('RECIPE DETAILS FROM API: ', data)
			dispatch(haveRecipeDetails(data))
		} catch (error) {
			console.log('Error fetching all recipe details: ', error.message)
		}
	}
}

export default function (state = {}, action) {
	switch (action.type) {
		case GET_RECIPE_DETAILS:
			return action.recipeInfo
		default:
			return state
	}
}
