import 'react-native-gesture-handler'
import firebase from '../firebaseconfig'
import React, { useState } from 'react'
import { Appbar, Menu } from 'react-native-paper'

//pass in usertoken to the item from app component
export default function CustomNavigationBar({ navigation, previous }) {
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
					{/* build in logic re: if logged in show log out and if not show nothing */}
					{/* <Menu.Item title='Log In' />
					<Menu.Item title='Sign Up' /> */}
				</Menu>
			) : null}
		</Appbar.Header>
	)
}
