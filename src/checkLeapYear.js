import nonLeapYearRule from "./rules/NonLeapYearRule";
import leapYearRule from "./rules/leapYearRule";

export default function checkLeapYear(year) {
	if (typeof year !== "number") {
		throw new TypeError("Invalid Input Type");
	}
	const rules = [leapYearRule, nonLeapYearRule];
	for (const rule of rules) {
		const result = rule(year);
		if (result) {
			return result;
		}
	}
}
