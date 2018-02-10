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

  constructor(
    private indexService: IndexService,
  ) { }

  ngOnInit() {
    this.getIndexBanner();
    this.getIndexTopic();
  }
  getIndexBanner() {
      this.indexService.getIndexBanner().subscribe(
        obj => {
          console.log(obj);
          this.bannerList = obj;
        }
      );
  }

  //获取推荐话题
  getIndexTopic() {
    this.indexService.getIndexTopic().subscribe(
      obj => {
        console.log(obj);
        this.topicList = obj;
      }
    )
  }
}
