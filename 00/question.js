// 1. 배열의 원소를 모두 출력하는 printArr() 함수를 작성하라
// 1-1. for 반복문
const numArr = [1, 2, 3, 4, 5, 6, 7];

const printArr1 = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
};

// printArr1(numArr);

// 1-2, for...of 문
const printArr2 = (arr) => {
	for (const el of arr) {
		console.log(el);
	}
};

// printArr2(numArr);

// 2. 정수 배열의 모든 값이 k이면 1을, 아니면 0으르 반환하는 allIs() 함수를 작성하라.

const num1 = [4, 4, 4, 4, 4, 4];
const num2 = [3, 3, 2, 3, 3, 3];

const allIs = (arr, k) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== k) return 0;
	}
	return 1;
};

// console.log(allIs(num1, 4));
// console.log(allIs(num2, 3));

// 3. 정수를 입력받은 후 이진수로 변환하여 1의 개수를 세는 프로그램을 작성하라.

const countOne = (num) => {
	const binaryNum = num.toString(2);
	let count = 0;
	for (let i = 0; i < binaryNum.length; i++) {
		if (binaryNum[i] === "1") count += 1;
	}
	return count;
};

// const num = 8;
// console.log(num.toString(2));
// console.log(countOne(num));
