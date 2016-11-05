import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'my-a',
    template: `
        <h1>这是第一个内容区域</h1>
    `
})
export class AComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}