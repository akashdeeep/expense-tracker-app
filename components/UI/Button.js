import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

export default Button = (props) => {
	return (
		<View style={props.style}>
			<Pressable
				style={({ pressed }) => pressed && styles.pressed}
				onPress={props.onPress}>
				<View style={[styles.button, props.mode === "flat" && styles.flat]}>
					<Text
						style={[
							styles.buttonText,
							props.mode === "flat" && styles.flatText,
						]}>
						{props.children}
					</Text>
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		borderRadius: 10,
		padding: 10,
		backgroundColor: GlobalStyles.colors.primary500,
	},
	flat: {
		backgroundColor: "transparent",
	},
	buttonText: {
		color: GlobalStyles.colors.neutral50,
		textAlign: "center",
		fontSize: 18,
	},
	flatText: {
		color: GlobalStyles.colors.primary500,
		textAlign: "center",
		fontSize: 18,
	},
	pressed: {
		opacity: 0.5,
		backgroundColor: GlobalStyles.colors.primary500,
		borderRadius: 10,
	},
});
