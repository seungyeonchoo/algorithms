// 1. 정수 배열에서 가장 큰 값을 반환하는 함수 max_arr()을 작성하라.

const max_arr = (arr) => {
	let max = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) max = arr[i];
	}

	return max;
};

const arr = [1, 6, 3, 2, 55, 21, 9];
console.log(max_arr(arr));
