import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Headers} from 'angular2/http';
@Injectable()
export class HttpTestService{
    constructor(private _http:Http){ }

    getCurentTime(){
        var headers = new Headers();
        headers.append('Authorization','Basic bashe64kermit:kermit');
        headers.append('Content-Type','application/json');
        headers.append('Access-Control-Allow-Origin', '*');
headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
headers.append('Access-Control-Allow-Headers',' Origin, Content-Type, X-Auth-Token');
        return this._http.get('http://localhost:8080/activiti-rest/service/identity/users/fozzie',{headers:headers})
        .map(res => res.json());
    }

    postJson(formValues){
       // var json = JSON.stringify({var1:'test',var2:'same'});
        var params = 'json='+formValues;
        console.log(params);
        var headers = new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('http://validate.jsontest.com',params,{headers:headers})
        .map(res => res.json());
    }
}