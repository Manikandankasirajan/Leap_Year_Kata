import nonLeapYearRule from "./rules/NonLeapYearRule";
import leapYearRule from "./rules/leapYearRule";

export default function checkLeapYear(year) {
	const rules = [leapYearRule, nonLeapYearRule];
	for (const rule of rules) {
		const result = rule(year);
		if (result) {
			return result;
		}
	}
}
