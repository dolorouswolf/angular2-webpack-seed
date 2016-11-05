import {Component, OnInit} from "@angular/core";

declare var $:any;
@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
})

export class FooterComponent implements OnInit{
    ngOnInit():void {
        this.fixHeight();
    }

    fixHeight():void {
        var heightWithoutNavbar = $("body > #wrapper").height() - 61;
        $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");

        var navbarHeigh = $('nav.navbar-default').height();
        var wrapperHeigh = $('#page-wrapper').height();

        if(navbarHeigh > wrapperHeigh){
            $('#page-wrapper').css("min-height", navbarHeigh + "px");
        }

        if(navbarHeigh < wrapperHeigh){
            $('#page-wrapper').css("min-height", $(window).height()  + "px");
        }

    }
}