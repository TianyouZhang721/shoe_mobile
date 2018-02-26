import { Component, OnInit } from '@angular/core';
import { IndexService } from '../../service/index.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  banner: SwiperOptions = {
    effect : 'fade',
    loop : true,
    pagination : '.swiper-pagination',
    paginationType : 'bullets',
    fade: {
      crossFade: false,
    }
  };
  bannerList: any;
  topicList: any;
  todayCommendMessage: any;
  todayCommendComment: any = [];
  todayCommendReply: any;
  todayCommendImgs: any = [];

  constructor(
    private indexService: IndexService,
  ) { }

  ngOnInit() {
    this.getIndexBanner();
    this.getIndexTopic();
    this.getIndexTodayCommend();
  }
  getIndexBanner() {
      this.indexService.getIndexBanner().subscribe(
        obj => {
          this.bannerList = obj;
        }
      );
  }

  // 获取推荐话题
  getIndexTopic() {
    this.indexService.getIndexTopic().subscribe(
      obj => {
        this.topicList = obj;
      }
    );
  }
  // 获取今日推荐
  getIndexTodayCommend() {
    this.indexService.getIndexTodayCommend().subscribe(
      obj => {
        this.todayCommendMessage = obj['message'];
        // this.todayCommendComment = obj["comment"];
        this.todayCommendReply = obj['reply'];
        for (let i = 0; i < obj['message'].length; i++) {
          this.todayCommendImgs.push(JSON.parse(obj['message'][i].imgs));
        }
        for (let i = 0; i < obj['comment'].length; i++) {
          this.todayCommendComment.push(JSON.parse(obj['comment'][i].comment));
        }
      }
    );
  }
}
