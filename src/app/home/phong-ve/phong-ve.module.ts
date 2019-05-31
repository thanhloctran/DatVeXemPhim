import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhongVeComponent } from './phong-ve.component';
import { PhongVeRoutingModule } from './phong-ve-routing.module';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';

@NgModule({
  declarations: [PhongVeComponent, DanhSachGheComponent],
  exports:[PhongVeComponent,DanhSachGheComponent],
  imports: [
    CommonModule,PhongVeRoutingModule
  ]
})
export class PhongVeModule { }
