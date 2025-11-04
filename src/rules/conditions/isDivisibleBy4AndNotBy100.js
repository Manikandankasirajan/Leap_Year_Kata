export default function isDivisibleBy4AndNotBy100(year) {
	return year % 4 === 0 && year % 100 !== 0;
}
