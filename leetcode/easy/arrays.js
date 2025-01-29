class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(...value) {
    for (let i = 0; i < value.length; i++) {
      this.data[this.length] = value[i];
      this.length++;
    }
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    const firstElement = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    delete this.data[this.length];
    return firstElement;
  }

  deleteByIndex(index) {
    const indexElement = this.data[index];

    // for (let i = 0; i < this.length; i++) {
    //   if (i === index) {
    //     this.data[i] = this.data[i + 1];
    //     for (let j = index + 1; j < this.length - index; j++) {
    //       this.data[j] = this.data[j + 1];
    //     }
    //     break;
    //   }
    //   this.data[i] = this.data[i];
    // }

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.length--;
    delete this.data[this.length];
    return indexElement;
  }
}

const myNewArray = new MyArray();

myNewArray.push('pippo');
myNewArray.push('ciccio', 'zio');
myNewArray.push('mamma', 'papa');

myNewArray.deleteByIndex(0);

console.log(myNewArray);
