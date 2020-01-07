import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/Student',         title: 'Danh sách sinh viên',        icon:'nc-bullet-list-67',    class: '' },
    { path: '/add-student',          title: 'Thêm sinh viên',      icon:'nc-single-02',  class: '' },
    { path: '/Checkin',    title: 'Danh sách checkin',        icon:'nc-caps-small', class: '' },
    { path: '/Duyet', title: 'Duyệt',     icon:'nc-check-2',    class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
