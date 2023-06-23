import axios from "axios";

const BACKEND_URL = "https://expense-tracker-fd2ec-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
	const response = await axios.post(
		BACKEND_URL + "/expenses.json",
		expenseData
	);
	const id = response.data.name;
	return id;
}

export async function fetchExpenses() {
	const response = await axios.get(BACKEND_URL + "/expenses.json");
	console.log(response);
	const expenses = [];
	for (const key in response.data) {
		expenses.push({
			id: key,
			amount: response.data[key].amount,
			date: new Date(response.data[key].date),
			description: response.data[key].description,
		});
	}
	return expenses;
}

export async function updateExpense(id, expenseData) {
	const response = await axios.put(
		BACKEND_URL + "/expenses/" + id + ".json",
		expenseData
	);
	console.log(response);
	return response;
}

export async function deleteExpense(id) {
	const response = await axios.delete(
		BACKEND_URL + "/expenses/" + id + ".json"
	);
	console.log(response);
	return response;
}
