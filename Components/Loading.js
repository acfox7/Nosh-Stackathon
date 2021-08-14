import 'react-native-gesture-handler'
import firebase from '../firebaseconfig'
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
		console.log('Props: ', this.props.navigation)
		const navigate = this.props.navigation.navigate
		try {
			firebase.auth().onAuthStateChanged(function (user) {
				if (user) {
					this.props.updateUserToken(user)
				} else {
					console.log('in else statement')
					// this.setState({
					// 	isLoggedIn: false,
					// })
					navigate('SignInScreen')
					//RootNavigation.navigate('SignInScreen')
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
				<Title>NOSH</Title>
				<Welcome />
				<View style={{ margin: 30 }}>
					<ActivityIndicator animating={true} />
				</View>
			</View>
		)
	}
}

export default Loading
