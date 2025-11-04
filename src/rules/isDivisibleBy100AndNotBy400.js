export default function isDivisibleBy100AndNotBy400(year) {
	return year % 100 === 0 && year % 400 !== 0 ? "Not Leap Year" : null;
}
