import 'react-native-gesture-handler'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, ActivityIndicator } from 'react-native-paper'
import Welcome from './Welcome'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FAFFEB',
	},
})

const Loading = () => {
	return (
		<View>
			<Welcome />
			<ActivityIndicator animating={true} />
		</View>
	)
}

export default Loading
