import { View, Text, FlatList } from "react-native";

renderExpenseItem = (itemData) => {
	return (
		<View>
			<Text>{itemData.item.name}</Text>
		</View>
	);
};

export default ExpensesList = (props) => {
	return (
		<View>
			<FlatList
				data={props.expenses}
				renderItem={renderExpenseItem}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};
