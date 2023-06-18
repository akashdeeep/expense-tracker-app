import { useState, useLayoutEffect } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";
import Input from "./Input";

export default ExpenseForm = (props) => {
	amountChangeHandler = () => {};

	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.inputsRow}>
				<Input
					style={styles.rowInput}
					label="Amount"
					textInputConfig={{
						keyboardType: "numeric",
						placeholder: "0",
						onChangeText: amountChangeHandler,
					}}
				/>
				<Input
					style={styles.rowInput}
					label="Date"
					textInputConfig={{
						placeholder: "DD/MM/YYYY",
						// keyboardType: "numeric",
						maxLength: 10,
						onChangeText: () => {},
					}}
				/>
			</View>

			<Input
				label="Description"
				textInputConfig={{
					autoCapitalize: "sentences",
					multiline: true,
					numberOfLines: 3,
				}}
			/>
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
	inputsRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	rowInput: {
		flex: 1,
		marginHorizontal: 10,
	},
});
