import React from 'react'
import { createNavigationContainerRef } from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

export async function navigate(name, params) {
	console.log(await navigationRef.current.getRootState())
	if (navigationRef.isReady()) {
		console.log('Root Navigation inside isReady')
		navigationRef.navigate(name, params)
	}
}
