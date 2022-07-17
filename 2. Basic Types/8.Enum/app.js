/*
    An enum is a group of named constant values. Enum stands for enumerated type.
    
    To define an enum, you follow these steps:
        * First, use the enum keyword followed by the name of the enum.
        * Then, define constant values for the enum.
*/
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
function isItSummer(month) {
    var isSummer;
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
var Months;
(function (Months) {
    Months[Months["Jan"] = 1] = "Jan";
    Months[Months["Feb"] = 2] = "Feb";
    Months[Months["Mar"] = 3] = "Mar";
    Months[Months["Apr"] = 4] = "Apr";
    Months[Months["May"] = 5] = "May";
    Months[Months["Jun"] = 6] = "Jun";
    Months[Months["Jul"] = 7] = "Jul";
    Months[Months["Aug"] = 8] = "Aug";
    Months[Months["Sep"] = 9] = "Sep";
    Months[Months["Oct"] = 10] = "Oct";
    Months[Months["Nov"] = 11] = "Nov";
    Months[Months["Dec"] = 12] = "Dec";
})(Months || (Months = {}));
// In this example, the Jan constant value takes 1 instead of 0. The Feb takes 2, and the Mar takes 3, etc.
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["draft"] = 0] = "draft";
    ApprovalStatus[ApprovalStatus["submitted"] = 1] = "submitted";
    ApprovalStatus[ApprovalStatus["approved"] = 2] = "approved";
    ApprovalStatus[ApprovalStatus["rejected"] = 3] = "rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
var request = {
    id: 1,
    status: ApprovalStatus.approved,
    description: "Please approve this request"
};
if (request.status === ApprovalStatus.approved) {
    console.log("The request has been approved!");
}
else if (request.status === ApprovalStatus.rejected) {
    console.log("The request has been rejected!");
}
