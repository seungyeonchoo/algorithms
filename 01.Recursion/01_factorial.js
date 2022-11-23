// 1. 정수 n의 factorial을 계산하여 반환하는 함수를 작성하라.

const factorial = (num) => {
	let answer = 1;
	for (let i = 0; i < num; i++) {
		answer *= num - i;
	}
	return answer;
};

console.log(factorial(10));

// 2. 재귀적 프로그래밍을 활용해 factorial을 계산하는 함수를 작성하라.

const recursiveFactorial = (num) => {
	if (num === 1) return 1;
	else return num * recursiveFactorial(num - 1);
};

console.log(recursiveFactorial(10));
