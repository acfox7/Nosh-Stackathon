import 'react-native-gesture-handler'
import firebase from "../firebaseconfig"
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

class Loading extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		const {navigation} = this.props

		firebase.auth().onAuthStateChanged(user => {
			if (user) }
			this.props.navigation.navigate('Home')
		})
	}
	render() {
		return (
			<View style={styles.container}>
				<Welcome />
				<View style={{ margin: 30 }}>
					<ActivityIndicator animating={true} />
				</View>
			</View>
		)
	}
}

export default Loading
