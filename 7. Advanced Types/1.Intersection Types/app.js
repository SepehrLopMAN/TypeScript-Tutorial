var employee = {
    id: 100,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(408)-897-5684"
};
var customer = {
    name: "ABC Inc.",
    credit: 1000000,
    email: "sales@abcinc.com",
    phone: "(408)-897-5735"
};
var manager = {
    id: 100,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(408)-897-5684",
    credit: 1000
};
// NOTICE: If 'name' property in both "BusinessPartner" & "Identity" types do not have
// the same type(here both are string), then you will have an error.
// When you intersect types, the order of the types doesn’t matter.
// type typeAB = typeA & typeB;
// type typeBA = typeB & typeA;
// both types work the same!
