import { Component, OnInit } from '@angular/core';
import {PhimService} from './../../../_core/services/phim.service';
import {QuanLyPhimService} from './../../../_core/services/quan-ly-phim.service'; //import service quan ly phim service de lay du lieu tu server

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {
  danhSachPhim = [];

  constructor(private phimService : PhimService , private quanLyPhimService : QuanLyPhimService) { }

  ngOnInit() {
    this.getDanhSachPhim();
  }
  getDanhSachPhim(){
    // lay du lieu tu Phimservice
    // this.danhSachPhim = this.phimService.layDanhSachPhim();

    // lay du lieu tu server
    this.quanLyPhimService.layDanhSachPhim().subscribe((data: any) => {
      // console.log(data);
      this.danhSachPhim =data;
    }) //data: bien 
  }

}
