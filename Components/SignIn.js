import 'react-native-gesture-handler'
import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

class SignIn extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			errorMessage: '',
			loading: false,
		}
	}

	render() {
		return <Text>Sign In Page</Text>
	}
}

export default SignIn
