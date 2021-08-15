import 'react-native-gesture-handler'
import firebase from 'firebase'
//import firebase from '../firebaseconfig'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import Welcome from './Welcome'

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

const Main = ({ navigation, updateUserToken }) => {
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
							firebase.auth().signOut()
							updateUserToken(null)
						}}
					>
						Log Out
					</Button>
				</View>
			</View>
		</View>
	)
}

export default Main
