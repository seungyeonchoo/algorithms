// 1. 배열을 오른쪽으로 1만큼 회전시키는 함수 arr_rotate()를 작성하라

const arr_rotate = (arr) => {
	let temp = arr[arr.length - 1];
	for (let i = 1; i < arr.length; i++) {
		arr[arr.length - i] = arr[arr.length - i - 1];
	}
	arr[0] = temp;
	return arr;
};

const arr = [1, 2, 3, 4, 5];
const rotatedArr = arr_rotate(arr);
console.log(rotatedArr, arr);

// 2. 배열의 일부를 오른쪽으로 1만큼 회전시키는 함수 arr_partial_rotate()를 작성하라

const arr_partial_rotate = (arr, s, e) => {
	let temp = arr[e];
	for (let i = e; i > s; i--) {
		arr[i] = arr[i - 1];
	}
	arr[s] = temp;
	return arr;
};

const arr2 = [9, 10, 11, 12, 13, 14];
const partialRotatedArr = arr_partial_rotate(arr2, 1, 3);
console.log(partialRotatedArr);

// 3. 배열을 왼쪽으로 1만큼 회전시키는 함수 arr_left_rotate()를 작성하라

const arr_left_rotate = (arr) => {
	let temp = arr[0];
	for (let i = 0; i < arr.length - 1; i++) {
		arr[i] = arr[i + 1];
	}
	arr[arr.length - 1] = temp;
	return arr;
};

const arr3 = [5, 4, 3, 2, 1];
const leftRotatedArr = arr_left_rotate(arr3);
console.log(leftRotatedArr);

// 4. 배열의 일부를 왼쪽으로 1만큼 회전시키는 함수 arr_left_partial_rotate()를 작성하라

const arr_left_partial_rotate = (arr, s, e) => {
	let temp = arr[s];
	for (let i = s; i < e; i++) {
		arr[i] = arr[i + 1];
	}
	arr[e] = temp;
	return arr;
};

const arr4 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const partialLeftRotatedArr = arr_left_partial_rotate(arr4, 3, 6);
console.log(partialLeftRotatedArr);
