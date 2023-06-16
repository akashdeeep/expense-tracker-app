import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton(props) {
	return (
		<Pressable
			onPress={props.onPress}
			style={({ pressed }) => pressed & styles.pressed}>
			<View style={styles.buttonContainer}>
				<Ionicons name={props.name} size={props.size} color={props.color} />
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 10,
		overflow: "hidden",
		padding: 10,
		marginHorizontal: 10,
		marginVertical: 5,
	},
	pressed: {
		opacity: 0.5,
	},
});
