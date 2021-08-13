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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
})

const Main = ({ navigation }) => {
	return (
		<View>
			<Text>This Is Showing Up</Text>
			<Button
				title='Go to Ingredients Page'
				onPress={() => navigation.navigate('Ingredients')}
			/>
		</View>
	)
}

export default Main
