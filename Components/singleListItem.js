import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { TouchableOpacity } from 'react-native'
import { List, Checkbox, Divider } from 'react-native-paper'
import { ingredientFiltering } from '../Store/filterIngredients'

function SingleListItem(props) {
	const [isChecked, setIsChecked] = useState(true)
	const { title, onDelete, name } = props
	return (
		<React.Fragment>
			<List.Item
				title={title}
				name={title}
				left={() => (
					<Checkbox.Item
						mode='android'
						status={isChecked ? 'checked' : 'unchecked'}
						onPress={() => {
							props.ingredientFiltering(!isChecked, name)
							setIsChecked(!isChecked)
						}}
					/>
				)}
				right={() => (
					<TouchableOpacity onPress={() => onDelete(name)}>
						<List.Icon color='#456D22' icon='delete' />
					</TouchableOpacity>
				)}
				style={{ justifyContent: 'center', alignItems: 'center' }}
			/>
			<Divider />
		</React.Fragment>
	)
}

const mapState = (state) => {
	return {
		filterIngredients: state.filterIngredients,
	}
}

const mapDispatch = (dispatch) => {
	return {
		ingredientFiltering: (checkedStatus, ingredient) =>
			dispatch(ingredientFiltering(checkedStatus, ingredient)),
	}
}

export default connect(mapState, mapDispatch)(SingleListItem)
