import {Component} from 'angular2/core';
import {HttpTestService} from './http-test.service';
@Component({
    selector: 'http-test',
    template: `
        <button (click)="onTestGet()">Get Data</button>
        <p>Output:{{getData}}</p><br>
        <form role="form">
        <div ng-control-group="credentials">
        <label for="id">ID</label>
        <input
          type="text"
          #id
          id="id"
          ng-control="id"
          required>
          <br>
          <label for="firstname">FirstName</label>
        <input
          type="text"
          #firstname
          id="firstname"
          ng-control="firstname"
          required>
          <br>
          <label for="lastname">LastName</label>
        <input
          type="text"
          #lastname
          id="lastname"
          ng-control="lastname"
          required>
          <br>
          <label for="emailid">EmailID</label>
        <input
          type="text"
          #emailid
          id="emailid"
          ng-control="emailid"
          required>

          <br>
        <label for="password">Password</label>
        <input
          type="password"
          #password
          id="password"
          ng-control="password"
          required>
      </div>
      <br>
       <button (click)="onTestPost(id,firstname,lastname,emailid, password)">Post Data</button><br>

    </form>
       
        <p>Output:{{postData}}</p><br>
    `,
    providers: [HttpTestService]
})
export class HttpTestComponent {
    getData: string;
    postData: string;
    username: string;
    password: string;
    credentails : string;
    constructor (private _httpService: HttpTestService){}
    onTestGet(){
        this._httpService.getCurentTime().subscribe(
            data => this.getData = JSON.stringify(data),
            error => alert(error),
            () => console.log("Finished")
        );
    }


    onTestPost(id,firstname,lastname,emailid, password){
        this.credentails = JSON.stringify({id:id.value,firstname:firstname.value,lastname:lastname.value,emailid:emailid.value,password:password.value });
        this._httpService.postJson(this.credentails).subscribe(
            data => this.postData = JSON.stringify(data),
            error => alert(error),
            () => console.log("Finished")
        );
    }
}