import isDivisibleBy400 from "./conditions/isDivisibleBy400";
import isDivisibleBy4AndNotBy100 from "./conditions/isDivisibleBy4AndNotBy100";

export default function leapYearRule(year) {
	return isDivisibleBy400(year) || isDivisibleBy4AndNotBy100(year)
		? "Leap Year"
		: null;
}
