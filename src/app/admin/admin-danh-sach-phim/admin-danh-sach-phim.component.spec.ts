import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDanhSachPhimComponent } from './admin-danh-sach-phim.component';

describe('AdminDanhSachPhimComponent', () => {
  let component: AdminDanhSachPhimComponent;
  let fixture: ComponentFixture<AdminDanhSachPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDanhSachPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDanhSachPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
