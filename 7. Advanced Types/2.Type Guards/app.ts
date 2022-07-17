//          "typeof"

type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
  // using 'typeof' keyword for checking the type of a variable
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }

  throw new Error(
    "Invalid arguments. Both arguments must be either numbers or strings."
  );
}

//          "instanceof" & "in"

class Customer {
  isCreditAllowed(): boolean {
    // ...
    return true;
  }
}

class Supplier {
  isInShortList(): boolean {
    // ...
    return true;
  }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner): string {
  let message: string;
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

function isCustomer(partner: any): partner is Customer {
  return partner instanceof Customer;
}

function signAContract(partner: BusinessPartner): string {
  let message: string;
  if (isCustomer(partner)) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  } else {
    // must be Supplier
    message = partner.isInShortList()
      ? "Sign a new contract with the supplier"
      : "Need to evaluate further";
  }

  return message;
}
