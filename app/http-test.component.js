System.register(['angular2/core', './http-test.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_test_service_1;
    var HttpTestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_test_service_1_1) {
                http_test_service_1 = http_test_service_1_1;
            }],
        execute: function() {
            HttpTestComponent = (function () {
                function HttpTestComponent(_httpService) {
                    this._httpService = _httpService;
                }
                HttpTestComponent.prototype.onTestGet = function () {
                    var _this = this;
                    this._httpService.getCurentTime().subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
                };
                HttpTestComponent.prototype.onTestPost = function (id, firstname, lastname, emailid, password) {
                    var _this = this;
                    this.credentails = JSON.stringify({ id: id.value, firstname: firstname.value, lastname: lastname.value, emailid: emailid.value, password: password.value });
                    this._httpService.postJson(this.credentails).subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
                };
                HttpTestComponent = __decorate([
                    core_1.Component({
                        selector: 'http-test',
                        template: "\n        <button (click)=\"onTestGet()\">Get Data</button>\n        <p>Output:{{getData}}</p><br>\n        <form role=\"form\">\n        <div ng-control-group=\"credentials\">\n        <label for=\"id\">ID</label>\n        <input\n          type=\"text\"\n          #id\n          id=\"id\"\n          ng-control=\"id\"\n          required>\n          <br>\n          <label for=\"firstname\">FirstName</label>\n        <input\n          type=\"text\"\n          #firstname\n          id=\"firstname\"\n          ng-control=\"firstname\"\n          required>\n          <br>\n          <label for=\"lastname\">LastName</label>\n        <input\n          type=\"text\"\n          #lastname\n          id=\"lastname\"\n          ng-control=\"lastname\"\n          required>\n          <br>\n          <label for=\"emailid\">EmailID</label>\n        <input\n          type=\"text\"\n          #emailid\n          id=\"emailid\"\n          ng-control=\"emailid\"\n          required>\n\n          <br>\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\"\n          #password\n          id=\"password\"\n          ng-control=\"password\"\n          required>\n      </div>\n      <br>\n       <button (click)=\"onTestPost(id,firstname,lastname,emailid, password)\">Post Data</button><br>\n\n    </form>\n       \n        <p>Output:{{postData}}</p><br>\n    ",
                        providers: [http_test_service_1.HttpTestService]
                    }), 
                    __metadata('design:paramtypes', [http_test_service_1.HttpTestService])
                ], HttpTestComponent);
                return HttpTestComponent;
            }());
            exports_1("HttpTestComponent", HttpTestComponent);
        }
    }
});
//# sourceMappingURL=http-test.component.js.map