import 'react-native-gesture-handler'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, ActivityIndicator, Button } from 'react-native-paper'
import 'firebase/firestore'
import firebase from 'firebase'

import GoogleSignInButton from './GoogleSignInButton'
import Welcome from './Welcome'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FAFFEB',
	},
})

class SignIn extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			errorMessage: '',
		}
		this.onLoginSuccess = this.onLoginSuccess.bind(this)
		this.onLoginFailure = this.onLoginFailure.bind(this)
	}
	onLoginSuccess(token) {
		this.props.updateUserToken(token)
		//may not need to navigate to home at all because of the way I set up the stack
		//this.props.navigation.navigate('Home')
	}
	onLoginFailure(errorMessage) {
		this.setState({ error: errorMessage })
	}

	render() {
		return (
			<View style={styles.container}>
				<Welcome />
				<View style={{ margin: 30 }}>
					<GoogleSignInButton
						onLoginSuccess={this.onLoginSuccess}
						onLoginFailure={this.onLoginFailure}
					/>
				</View>
			</View>
		)
	}
}

export default SignIn
