import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

import { GlobalStyles } from "./constants/GlobalStyles";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

ExpensesOverview = (props) => {
	return (
		<BottomTabs.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: GlobalStyles.colors.primary800 },
				headerTintColor: GlobalStyles.colors.primary50,
				tabBarStyle: { backgroundColor: GlobalStyles.colors.primary800 },
				tabBarActiveTintColor: GlobalStyles.colors.primary50,
			}}>
			<BottomTabs.Screen
				name="RecentExpenses"
				component={RecentExpenses}
				options={{
					title: "Recent Expenses",
					tabBarLabel: "Recent",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="time-outline" size={size} color={color} />
					),
				}}
			/>
			<BottomTabs.Screen
				name="AllExpenses"
				component={AllExpenses}
				options={{
					title: "All Expenses",
					tabBarLabel: "All Expenses",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="list-outline" size={size} color={color} />
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
};

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="ExpnesesOverview"
						component={ExpensesOverview}
						options={{ headerShown: false }}
					/>
					<Stack.Screen name="ManageExpense" component={ManageExpense} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
