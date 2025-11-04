import checkLeapYear from "../checkLeapYear";
test("return 'Leap Year' for 2000", () => {
	const year = 2000;
	expect(checkLeapYear(2000)).toBe("Leap Year");
});
