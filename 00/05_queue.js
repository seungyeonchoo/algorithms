// 1. 배열의 크기가 8인 queue를 작성하라

class Queue {
	constructor(size) {
		this.size = size;
	}
	queue = [];

	enqueue = (param) => {
		if (this.queue.length > this.size - 1) console.log("queue full!");
		else this.queue.push(param);
	};

	dequeue = () => {
		if (this.queue.size === 0) console.log("queue empty!");
		else this.queue.splice(0, 1);
	};
}

const queue1 = new Queue(8);

queue1.enqueue(1);
console.log(queue1.queue);

// 2. 원형 queue를 작성하라

class CircularQueue {
	constructor(size) {
		this.size = size + 1;
		this.head = 0; // item dequeue되는 위치
		this.tail = 0; // item enqueue되는 위치
	}

	cq = Array(this.size).fill(null);

	isEmpty = () => {
		return this.head === this.tail;
	};

	isFull = () => {
		return (this.tail + 1) % this.size === this.head;
	};

	enqueue = (item) => {
		if (this.isFull()) return false;

		this.cq[this.tail] = item;
		this.tail = (this.tail + 1) % this.size;
		return item;
	};

	dequeue = () => {
		if (this.isEmpty()) return false;

		const item = this.cq[this.head];
		this.cq[this.head] = null;
		this.head = (this.head + 1) % this.size;
		return item;
	};
}

const cq = new CircularQueue(5);
