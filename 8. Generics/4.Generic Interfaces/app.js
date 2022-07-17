/*

 *  interface interfaceName<T> {
 *      // ...
 *  }

 *  interface interfaceName<U,V> {
 *      // ...
 *  }

*/
var month = {
    key: "Jan",
    value: 1
};
console.log(month); // { key: 'Jan', value: 1 }
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (o) {
        this.items.push(o);
    };
    List.prototype.remove = function (o) {
        if (o in this.items) {
            this.items.splice(this.items.indexOf(o), 1);
            return;
        }
        throw new Error("".concat(o, " does not exits in the List!"));
    };
    return List;
}());
var list = new List();
for (var i = 0; i < 10; i++) {
    list.add(i);
}
console.log(list); // List { items: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] }
list.remove(5);
console.log(list); // List { items: [ 0, 1, 2, 3, 4, 6, 7, 8, 9 ] }
var inputOptions = {
    disabled: false,
    visible: true
};
console.log(inputOptions); // { disabled: false, visible: true }
