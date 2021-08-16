import 'react-native-gesture-handler'
//import firebase from 'firebase'
import firebase from './firebaseconfig'
import React from 'react'
import { Provider } from 'react-redux'
import store from './Store'
//import NavigationStack from './Components/NavigationStack'
import { StatusBar } from 'expo-status-bar'
import { createStackNavigator } from '@react-navigation/stack'
import {
	NavigationContainer,
	DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'
import {
	Provider as PaperProvider,
	DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper'
import { connect } from 'react-redux'
import merge from 'deepmerge'
import Main from './Components/Main'
import Ingredients from './Components/Ingredients'
import LoadingScreen from './Components/Loading'
import SignInScreen from './Components/SignIn'
import CustomNavigationBar from './Components/CustomNavBar'
import RecipeSearchList from './Components/RecipeSearchList'
import SingleRecipePage from './Components/SingleRecipePage'
import { navigationRef } from './Components/RootNavigation'

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

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			userToken: null,
		}
		this.updateUserToken = this.updateUserToken.bind(this)
	}
	updateUserToken(token) {
		this.setState({
			userToken: token,
		})
	}
	render() {
		const userToken = this.state.userToken
		const initialScreen = userToken === null ? 'LoadingScreen' : 'Home'
		return (
			<Provider store={store}>
				<PaperProvider theme={theme}>
					<NavigationContainer ref={navigationRef}>
						<Stack.Navigator
							initialRouteName={initialScreen}
							screenOptions={{
								header: (props) => (
									<CustomNavigationBar
										{...props}
										updateUserToken={this.updateUserToken}
									/>
								),
							}}
						>
							<Stack.Screen name='LoadingScreen'>
								{(props) => (
									<LoadingScreen
										{...props}
										updateUserToken={this.updateUserToken}
									/>
								)}
							</Stack.Screen>
							{userToken === null ? (
								<>
									<Stack.Screen name='SignInScreen'>
										{(props) => (
											<SignInScreen
												{...props}
												updateUserToken={this.updateUserToken}
											/>
										)}
									</Stack.Screen>
								</>
							) : (
								<>
									<Stack.Screen name='Home'>
										{(props) => (
											<Main {...props} updateUserToken={this.updateUserToken} />
										)}
									</Stack.Screen>
									<Stack.Screen
										name='Ingredients'
										component={Ingredients}
										options={{ title: "What's in your fridge!?" }}
									/>
									<Stack.Screen
										name='RecipeList'
										component={RecipeSearchList}
									/>
									<Stack.Screen
										name='SingleRecipePage'
										component={SingleRecipePage}
									/>
								</>
							)}
						</Stack.Navigator>
						<StatusBar style='auto' />
					</NavigationContainer>
				</PaperProvider>
			</Provider>
		)
	}
}
