import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'my-b',
    template: `
        <h1>这是第二个内容区域</h1>
    `
})
export class BComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}