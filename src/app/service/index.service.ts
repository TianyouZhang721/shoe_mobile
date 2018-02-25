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
    getIndexBanner(): Observable<any> {
        return this.http.get(`http://127.0.0.1/getShoes/src/data/routes/index/getIndexBanner.php`);
    }
    // 获取首页推荐话题
    getIndexTopic(): Observable<any> {
        return this.http.get(`http://127.0.0.1/getShoes/src/data/routes/index/getIndexTopic.php`)
    }
    // 获取首页今日推荐
    getIndexTodayCommend(): Observable<any> {
        return this.http.get(`http://127.0.0.1/getShoes/src/data/routes/index/getIndexTopicCommend.php`)
    }
}
