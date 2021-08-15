import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { Button } from 'react-native-paper'
import firebase from 'firebase'
//import firebase from '../firebaseconfig'
import { WEB_AUTH_ID } from '@env'

import * as WebBrowser from 'expo-web-browser'
import { ResponseType } from 'expo-auth-session'
import * as Google from 'expo-auth-session/providers/google'

WebBrowser.maybeCompleteAuthSession()

export default function GoogleSignInButton(props) {
	const onLoginSuccess = props.onLoginSuccess
	const onLoginFailure = props.onLoginFailure

	const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
		clientId: WEB_AUTH_ID,
	})
	React.useEffect(() => {
		if (response?.type === 'success') {
			const { id_token } = response.params
			try {
				const credential = firebase.auth.GoogleAuthProvider.credential(id_token)
				const googleProfileData = firebase
					.auth()
					.signInWithCredential(credential)
				onLoginSuccess(googleProfileData)
			} catch (error) {
				onLoginFailure(error.message)
			}
		}
	}, [response])

	return <Button onPress={() => promptAsync()}>Continue With Google</Button>
}
