import { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

export default Input = (props) => {
	return (
		<View>
			<Text> {props.label}</Text>
			<TextInput {...props.textInputConfig} />
		</View>
	);
};

styles = StyleSheet.create({
	inputContainer: {
		marginVertical: 10,
		marginHorizontal: 20,
	},
	label: {
		fontSize: 18,
		marginBottom: 5,
		color: GlobalStyles.colors.primary800,
	},
});
