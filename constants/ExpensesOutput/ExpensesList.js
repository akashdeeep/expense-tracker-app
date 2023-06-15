import { View, Text, FlatList } from "react-native";

export default ExpensesList = (props) => {
	return (
		<View>
			<FlatList
				data={props.expenses}
				renderItem={({ item }) => {
					return (
						<View>
							<Text>{item.name}</Text>
							<Text>{item.amount}</Text>
						</View>
					);
				}}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};
