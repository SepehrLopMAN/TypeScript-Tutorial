/*

 *  interface interfaceName<T> {
 *      // ...
 *  }

 *  interface interfaceName<U,V> {
 *      // ...
 *  }

*/

interface Pair<K, V> {
  key: K;
  value: V;
}

let month: Pair<string, number> = {
  key: "Jan",
  value: 1,
};

console.log(month); // { key: 'Jan', value: 1 }

//      Generic interfaces that describe methods :

interface Collection<T> {
  add(o: T): void;
  remove(o: T): void;
}
class List<T> implements Collection<T> {
  private items: T[] = [];

  public add(o: T): void {
    this.items.push(o);
  }

  public remove(o: T): void | never {
    if (o in this.items) {
      this.items.splice(this.items.indexOf(o), 1);
      return;
    }
    throw new Error(`${o} does not exits in the List!`);
  }
}
let list: List<number> = new List<number>();

for (let i = 0; i < 10; i++) {
  list.add(i);
}

console.log(list); // List { items: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] }
list.remove(5);
console.log(list); // List { items: [ 0, 1, 2, 3, 4, 6, 7, 8, 9 ] }

//      Generic interfaces that describe index types :

interface Options<T> {
  [name: string]: T;
}

let inputOptions: Options<boolean> = {
  disabled: false,
  visible: true,
};

console.log(inputOptions); // { disabled: false, visible: true }
