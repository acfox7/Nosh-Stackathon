import 'react-native-gesture-handler'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Headline, Subheading, Paragraph } from 'react-native-paper'

const styles = StyleSheet.create({
	welcome: {
		fontWeight: 'bold',
		height: '10%',
	},
	subheading: {
		textAlign: 'center',
	},
})

const Welcome = () => {
	return (
		<React.Fragment>
			<Headline style={styles.welcome}>Welcome!</Headline>
			<Subheading style={styles.subheading}>Get dinner recipes...</Subheading>
			<Subheading>Based on what's in your fridge right now!</Subheading>
		</React.Fragment>
	)
}

export default Welcome
