// 1. 이항계수를 구하는 함수를 작성하라

const binomial = (n, r) => {
	if (r === 0 || r === n) return 1;
	return binomial(n - 1, r - 1) + binomial(n - 1, r);
};

// console.log(binomial(50, 20));

// 2. 이항계수를 함수 binomial에서 중복 계산을 없앤 함수를 작성하라.

const memo = (n, r) => {
	const m = Array.from(Array(35), () => Array(35).fill(0));

	const binomial1 = (n1, r1) => {
		if (m[n1][r1] > 0) return m[n1][r1];
		if (r === 0 || r === n1) return (m[n1][r1] = 1);
		return (m[n1][r1] = binomial(n1 - 1, r1 - 1) + binomial(n1 - 1, r1));
	};

	return binomial1(n, r);
};
console.log(memo(33, 19));
