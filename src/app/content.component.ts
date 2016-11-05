import {Component, OnInit, Input} from '@angular/core';
let styles = String(require('./content.component.css'));

@Component({
    selector: 'content',
    templateUrl: './content.component.html',
    styleUrls: [styles]
})
export class ContentComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {

    }


}