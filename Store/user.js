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

// export const _setUser = (user) => {
// 	return async function (dispatch) {
// 		try {
// 			let database = firebase.database()
// 			let userRef = database.ref('users/' + user.uid)
// 			const res = database.runTransaction(async (transaction) => {
// 				const user = await transaction.get(userRef)
// 				if (user) {
// 					console.log('User already in DB')
// 					transaction.abort()
// 					return
// 				} else {
// 					await transaction.push(userRef, { email: user.email })
// 				}
// 			})
// 		} catch (error) {
// 			console.log('error w/ user add to firebase code: ', error)
// 		}

// 		// usersRef.child(user.iud).transaction()
// 		// usersRef.push(
// 		// 	{
// 		// 		email: user.email,
// 		// 	},
// 		// 	function (error) {
// 		// 		if (error) {
// 		// 			console.log('Add User to DB Failed with error: ' + error)
// 		// 		} else {
// 		// 			console.log('User Successfully added to DB')
// 		// 		}
// 		// 	}
// 		// )
// 		dispatch(setUser(user))
// 	}
// }

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
