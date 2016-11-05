import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
let styles = String(require('./dynamic-menu.component.css'));

@Component({
    selector: 'dynamic-menu',
    templateUrl: './dynamic-menu.component.html',
    styleUrls: [styles]
})
export class DynamicMenu implements OnInit {

    availableMenus: any[];
    userType: string;
    username: string;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.userType = "用户类型";
        this.username = "用户名";
        this.initMenu();
    }

    initMenu(): void {
        this.availableMenus = [{label:'一级目录', url:'/'},{label:'二级目录', url:'/b'}];
    }
}