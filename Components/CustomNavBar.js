import 'react-native-gesture-handler'
import firebase from 'firebase'
//import firebase from '../firebaseconfig'
import { connect } from 'react-redux'
import React, { useState } from 'react'
import { Appbar, Menu } from 'react-native-paper'
import { removeUser } from '../Store/user'

//pass in usertoken to the item from app component
function CustomNavigationBar({
	navigation,
	previous,
	user,
	removeUser,
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
					{user.uid ? (
						<>
							<Menu.Item
								title='Log Out'
								onPress={() => {
									firebase.auth().signOut()
									removeUser(null)
									updateUserToken(null)
								}}
							/>
							<Menu.Item
								title='My Ingredients'
								onPress={() => navigation.navigate('Ingredients')}
							/>
							<Menu.Item
								title='Home'
								onPress={() => navigation.navigate('Home')}
							/>
						</>
					) : null}
				</Menu>
			) : null}
		</Appbar.Header>
	)
}

const mapState = (state) => {
	return {
		user: state.user,
	}
}

const mapDispatch = (dispatch) => {
	return {
		removeUser: () => dispatch(removeUser()),
	}
}

export default connect(mapState, mapDispatch)(CustomNavigationBar)
