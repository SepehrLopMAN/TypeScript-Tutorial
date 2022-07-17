/*
    An enum is a group of named constant values. Enum stands for enumerated type.
    
    To define an enum, you follow these steps:
        * First, use the enum keyword followed by the name of the enum.
        * Then, define constant values for the enum.
*/

enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}

console.log(isItSummer(Month.Aug)); // true
console.log(isItSummer(6)); // true

enum Months {
  Jan = 1,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}
// In this example, the Jan constant value takes 1 instead of 0. The Feb takes 2, and the Mar takes 3, etc.

enum ApprovalStatus {
  draft,
  submitted,
  approved,
  rejected,
}

const request: {
  id: number;
  status: ApprovalStatus;
  description: string;
} = {
  id: 1,
  status: ApprovalStatus.approved,
  description: "Please approve this request",
};

if (request.status === ApprovalStatus.approved) {
  console.log("The request has been approved!");
} else if (request.status === ApprovalStatus.rejected) {
  console.log("The request has been rejected!");
}
