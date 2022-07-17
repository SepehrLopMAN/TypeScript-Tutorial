/*
 *  interface A {
 *      a(): void
 *  }
 *
 *  interface B extends A {
 *      b(): void
 *  }
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mail = /** @class */ (function () {
    function Mail() {
    }
    Mail.prototype.later = function (email, after) {
        console.log("Send email to ".concat(email, " in ").concat(after, " ms."));
        return true;
    };
    Mail.prototype.send = function (email) {
        console.log("Sent email to ".concat(email, " just now. "));
        return true;
    };
    Mail.prototype.queue = function (email) {
        console.log("Queue an email to ".concat(email, "."));
        return true;
    };
    return Mail;
}());
//      Extending multiple interfaces :
/*
 *  interface C {
 *      c(): void
 *  }
 *
 *  interface D extends B, C {
 *      d(): void
 *  }
 */
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.enable = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.enable = function () { };
    return TextBox;
}(Control));
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Label;
}(Control));
// class Chart implements StatefulControl {
//   enable() {}
// }
// Error: cannot implement
// because the 'state' from 'Control' class that is extended in 'StatefulControl' interface
// //  is not going to be defined in "Chart" class
