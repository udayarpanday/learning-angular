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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var hello = "world";
hello = "ts";
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Udaya", "Panday"));
var user = {
    name: "Udaya",
    age: 20,
    getMessage: function () {
        return "Hello" + name;
    }
};
var user2 = {
    name: "Udaya",
    getMessage: function () {
        return "Hello" + name;
    }
};
console.log(user.getMessage());
var userName = 'Sus';
var pageName = "1";
var errorMessage = null;
var users = null;
var PopularTags = ['Sus'];
var dragonsTags = 'Sus';
var doAnything = function () {
    console.log('J');
};
// const doEverything=():never=>{
//     console.log('J')
// }
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
var s2 = vUnknown;
var someEle = document.querySelector(".foo");
console.log(someEle.value);
someEle.addEventListener('blur', function (event) {
    var target = event.target;
    console.log(target.value);
});
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unChangeName = firstName;
    }
    // changeUnchangablename():void{
    //     this.unChangeName='change'
    // }
    User.prototype.getFullName = function () {
        return this.firstName;
    };
    User.maxAge = 50;
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function (editor) {
        return this.editor;
    };
    return Admin;
}(User));
var admin = new Admin("foo", 'bar');
var usersa = new User('Udaya', "Panday");
var addId = function (obj) {
    var id = Math.random().toString(16);
    var age = Math.random();
    return __assign(__assign({}, obj), { id: id, age: age });
};
var userId = {
    name: "Udaya",
    phoneNumber: {
        meta: '12123'
    }
};
var userId2 = {
    name: "Udaya",
    phoneNumber: ["1", '2']
};
var result = addId(userId);
