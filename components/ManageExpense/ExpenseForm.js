import { useState, useLayoutEffect } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";
import Input from "./Input";
import Button from "../UI/Button";

export default ExpenseForm = (props) => {
	// console.log(props);
	const [inputValues, setInputValues] = useState({
		amount: "",
		date: "",
		description: "",
	});

	const [isFocused, setIsFocused] = useState({
		amount: false,
		date: false,
		description: false,
	});

	const [isBlurred, setIsBlurred] = useState({
		amount: false,
		date: false,
		description: false,
	});

	const [isTouched, setIsTouched] = useState({
		amount: false,
		date: false,
		description: false,
	});

	inputChangeHandler = (inputIdentifier, inputValue) => {
		setInputValues((prevState) => ({
			...prevState,
			[inputIdentifier]: inputValue,
		}));
	};
	submitHandler = () => {
		console.log(inputValues);
	};

	return (
		<View style={styles.form}>
			<Text style={styles.title}>Add Expense</Text>
			<View style={styles.inputRow}>
				<Input
					style={styles.rowInput}
					label="Amount"
					textInputConfig={{
						value: inputValues.amount,
						onChangeText: inputChangeHandler.bind(this, "amount"),
						placeholder: "0",
					}}
				/>
				<Input
					style={styles.rowInput}
					label="Date"
					textInputConfig={{
						value: inputValues.date,
						onChangeText: inputChangeHandler.bind(this, "date"),
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
						value: inputValues.description,
						onChangeText: inputChangeHandler.bind(this, "description"),
						multiline: true,
						numberOfLines: 4,
					}}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<Button style={styles.button} mode="flat" onPress={props.onCancel}>
					Cancel
				</Button>
				<Button style={styles.button} onPress={submitHandler}>
					{props.submitButtonLabel}
				</Button>
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
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		minWidth: 100,
		marginHorizontal: 10,
	},
});
