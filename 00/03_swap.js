// 1. 배열과 배열의 두 원소의 위치를 인자로 받아 값을 바꾸는 swap()함수를 작성하라

const swap = (arr, i, j) => {
	let temp;
	temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
	return arr;
};

const arr = [2, 4, 1, 3, 0, 8];

const changedArr = swap(arr, 0, 2);
console.log(changedArr);
