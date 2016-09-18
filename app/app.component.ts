import {Component} from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {HttpTestComponent}  from './http-test.component';
@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
        <http-test></http-test>
    `,
    directives:[HttpTestComponent]
})
export class AppComponent { }