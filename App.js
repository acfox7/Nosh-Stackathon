import 'react-native-gesture-handler'
import firebase from './firebaseconfig'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
//import { AppRegistry } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import Main from './Main'

const Stack = createStackNavigator()

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: '#DBA159',
		accent: '#C2DBBD',
		background: '#FAFFEB',
		surface: '#F8FA89',
		text: '#22341D',
		modals: '#EFD780',
    placeholder: '#22341D'
	},
}

//if end up using redux store wrap that around the paper provider
export default function App() {
	return (
		<PaperProvider theme={theme}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name='Home'
						component={Main}
						options={{ title: 'Welcome' }}
					/>
				</Stack.Navigator>
				{/* <Main /> */}
				<StatusBar style='auto' />
			</NavigationContainer>
		</PaperProvider>
	)
}
