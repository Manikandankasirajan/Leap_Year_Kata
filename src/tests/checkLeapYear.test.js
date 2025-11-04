import checkLeapYear from "../checkLeapYear";
test("return 'Leap Year' for 2000", () => {
	const year = 2000;
	expect(checkLeapYear(year)).toBe("Leap Year");
});
test("return 'Not Leap Year' for 1700", () => {
	const year = 1700;
	expect(checkLeapYear(year)).toBe("Not Leap Year");
});

test("return 'Leap Year' for 2008", () => {
	const year = 2008;
	expect(checkLeapYear(year)).toBe("Leap Year");
});
