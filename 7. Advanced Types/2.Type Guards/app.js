//          "typeof"
function add(a, b) {
    // using 'typeof' keyword for checking the type of a variable
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("Invalid arguments. Both arguments must be either numbers or strings.");
}
//          "instanceof" & "in"
class Customer {
    isCreditAllowed() {
        // ...
        return true;
    }
}
class Supplier {
    isInShortList() {
        // ...
        return true;
    }
}
function signContract(partner) {
    let message;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed()
            ? "Sign a new contract with the customer"
            : "Credit issue";
    }
    // if (partner instanceof Supplier)
    else {
        // must be Supplier since there are only 2 options.
        message = partner.isInShortList()
            ? "Sign a new contract with the supplier"
            : "Need to evaluate further";
    }
    // another example is by using 'in' type guard :
    //   if ("isCreditAllowed" in partner) { // if property "isCreditAllowed" exists in 'partner' object
    //     message = partner.isCreditAllowed()
    //       ? "Sign a new contract with the customer"
    //       : "Credit issue";
    //   } else {
    //     // must be Supplier
    //     message = partner.isInShortList()
    //       ? "Sign a new contract the supplier "
    //       : "Need to evaluate further";
    //   }
    return message;
}
//      User-defined Type Guards :
// A user-defined type guard function is a function that simply returns arg is aType
function isCustomer(partner) {
    return partner instanceof Customer;
}
console.log(isCustomer(new Customer()));
function signAContract(partner) {
    let message;
    if (!isCustomer(partner)) {
        message = partner.isCreditAllowed()
            ? "Sign a new contract with the customer"
            : "Credit issue";
    }
    else {
        // must be Supplier
        message = partner.isInShortList()
            ? "Sign a new contract with the supplier"
            : "Need to evaluate further";
    }
    return message;
}
console.log(signAContract(new Customer()));
