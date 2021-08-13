import 'react-native-gesture-handler'
import firebase from './firebaseconfig'
import React, { useState } from 'react'
import {
	ViewBase,
	Text,
	Image,
	ScrollView,
	TextInput,
	View,
	FlatList,
	StyleSheet,
	Button,
} from 'react-native'
import { Headline, Subheading, Paragraph } from 'react-native-paper'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FAFFEB',
	},
	welcome: {
		fontWeight: 'bold',
		height: '10%',
	},
	subheading: {
		textAlign: 'center',
	},
})

const Main = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Headline style={styles.welcome}>Welcome!</Headline>
			<Subheading style={styles.subheading}>
				Get dinner and recipe ideas...
			</Subheading>
			<Subheading>based on what's in your fridge right now!</Subheading>
			<View style={{ margin: 30 }}>
				<Button
					title='Get Started!'
					onPress={() => navigation.navigate('Ingredients')}
				/>
			</View>
		</View>
	)
}

export default Main
