import 'react-native-gesture-handler'
import firebase from '../firebaseconfig'
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
})

const Main = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Welcome />
			<View style={{ margin: 30 }}>
				<Button onPress={() => navigation.navigate('Ingredients')}>
					Get Started!
				</Button>
			</View>
		</View>
	)
}

export default Main
