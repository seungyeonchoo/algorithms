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
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);
queue1.enqueue(5);
queue1.enqueue(6);
queue1.enqueue(7);
queue1.enqueue(8);
queue1.enqueue(9);
queue1.enqueue(0);
console.log(queue1.queue);
