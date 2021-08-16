import 'react-native-gesture-handler'
import firebase from 'firebase'
//import firebase from '../firebaseconfig'
import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { Button, ActivityIndicator, Title } from 'react-native-paper'
import Welcome from './Welcome'
import { setUser } from '../Store/user'
import * as RootNavigation from './RootNavigation'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FAFFEB',
	},
})

class Loading extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoggedIn: null,
		}
	}
	componentDidMount() {
		const navigate = this.props.navigation.navigate
		const updateUserToken = this.props.updateUserToken
		const setUser = this.props.setUser
		try {
			firebase.auth().onAuthStateChanged(function (user) {
				if (user) {
					updateUserToken(user)
					//console.log('USER: ', user)
					setUser(user)
					navigate('Home')
				} else {
					navigate('SignInScreen')
				}
			})
		} catch (error) {
			console.log('Firebase Auth Error in Loading: ', error)
		}
	}
	render() {
		if (this.state.isLoggedIn === false) {
			this.props.navigation.navigate('SignInScreen')
		}
		return (
			<View style={styles.container}>
				<ActivityIndicator animating={true} size='large' />
			</View>
		)
	}
}

const mapState = (state) => {
	return {
		user: state.user,
	}
}

const mapDispatch = (dispatch) => {
	return {
		setUser: (user) => dispatch(setUser(user)),
	}
}

export default connect(mapState, mapDispatch)(Loading)
