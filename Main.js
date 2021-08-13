import React, { useState } from 'react'
import {
	ViewBase,
	Text,
	Image,
	ScrollView,
	TextInput,
	View,
	FlatList,
	StyleSheet,
	Button,
} from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//backgroundColor: '#fff',
		alignItems: 'center',
		//marginTop: 70,
	},
	bigBlue: {
		//color: 'blue',
		fontWeight: 'bold',
		fontSize: 30,
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
	},
})

const Main = () => {
	const [text, setText] = useState('')
	const [ingredients, setIngredients] = useState([{ key: 'Orange' }])
	return (
		// <ScrollView>
		<View style={styles.container}>
			<View
				style={{
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					//backgroundColor: 'green',
					flex: 1,
				}}
			>
				<Text style={{ margin: 10, fontSize: 20, textAlign: 'center' }}>
					Ingredients:
				</Text>
				<TextInput
					style={{
						height: '10%',
						width: '70%',
						margin: 10,
						//borderColor: 'gray',
						borderWidth: 1,
					}}
					defaultValue={text}
					placeholder="What's in your fridge?"
					onChangeText={(text) => setText(text)}
					//some sort of on submit that adds to ingredients objects of format {key: 'Tomato'}
				/>
				{/* <Image
				source={{
					url: 'https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg',
				}}
				style={{ width: 200, height: 200, margin: 10 }}
			/> */}
				{/* <TextInput
				style={{
					height: 40,
					margin: 10,
					borderColor: 'gray',
					borderWidth: 1,
				}}
				onChangeText={(text) => setText(text)}
				defaultValue={text}
				placeholder='What should we name them?'
			/>
			<Text>Hmm... {text}</Text> */}
			</View>
			<View style={{ width: '70%', alignItems: 'flex-start', flex: 3 }}>
				<FlatList
					data={ingredients}
					renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
					style={{ marginTop: 20 }}
				/>
			</View>
			<Button title='Search!' />
		</View>
		// </ScrollView>
	)
}

export default Main
