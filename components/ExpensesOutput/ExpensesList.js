import { View, Text, FlatList, StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";

renderExpenseItem = (itemData) => {
	return <ExpenseItem {...itemData.item} />;
};

export default ExpensesList = (props) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={props.expenses}
				renderItem={renderExpenseItem}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
