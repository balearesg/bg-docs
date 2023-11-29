export const data = Array.from(Array(100)).map((_, index) => {
	return {
		user: `lorem ipsum ${index + 1}`,
		email: `lorem ipsum ${index + 1}`,
		id: '1',
		lastName: `lorem ipsum ${index + 1}`,
	};
});
