import 'react-native-gesture-handler'
import firebase from 'firebase'
//import firebase from '../firebaseconfig'
import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import Welcome from './Welcome'
import { removeUser } from '../Store/user'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FAFFEB',
	},
	buttonContainer: {
		margin: 30,
	},
})

const Main = ({ navigation, removeUser, updateUserToken }) => {
	return (
		<View style={styles.container}>
			<Welcome />
			<View style={styles.buttonContainer}>
				<Button onPress={() => navigation.navigate('Ingredients')}>
					Get Started!
				</Button>
				<View style={styles.buttonContainer}>
					<Button
						onPress={() => {
							console.log('button pressed')
							firebase.auth().signOut()
							removeUser(null)
							updateUserToken(null)
							//navigation.navigate('SignInScreen')
						}}
					>
						Log Out
					</Button>
				</View>
			</View>
		</View>
	)
}

const mapDispatch = (dispatch) => {
	return {
		removeUser: () => dispatch(removeUser()),
	}
}

export default connect(null, mapDispatch)(Main)
