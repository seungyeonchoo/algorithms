// 01. 두 개의 정수를 인자로 받아서 둘 중 큰 값을 반환하는 함수 getMax()와 둘 중 작은 값을 반환하는 함수 getMin()을 작성하라

const getMax = (num1, num2) => {
	if (num1 > num2) return num1;
	return num2;
};

const getMin = (num1, num2) => {
	if (num1 < num2) return num1;
	return num2;
};

console.log(getMax(212, 22));
console.log(getMin(12, 8));

// 02. 세 개의 정수를 인자로 받아서 둘 중 큰 값을 반환하는 함수 getMaxOfThree()와 getMinOfThree()를 작성하라

const getMaxOfThree = (num1, num2, num3) => {
	if (num1 > num2) {
		if (num1 > num3) return num1;
		return num3;
	}
	if (num1 < num2) {
		if (num2 > num3) return num2;
		return num3;
	}
};

const getMinOfThree = (num1, num2, num3) => {
	if (num1 < num2) {
		if (num1 < num3) return num1;
		return num3;
	}
	if (num1 > num2) {
		if (num2 < num3) return num2;
		return num3;
	}
};

console.log(getMaxOfThree(12, 22, 2));
console.log(getMinOfThree(23, 9, 1));
