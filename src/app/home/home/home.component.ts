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

  constructor(
    private indexService: IndexService,
  ) { }

  ngOnInit() {
    this.getIndexTalk();
  }
  getIndexTalk() {
      this.indexService.getIndexTalk().subscribe(
        obj => {
          console.log(obj);
        }
      );
  }
}
