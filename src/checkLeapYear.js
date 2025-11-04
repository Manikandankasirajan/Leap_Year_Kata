import isDivisibleBy100AndNotBy400 from "./rules/isDivisibleBy100AndNotBy400";
import isDivisibleBy400 from "./rules/isDivisibleBy400";

export default function checkLeapYear(year) {
	const rules = [isDivisibleBy400, isDivisibleBy100AndNotBy400];
	for (const rule of rules) {
		const result = rule(year);
		if (result) {
			return result;
		}
	}
}
