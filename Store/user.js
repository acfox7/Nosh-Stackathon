import firebase from 'firebase'

const SET_USER = 'SET_USER'
const REMOVE_USER = 'REMOVE_USER'

export const setUser = (user) => {
	return {
		type: SET_USER,
		user,
	}
}

export const removeUser = () => {
	return {
		type: REMOVE_USER,
	}
}

export default function (state = {}, action) {
	switch (action.type) {
		case SET_USER:
			//console.log('userId: ', action.user.uid)
			return action.user
		case REMOVE_USER:
			return {}
		default:
			return state
	}
}
