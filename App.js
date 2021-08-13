import 'react-native-gesture-handler'
import firebase from './firebaseconfig'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
//import { AppRegistry } from 'react-native'
import {
	NavigationContainer,
	DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
	Provider as PaperProvider,
	DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper'
import merge from 'deepmerge'
import Main from './Components/Main'
import Ingredients from './Components/Ingredients'
import AuthStack from './Components/AuthNavigator'
import CustomNavigationBar from './Components/CustomNavBar'

const Stack = createStackNavigator()

const CombineDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme)

const theme = {
	...CombineDefaultTheme,
	roundness: 2,
	colors: {
		...CombineDefaultTheme.colors,
		primary: '#DBA159',
		accent: '#C2DBBD',
		backdrop: '#FAFFEB',
		background: '#FAFFEB',
		surface: '#AED6BB',
		text: '#22341D',
		modals: '#EFD780',
		placeholder: '#22341D',
	},
}

//if end up using redux store wrap that around the paper provider
export default function App() {
	// useEffect(() => {
	// 	const authObserverUnsubscribe = firebase.onAuthStateChanged(
	// 		(user) => {
	// 			if (user) {
	// 				console.log('User authenticated!')
	// 			} else {
	// 				console.log('User is not signed in or user logged out')
	// 			}
	// 		},
	// 		(error) => {
	// 			console.log('Error with authentication: ', error)
	// 		}
	// 	)
	// 	return () => {
	// 		authObserverUnsubscribe()
	// 	}
	// }, [])

	return (
		<PaperProvider theme={theme}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Auth'
					screenOptions={{
						header: (props) => <CustomNavigationBar {...props} />,
					}}
				>
					<Stack.Screen name='Auth' component={AuthStack} />
					<Stack.Screen
						name='Home'
						component={Main}
						options={{ title: 'Welcome' }}
					/>
					<Stack.Screen
						name='Ingredients'
						component={Ingredients}
						options={{ title: "What's in your fridge!?" }}
					/>
				</Stack.Navigator>
				<StatusBar style='auto' />
			</NavigationContainer>
		</PaperProvider>
	)
}
