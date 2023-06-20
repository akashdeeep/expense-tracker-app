import { useState, useLayoutEffect } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

function Input(props) {
	const [text, setText] = useState("");
	const [isFocused, setIsFocused] = useState(false);
	const [isBlurred, setIsBlurred] = useState(false);
	const [isTouched, setIsTouched] = useState(false);
	const [isDirty, setIsDirty] = useState(false);
	const [isValid, setIsValid] = useState(false);

	const inputStyles = [styles2.input];
	if (isFocused) {
		inputStyles.push({ borderBottomColor: GlobalStyles.colors.primary100 });
	}
	if (isBlurred) {
		inputStyles.push({ borderBottomColor: GlobalStyles.colors.primary50 });
	}
	if (isTouched && !isDirty) {
		inputStyles.push({ borderBottomColor: GlobalStyles.colors.primary50 });
	}
	if (isDirty && !isValid) {
		inputStyles.push({ borderBottomColor: GlobalStyles.colors.error });
	}

	const textChangeHandler = (text) => {
		setText(text);
	};

	const focusHandler = () => {
		setIsFocused(true);
		setIsBlurred(false);
	};

	const blurHandler = () => {
		setIsFocused(false);
		setIsBlurred(true);
	};

	const touchHandler = () => {
		setIsTouched(true);
	};

	const dirtyHandler = () => {
		setIsDirty(true);
	};

	const validHandler = () => {
		setIsValid(true);
	};

	return (
		<View style={[styles2.inputContainer, props.style]}>
			<Text style={styles2.label}>{props.label}</Text>
			<TextInput
				{...props.textInputConfig}
				style={inputStyles}
				value={text}
				onChangeText={textChangeHandler}
				onFocus={focusHandler}
				onBlur={blurHandler}
				onTouchStart={touchHandler}
				onTouchEnd={dirtyHandler}
				onEndEditing={validHandler}
			/>
		</View>
	);
}

export default Input;

styles2 = StyleSheet.create({
	inputContainer: {
		marginBottom: 20,
	},
	label: {
		fontSize: 16,
		color: GlobalStyles.colors.primary50,
		marginBottom: 5,
	},
	input: {
		borderBottomWidth: 1,
		borderBottomColor: GlobalStyles.colors.primary50,
		paddingVertical: 5,
		paddingHorizontal: 2,
		fontSize: 16,
		color: GlobalStyles.colors.primary50,
		backgroundColor: GlobalStyles.colors.primary900,
	},
	multilineInput: {
		height: 100,
	},
});
