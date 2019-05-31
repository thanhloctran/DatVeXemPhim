import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminDanhSachPhimComponent } from './admin-danh-sach-phim/admin-danh-sach-phim.component';
// import admin routing module
import {AdminRoutingModule} from './admin-routing.module'
@NgModule({
  declarations: [AdminComponent, AdminDanhSachPhimComponent],
  imports: [
    CommonModule,AdminRoutingModule
  ]
})
export class AdminModule { }
