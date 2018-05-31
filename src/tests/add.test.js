const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test('should add two numbers', () => {
	const result = add(3, 4);
	expect(result).toBe(7);
});
test('Should return a greeting from name', () => {
	const result = generateGreeting('Francisco');
	expect(result).toBe('Hello Francisco!');
});