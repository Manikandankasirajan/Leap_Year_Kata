import isDivisibleBy100AndNotBy400 from "./conditions/isDivisibleBy100AndNotBy400";
import isNotDivisibleBy4 from "./conditions/isNotDivisibleBy4";

export default function nonLeapYearRule(year) {
	return isDivisibleBy100AndNotBy400(year) || isNotDivisibleBy4(year)
		? "Not Leap Year"
		: null;
}
