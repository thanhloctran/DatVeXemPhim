import { Component, OnInit,ViewChildren,QueryList } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuanLyPhimService} from './../../../_core/services/quan-ly-phim.service';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';

@Component({
  selector: 'app-phong-ve',
  templateUrl: './phong-ve.component.html',
  styleUrls: ['./phong-ve.component.scss']
})
export class PhongVeComponent implements OnInit {
  @ViewChildren (DanhSachGheComponent) listSeat: QueryList<DanhSachGheComponent>;
  public maLichChieu : any;

  // baitap
  public danhSachGhe: any
  danhSachGheDaDat = [];
  // end
 

  constructor(private activatedRoute: ActivatedRoute , private quanLyPhimService:QuanLyPhimService) { }

  ngOnInit() {
    this.getParams();
    this.getChiTietPhongVe();
  }

  getParams(){
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get("maLichChieu");
  }
  getChiTietPhongVe(){
    this.quanLyPhimService.chiTietPhongVe(this.maLichChieu).subscribe((data:any)=>{
      this.danhSachGhe = data.DanhSachGhe;
      // console.log(this.danhSachGhe);
      
    });
  }

  datghe(seat){
    // console.log(seat.trangThai);
    if(seat.trangThai === true){
      this.danhSachGheDaDat.push(seat.ghe);
    }
    else{
      this.danhSachGheDaDat.splice(this.danhSachGheDaDat.findIndex(item => item.MaGhe === seat.ghe.MaGhe), 1);
    }
    
  }
  huyGhe(seat){
    this.danhSachGheDaDat.splice(this.danhSachGheDaDat.findIndex(item => item.MaGhe === seat.MaGhe), 1);
    let cancelSeat = this.listSeat.find(item => item.seat.MaGhe === seat.MaGhe);
    console.log(cancelSeat);
    cancelSeat.trangThaiChon = false;
  }

}
