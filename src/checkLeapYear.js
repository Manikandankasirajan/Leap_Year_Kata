import isDivisibleBy400 from "./rules/isDivisibleBy400";

export default function checkLeapYear(year) {
	const rules = [isDivisibleBy400];
	for (const rule of rules) {
		const result = rule(year);
		if (result) {
			return result;
		}
	}
}
