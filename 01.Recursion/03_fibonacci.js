// 1. 피보나치 수열의 n번째 항을 계산하여 반환하는 함수를 작성하라

const fibonacci = (n) => {
	if (n === 1 || n === 2) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(20));

// 2. memoization을 적용한 피보나치 함수를 작성하라

const memoFibo = (n) => {
	let memo = 0;
	if (n === 1 || n === 2) return (memo = 1);
	return (memo = fibonacci(n - 1) + fibonacci(n - 2));
};

console.log(memoFibo(50));
