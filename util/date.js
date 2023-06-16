export function getFormattedDate(date) {
	return date.toLocaleDateString("en-IN", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
}
