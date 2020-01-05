import { NodeComponent } from "../node/node.component";
import { Component } from "@angular/core";

@Component({
    selector: '[linkComponent]',
    template: ``
})
// Implementing SimulationLinkDatum interface into our custom Link class
export class LinkComponent {
    // Optional - defining optional implementation properties - required for relevant typing assistance
    index?: number;
    
    // Must - defining enforced implementation properties
    source:  string | number;
    target: string | number;
    
    constructor(){;
    }
}