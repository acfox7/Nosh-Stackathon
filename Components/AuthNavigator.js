//react navigation docs suggest a different way and went with that


import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LoadingScreen from './Loading'
import SignUpScreen from './SignUp'
import SignInScreen from './SignIn'

const Auth = createStackNavigator()

const AuthStack = () => (
	<Auth.Navigator
		initialRouteName='Loading'
		screenOptions={{
			animationEnabled: false,
			header: () => null,
		}}
	>
		<Auth.Screen name='Loading' component={LoadingScreen} />
		<Auth.Screen name='SignIn' component={SignInScreen} />
		<Auth.Screen name='SignUp' component={SignUpScreen} />
	</Auth.Navigator>
)

export default AuthStack
