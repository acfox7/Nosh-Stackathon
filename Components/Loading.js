import 'react-native-gesture-handler'
import firebase from 'firebase'
//import firebase from '../firebaseconfig'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, ActivityIndicator, Title } from 'react-native-paper'
import Welcome from './Welcome'
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
		try {
			firebase.auth().onAuthStateChanged(function (user) {
				if (user) {
					updateUserToken(user)
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

export default Loading
