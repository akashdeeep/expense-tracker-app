import { useState, useLayoutEffect } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";
import Input from "./Input";

export default ExpenseForm = (props) => {
	const [description, setDescription] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");

	const descriptionChangeHandler = (text) => {
		setDescription(text);
	};
	const amountChangeHandler = (text) => {
		setAmount(text);
	};
	const dateChangeHandler = (text) => {
		setDate(text);
	};

	return (
		<View style={styles.form}>
			<Text style={styles.title}>Add Expense</Text>
			<View style={styles.inputRow}>
				<Input
					style={styles.rowInput}
					label="Amount"
					textInputConfig={{
						value: amount,
						onChangeText: amountChangeHandler,
						placeholder: "0",
					}}
				/>
				<Input
					style={styles.rowInput}
					label="Date"
					textInputConfig={{
						value: date,
						onChangeText: dateChangeHandler,
						placeholder: "DD/MM/YYYY",
						maxLength: 10,
					}}
				/>
			</View>
			<View style={styles.inputRow}>
				<Input
					style={styles.rowInput}
					label="Description"
					textInputConfig={{
						value: description,
						onChangeText: descriptionChangeHandler,
						multiline: true,
						numberOfLines: 4,
					}}
				/>
			</View>
		</View>
	);
};

styles = StyleSheet.create({
	form: {
		marginTop: 40,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: GlobalStyles.colors.primary50,
		marginBottom: 10,
		paddingHorizontal: 20,
		textAlign: "center",
		marginVertical: 10,
	},
	inputRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
	},
	rowInput: {
		flex: 1,
		marginHorizontal: 10,
	},
});
