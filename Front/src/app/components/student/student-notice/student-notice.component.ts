import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../../../services/notice.service';
import { Notice } from '../../../shared/notice.model';

declare var N: any;

@Component({
  selector: 'app-student-notice',
  templateUrl: './student-notice.component.html',
  styleUrls: ['./student-notice.component.scss'],
  providers: [ NoticeService ]
})
export class StudentNoticeComponent implements OnInit {

  constructor(private noticeService: NoticeService) { }

  ngOnInit() {
    this.refreshNoticeList();
  }

  refreshNoticeList() {
    this.noticeService.getNoticeList().subscribe((res) => {
      this.noticeService.notices = res as Notice[];
    });
  }

}
