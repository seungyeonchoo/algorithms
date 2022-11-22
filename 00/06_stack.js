// 1. 배열을 이용해 스택을 작성하라

class Stack {
	stack = [];
	push = (value) => {
		this.stack.push(value);
	};
	pop = () => {
		this.stack.pop();
	};
}

const stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.push(5);
console.log(stack1.stack);
stack1.pop();
stack1.pop();
stack1.pop();
stack1.pop();
console.log(stack1.stack);
