import React from 'react'
import { createNavigationContainerRef } from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

export async function navigate(name, params) {
	if (navigationRef.isReady()) {
		navigationRef.navigate(name, params)
	}
}
