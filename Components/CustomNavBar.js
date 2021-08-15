import 'react-native-gesture-handler'
import firebase from 'firebase'
//import firebase from '../firebaseconfig'
import React, { useState } from 'react'
import { Appbar, Menu } from 'react-native-paper'

//pass in usertoken to the item from app component
export default function CustomNavigationBar({
	navigation,
	previous,
	userToken,
	updateUserToken,
}) {
	const [visible, setVisible] = useState(false)
	const openMenu = () => setVisible(true)
	const closeMenu = () => setVisible(false)

	return (
		<Appbar.Header>
			{previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
			<Appbar.Content title='NOSH' />
			{!previous ? (
				<Menu
					visible={visible}
					onDismiss={closeMenu}
					anchor={
						<Appbar.Action icon='menu' color='white' onPress={openMenu} />
					}
				>
					{userToken !== null ? (
						<Menu.Item
							title='LogOut'
							onPress={() => {
								firebase.auth().signOut()
								updateUserToken(null)
							}}
						/>
					) : null}
				</Menu>
			) : null}
		</Appbar.Header>
	)
}
