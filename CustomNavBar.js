import 'react-native-gesture-handler'
import firebase from './firebaseconfig'
import React, { useState } from 'react'
import { Appbar, Menu } from 'react-native-paper'

export default function CustomNavigationBar({ navigation, previous }) {
	const [visible, setVisible] = useState(false)
	const openMenu = () => setVisible(true)
	const closeMenu = () => setVisible(false)

	return (
		<Appbar.Header>
			{previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
			<Appbar.Content title='My awesome app' />
			{!previous ? (
				<Menu
					visible={visible}
					onDismiss={closeMenu}
					anchor={
						<Appbar.Action icon='menu' color='white' onPress={openMenu} />
					}
				>
					<Menu.Item title='Log In' />
					<Menu.Item title='Sign Up' />
				</Menu>
			) : null}
		</Appbar.Header>
	)
}
