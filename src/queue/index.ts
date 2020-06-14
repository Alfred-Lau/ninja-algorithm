export interface IQueue {}
export class Queue {
  private source: any[];
  constructor() {
    this.source = [];
  }

  enqueue(data: any): number {
    this.source.push(data);
    return this.source.length;
  }

  dequeue() {
    return this.source.shift();
  }

  length() {
    return this.source.length;
  }
}

const queue01 = new Queue();
queue01.enqueue(100);
console.log(queue01.length());
console.log(queue01.dequeue());

/* 什么场景使用队列：先进先出 */
