import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LoadingScreen from './Loading'
import SignUpScreen from './SignUp'
import SignInScreen from './SignIn'

const Auth = createStackNavigator()

const AuthStack = () => (
	<Auth.Navigator
		initialRouteName='SignIn'
		screenOptions={{
			animationEnabled: false,
		}}
	>
		<Auth.Screen name='SignIn' component={SignInScreen} />
		<Auth.Screen name='SignUp' component={SignUpScreen} />
	</Auth.Navigator>
)

// const AuthNavigator = createSwitchNavigator(
// 	{
// 		Loading: { screen: LoadingScreen },
// 		SignUp: { screen: SignUpScreen },
// 		SignIn: { screen: SignInScreen },
// 	},
// 	{ initialRouteName: 'Loading' }
// )

export default AuthStack
