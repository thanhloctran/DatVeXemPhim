import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { HomeComponent } from './home.component';
import { ChiTietPhimComponent } from './danh-sach-phim/chi-tiet-phim/chi-tiet-phim.component';
import { PhongVeComponent } from './phong-ve/phong-ve.component';

const routes: Routes = [
    //trang home
    {
        path: "",
        component: HomeComponent,
        children: [
            // Trang chu
            {
                path: "",
                component: TrangChuComponent
            },
            //Danh sach phim
            {
                path: "danhsachphim",
                component: DanhSachPhimComponent
            },
            //trang chi tiết phim
            {  //C1
                path:"chi-tiet-phim/:id", //truyen tham tham so id theo phim 
                component:ChiTietPhimComponent
            },
            // {  //C2
            //     path:"chi-tiet-phim", //truyen tham tham so id theo phim 
            //     component:ChiTietPhimComponent
            // },
            //Tin tuc
            {
                path: "tintuc",
                component: TinTucComponent
            },

            //phong ve 
            {
                path:"phongve/:maLichChieu",
                loadChildren: "./phong-ve/phong-ve.module#PhongVeModule"
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
