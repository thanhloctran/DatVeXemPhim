import { Component, OnInit,Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.scss']
})
export class DanhSachGheComponent implements OnInit {
  @Input() seat;
  @Output() eventBook = new EventEmitter();
  trangThaiChon = false;
  constructor() { }

  ngOnInit() {
  }
  book(){
    this.trangThaiChon = !this.trangThaiChon;
    let objGhe = {
      trangThai: this.trangThaiChon,
      ghe: this.seat,
    };
    // console.log(objGhe);
    this.eventBook.emit(objGhe);
  }


}
