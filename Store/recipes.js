import axios from 'axios'

const SEARCH_RECIPES = 'SEARCH_RECIPES'

export const haveRecipes = (recipes) => {
	return {
		type: SEARCH_RECIPES,
		recipes,
	}
}

//create thunk for getting data from API

export default function (state = [], action) {
	switch (action.type) {
		case SEARCH_RECIPES:
			return action.recipes
		default:
			return state
	}
}
