import checkLeapYear from "../checkLeapYear";

describe("test cases for leap years", () => {
	test("return 'Leap Year' for 2000", () => {
		const year = 2000;
		expect(checkLeapYear(year)).toBe("Leap Year");
	});
	test("return 'Leap Year' for 2008", () => {
		const year = 2008;
		expect(checkLeapYear(year)).toBe("Leap Year");
	});
	test("return 'Leap Year' for 2012", () => {
		const year = 2012;
		expect(checkLeapYear(year)).toBe("Leap Year");
	});
	test("return 'Leap Year' for 2016", () => {
		const year = 2016;
		expect(checkLeapYear(year)).toBe("Leap Year");
	});
});

describe("test cases for non leap years", () => {
	test("return 'Not Leap Year' for 1700", () => {
		const year = 1700;
		expect(checkLeapYear(year)).toBe("Not Leap Year");
	});
	test("return 'Not Leap Year' for 1800", () => {
		const year = 1800;
		expect(checkLeapYear(year)).toBe("Not Leap Year");
	});
	test("return 'Not Leap Year' for 1900", () => {
		const year = 1900;
		expect(checkLeapYear(year)).toBe("Not Leap Year");
	});
	test("return 'Not Leap Year' for 2100", () => {
		const year = 2100;
		expect(checkLeapYear(year)).toBe("Not Leap Year");
	});

	test("return 'Not Leap Year' for 2017", () => {
		const year = 2017;
		expect(checkLeapYear(year)).toBe("Not Leap Year");
	});
	test("return 'Not Leap Year' for 2018", () => {
		const year = 2018;
		expect(checkLeapYear(year)).toBe("Not Leap Year");
	});
	test("return 'Not Leap Year' for 2019", () => {
		const year = 2019;
		expect(checkLeapYear(year)).toBe("Not Leap Year");
	});
});
