import { 
     Directive,
     ViewContainerRef, 
     OnInit, 
     Input, 
     TemplateRef } from '@angular/core';

// override *ngIf
@Directive({
    selector: '[appBasicCondition]'
})
export class BasicCondtionDirective implements OnInit {

    

    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

    }

    @Input() set appBasicCondition(condition: boolean) {
        if (condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        } else {
            this.vcRef.clear();
        }
    }

    ngOnInit() {

    }

}