import { useState, useLayoutEffect } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";
import Input from "./Input";

export default ExpenseForm = (props) => {
	amountChangeHandler = () => {};

	return (
		<View>
			<Input
				label="Amount"
				textInputConfig={{
					keyboardType: "numeric",
					onChangeText: amountChangeHandler,
				}}
			/>
			<Input
				label="Date"
				textInputConfig={{
					placeHolder: "DD-MM-YYYY",
					keyboardType: "numeric",
					maxLength: 10,
					onChangeText: () => {},
				}}
			/>
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
