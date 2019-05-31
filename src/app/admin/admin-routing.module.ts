import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDanhSachPhimComponent } from './admin-danh-sach-phim/admin-danh-sach-phim.component';

const routes: Routes = [
    //admin danh sach phim
    
    {
        path:"", //trong app routing module có rồi -> de rỗng
        component: AdminComponent,
        children:[
            {
                path:"",
                component: AdminComponent
            },
            //admin danh sach phim
            {
                path:"danhsachphim",
                component: AdminDanhSachPhimComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
