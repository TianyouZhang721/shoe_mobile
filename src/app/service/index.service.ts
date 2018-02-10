import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { NzMessageService } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IndexService {
    constructor(private http: HttpClient ) { }
    getIndexTalk(): Observable<any> {
        return this.http.get(`127.0.0.1/dunk/shoes/data/routes/comment/addComment.php`);
    }
}
